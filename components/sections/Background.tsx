"use client";

import { IntroSection } from "@/data/types";
import { Lang, t, labels } from "@/lib/i18n";

interface Props {
  section: IntroSection;
  lang: Lang;
}

export default function Background({ section, lang }: Props) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">
        <span>📖</span>
        {t(lang, labels.background.en, labels.background.zh)}
      </div>
      <div className="bg-white border border-border rounded-lg p-5 space-y-4">
        {section.content.map((block, i) => {
          if (block.type === "text") {
            return (
              <p key={i} className="text-[14px] text-gray-700 leading-[1.8]">
                {t(lang, block.en, block.zh)}
              </p>
            );
          }
          if (block.type === "highlight") {
            return (
              <div
                key={i}
                className="bg-highlight-bg border-l-[3px] border-highlight-border rounded-r-lg px-4 py-3 text-[14px] text-gray-800 leading-[1.8]"
              >
                {t(lang, block.en, block.zh)}
              </div>
            );
          }
          if (block.type === "example") {
            return (
              <div
                key={i}
                className="bg-example-bg border-l-[3px] border-example-border rounded-r-lg px-4 py-3 text-[14px] text-gray-700 leading-[1.8] flex items-start gap-2"
              >
                <span className="shrink-0 mt-0.5">💡</span>
                <span>{t(lang, block.en, block.zh)}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
