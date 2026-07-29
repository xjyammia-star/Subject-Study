// 放到: components/GlobalLanguageToggle.tsx
"use client";

import { useEffect, useState } from "react";

export const LANG_KEY = "study-lang";

export default function GlobalLanguageToggle() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  // Read from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh") setLang("zh");
  }, []);

  const toggle = (newLang: "en" | "zh") => {
    setLang(newLang);
    localStorage.setItem(LANG_KEY, newLang);
    // Dispatch a custom event so TopicPage can react
    window.dispatchEvent(new CustomEvent("langchange", { detail: newLang }));
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={() => toggle("en")}
        className={`text-[12px] px-2.5 py-[3px] rounded-md border transition-colors ${
          lang === "en"
            ? "bg-accent-light text-accent border-border-accent"
            : "bg-transparent text-gray-500 border-border hover:border-gray-500"
        }`}
      >
        English
      </button>
      <button
        onClick={() => toggle("zh")}
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
