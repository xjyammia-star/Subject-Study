import Link from "next/link";
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";
import { Topic } from "@/data/types";

export const revalidate = 60;

// 科目配置：图标、描述、颜色
const subjectConfig: Record<string, {
  icon: string;
  description: string;
  color: string;
  borderColor: string;
  dotColor: string;
}> = {
  History: {
    icon: "📜",
    description: "Explore the events and forces that shaped the modern world.",
    color: "from-amber-900/20 to-surface-1",
    borderColor: "border-amber-800/40 hover:border-amber-600/60",
    dotColor: "bg-amber-500",
  },
  Geography: {
    icon: "🌍",
    description: "Understand the physical world and the people who inhabit it.",
    color: "from-emerald-900/20 to-surface-1",
    borderColor: "border-emerald-800/40 hover:border-emerald-600/60",
    dotColor: "bg-emerald-500",
  },
};

const fallbackConfig = {
  icon: "📚",
  description: "Study and revise this subject.",
  color: "from-blue-900/20 to-surface-1",
  borderColor: "border-blue-800/40 hover:border-blue-600/60",
  dotColor: "bg-blue-500",
};

export default async function Home() {
  // 从数据库拿已 seed 的 slugs
  let seededSlugs: string[] = [];
  try {
    seededSlugs = await getAllTopicSlugs();
  } catch {
    // DB not ready
  }

  // 按科目分组
  const bySubject: Record<string, Topic[]> = {};
  for (const topic of Object.values(topics)) {
    if (!seededSlugs.includes(topic.slug)) continue;
    const subj = topic.subject;
    if (!bySubject[subj]) bySubject[subj] = [];
    bySubject[subj].push(topic);
  }

  const subjects = Object.keys(bySubject);

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border px-8 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-[13px]">
          ✦
        </div>
        <span className="text-[14px] font-medium text-gray-300">
          Study Portal
        </span>
        <span className="text-gray-700 text-[14px]">·</span>
        <span className="text-[13px] text-gray-500">Year 8</span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-[32px] font-semibold text-gray-100 font-voice leading-tight">
              What would you like to study?
            </h1>
            <p className="text-gray-500 text-[14px] mt-2">
              Choose a subject to see your revision topics.
            </p>
          </div>

          {/* No topics */}
          {subjects.length === 0 && (
            <div className="text-center py-16 text-gray-600 space-y-2">
              <p>No topics found.</p>
              <p className="text-sm">
                Visit{" "}
                <code className="bg-surface-2 px-2 py-0.5 rounded text-xs text-gray-400">
                  /api/seed
                </code>{" "}
                to initialise the database.
              </p>
            </div>
          )}

          {/* Subject sections */}
          <div className="space-y-10">
            {subjects.map((subject) => {
              const cfg = subjectConfig[subject] ?? fallbackConfig;
              const subjectTopics = bySubject[subject];

              return (
                <section key={subject}>
                  {/* Subject heading */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[18px]">{cfg.icon}</span>
                    <h2 className="text-[16px] font-semibold text-gray-200">
                      {subject}
                    </h2>
                    <div className="flex-1 h-px bg-border ml-1" />
                    <span className="text-[12px] text-gray-600">
                      {subjectTopics.length}{" "}
                      {subjectTopics.length === 1 ? "topic" : "topics"}
                    </span>
                  </div>

                  {/* Topic cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subjectTopics.map((topic) => (
                      <Link
                        key={topic.slug}
                        href={`/${topic.slug}`}
                        className={`group relative block bg-gradient-to-br ${cfg.color} border ${cfg.borderColor} rounded-xl p-5 transition-all duration-200`}
                      >
                        {/* Lesson count badge */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                          <span className="text-[11px] text-gray-500">
                            {topic.lessons.length} lessons
                          </span>
                        </div>

                        {/* Topic name */}
                        <div className="text-[16px] font-medium text-gray-100 group-hover:text-white transition-colors leading-snug font-voice">
                          {topic.name}
                        </div>
                        <div className="text-[12px] text-gray-600 mt-0.5">
                          {topic.nameZh}
                        </div>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center gap-1 text-[12px] text-gray-600 group-hover:text-gray-400 transition-colors">
                          Start revising
                          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
