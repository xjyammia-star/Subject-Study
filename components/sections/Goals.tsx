"use client";

import { GoalsSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";

interface Props {
  section: GoalsSection;
  lang: Lang;
}

export default function Goals({ section, lang }: Props) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
        <span>📎</span>
        {t(lang, labels.learningGoals.en, labels.learningGoals.zh)}
      </div>
      <div className="space-y-2">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-[13px] text-gray-700 leading-relaxed"
          >
            <span className="text-accent mt-0.5 shrink-0">✓</span>
            <span>{t(lang, item.en, item.zh)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
