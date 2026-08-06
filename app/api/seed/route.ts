// 路径: app/api/seed/route.ts
import { NextResponse } from "next/server";
import { createTables, insertTopic, insertLesson } from "@/lib/db";
import { humanRights } from "@/data/human-rights";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";
import { britishEmpire } from "@/data/british-empire";
import { usCivilRights } from "@/data/us-civil-rights";
import { learningCheck } from "@/data/learning-check";
import { asia } from "@/data/asia";
import { asiaEconomicBoom } from "@/data/asia-economic-boom";
import { weatherClimate } from "@/data/weather-climate";
import { tourism } from "@/data/tourism";
import { geographyLearningCheck } from "@/data/geography-learning-check";
import { heatingCooling } from "@/data/heating-cooling";
import { chemicalReactions } from "@/data/chemical-reactions";
import { healthDisease } from "@/data/health-disease";
import { Topic } from "@/data/types";

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

    const topics: Topic[] = [
      humanRights, atlanticSlaveTrade, britishEmpire, usCivilRights, learningCheck,
      asia, asiaEconomicBoom, weatherClimate, tourism, geographyLearningCheck,
      heatingCooling,
      chemicalReactions,
      healthDisease,
    ];

    for (const topic of topics) {
      await seedTopic(topic, log);
    }

    log.push("\n=== Seed complete ===");
    log.push("Next: visit /api/upload-images to upload images to Blob.");

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
