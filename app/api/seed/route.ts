import { NextResponse } from "next/server";
import { createTables, insertTopic, insertLesson } from "@/lib/db";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";
import { britishEmpire } from "@/data/british-empire";
import { Topic } from "@/data/types";

// GET /api/seed
// 只负责写入文字内容到数据库，图片 URL 先保留 Wikimedia 原始链接。
// 图片上传用 /api/upload-image?topic=xxx&lesson=N 逐张处理。

async function seedTopic(topic: Topic, log: string[]): Promise<void> {
  log.push(`\n── ${topic.name} ──`);
  const topicId = await insertTopic(topic);
  log.push(`  Inserted topic (id=${topicId})`);

  for (const lesson of topic.lessons) {
    await insertLesson(topicId, lesson);
    log.push(`  Lesson ${lesson.num}: "${lesson.title}" ✓`);
  }
}

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
    log.push("\nNext step: visit /api/upload-images to upload images to Blob.");

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
