// 放到: app/subject/[subject]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTopicSlugs } from "@/lib/db";
import { topics } from "@/data/topics";
import { Topic } from "@/data/types";

export const revalidate = 60;

const subjectConfig: Record<string, {
  icon: string;
  color: string;
  borderColor: string;
  dotColor: string;
  accentText: string;
  accentBg: string;
  headerColor: string;
}> = {
  history: {
    icon: "\u{1F4DC}",
    color: "from-amber-900/20 to-surface-1",
    borderColor: "border-amber-800/40 hover:border-amber-600/60",
    dotColor: "bg-amber-500",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/10",
    headerColor: "text-amber-400",
  },
  geography: {
    icon: "\u{1F30D}",
    color: "from-emerald-900/20 to-surface-1",
    borderColor: "border-emerald-800/40 hover:border-emerald-600/60",
    dotColor: "bg-emerald-500",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    headerColor: "text-emerald-400",
  },
};

const comingSoonTopics: Record<string, { name: string; nameZh: string }[]> = {
  geography: [
    { name: "Rivers and Coasts", nameZh: "\u6cb3\u6d41\u4e0e\u6d77\u5cb8" },
    { name: "Climate and Weather", nameZh: "\u6c14\u5019\u4e0e\u5929\u6c14" },
  ],
};

export default async function SubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subjectKey = params.subject.toLowerCase();
  const cfg = subjectConfig[subjectKey];
  if (!cfg) notFound();

  const subjectLabel =
    subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

  let seededSlugs: string[] = [];
  try {
    seededSlugs = await getAllTopicSlugs();
  } catch {
    // DB not ready
  }

  const liveTopics: Topic[] = Object.values(topics).filter(
    (t) =>
      t.subject.toLowerCase() === subjectKey &&
      seededSlugs.includes(t.slug)
  );

  const comingSoon = comingSoonTopics[subjectKey] ?? [];

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
        <Link
          href="/"
          className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors"
        >
          Year 8
        </Link>
        <span className="text-gray-700 mx-1">&middot;</span>
        <span className={`text-[13px] font-medium ${cfg.headerColor}`}>
          {subjectLabel}
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center px-8 py-16">
        <div className="w-full max-w-2xl">
          {/* Back + Title */}
          <div className="mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-300 transition-colors mb-6"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All subjects
            </Link>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[28px]">{cfg.icon}</span>
              <h1 className="text-[28px] font-semibold text-gray-100 font-voice">
                {subjectLabel}
              </h1>
            </div>
            <p className="text-gray-500 text-[14px]">
              Choose a topic to start revising.
            </p>
          </div>

          {/* Topic grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Live topics */}
            {liveTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${topic.slug}`}
                className={`group relative block bg-gradient-to-br ${cfg.color} border ${cfg.borderColor} rounded-xl p-5 transition-all duration-200`}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                  <span className="text-[11px] text-gray-500">
                    {topic.lessons.length} lessons
                  </span>
                </div>
                <div className="text-[16px] font-medium text-gray-100 group-hover:text-white transition-colors leading-snug font-voice">
                  {topic.name}
                </div>
                <div className="text-[12px] text-gray-600 mt-0.5">
                  {topic.nameZh}
                </div>
                <div
                  className={`mt-4 flex items-center gap-1 text-[12px] ${cfg.accentText} opacity-60 group-hover:opacity-100 transition-opacity`}
                >
                  Start revising
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}

            {/* Coming soon */}
            {comingSoon.map((placeholder) => (
              <div
                key={placeholder.name}
                className="relative block bg-surface-1 border border-border/50 rounded-xl p-5 opacity-50 cursor-not-allowed select-none"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-medium text-gray-600 bg-surface-2 border border-border px-2 py-0.5 rounded-full">
                    Coming soon
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                  <span className="text-[11px] text-gray-600">&mdash; lessons</span>
                </div>
                <div className="text-[16px] font-medium text-gray-500 leading-snug font-voice">
                  {placeholder.name}
                </div>
                <div className="text-[12px] text-gray-700 mt-0.5">
                  {placeholder.nameZh}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {liveTopics.length === 0 && comingSoon.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              <p>No topics found for {subjectLabel}.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
