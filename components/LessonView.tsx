"use client";

import { Lesson } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";
import Goals from "./sections/Goals";
import Background from "./sections/Background";
import Vocab from "./sections/Vocab";
import ImagePlaceholder from "./sections/ImagePlaceholder";
import SourceBox from "./sections/SourceBox";
import ThinkCard from "./sections/ThinkCard";
import QuizCard from "./sections/QuizCard";

interface Props {
  lesson: Lesson;
  lang: Lang;
  totalLessons: number;
}

export default function LessonView({ lesson, lang, totalLessons }: Props) {
  const progressPercent = Math.round((lesson.num / totalLessons) * 100);
  const hasContent = lesson.sections.length > 0;

  return (
    <div className="flex-1 overflow-y-auto content-scrollbar">
      {/* Progress bar */}
      <div className="h-1 bg-surface-2">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-[720px] mx-auto px-8 py-8">
        {/* Lesson header */}
        <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
          Lesson {lesson.num} · {t(lang, labels.difficulty.en, labels.difficulty.zh)}{" "}
          {lesson.badge}
        </div>
        <h1 className="text-[22px] font-semibold text-gray-900 leading-tight">
          {t(lang, lesson.title, lesson.titleZh)}
        </h1>
        {lesson.subtitle && (
          <p className="text-[14px] text-gray-500 mt-1.5 leading-relaxed">
            {t(lang, lesson.subtitle, lesson.subtitleZh)}
          </p>
        )}

        {/* Content */}
        {hasContent ? (
          <div className="mt-8 space-y-8">
            {lesson.sections.map((section, i) => {
              switch (section.type) {
                case "goals":
                  return <Goals key={i} section={section} lang={lang} />;
                case "intro":
                  return <Background key={i} section={section} lang={lang} />;
                case "vocab":
                  return <Vocab key={i} section={section} lang={lang} />;
                case "image":
                  return (
                    <ImagePlaceholder key={i} section={section} lang={lang} />
                  );
                case "source":
                  return <SourceBox key={i} section={section} lang={lang} />;
                case "think":
                  return <ThinkCard key={i} section={section} lang={lang} />;
                case "quiz":
                  return <QuizCard key={i} section={section} lang={lang} />;
                default:
                  return null;
              }
            })}
          </div>
        ) : (
          /* Coming soon placeholder */
          <div className="flex flex-col items-center justify-center h-[300px] gap-3 mt-8">
            <span className="text-3xl text-gray-300">📄</span>
            <p className="text-[14px] text-gray-400">
              {t(lang, labels.comingSoon.en, labels.comingSoon.zh)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
