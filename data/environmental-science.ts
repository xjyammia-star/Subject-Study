import { Topic } from "./types";

const environmentalScience: Topic = {
  id: "environmental-science",
  subject: "science",
  title: "Environmental Science Theory",
  titleZh: "\u73af\u5883\u79d1\u5b66\u7406\u8bba",
  description: "Air pollution, fossil fuels, energy transfers, and climate change",
  descriptionZh: "\u7a7a\u6c14\u6c61\u67d3\u3001\u5316\u77f3\u71c3\u6599\u3001\u80fd\u91cf\u8f6c\u6362\u4e0e\u6c14\u5019\u53d8\u5316",
  color: "purple",
  lessons: [
    // ─── L1: Air Pollution ───────────────────────────────────────────────────
    {
      id: 1,
      title: "Air Pollution",
      titleZh: "\u7a7a\u6c14\u6c61\u67d3",
      badge: "T",
      goals: [
        {
          en: "I can name the main air pollutants, their sources, and their effects on health and the environment.",
          zh: "\u6211\u80fd\u8bf4\u51fa\u4e3b\u8981\u7a7a\u6c14\u6c61\u67d3\u7269\u53ca\u5176\u6765\u6e90\u548c\u5bf9\u5065\u5eb7\u4e0e\u73af\u5883\u7684\u5f71\u54cd\u3002",
        },
        {
          en: "I can explain what the Air Quality Index (AQI) measures and what the colour categories mean.",
          zh: "\u6211\u80fd\u89e3\u91ca\u7a7a\u6c14\u8d28\u91cf\u6307\u6570\uff08AQI\uff09\u7684\u542b\u4e49\u4ee5\u53ca\u5404\u8272\u7ea7\u522b\u4ee3\u8868\u7684\u610f\u601d\u3002",
        },
        {
          en: "I can describe actions that help reduce air pollution and explain how each one works.",
          zh: "\u6211\u80fd\u63cf\u8ff0\u51cf\u5c11\u7a7a\u6c14\u6c61\u67d3\u7684\u51b7\u9996\u65b9\u6cd5\uff0c\u5e76\u89e3\u91ca\u5176\u539f\u7406\u3002",
        },
      ],
      background: {
        en: "Air pollution is caused by harmful substances released into the atmosphere. The five main pollutants studied in this topic are **carbon dioxide (CO2)**, **carbon monoxide (CO)**, **sulfur dioxide (SO2)**, **nitrogen oxides (NOx)**, and **particulates (PM2.5 and PM10)**.\n\nMost of these come from burning fossil fuels in power stations and vehicle engines. Their effects differ: carbon dioxide is the main driver of the greenhouse effect; carbon monoxide reduces the oxygen-carrying ability of the blood and can be fatal in enclosed spaces; sulfur dioxide and nitrogen oxides cause acid rain and breathing problems; particulates damage the lungs and heart.\n\nNote that carbon dioxide does not directly harm human health, so it is **not** counted in AQI calculations — even though it is still a serious environmental pollutant.\n\nThe **Air Quality Index (AQI)** is a standardised scale used to measure how polluted the air is on any given day. It runs from 0 to 500 and is colour-coded: green (0–50, Good) → yellow (51–100, Moderate) → orange (101–150, Unhealthy for Sensitive Groups) → red (151–200, Unhealthy) → purple (201–300, Very Unhealthy) → maroon (301–500, Hazardous).",
        zh: "\u7a7a\u6c14\u6c61\u67d3\u662f\u6307\u6709\u5bb3\u7269\u8d28\u8fdb\u5165\u5927\u6c14\u5bfc\u81f4\u7684\u73af\u5883\u95ee\u9898\u3002\u672c\u8bfe\u5b66\u4e60\u7684\u4e94\u5927\u4e3b\u8981\u6c61\u67d3\u7269\u662f\uff1a\u4e8c\u6c27\u5316\u7816\uff08CO2\uff09\u3001\u4e00\u6c27\u5316\u7816\uff08CO\uff09\u3001\u4e8c\u6c27\u5316\u786b\uff08SO2\uff09\u3001\u6c2e\u6c27\u5316\u7269\uff08NOx\uff09\u548c\u9817\u7c92\u7269\uff08PM2.5\u548cPM10\uff09\u3002\n\n\u5927\u591a\u6570\u6c61\u67d3\u7269\u6765\u81ea\u53d1\u7535\u7ad9\u548c\u8f66\u8f86\u53d1\u52a8\u673a\u71c3\u70e7\u5316\u77f3\u71c3\u6599\u3002\u5b83\u4eec\u7684\u5e72\u5bb3\u5404\u6709\u4e0d\u540c\uff1aCO2\u662f\u6e29\u5ba4\u6548\u5e94\u7684\u4e3b\u8981\u63a8\u52a8\u5e94\uff1bCO\u4f1a\u964d\u4f4e\u8840\u6db2\u643a\u6c27\u80fd\u529b\uff0c\u5728\u5bc6\u95ed\u7a7a\u95f4\u4e2d\u53ef\u80fd\u81f4\u547d\uff1bSO2\u548cNOx\u5bfc\u81f4\u9178\u96e8\u548c\u547c\u5438\u95ee\u9898\uff1b\u9817\u7c92\u7269\u5219\u635f\u4f24\u80ba\u90e8\u548c\u5fc3\u810f\u3002\n\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cCO2\u5bf9\u4eba\u4f53\u5065\u5eb7\u6ca1\u6709\u76f4\u63a5\u5371\u5bb3\uff0c\u56e0\u6b64**\u4e0d\u5217\u5165**AQI\u8ba1\u7b97\u8303\u56f4\uff0c\u5c3d\u7ba1\u5b83\u4ecd\u662f\u4e25\u91cd\u7684\u73af\u5883\u6c61\u67d3\u7269\u3002\n\n**\u7a7a\u6c14\u8d28\u91cf\u6307\u6570\uff08AQI\uff09**\u662f\u8861\u91cf\u7a7a\u6c14\u6c61\u67d3\u7a0b\u5ea6\u7684\u6807\u51c6\u5316\u5c3a\u5ea6\uff0c\u8303\u56f4\u4e3a0\u52305000\u3002\u989c\u8272\u7f16\u7801\u4e3a\uff1a\u7eff\u8272\uff080\u201350\uff0c\u826f\u597d\uff09\u2192\u9ec4\u8272\uff0851\u2013100\uff0c\u4e2d\u7b49\uff09\u2192\u6a59\u8272\uff08101\u2013150\uff0c\u654f\u611f\u4eba\u7fa4\u4e0d\u5065\u5eb7\uff09\u2192\u7ea2\u8272\uff08151\u2013200\uff0c\u4e0d\u5065\u5eb7\uff09\u2192\u7d2b\u8272\uff08201\u2013300\uff0c\u975e\u5e38\u4e0d\u5065\u5eb7\uff09\u2192\u6800\u8272\uff08301\u2013500\uff0c\u5371\u9669\uff09\u3002",
      },
      vocab: [
        {
          term: "Air Quality Index (AQI)",
          termZh: "\u7a7a\u6c14\u8d28\u91cf\u6307\u6570\uff08AQI\uff09",
          definition: "A numerical scale from 0 to 500 that measures how polluted the air is on a given day, based on the concentrations of key pollutants.",
          definitionZh: "\u4e00\u4e2a0\u52305000\u7684\u6570\u5b57\u5c3a\u5ea6\uff0c\u6839\u636e\u4e3b\u8981\u6c61\u67d3\u7269\u6d53\u5ea6\u8861\u91cf\u5f53\u65e5\u7a7a\u6c14\u6c61\u67d3\u7a0b\u5ea6\u3002",
        },
        {
          term: "Particulates (PM2.5 / PM10)",
          termZh: "\u9817\u7c92\u7269\uff08PM2.5\uff09\uff08PM10\uff09",
          definition: "Tiny solid or liquid particles suspended in the air. PM2.5 are smaller and more dangerous as they penetrate deep into the lungs.",
          definitionZh: "\u60ac\u6d6e\u5728\u7a7a\u6c14\u4e2d\u7684\u5fae\u5c0f\u56fa\u4f53\u6216\u6db2\u4f53\u9897\u7c92\u3002PM2.5\u66f4\u5c0f\u4e5f\u66f4\u5371\u9669\uff0c\u80fd\u6df1\u5165\u80ba\u90e8\u3002",
        },
        {
          term: "Carbon monoxide (CO)",
          termZh: "\u4e00\u6c27\u5316\u7816\uff08CO\uff09",
          definition: "A colourless, odourless gas produced by incomplete combustion. It reduces the blood's ability to carry oxygen and is dangerous in enclosed spaces.",
          definitionZh: "\u4e0d\u5b8c\u5168\u71c3\u70e7\u4ea7\u751f\u7684\u65e0\u8272\u65e0\u5473\u6c14\u4f53\u3002\u5b83\u51cf\u5f31\u8840\u6db2\u643a\u6c27\u80fd\u529b\uff0c\u5728\u5bc6\u95ed\u573a\u6240\u6781\u4e3a\u5371\u9669\u3002",
        },
        {
          term: "Nitrogen oxides (NOx)",
          termZh: "\u6c2e\u6c27\u5316\u7269\uff08NOx\uff09",
          definition: "A group of gases including NO and NO2, produced when fossil fuels burn at high temperatures (e.g. in vehicle engines). They contribute to acid rain and respiratory problems.",
          definitionZh: "\u5305\u62ecNO\u548cNO2\u5728\u5185\u7684\u4e00\u7ec4\u6c14\u4f53\uff0c\u5728\u5316\u77f3\u71c3\u6599\u9ad8\u6e29\u71c3\u70e7\u65f6\uff08\u5982\u8f66\u8f86\u53d1\u52a8\u673a\uff09\u4ea7\u751f\u3002\u5bfc\u81f4\u9178\u96e8\u548c\u547c\u5438\u95ee\u9898\u3002",
        },
      ],
      image: {
        url: "",
        wikimediaFile: "Air_pollution_from_smokestacks.jpg",
        caption: "Factory smokestacks releasing pollutants into the atmosphere — a major source of SO2, NOx, and CO2.",
        captionZh: "\u5de5\u5382\u70df\u56f1\u5c06\u6c61\u67d3\u7269\u6392\u653e\u5165\u5927\u6c14\uff0c\u662fSO2\u3001NOx\u548cCO2\u7684\u4e3b\u8981\u6765\u6e90\u3002",
        source: "Wikimedia Commons",
      },
      sourceBox: {
        type: "source",
        label: "Air Pollutants — Causes and Effects (from lesson card sort)",
        labelZh: "\u7a7a\u6c14\u6c61\u67d3\u7269\u2014\u2014\u6765\u6e90\u4e0e\u5f71\u54cd\uff08\u8bfe\u5821\u5206\u7c7b\u5361\uff09",
        content: "CO2: complete combustion of fossil fuels → greenhouse effect. CO: incomplete combustion → reduces blood oxygen, potentially fatal. SO2: burning sulphur-containing fuels (e.g. coal) → acid rain, respiratory problems. NOx: high-temperature combustion in engines → acid rain, respiratory problems. Particulates: construction, fires → lung and heart damage, reduced visibility.",
        contentZh: "CO2\uff1a\u5316\u77f3\u71c3\u6599\u5b8c\u5168\u71c3\u70e7\u2192\u6e29\u5ba4\u6548\u5e94\u3002CO\uff1a\u4e0d\u5b8c\u5168\u71c3\u70e7\u2192\u964d\u4f4e\u8840\u6db2\u643a\u6c27\u91cf\uff0c\u53ef\u80fd\u81f4\u547d\u3002SO2\uff1a\u71c3\u70e7\u542b\u786b\u71c3\u6599\uff08\u5982\u7164\uff09\u2192\u9178\u96e8\u3001\u547c\u5438\u95ee\u9898\u3002NOx\uff1a\u53d1\u52a8\u673a\u9ad8\u6e29\u71c3\u70e7\u2192\u9178\u96e8\u3001\u547c\u5438\u95ee\u9898\u3002\u9817\u7c92\u7269\uff1a\u5efa\u7b51\u3001\u706b\u707e\u2192\u8086\u90e8\u4e0e\u5fc3\u810f\u635f\u4f24\u3001\u80fd\u89c1\u5ea6\u964d\u4f4e\u3002",
      },
      thinkCards: [
        {
          question: {
            en: "Carbon dioxide is released when fossil fuels burn, but it is NOT included in AQI calculations. Why?",
            zh: "\u5316\u77f3\u71c3\u6599\u71c3\u70e7\u4f1a\u91ca\u653e\u4e8c\u6c27\u5316\u7816\uff0c\u4f46CO2\u5374\u4e0d\u5217\u5165AQI\u8ba1\u7b97\u3002\u4e3a\u4ec0\u4e48\uff1f",
          },
          answer: {
            en: "The AQI measures pollutants that directly harm human health. Carbon dioxide does not directly cause respiratory or cardiovascular problems at the concentrations normally found in outdoor air — it is a long-term climate problem rather than an immediate health hazard. The AQI focuses on pollutants like CO, SO2, NOx, and particulates because their short-term effects on health are immediate and measurable.",
            zh: "AQI\u8861\u91cf\u7684\u662f\u76f4\u63a5\u5371\u5bb3\u4eba\u4f53\u5065\u5eb7\u7684\u6c61\u67d3\u7269\u3002\u5728\u6237\u5916\u5927\u6c14\u4e2d\u7684\u6b63\u5e38\u6d53\u5ea6\u4e0b\uff0cCO2\u4e0d\u4f1a\u76f4\u63a5\u9020\u6210\u547c\u5438\u6216\u5fc3\u8840\u7ba1\u95ee\u9898\uff0c\u5b83\u662f\u4e00\u4e2a\u957f\u671f\u6c14\u5019\u95ee\u9898\uff0c\u800c\u975e\u5373\u65f6\u5065\u5eb7\u5371\u5bb3\u3002AQI\u9996\u8981\u9776\u5b9aCO\u3001SO2\u3001NOx\u548c\u9817\u7c92\u7269\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u7269\u8d28\u5bf9\u5065\u5eb7\u7684\u77ed\u671f\u5f71\u54cd\u662f\u5373\u65f6\u4e14\u53ef\u6d4b\u91cf\u7684\u3002",
          },
        },
        {
          question: {
            en: "A city has an AQI reading of 175. What colour category is this, and what should the general public do according to the health guidelines?",
            zh: "\u67d0\u57ce\u5e02\u7684AQI\u8bfb\u6570\u4e3a175\u3002\u8fd9\u5c5e\u4e8e\u54ea\u79cd\u989c\u8272\u7ea7\u522b\uff1f\u6839\u636e\u5065\u5eb7\u6307\u5357\uff0c\u5927\u4f17\u5e94\u8be5\u600e\u4e48\u505a\uff1f",
          },
          answer: {
            en: "175 falls in the red category (151–200, Unhealthy). According to health guidelines, sensitive groups should avoid prolonged or heavy exertion outdoors, and the general public should also reduce prolonged or heavy exertion. Everyone should be more cautious about outdoor physical activity.",
            zh: "175\u5c5e\u4e8e\u7ea2\u8272\u7ea7\u522b\uff08151\u2013200\uff0c\u4e0d\u5065\u5eb7\uff09\u3002\u6839\u636e\u5065\u5eb7\u6307\u5357\uff0c\u654f\u611f\u4eba\u7fa4\u5e94\u907f\u514d\u5728\u6237\u5916\u8fdb\u884c\u957f\u65f6\u95f4\u6216\u5267\u70c8\u8fd0\u52a8\uff0c\u4e00\u822c\u5927\u4f17\u4e5f\u5e94\u51cf\u5c11\u8fd9\u7c7b\u6d3b\u52a8\u3002\u6240\u6709\u4eba\u5bf9\u6237\u5916\u4f53\u529b\u6d3b\u52a8\u5e94\u66f4\u52a0\u8c28\u614e\u3002",
          },
        },
      ],
      quiz: {
        question: {
          en: "Which statement correctly explains why carbon dioxide is NOT included in AQI calculations?",
          zh: "\u4ee5\u4e0b\u54ea\u9879\u6b63\u786e\u89e3\u91ca\u4e86\u4e8c\u6c27\u5316\u7816\u4e0d\u5217\u5165AQI\u7684\u539f\u56e0\uff1f",
        },
        options: [
          {
            en: "CO2 is not produced by burning fossil fuels.",
            zh: "CO2\u4e0d\u662f\u71c3\u70e7\u5316\u77f3\u71c3\u6599\u4ea7\u751f\u7684\u3002",
          },
          {
            en: "CO2 does not directly harm human health at normal outdoor concentrations.",
            zh: "CO2\u5728\u6237\u5916\u6b63\u5e38\u6d53\u5ea6\u4e0b\u4e0d\u76f4\u63a5\u5371\u5bb3\u4eba\u4f53\u5065\u5eb7\u3002",
          },
          {
            en: "CO2 is not a pollutant of any kind.",
            zh: "CO2\u6839\u672c\u4e0d\u662f\u4efb\u4f55\u610f\u4e49\u4e0a\u7684\u6c61\u67d3\u7269\u3002",
          },
          {
            en: "CO2 is already included in the AQI under another name.",
            zh: "CO2\u5df2\u4ee5\u5176\u4ed6\u540d\u79f0\u5305\u542b\u5728AQI\u4e2d\u3002",
          },
        ],
        correctIndex: 1,
        explanation: {
          en: "The AQI tracks pollutants that pose immediate risks to human health, such as CO, SO2, NOx, and particulates. CO2 is harmful to the climate over the long term but does not directly cause health problems (like breathing difficulties or heart issues) at outdoor concentrations. It is still an important environmental concern — just not an AQI pollutant.",
          zh: "AQI\u8ddf\u8e2a\u7684\u662f\u5bf9\u4eba\u4f53\u5065\u5eb7\u6784\u6210\u5373\u65f6\u5a01\u80c1\u7684\u6c61\u67d3\u7269\uff0c\u5982CO\u3001SO2\u3001NOx\u548c\u9817\u7c92\u7269\u3002CO2\u5728\u957f\u671f\u5185\u5bf9\u6c14\u5019\u6709\u5bb3\uff0c\u4f46\u5728\u6237\u5916\u6d53\u5ea6\u4e0b\u4e0d\u76f4\u63a5\u5f15\u8d77\u5065\u5eb7\u95ee\u9898\uff08\u5982\u547c\u5438\u56f0\u96be\u6216\u5fc3\u810f\u75c5\uff09\u3002\u5b83\u4ecd\u662f\u91cd\u8981\u7684\u73af\u5883\u95ee\u9898\uff0c\u53ea\u662f\u4e0d\u5217\u5165AQI\u6307\u6807\u3002",
        },
      },
    },
    // ─── L2: Fossil Fuels ────────────────────────────────────────────────────
    {
      id: 2,
      title: "Fossil Fuels",
      titleZh: "\u5316\u77f3\u71c3\u6599",
      badge: "T",
      goals: [
        {
          en: "I can name the three types of fossil fuel and explain that burning fuels releases carbon dioxide.",
          zh: "\u6211\u80fd\u8bf4\u51fa\u4e09\u79cd\u5316\u77f3\u71c3\u6599\uff0c\u5e76\u89e3\u91ca\u71c3\u70e7\u71c3\u6599\u4f1a\u91ca\u653e\u4e8c\u6c27\u5316\u7816\u3002",
        },
        {
          en: "I can describe briefly how coal is formed over millions of years.",
          zh: "\u6211\u80fd\u7b80\u8ff0\u716e\u662f\u5982\u4f55\u5728\u6570\u767e\u4e07\u5e74\u95f4\u5f62\u6210\u7684\u3002",
        },
        {
          en: "I can compare burning fossil fuels with burning wood and explain which leads to a net increase in atmospheric carbon dioxide.",
          zh: "\u6211\u80fd\u6bd4\u8f83\u71c3\u70e7\u5316\u77f3\u71c3\u6599\u4e0e\u71c3\u70e7\u6728\u6750\u7684\u533a\u522b\uff0c\u5e76\u89e3\u91ca\u54ea\u79cd\u4f1a\u5bfc\u81f4\u5927\u6c14\u4e2d\u4e8c\u6c27\u5316\u7816\u51c0\u589e\u52a0\u3002",
        },
      ],
      background: {
        en: "The three fossil fuels are **coal**, **oil**, and **natural gas**. They all contain carbon stored from ancient organisms and release it as carbon dioxide when burned.\n\nThe word equation for combustion is:\n**fuel + oxygen → carbon dioxide + water (+ energy)**\n\nCoal forms from dead plant material. When plants died millions of years ago, they were buried under soil and water before bacteria could fully decompose them. Over time, layers of rock and soil piled on top. The resulting heat and pressure slowly transformed the plant material into coal. This process takes millions of years — which is why fossil fuels are described as **non-renewable**.\n\nBoth fossil fuels and wood (biomass) release carbon dioxide when burned. However, there is a key difference: wood releases carbon that was recently absorbed from the atmosphere by growing trees. This means burning wood can be roughly **carbon neutral** — the CO2 released is balanced by what was absorbed. Fossil fuels, by contrast, release carbon that has been locked underground for millions of years, adding extra CO2 to the atmosphere that was not previously part of the modern carbon cycle.",
        zh: "\u4e09\u79cd\u5316\u77f3\u71c3\u6599\u5206\u522b\u662f\uff1a**\u716e**\u3001**\u77f3\u6cb9**\u548c**\u5929\u7136\u6c14**\u3002\u5b83\u4eec\u90fd\u542b\u6709\u53e4\u4ee3\u751f\u7269\u4e2d\u7684\u7816\uff0c\u71c3\u70e7\u65f6\u4ee5\u4e8c\u6c27\u5316\u7816\u7684\u5f62\u5f0f\u91ca\u653e\u3002\n\n\u71c3\u70e7\u7684\u6587\u5b57\u65b9\u7a0b\u5f0f\u4e3a\uff1a\n**\u71c3\u6599 + \u6c27\u6c14 \u2192 \u4e8c\u6c27\u5316\u7816 + \u6c34 + \u80fd\u91cf**\n\n\u716e\u7531\u6b7b\u4ea1\u7684\u690d\u7269\u6750\u6599\u5f62\u6210\u3002\u6570\u767e\u4e07\u5e74\u524d\uff0c\u690d\u7269\u6b7b\u4ea1\u540e\u5728\u7ec6\u83cc\u5206\u89e3\u4e4b\u524d\u88ab\u571f\u58e4\u548c\u6c34\u57cb\u6ca1\u3002\u968f\u7740\u65f6\u95f4\u63a8\u79fb\uff0c\u5c42\u5c42\u5ca9\u77f3\u548c\u571f\u58e4\u4e0d\u65ad\u5806\u79ef\u3002\u6240\u4ea7\u751f\u7684\u70ed\u548c\u538b\u529b\u6162\u6162\u5c06\u690d\u7269\u6750\u6599\u8f6c\u5316\u4e3a\u716e\u3002\u8fd9\u4e00\u8fc7\u7a0b\u9700\u8981\u6570\u767e\u4e07\u5e74\uff0c\u8fd9\u5c31\u662f\u5316\u77f3\u71c3\u6599\u88ab\u79f0\u4e3a**\u4e0d\u53ef\u518d\u751f**\u7684\u539f\u56e0\u3002\n\n\u5316\u77f3\u71c3\u6599\u548c\u6728\u6750\uff08\u751f\u7269\u8d28\uff09\u71c3\u70e7\u90fd\u91ca\u653eCO2\u3002\u4f46\u5173\u952e\u5dee\u5f02\u5728\u4e8e\uff1a\u6728\u6750\u71c3\u70e7\u91ca\u653e\u7684\u662f\u6811\u6728\u8fd1\u671f\u5438\u6536\u7684\u7816\uff0c\u56e0\u6b64\u71c3\u70e7\u6728\u6750\u53ef\u89c6\u4e3a\u57fa\u672c\u4e0a\u7684**\u7816\u4e2d\u6027**\u2014\u2014\u91ca\u653e\u4e0e\u5438\u6536\u7684CO2\u76f8\u5e73\u8861\u3002\u800c\u5316\u77f3\u71c3\u6599\u91ca\u653e\u7684\u662f\u5c01\u5b58\u4e86\u6570\u767e\u4e07\u5e74\u7684\u7816\uff0c\u5c06\u989d\u5916\u7684CO2\u52a0\u5165\u5927\u6c14\uff0c\u800c\u8fd9\u4e9bCO2\u6b64\u524d\u5e76\u4e0d\u5c5e\u4e8e\u73b0\u4ee3\u7816\u5faa\u73af\u7684\u4e00\u90e8\u5206\u3002",
      },
      vocab: [
        {
          term: "Fossil fuel",
          termZh: "\u5316\u77f3\u71c3\u6599",
          definition: "A fuel (coal, oil, or natural gas) formed from the remains of ancient organisms over millions of years under heat and pressure.",
          definitionZh: "\u7531\u53e4\u4ee3\u751f\u7269\u6b8b\u9aa8\u5728\u6570\u767e\u4e07\u5e74\u95f4\u7ecf\u70ed\u548c\u538b\u529b\u6f14\u53d8\u800c\u6210\u7684\u71c3\u6599\uff08\u716e\u3001\u77f3\u6cb9\u6216\u5929\u7136\u6c14\uff09\u3002",
        },
        {
          term: "Non-renewable",
          termZh: "\u4e0d\u53ef\u518d\u751f",
          definition: "A resource that cannot be replenished in a human lifetime. Fossil fuels take millions of years to form, so once used up they cannot be replaced.",
          definitionZh: "\u5728\u4eba\u7c7b\u5bff\u547d\u8303\u56f4\u5185\u65e0\u6cd5\u88ab\u8865\u5145\u7684\u8d44\u6e90\u3002\u5316\u77f3\u71c3\u6599\u9700\u6570\u767e\u4e07\u5e74\u624d\u80fd\u5f62\u6210\uff0c\u4e00\u65e6\u7528\u5c3d\u4fbf\u65e0\u6cd5\u66ff\u4ee3\u3002",
        },
        {
          term: "Combustion",
          termZh: "\u71c3\u70e7",
          definition: "A chemical reaction in which a fuel reacts with oxygen to release energy. Complete combustion produces carbon dioxide and water.",
          definitionZh: "\u71c3\u6599\u4e0e\u6c27\u6c14\u53cd\u5e94\u91ca\u653e\u80fd\u91cf\u7684\u5316\u5b66\u53cd\u5e94\u3002\u5b8c\u5168\u71c3\u70e7\u4ea7\u751f\u4e8c\u6c27\u5316\u7816\u548c\u6c34\u3002",
        },
        {
          term: "Carbon neutral",
          termZh: "\u7816\u4e2d\u6027",
          definition: "A process where the amount of CO2 released equals the amount absorbed, resulting in no net addition of CO2 to the atmosphere.",
          definitionZh: "\u6307\u91ca\u653e\u7684CO2\u91cf\u7b49\u4e8e\u5438\u6536\u7684CO2\u91cf\uff0c\u6700\u7ec8\u5bf9\u5927\u6c14\u4e2dCO2\u6c61\u4e0d\u4ea7\u751f\u51c0\u5c04\u5165\u3002",
        },
      ],
      image: {
        url: "",
        wikimediaFile: "Coal_mine_Wyoming.jpg",
        caption: "Coal mining extracts fossil fuel that took millions of years to form from ancient plant material.",
        captionZh: "\u716e\u77ff\u5f00\u91c7\u6570\u767e\u4e07\u5e74\u524d\u7531\u53e4\u4ee3\u690d\u7269\u6750\u6599\u6f14\u53d8\u800c\u6210\u7684\u5316\u77f3\u71c3\u6599\u3002",
        source: "Wikimedia Commons",
      },
      sourceBox: {
        type: "concept",
        label: "Key Concept: Why Fossil Fuels Add Extra CO2",
        labelZh: "\u6838\u5fc3\u6982\u5ff5\uff1a\u5316\u77f3\u71c3\u6599\u4e3a\u4ec0\u4e48\u4f1a\u5e26\u6765\u989d\u5916\u7684CO2",
        content: "Plants absorb CO2 from the air as they grow, so burning recently-grown wood roughly returns the same CO2 to the atmosphere (carbon neutral). Fossil fuels, however, contain carbon that was locked underground for millions of years and was NOT part of the recent atmosphere. Burning them adds extra CO2 — causing a net increase in atmospheric CO2 levels.",
        contentZh: "\u690d\u7269\u5728\u751f\u957f\u65f6\u4ece\u5927\u6c14\u4e2d\u5438\u6536CO2\uff0c\u56e0\u6b64\u71c3\u70e7\u8fd1\u671f\u79cd\u690d\u7684\u6728\u6750\u5927\u81f4\u628a\u76f8\u540c\u91cf\u7684CO2\u8fd4\u56de\u5927\u6c14\uff08\u7816\u4e2d\u6027\uff09\u3002\u7136\u800c\uff0c\u5316\u77f3\u71c3\u6599\u5305\u542b\u7684\u662f\u5c01\u5b58\u5730\u4e0b\u6570\u767e\u4e07\u5e74\u7684\u7816\uff0c\u5b83\u4eec\u5e76\u4e0d\u5c5e\u4e8e\u8fd1\u4ee3\u5927\u6c14\u5faa\u73af\u3002\u71c3\u70e7\u5b83\u4eec\u4f1a\u5411\u5927\u6c14\u589e\u52a0\u989d\u5916\u7684CO2\uff0c\u5bfc\u81f4\u5927\u6c14CO2\u6d53\u5ea6\u51c0\u589e\u3002",
      },
      thinkCards: [
        {
          question: {
            en: "A campaigner says burning wood from a newly planted forest is 'carbon neutral'. Is this claim correct? Explain your reasoning.",
            zh: "\u4e00\u4f4d\u74b0\u4fdd\u4e3b\u4e49\u8005\u8bf4\uff0c\u71c3\u70e7\u65b0\u79cd\u68ee\u6797\u4e2d\u7684\u6728\u6750\u662f\u201c\u7816\u4e2d\u6027\u201d\u7684\u3002\u8fd9\u4e2a\u8bf4\u6cd5\u6b63\u786e\u5417\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u63a8\u7406\u3002",
          },
          answer: {
            en: "The claim is broadly correct, but with a condition. When wood burns, it releases CO2 that the tree absorbed from the atmosphere as it grew. If new trees are planted to replace those burned, they will absorb roughly the same amount of CO2 back from the air. So the net change in atmospheric CO2 is close to zero — making it approximately carbon neutral. However, this only works if replanting actually happens and the trees grow to maturity.",
            zh: "\u8fd9\u4e2a\u8bf4\u6cd5\u5927\u4f53\u6b63\u786e\uff0c\u4f46\u6709\u4e00\u4e2a\u524d\u63d0\u3002\u6728\u6750\u71c3\u70e7\u65f6\u91ca\u653e\u7684CO2\uff0c\u662f\u6811\u6728\u5728\u751f\u957f\u8fc7\u7a0b\u4e2d\u4ece\u5927\u6c14\u4e2d\u5438\u6536\u7684\u3002\u5982\u679c\u79cd\u690d\u65b0\u6811\u8865\u4e0a\u88ab\u71c3\u70e7\u7684\uff0c\u65b0\u6811\u5c06\u518d\u6b21\u5438\u6536\u5927\u81f4\u76f8\u540c\u91cf\u7684CO2\u3002\u56e0\u6b64\u5927\u6c14CO2\u7684\u51c0\u53d8\u5316\u63a5\u8fd1\u4e8e\u96f6\uff0c\u53ef\u89c6\u4e3a\u8fd1\u4f3c\u7816\u4e2d\u6027\u3002\u7136\u800c\uff0c\u8fd9\u4ec5\u5728\u78ba\u5b9e\u8fdb\u884c\u4e86\u8865\u79cd\u4e14\u6811\u6728\u751f\u957f\u6210\u719f\u7684\u60c5\u51b5\u4e0b\u624d\u6210\u7acb\u3002",
          },
        },
        {
          question: {
            en: "Why are fossil fuels described as non-renewable, even though they are still being formed today?",
            zh: "\u5316\u77f3\u71c3\u6599\u4ecd\u5728\u6301\u7eed\u5f62\u6210\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u88ab\u79f0\u4e3a\u4e0d\u53ef\u518d\u751f\u8d44\u6e90\uff1f",
          },
          answer: {
            en: "Fossil fuels are technically still forming today, but the process takes millions of years. Humans are consuming them millions of times faster than they can form. So from a practical and human timescale perspective, once a deposit is used up it cannot be replaced — making fossil fuels effectively non-renewable.",
            zh: "\u5316\u77f3\u71c3\u6599\u5728\u6280\u672f\u4e0a\u786e\u5b9e\u4ecd\u5728\u5f62\u6210\uff0c\u4f46\u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u6570\u767e\u4e07\u5e74\u3002\u4eba\u7c7b\u6d88\u8017\u5b83\u4eec\u7684\u901f\u5ea6\u6bd4\u5176\u5f62\u6210\u7684\u901f\u5ea6\u5feb\u4e86\u6570\u767e\u4e07\u500d\u3002\u56e0\u6b64\u5728\u5b9e\u9645\u7684\u4eba\u7c7b\u65f6\u95f4\u5c3a\u5ea6\u4e0a\uff0c\u4e00\u65e6\u67d0\u4e2a\u77ff\u85cf\u88ab\u7528\u5c3d\u5c31\u65e0\u6cd5\u88ab\u66ff\u4ee3\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u4e0d\u53ef\u518d\u751f\u7684\u3002",
          },
        },
      ],
      quiz: {
        question: {
          en: "Why does burning fossil fuels cause a net increase in atmospheric CO2, while burning recently grown wood does not?",
          zh: "\u4e3a\u4ec0\u4e48\u71c3\u70e7\u5316\u77f3\u71c3\u6599\u4f1a\u5bfc\u81f4\u5927\u6c14CO2\u51c0\u589e\u52a0\uff0c\u800c\u71c3\u70e7\u8fd1\u671f\u6728\u6750\u5374\u4e0d\u4f1a\uff1f",
        },
        options: [
          {
            en: "Fossil fuels contain more carbon atoms than wood does.",
            zh: "\u5316\u77f3\u71c3\u6599\u6bd4\u6728\u6750\u542b\u6709\u66f4\u591a\u7816\u539f\u5b50\u3002",
          },
          {
            en: "Wood burns at a lower temperature than fossil fuels.",
            zh: "\u6728\u6750\u71c3\u70e7\u6e29\u5ea6\u6bd4\u5316\u77f3\u71c3\u6599\u4f4e\u3002",
          },
          {
            en: "Fossil fuels release carbon that was locked underground for millions of years, adding extra CO2 not recently in the atmosphere.",
            zh: "\u5316\u77f3\u71c3\u6599\u91ca\u653e\u7684\u662f\u5c01\u5b58\u6570\u767e\u4e07\u5e74\u7684\u7816\uff0c\u5c06\u989d\u5916\u7684CO2\u52a0\u5165\u5927\u6c14\u3002",
          },
          {
            en: "Wood does not contain carbon, so no CO2 is released when it burns.",
            zh: "\u6728\u6750\u4e0d\u542b\u7816\uff0c\u6240\u4ee5\u71c3\u70e7\u65f6\u4e0d\u91ca\u653eCO2\u3002",
          },
        ],
        correctIndex: 2,
        explanation: {
          en: "Both wood and fossil fuels contain carbon and produce CO2 when burned. The key difference is where that carbon came from. Wood's carbon was recently taken from the atmosphere by growing trees — so burning it returns carbon that was already circulating. Fossil fuels, however, contain ancient carbon that was removed from the atmosphere millions of years ago and locked underground. Burning them releases this 'extra' carbon, raising atmospheric CO2 levels.",
          zh: "\u6728\u6750\u548c\u5316\u77f3\u71c3\u6599\u90fd\u542b\u7816\uff0c\u71c3\u70e7\u65f6\u90fd\u4ea7\u751fCO2\u3002\u5173\u952e\u5dee\u5f02\u5728\u4e8e\u7816\u7684\u6765\u6e90\u3002\u6728\u6750\u4e2d\u7684\u7816\u662f\u6811\u6728\u751f\u957f\u671f\u95f4\u65e9\u5c31\u5438\u6536\u81ea\u5927\u6c14\u7684\uff0c\u71c3\u70e7\u4e0d\u8fc7\u662f\u5c06\u5df2\u5728\u5faa\u73af\u4e2d\u7684\u7816\u8fd4\u8fd8\u5927\u6c14\u3002\u5316\u77f3\u71c3\u6599\u5219\u4e0d\u540c\uff0c\u5b83\u4eec\u542b\u6709\u6570\u767e\u4e07\u5e74\u524d\u4ece\u5927\u6c14\u4e2d\u53d6\u51fa\u5e76\u5c01\u5b58\u5730\u4e0b\u7684\u53e4\u4ee3\u7816\u3002\u71c3\u70e7\u5316\u77f3\u71c3\u6599\u5c06\u8fd9\u4e9b\u201c\u989d\u5916\u201d\u7816\u91ca\u653e\u51fa\u6765\uff0c\u4f7f\u5927\u6c14CO2\u6d53\u5ea6\u5347\u9ad8\u3002",
        },
      },
    },
    // ─── L3: Forms of Energy ─────────────────────────────────────────────────
    {
      id: 3,
      title: "Forms of Energy",
      titleZh: "\u80fd\u91cf\u7684\u5f62\u5f0f",
      badge: "T",
      goals: [
        {
          en: "I can state the nine main forms of energy and give an everyday example of each.",
          zh: "\u6211\u80fd\u8bf4\u51fa\u4e5d\u79cd\u4e3b\u8981\u80fd\u91cf\u5f62\u5f0f\uff0c\u5e76\u4e3e\u51fa\u6bcf\u79cd\u7684\u65e5\u5e38\u4e3e\u4f8b\u3002",
        },
        {
          en: "I can work out the energy transfers in everyday situations.",
          zh: "\u6211\u80fd\u5224\u65ad\u65e5\u5e38\u60c5\u5883\u4e2d\u7684\u80fd\u91cf\u8f6c\u6362\u3002",
        },
        {
          en: "I understand that energy is not created or destroyed, only transferred from one form to another.",
          zh: "\u6211\u7406\u89e3\u80fd\u91cf\u4e0d\u80fd\u88ab\u521b\u9020\u6216\u6d88\u706d\uff0c\u53ea\u80fd\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u3002",
        },
      ],
      background: {
        en: "Energy exists in many forms. The nine main forms studied in this topic are:\n\n- **Light** — energy from the sun or a lamp\n- **Sound** — energy carried by vibrations through a medium\n- **Thermal (heat)** — energy associated with temperature\n- **Kinetic** — energy of moving objects\n- **Chemical** — energy stored in fuels, food, and batteries\n- **Electrical** — energy carried by moving electric charges\n- **Gravitational potential** — energy stored in objects above the ground\n- **Elastic potential** — energy stored in stretched or compressed objects (e.g. springs, rubber bands)\n- **Nuclear** — energy stored in the nucleus of atoms\n\nA key principle in science is that **energy cannot be created or destroyed** — it can only be transferred from one form to another. This is called the **conservation of energy**. When coal burns, for example, chemical energy in the coal is transferred to heat energy, light energy, and sound energy — none is lost, only converted.\n\nAnother important idea: when you see an object moving, stretched, raised above the ground, or connected to an electrical supply, there is always a store of energy involved.",
        zh: "\u80fd\u91cf\u4ee5\u591a\u79cd\u5f62\u5f0f\u5b58\u5728\u3002\u672c\u8bfe\u5b66\u4e60\u7684\u4e5d\u79cd\u4e3b\u8981\u80fd\u91cf\u5f62\u5f0f\u5305\u62ec\uff1a\n\n- **\u5149\u80fd** \u2014 \u6765\u81ea\u592a\u9633\u6216\u706f\u5177\u7684\u80fd\u91cf\n- **\u58f0\u80fd** \u2014 \u7531\u4ecb\u8d28\u4e2d\u7684\u632f\u52a8\u4f20\u9012\u7684\u80fd\u91cf\n- **\u70ed\u80fd\uff08\u70ed\u91cf\uff09** \u2014 \u4e0e\u6e29\u5ea6\u76f8\u5173\u7684\u80fd\u91cf\n- **\u52a8\u80fd** \u2014 \u8fd0\u52a8\u7269\u4f53\u6240\u5177\u6709\u7684\u80fd\u91cf\n- **\u5316\u5b66\u80fd** \u2014 \u5b58\u50a8\u5728\u71c3\u6599\u3001\u98df\u7269\u548c\u7535\u6c60\u4e2d\u7684\u80fd\u91cf\n- **\u7535\u80fd** \u2014 \u7531\u8fd0\u52a8\u7684\u7535\u8377\u4f20\u9012\u7684\u80fd\u91cf\n- **\u91cd\u529b\u52bf\u80fd** \u2014 \u5b58\u50a8\u5728\u5730\u9762\u4ee5\u4e0a\u7269\u4f53\u4e2d\u7684\u80fd\u91cf\n- **\u5f39\u6027\u52bf\u80fd** \u2014 \u5b58\u50a8\u5728\u62c9\u4f38\u6216\u538b\u7f29\u7684\u7269\u4f53\uff08\u5982\u5f39\u7c27\u3001\u6a61\u76ae\u7b4b\uff09\u4e2d\u7684\u80fd\u91cf\n- **\u6838\u80fd** \u2014 \u5b58\u50a8\u5728\u539f\u5b50\u6838\u4e2d\u7684\u80fd\u91cf\n\n\u79d1\u5b66\u4e2d\u7684\u4e00\u9879\u91cd\u8981\u539f\u5219\u662f\uff1a**\u80fd\u91cf\u4e0d\u80fd\u88ab\u521b\u9020\u6216\u6d88\u706d**\uff0c\u53ea\u80fd\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u3002\u8fd9\u88ab\u79f0\u4e3a**\u80fd\u91cf\u5b88\u6052\u5b9a\u5f8b**\u3002\u4f8b\u5982\uff0c\u716e\u71c3\u70e7\u65f6\uff0c\u716e\u4e2d\u7684\u5316\u5b66\u80fd\u8f6c\u6362\u4e3a\u70ed\u80fd\u3001\u5149\u80fd\u548c\u58f0\u80fd\u2014\u2014\u6ca1\u6709\u4efb\u4f55\u80fd\u91cf\u6d88\u5931\uff0c\u53ea\u662f\u5f62\u5f0f\u6539\u53d8\u3002",
      },
      vocab: [
        {
          term: "Kinetic energy",
          termZh: "\u52a8\u80fd",
          definition: "The energy an object has because it is moving. The faster an object moves, the more kinetic energy it has.",
          definitionZh: "\u7269\u4f53\u56e0\u8fd0\u52a8\u800c\u5177\u6709\u7684\u80fd\u91cf\u3002\u7269\u4f53\u8fd0\u52a8\u8d8a\u5feb\uff0c\u5177\u6709\u7684\u52a8\u80fd\u8d8a\u591a\u3002",
        },
        {
          term: "Gravitational potential energy",
          termZh: "\u91cd\u529b\u52bf\u80fd",
          definition: "Energy stored in an object due to its height above the ground. The higher the object, the more gravitational potential energy it has.",
          definitionZh: "\u7269\u4f53\u56e0\u5904\u4e8e\u5730\u9762\u4ee5\u4e0a\u800c\u5177\u6709\u7684\u80fd\u91cf\u3002\u7269\u4f53\u8d8a\u9ad8\uff0c\u91cd\u529b\u52bf\u80fd\u8d8a\u5927\u3002",
        },
        {
          term: "Elastic potential energy",
          termZh: "\u5f39\u6027\u52bf\u80fd",
          definition: "Energy stored in a stretched or compressed object such as a spring or rubber band.",
          definitionZh: "\u5b58\u50a8\u5728\u62c9\u4f38\u6216\u538b\u7f29\u7684\u7269\u4f53\uff08\u5982\u5f39\u7c27\u6216\u6a61\u76ae\u7b4b\uff09\u4e2d\u7684\u80fd\u91cf\u3002",
        },
        {
          term: "Conservation of energy",
          termZh: "\u80fd\u91cf\u5b88\u6052\u5b9a\u5f8b",
          definition: "The principle that energy cannot be created or destroyed, only transferred from one form to another.",
          definitionZh: "\u80fd\u91cf\u4e0d\u80fd\u88ab\u521b\u9020\u6216\u6d88\u706d\uff0c\u53ea\u80fd\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u539f\u5219\u3002",
        },
      ],
      image: {
        url: "",
        wikimediaFile: "Forms_of_energy.svg",
        caption: "The nine forms of energy — each can be converted into other forms but none is ever truly lost.",
        captionZh: "\u80fd\u91cf\u7684\u4e5d\u79cd\u5f62\u5f0f\u2014\u2014\u6bcf\u79cd\u5f62\u5f0f\u90fd\u53ef\u8f6c\u6362\u4e3a\u5176\u4ed6\u5f62\u5f0f\uff0c\u4f46\u6c38\u8fdc\u4e0d\u4f1a\u771f\u6b63\u6d88\u5931\u3002",
        source: "Wikimedia Commons",
      },
      sourceBox: {
        type: "concept",
        label: "Key Concept: Energy Stores",
        labelZh: "\u6838\u5fc3\u6982\u5ff5\uff1a\u80fd\u91cf\u5b58\u50a8",
        content: "Moving objects → kinetic energy. Objects above the ground → gravitational potential energy. Stretched objects → elastic potential energy. Fuels and food → chemical energy. Hot objects → thermal energy. Electric circuits → electrical energy. Light sources → light energy. Vibrating objects → sound energy. Atomic nuclei → nuclear energy.",
        contentZh: "\u8fd0\u52a8\u7684\u7269\u4f53 \u2192 \u52a8\u80fd\u3002\u5730\u9762\u4ee5\u4e0a\u7684\u7269\u4f53 \u2192 \u91cd\u529b\u52bf\u80fd\u3002\u62c9\u4f38\u7684\u7269\u4f53 \u2192 \u5f39\u6027\u52bf\u80fd\u3002\u71c3\u6599\u548c\u98df\u7269 \u2192 \u5316\u5b66\u80fd\u3002\u70ed\u7684\u7269\u4f53 \u2192 \u70ed\u80fd\u3002\u7535\u8def \u2192 \u7535\u80fd\u3002\u5149\u6e90 \u2192 \u5149\u80fd\u3002\u632f\u52a8\u7684\u7269\u4f53 \u2192 \u58f0\u80fd\u3002\u539f\u5b50\u6838 \u2192 \u6838\u80fd\u3002",
      },
      thinkCards: [
        {
          question: {
            en: "A ball is dropped from a height. Describe the energy transfers that take place from the moment it is released until it hits the ground.",
            zh: "\u5c06\u4e00\u4e2a\u7403\u4ece\u9ad8\u5904\u5f39\u8d77\u3002\u63cf\u8ff0\u4ece\u5b83\u88ab\u91ca\u653e\u5230\u843d\u5730\u8fd9\u6bb5\u65f6\u95f4\u5185\u53d1\u751f\u7684\u80fd\u91cf\u8f6c\u6362\u3002",
          },
          answer: {
            en: "When the ball is held at a height, it stores gravitational potential energy. The moment it is released, gravitational potential energy begins to transfer to kinetic energy as the ball speeds up. By the time the ball reaches the ground, most of its gravitational potential energy has been converted into kinetic energy (plus a small amount of sound and thermal energy due to air resistance).",
            zh: "\u5f53\u7403\u88ab\u6301\u5728\u9ad8\u5904\u65f6\uff0c\u5b83\u5b58\u50a8\u91cd\u529b\u52bf\u80fd\u3002\u4e00\u65e6\u91ca\u653e\uff0c\u91cd\u529b\u52bf\u80fd\u4fbf\u5f00\u59cb\u8f6c\u6362\u4e3a\u52a8\u80fd\uff0c\u7403\u7684\u901f\u5ea6\u8d8a\u6765\u8d8a\u5feb\u3002\u5f53\u7403\u5230\u8fbe\u5730\u9762\u65f6\uff0c\u7ed9\u5927\u90e8\u5206\u91cd\u529b\u52bf\u80fd\u5df2\u8f6c\u6362\u4e3a\u52a8\u80fd\uff08\u53e6\u52a0\u4e0a\u7531\u7a7a\u6c14\u963b\u529b\u4ea7\u751f\u7684\u5c11\u91cf\u58f0\u80fd\u548c\u70ed\u80fd\uff09\u3002",
          },
        },
        {
          question: {
            en: "A solar-powered calculator converts light energy into electrical energy. Is energy 'created' by this process? Explain.",
            zh: "\u592a\u9633\u80fd\u8ba1\u7b97\u5668\u5c06\u5149\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u5728\u201c\u521b\u9020\u201d\u80fd\u91cf\u5417\uff1f\u8bf7\u89e3\u91ca\u3002",
          },
          answer: {
            en: "No, energy is not created. The conservation of energy tells us that energy cannot be created or destroyed, only converted from one form to another. The solar cell converts light energy (from the sun) into electrical energy. The total amount of energy remains the same — it has simply changed form. The calculator uses the electrical energy, which is ultimately transferred to heat, light, and sound.",
            zh: "\u4e0d\uff0c\u80fd\u91cf\u5e76\u6ca1\u6709\u88ab\u521b\u9020\u3002\u80fd\u91cf\u5b88\u6052\u5b9a\u5f8b\u544a\u8bc9\u6211\u4eec\uff0c\u80fd\u91cf\u4e0d\u80fd\u88ab\u521b\u9020\u6216\u6d88\u706d\uff0c\u53ea\u80fd\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u3002\u592a\u9633\u80fd\u7535\u6c60\u5c06\uff08\u6765\u81ea\u592a\u9633\u7684\uff09\u5149\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u3002\u80fd\u91cf\u7684\u603b\u91cf\u4e0d\u53d8\uff0c\u53ea\u662f\u5f62\u5f0f\u6539\u53d8\u4e86\u3002\u8ba1\u7b97\u5668\u4f7f\u7528\u8fd9\u4e9b\u7535\u80fd\uff0c\u6700\u7ec8\u8f6c\u5316\u4e3a\u70ed\u80fd\u3001\u5149\u80fd\u548c\u58f0\u80fd\u3002",
          },
        },
      ],
      quiz: {
        question: {
          en: "A stretched rubber band is released and flicks a small ball through the air. Which energy transfer is happening when the rubber band is released?",
          zh: "\u4e00\u6839\u62c9\u4f38\u7684\u6a61\u76ae\u7b4b\u88ab\u91ca\u653e\uff0c\u5c06\u5c0f\u7403\u5f39\u5165\u7a7a\u4e2d\u3002\u6a61\u76ae\u7b4b\u88ab\u91ca\u653e\u65f6\u53d1\u751f\u4e86\u54ea\u79cd\u80fd\u91cf\u8f6c\u6362\uff1f",
        },
        options: [
          {
            en: "Chemical energy → kinetic energy",
            zh: "\u5316\u5b66\u80fd \u2192 \u52a8\u80fd",
          },
          {
            en: "Gravitational potential energy → elastic potential energy",
            zh: "\u91cd\u529b\u52bf\u80fd \u2192 \u5f39\u6027\u52bf\u80fd",
          },
          {
            en: "Elastic potential energy → kinetic energy",
            zh: "\u5f39\u6027\u52bf\u80fd \u2192 \u52a8\u80fd",
          },
          {
            en: "Thermal energy → kinetic energy",
            zh: "\u70ed\u80fd \u2192 \u52a8\u80fd",
          },
        ],
        correctIndex: 2,
        explanation: {
          en: "A stretched rubber band stores elastic potential energy. When released, this is transferred to the ball as kinetic energy — making it move through the air. This is a classic example of elastic potential energy converting to kinetic energy. No energy is created; it simply changes form.",
          zh: "\u62c9\u4f38\u7684\u6a61\u76ae\u7b4b\u5b58\u50a8\u5f39\u6027\u52bf\u80fd\u3002\u88ab\u91ca\u653e\u65f6\uff0c\u8fd9\u4e9b\u5f39\u6027\u52bf\u80fd\u8f6c\u6362\u4e3a\u5c0f\u7403\u7684\u52a8\u80fd\uff0c\u4f7f\u5176\u5728\u7a7a\u4e2d\u8fd0\u52a8\u3002\u8fd9\u662f\u5f39\u6027\u52bf\u80fd\u8f6c\u6362\u4e3a\u52a8\u80fd\u7684\u7ecf\u5178\u4e3e\u4f8b\u3002\u6ca1\u6709\u80fd\u91cf\u88ab\u521b\u9020\uff0c\u53ea\u662f\u5f62\u5f0f\u53d1\u751f\u4e86\u6539\u53d8\u3002",
        },
      },
    },
    // ─── L4: Energy Transfers and Generating Electricity ────────────────────
    {
      id: 4,
      title: "Energy Transfers and Generating Electricity",
      titleZh: "\u80fd\u91cf\u8f6c\u6362\u4e0e\u53d1\u7535",
      badge: "T",
      goals: [
        {
          en: "I can sequence the main stages of generating electricity using fossil fuels.",
          zh: "\u6211\u80fd\u6309\u987a\u5e8f\u8bf4\u51fa\u5316\u77f3\u71c3\u6599\u53d1\u7535\u7684\u4e3b\u8981\u9636\u6bb5\u3002",
        },
        {
          en: "I can identify the energy transfers involved in each stage of generating electricity.",
          zh: "\u6211\u80fd\u6307\u51fa\u53d1\u7535\u8fc7\u7a0b\u6bcf\u4e2a\u9636\u6bb5\u6240\u6d89\u53ca\u7684\u80fd\u91cf\u8f6c\u6362\u3002",
        },
        {
          en: "I understand that a power station transfers energy — it does not create energy.",
          zh: "\u6211\u7406\u89e3\u53d1\u7535\u7ad9\u662f\u8f6c\u6362\u80fd\u91cf\u800c\u975e\u521b\u9020\u80fd\u91cf\u7684\u3002",
        },
      ],
      background: {
        en: "A fossil fuel power station converts the **chemical energy** stored in fuel into **electrical energy** through a sequence of steps:\n\n1. **Fuel is burned in a furnace** — chemical energy in the fuel is released as thermal (heat) energy.\n2. **Water is heated in a boiler** — thermal energy transfers to water, turning it into steam.\n3. **Steam turns a turbine** — thermal energy of the steam converts to kinetic (movement) energy of the turbine.\n4. **The turbine turns a generator** — kinetic energy of the turbine converts to kinetic energy of the generator's rotor.\n5. **The generator produces electricity** — kinetic energy converts to electrical energy.\n\nThe main energy pathway is: **chemical → thermal → kinetic → electrical**\n\nNote: light and sound energy are also produced at various stages, but these are usually wasted (less useful) outputs.\n\nA very common misconception is that a power station 'makes' energy. This is incorrect — it only **transfers** energy from one form to another. The energy was already stored as chemical energy in the fuel.",
        zh: "\u5316\u77f3\u71c3\u6599\u53d1\u7535\u7ad9\u901a\u8fc7\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u5c06\u71c3\u6599\u4e2d\u5b58\u50a8\u7684**\u5316\u5b66\u80fd**\u8f6c\u6362\u4e3a**\u7535\u80fd**\uff1a\n\n1. **\u71c3\u6599\u5728\u71c3\u70e7\u5ba4\u71c3\u70e7** \u2014 \u71c3\u6599\u4e2d\u7684\u5316\u5b66\u80fd\u4ee5\u70ed\u80fd\u5f62\u5f0f\u91ca\u653e\u3002\n2. **\u9505\u7089\u4e2d\u7684\u6c34\u88ab\u52a0\u70ed** \u2014 \u70ed\u80fd\u8f6c\u79fb\u5230\u6c34\u4e2d\uff0c\u4f7f\u5176\u53d8\u4e3a\u84b8\u6c7d\u3002\n3. **\u84b8\u6c7d\u63a8\u52a8\u6db2\u529b\u673a\u65cb\u8f6c** \u2014 \u84b8\u6c7d\u7684\u70ed\u80fd\u8f6c\u6362\u4e3a\u6db2\u529b\u673a\u8f6c\u5b50\u7684\u52a8\u80fd\u3002\n4. **\u6db2\u529b\u673a\u5e26\u52a8\u53d1\u7535\u673a** \u2014 \u6db2\u529b\u673a\u7684\u52a8\u80fd\u8f6c\u6362\u4e3a\u53d1\u7535\u673a\u8f6c\u5b50\u7684\u52a8\u80fd\u3002\n5. **\u53d1\u7535\u673a\u4ea7\u751f\u7535\u80fd** \u2014 \u52a8\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u3002\n\n\u4e3b\u8981\u80fd\u91cf\u8f6c\u6362\u8def\u5f84\u4e3a\uff1a**\u5316\u5b66\u80fd \u2192 \u70ed\u80fd \u2192 \u52a8\u80fd \u2192 \u7535\u80fd**\n\n\u6ce8\u610f\uff1a\u5404\u9636\u6bb5\u4e5f\u4f1a\u4ea7\u751f\u5149\u80fd\u548c\u58f0\u80fd\uff0c\u4f46\u8fd9\u4e9b\u901a\u5e38\u662f\u6d6a\u8d39\u8f93\u51fa\uff08\u6ca1\u6709\u5f88\u5927\u7528\u5904\uff09\u3002\n\n\u4e00\u4e2a\u5e38\u89c1\u7684\u8bef\u533a\u662f\u8ba4\u4e3a\u53d1\u7535\u7ad9\u201c\u521b\u9020\u201d\u80fd\u91cf\u3002\u8fd9\u662f\u4e0d\u6b63\u786e\u7684\u2014\u2014\u5b83\u53ea\u662f\u5c06\u80fd\u91cf\u4ece\u4e00\u79cd\u5f62\u5f0f**\u8f6c\u6362**\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u3002\u80fd\u91cf\u5df2\u7ecf\u4ee5\u5316\u5b66\u80fd\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u71c3\u6599\u4e2d\u4e86\u3002",
      },
      vocab: [
        {
          term: "Turbine",
          termZh: "\u6db2\u529b\u673a",
          definition: "A machine with blades that spins when pushed by steam or water. In a power station, it converts thermal energy to kinetic energy.",
          definitionZh: "\u4e00\u79cd\u88ab\u84b8\u6c7d\u6216\u6c34\u63a8\u52a8\u800c\u65cb\u8f6c\u7684\u6709\u5e54\u673a\u68b0\u3002\u5728\u53d1\u7535\u7ad9\u4e2d\uff0c\u5b83\u5c06\u70ed\u80fd\u8f6c\u6362\u4e3a\u52a8\u80fd\u3002",
        },
        {
          term: "Generator",
          termZh: "\u53d1\u7535\u673a",
          definition: "A device that converts kinetic energy into electrical energy by spinning coils of wire inside a magnetic field.",
          definitionZh: "\u4e00\u79cd\u901a\u8fc7\u5728\u78c1\u573a\u4e2d\u65cb\u8f6c\u7ebf\u5708\u5c06\u52a8\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u7684\u88c5\u7f6e\u3002",
        },
        {
          term: "Boiler",
          termZh: "\u9505\u7089",
          definition: "The part of a power station where water is heated by burning fuel and converted into high-pressure steam.",
          definitionZh: "\u53d1\u7535\u7ad9\u4e2d\u901a\u8fc7\u71c3\u70e7\u71c3\u6599\u5c06\u6c34\u52a0\u70ed\u5e76\u8f6c\u5316\u4e3a\u9ad8\u538b\u84b8\u6c7d\u7684\u90e8\u5206\u3002",
        },
        {
          term: "Energy transfer",
          termZh: "\u80fd\u91cf\u8f6c\u6362",
          definition: "The process by which energy changes from one form to another, for example from chemical energy to thermal energy.",
          definitionZh: "\u80fd\u91cf\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u53d8\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u8fc7\u7a0b\uff0c\u4f8b\u5982\u5316\u5b66\u80fd\u8f6c\u6362\u4e3a\u70ed\u80fd\u3002",
        },
      ],
      image: {
        url: "",
        wikimediaFile: "Power_station_schematic_diagram.svg",
        caption: "Schematic of a fossil fuel power station: the energy pathway goes from chemical energy in the fuel to electrical energy at the generator.",
        captionZh: "\u5316\u77f3\u71c3\u6599\u53d1\u7535\u7ad9\u793a\u610f\u56fe\uff1a\u80fd\u91cf\u8f6c\u5316\u8def\u5f84\u4e3a\u71c3\u6599\u7684\u5316\u5b66\u80fd\u8f6c\u6362\u4e3a\u53d1\u7535\u673a\u7684\u7535\u80fd\u3002",
        source: "Wikimedia Commons",
      },
      sourceBox: {
        type: "concept",
        label: "Key Concept: The Energy Pathway in a Power Station",
        labelZh: "\u6838\u5fc3\u6982\u5ff5\uff1a\u53d1\u7535\u7ad9\u4e2d\u7684\u80fd\u91cf\u8f6c\u5316\u8def\u5f84",
        content: "Furnace (chemical → thermal) → Boiler (thermal heats water → steam) → Turbine (thermal → kinetic) → Generator (kinetic → electrical). Common mistake: a power station does NOT make energy. It transfers chemical energy stored in fuel into electrical energy.",
        contentZh: "\u71c3\u70e7\u5ba4\uff08\u5316\u5b66\u80fd\u2192\u70ed\u80fd\uff09\u2192 \u9505\u7089\uff08\u70ed\u80fd\u52a0\u70ed\u6c34\u2192\u84b8\u6c7d\uff09\u2192 \u6db2\u529b\u673a\uff08\u70ed\u80fd\u2192\u52a8\u80fd\uff09\u2192 \u53d1\u7535\u673a\uff08\u52a8\u80fd\u2192\u7535\u80fd\uff09\u3002\u5e38\u89c1\u9519\u8bef\uff1a\u53d1\u7535\u7ad9\u4e0d\u662f\u5728\u201c\u521b\u9020\u201d\u80fd\u91cf\uff0c\u800c\u662f\u5c06\u5b58\u50a8\u5728\u71c3\u6599\u4e2d\u7684\u5316\u5b66\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u3002",
      },
      thinkCards: [
        {
          question: {
            en: "A student says: 'Coal power stations create electrical energy from nothing.' Explain what is wrong with this statement.",
            zh: "\u4e00\u540d\u5b66\u751f\u8bf4\uff1a\u201c\u716e\u70ed\u7535\u7ad9\u51ed\u7a7a\u521b\u9020\u7535\u80fd\u3002\u201d\u8bf7\u89e3\u91ca\u8fd9\u4e2a\u8bf4\u6cd5\u6709\u4ec0\u4e48\u9519\u8bef\u3002",
          },
          answer: {
            en: "The statement is wrong because energy cannot be created from nothing — this is the law of conservation of energy. A coal power station does not create energy; it transfers the chemical energy stored in coal into electrical energy (through a series of intermediate steps involving thermal and kinetic energy). The energy existed before it was transferred — it was simply stored in the chemical bonds of the coal.",
            zh: "\u8fd9\u4e2a\u8bf4\u6cd5\u4e0d\u6b63\u786e\uff0c\u56e0\u4e3a\u80fd\u91cf\u4e0d\u80fd\u51ed\u7a7a\u521b\u9020\u2014\u2014\u8fd9\u662f\u80fd\u91cf\u5b88\u6052\u5b9a\u5f8b\u3002\u716e\u70ed\u7535\u7ad9\u5e76\u4e0d\u662f\u5728\u521b\u9020\u80fd\u91cf\uff1b\u5b83\u5c06\u716e\u4e2d\u5b58\u50a8\u7684\u5316\u5b66\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\uff08\u5c55\u8fc7\u4e00\u7cfb\u5217\u6d89\u53ca\u70ed\u80fd\u548c\u52a8\u80fd\u7684\u4e2d\u95f4\u6b65\u9aa4\uff09\u3002\u80fd\u91cf\u5728\u8f6c\u6362\u4e4b\u524d\u5c31\u5df2\u5b58\u5728\uff0c\u53ea\u662f\u4ee5\u5316\u5b66\u80fd\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u716e\u7684\u5316\u5b66\u952e\u4e2d\u3002",
          },
        },
        {
          question: {
            en: "In a fossil fuel power station, which parts of the system convert thermal energy into kinetic energy, and which convert kinetic energy into electrical energy?",
            zh: "\u5728\u5316\u77f3\u71c3\u6599\u53d1\u7535\u7ad9\u4e2d\uff0c\u54ea\u4e9b\u90e8\u4ef6\u5c06\u70ed\u80fd\u8f6c\u6362\u4e3a\u52a8\u80fd\uff1f\u54ea\u4e9b\u90e8\u4ef6\u5c06\u52a8\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\uff1f",
          },
          answer: {
            en: "The turbine converts thermal energy (in the steam) into kinetic energy — it spins as high-pressure steam pushes its blades. The generator converts kinetic energy into electrical energy — it uses the spinning motion of the turbine to rotate coils of wire inside a magnetic field, generating an electric current.",
            zh: "\u6db2\u529b\u673a\u5c06\u70ed\u80fd\uff08\u84b8\u6c7d\u7684\u70ed\u80fd\uff09\u8f6c\u6362\u4e3a\u52a8\u80fd\u2014\u2014\u9ad8\u538b\u84b8\u6c7d\u63a8\u52a8\u5e54\u7247\u65f6\u6db2\u529b\u673a\u65cb\u8f6c\u3002\u53d1\u7535\u673a\u5c06\u52a8\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u2014\u2014\u5b83\u5229\u7528\u6db2\u529b\u673a\u7684\u65cb\u8f6c\u8fd0\u52a8\u5e26\u52a8\u78c1\u573a\u4e2d\u7684\u7ebf\u5708\u65cb\u8f6c\uff0c\u4ece\u800c\u4ea7\u751f\u7535\u6d41\u3002",
          },
        },
      ],
      quiz: {
        question: {
          en: "In a coal-fired power station, what is the correct order of the energy transfers from fuel to electricity?",
          zh: "\u5728\u4e00\u4e2a\u716e\u70ed\u53d1\u7535\u7ad9\u4e2d\uff0c\u4ece\u71c3\u6599\u5230\u7535\u80fd\u7684\u80fd\u91cf\u8f6c\u5316\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f",
        },
        options: [
          {
            en: "Chemical → kinetic → thermal → electrical",
            zh: "\u5316\u5b66\u80fd \u2192 \u52a8\u80fd \u2192 \u70ed\u80fd \u2192 \u7535\u80fd",
          },
          {
            en: "Chemical → thermal → kinetic → electrical",
            zh: "\u5316\u5b66\u80fd \u2192 \u70ed\u80fd \u2192 \u52a8\u80fd \u2192 \u7535\u80fd",
          },
          {
            en: "Thermal → chemical → kinetic → electrical",
            zh: "\u70ed\u80fd \u2192 \u5316\u5b66\u80fd \u2192 \u52a8\u80fd \u2192 \u7535\u80fd",
          },
          {
            en: "Electrical → kinetic → thermal → chemical",
            zh: "\u7535\u80fd \u2192 \u52a8\u80fd \u2192 \u70ed\u80fd \u2192 \u5316\u5b66\u80fd",
          },
        ],
        correctIndex: 1,
        explanation: {
          en: "In a coal power station: (1) Coal burns — chemical energy becomes thermal energy. (2) Steam is produced — thermal energy heats water and drives the turbine (kinetic energy). (3) The turbine drives the generator — kinetic energy is converted to electrical energy. The pathway is: chemical → thermal → kinetic → electrical.",
          zh: "\u5728\u716e\u70ed\u53d1\u7535\u7ad9\u4e2d\uff1a\uff081\uff09\u716e\u71c3\u70e7\u2014\u2014\u5316\u5b66\u80fd\u8f6c\u5316\u4e3a\u70ed\u80fd\u3002\uff082\uff09\u84b8\u6c7d\u4ea7\u751f\u2014\u2014\u70ed\u80fd\u52a0\u70ed\u6c34\u5e76\u63a8\u52a8\u6db2\u529b\u673a\uff08\u52a8\u80fd\uff09\u3002\uff083\uff09\u6db2\u529b\u673a\u5e26\u52a8\u53d1\u7535\u673a\u2014\u2014\u52a8\u80fd\u8f6c\u6362\u4e3a\u7535\u80fd\u3002\u8def\u5f84\u4e3a\uff1a\u5316\u5b66\u80fd \u2192 \u70ed\u80fd \u2192 \u52a8\u80fd \u2192 \u7535\u80fd\u3002",
        },
      },
    },
  ],
};

export default environmentalScience;
