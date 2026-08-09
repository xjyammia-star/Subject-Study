"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LANG_KEY } from "@/components/GlobalLanguageToggle";

type Lang = "en" | "zh";

const t = (lang: Lang, en: string, zh: string) => (lang === "zh" ? zh : en);

/* ── Data ─────────────────────────────────────────────── */

const topics = [
  {
    id: 1,
    en: "Balloon-Powered Car Challenge",
    zh: "气球动力车挑战",
    variables: { en: "Shape of car / size of balloons / tyre size", zh: "车的形状 / 气球大小 / 轮胎大小" },
    tags: { en: "Physics · Forces", zh: "物理 · 力" },
  },
  {
    id: 2,
    en: "What Makes Ice Melt Fastest?",
    zh: "什么能让冰融化最快？",
    variables: { en: "Type of material added to ice", zh: "添加到冰上的物质种类" },
    tags: { en: "Chemistry · States of matter", zh: "化学 · 物质状态" },
  },
  {
    id: 3,
    en: "How Much Weight Can Your Boat Float?",
    zh: "你的船能浮起多少重量？",
    variables: { en: "Shape of boat / size of boat", zh: "船的形状 / 船的大小" },
    tags: { en: "Physics · Density & pressure", zh: "物理 · 密度与压力" },
  },
  {
    id: 4,
    en: "Rusting Out: How Acids Affect the Rate of Corrosion",
    zh: "锈蚀：酸如何影响腐蚀速率",
    variables: { en: "pH value / type of acid used", zh: "pH值 / 酸的种类" },
    tags: { en: "Chemistry · Reactions", zh: "化学 · 反应" },
  },
  {
    id: 5,
    en: "Plop, Plop, Fizz Fast: Effect of Temperature on Reaction Time",
    zh: "泡腾快速：温度对反应时间的影响",
    variables: { en: "Temperature of water", zh: "水的温度" },
    tags: { en: "Chemistry · Reaction rates", zh: "化学 · 反应速率" },
  },
  {
    id: 6,
    en: "Big Pieces or Small Pieces: Which React Faster?",
    zh: "大块还是小块：哪个反应更快？",
    variables: { en: "Size of tablet pieces", zh: "药片碎片的大小" },
    tags: { en: "Chemistry · Reaction rates", zh: "化学 · 反应速率" },
  },
  {
    id: 7,
    en: "Calcium Carbonate to the Rescue! How Antacids Relieve Heartburn",
    zh: "碳酸钙来救援！抗酸药如何缓解胃灼热",
    variables: { en: "Number of tablets / brand of tablets", zh: "药片数量 / 药片品牌" },
    tags: { en: "Chemistry · Acids & bases", zh: "化学 · 酸碱" },
  },
  {
    id: 8,
    en: "Build a Raft Powered by Surface Tension",
    zh: "靠表面张力驱动的木筏",
    variables: { en: "Number of detergent drops / type of detergent", zh: "洗洁剂滴数 / 洗洁剂种类" },
    tags: { en: "Physics · Surface tension", zh: "物理 · 表面张力" },
  },
  {
    id: 9,
    en: "Great Globs of Gluten! Which Wheat Flour Has The Most?",
    zh: "麦麸大比拼！哪种小麦面粉含麦麸最多？",
    variables: { en: "Type of flour / kneading time", zh: "面粉种类 / 揉搓时间" },
    tags: { en: "Biology · Food science", zh: "生物 · 食品科学" },
  },
  {
    id: 10,
    en: "Mixing Your Own Marshmallows: Finding the Right Ratio of Sugar to Corn Syrup",
    zh: "自制棉花糖：寻找糖与玉米糖浆的最佳比例",
    variables: { en: "Volume of sugar / volume of corn syrup", zh: "糖的体积 / 玉米糖浆的体积" },
    tags: { en: "Chemistry · Mixtures", zh: "化学 · 混合物 ★ 挑战题" },
    challenge: true,
  },
];

