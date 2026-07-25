"use client";

import { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  onToggle: (lang: Lang) => void;
}

export default function LanguageToggle({ lang, onToggle }: Props) {
  return (
    <div className="flex gap-1 mt-2.5">
      <button
        onClick={() => onToggle("en")}
        className={`text-[12px] px-2.5 py-[3px] rounded-md border transition-colors ${
          lang === "en"
            ? "bg-accent-light text-accent border-border-accent"
            : "bg-transparent text-gray-500 border-border hover:border-gray-500"
        }`}
      >
        English
      </button>
      <button
        onClick={() => onToggle("zh")}
        className={`text-[12px] px-2.5 py-[3px] rounded-md border transition-colors ${
          lang === "zh"
            ? "bg-accent-light text-accent border-border-accent"
            : "bg-transparent text-gray-500 border-border hover:border-gray-500"
        }`}
      >
        中文
      </button>
    </div>
  );
}
