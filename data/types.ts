/* ===== Bilingual text helper ===== */
export interface BiText {
  en: string;
  zh: string;
}

/* ===== Section types ===== */

export interface GoalsSection {
  type: "goals";
  items: BiText[];
}

export interface IntroContentBlock {
  type: "text" | "highlight" | "example";
  en: string;
  zh: string;
}

export interface IntroSection {
  type: "intro";
  content: IntroContentBlock[];
}

export interface VocabWord {
  en: string;
  zh: string;
  defEn: string;
  defZh: string;
}

export interface VocabSection {
  type: "vocab";
  words: VocabWord[];
}

export interface ImageSection {
  type: "image";
  caption: string;
  captionZh: string;
  source: string;
  url?: string; // future: actual image URL
}

export interface SourceSection {
  type: "source";
  labelEn: string;
  labelZh: string;
  en: string;
  zh: string;
}

export interface ThinkQuestion {
  qEn: string;
  qZh: string;
  aEn: string;
  aZh: string;
}

export interface ThinkSection {
  type: "think";
  questions: ThinkQuestion[];
}

export interface QuizOption {
  en: string;
  zh: string;
}

export interface QuizSection {
  type: "quiz";
  qEn: string;
  qZh: string;
  opts: QuizOption[];
  correct: number; // index of correct option (0-based)
  explainCorrectEn: string;
  explainCorrectZh: string;
  explainWrongEn: string;
  explainWrongZh: string;
}

export type LessonSection =
  | GoalsSection
  | IntroSection
  | VocabSection
  | ImageSection
  | SourceSection
  | ThinkSection
  | QuizSection;

/* ===== Lesson ===== */
export interface Lesson {
  num: number;
  badge: "T" | "A" | "E"; // Taught / Applied / Extended
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  sections: LessonSection[];
}

/* ===== Topic ===== */
export interface Topic {
  slug: string;
  name: string;
  nameZh: string;
  subject: string;
  subjectZh: string;
  year: string;
  lessons: Lesson[];
}
