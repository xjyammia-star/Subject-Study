// 放到: components/SubjectClient.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LANG_KEY } from "./GlobalLanguageToggle";
import { Topic } from "@/data/types";

type Lang = "en" | "zh";

const subjectConfig: Record<string, {
  icon: string;
  color: string;
  borderColor: string;
  dotColor: string;
  accentText: string;
  accentBg: string;
  headerColor: string;
  labelZh: string;
}> = {
  history: {
    icon: "\u{1F4DC}",
    labelZh: "\u5386\u53f2",
    color: "from-amber-900/20 to-surface-1",
    borderColor: "border-amber-800/40 hover:border-amber-600/60",
    dotColor: "bg-amber-500",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/10",
    headerColor: "text-amber-400",
  },
  geography: {
    icon: "\u{1F30D}",
    labelZh: "\u5730\u7406",
    color: "from-emerald-900/20 to-surface-1",
    borderColor: "border-emerald-800/40 hover:border-emerald-600/60",
    dotColor: "bg-emerald-500",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    headerColor: "text-emerald-400",
  },
  science: {
    icon: "\u{1F52C}",
    labelZh: "\u79d1\u5b66",
    color: "from-violet-900/20 to-surface-1",
    borderColor: "border-violet-800/40 hover:border-violet-600/60",
    dotColor: "bg-violet-500",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    headerColor: "text-violet-400",
  },
};

const comingSoonTopics: Record<string, { name: string; nameZh: string }[]> = {};

interface Props {
  subjectKey: string;
  subjectLabel: string;
  liveTopics: Topic[];
}

export default function SubjectClient({ subjectKey, subjectLabel, liveTopics }: Props) {
  const [lang, setLang] = useState<Lang>("en");
  const cfg = subjectConfig[subjectKey];

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
  const comingSoon = comingSoonTopics[subjectKey] ?? [];

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col">
      <header className="border-b border-border px-8 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-[13px] font-bold text-white">
          S
        </div>
        <span className="text-[14px] font-medium text-gray-300">
          {t("Study Notes", "\u5b66\u4e60\u7b14\u8bb0")}
        </span>
        <span className="text-gray-700 mx-1">&middot;</span>
        <Link href="/" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
          {t("Year 8", "\u516b\u5e74\u7ea7")}
        </Link>
        <span className="text-gray-700 mx-1">&middot;</span>
        <span className={`text-[13px] font-medium ${cfg?.headerColor ?? "text-gray-400"}`}>
          {t(subjectLabel, cfg?.labelZh ?? subjectLabel)}
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center px-8 py-16">
        <div className="w-full max-w-2xl">
          <div className="mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-300 transition-colors mb-6"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {t("All subjects", "\u6240\u6709\u79d1\u76ee")}
            </Link>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[28px]">{cfg?.icon}</span>
              <h1 className="text-[28px] font-semibold text-gray-100 font-voice">
                {t(subjectLabel, cfg?.labelZh ?? subjectLabel)}
              </h1>
            </div>
            <p className="text-gray-500 text-[14px]">
              {t("Choose a topic to start revising.", "\u9009\u62e9\u4e00\u4e2a\u4e3b\u9898\u5f00\u59cb\u590d\u4e60\u3002")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {liveTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${topic.slug}`}
                className={`group relative block bg-gradient-to-br ${cfg?.color ?? "from-gray-900/20 to-surface-1"} border ${cfg?.borderColor ?? "border-gray-800/40"} rounded-xl p-5 transition-all duration-200`}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${cfg?.dotColor ?? "bg-gray-500"}`} />
                  <span className="text-[11px] text-gray-500">
                    {topic.lessons.length} {t("lessons", "\u8bfe")}
                  </span>
                </div>
                <div className="text-[16px] font-medium text-gray-100 group-hover:text-white transition-colors leading-snug font-voice">
                  {t(topic.name, topic.nameZh)}
                </div>
                <div className={`mt-4 flex items-center gap-1 text-[12px] ${cfg?.accentText ?? "text-gray-400"} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  {t("Start revising", "\u5f00\u59cb\u590d\u4e60")}
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}

            {comingSoon.map((placeholder) => (
              <div
                key={placeholder.name}
                className="relative block bg-surface-1 border border-border/50 rounded-xl p-5 opacity-50 cursor-not-allowed select-none"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-medium text-gray-600 bg-surface-2 border border-border px-2 py-0.5 rounded-full">
                    {t("Coming soon", "\u5373\u5c06\u63a8\u51fa")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                  <span className="text-[11px] text-gray-600">&mdash; {t("lessons", "\u8bfe")}</span>
                </div>
                <div className="text-[16px] font-medium text-gray-500 leading-snug font-voice">
                  {t(placeholder.name, placeholder.nameZh)}
                </div>
              </div>
            ))}
          </div>

          {liveTopics.length === 0 && comingSoon.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              <p>{t(`No topics found for ${subjectLabel}.`, `\u672a\u627e\u5230${cfg?.labelZh ?? subjectLabel}\u7684\u4e3b\u9898\u3002`)}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
