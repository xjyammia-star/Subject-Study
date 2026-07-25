"use client";

import { Topic } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

interface Props {
  topic: Topic;
  currentLesson: number; // 0-based index
  lang: Lang;
  onSelectLesson: (index: number) => void;
  onToggleLang: (lang: Lang) => void;
}

const badgeColors: Record<string, string> = {
  T: "bg-blue-100 text-blue-700",
  A: "bg-amber-100 text-amber-700",
  E: "bg-purple-100 text-purple-700",
};

export default function Sidebar({
  topic,
  currentLesson,
  lang,
  onSelectLesson,
  onToggleLang,
}: Props) {
  return (
    <div className="w-[260px] min-w-[260px] bg-surface-1 border-r border-border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
          {topic.year} · {t(lang, topic.subject, topic.subjectZh)}
        </div>
        <div className="text-[15px] font-medium text-gray-900 mt-1 font-voice">
          {t(lang, topic.name, topic.nameZh)}
        </div>
        <div className="text-[11px] text-gray-500 mt-0.5">
          {topic.lessons.length} {t(lang, labels.lessons.en, labels.lessons.zh).toLowerCase()}
        </div>
        <LanguageToggle lang={lang} onToggle={onToggleLang} />
      </div>

      {/* Lesson list label */}
      <div className="px-4 pt-3 pb-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
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
                isActive
                  ? "bg-accent-light"
                  : "hover:bg-surface-2"
              }`}
            >
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div
                  className={`w-2 h-2 rounded-full border-2 ${
                    isActive
                      ? "border-accent bg-accent"
                      : "border-gray-300 bg-white"
                  }`}
                />
                {!isLast && (
                  <div className="w-[1px] h-8 bg-gray-200 mt-1" />
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      badgeColors[lesson.badge] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {lesson.badge}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {lesson.num}
                  </span>
                </div>
                <div
                  className={`text-[13px] mt-0.5 leading-snug ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-gray-700"
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
