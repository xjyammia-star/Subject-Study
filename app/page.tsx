// 放到: app/page.tsx
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";
import HomeClient from "@/components/HomeClient";

export const revalidate = 60;

export default async function Home() {
  let seededSlugs: string[] = [];
  try {
    seededSlugs = await getAllTopicSlugs();
  } catch {
    // DB not ready
  }

  const liveBySubject: Record<string, number> = {};
  for (const topic of Object.values(topics)) {
    if (!seededSlugs.includes(topic.slug)) continue;
    const subj = topic.subject;
    liveBySubject[subj] = (liveBySubject[subj] ?? 0) + 1;
  }

  return <HomeClient liveBySubject={liveBySubject} />;
}
