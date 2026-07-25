import { sql } from "@vercel/postgres";
import { Topic, Lesson, LessonSection } from "@/data/types";

/* ===== Read helpers ===== */

export async function getTopicBySlug(slug: string): Promise<Topic | null> {
  const { rows: topicRows } = await sql`
    SELECT * FROM topics WHERE slug = ${slug}
  `;
  if (topicRows.length === 0) return null;

  const t = topicRows[0];

  const { rows: lessonRows } = await sql`
    SELECT * FROM lessons WHERE topic_id = ${t.id} ORDER BY num
  `;

  return {
    slug: t.slug,
    name: t.name,
    nameZh: t.name_zh,
    subject: t.subject,
    subjectZh: t.subject_zh,
    year: t.year,
    lessons: lessonRows.map((l) => ({
      num: l.num,
      badge: l.badge,
      title: l.title,
      titleZh: l.title_zh,
      subtitle: l.subtitle || "",
      subtitleZh: l.subtitle_zh || "",
      sections: l.sections as LessonSection[],
    })),
  };
}

export async function getAllTopicSlugs(): Promise<string[]> {
  const { rows } = await sql`SELECT slug FROM topics`;
  return rows.map((r) => r.slug);
}

/* ===== Write helpers (used by seed) ===== */

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS topics (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(500) NOT NULL,
      name_zh VARCHAR(500) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      subject_zh VARCHAR(255) NOT NULL,
      year VARCHAR(50) NOT NULL
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS lessons (
      id SERIAL PRIMARY KEY,
      topic_id INTEGER REFERENCES topics(id) ON DELETE CASCADE,
      num INTEGER NOT NULL,
      badge VARCHAR(10) NOT NULL,
      title VARCHAR(500) NOT NULL,
      title_zh VARCHAR(500) NOT NULL,
      subtitle TEXT DEFAULT '',
      subtitle_zh TEXT DEFAULT '',
      sections JSONB NOT NULL DEFAULT '[]'
    )
  `;
}

export async function insertTopic(topic: Topic): Promise<number> {
  // Delete existing topic and its lessons first (for re-seeding)
  await sql`DELETE FROM lessons WHERE topic_id IN (SELECT id FROM topics WHERE slug = ${topic.slug})`;
  await sql`DELETE FROM topics WHERE slug = ${topic.slug}`;

  const { rows } = await sql`
    INSERT INTO topics (slug, name, name_zh, subject, subject_zh, year)
    VALUES (${topic.slug}, ${topic.name}, ${topic.nameZh}, ${topic.subject}, ${topic.subjectZh}, ${topic.year})
    RETURNING id
  `;
  return rows[0].id;
}

export async function insertLesson(topicId: number, lesson: Lesson) {
  const sectionsJson = JSON.stringify(lesson.sections);
  await sql`
    INSERT INTO lessons (topic_id, num, badge, title, title_zh, subtitle, subtitle_zh, sections)
    VALUES (
      ${topicId},
      ${lesson.num},
      ${lesson.badge},
      ${lesson.title},
      ${lesson.titleZh},
      ${lesson.subtitle},
      ${lesson.subtitleZh},
      ${sectionsJson}::jsonb
    )
  `;
}

export async function updateLessonSections(
  topicSlug: string,
  lessonNum: number,
  sections: LessonSection[]
) {
  const sectionsJson = JSON.stringify(sections);
  await sql`
    UPDATE lessons SET sections = ${sectionsJson}::jsonb
    WHERE num = ${lessonNum}
    AND topic_id IN (SELECT id FROM topics WHERE slug = ${topicSlug})
  `;
}
