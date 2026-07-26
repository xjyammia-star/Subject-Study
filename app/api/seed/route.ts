import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createTables, insertTopic, insertLesson } from "@/lib/db";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";
import { britishEmpire } from "@/data/british-empire";
import { Topic, LessonSection } from "@/data/types";

// ─── Image upload helper ──────────────────────────────────────────────────────

async function uploadImageToBlob(
  sourceUrl: string,
  filename: string
): Promise<{ url: string; ok: boolean; detail: string }> {
  // Already a Blob URL — skip
  if (
    sourceUrl.includes("vercel-storage.com") ||
    sourceUrl.includes("public.blob.vercel-storage.com")
  ) {
    return { url: sourceUrl, ok: true, detail: "already blob, skipped" };
  }

  // Local path — skip upload, return as-is
  if (sourceUrl.startsWith("/")) {
    return { url: sourceUrl, ok: false, detail: "local path, skipped" };
  }

  try {
    const res = await fetch(sourceUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://commons.wikimedia.org/",
      },
    });

    if (!res.ok) {
      return {
        url: sourceUrl,
        ok: false,
        detail: `fetch ${res.status} — kept original URL`,
      };
    }

    const contentType = res.headers.get("content-type") ?? "image/jpeg";
    const buffer = await res.arrayBuffer();

    const { url: blobUrl } = await put(filename, buffer, {
      access: "public",
      contentType,
      addRandomSuffix: false,
    });

    return {
      url: blobUrl,
      ok: true,
      detail: `uploaded ${buffer.byteLength} bytes`,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { url: sourceUrl, ok: false, detail: `error: ${msg}` };
  }
}

// ─── Walk sections and upload all image sections ──────────────────────────────

async function processSections(
  sections: LessonSection[],
  topicSlug: string,
  lessonNum: number,
  log: string[]
): Promise<LessonSection[]> {
  const result: LessonSection[] = [];

  for (const section of sections) {
    if (section.type === "image" && section.url) {
      const urlPath = section.url.split("?")[0];
      const rawExt = urlPath.split(".").pop() ?? "jpg";
      const ext = ["jpg", "jpeg", "png", "webp", "gif"].includes(
        rawExt.toLowerCase()
      )
        ? rawExt.toLowerCase()
        : "jpg";

      const filename = `${topicSlug}-lesson${lessonNum}.${ext}`;
      const { url, ok, detail } = await uploadImageToBlob(section.url, filename);

      log.push(
        `    image [L${lessonNum}]: ${ok ? "✓" : "✗"} ${filename} — ${detail}`
      );
      result.push({ ...section, url });
    } else {
      result.push(section);
    }
  }

  return result;
}

// ─── Seed one topic ───────────────────────────────────────────────────────────

async function seedTopic(topic: Topic, log: string[]): Promise<void> {
  log.push(`\n── ${topic.name} ──`);
  const topicId = await insertTopic(topic);
  log.push(`  Inserted topic (id=${topicId})`);

  for (const lesson of topic.lessons) {
    log.push(`  Lesson ${lesson.num}: "${lesson.title}"`);
    const updatedSections = await processSections(
      lesson.sections,
      topic.slug,
      lesson.num,
      log
    );
    await insertLesson(topicId, { ...lesson, sections: updatedSections });
  }
}

// ─── GET /api/seed ────────────────────────────────────────────────────────────

export async function GET() {
  const log: string[] = ["=== Seed started ==="];

  try {
    await createTables();
    log.push("Tables ready.");

    const topics: Topic[] = [atlanticSlaveTrade, britishEmpire];

    for (const topic of topics) {
      await seedTopic(topic, log);
    }

    log.push("\n=== Seed complete ===");
    return NextResponse.json({ success: true, log });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    log.push(`\nFATAL ERROR: ${message}`);
    return NextResponse.json(
      { success: false, error: message, log },
      { status: 500 }
    );
  }
}
