// 放到: components/TopicPage.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import { Topic } from "@/data/types";
import { Lang } from "@/lib/i18n";
import Sidebar from "./Sidebar";
import LessonView from "./LessonView";
import { LANG_KEY } from "./GlobalLanguageToggle";

interface Props {
  topic: Topic;
}

export default function TopicPage({ topic }: Props) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [lang, setLang] = useState<Lang>("en");
  const [viewKey, setViewKey] = useState(0);

  // Read language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh") {
      setLang("zh");
      setViewKey((k) => k + 1);
    }
  }, []);

  // Listen for global language changes from the fixed toggle
  useEffect(() => {
    const handler = (e: Event) => {
      const newLang = (e as CustomEvent<Lang>).detail;
      setLang(newLang);
      setViewKey((k) => k + 1);
    };
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  const handleLangToggle = useCallback((newLang: Lang) => {
    setLang(newLang);
    setViewKey((k) => k + 1);
    localStorage.setItem(LANG_KEY, newLang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: newLang }));
  }, []);

  const handleSelectLesson = useCallback((idx: number) => {
    setCurrentLesson(idx);
    setViewKey((k) => k + 1);
  }, []);

  const lesson = topic.lessons[currentLesson];

  return (
    <div className="flex h-screen bg-surface-0">
      <Sidebar
        topic={topic}
        currentLesson={currentLesson}
        lang={lang}
        onSelectLesson={handleSelectLesson}
        onToggleLang={handleLangToggle}
      />
      <LessonView
        key={viewKey}
        lesson={lesson}
        lang={lang}
        totalLessons={topic.lessons.length}
      />
    </div>
  );
}