const criteria = [
  {
    area: { en: "1 · Research Question & Hypothesis", zh: "1 · 研究问题与假设" },
    items: [
      { en: "Research question is clearly stated and specific", zh: "研究问题表述清晰、具体" },
      { en: "Question is investigable within school resources and time", zh: "问题在学校资源和时间内可调查" },
      { en: "Hypothesis is a testable prediction based on the question", zh: "假设是基于研究问题的可检验预测" },
    ],
  },
  {
    area: { en: "2 · Background Research", zh: "2 · 背景研究" },
    items: [
      { en: "Sources are cited and used to inform the hypothesis", zh: "来源已引用并用于支持假设" },
    ],
  },
  {
    area: { en: "3 · Experimental Design", zh: "3 · 实验设计" },
    items: [
      { en: "Independent, dependent, and controlled variables clearly identified", zh: "清楚识别自变量、因变量和控制变量" },
      { en: "Method is detailed, logical, and replicable; steps numbered; hazards identified", zh: "步骤详细、逻辑清晰、可重复；步骤编号；识别安全隐患" },
      { en: "Full materials list with precise measurements", zh: "包含精确测量的完整材料清单" },
    ],
  },
  {
    area: { en: "4 · Data Collection & Presentation", zh: "4 · 数据收集与展示" },
    items: [
      { en: "Preliminary data collected to check the plan works", zh: "收集初步数据以验证方案可行" },
      { en: "Data table is present and correctly laid out", zh: "数据表格完整且格式正确" },
      { en: "Appropriate graph or chart used", zh: "使用了适当的图表" },
    ],
  },
  {
    area: { en: "5 · Conclusion", zh: "5 · 结论" },
    items: [
      { en: "Pattern of results is clearly described", zh: "清楚描述结果规律" },
      { en: "Science is used to explain the results", zh: "用科学知识解释结果" },
      { en: "Results compared to prediction and background research", zh: "将结果与假设和背景研究进行比较" },
      { en: "Discusses accuracy, precision, anomalies, or unexpected findings", zh: "讨论准确性、精确度、异常值或意外发现" },
      { en: "Suggests improvements or further investigation", zh: "提出改进建议或进一步研究方向" },
    ],
  },
  {
    area: { en: "6 · Verbal Presentation", zh: "6 · 口头展示" },
    items: [
      { en: "Clear structure: introduction, body, conclusion", zh: "结构清晰：引言、正文、结论" },
      { en: "Uses correct scientific vocabulary", zh: "使用正确的科学术语" },
      { en: "Maintains eye contact; varied pace and tone", zh: "保持眼神接触；语速和语调有变化" },
      { en: "Refers clearly to display board", zh: "清楚地参照展示板" },
      { en: "Stays within time limit; minimal notes", zh: "在时间限制内完成；尽量不依赖笔记" },
      { en: "Thorough preparation; ready to answer questions", zh: "充分准备；能够回答问题" },
    ],
  },
];

const conclusionTemplate = {
  en: [
    "My results show that [describe the pattern].",
    "This supports / does not support my prediction that [state hypothesis].",
    "This can be explained by [scientific explanation].",
    "One limitation was [identify a weakness].",
    "To improve, I could [suggest an improvement].",
    "In future, it would be interesting to investigate [further research idea].",
  ],
  zh: [
    "我的结果表明，[描述数据规律]。",
    "这 支持 / 不支持 我的假设，即 [写出你当初的预测]。",
    "这可以用 [科学知识解释原因] 来解释。",
    "一个局限性是 [指出一个弱点]。",
    "为了改进，我可以 [提出改进建议]。",
    "将来，进一步调查 [进一步研究想法] 将会很有意思。",
  ],
};

/* ── Component ────────────────────────────────────────── */

