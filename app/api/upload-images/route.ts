import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { LessonSection } from "@/data/types";

/** Images to download and upload, keyed by lesson number */
const imageSources: Record<
  number,
  { wikimediaUrl: string; filename: string }
> = {
  1: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Great-Zimbabwe-2.jpg/800px-Great-Zimbabwe-2.jpg",
    filename: "lesson1-great-zimbabwe.jpg",
  },
  2: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Transatlantic_slave_trade.jpg/800px-Transatlantic_slave_trade.jpg",
    filename: "lesson2-triangular-trade-map.jpg",
  },
  3: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Elmina_Castle_-_Ghana.jpg/800px-Elmina_Castle_-_Ghana.jpg",
    filename: "lesson3-elmina-castle.jpg",
  },
  4: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Slaveshipposter.jpg/800px-Slaveshipposter.jpg",
    filename: "lesson4-brookes-diagram.jpg",
  },
  5: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Noirs_sur_un_rivage_se_lamentant_de_voir_embarquer_d%27autres_noirs_sur_un_bateau%2C_1764.jpg/800px-Noirs_sur_un_rivage_se_lamentant_de_voir_embarquer_d%27autres_noirs_sur_un_bateau%2C_1764.jpg",
    filename: "lesson5-slave-ship-arrival.jpg",
  },
  6: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Slaves_cutting_the_sugar_cane_-_Ten_Views_in_the_Island_of_Antigua_%281823%29%2C_plate_IV_-_BL.jpg/800px-Slaves_cutting_the_sugar_cane_-_Ten_Views_in_the_Island_of_Antigua_%281823%29%2C_plate_IV_-_BL.jpg",
    filename: "lesson6-plantation-sugar-cane.jpg",
  },
};

/** Small delay to avoid Wikimedia rate limiting */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const maxDuration = 60; // allow up to 60s for this route

export async function GET() {
  const results: string[] = [];

  try {
    for (const [lessonNumStr, source] of Object.entries(imageSources)) {
      const lessonNum = Number(lessonNumStr);

      // 1. Download image from Wikimedia with proper User-Agent
      const response = await fetch(source.wikimediaUrl, {
        headers: {
          "User-Agent":
            "HistoryStudyTool/1.0 (educational project; contact: student@example.com)",
        },
      });

      if (!response.ok) {
        results.push(
          `Lesson ${lessonNum}: download failed (${response.status})`
        );
        await sleep(2000);
        continue;
      }

      const imageBuffer = await response.arrayBuffer();

      // 2. Upload to Vercel Blob
      const blob = await put(
        `images/atlantic-slave-trade/${source.filename}`,
        Buffer.from(imageBuffer),
        { access: "public" }
      );

      // 3. Update the lesson sections in DB with the Blob URL
      const { rows } = await sql`
        SELECT id, sections FROM lessons
        WHERE num = ${lessonNum}
        AND topic_id IN (SELECT id FROM topics WHERE slug = 'atlantic-slave-trade')
      `;

      if (rows.length > 0) {
        const sections = rows[0].sections as LessonSection[];
        const updated = sections.map((s) => {
          if (s.type === "image") {
            return { ...s, url: blob.url };
          }
          return s;
        });
        const sectionsJson = JSON.stringify(updated);
        await sql`
          UPDATE lessons SET sections = ${sectionsJson}::jsonb
          WHERE id = ${rows[0].id}
        `;
      }

      results.push(`Lesson ${lessonNum}: OK -> ${blob.url}`);

      // Wait 2 seconds before next download
      await sleep(2000);
    }

    return NextResponse.json({ success: true, results });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message, results },
      { status: 500 }
    );
  }
}
