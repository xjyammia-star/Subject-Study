"use client";

import { ImageSection } from "@/data/types";
import { Lang, t } from "@/lib/i18n";

interface Props {
  section: ImageSection;
  lang: Lang;
}

export default function ImagePlaceholder({ section, lang }: Props) {
  return (
    <div className="bg-surface-2 border border-border rounded-lg flex flex-col items-center justify-center py-12 gap-2">
      <span className="text-2xl text-gray-600">🖼️</span>
      <span className="text-[14px] text-gray-400">
        {t(lang, section.caption, section.captionZh)}
      </span>
      <span className="text-[11px] text-gray-600">{section.source}</span>
    </div>
  );
}