export default function KS3SymposiumPage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh") setLang("zh");
  }, []);

  useEffect(() => {
    const handler = (e: Event) => setLang((e as CustomEvent<Lang>).detail);
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col">

      {/* ── Header ── */}
      <header className="border-b border-border px-8 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-[13px] font-bold text-white">
          S
        </div>
        <span className="text-[14px] font-medium text-gray-300">
          {t(lang, "Study Notes", "学习笔记")}
        </span>
        <span className="text-gray-700 mx-1">&middot;</span>
        <Link href="/" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
          {t(lang, "Year 8", "八年级")}
        </Link>
        <span className="text-gray-700 mx-1">&middot;</span>
        <Link href="/subject/science" className="text-[13px] text-violet-400 hover:text-violet-300 transition-colors">
          {t(lang, "Science", "科学")}
        </Link>
        <span className="text-gray-700 mx-1">&middot;</span>
        <span className="text-[13px] font-medium text-gray-400">
          {t(lang, "KS3 Symposium", "初中科学研讨会")}
        </span>
      </header>

      <main className="flex-1 max-w-[760px] mx-auto w-full px-8 py-12 space-y-12">

        {/* ── Back link ── */}
        <Link
          href="/subject/science"
          className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-300 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t(lang, "Back to Science", "返回科学")}
        </Link>

        {/* ── Title block ── */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1">
            <span className="text-[11px] font-semibold text-violet-400 uppercase tracking-wider">
              {t(lang, "Year 8 · Science Project", "八年级 · 科学项目")}
            </span>
          </div>
          <h1 className="text-[30px] font-semibold text-gray-100 font-voice leading-tight">
            {t(lang, "KS3 Science Symposium", "初中科学研讨会")}
          </h1>
          <p className="text-[15px] text-gray-400 leading-relaxed max-w-[600px]">
            {t(
              lang,
              "Design and carry out your own scientific investigation, then present your findings to an audience. Choose one topic below, plan a fair test, collect data, and prepare your presentation.",
              "自己设计并开展科学调查，然后向观众展示你的发现。从下方选择一个题目，设计公平实验，收集数据，并准备你的展示。"
            )}
          </p>
        </div>

        {/* ── Section 1: Investigation Topics ── */}
        <section className="space-y-4">
          <SectionHeading
            lang={lang}
            en="Choose Your Investigation Topic"
            zh="选择你的研究题目"
            num="01"
          />
          <p className="text-[13px] text-gray-500">
            {t(
              lang,
              "Each topic lists a suggested independent variable — what you will change. You may propose a different variable for the same topic with teacher approval.",
              "每个题目列出了建议的自变量——即你将改变的内容。经老师批准后，你也可以为同一题目提出不同的自变量。"
            )}
          </p>

          <div className="space-y-2">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-surface-1 border border-border rounded-xl p-4 flex gap-4"
              >
                {/* Number */}
                <div className="shrink-0 w-7 h-7 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-[12px] font-semibold text-violet-400 mt-0.5">
                  {topic.id}
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  {/* Title */}
                  <div className="flex items-start gap-2 flex-wrap">
                    <span className="text-[14px] font-medium text-gray-100 leading-snug">
                      {t(lang, topic.en, topic.zh)}
                    </span>
                    {topic.challenge && (
                      <span className="shrink-0 text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-full px-2 py-0.5 mt-0.5">
                        {t(lang, "Challenge", "挑战题")}
                      </span>
                    )}
                  </div>

                  {/* Variable */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] text-gray-600">
                      {t(lang, "Variable:", "自变量：")}
                    </span>
                    <span className="text-[12px] text-violet-300/80">
                      {t(lang, topic.variables.en, topic.variables.zh)}
                    </span>
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[10px] text-gray-600 bg-surface-2 border border-border/60 rounded-full px-2 py-0.5">
                    {t(lang, topic.tags.en, topic.tags.zh)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Variables Explainer ── */}
        <section className="space-y-4">
          <SectionHeading
            lang={lang}
            en="Variables: The Golden Rule"
            zh="变量：黄金法则"
            num="02"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                label: { en: "Independent variable", zh: "自变量" },
                desc: { en: "The ONE factor you deliberately change", zh: "你故意改变的那一个因素" },
                color: "border-violet-500/40 bg-violet-500/5",
                dot: "bg-violet-400",
              },
              {
                label: { en: "Dependent variable", zh: "因变量" },
                desc: { en: "What you measure as a result", zh: "你作为结果测量的内容" },
                color: "border-emerald-500/40 bg-emerald-500/5",
                dot: "bg-emerald-400",
              },
              {
                label: { en: "Controlled variables", zh: "控制变量" },
                desc: { en: "Everything else kept the same", zh: "所有其他保持不变的因素" },
                color: "border-amber-500/40 bg-amber-500/5",
                dot: "bg-amber-400",
              },
            ].map((v) => (
              <div key={v.label.en} className={`rounded-xl border p-4 ${v.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                  <span className="text-[12px] font-semibold text-gray-200">
                    {t(lang, v.label.en, v.label.zh)}
                  </span>
                </div>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  {t(lang, v.desc.en, v.desc.zh)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Success Criteria ── */}
        <section className="space-y-4">
          <SectionHeading
            lang={lang}
            en="Success Criteria Checklist"
            zh="评分标准清单"
            num="03"
          />
          <p className="text-[13px] text-gray-500">
            {t(
              lang,
              "Use this as a checklist as you work through your project. Every item must be addressed to score full marks.",
              "在完成项目的过程中用这个清单检查自己。每一项都必须涵盖才能获得满分。"
            )}
          </p>

          <div className="space-y-3">
            {criteria.map((section) => (
              <div key={section.area.en} className="bg-surface-1 border border-border rounded-xl overflow-hidden">
                {/* Area header */}
                <div className="bg-surface-2 border-b border-border px-4 py-2.5">
                  <span className="text-[12px] font-semibold text-violet-300">
                    {t(lang, section.area.en, section.area.zh)}
                  </span>
                </div>
                {/* Items */}
                <div className="divide-y divide-border/50">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3">
                      <div className="shrink-0 w-4 h-4 mt-0.5 rounded border border-border bg-surface-3" />
                      <span className="text-[13px] text-gray-300 leading-relaxed">
                        {t(lang, item.en, item.zh)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Conclusion Template ── */}
        <section className="space-y-4">
          <SectionHeading
            lang={lang}
            en="Conclusion Writing Template"
            zh="结论写作模板"
            num="04"
          />
          <p className="text-[13px] text-gray-500">
            {t(
              lang,
              "Fill in each sentence using your own results and science knowledge.",
              "用你自己的结果和科学知识填写每个句子。"
            )}
          </p>
          <div className="bg-source-bg border border-source-border rounded-xl p-5 space-y-3">
            {conclusionTemplate[lang].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-[11px] font-semibold text-source-text mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[13px] text-gray-300 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer spacer ── */}
        <div className="h-8" />
      </main>
    </div>
  );
}

/* ── Sub-component: Section Heading ── */
function SectionHeading({
  lang, en, zh, num,
}: {
  lang: Lang; en: string; zh: string; num: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-semibold text-gray-600 tabular-nums">{num}</span>
      <div className="h-px flex-1 bg-border" />
      <h2 className="text-[14px] font-semibold text-gray-200 uppercase tracking-wide">
        {t(lang, en, zh)}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
