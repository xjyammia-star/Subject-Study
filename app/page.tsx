import Link from "next/link";
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";

export const revalidate = 60;

export default async function Home() {
  // 从数据库读取所有已 seed 的 topic slugs
  let slugs: string[] = [];
  try {
    slugs = await getAllTopicSlugs();
  } catch {
    // DB not ready yet
  }

  // 按 topicList 顺序排列，只显示已 seed 的
  const available = Object.values(topics).filter((t) =>
    slugs.includes(t.slug)
  );

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-[12px] font-medium text-gray-500 uppercase tracking-widest mb-3">
          Year 8 · History
        </div>
        <h1 className="text-[28px] font-semibold text-gray-100 font-voice">
          Study Topics
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Choose a topic to start revising
        </p>
      </div>

      {/* Topic cards */}
      {available.length === 0 ? (
        <div className="text-center text-gray-500 space-y-2">
          <p>No topics found.</p>
          <p className="text-sm">
            Visit{" "}
            <code className="bg-surface-3 px-2 py-1 rounded text-xs">
              /api/seed
            </code>{" "}
            to set up the database.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          {available.map((topic) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className="group block bg-surface-1 border border-border rounded-xl p-5 hover:border-accent/50 hover:bg-surface-2 transition-all"
            >
              <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">
                {topic.year} · {topic.subject}
              </div>
              <div className="text-[17px] font-medium text-gray-100 group-hover:text-accent transition-colors leading-snug font-voice">
                {topic.name}
              </div>
              <div className="text-[13px] text-gray-500 mt-0.5">
                {topic.nameZh}
              </div>
              <div className="mt-3 text-[12px] text-gray-600">
                {topic.lessons.length} lessons
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
