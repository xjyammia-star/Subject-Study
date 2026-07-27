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
          ) continue;
          const urlPath = section.url.split("?")[0];
          const rawExt = urlPath.split(".").pop() ?? "jpg";
          const ext = ["jpg", "jpeg", "png", "webp", "gif"].includes(rawExt.toLowerCase())
            ? rawExt.toLowerCase() : "jpg";
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

async function uploadOne(task: ImageTask): Promise<{ ok: boolean; blobUrl?: string; detail: string }> {
  const res = await fetch(task.sourceUrl, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
      Referer: "https://commons.wikimedia.org/",
    },
  });

  if (!res.ok) return { ok: false, detail: `fetch failed: HTTP ${res.status}` };

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const buffer = await res.arrayBuffer();

  const { url: blobUrl } = await put(task.filename, buffer, {
    access: "public",
    contentType,
    addRandomSuffix: false,
  });

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

  return { ok: true, blobUrl, detail: `${buffer.byteLength} bytes → ${blobUrl}` };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showStatus = searchParams.get("status") === "1";

  const topics: Topic[] = [atlanticSlaveTrade, britishEmpire, usCivilRights];
  const allTasks = collectImageTasks(topics);

  // ── Status mode ──
  if (showStatus) {
    const results: { topic: string; lesson: number; url: string; isBlob: boolean }[] = [];
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

  // ── Upload one pending image ──
  const pendingTasks: ImageTask[] = [];
  for (const topic of topics) {
    const { rows } = await sql`
      SELECT num, sections FROM lessons
      WHERE topic_id = (SELECT id FROM topics WHERE slug = ${topic.slug})
      ORDER BY num
    `;
    for (const row of rows) {
      const sections = row.sections as LessonSection[];
      for (const s of sections) {
        if (s.type === "image" && s.url &&
            !s.url.includes("vercel-storage.com") &&
            !s.url.startsWith("/")) {
          const match = allTasks.find(
            (t) => t.topicSlug === topic.slug && t.lessonNum === row.num
          );
          if (match) pendingTasks.push(match);
        }
      }
    }
  }

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
      { success: false, error: msg, filename: task.filename, remaining: pendingTasks.length - 1 },
      { status: 500 }
    );
  }
}
