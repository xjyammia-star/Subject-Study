// 放到: components/HomeClient.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LANG_KEY } from "./GlobalLanguageToggle";

type Lang = "en" | "zh";

const subjectConfig: Record<string, {
  icon: string;
  label: string;
  labelZh: string;
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
    label: "History",
    labelZh: "\u5386\u53f2",
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
    label: "Geography",
    labelZh: "\u5730\u7406",
    description: "Physical world, environments, and human geography.",
    descriptionZh: "\u81ea\u7136\u4e16\u754c\u3001\u73af\u5883\u4e0e\u4eba\u6587\u5730\u7406\u3002",
    color: "from-emerald-900/20 to-surface-1",
    borderColor: "border-emerald-800/40 hover:border-emerald-600/70",
    dotColor: "bg-emerald-500",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
  },
};

const comingSoonTopicCounts: Record<string, number> = {
  Geography: 2,
};

interface Props {
  liveBySubject: Record<string, number>;
}

export default function HomeClient({ liveBySubject }: Props) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh") setLang("zh");
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      setLang((e as CustomEvent<Lang>).detail);
    };
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);

  const allSubjects = Object.keys(subjectConfig);

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border px-4 sm:px-8 py-3 sm:py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-[13px] font-bold text-white shrink-0">
          学
        </div>
        <span className="text-[14px] font-medium text-gray-300 truncate">
          {t("Study Notes", "\u5b66\u4e60\u7b14\u8bb0")}
        </span>

      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10 sm:py-16">
        <div className="w-full max-w-xl">
          {/* Hero */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-[26px] sm:text-[30px] font-semibold text-gray-100 font-voice leading-tight">
              {t("What would you like to study?", "\u4f60\u60f3\u590d\u4e60\u54ea\u4e2a\u79d1\u76ee\uff1f")}
            </h1>
            <p className="text-gray-500 text-[13px] sm:text-[14px] mt-2">
              {t(
                "Choose a subject below to explore your revision topics and test yourself.",
                "\u9009\u62e9\u79d1\u76ee\uff0c\u6309\u8bfe\u7a0b\u5355\u5143\u9010\u6b65\u590d\u4e60\uff0c\u5e76\u901a\u8fc7\u601d\u8003\u9898\u548c\u5c0f\u6d4b\u9a8c\u68c0\u9a8c\u81ea\u5df1\u3002"
              )}
            </p>
          </div>

          {/* Subject cards */}
          <div className="space-y-4">
            {allSubjects.map((subject) => {
              const cfg = subjectConfig[subject];
              const liveCount = liveBySubject[subject] ?? 0;
              const comingSoonCount = comingSoonTopicCounts[subject] ?? 0;
              const totalCount = liveCount + comingSoonCount;
              const isAvailable = liveCount > 0;

              if (!isAvailable) {
                return (
                  <div
                    key={subject}
                    className="relative block bg-surface-1 border border-border/50 rounded-2xl p-5 sm:p-7 opacity-50 cursor-not-allowed select-none"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-medium text-gray-600 bg-surface-2 border border-border px-2 py-0.5 rounded-full">
                        {t("Coming soon", "\u5373\u5c06\u63a8\u51fa")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-[32px] sm:text-[36px] leading-none">{cfg.icon}</div>
                      <div>
                        <div className="text-[18px] sm:text-[20px] font-semibold text-gray-500 font-voice">
                          {t(cfg.label, cfg.labelZh)}
                        </div>
                        <div className="text-[12px] sm:text-[13px] text-gray-600 mt-0.5">
                          {t(cfg.description, cfg.descriptionZh)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                      <span className="text-[12px] text-gray-600">
                        {totalCount} {t(
                          totalCount === 1 ? "topic coming soon" : "topics coming soon",
                          "\u4e2a\u4e3b\u9898\u5373\u5c06\u63a8\u51fa"
                        )}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={subject}
                  href={`/subject/${subject.toLowerCase()}`}
                  className={`group relative block bg-gradient-to-br ${cfg.color} border ${cfg.borderColor} rounded-2xl p-5 sm:p-7 transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-[32px] sm:text-[36px] leading-none">{cfg.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[18px] sm:text-[20px] font-semibold text-gray-100 group-hover:text-white transition-colors font-voice">
                        {t(cfg.label, cfg.labelZh)}
                      </div>
                      <div className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5 leading-snug">
                        {t(cfg.description, cfg.descriptionZh)}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 ${cfg.accentText} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="mt-4 sm:mt-5 flex items-center gap-3">
                    <div className={`flex items-center gap-1.5 ${cfg.accentBg} rounded-full px-2.5 py-1`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                      <span className={`text-[11px] font-medium ${cfg.accentText}`}>
                        {liveCount} {t(
                          liveCount === 1 ? "topic available" : "topics available",
                          "\u4e2a\u4e3b\u9898\u53ef\u5b66\u4e60"
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {allSubjects.length === 0 && (
            <div className="text-center py-16 text-gray-600 space-y-2">
              <p>{t("No subjects found.", "\u672a\u627e\u5230\u79d1\u76ee\u3002")}</p>
              <p className="text-sm">
                {t("Visit", "\u8bf7\u8bbf\u95ee")}{" "}
                <code className="bg-surface-2 px-2 py-0.5 rounded text-xs text-gray-400">
                  /api/seed
                </code>{" "}
                {t("to initialise the database.", "\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002")}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-8 py-4 flex items-center justify-between">
        <span className="text-[11px] text-gray-700">
          {t("Study Notes · Year 8", "\u5b66\u4e60\u7b14\u8bb0 · Year 8")}
        </span>
        <span className="text-[11px] text-gray-700">
          {t("Shrewsbury International School Bangkok", "\u5e03\u83b1\u514b\u518c\u56fd\u9645\u5b66\u6821\u66fc\u8c37")}
        </span>
      </footer>
    </div>
  );
}
