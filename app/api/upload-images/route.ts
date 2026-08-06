// 路径: app/api/upload-images/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { humanRights } from "@/data/human-rights";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";
import { britishEmpire } from "@/data/british-empire";
import { usCivilRights } from "@/data/us-civil-rights";
import asia from "@/data/asia";
import asiaEconomicBoom from "@/data/asia-economic-boom";
import weatherClimate from "@/data/weather-climate";
import tourism from "@/data/tourism";
import { heatingCooling } from "@/data/heating-cooling";
import { chemicalReactions } from "@/data/chemical-reactions";
import { healthDisease } from "@/data/health-disease";
import { Topic, LessonSection } from "@/data/types";

type ImageTask = {
  topicSlug: string;
  lessonNum: number;
  sourceUrl: string;
  filename: string;
};

/** Build the Wikimedia source URL from a filename */
function wikimediaUrl(filename: string): string {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

/** Collect all image tasks from topic data (supports both url and wikimediaFile) */
function collectImageTasks(topics: Topic[]): ImageTask[] {
  const tasks: ImageTask[] = [];
  for (const topic of topics) {
    for (const lesson of topic.lessons) {
      for (const section of lesson.sections) {
        if (section.type !== "image") continue;

        let sourceUrl: string | undefined;
        let ext = "jpg";

        if (section.wikimediaFile) {
          sourceUrl = wikimediaUrl(section.wikimediaFile);
          const rawExt = section.wikimediaFile.split(".").pop() ?? "jpg";
          ext = ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(
            rawExt.toLowerCase()
          )
            ? rawExt.toLowerCase()
            : "jpg";
        } else if (section.url) {
          if (
            section.url.startsWith("/") ||
            section.url.includes("vercel-storage.com")
          )
            continue;
          sourceUrl = section.url;
          const urlPath = section.url.split("?")[0];
          const rawExt = urlPath.split(".").pop() ?? "jpg";
          ext = ["jpg", "jpeg", "png", "webp", "gif"].includes(
            rawExt.toLowerCase()
          )
            ? rawExt.toLowerCase()
            : "jpg";
        }

        if (!sourceUrl) continue;

        tasks.push({
          topicSlug: topic.slug,
          lessonNum: lesson.num,
          sourceUrl,
          filename: `${topic.slug}-lesson${lesson.num}.${ext}`,
        });
      }
    }
  }
  return tasks;
}

async function uploadOne(task: ImageTask): Promise<{
  ok: boolean;
  blobUrl?: string;
  detail: string;
  rateLimited?: boolean;
}> {
  const res = await fetch(task.sourceUrl, {
    redirect: "follow",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
      Referer: "https://commons.wikimedia.org/",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  if (res.status === 429) {
    const retryAfter = res.headers.get("retry-after") ?? "5";
    return {
      ok: false,
      rateLimited: true,
      detail: `rate limited (429), retry after ${retryAfter}s`,
    };
  }

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

/** Return only tasks whose lesson does NOT yet have a Blob URL in the database */
async function getPendingTasks(
  topics: Topic[],
  allTasks: ImageTask[]
): Promise<ImageTask[]> {
  const doneSet = new Set<string>();

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
          s.url.includes("vercel-storage.com")
        ) {
          doneSet.add(`${topic.slug}:${row.num}`);
        }
      }
    }
  }

  return allTasks.filter(
    (t) => !doneSet.has(`${t.topicSlug}:${t.lessonNum}`)
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showStatus = searchParams.get("status") === "1";

  const topics: Topic[] = [
    humanRights, atlanticSlaveTrade, britishEmpire, usCivilRights,
    asia, asiaEconomicBoom, weatherClimate, tourism,
    heatingCooling,
    chemicalReactions,
    healthDisease,
  ];
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

  // ── Force mode: ?force=topicSlug:lessonNum ──
  const forceParam = searchParams.get("force");
  if (forceParam) {
    const [forceSlug, forceNumStr] = forceParam.split(":");
    const forceNum = parseInt(forceNumStr, 10);
    const task = allTasks.find(
      (t) => t.topicSlug === forceSlug && t.lessonNum === forceNum
    );
    if (!task) {
      return NextResponse.json(
        { success: false, error: `Task not found: ${forceParam}` },
        { status: 404 }
      );
    }
    try {
      const result = await uploadOne(task);
      return NextResponse.json({
        success: result.ok,
        rateLimited: result.rateLimited ?? false,
        filename: task.filename,
        blobUrl: result.blobUrl,
        detail: result.detail,
        forced: true,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return NextResponse.json({ success: false, error: msg }, { status: 500 });
    }
  }

  // ── Upload ONE pending image ──
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
      rateLimited: result.rateLimited ?? false,
      filename: task.filename,
      blobUrl: result.blobUrl,
      detail: result.detail,
      remaining: result.ok ? pendingTasks.length - 1 : pendingTasks.length,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        success: false,
        error: msg,
        filename: task.filename,
        remaining: pendingTasks.length,
      },
      { status: 500 }
    );
  }
}
