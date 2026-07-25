"use client";

import { useState } from "react";
import { ThinkSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";

interface Props {
  section: ThinkSection;
  lang: Lang;
}

export default function ThinkCard({ section, lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">
        <span>💬</span>
        {t(lang, labels.thinkExplore.en, labels.thinkExplore.zh)}
      </div>
      <div className="space-y-3">
        {section.questions.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-surface-3 border border-border rounded-lg p-4"
            >
              <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-2">
                <span>❓</span>
                {t(lang, labels.thinkAbout.en, labels.thinkAbout.zh)}
              </div>
              <p className="text-[15px] text-gray-200 leading-[1.7] mb-3">
                {t(lang, q.qEn, q.qZh)}
              </p>
              <button
                onClick={() => toggle(i)}
                className="flex items-center gap-1.5 text-[14px] text-accent hover:text-indigo-300 transition-colors"
              >
                <span>{isOpen ? "👁️‍🗨️" : "👁️"}</span>
                <span>
                  {isOpen
                    ? t(lang, labels.hideExplanation.en, labels.hideExplanation.zh)
                    : t(lang, labels.showExplanation.en, labels.showExplanation.zh)}
                </span>
              </button>
              {isOpen && (
                <div className="mt-3 pt-3 border-t border-border text-[15px] text-gray-400 leading-[1.8]">
                  {t(lang, q.aEn, q.aZh)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
