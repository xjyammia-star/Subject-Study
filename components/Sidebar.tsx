"use client";

import { useRouter } from "next/navigation";
import { Topic } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import { topicList } from "@/data/topics";

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
  const router = useRouter();

  // 同科目下的其他 topics（用于下拉切换）
  const sameSubjectTopics = topicList.filter(
    (t) => t.subject === topic.subject
  );
  const hasMultipleTopics = sameSubjectTopics.length > 1;

  return (
    <div className="w-[268px] min-w-[268px] bg-surface-1 border-r border-border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        {/* Back to home */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-gray-300 transition-colors mb-3 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All subjects
        </button>

        {/* Subject label */}
        <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
          {topic.year} · {t(lang, topic.subject, topic.subjectZh)}
        </div>

        {/* Topic selector — dropdown if multiple, plain text if only one */}
        {hasMultipleTopics ? (
          <div className="relative">
            <select
              value={topic.slug}
              onChange={(e) => router.push(`/${e.target.value}`)}
              className="w-full appearance-none bg-surface-2 border border-border rounded-lg px-3 py-2 pr-8
                         text-[13px] font-medium text-gray-100 cursor-pointer
                         focus:outline-none focus:border-accent/50 transition-colors font-voice"
            >
              {sameSubjectTopics.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {lang === "zh" ? t.nameZh : t.name}
                </option>
              ))}
            </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="text-[15px] font-medium text-gray-100 font-voice leading-snug">
            {t(lang, topic.name, topic.nameZh)}
          </div>
        )}

        {/* Lesson count */}
        <div className="text-[11px] text-gray-600 mt-1.5">
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
