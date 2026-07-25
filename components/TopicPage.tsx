"use client";

import { useState, useCallback } from "react";
import { Topic } from "@/data/types";
import { Lang } from "@/lib/i18n";
import Sidebar from "./Sidebar";
import LessonView from "./LessonView";

interface Props {
  topic: Topic;
}

export default function TopicPage({ topic }: Props) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [lang, setLang] = useState<Lang>("en");

  /**
   * When switching language, reset quiz/think state by forcing
   * a re-mount of LessonView via a key change.
   */
  const [viewKey, setViewKey] = useState(0);

  const handleLangToggle = useCallback((newLang: Lang) => {
    setLang(newLang);
    setViewKey((k) => k + 1); // force re-mount → resets answer states
  }, []);

  const handleSelectLesson = useCallback((idx: number) => {
    setCurrentLesson(idx);
    setViewKey((k) => k + 1); // also reset on lesson switch
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
