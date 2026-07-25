"use client";

import { VocabSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";

interface Props {
  section: VocabSection;
  lang: Lang;
}

export default function Vocab({ section, lang }: Props) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
        <span>📝</span>
        {t(lang, labels.keyVocabulary.en, labels.keyVocabulary.zh)}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {section.words.map((word, i) => (
          <div
            key={i}
            className="bg-white border border-border rounded-lg p-4"
          >
            <div className="text-[14px] font-medium text-gray-900">
              {t(lang, word.en, word.zh)}
            </div>
            <div className="text-[13px] text-gray-500 mt-1 leading-relaxed">
              {t(lang, word.defEn, word.defZh)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
