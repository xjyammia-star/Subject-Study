"use client";

import Link from "next/link";
import { Topic } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

interface Props {
  topic: Topic;
  currentLesson: number;
  lang: Lang;
  onSelectLesson: (index: number) => void;
  onToggleLang: (lang: Lang) => void;
}

const badgeColors: Record<string, string> = {
  T: "bg-blue-900/40 text-blue-300",
  A: "bg-amber-900/40 text-amber-300",
  E: "bg-purple-900/40 text-purple-300",
};

export default function Sidebar({
  topic,
  currentLesson,
  lang,
  onSelectLesson,
  onToggleLang,
}: Props) {
  return (
    <div className="w-[268px] min-w-[268px] bg-surface-1 border-r border-border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        {/* Back to topics link */}
        <Link
          href="/"
          className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-gray-300 transition-colors mb-3 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All topics
        </Link>

        <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">
          {topic.year} · {t(lang, topic.subject, topic.subjectZh)}
        </div>
        <div className="text-[16px] font-medium text-gray-100 mt-1 font-voice">
          {t(lang, topic.name, topic.nameZh)}
        </div>
        <div className="text-[12px] text-gray-500 mt-0.5">
          {topic.lessons.length}{" "}
          {t(lang, labels.lessons.en, labels.lessons.zh).toLowerCase()}
        </div>
        <LanguageToggle lang={lang} onToggle={onToggleLang} />
      </div>

      {/* Lesson list label */}
      <div className="px-4 pt-3 pb-1.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider">
        {t(lang, labels.lessons.en, labels.lessons.zh)}
      </div>

      {/* Lesson list */}
      <div className="flex-1 overflow-y-auto px-2 pb-4 custom-scrollbar">
        {topic.lessons.map((lesson, idx) => {
          const isActive = idx === currentLesson;
          const isLast = idx === topic.lessons.length - 1;

          return (
            <button
              key={lesson.num}
              onClick={() => onSelectLesson(idx)}
              className={`w-full flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors mb-0.5 ${
                isActive ? "bg-accent-light" : "hover:bg-surface-2"
              }`}
            >
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div
                  className={`w-2 h-2 rounded-full border-2 ${
                    isActive
                      ? "border-accent bg-accent"
                      : "border-gray-600 bg-surface-1"
                  }`}
                />
                {!isLast && (
                  <div className="w-[1px] h-8 bg-gray-700/50 mt-1" />
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      badgeColors[lesson.badge] || "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {lesson.badge}
                  </span>
                  <span className="text-[10px] text-gray-600">
                    {lesson.num}
                  </span>
                </div>
                <div
                  className={`text-[14px] mt-0.5 leading-snug ${
                    isActive ? "text-accent font-medium" : "text-gray-400"
                  }`}
                >
                  {t(lang, lesson.title, lesson.titleZh)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
