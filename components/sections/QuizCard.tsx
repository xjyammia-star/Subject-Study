"use client";

import { useState } from "react";
import { QuizSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";

interface Props {
  section: QuizSection;
  lang: Lang;
}

export default function QuizCard({ section, lang }: Props) {
  const [chosen, setChosen] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (chosen !== null) return; // already answered — lock
    setChosen(idx);
  };

  const isCorrect = chosen === section.correct;

  return (
    <div>
      {/* Divider */}
      <div className="h-[0.5px] bg-border my-5" />

      <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
        <span>✅</span>
        {t(lang, labels.quickCheck.en, labels.quickCheck.zh)}
      </div>
      <div className="bg-white border border-border rounded-lg p-5">
        <p className="text-[14px] font-medium text-gray-900 mb-4 leading-[1.6]">
          {t(lang, section.qEn, section.qZh)}
        </p>
        <div className="space-y-2">
          {section.opts.map((opt, idx) => {
            let classes =
              "w-full text-left px-4 py-3 rounded-lg border text-[14px] leading-relaxed transition-colors ";

            if (chosen === null) {
              // Not yet answered
              classes +=
                "border-border text-gray-700 hover:border-accent hover:text-accent cursor-pointer";
            } else if (idx === section.correct) {
              // Correct answer — always green
              classes +=
                "bg-success-bg border-success-border text-success-text font-medium cursor-default";
            } else if (idx === chosen && !isCorrect) {
              // Wrong answer user chose
              classes +=
                "bg-danger-bg border-danger-border text-danger-text cursor-default";
            } else {
              // Other options — disabled
              classes +=
                "border-border text-gray-400 cursor-default";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={chosen !== null}
                className={classes}
              >
                {t(lang, opt.en, opt.zh)}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {chosen !== null && (
          <div
            className={`mt-4 p-4 rounded-lg text-[14px] leading-[1.7] ${
              isCorrect
                ? "bg-success-bg text-success-text"
                : "bg-danger-bg text-danger-text"
            }`}
          >
            <strong>
              {isCorrect
                ? t(lang, labels.correct.en, labels.correct.zh)
                : t(lang, labels.notQuite.en, labels.notQuite.zh)}
            </strong>{" "}
            {isCorrect
              ? t(lang, section.explainCorrectEn, section.explainCorrectZh)
              : t(lang, section.explainWrongEn, section.explainWrongZh)}
          </div>
        )}
      </div>
    </div>
  );
}
