import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";
import { britishEmpire } from "@/data/british-empire";
import { usCivilRights } from "@/data/us-civil-rights";
import { Topic, LessonSection } from "@/data/types";

type ImageTask = {
  topicSlug: string;
  lessonNum: number;
  sourceUrl: string;
  filename: string;
};

function collectImageTasks(topics: Topic[]): ImageTask[] {
  const tasks: ImageTask[] = [];
  for (const topic of topics) {
    for (const lesson of topic.lessons) {
      for (const section of lesson.sections) {
        if (section.type === "image" && section.url) {
          if (
            section.url.startsWith("/") ||
            section.url.includes("vercel-storage.com")
          )
            continue;
          const urlPath = section.url.split("?")[0];
          const rawExt = urlPath.split(".").pop() ?? "jpg";
          const ext = ["jpg", "jpeg", "png", "webp", "gif"].includes(
            rawExt.toLowerCase()
          )
            ? rawExt.toLowerCase()
            : "jpg";
          tasks.push({
            topicSlug: topic.slug,
            lessonNum: lesson.num,
            sourceUrl: section.url,
            filename: `${topic.slug}-lesson${lesson.num}.${ext}`,
          });
        }
      }
    }
  }
  return tasks;
}

// ─── Fetch with retry on 429 ──────────────────────────────────────────────────

async function fetchWithRetry(
  url: string,
  maxRetries = 3
): Promise<Response> {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
    Referer: "https://commons.wikimedia.org/",
    "Accept-Language": "en-US,en;q=0.9",
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const res = await fetch(url, { redirect: "follow", headers });

    if (res.status === 429) {
      // Rate limited — wait and retry
      const retryAfter = res.headers.get("retry-after");
      const waitMs = retryAfter
        ? parseInt(retryAfter) * 1000
        : attempt * 3000; // 3s, 6s, 9s back-off
      console.log(
        `429 on attempt ${attempt}, waiting ${waitMs}ms before retry`
      );
      await new Promise((r) => setTimeout(r, waitMs));
      continue;
    }

    return res;
  }

  // Final attempt after retries exhausted
  return fetch(url, { redirect: "follow", headers });
}

// ─── Upload one image ─────────────────────────────────────────────────────────

async function uploadOne(task: ImageTask): Promise<{
  ok: boolean;
  blobUrl?: string;
  detail: string;
}> {
  const res = await fetchWithRetry(task.sourceUrl);

  if (!res.ok) {
    return { ok: false, detail: `fetch failed: HTTP ${res.status}` };
  }

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const buffer = await res.arrayBuffer();

  const { url: blobUrl } = await put(task.filename, buffer, {
    access: "public",
    contentType,
    addRandomSuffix: false,
  });

  // Update the URL in the database
  await sql`
    UPDATE lessons
    SET sections = (
      SELECT jsonb_agg(
        CASE
          WHEN elem->>'type' = 'image'
          THEN jsonb_set(elem, '{url}', ${JSON.stringify(blobUrl)}::jsonb)
          ELSE elem
        END
      )
      FROM jsonb_array_elements(sections) AS elem
    )
    WHERE num = ${task.lessonNum}
    AND topic_id = (SELECT id FROM topics WHERE slug = ${task.topicSlug})
  `;

  return {
    ok: true,
    blobUrl,
    detail: `${buffer.byteLength} bytes → ${blobUrl}`,
  };
}

// ─── GET /api/upload-images ───────────────────────────────────────────────────

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showStatus = searchParams.get("status") === "1";
  const uploadAll = searchParams.get("all") === "1";

  const topics: Topic[] = [atlanticSlaveTrade, britishEmpire, usCivilRights];
  const allTasks = collectImageTasks(topics);

  // ── Status mode ──
  if (showStatus) {
    const results: {
      topic: string;
      lesson: number;
      url: string;
      isBlob: boolean;
    }[] = [];
    for (const topic of topics) {
      const { rows } = await sql`
        SELECT num, sections FROM lessons
        WHERE topic_id = (SELECT id FROM topics WHERE slug = ${topic.slug})
        ORDER BY num
      `;
      for (const row of rows) {
        const sections = row.sections as LessonSection[];
        for (const s of sections) {
          if (s.type === "image" && s.url) {
            results.push({
              topic: topic.slug,
              lesson: row.num,
              url: s.url,
              isBlob: s.url.includes("vercel-storage.com"),
            });
          }
        }
      }
    }
    const done = results.filter((r) => r.isBlob).length;
    return NextResponse.json({
      summary: `${done}/${results.length} images uploaded to Blob`,
      images: results,
    });
  }

  // ── Upload all pending (with delays between each to avoid rate limiting) ──
  if (uploadAll) {
    const log: string[] = [];
    const pending = await getPendingTasks(topics, allTasks);

    for (const task of pending) {
      log.push(`Uploading: ${task.filename}`);
      try {
        const result = await uploadOne(task);
        log.push(result.ok ? `  ✓ ${result.detail}` : `  ✗ ${result.detail}`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        log.push(`  ✗ error: ${msg}`);
      }
      // Small delay between uploads to avoid rate limiting
      await new Promise((r) => setTimeout(r, 1000));
    }

    return NextResponse.json({
      success: true,
      uploaded: pending.length,
      log,
    });
  }

  // ── Default: upload ONE pending image ──
  const pendingTasks = await getPendingTasks(topics, allTasks);

  if (pendingTasks.length === 0) {
    return NextResponse.json({
      success: true,
      message: "All images already uploaded to Blob!",
      remaining: 0,
    });
  }

  const task = pendingTasks[0];
  try {
    const result = await uploadOne(task);
    return NextResponse.json({
      success: result.ok,
      filename: task.filename,
      blobUrl: result.blobUrl,
      detail: result.detail,
      remaining: pendingTasks.length - 1,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        success: false,
        error: msg,
        filename: task.filename,
        remaining: pendingTasks.length - 1,
      },
      { status: 500 }
    );
  }
}

// ─── Helper: get pending tasks from DB ───────────────────────────────────────

async function getPendingTasks(
  topics: Topic[],
  allTasks: ImageTask[]
): Promise<ImageTask[]> {
  const pending: ImageTask[] = [];
  for (const topic of topics) {
    const { rows } = await sql`
      SELECT num, sections FROM lessons
      WHERE topic_id = (SELECT id FROM topics WHERE slug = ${topic.slug})
      ORDER BY num
    `;
    for (const row of rows) {
      const sections = row.sections as LessonSection[];
      for (const s of sections) {
        if (
          s.type === "image" &&
          s.url &&
          !s.url.includes("vercel-storage.com") &&
          !s.url.startsWith("/")
        ) {
          const match = allTasks.find(
            (t) => t.topicSlug === topic.slug && t.lessonNum === row.num
          );
          if (match) pending.push(match);
        }
      }
    }
  }
  return pending;
}
