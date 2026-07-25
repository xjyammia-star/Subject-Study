"use client";

import { SourceSection } from "@/data/types";
import { Lang, t } from "@/lib/i18n";

interface Props {
  section: SourceSection;
  lang: Lang;
}

export default function SourceBox({ section, lang }: Props) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">
        <span>📜</span>
        {t(lang, section.labelEn, section.labelZh)}
      </div>
      <div className="bg-source-bg border-l-[3px] border-source-border rounded-r-lg px-5 py-4 text-[15px] text-source-text leading-[1.8] italic">
        {t(lang, section.en, section.zh)}
      </div>
    </div>
  );
}
