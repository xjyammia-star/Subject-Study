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
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Great-Zimbabwe-2.jpg",
    filename: "lesson1-great-zimbabwe.jpg",
  },
  2: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Transatlantic_slave_trade.jpg",
    filename: "lesson2-triangular-trade-map.jpg",
  },
  3: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Elmina_Castle_-_Ghana.jpg",
    filename: "lesson3-elmina-castle.jpg",
  },
  4: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Slaveshipposter.jpg",
    filename: "lesson4-brookes-diagram.jpg",
  },
  5: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Noirs_sur_un_rivage_se_lamentant_de_voir_embarquer_d%27autres_noirs_sur_un_bateau%2C_1764.jpg",
    filename: "lesson5-slave-ship-arrival.jpg",
  },
  6: {
    wikimediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Slaves_cutting_the_sugar_cane_-_Ten_Views_in_the_Island_of_Antigua_%281823%29%2C_plate_IV_-_BL.jpg",
    filename: "lesson6-plantation-sugar-cane.jpg",
  },
};

export async function GET() {
  const results: string[] = [];

  try {
    for (const [lessonNumStr, source] of Object.entries(imageSources)) {
      const lessonNum = Number(lessonNumStr);

      // 1. Download image from Wikimedia
      const response = await fetch(source.wikimediaUrl);
      if (!response.ok) {
        results.push(`Lesson ${lessonNum}: download failed (${response.status})`);
        continue;
      }
      const imageBuffer = await response.arrayBuffer();

      // 2. Upload to Vercel Blob
      const blob = await put(
        `images/atlantic-slave-trade/${source.filename}`,
        Buffer.from(imageBuffer),
        { access: "public" }
      );

      // 3. Update the lesson's sections in DB — replace image URL
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

      results.push(`Lesson ${lessonNum}: uploaded → ${blob.url}`);
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
