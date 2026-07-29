// 放到: app/page.tsx
import Link from "next/link";
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";

export const revalidate = 60;

const subjectConfig: Record<string, {
  icon: string;
  description: string;
  descriptionZh: string;
  color: string;
  borderColor: string;
  dotColor: string;
  accentText: string;
  accentBg: string;
}> = {
  History: {
    icon: "\u{1F4DC}",
    description: "Events and forces that shaped the modern world.",
    descriptionZh: "\u5851\u9020\u73b0\u4ee3\u4e16\u754c\u7684\u4e8b\u4ef6\u4e0e\u529b\u91cf\u3002",
    color: "from-amber-900/20 to-surface-1",
    borderColor: "border-amber-800/40 hover:border-amber-600/70",
    dotColor: "bg-amber-500",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/10",
  },
  Geography: {
    icon: "\u{1F30D}",
    description: "Physical world, environments, and human geography.",
    descriptionZh: "\u81ea\u7136\u4e16\u754c\u3001\u73af\u5883\u4e0e\u4eba\u6587\u5730\u7406\u3002",
    color: "from-emerald-900/20 to-surface-1",
    borderColor: "border-emerald-800/40 hover:border-emerald-600/70",
    dotColor: "bg-emerald-500",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
  },
};

const fallbackConfig = {
  icon: "\u{1F4DA}",
  description: "Study and revise this subject.",
  descriptionZh: "\u5b66\u4e60\u548c\u590d\u4e60\u8fd9\u95e8\u79d1\u76ee\u3002",
  color: "from-blue-900/20 to-surface-1",
  borderColor: "border-blue-800/40 hover:border-blue-600/70",
  dotColor: "bg-blue-500",
  accentText: "text-blue-400",
  accentBg: "bg-blue-500/10",
};

// Topic counts per subject (including coming soon)
const subjectTopicCounts: Record<string, { live: number; total: number }> = {
  History: { live: 5, total: 5 },   // updated dynamically below
  Geography: { live: 0, total: 2 }, // 2 coming soon
};

export default async function Home() {
  let seededSlugs: string[] = [];
  try {
    seededSlugs = await getAllTopicSlugs();
  } catch {
    // DB not ready
  }

  // Count live topics per subject
  const liveBySubject: Record<string, number> = {};
  for (const topic of Object.values(topics)) {
    if (!seededSlugs.includes(topic.slug)) continue;
    const subj = topic.subject;
    liveBySubject[subj] = (liveBySubject[subj] ?? 0) + 1;
  }

  const allSubjects = Object.keys(subjectConfig);

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border px-8 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-[13px] font-bold text-white">
          S
        </div>
        <span className="text-[14px] font-medium text-gray-300">
          Study Portal
        </span>
        <span className="text-gray-700 mx-1">&middot;</span>
        <span className="text-[13px] text-gray-500">Year 8</span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-xl">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-[30px] font-semibold text-gray-100 font-voice leading-tight">
              What would you like to study?
            </h1>
            <p className="text-gray-500 text-[14px] mt-2">
              Choose a subject to see your revision topics.
            </p>
          </div>

          {/* Subject cards */}
          <div className="space-y-4">
            {allSubjects.map((subject) => {
              const cfg = subjectConfig[subject] ?? fallbackConfig;
              const liveCount = liveBySubject[subject] ?? 0;
              const totalCount = subjectTopicCounts[subject]?.total ?? liveCount;
              const isAvailable = liveCount > 0;

              if (!isAvailable) {
                // Coming soon subject card
                return (
                  <div
                    key={subject}
                    className="relative block bg-surface-1 border border-border/50 rounded-2xl p-7 opacity-50 cursor-not-allowed select-none"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-medium text-gray-600 bg-surface-2 border border-border px-2 py-0.5 rounded-full">
                        Coming soon
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-[36px] leading-none">{cfg.icon}</div>
                      <div>
                        <div className="text-[20px] font-semibold text-gray-500 font-voice">
                          {subject}
                        </div>
                        <div className="text-[13px] text-gray-600 mt-0.5">
                          {cfg.description}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                      <span className="text-[12px] text-gray-600">
                        {totalCount} {totalCount === 1 ? "topic" : "topics"} coming soon
                      </span>
                    </div>
                  </div>
                );
              }

              // Available subject card
              return (
                <Link
                  key={subject}
                  href={`/subject/${subject.toLowerCase()}`}
                  className={`group relative block bg-gradient-to-br ${cfg.color} border ${cfg.borderColor} rounded-2xl p-7 transition-all duration-200`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[36px] leading-none">{cfg.icon}</div>
                    <div className="flex-1">
                      <div className="text-[20px] font-semibold text-gray-100 group-hover:text-white transition-colors font-voice">
                        {subject}
                      </div>
                      <div className="text-[13px] text-gray-500 mt-0.5">
                        {cfg.description}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 ${cfg.accentText} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className={`flex items-center gap-1.5 ${cfg.accentBg} rounded-full px-2.5 py-1`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                      <span className={`text-[11px] font-medium ${cfg.accentText}`}>
                        {liveCount} {liveCount === 1 ? "topic" : "topics"} available
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty state */}
          {allSubjects.length === 0 && (
            <div className="text-center py-16 text-gray-600 space-y-2">
              <p>No subjects found.</p>
              <p className="text-sm">
                Visit{" "}
                <code className="bg-surface-2 px-2 py-0.5 rounded text-xs text-gray-400">
                  /api/seed
                </code>{" "}
                to initialise the database.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
