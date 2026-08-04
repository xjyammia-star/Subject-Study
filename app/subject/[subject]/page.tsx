// 放到: app/subject/[subject]/page.tsx
import { notFound } from "next/navigation";
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";
import SubjectClient from "@/components/SubjectClient";

export const revalidate = 60;

const validSubjects = ["history", "geography", "science"];

export default async function SubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subjectKey = params.subject.toLowerCase();
  if (!validSubjects.includes(subjectKey)) notFound();

  const subjectLabel = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

  let seededSlugs: string[] = [];
  try {
    seededSlugs = await getAllTopicSlugs();
  } catch {
    // DB not ready
  }

  const liveTopics = Object.values(topics).filter(
    (t) =>
      t.subject.toLowerCase() === subjectKey &&
      seededSlugs.includes(t.slug)
  );

  return (
    <SubjectClient
      subjectKey={subjectKey}
      subjectLabel={subjectLabel}
      liveTopics={liveTopics}
    />
  );
}
