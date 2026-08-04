"use client";

import { ImageSection } from "@/data/types";
import { Lang, t } from "@/lib/i18n";

interface Props {
  section: ImageSection;
  lang: Lang;
}

export default function ImagePlaceholder({ section, lang }: Props) {
  if (section.url) {
    return (
      <figure className="rounded-lg overflow-hidden border border-border">
        <div className="relative w-full bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.url}
            alt={t(lang, section.caption, section.captionZh)}
            className="w-full h-auto object-contain"
          />
        </div>
        <figcaption className="bg-surface-2 px-4 py-2.5 text-[13px] text-gray-400 flex justify-between items-center">
          <span>{t(lang, section.caption, section.captionZh)}</span>
          <span className="text-[11px] text-gray-600">{section.source}</span>
        </figcaption>
      </figure>
    );
  }

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
