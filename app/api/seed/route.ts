import { NextResponse } from "next/server";
import { createTables, insertTopic, insertLesson } from "@/lib/db";
import { atlanticSlaveTrade } from "@/data/atlantic-slave-trade";

export async function GET() {
  try {
    // 1. Create tables
    await createTables();

    // 2. Seed Atlantic Slave Trade topic
    const topicId = await insertTopic(atlanticSlaveTrade);

    // 3. Insert all lessons
    for (const lesson of atlanticSlaveTrade.lessons) {
      await insertLesson(topicId, lesson);
    }

    return NextResponse.json({
      success: true,
      message: `Seeded topic "${atlanticSlaveTrade.name}" with ${atlanticSlaveTrade.lessons.length} lessons.`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
