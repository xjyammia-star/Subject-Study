export type Lang = "en" | "zh";

/** Return the bilingual string for the current language */
export function t(lang: Lang, en: string, zh: string): string {
  return lang === "zh" ? zh : en;
}

/** UI labels used across the app */
export const labels = {
  lessons: { en: "Lessons", zh: "课程" },
  background: { en: "Background", zh: "背景介绍" },
  keyVocabulary: { en: "Key vocabulary", zh: "核心词汇" },
  keySource: { en: "Key historical source", zh: "重要历史来源" },
  thinkExplore: { en: "Think & explore", zh: "思考与探索" },
  thinkAbout: { en: "Think about this", zh: "思考一下" },
  showExplanation: { en: "Show explanation", zh: "显示解释" },
  hideExplanation: { en: "Hide explanation", zh: "隐藏解释" },
  quickCheck: { en: "Quick check", zh: "自测题" },
  correct: { en: "Correct!", zh: "正确！" },
  notQuite: { en: "Not quite.", zh: "不太对。" },
  comingSoon: { en: "Content coming soon.", zh: "内容正在准备中。" },
  difficulty: { en: "Difficulty", zh: "难度" },
  learningGoals: { en: "Learning goals", zh: "学习目标" },
};
