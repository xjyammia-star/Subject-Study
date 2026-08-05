"use client";

import { useState } from "react";
import { QuizSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";
import { renderChem } from "@/lib/renderChem";

interface Props {
  section: QuizSection;
  lang: Lang;
}

export default function QuizCard({ section, lang }: Props) {
  const [chosen, setChosen] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (chosen !== null) return;
    setChosen(idx);
  };

  const isCorrect = chosen === section.correct;

  return (
    <div>
      <div className="h-[0.5px] bg-border my-5" />
      <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">
        <span>✅</span>
        {t(lang, labels.quickCheck.en, labels.quickCheck.zh)}
      </div>
      <div className="bg-surface-3 border border-border rounded-lg p-5">
        <p className="text-[15px] font-medium text-gray-100 mb-4 leading-[1.6]">
          {renderChem(t(lang, section.qEn, section.qZh))}
        </p>
        <div className="space-y-2">
          {section.opts.map((opt, idx) => {
            let classes =
              "w-full text-left px-4 py-3 rounded-lg border text-[15px] leading-relaxed transition-colors ";
            if (chosen === null) {
              classes += "border-border text-gray-300 hover:border-accent hover:text-accent cursor-pointer bg-surface-2";
            } else if (idx === section.correct) {
              classes += "bg-success-bg border-success-border text-success-text font-medium cursor-default";
            } else if (idx === chosen && !isCorrect) {
              classes += "bg-danger-bg border-danger-border text-danger-text cursor-default";
            } else {
              classes += "border-border text-gray-600 cursor-default bg-transparent";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={chosen !== null}
                className={classes}
              >
                {renderChem(t(lang, opt.en, opt.zh))}
              </button>
            );
          })}
        </div>
        {chosen !== null && (
          <div className={`mt-4 p-4 rounded-lg text-[15px] leading-[1.7] ${
            isCorrect ? "bg-success-bg text-success-text" : "bg-danger-bg text-danger-text"
          }`}>
            <strong>
              {isCorrect
                ? t(lang, labels.correct.en, labels.correct.zh)
                : t(lang, labels.notQuite.en, labels.notQuite.zh)}
            </strong>{" "}
            {renderChem(isCorrect
              ? t(lang, section.explainCorrectEn, section.explainCorrectZh)
              : t(lang, section.explainWrongEn, section.explainWrongZh))}
          </div>
        )}
      </div>
    </div>
  );
}
