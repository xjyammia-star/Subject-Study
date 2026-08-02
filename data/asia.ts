import { Topic } from "./types";

export const asia: Topic = {
  slug: "asia",
  name: "Why is Asia the World\u2019s Largest Continent?",
  nameZh: "\u4e9a\u6d32\u4e3a\u4ec0\u4e48\u662f\u4e16\u754c\u6700\u5927\u7684\u5927\u6d32\uff1f",
  subject: "Geography",
  subjectZh: "\u5730\u7406",
  year: "Year 8",
  lessons: [

    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "How do Asia\u2019s regions vary?",
      titleZh: "\u4e9a\u6d32\u5404\u5730\u533a\u6709\u4f55\u4e0d\u540c\uff1f",
      subtitle: "Asia is the largest continent by land area and population \u2014 but it is also a continent of extraordinary contrasts.",
      subtitleZh: "\u4e9a\u6d32\u6309\u9646\u5730\u9762\u79ef\u548c\u4eba\u53e3\u8ba1\u7b97\u662f\u6700\u5927\u7684\u5927\u6d32\uff0c\u4f46\u5b83\u540c\u6837\u662f\u4e00\u4e2a\u5145\u6ee1\u5f3a\u70c8\u5bf9\u6bd4\u7684\u5927\u6d32\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain how \u2018largest\u2019 can be defined for continents.",
              zh: "\u6211\u80fd\u89e3\u91ca\u201c\u6700\u5927\u201d\u5bf9\u4e8e\u5927\u6d32\u53ef\u4ee5\u6709\u54ea\u4e9b\u5b9a\u4e49\u65b9\u5f0f\u3002",
            },
            {
              en: "I can identify Asia\u2019s main regions and some of their characteristics.",
              zh: "\u6211\u80fd\u8bc6\u522b\u4e9a\u6d32\u7684\u4e3b\u8981\u5730\u533a\u53ca\u5176\u4e00\u4e9b\u7279\u5f81\u3002",
            },
            {
              en: "I can name key physical features of Asia including its largest island, longest river, and highest mountain.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u4e9a\u6d32\u7684\u4e3b\u8981\u81ea\u7136\u5730\u7406\u7279\u5f81\uff0c\u5305\u62ec\u6700\u5927\u5c9b\u5c7f\u3001\u6700\u957f\u6cb3\u6d41\u548c\u6700\u9ad8\u5c71\u5cf0\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Asia is the largest continent on Earth by both land area and population. According to the United Nations, Asia contains 49 countries, though the exact number depends on how borders are defined \u2014 Russia and Turkey, for example, each span parts of both Asia and Europe.",
              zh: "\u4e9a\u6d32\u6309\u9646\u5730\u9762\u79ef\u548c\u4eba\u53e3\u8ba1\u7b97\u5747\u4e3a\u5730\u7403\u4e0a\u6700\u5927\u7684\u5927\u6d32\u3002\u6839\u636e\u8054\u5408\u56fd\u7684\u6570\u636e\uff0c\u4e9a\u6d32\u5171\u670949\u4e2a\u56fd\u5bb6\uff0c\u5c3d\u7ba1\u786e\u5207\u6570\u5b57\u53d6\u51b3\u4e8e\u8fb9\u754c\u5982\u4f55\u5212\u5b9a\u2014\u2014\u4f8b\u5982\u4fc4\u7f57\u65af\u548c\u571f\u8033\u5176\u5404\u81ea\u8de8\u8d8a\u4e9a\u6d32\u548c\u6b27\u6d32\u4e24\u90e8\u5206\u3002",
            },
            {
              type: "text",
              en: "Asia is home to over 4.7 billion people, making it the most populous continent by far. Tokyo is identified as Asia\u2019s largest metropolitan area. Other key physical records include: Borneo as Asia\u2019s biggest island, the Yangtze as Asia\u2019s longest river, Mount Everest and the Himalayas as the highest mountains, the Caspian Sea as the biggest lake, and the Gobi as the largest desert in Asia.",
              zh: "\u4e9a\u6d32\u62e5\u670947\u4ebf\u591a\u4eba\u53e3\uff0c\u8fdc\u8fdc\u662f\u4eba\u53e3\u6700\u591a\u7684\u5927\u6d32\u3002\u4e1c\u4eac\u662f\u4e9a\u6d32\u6700\u5927\u7684\u90fd\u5e02\u5708\u3002\u5176\u4ed6\u4e3b\u8981\u81ea\u7136\u5730\u7406\u8bb0\u5f55\u5305\u62ec\uff1a\u5a46\u7f57\u6d32\u662f\u4e9a\u6d32\u6700\u5927\u5c9b\u5c7f\uff0c\u957f\u6c5f\u662f\u4e9a\u6d32\u6700\u957f\u6cb3\u6d41\uff0c\u73e0\u7a46\u6717\u739b\u5cf0\u548c\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u662f\u6700\u9ad8\u5c71\u5cf0\uff0c\u91cc\u6d77\u662f\u6700\u5927\u6e56\u6cca\uff0c\u6208\u58c1\u6c99\u6f20\u662f\u4e9a\u6d32\u6700\u5927\u7684\u6c99\u6f20\u3002",
            },
            {
              type: "highlight",
              en: "Asia is divided into regions based on shared characteristics such as culture, climate, or location. The main regions are: Western Asia / the Middle East, South-East Asia, Eastern Asia, Southern Asia, Central Asia, and Northern Asia. These regions do not always have fixed boundaries.",
              zh: "\u4e9a\u6d32\u6839\u636e\u6587\u5316\u3001\u6c14\u5019\u6216\u5730\u7406\u4f4d\u7f6e\u7b49\u5171\u540c\u7279\u5f81\u5212\u5206\u4e3a\u5404\u5730\u533a\u3002\u4e3b\u8981\u5730\u533a\u5305\u62ec\uff1a\u897f\u4e9a\uff0f\u4e2d\u4e1c\u3001\u4e1c\u5357\u4e9a\u3001\u4e1c\u4e9a\u3001\u5357\u4e9a\u3001\u4e2d\u4e9a\u548c\u5317\u4e9a\u3002\u8fd9\u4e9b\u5730\u533a\u5e76\u6ca1\u6709\u59cb\u7ec8\u56fa\u5b9a\u7684\u8fb9\u754c\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: some countries such as Palestine and Taiwan have limited international recognition, which affects how the total number of Asian countries is counted. Geography is not always a simple list of agreed facts \u2014 it reflects real political and cultural complexity.",
              zh: "\u8fd9\u6837\u60f3\u60f3\uff1a\u5e74\u5df4\u5d4e\u548c\u53f0\u6e7e\u7b49\u5730\u56fd\u9645\u627f\u8ba4\u6709\u9650\uff0c\u8fd9\u5f71\u54cd\u4e86\u4e9a\u6d32\u56fd\u5bb6\u603b\u6570\u7684\u7edf\u8ba1\u65b9\u5f0f\u3002\u5730\u7406\u5e76\u975e\u603b\u662f\u4e00\u5217\u8fbe\u6210\u5171\u8bc6\u7684\u4e8b\u5b9e\uff0c\u5b83\u53cd\u6620\u7684\u662f\u771f\u5b9e\u7684\u653f\u6cbb\u548c\u6587\u5316\u590d\u6742\u6027\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Continent",
              zh: "\u5927\u6d32",
              defEn: "One of the seven large landmasses on Earth.",
              defZh: "\u5730\u7403\u4e0a\u4e03\u5927\u9646\u5730\u4e4b\u4e00\u3002",
            },
            {
              en: "Region",
              zh: "\u5730\u533a",
              defEn: "An area with shared characteristics such as climate, culture, or location.",
              defZh: "\u5177\u6709\u5171\u540c\u7279\u5f81\uff08\u5982\u6c14\u5019\u3001\u6587\u5316\u6216\u5730\u7406\u4f4d\u7f6e\uff09\u7684\u5730\u5e26\u3002",
            },
            {
              en: "Metropolitan area",
              zh: "\u90fd\u5e02\u5708",
              defEn: "A large urban area including a city and its surrounding towns and suburbs.",
              defZh: "\u5305\u62ec\u57ce\u5e02\u53ca\u5468\u8fb9\u9547\u548c\u90ca\u533a\u7684\u5927\u578b\u57ce\u5e02\u5757\u3002",
            },
            {
              en: "Border",
              zh: "\u8fb9\u754c",
              defEn: "A line that separates one country, region, or area from another.",
              defZh: "\u5c06\u4e00\u4e2a\u56fd\u5bb6\u3001\u5730\u533a\u6216\u533a\u57df\u4e0e\u53e6\u4e00\u4e2a\u5206\u9694\u5f00\u6765\u7684\u754c\u7ebf\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "The Himalayas photographed from the International Space Station \u2014 showing the scale of Asia\u2019s largest mountain range.",
          captionZh: "\u56fd\u9645\u7a7a\u95f4\u7ad9\u62cd\u6444\u7684\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\uff0c\u5c55\u73b0\u4e9a\u6d32\u6700\u5927\u5c71\u8109\u7684\u89c4\u6a21\u3002",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Himalayas.jpg",
          source: "Wikimedia Commons",
        },
        {
          type: "source",
          labelEn: "Key Geographical Fact",
          labelZh: "\u91cd\u8981\u5730\u7406\u6570\u636e",
          en: "Asia covers about 44.6 million km\u00b2 and is home to over 4.7 billion people \u2014 more than 60% of the world\u2019s total population.",
          zh: "\u4e9a\u6d32\u9762\u79ef\u7ea6446\u4e07\u5e73\u65b9\u516c\u91cc\uff0c\u62e5\u670947\u4ebf\u591a\u4eba\u53e3\uff0c\u5360\u4e16\u754c\u603b\u4eba\u53e3\u768460%\u4ee5\u4e0a\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why might it be difficult to agree on the exact number of countries in Asia?",
              qZh: "\u4e3a\u4ec0\u4e48\u5c31\u4e9a\u6d32\u6b63\u786e\u7684\u56fd\u5bb6\u6570\u91cf\u5f88\u96be\u8fbe\u6210\u4e00\u81f4\uff1f",
              aEn: "Some countries like Palestine and Taiwan have limited recognition. Countries like Russia and Turkey span two continents. Regions are often defined by shared characteristics rather than fixed lines, so boundaries can be disputed or unclear.",
              aZh: "\u5e74\u5df4\u5d4e\u548c\u53f0\u6e7e\u7b49\u5730\u56fd\u9645\u627f\u8ba4\u6709\u9650\u3002\u4fc4\u7f57\u65af\u548c\u571f\u8033\u5176\u7b49\u56fd\u5bb6\u8de8\u8d8a\u4e24\u4e2a\u5927\u6d32\u3002\u5404\u5730\u533a\u901a\u5e38\u4ee5\u5171\u540c\u7279\u5f81\u5212\u5b9a\uff0c\u800c\u975e\u56fa\u5b9a\u754c\u7ebf\uff0c\u56e0\u6b64\u8fb9\u754c\u53ef\u80fd\u5b58\u5728\u4e89\u8bae\u6216\u6a21\u7cca\u4e4b\u5904\u3002",
            },
            {
              qEn: "Give two pieces of evidence to show that Asia is a \u2018continent of contrasts\u2019.",
              qZh: "\u5217\u4e3e\u4e24\u4e2a\u8bc1\u636e\uff0c\u8bf4\u660e\u4e9a\u6d32\u662f\u4e00\u4e2a\u201c\u5145\u6ee1\u5f3a\u70c8\u5bf9\u6bd4\u7684\u5927\u6d32\u201d\u3002",
              aEn: "Asia contains both the world\u2019s highest mountain (Mount Everest) and one of its largest deserts (the Gobi). It also includes extremely wealthy countries alongside some of the world\u2019s poorest nations, showing sharp contrasts in both physical and human geography.",
              aZh: "\u4e9a\u6d32\u65e2\u62e5\u6709\u4e16\u754c\u6700\u9ad8\u5c71\u5cf0\uff08\u73e0\u7a46\u6717\u739b\u5cf0\uff09\uff0c\u4e5f\u62e5\u6709\u6700\u5927\u6c99\u6f20\u4e4b\u4e00\uff08\u6208\u58c1\u6c99\u6f20\uff09\u3002\u5b83\u540c\u65f6\u5305\u542b\u6781\u5176\u5bcc\u88d5\u548c\u6781\u5176\u8d2b\u7a77\u7684\u56fd\u5bb6\uff0c\u5c55\u793a\u4e86\u81ea\u7136\u5730\u7406\u548c\u4eba\u6587\u5730\u7406\u4e0a\u7684\u9c9c\u660e\u5bf9\u6bd4\u3002",
            },
            {
              qEn: "Name three of Asia\u2019s main regions. What shared characteristics might define one of them?",
              qZh: "\u8bf4\u51fa\u4e9a\u6d32\u7684\u4e09\u4e2a\u4e3b\u8981\u5730\u533a\u3002\u5176\u4e2d\u4e00\u4e2a\u5730\u533a\u53ef\u80fd\u6709\u54ea\u4e9b\u5171\u540c\u7279\u5f81\uff1f",
              aEn: "Three regions: Western Asia / Middle East, South-East Asia, Eastern Asia. For example, Western Asia / the Middle East is often characterised by a desert climate, Islam as the dominant religion, and Arabic as a widely spoken language.",
              aZh: "\u4e09\u4e2a\u5730\u533a\uff1a\u897f\u4e9a\uff0f\u4e2d\u4e1c\u3001\u4e1c\u5357\u4e9a\u3001\u4e1c\u4e9a\u3002\u4f8b\u5982\uff0c\u897f\u4e9a\uff0f\u4e2d\u4e1c\u5730\u533a\u901a\u5e38\u4ee5\u6c99\u6f20\u6c14\u5019\u3001\u4f0a\u65af\u5170\u6559\u4e3a\u4e3b\u8981\u5b97\u6559\u4ee5\u53ca\u963f\u62c9\u4f2f\u8bed\u4e3a\u5e7f\u6cdb\u4f7f\u7528\u7684\u8bed\u8a00\u4e3a\u7279\u5f81\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is Asia\u2019s longest river?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u4e9a\u6d32\u6700\u957f\u7684\u6cb3\u6d41\uff1f",
          opts: [
            { en: "The Amazon", zh: "\u4e9a\u9a6c\u900a\u6cb3" },
            { en: "The Nile", zh: "\u5c3c\u7f57\u6cb3" },
            { en: "The Yangtze", zh: "\u957f\u6c5f" },
            { en: "The Ganges", zh: "\u6052\u6cb3" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! The Yangtze River in China is Asia\u2019s longest river, stretching approximately 6,300 km.",
          explainCorrectZh: "\u6b63\u786e\uff01\u957f\u6c5f\u6d41\u7ecf\u4e2d\u56fd\uff0c\u662f\u4e9a\u6d32\u6700\u957f\u7684\u6cb3\u6d41\uff0c\u5168\u957f\u7ea66300\u516c\u91cc\u3002",
          explainWrongEn: "Not quite. The Amazon is in South America, and the Nile is in Africa. The Ganges is in South Asia but is much shorter than the Yangtze. The correct answer is the Yangtze.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4e9a\u9a6c\u900a\u6cb3\u5728\u5357\u7f8e\u6d32\uff0c\u5c3c\u7f57\u6cb3\u5728\u975e\u6d32\u3002\u6052\u6cb3\u5728\u5357\u4e9a\uff0c\u4f46\u6bd4\u957f\u6c5f\u77ed\u5f97\u591a\u3002\u6b63\u786e\u7b54\u6848\u662f\u957f\u6c5f\u3002",
        },
      ],
    },

    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "How does population density vary across Asia?",
      titleZh: "\u4e9a\u6d32\u5404\u5730\u7684\u4eba\u53e3\u5bc6\u5ea6\u6709\u4f55\u4e0d\u540c\uff1f",
      subtitle: "Population is not spread evenly across Asia \u2014 physical and human factors both shape where people live.",
      subtitleZh: "\u4e9a\u6d32\u7684\u4eba\u53e3\u5e76\u975e\u5747\u5300\u5206\u5e03\u2014\u2014\u81ea\u7136\u56e0\u7d20\u548c\u4eba\u6587\u56e0\u7d20\u90fd\u5f71\u54cd\u7740\u4eba\u4eec\u5c45\u4f4f\u7684\u5730\u65b9\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can define population density and explain the difference between densely and sparsely populated areas.",
              zh: "\u6211\u80fd\u5b9a\u4e49\u4eba\u53e3\u5bc6\u5ea6\uff0c\u5e76\u89e3\u91ca\u4eba\u53e3\u7a20\u96c6\u548c\u7a00\u758f\u5730\u533a\u7684\u533a\u522b\u3002",
            },
            {
              en: "I can identify physical and human factors that affect where people live in Asia.",
              zh: "\u6211\u80fd\u8bc6\u522b\u5f71\u54cd\u4e9a\u6d32\u4eba\u53e3\u5206\u5e03\u7684\u81ea\u7136\u56e0\u7d20\u548c\u4eba\u6587\u56e0\u7d20\u3002",
            },
            {
              en: "I can describe population distribution patterns using the TEA method (Trend, Evidence, Anomaly).",
              zh: "\u6211\u80fd\u8fd0\u7528TEA\u65b9\u6cd5\uff08\u8d8b\u52bf\u3001\u8bc1\u636e\u3001\u5f02\u5e38\uff09\u63cf\u8ff0\u4eba\u53e3\u5206\u5e03\u89c4\u5f8b\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Population density measures how many people live in one square kilometre (km\u00b2). A densely populated area has many people per km\u00b2, while a sparsely populated area has very few. It is important to remember that population means people who actually live in a place, not visitors.",
              zh: "\u4eba\u53e3\u5bc6\u5ea6\u662f\u6307\u6bcf\u5e73\u65b9\u516c\u91cc\uff08km\u00b2\uff09\u5185\u5c45\u4f4f\u7684\u4eba\u53e3\u6570\u91cf\u3002\u4eba\u53e3\u7a20\u96c6\u5730\u533a\u6307\u6bcf\u5e73\u65b9\u516c\u91cc\u5185\u4eba\u53e3\u4f17\u591a\uff0c\u800c\u4eba\u53e3\u7a00\u758f\u5730\u533a\u5219\u4eba\u53e3\u6781\u5c11\u3002\u91cd\u8981\u7684\u662f\uff0c\u8fd9\u91cc\u7684\u201c\u4eba\u53e3\u201d\u6307\u7684\u662f\u5b9e\u9645\u5b89\u5bb6\u843d\u6237\u4e8e\u6b64\u5730\u7684\u4eba\uff0c\u800c\u975e\u8fc7\u5ba2\u3002",
            },
            {
              type: "highlight",
              en: "Physical factors that affect population density: mountains are hard to build on; deserts lack water and fertile soil; flat river valleys provide fertile land; coastal areas offer food and easy access to trade.",
              zh: "\u5f71\u54cd\u4eba\u53e3\u5bc6\u5ea6\u7684\u81ea\u7136\u56e0\u7d20\uff1a\u5c71\u5730\u96be\u4ee5\u5efa\u8bbe\uff1b\u6c99\u6f20\u7f3a\u5c11\u6c34\u6e90\u548c\u80a5\u6c83\u571f\u58e4\uff1b\u5e73\u5766\u6cb3\u8c37\u63d0\u4f9b\u80a5\u6c83\u571f\u5730\uff1b\u6cbf\u6d77\u5730\u533a\u63d0\u4f9b\u98df\u7269\u5e76\u4fbf\u4e8e\u8d38\u6613\u3002",
            },
            {
              type: "text",
              en: "Human factors also matter. Push factors force people to leave an area, such as conflict or lack of jobs. Pull factors attract people, such as better-paid work, tourism employment, and migration into growing cities. Natural population increase also occurs where improved healthcare, clean water, sanitation, and food supply allow more people to survive and grow.",
              zh: "\u4eba\u6587\u56e0\u7d20\u540c\u6837\u91cd\u8981\u3002\u63a8\u529b\u56e0\u7d20\u8fc7\u4eba\u53e3\u79bb\u5f00\u67d0\u4e00\u5730\u533a\uff0c\u5982\u51b2\u7a81\u6216\u7f3a\u4e4f\u5c31\u4e1a\u673a\u4f1a\u3002\u62c9\u529b\u56e0\u7d20\u5438\u5f15\u4eba\u53e3\u6d41\u5165\uff0c\u5982\u8584\u8584\u7684\u5de5\u4f5c\u3001\u65c5\u6e38\u5c31\u4e1a\u4ee5\u53ca\u5411\u65b0\u5174\u57ce\u5e02\u8fc1\u79fb\u3002\u81ea\u7136\u4eba\u53e3\u589e\u957f\u4e5f\u7406\u81ea\u53d1\u751f\u2014\u2014\u5728\u533b\u7597\u6761\u4ef6\u3001\u6d01\u51c0\u5980\u6e90\u3001\u536b\u751f\u8bbe\u65bd\u548c\u98df\u7269\u4f9b\u5e94\u6539\u5584\u7684\u5730\u65b9\uff0c\u4eba\u53e3\u5c31\u4f1a\u589e\u957f\u3002",
            },
            {
              type: "example",
              en: "Geographers use the TEA method to describe patterns: Trend (the overall pattern), Evidence (specific examples or data), and Anomaly (something that does not fit the general pattern). For example: \u2018Overall, coastal areas of Asia tend to be more densely populated (T). South-East Asian coastal cities such as Bangkok have extremely high density (E). However, some desert coastal areas remain sparsely populated (A).\u2019",
              zh: "\u5730\u7406\u5b66\u5bb6\u8fd0\u7528TEA\u65b9\u6cd5\u63cf\u8ff0\u89c4\u5f8b\uff1a\u8d8b\u52bf\uff08\u603b\u4f53\u89c4\u5f8b\uff09\u3001\u8bc1\u636e\uff08\u5177\u4f53\u4f8b\u5b50\u6216\u6570\u636e\uff09\u548c\u5f02\u5e38\uff08\u4e0d\u7b26\u5408\u603b\u4f53\u89c4\u5f8b\u7684\u73b0\u8c61\uff09\u3002\u4f8b\u5982\uff1a\u201c\u603b\u4f53\u800c\u8a00\uff0c\u4e9a\u6d32\u6cbf\u6d77\u5730\u533a\u4eba\u53e3\u8f83\u4e3a\u7a20\u96c6\uff08T\uff09\u3002\u4e1c\u5357\u4e9a\u6cbf\u6d77\u57ce\u5e02\u5982\u66fc\u8c37\u4eba\u53e3\u6781\u5ea6\u7a20\u96c6\uff08E\uff09\u3002\u7136\u800c\uff0c\u90e8\u5206\u6c99\u6f20\u6cbf\u6d77\u5730\u533a\u4eba\u53e3\u4ecd\u975e\u5e38\u7a00\u758f\uff08A\uff09\u3002\u201d",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Population density",
              zh: "\u4eba\u53e3\u5bc6\u5ea6",
              defEn: "The number of people living per square kilometre.",
              defZh: "\u6bcf\u5e73\u65b9\u516c\u91cc\u5185\u5c45\u4f4f\u7684\u4eba\u53e3\u6570\u91cf\u3002",
            },
            {
              en: "Push factor",
              zh: "\u63a8\u529b\u56e0\u7d20",
              defEn: "A reason that forces or encourages people to leave a place.",
              defZh: "\u8fc7\u4eba\u53e3\u79bb\u5f00\u67d0\u5730\u7684\u539f\u56e0\uff0c\u5982\u51b2\u7a81\u3001\u8d2b\u7a77\u7b49\u3002",
            },
            {
              en: "Pull factor",
              zh: "\u62c9\u529b\u56e0\u7d20",
              defEn: "A reason that attracts people to move to a place.",
              defZh: "\u5438\u5f15\u4eba\u53e3\u8fc1\u5165\u67d0\u5730\u7684\u539f\u56e0\uff0c\u5982\u5c31\u4e1a\u673a\u4f1a\u3001\u8f83\u9ad8\u6536\u5165\u7b49\u3002",
            },
            {
              en: "Natural increase",
              zh: "\u81ea\u7136\u589e\u957f",
              defEn: "Population growth caused by more births than deaths, not by migration.",
              defZh: "\u7531\u51fa\u751f\u4eba\u53e3\u591a\u4e8e\u6b7b\u4ea1\u4eba\u53e3\u800c\u5bfc\u81f4\u7684\u4eba\u53e3\u589e\u957f\uff0c\u4e0d\u5305\u62ec\u8fc1\u5165\u79fb\u51fa\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "The Arabian Desert \u2014 a vast, sparsely populated hot desert illustrating how extreme climates limit population density.",
          captionZh: "\u963f\u62c9\u4f2f\u6c99\u6f20\u2014\u2014\u5e7f\u9614\u3001\u4eba\u53e3\u7a00\u5c11\u7684\u70ed\u6f20\uff0c\u8bf4\u660e\u6781\u7aef\u6c14\u5019\u5982\u4f55\u9650\u5236\u4eba\u53e3\u5bc6\u5ea6\u3002",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabian_Desert_-_panoramio.jpg",
          source: "Wikimedia Commons",
        },
        {
          type: "source",
          labelEn: "Geographical Principle",
          labelZh: "\u5730\u7406\u5b66\u539f\u5219",
          en: "Population density is shaped by both physical factors (relief, climate, water, soil) and human factors (jobs, migration, healthcare, history). Neither alone tells the full story.",
          zh: "\u4eba\u53e3\u5bc6\u5ea6\u7531\u81ea\u7136\u56e0\u7d20\uff08\u5730\u5f62\u3001\u6c14\u5019\u3001\u6c34\u6e90\u3001\u571f\u58e4\uff09\u548c\u4eba\u6587\u56e0\u7d20\uff08\u5c31\u4e1a\u3001\u8fc1\u79fb\u3001\u533b\u7597\u3001\u5386\u53f2\uff09\u5171\u540c\u51b3\u5b9a\u3002\u5355\u72ec\u4efb\u4f55\u4e00\u4e2a\u65b9\u9762\u90fd\u65e0\u6cd5\u5448\u73b0\u5168\u8c8c\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why do mountains and deserts tend to have low population density?",
              qZh: "\u4e3a\u4ec0\u4e48\u5c71\u5730\u548c\u6c99\u6f20\u5730\u533a\u7684\u4eba\u53e3\u5bc6\u5ea6\u5f80\u5f80\u8f83\u4f4e\uff1f",
              aEn: "Mountains are difficult to build on because of steep slopes, cold climates, and limited flat land. Deserts have very little water, fertile soil, or food sources. Both environments make it hard to support large numbers of people.",
              aZh: "\u5c71\u5730\u5c71\u5761\u9677\u5cfb\u3001\u6c14\u5019\u5bd2\u51b7\u4e14\u5e73\u5730\u6709\u9650\uff0c\u96be\u4ee5\u5efa\u9020\u5b9a\u5c45\u3002\u6c99\u6f20\u6781\u5ea6\u7f3a\u6c34\u3001\u7f3a\u4e4f\u80a5\u6c83\u571f\u58e4\u548c\u98df\u7269\u6765\u6e90\u3002\u8fd9\u4e24\u79cd\u73af\u5883\u90fd\u96be\u4ee5\u627f\u8f7d\u5927\u91cf\u4eba\u53e3\u3002",
            },
            {
              qEn: "Give one physical and one human factor that could explain why a coastal city in South-East Asia is densely populated.",
              qZh: "\u5404\u4e3e\u4e00\u4e2a\u81ea\u7136\u56e0\u7d20\u548c\u4e00\u4e2a\u4eba\u6587\u56e0\u7d20\uff0c\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4e1c\u5357\u4e9a\u5de5\u5907\u6d77\u57ce\u5e02\u4eba\u53e3\u7a20\u96c6\u3002",
              aEn: "Physical: coastal areas provide food from fishing and access to trade routes. Human: cities offer better-paid jobs and more services, attracting migrants from rural areas through pull factors.",
              aZh: "\u81ea\u7136\u56e0\u7d20\uff1a\u6cbf\u6d77\u5730\u533a\u63d0\u4f9b\u6e14\u4e1a\u98df\u7269\u6765\u6e90\u548c\u8d38\u6613\u8def\u7ebf\u3002\u4eba\u6587\u56e0\u7d20\uff1a\u57ce\u5e02\u63d0\u4f9b\u66f4\u597d\u7684\u5de5\u4f5c\u548c\u670d\u52a1\uff0c\u901a\u8fc7\u62c9\u529b\u56e0\u7d20\u5438\u5f15\u519c\u6751\u5730\u533a\u79fb\u6c11\u6d8c\u5165\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What does \u2018population density\u2019 measure?",
          qZh: "\u201c\u4eba\u53e3\u5bc6\u5ea6\u201d\u8861\u91cf\u7684\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The total number of people in a country", zh: "\u4e00\u4e2a\u56fd\u5bb6\u7684\u603b\u4eba\u53e3\u6570" },
            { en: "The number of people per square kilometre", zh: "\u6bcf\u5e73\u65b9\u516c\u91cc\u7684\u4eba\u53e3\u6570" },
            { en: "How fast the population is growing", zh: "\u4eba\u53e3\u589e\u957f\u7684\u901f\u5ea6" },
            { en: "The average age of people in an area", zh: "\u4e00\u4e2a\u5730\u533a\u4eba\u53e3\u7684\u5e73\u5747\u5e74\u9f84" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Population density = number of people \u00f7 area in km\u00b2. It tells us how crowded or spread out a place is.",
          explainCorrectZh: "\u6b63\u786e\uff01\u4eba\u53e3\u5bc6\u5ea6=\u4eba\u53e3\u6570\u00f7\u9762\u79ef\uff08km\u00b2\uff09\u3002\u5b83\u544a\u8bc9\u6211\u4eec\u4e00\u4e2a\u5730\u65b9\u662f\u62e5\u6324\u8fd8\u662f\u7a00\u758f\u3002",
          explainWrongEn: "Not quite. Population density is specifically about people per km\u00b2. Total population, growth rate, and average age are different measures.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4eba\u53e3\u5bc6\u5ea6\u7279\u6307\u6bcf\u5e73\u65b9\u516c\u91cc\u7684\u4eba\u53e3\u6570\u3002\u603b\u4eba\u53e3\u3001\u589e\u957f\u901f\u5ea6\u548c\u5e73\u5747\u5e74\u9f84\u662f\u4e0d\u540c\u7684\u6307\u6807\u3002",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Levels of development",
      titleZh: "\u53d1\u5c55\u6c34\u5e73",
      subtitle: "Asia contains some of the world\u2019s wealthiest and poorest countries \u2014 and GNI per capita helps us measure the difference.",
      subtitleZh: "\u4e9a\u6d32\u62e5\u6709\u4e16\u754c\u4e0a\u6700\u5bcc\u88d5\u548c\u6700\u8d2b\u7a77\u7684\u56fd\u5bb6\u2014\u2014\u4eba\u5747\u56fd\u6c11\u603b\u6536\u5165\uff08GNI\uff09\u6709\u52a9\u4e8e\u6211\u4eec\u8861\u91cf\u8fd9\u79cd\u5dee\u5f02\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can define GNI per capita and explain how it measures development.",
              zh: "\u6211\u80fd\u5b9a\u4e49\u4eba\u5747GNI\uff0c\u5e76\u89e3\u91ca\u5b83\u5982\u4f55\u8861\u91cf\u53d1\u5c55\u6c34\u5e73\u3002",
            },
            {
              en: "I can classify countries into High, Middle, and Low Income categories.",
              zh: "\u6211\u80fd\u5c06\u56fd\u5bb6\u5206\u7c7b\u4e3a\u9ad8\u6536\u5165\u3001\u4e2d\u7b49\u6536\u5165\u548c\u4f4e\u6536\u5165\u56fd\u5bb6\u3002",
            },
            {
              en: "I can explain why development levels vary across Asia using physical, political, and resource factors.",
              zh: "\u6211\u80fd\u8fd0\u7528\u81ea\u7136\u3001\u653f\u6cbb\u548c\u8d44\u6e90\u56e0\u7d20\u89e3\u91ca\u4e9a\u6d32\u5185\u90e8\u53d1\u5c55\u5dee\u5f02\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Development measures how wealthy and well-off a country\u2019s population is. One key measure is GNI per capita \u2014 the total income of a country divided by its population. Countries are classified into three main groups: High Income Countries (HIC) with a GNI per capita of at least $12,746; Low Income Countries (LIC) with GNI per capita below $1,045; and Middle Income Countries (MIC) which fall between these thresholds.",
              zh: "\u53d1\u5c55\u6c34\u5e73\u8861\u91cf\u7684\u662f\u4e00\u4e2a\u56fd\u5bb6\u4eba\u53e3\u7684\u5bcc\u88d5\u7a0b\u5ea6\u3002\u4e00\u4e2a\u91cd\u8981\u6307\u6807\u662f\u4eba\u5747\u56fd\u6c11\u603b\u6536\u5165\uff08GNI\uff09\u2014\u2014\u5373\u4e00\u4e2a\u56fd\u5bb6\u603b\u6536\u5165\u9664\u4ee5\u603b\u4eba\u53e3\u3002\u56fd\u5bb6\u5206\u4e3a\u4e09\u7c7b\uff1a\u9ad8\u6536\u5165\u56fd\uff08HIC\uff09\uff0c\u4eba\u5747GNI\u81f3\u5c1112,746\u7f8e\u5143\uff1b\u4f4e\u6536\u5165\u56fd\uff08LIC\uff09\uff0c\u4eba\u5747GNI\u4f4e\u4e8e1,045\u7f8e\u5143\uff1b\u4e2d\u7b49\u6536\u5165\u56fd\uff08MIC\uff09\u5212\u5206\u5728\u8fd9\u4e24\u4e2a\u9608\u503c\u4e4b\u95f4\u3002",
            },
            {
              type: "highlight",
              en: "GNI data from Asia shows extreme variation. High GNI per capita: Singapore, Qatar, Hong Kong, Israel, United Arab Emirates. Middle income: China, Malaysia, Thailand, Kazakhstan, Russia. Lower income: Afghanistan, Yemen, Myanmar, Nepal, Pakistan, Cambodia.",
              zh: "\u4e9a\u6d32\u7684GNI\u6570\u636e\u5c55\u793a\u4e86\u6781\u5927\u7684\u5dee\u5f02\u3002\u4eba\u5747GNI\u9ad8\uff1a\u65b0\u52a0\u5761\u3001\u5361\u5854\u5c14\u3001\u9999\u6e2f\u3001\u4ee5\u8272\u5217\u3001\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u3002\u4e2d\u7b49\u6536\u5165\uff1a\u4e2d\u56fd\u3001\u9a6c\u6765\u897f\u4e9a\u3001\u6cf0\u56fd\u3001\u54c8\u8428\u514b\u65af\u5766\u3001\u4fc4\u7f57\u65af\u3002\u8f83\u4f4e\u6536\u5165\uff1a\u963f\u5bcc\u6c57\u3001\u4e5f\u95e8\u3001\u7f05\u7538\u3001\u5c3c\u6cca\u5c14\u3001\u5df4\u57fa\u65af\u5766\u3001\u67ec\u57d4\u5be8\u3002",
            },
            {
              type: "text",
              en: "Development levels vary because of several factors. Physical factors include climate and terrain \u2014 Mongolia\u2019s dry desert conditions make farming and industry harder. Political factors such as conflict can hold countries back \u2014 Cambodia\u2019s history of war slowed its development for decades. Natural resources like oil can boost income rapidly, as seen in Qatar and the UAE. Natural hazards like volcanoes can both limit and create opportunity \u2014 Indonesia faces volcanic risk, but volcanic soil is fertile.",
              zh: "\u53d1\u5c55\u6c34\u5e73\u7684\u5dee\u5f02\u6765\u81ea\u591a\u4e2a\u56e0\u7d20\u3002\u81ea\u7136\u56e0\u7d20\u5305\u62ec\u6c14\u5019\u548c\u5730\u5f62\u2014\u2014\u8499\u53e4\u5e72\u65f1\u7684\u6c99\u6f20\u5730\u5f62\u4f7f\u519c\u4e1a\u548c\u5de5\u4e1a\u53d1\u5c55\u66f4\u52a0\u56f0\u96be\u3002\u51b2\u7a81\u7b49\u653f\u6cbb\u56e0\u7d20\u4e5f\u4f1a\u963b\u788d\u56fd\u5bb6\u53d1\u5c55\u2014\u2014\u67ec\u57d4\u5be8\u7684\u6218\u4e89\u5386\u53f2\u4f7f\u5176\u53d1\u5c55\u8fdf\u6edcn\u5e74\u3002\u77f3\u6cb9\u7b49\u81ea\u7136\u8d44\u6e90\u53ef\u5feb\u901f\u63d0\u5347\u6536\u5165\uff0c\u5361\u5854\u5c14\u548c\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u5c31\u662f\u4f8b\u8bc1\u3002\u706b\u5c71\u7b49\u81ea\u7136\u707e\u5bb3\u53ef\u80fd\u540c\u65f6\u5e26\u6765\u9650\u5236\u548c\u673a\u9047\u2014\u2014\u5370\u5ea6\u5c3c\u897f\u4e9a\u9762\u4e34\u706b\u5c71\u9a9a\u62e5\u98ce\u9669\uff0c\u4f46\u706b\u5c71\u571f\u58e4\u5374\u5341\u5206\u80a5\u6c83\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "GNI per capita",
              zh: "\u4eba\u5747\u56fd\u6c11\u603b\u6536\u5165",
              defEn: "A country\u2019s total income divided by its population \u2014 used to compare wealth between countries.",
              defZh: "\u4e00\u4e2a\u56fd\u5bb6\u7684\u603b\u6536\u5165\u9664\u4ee5\u5176\u4eba\u53e3\u2014\u2014\u7528\u4e8e\u6bd4\u8f83\u56fd\u5bb6\u95f4\u7684\u8d22\u5bcc\u6c34\u5e73\u3002",
            },
            {
              en: "High Income Country (HIC)",
              zh: "\u9ad8\u6536\u5165\u56fd\uff08HIC\uff09",
              defEn: "A country with GNI per capita of at least $12,746.",
              defZh: "\u4eba\u5747GNI\u81f3\u5c1112,746\u7f8e\u5143\u7684\u56fd\u5bb6\u3002",
            },
            {
              en: "Low Income Country (LIC)",
              zh: "\u4f4e\u6536\u5165\u56fd\uff08LIC\uff09",
              defEn: "A country with GNI per capita below $1,045.",
              defZh: "\u4eba\u5747GNI\u4f4e\u4e8e1,045\u7f8e\u5143\u7684\u56fd\u5bb6\u3002",
            },
            {
              en: "Development",
              zh: "\u53d1\u5c55",
              defEn: "The level of economic and social progress in a country, often measured using income, healthcare, or education.",
              defZh: "\u4e00\u4e2a\u56fd\u5bb6\u7684\u7ecf\u6d4e\u548c\u793e\u4f1a\u8fdb\u6b65\u6c34\u5e73\uff0c\u901a\u5e38\u7528\u6536\u5165\u3001\u533b\u7597\u6216\u6559\u80b2\u8863\u91cf\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Dubai skyline with Burj Khalifa \u2014 a symbol of rapid economic development in a High Income Country.",
          captionZh: "\u8fea\u62dc\u5929\u9645\u7ebf\u4e0e\u54c8\u5229\u6cd5\u5854\u2014\u2014\u9ad8\u6536\u5165\u56fd\u5feb\u901f\u7ecf\u6d4e\u53d1\u5c55\u7684\u8c61\u5f81\u3002",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubai_Skyline_mit_Burj_Khalifa_(18241030269).jpg",
          source: "Wikimedia Commons",
        },
        {
          type: "source",
          labelEn: "GNI Data: Examples from Asia",
          labelZh: "GNI\u6570\u636e\uff1a\u4e9a\u6d32\u793a\u4f8b",
          en: "Singapore and Qatar are among Asia\u2019s highest GNI per capita countries. Afghanistan and Yemen are among the lowest. This shows that Asia is one continent but contains very uneven levels of development.",
          zh: "\u65b0\u52a0\u5761\u548c\u5361\u5854\u5c14\u662f\u4e9a\u6d32\u4eba\u5747GNI\u6700\u9ad8\u7684\u56fd\u5bb6\u4e4b\u4e00\u3002\u963f\u5bcc\u6c57\u548c\u4e5f\u95e8\u5219\u5c5e\u4e8e\u6700\u4f4e\u4e4b\u5217\u3002\u8fd9\u8bf4\u660e\u4e9a\u6d32\u662f\u4e00\u4e2a\u5927\u6d32\uff0c\u4f46\u5185\u90e8\u53d1\u5c55\u6c34\u5e73\u6781\u4e0d\u5747\u8861\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why might a country with large oil reserves have a high GNI per capita even if most of its people are not involved in the oil industry?",
              qZh: "\u4e3a\u4ec0\u4e48\u4e00\u4e2a\u62e5\u6709\u5927\u91cf\u77f3\u6cb9\u50a8\u91cf\u7684\u56fd\u5bb6\u5373\u4f7f\u5927\u591a\u6570\u4eba\u53e3\u5e76\u975e\u4ece\u4e8b\u77f3\u6cb9\u4e1a\uff0c\u4e5f\u53ef\u80fd\u62e5\u6709\u8f83\u9ad8\u7684\u4eba\u5747GNI\uff1f",
              aEn: "Oil revenues go to the government, which can use the money to fund public services, subsidise living costs, and invest in infrastructure. This raises the country\u2019s total national income, which lifts the GNI per capita figure even if the oil wealth is not shared equally.",
              aZh: "\u77f3\u6cb9\u6536\u5165\u5f52\u653f\u5e9c\u6240\u6709\uff0c\u653f\u5e9c\u53ef\u4ee5\u7528\u8fd9\u4e9b\u8d44\u91d1\u8d44\u52a9\u516c\u5171\u670d\u52a1\u3001\u8865\u8d34\u751f\u6d3b\u6210\u672c\u5e76\u6295\u8d44\u57fa\u7840\u8bbe\u65bd\u3002\u8fd9\u63d0\u9ad8\u4e86\u56fd\u5bb6\u603b\u6536\u5165\uff0c\u5373\u4f7f\u77f3\u6cb9\u8d22\u5bcc\u5e76\u975e\u5747\u5409\u5206\u914d\uff0c\u4eba\u5747GNI\u6570\u5b57\u4e5f\u4f1a\u4e0a\u5347\u3002",
            },
            {
              qEn: "Give two reasons why Cambodia might have a lower GNI per capita than Malaysia.",
              qZh: "\u7ed9\u51fa\u4e24\u4e2a\u539f\u56e0\uff0c\u89e3\u91ca\u67ec\u57d4\u5be8\u7684\u4eba\u5747GNI\u53ef\u80fd\u4f4e\u4e8e\u9a6c\u6765\u897f\u4e9a\u3002",
              aEn: "Cambodia experienced decades of war and political instability that damaged its economy and infrastructure. Malaysia benefited from more stable government, significant FDI, and natural resources including rubber, palm oil, and petroleum.",
              aZh: "\u67ec\u57d4\u5be8\u7ecf\u5386\u4e86\u6570\u5341\u5e74\u7684\u6218\u4e89\u548c\u653f\u6cbb\u52a8\u8361\uff0c\u635f\u5bb3\u4e86\u5176\u7ecf\u6d4e\u548c\u57fa\u7840\u8bbe\u65bd\u3002\u9a6c\u6765\u897f\u4e9a\u5219\u53d7\u76ca\u4e8e\u6bd4\u8f83\u7a33\u5b9a\u7684\u653f\u5e9c\u3001\u5927\u91cf\u5916\u76f4\u6295\u8d44\u4ee5\u53ca\u5305\u62ec\u6a61\u80f6\u3001\u68d5\u6988\u6cb9\u548c\u77f3\u6cb9\u5728\u5185\u7684\u81ea\u7136\u8d44\u6e90\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which threshold separates High Income Countries from Middle Income Countries, according to GNI per capita?",
          qZh: "\u6839\u636e\u4eba\u5747GNI\uff0c\u9ad8\u6536\u5165\u56fd\u548c\u4e2d\u7b49\u6536\u5165\u56fd\u7684\u5206\u754c\u9608\u503c\u662f\u591a\u5c11\uff1f",
          opts: [
            { en: "$500", zh: "500\u7f8e\u5143" },
            { en: "$1,045", zh: "1,045\u7f8e\u5143" },
            { en: "$12,746", zh: "12,746\u7f8e\u5143" },
            { en: "$50,000", zh: "50,000\u7f8e\u5143" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! High Income Countries have a GNI per capita of at least $12,746. Below $1,045 is Low Income.",
          explainCorrectZh: "\u6b63\u786e\uff01\u9ad8\u6536\u5165\u56fd\u7684\u4eba\u5747GNI\u81f3\u5c1112,746\u7f8e\u5143\u3002\u4f4e\u4e8e1,045\u7f8e\u5143\u5219\u4e3a\u4f4e\u6536\u5165\u56fd\u3002",
          explainWrongEn: "Not quite. The High Income threshold is $12,746 per capita. $1,045 is the Low Income boundary. The correct answer is $12,746.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u9ad8\u6536\u5165\u56fd\u9608\u503c\u4e3a\u4eba\u5747GNI 12,746\u7f8e\u5143\u30021,045\u7f8e\u5143\u662f\u4f4e\u6536\u5165\u56fd\u7684\u5206\u754c\u7ebf\u3002\u6b63\u786e\u7b54\u6848\u662f12,746\u7f8e\u5143\u3002",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "T",
      title: "How do climate zones impact population density?",
      titleZh: "\u6c14\u5019\u5e26\u5982\u4f55\u5f71\u54cd\u4eba\u53e3\u5bc6\u5ea6\uff1f",
      subtitle: "Asia is large enough to contain every major climate zone \u2014 and climate shapes where people choose to live.",
      subtitleZh: "\u4e9a\u6d32\u8db3\u591f\u5e7f\u9614\uff0c\u5305\u542b\u4e86\u5730\u7403\u4e0a\u6bcf\u4e2a\u4e3b\u8981\u6c14\u5019\u5e26\u2014\u2014\u6c14\u5019\u51b3\u5b9a\u4e86\u4eba\u4eec\u9009\u62e9\u5c45\u4f4f\u7684\u5730\u65b9\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can name and describe Asia\u2019s main climate zones.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u5e76\u63cf\u8ff0\u4e9a\u6d32\u7684\u4e3b\u8981\u6c14\u5019\u5e26\u3002",
            },
            {
              en: "I can explain how climate zones affect where people live in Asia.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6c14\u5019\u5e26\u5982\u4f55\u5f71\u54cd\u4e9a\u6d32\u4eba\u53e3\u5206\u5e03\u3002",
            },
            {
              en: "I can evaluate whether colder climates always have lower population density than warmer ones.",
              zh: "\u6211\u80fd\u8bc4\u4f30\u5bd2\u51b7\u6c14\u5019\u662f\u5426\u603b\u662f\u6bd4\u6e29\u6696\u6c14\u5019\u7684\u4eba\u53e3\u5bc6\u5ea6\u66f4\u4f4e\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Climate zones are large areas that share similar temperature and precipitation patterns. They often occur along the same latitudes. Asia is unusual because it is so large that it contains all the major climate zones: polar, subpolar, temperate, and tropical.",
              zh: "\u6c14\u5019\u5e26\u662f\u5177\u6709\u76f8\u4f3c\u6c14\u6e29\u548c\u964d\u6c34\u89c4\u5f8b\u7684\u5927\u578b\u5730\u5e26\u3002\u5b83\u4eec\u901a\u5e38\u5206\u5e03\u5728\u76f8\u540c\u7eac\u5ea6\u4e0a\u3002\u4e9a\u6d32\u5f88\u7279\u6b8a\uff0c\u56e0\u4e3a\u5b83\u8db3\u591f\u5e7f\u9614\uff0c\u8db3\u4ee5\u5305\u542b\u6240\u6709\u4e3b\u8981\u6c14\u5019\u5e26\uff1a\u6781\u5730\u3001\u4e9a\u6781\u5730\u3001\u6e29\u5e26\u548c\u70ed\u5e26\u3002",
            },
            {
              type: "highlight",
              en: "Key climate characteristics: the polar zone has temperatures often below 0\u00b0C, and some winter months have no sunlight. Subpolar and temperate zones have more seasonal variation. Tropical zones, closer to the equator, are generally hotter and wetter throughout the year.",
              zh: "\u4e3b\u8981\u6c14\u5019\u7279\u5f81\uff1a\u6781\u5730\u6c14\u6e29\u5e38\u5728\u51b0\u70b90\u00b0C\u4ee5\u4e0b\uff0c\u90e8\u5206\u51ac\u6708\u65e0\u9633\u5149\u3002\u4e9a\u6781\u5730\u548c\u6e29\u5e26\u5730\u533a\u5c63\u5019\u53d8\u5316\u8f83\u5927\u3002\u70ed\u5e26\u5730\u533a\u9760\u8fd1\u8d64\u9053\uff0c\u5168\u5e74\u6c14\u6e29\u8f83\u9ad8\u3001\u964d\u6c34\u8f83\u591a\u3002",
            },
            {
              type: "text",
              en: "In general, extreme climates such as the polar zone tend to have low population density because they are hard to farm, build in, or survive in. However, the relationship is not always straightforward. Some cold areas in Asia still have significant populations because of mineral resources, trade routes, or historical settlement patterns.",
              zh: "\u603b\u4f53\u800c\u8a00\uff0c\u6781\u5730\u7b49\u6781\u7aef\u6c14\u5019\u7684\u4eba\u53e3\u5bc6\u5ea6\u5f80\u5f80\u8f83\u4f4e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5730\u65b9\u96be\u4ee5\u8015\u4f5c\u3001\u5efa\u9020\u6216\u751f\u5b58\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u5173\u7cfb\u5e76\u975e\u603b\u662f\u7b80\u5355\u76f4\u63a5\u3002\u4e9a\u6d32\u90e8\u5206\u5bd2\u51b7\u5730\u533a\u56e0\u62e5\u6709\u77ff\u4ea7\u8d44\u6e90\u3001\u8d38\u6613\u8def\u7ebf\u6216\u5386\u53f2\u6d41\u4f20\u4e0b\u6765\u7684\u5b9a\u5c45\u6a21\u5f0f\uff0c\u4ecd\u6709\u76f8\u5f53\u591a\u7684\u4eba\u53e3\u3002",
            },
            {
              type: "example",
              en: "Evaluation question: \u2018Do colder climates always have lower population density than warmer climates?\u2019 In most cases, yes \u2014 polar and subpolar areas tend to be sparsely populated. However, this is not always true: cities like Moscow are in cold climates but are densely populated because of their economic and political importance. Climate is a major factor, but not the only one.",
              zh: "\u8bc4\u4f30\u95ee\u9898\uff1a\u201c\u5bd2\u51b7\u6c14\u5019\u662f\u5426\u603b\u662f\u6bd4\u6e29\u6696\u6c14\u5019\u4eba\u53e3\u5bc6\u5ea6\u66f4\u4f4e\uff1f\u201d\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u662f\u7684\u2014\u2014\u6781\u5730\u548c\u4e9a\u6781\u5730\u5730\u533a\u901a\u5e38\u4eba\u53e3\u7a00\u758f\u3002\u4f46\u4e5f\u6709\u4f8b\u5916\uff1a\u83ab\u65af\u79d1\u7b49\u57ce\u5e02\u6c14\u5019\u5bd2\u51b7\uff0c\u4f46\u56e0\u5176\u7ecf\u6d4e\u548c\u653f\u6cbb\u91cd\u8981\u6027\uff0c\u4eba\u53e3\u4ecd\u7136\u9887\u4e3a\u7a20\u96c6\u3002\u6c14\u5019\u662f\u91cd\u8981\u56e0\u7d20\uff0c\u4f46\u5e76\u975e\u552f\u4e00\u56e0\u7d20\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Climate zone",
              zh: "\u6c14\u5019\u5e26",
              defEn: "A large area with similar average temperature and precipitation patterns, often occurring along the same latitudes.",
              defZh: "\u5177\u6709\u76f8\u4f3c\u5e73\u5747\u6c14\u6e29\u548c\u964d\u6c34\u89c4\u5f8b\u7684\u5927\u578b\u5730\u5e26\uff0c\u901a\u5e38\u5206\u5e03\u5728\u76f8\u540c\u7eac\u5ea6\u3002",
            },
            {
              en: "Polar zone",
              zh: "\u6781\u5730\u5e26",
              defEn: "The climate zone found around the North and South Poles, with very low temperatures and little precipitation.",
              defZh: "\u5206\u5e03\u5728\u5357\u5317\u4e24\u6781\u5468\u56f4\u7684\u6c14\u5019\u5e26\uff0c\u6c14\u6e29\u6781\u4f4e\uff0c\u964d\u6c34\u7a00\u5c11\u3002",
            },
            {
              en: "Tropical zone",
              zh: "\u70ed\u5e26",
              defEn: "The climate zone near the equator, characterised by high temperatures and significant rainfall throughout the year.",
              defZh: "\u8d64\u9053\u9644\u8fd1\u7684\u6c14\u5019\u5e26\uff0c\u5168\u5e74\u6c14\u6e29\u9ad8\u3001\u964d\u6c34\u5145\u6c9b\u3002",
            },
            {
              en: "Latitude",
              zh: "\u7eac\u5ea6",
              defEn: "The distance north or south of the equator, measured in degrees.",
              defZh: "\u8d64\u9053\u4ee5\u5317\u6216\u4ee5\u5357\u7684\u8ddd\u79bb\uff0c\u4ee5\u5ea6\u6570\u8868\u793a\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Borneo tropical rainforest \u2014 an example of the tropical climate zone with high rainfall and dense vegetation.",
          captionZh: "\u5a46\u7f57\u6d32\u70ed\u5e26\u96e8\u6797\u2014\u2014\u9ad8\u964d\u6c34\u91cf\u548c\u8302\u5bc6\u690d\u88ab\u7684\u70ed\u5e26\u6c14\u5019\u5e26\u5178\u578b\u4f8b\u5b50\u3002",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borneo_rainforest.jpg",
          source: "Wikimedia Commons",
        },
        {
          type: "source",
          labelEn: "Geographical Principle",
          labelZh: "\u5730\u7406\u5b66\u539f\u5219",
          en: "Climate zones often occur along similar latitudes. However, population density is shaped by climate together with terrain, resources, and human history \u2014 which is why some cold regions remain surprisingly densely populated.",
          zh: "\u6c14\u5019\u5e26\u901a\u5e38\u5206\u5e03\u5728\u76f8\u540c\u7eac\u5ea6\u4e0a\u3002\u4f46\u4eba\u53e3\u5bc6\u5ea6\u662f\u7531\u6c14\u5019\u3001\u5730\u5f62\u3001\u8d44\u6e90\u548c\u4eba\u6587\u5386\u53f2\u5171\u540c\u5851\u9020\u7684\u2014\u2014\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u90e8\u5206\u5bd2\u51b7\u5730\u533a\u4eba\u53e3\u4ecd\u51fa\u4e4e\u610f\u6599\u5730\u7a20\u96c6\u7684\u539f\u56e0\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why might a tropical climate support a higher population density than a polar climate?",
              qZh: "\u4e3a\u4ec0\u4e48\u70ed\u5e26\u6c14\u5019\u53ef\u80fd\u6bd4\u6781\u5730\u6c14\u5019\u652f\u6491\u66f4\u9ad8\u7684\u4eba\u53e3\u5bc6\u5ea6\uff1f",
              aEn: "Tropical climates are warm and have plenty of rainfall, allowing crops to grow year-round. This supports larger food supplies and populations. Polar climates are extremely cold, have little sunlight in winter, and cannot support farming, making it very difficult to feed large numbers of people.",
              aZh: "\u70ed\u5e26\u6c14\u5019\u6e29\u6696\u6e7f\u6da6\uff0c\u5168\u5e74\u90fd\u80fd\u79cd\u690d\u5e84\u7a3c\uff0c\u652f\u6491\u66f4\u5927\u7684\u98df\u7269\u4f9b\u5e94\u548c\u4eba\u53e3\u89c4\u6a21\u3002\u6781\u5730\u6c14\u5019\u6781\u5ea6\u5bd2\u51b7\uff0c\u51ac\u5b63\u9633\u5149\u6781\u5c11\uff0c\u4e14\u4e0d\u80fd\u8015\u4f5c\uff0c\u5f88\u96be\u4e3a\u5927\u91cf\u4eba\u53e3\u63d0\u4f9b\u98df\u7269\u3002",
            },
            {
              qEn: "Give one example to show that cold climates do not always mean low population density.",
              qZh: "\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8bf4\u660e\u5bd2\u51b7\u6c14\u5019\u5e76\u4e0d\u603b\u610f\u5473\u7740\u4eba\u53e3\u5bc6\u5ea6\u4f4e\u3002",
              aEn: "Moscow, Russia, has a cold continental climate but is one of the most densely populated cities in Asia/Europe because of its role as a political, economic, and cultural centre. This shows that human factors can override climate.",
              aZh: "\u4fc4\u7f57\u65af\u83ab\u65af\u79d1\u6c14\u5019\u5bd2\u51b7\uff0c\u4f46\u56e0\u5176\u653f\u6cbb\u3001\u7ecf\u6d4e\u548c\u6587\u5316\u4e2d\u5fc3\u7684\u5730\u4f4d\uff0c\u662f\u4e9a\u6d32\u548c\u6b27\u6d32\u4eba\u53e3\u6700\u7a20\u96c6\u7684\u57ce\u5e02\u4e4b\u4e00\u3002\u8fd9\u8bf4\u660e\u4eba\u6587\u56e0\u7d20\u53ef\u4ee5\u8d85\u8d8a\u6c14\u5019\u9650\u5236\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which climate zone is found closest to the equator in Asia?",
          qZh: "\u4e9a\u6d32\u54ea\u4e2a\u6c14\u5019\u5e26\u6700\u9760\u8fd1\u8d64\u9053\uff1f",
          opts: [
            { en: "Polar", zh: "\u6781\u5730\u5e26" },
            { en: "Subpolar", zh: "\u4e9a\u6781\u5730\u5e26" },
            { en: "Temperate", zh: "\u6e29\u5e26" },
            { en: "Tropical", zh: "\u70ed\u5e26" },
          ],
          correct: 3,
          explainCorrectEn: "Correct! Tropical zones are found closest to the equator. They are characterised by high temperatures and significant rainfall throughout the year.",
          explainCorrectZh: "\u6b63\u786e\uff01\u70ed\u5e26\u6700\u9760\u8fd1\u8d64\u9053\uff0c\u5168\u5e74\u6c14\u6e29\u9ad8\u3001\u964d\u6c34\u5145\u6c9b\u3002",
          explainWrongEn: "Not quite. Polar zones are at the far north or south. Subpolar and temperate zones are in between. The tropical zone is closest to the equator. The correct answer is Tropical.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6781\u5730\u5e26\u5728\u6700\u5317\u6216\u6700\u5357\u7aef\u3002\u4e9a\u6781\u5730\u5e26\u548c\u6e29\u5e26\u5728\u4e2d\u95f4\u3002\u6700\u9760\u8fd1\u8d64\u9053\u7684\u662f\u70ed\u5e27\u3002\u6b63\u786e\u7b54\u6848\u662f\u70ed\u5e26\u3002",
        },
      ],
    },


    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "T",
      title: "Why are countries different shapes and sizes?",
      titleZh: "\u56fd\u5bb6\u4e3a\u4ec0\u4e48\u5f62\u72b6\u548c\u5927\u5c0f\u5404\u4e0d\u76f8\u540c\uff1f",
      subtitle: "Borders can form naturally or through political decisions \u2014 and sometimes they are disputed.",
      subtitleZh: "\u8fb9\u754c\u53ef\u80fd\u7531\u81ea\u7136\u5f62\u6210\u6216\u7531\u653f\u6cbb\u51b3\u5b9a\u2014\u2014\u6709\u65f6\u8fd9\u4e9b\u8fb9\u754c\u8fd8\u5b58\u5728\u4e89\u8bae\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define what a border is and explain how borders are formed.", zh: "\u6211\u80fd\u5b9a\u4e49\u8fb9\u754c\uff0c\u5e76\u89e3\u91ca\u8fb9\u754c\u662f\u5982\u4f55\u5f62\u6210\u7684\u3002" },
            { en: "I can distinguish between natural, political, and disputed borders.", zh: "\u6211\u80fd\u533a\u5206\u81ea\u7136\u8fb9\u754c\u3001\u653f\u6cbb\u8fb9\u754c\u548c\u4e89\u8bae\u8fb9\u754c\u3002" },
            { en: "I can explain why some borders change over time.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4e00\u4e9b\u8fb9\u754c\u968f\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A border is a natural or artificial line that separates geographic areas such as countries or cities. Borders can form or change because of physical features, historical events, or political decisions. Physical features that often become borders include rivers, mountain ranges, and coastlines.", zh: "\u8fb9\u754c\u662f\u5c06\u5730\u7406\u533a\u57df\u5206\u9694\u5f00\u6765\u7684\u81ea\u7136\u6216\u4eba\u5de5\u754c\u7ebf\u3002\u8fb9\u754c\u53ef\u7531\u81ea\u7136\u5730\u7406\u7279\u5f81\u3001\u5386\u53f2\u4e8b\u4ef6\u6216\u653f\u6cbb\u51b3\u5b9a\u5f62\u6210\u6216\u6539\u53d8\u3002\u5e38\u6210\u4e3a\u8fb9\u754c\u7684\u81ea\u7136\u5730\u7406\u7279\u5f81\u5305\u62ec\u6cb3\u6d41\u3001\u5c71\u8109\u548c\u6d77\u5cb8\u7ebf\u3002" },
            { type: "highlight", en: "Borders can be: Natural \u2014 formed by rivers or mountains. Political \u2014 drawn by treaties or agreements. Disputed \u2014 when countries claim the same territory. Other causes of border change include conflict, trade, religion, culture, and language.", zh: "\u8fb9\u754c\u53ef\u5206\u4e3a\uff1a\u81ea\u7136\u8fb9\u754c\u2014\u2014\u7531\u6cb3\u6d41\u6216\u5c71\u8109\u5f62\u6210\u3002\u653f\u6cbb\u8fb9\u754c\u2014\u2014\u7531\u6761\u7ea6\u6216\u534f\u5b9a\u5212\u5b9a\u3002\u4e89\u8bae\u8fb9\u754c\u2014\u2014\u56fd\u5bb6\u5bf9\u540c\u4e00\u9886\u571f\u63d0\u51fa\u4e3b\u6743\u58f0\u7d22\u3002\u5bfc\u81f4\u8fb9\u754c\u53d8\u5316\u7684\u5176\u4ed6\u539f\u56e0\u8fd8\u5305\u62ec\u51b2\u7a81\u3001\u8d38\u6613\u3001\u5b97\u6559\u3001\u6587\u5316\u548c\u8bed\u8a00\u3002" },
            { type: "text", en: "Georgia is a useful example. Some of its borders follow mountain ranges (natural borders). Others were drawn by political agreements during the Soviet era (political borders). Parts of its territory, such as South Ossetia and Abkhazia, are claimed by different parties (disputed borders).", zh: "\u683c\u9c81\u5409\u4e9a\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u3002\u5b83\u7684\u4e00\u4e9b\u8fb9\u754c\u5ef6\u4f38\u5c71\u8109\uff08\u81ea\u7136\u8fb9\u754c\uff09\uff0c\u5176\u4ed6\u8fb9\u754c\u5728\u82cf\u8054\u65f6\u671f\u7531\u653f\u6cbb\u534f\u5b9a\u5212\u5b9a\uff08\u653f\u6cbb\u8fb9\u754c\uff09\u3002\u5176\u90e8\u5206\u9886\u571f\uff08\u5982\u5357\u5967\u585e\u63d0\u4e9a\u548c\u963f\u5e03\u54c8\u5179\uff09\u5b58\u5728\u4e3b\u6743\u4e89\u8bae\uff08\u4e89\u8bae\u8fb9\u754c\uff09\u3002" },
            { type: "example", en: "Think of it this way: physical geography sets some borders automatically \u2014 a wide river or tall mountain range is a natural barrier. But many borders on today\u2019s maps were drawn by people in meetings and treaties, sometimes without looking at the land. This is why some borders divide communities that historically shared the same area.", zh: "\u8fd9\u6837\u60f3\uff1a\u81ea\u7136\u5730\u7406\u81ea\u52a8\u8bbe\u5b9a\u4e86\u4e00\u4e9b\u8fb9\u754c\u2014\u2014\u5bbd\u962d\u7684\u6cb3\u6d41\u6216\u9ad8\u8038\u7684\u5c71\u8109\u672c\u5c31\u662f\u5929\u7136\u5c4f\u969c\u3002\u4f46\u5730\u56fe\u4e0a\u5f88\u591a\u8fb9\u754c\u662f\u7531\u4eba\u4eec\u5728\u8c08\u5224\u548c\u6761\u7ea6\u4e2d\u5212\u5b9a\u7684\uff0c\u6709\u65f6\u751a\u81f3\u5e76\u6ca1\u6709\u5b9e\u5730\u8003\u5bdf\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u67d0\u4e9b\u8fb9\u754c\u5c06\u5386\u53f2\u4e0a\u5c45\u4f4f\u5728\u540c\u4e00\u5730\u533a\u7684\u793e\u7fa4\u5206\u5272\u5f00\u6765\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Natural border", zh: "\u81ea\u7136\u8fb9\u754c", defEn: "A border formed by a physical feature such as a river or mountain range.", defZh: "\u7531\u6cb3\u6d41\u6216\u5c71\u8109\u7b49\u81ea\u7136\u5730\u7406\u7279\u5f81\u5f62\u6210\u7684\u8fb9\u754c\u3002" },
            { en: "Political border", zh: "\u653f\u6cbb\u8fb9\u754c", defEn: "A border drawn by human agreement, treaty, or historical decision.", defZh: "\u7531\u4eba\u7c7b\u534f\u5b9a\u3001\u6761\u7ea6\u6216\u5386\u53f2\u51b3\u5b9a\u5212\u5b9a\u7684\u8fb9\u754c\u3002" },
            { en: "Disputed border", zh: "\u4e89\u8bae\u8fb9\u754c", defEn: "A border that two or more countries disagree about, often leading to conflict.", defZh: "\u4e24\u4e2a\u6216\u591a\u4e2a\u56fd\u5bb6\u5b58\u5728\u5206\u6b67\u7684\u8fb9\u754c\uff0c\u5e38\u5bfc\u81f4\u51b2\u7a81\u3002" },
            { en: "Territory", zh: "\u9886\u571f", defEn: "Land that is controlled or claimed by a particular country or group.", defZh: "\u7531\u67d0\u4e00\u56fd\u5bb6\u6216\u7fa4\u4f53\u63a7\u5236\u6216\u58f0\u79f0\u62e5\u6709\u7684\u571f\u5730\u3002" },
          ],
        },
        { type: "image", caption: "The Himalayas \u2014 Asia\u2019s greatest mountain range, which forms a natural border between India, Nepal, Bhutan, and China.", captionZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u2014\u2014\u4e9a\u6d32\u6700\u5927\u5c71\u8109\uff0c\u6784\u6210\u5370\u5ea6\u3001\u5c3c\u6cca\u5c14\u3001\u4e0d\u4e39\u548c\u4e2d\u56fd\u4e4b\u95f4\u7684\u81ea\u7136\u8fb9\u754c\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Everest,_Nepal,_Himalayas.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Concept", labelZh: "\u5730\u7406\u5b66\u6982\u5ff5", en: "Borders reflect both physical geography and human history. A river or mountain forms a natural border; a peace treaty or colonial decision may divide communities that shared the same land for centuries.", zh: "\u8fb9\u754c\u540c\u65f6\u53cd\u6620\u4e86\u81ea\u7136\u5730\u7406\u548c\u4eba\u7c7b\u5386\u53f2\u3002\u6cb3\u6d41\u6216\u5c71\u8109\u5f62\u6210\u81ea\u7136\u8fb9\u754c\uff1b\u548c\u5e73\u6761\u7ea6\u6216\u6b96\u6c11\u51b3\u5b9a\u53ef\u80fd\u5c06\u5171\u5c45\u51e0\u4e2a\u4e16\u7eaa\u7684\u793e\u7fa4\u5206\u5272\u5f00\u6765\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "What is the difference between a natural border and a political border? Give one example of each.", qZh: "\u81ea\u7136\u8fb9\u754c\u548c\u653f\u6cbb\u8fb9\u754c\u6709\u4ec0\u4e48\u533a\u522b\uff1f\u5404\u4e3e\u4e00\u4e2a\u4f8b\u5b50\u3002", aEn: "A natural border uses a physical feature to separate countries \u2014 for example the Himalayas form part of the border between China and India. A political border is drawn by human agreement \u2014 for example the straight-line borders between some Central Asian countries were set during the Soviet era.", aZh: "\u81ea\u7136\u8fb9\u754c\u5229\u7528\u81ea\u7136\u5730\u7406\u7279\u5f81\u5206\u9694\u56fd\u5bb6\u2014\u2014\u4f8b\u5982\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u6784\u6210\u4e2d\u56fd\u4e0e\u5370\u5ea6\u8fb9\u754c\u7684\u4e00\u90e8\u5206\u3002\u653f\u6cbb\u8fb9\u754c\u7531\u4eba\u7c7b\u534f\u5b9a\u5212\u5b9a\u2014\u2014\u4f8b\u5982\u4e2d\u4e9a\u90e8\u5206\u56fd\u5bb6\u7684\u76f4\u7ebf\u8fb9\u754c\u662f\u82cf\u8054\u65f6\u671f\u5212\u5b9a\u7684\u3002" },
            { qEn: "Why might a disputed border cause conflict between countries?", qZh: "\u4e3a\u4ec0\u4e48\u4e89\u8bae\u8fb9\u754c\u53ef\u80fd\u5bfc\u81f4\u56fd\u5bb6\u95f4\u51b2\u7a81\uff1f", aEn: "If two countries both claim the same territory, neither wants to give it up. The disputed area may have economic value (resources or trade routes), cultural importance (historic or religious sites), or strategic importance (military access). These factors make peaceful resolution difficult.", aZh: "\u5982\u679c\u4e24\u4e2a\u56fd\u5bb6\u90fd\u58f0\u79f0\u62e5\u6709\u540c\u4e00\u7247\u9886\u571f\uff0c\u53cc\u65b9\u90fd\u4e0d\u613f\u653e\u5f03\u3002\u4e89\u8bae\u5730\u533a\u53ef\u80fd\u5177\u6709\u7ecf\u6d4e\u4ef7\u5024\uff08\u8d44\u6e90\u6216\u8d38\u6613\u8def\u7ebf\uff09\u3001\u6587\u5316\u610f\u4e49\uff08\u5386\u53f2\u6216\u5b97\u6559\u5730\u70b9\uff09\u6216\u6218\u7565\u91cd\u8981\u6027\u3002\u8fd9\u4e9b\u56e0\u7d20\u4f7f\u548c\u5e73\u89e3\u51b3\u53d8\u5f97\u56f0\u96be\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is an example of a natural border?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u81ea\u7136\u8fb9\u754c\u7684\u4f8b\u5b50\uff1f",
          opts: [
            { en: "A straight line drawn by a peace treaty", zh: "\u548c\u5e73\u6761\u7ea6\u5212\u5b9a\u7684\u76f4\u7ebf\u8fb9\u754c" },
            { en: "A river forming the boundary between two countries", zh: "\u4e00\u6761\u6cb3\u6d41\u6784\u6210\u4e24\u56fd\u8fb9\u754c" },
            { en: "A colonial border imposed by a foreign power", zh: "\u6b96\u6c11\u65f6\u671f\u5916\u56fd\u52bf\u529b\u5212\u5b9a\u7684\u8fb9\u754c" },
            { en: "A border agreed in a UN resolution", zh: "\u8054\u5408\u56fd\u51b3\u8bae\u786e\u5b9a\u7684\u8fb9\u754c" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! A river is a natural physical feature that can form the boundary between countries. The Rhine between France and Germany is a classic example.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6cb3\u6d41\u662f\u81ea\u7136\u5730\u7406\u7279\u5f81\uff0c\u53ef\u6784\u6210\u56fd\u5bb6\u95f4\u8fb9\u754c\u3002\u6cd5\u5fb7\u4e4b\u95f4\u7684\u83b1\u8336\u6cb3\u662f\u7ecf\u5178\u4f8b\u5b50\u3002",
          explainWrongEn: "Not quite. Treaty lines, colonial borders, and UN resolutions are all human (political) decisions. The correct answer is a river \u2014 a natural physical feature.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6761\u7ea6\u754c\u7ebf\u3001\u6b96\u6c11\u8fb9\u754c\u548c\u8054\u5408\u56fd\u51b3\u8bae\u90fd\u662f\u4eba\u4e3a\u653f\u6cbb\u51b3\u5b9a\u3002\u6b63\u786e\u7b54\u6848\u662f\u6cb3\u6d41\u3002",
        },
      ],
    },

    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "T",
      title: "How do the Himalayas affect Asia?",
      titleZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5982\u4f55\u5f71\u54cd\u4e9a\u6d32\uff1f",
      subtitle: "The Himalayas were formed by tectonic collision \u2014 and they shape where people live across a vast region.",
      subtitleZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u7531\u677f\u5757\u78b0\u649e\u5f62\u6210\u2014\u2014\u5e76\u5f71\u54cd\u7740\u5e7f\u5927\u5730\u533a\u5185\u4eba\u4eec\u7684\u5c45\u4f4f\u5730\u70b9\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain how the Himalayas were formed using plate tectonic theory.", zh: "\u6211\u80fd\u8fd0\u7528\u677f\u5757\u6784\u9020\u5b66\u7406\u8bba\u89e3\u91ca\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u7684\u5f62\u6210\u3002" },
            { en: "I can describe how the Himalayas affect population density in the surrounding region.", zh: "\u6211\u80fd\u63cf\u8ff0\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5982\u4f55\u5f71\u54cd\u5468\u8fb9\u5730\u533a\u7684\u4eba\u53e3\u5bc6\u5ea6\u3002" },
            { en: "I can identify both the challenges and benefits that the Himalayas bring to nearby populations.", zh: "\u6211\u80fd\u8bc6\u522b\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5bf9\u9644\u8fd1\u5730\u533a\u4e0e\u4eba\u7fa4\u5e26\u6765\u7684\u6311\u6218\u548c\u673a\u9047\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The Earth\u2019s crust is split into large sections called tectonic plates, which can be continental (made of lighter rock) or oceanic (made of denser rock). The Himalayas formed where the Indian plate collided with the Eurasian plate. When two continental plates collide, neither sinks \u2014 instead the crust is pushed upwards, forming fold mountains. This process also makes earthquakes a common hazard in the region.", zh: "\u5730\u7403\u5730\u58f3\u5212\u5206\u4e3a\u79f0\u4e3a\u677f\u5757\u7684\u5927\u5757\u5730\u58f3\u8fd0\u52a8\u5355\u5143\uff0c\u53ef\u4ee5\u662f\u5927\u9646\u677f\u5757\uff08\u7531\u8f83\u8f7b\u5ca9\u77f3\u6784\u6210\uff09\u6216\u6d77\u6d0b\u677f\u5757\uff08\u7531\u8f83\u91cd\u5ca9\u77f3\u6784\u6210\uff09\u3002\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5f62\u6210\u4e8e\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u7684\u78b0\u649e\u5904\u3002\u4e24\u4e2a\u5927\u9646\u677f\u5757\u78b0\u649e\u65f6\uff0c\u4e8c\u8005\u90fd\u4e0d\u4f1a\u4e0b\u6c89\u2014\u2014\u800c\u662f\u5730\u58f3\u88ab\u63a8\u5411\u4e0a\u65b9\uff0c\u5f62\u6210\u8944\u66f2\u5c71\u3002\u8fd9\u4e00\u8fc7\u7a0b\u4e5f\u4f7f\u5730\u9707\u6210\u4e3a\u8be5\u5730\u533a\u5e38\u89c1\u7684\u81ea\u7136\u707e\u5bb3\u3002" },
            { type: "highlight", en: "The Himalayas span India, Pakistan, Nepal, Bhutan, and China. Mountain areas generally have low population density because: steep slopes are difficult to build on; higher altitude means a colder climate; snow and fewer plants reduce available resources.", zh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u8de8\u8d8a\u5370\u5ea6\u3001\u5df4\u57fa\u65af\u5766\u3001\u5c3c\u6cca\u5c14\u3001\u4e0d\u4e39\u548c\u4e2d\u56fd\u3002\u5c71\u533a\u4eba\u53e3\u5bc6\u5ea6\u901a\u5e38\u8f83\u4f4e\uff0c\u539f\u56e0\u5982\u4e0b\uff1a\u5c71\u5761\u999a\u5cfb\uff0c\u96be\u4ee5\u5efa\u9020\uff1b\u6d77\u62d4\u8f83\u9ad8\u610f\u5473\u7740\u6c14\u5019\u66f4\u5bd2\u51b7\uff1b\u79ef\u96ea\u548c\u7a00\u5c11\u7684\u690d\u88ab\u51cf\u5c11\u4e86\u53ef\u7528\u8d44\u6e90\u3002" },
            { type: "text", en: "However, the Himalayas also bring benefits. They are a major tourist attraction, and tourism increases employment. Meltwater flows downstream to support farming across vast lowland areas in India and Bangladesh. Flatter land in river valleys downstream supports higher population density. Tourism and downstream agriculture can both raise living standards in nearby communities.", zh: "\u7136\u800c\uff0c\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u4e5f\u5e26\u6765\u4e86\u76ca\u5904\u3002\u5b83\u662f\u91cd\u8981\u7684\u65c5\u6e38\u76ee\u7684\u5730\uff0c\u65c5\u6e38\u4e1a\u63d0\u9ad8\u4e86\u5c31\u4e1a\u7387\u3002\u5192\u878d\u7684\u96ea\u6c34\u6d41\u5411\u4e0b\u6e38\uff0c\u652f\u6491\u5370\u5ea6\u548c\u5b5f\u52a0\u62c9\u5c71\u5927\u7247\u5e73\u539f\u5730\u533a\u7684\u519c\u4e1a\u751f\u4ea7\u3002\u4e0b\u6e38\u6cb3\u8c37\u4e2d\u76f8\u5bf9\u5e73\u5766\u7684\u571f\u5730\u652f\u6491\u7740\u8f83\u9ad8\u7684\u4eba\u53e3\u5bc6\u5ea6\u3002\u65c5\u6e38\u4e1a\u548c\u4e0b\u6e38\u519c\u4e1a\u90fd\u53ef\u4ee5\u63d0\u5347\u9644\u8fd1\u793e\u533a\u7684\u751f\u6d3b\u6c34\u5e73\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Tectonic plate", zh: "\u5730\u58f3\u677f\u5757", defEn: "A large section of the Earth\u2019s crust that moves slowly over time.", defZh: "\u5730\u7403\u5730\u58f3\u7684\u5927\u5757\u533a\u57df\uff0c\u4f1a\u968f\u65f6\u95f4\u7f13\u6162\u79fb\u52a8\u3002" },
            { en: "Fold mountain", zh: "\u8944\u66f2\u5c71", defEn: "A mountain formed when two tectonic plates collide and push the crust upwards.", defZh: "\u4e24\u4e2a\u677f\u5757\u78b0\u649e\u5c06\u5730\u58f3\u5411\u4e0a\u63a8\u632a\u800c\u5f62\u6210\u7684\u5c71\u5c81\u3002" },
            { en: "Altitude", zh: "\u6d77\u62d4", defEn: "The height of a place above sea level.", defZh: "\u4e00\u4e2a\u5730\u65b9\u9ad8\u4e8e\u6d77\u5e73\u9762\u7684\u9ad8\u5ea6\u3002" },
            { en: "Meltwater", zh: "\u878d\u96ea\u6c34", defEn: "Water produced when snow or ice melts, often feeding rivers downstream.", defZh: "\u96ea\u6216\u51b0\u878d\u5316\u540e\u4ea7\u751f\u7684\u6c34\uff0c\u901a\u5e38\u6d41\u5165\u4e0b\u6e38\u6cb3\u6d41\u3002" },
          ],
        },
        { type: "image", caption: "Mount Everest in the Himalayas \u2014 the world\u2019s highest mountain, formed where the Indian plate collided with the Eurasian plate.", captionZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u4e2d\u7684\u73e0\u7a46\u6717\u739b\u5cf0\u2014\u2014\u4e16\u754c\u6700\u9ad8\u5c71\u5cf0\uff0c\u7531\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u78b0\u649e\u5f62\u6210\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Everest,_Himalayas.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Tectonic Fact", labelZh: "\u91cd\u8981\u677f\u5757\u6784\u9020\u4e8b\u5b9e", en: "The Himalayas are the highest mountain range on Earth, spanning India, Pakistan, Nepal, Bhutan, and China. They were formed where the Indian plate collided with the Eurasian plate, pushing the crust upwards to create fold mountains.", zh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u662f\u5730\u7403\u4e0a\u6700\u9ad8\u7684\u5c71\u8109\uff0c\u8de8\u8d8a\u5370\u5ea6\u3001\u5df4\u57fa\u65af\u5766\u3001\u5c3c\u6cca\u5c14\u3001\u4e0d\u4e39\u548c\u4e2d\u56fd\u3002\u5b83\u4eec\u5f62\u6210\u4e8e\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u78b0\u649e\u4e4b\u5904\uff0c\u5730\u58f3\u88ab\u63a8\u5411\u4e0a\u65b9\uff0c\u5f62\u6210\u8944\u66f2\u5c71\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain how the Himalayas were formed, using the terms \u2018tectonic plates\u2019, \u2018collision\u2019, and \u2018fold mountains\u2019.", qZh: "\u8fd0\u7528\u201c\u677f\u5757\u201d\u3001\u201c\u78b0\u649e\u201d\u548c\u201c\u8944\u66f2\u5c71\u201d\u8fd9\u4e09\u4e2a\u6307\u9879\u89e3\u91ca\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u7684\u5f62\u6210\u3002", aEn: "The Earth\u2019s crust is made of large tectonic plates. When the Indian plate collided with the Eurasian plate, neither plate sank because both were continental. Instead, the collision pushed the crust upwards, forming the fold mountains we know as the Himalayas.", aZh: "\u5730\u7403\u5730\u58f3\u7531\u5927\u578b\u677f\u5757\u6784\u6210\u3002\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u53d1\u751f\u78b0\u649e\u65f6\uff0c\u4e24\u4e2a\u677f\u5757\u90fd\u662f\u5927\u9646\u677f\u5757\uff0c\u6ca1\u6709\u4efb\u4f55\u4e00\u65b9\u4e0b\u6c89\u3002\u76f8\u53cd\uff0c\u78b0\u649e\u5c06\u5730\u58f3\u5411\u4e0a\u63a8\u5c31\uff0c\u5f62\u6210\u4e86\u6211\u4eec\u6240\u77e5\u7684\u559c\u9a6c\u62c9\u96c5\u8944\u66f2\u5c71\u3002" },
            { qEn: "Describe one benefit and one challenge that the Himalayas bring to people living nearby.", qZh: "\u63cf\u8ff0\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5bf9\u9644\u8fd1\u4eba\u7fa4\u5e26\u6765\u7684\u4e00\u4e2a\u76ca\u5904\u548c\u4e00\u4e2a\u6311\u6218\u3002", aEn: "Benefit: meltwater from the Himalayas feeds rivers that support farming across vast lowland areas in India and Bangladesh, helping to sustain large populations. Challenge: steep slopes, cold temperatures, and difficult terrain at high altitude mean that the mountains themselves have low population density and limited farming.", aZh: "\u76ca\u5904\uff1a\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u7684\u878d\u96ea\u6c34\u6c47\u5165\u6cb3\u6d41\uff0c\u652f\u6491\u5370\u5ea6\u548c\u5b5f\u52a0\u62c9\u5c71\u5e7f\u5927\u5e73\u539f\u5730\u533a\u7684\u519c\u4e1a\u751f\u4ea7\uff0c\u6709\u52a9\u4e8e\u7ef4\u6301\u5e9e\u5927\u4eba\u53e3\u3002\u6311\u6218\uff1a\u9ad8\u6d77\u62d4\u5904\u5c71\u5761\u999a\u5cfb\u3001\u6c14\u6e29\u5bd2\u51b7\u3001\u5730\u5f62\u5d4e\u5cad\uff0c\u5bfc\u81f4\u5c71\u533a\u672c\u8eab\u4eba\u53e3\u5bc6\u5ea6\u4f4e\u4e14\u53ef\u8015\u5730\u5c11\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What type of plate boundary formed the Himalayas?",
          qZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u662f\u7531\u54ea\u79cd\u677f\u5757\u8fb9\u754c\u5f62\u6210\u7684\uff1f",
          opts: [
            { en: "Destructive (convergent) boundary where oceanic plate sinks", zh: "\u6d77\u6d0b\u677f\u5757\u4e0b\u6c89\u7684\u6d88\u7075\u578b\uff08\u6c47\u805a\u578b\uff09\u677f\u5757\u8fb9\u754c" },
            { en: "Constructive (divergent) boundary where plates pull apart", zh: "\u677f\u5757\u5206\u79bb\u7684\u6784\u9020\u578b\uff08\u5f20\u88c2\u578b\uff09\u677f\u5757\u8fb9\u754c" },
            { en: "Collision boundary where two continental plates push upwards", zh: "\u4e24\u5757\u5927\u9646\u677f\u5757\u5411\u4e0a\u6324\u538b\u7684\u78b0\u649e\u578b\u677f\u5757\u8fb9\u754c" },
            { en: "Conservative boundary where plates slide past each other", zh: "\u677f\u5757\u6ede\u5e73\u9519\u52a8\u7684\u4fdd\u7559\u578b\u677f\u5757\u8fb9\u754c" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! When two continental plates collide, neither sinks. Instead, the crust is pushed upward to form fold mountains like the Himalayas.",
          explainCorrectZh: "\u6b63\u786e\uff01\u4e24\u5757\u5927\u9646\u677f\u5757\u78b0\u649e\u65f6\uff0c\u53cc\u65b9\u90fd\u4e0d\u4e0b\u6c89\u3002\u5730\u58f3\u88ab\u5411\u4e0a\u63a8\u632a\uff0c\u5f62\u6210\u559c\u9a6c\u62c9\u96c5\u8fd9\u6837\u7684\u8944\u66f2\u5c71\u3002",
          explainWrongEn: "Not quite. Destructive boundaries involve an oceanic plate sinking. Constructive boundaries form at mid-ocean ridges. Conservative boundaries involve plates sliding. The Himalayas were formed by two continental plates colliding and pushing upwards.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6d88\u7075\u578b\u8fb9\u754c\u6d89\u53ca\u6d77\u6d0b\u677f\u5757\u4e0b\u6c89\u3002\u6784\u9020\u578b\u8fb9\u754c\u5728\u6d77\u5c71\u810a\u5904\u5f62\u6210\u3002\u4fdd\u7559\u578b\u8fb9\u754c\u662f\u677f\u5757\u6ede\u52a8\u3002\u559c\u9a6c\u62c9\u96c5\u662f\u4e24\u5757\u5927\u9646\u677f\u5757\u78b0\u649e\u5e76\u5411\u4e0a\u6324\u538b\u5f62\u6210\u7684\u3002",
        },
      ],
    },

    /* ========== Lesson 7 ========== */
    {
      num: 7,
      badge: "T",
      title: "Do volcanoes determine Japan\u2019s population distribution?",
      titleZh: "\u706b\u5c71\u662f\u5426\u51b3\u5b9a\u4e86\u65e5\u672c\u7684\u4eba\u53e3\u5206\u5e03\uff1f",
      subtitle: "Japan sits on a destructive plate boundary \u2014 which creates both volcanic hazards and some of the world\u2019s most densely populated cities.",
      subtitleZh: "\u65e5\u672c\u4f4d\u4e8e\u6d88\u7075\u578b\u677f\u5757\u8fb9\u754c\u2014\u2014\u8fd9\u65e2\u5e26\u6765\u4e86\u706b\u5c71\u707e\u5bb3\uff0c\u4e5f\u5b55\u80b2\u4e86\u4e16\u754c\u4e0a\u4eba\u53e3\u6700\u7a20\u96c6\u7684\u90e8\u5206\u57ce\u5e02\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain how Japan formed at a destructive plate boundary.", zh: "\u6211\u80fd\u89e3\u91ca\u65e5\u672c\u5982\u4f55\u5728\u6d88\u7075\u578b\u677f\u5757\u8fb9\u754c\u5904\u5f62\u6210\u3002" },
            { en: "I can use relief maps and population density maps together to analyse where people live in Japan.", zh: "\u6211\u80fd\u7ed3\u5408\u5730\u5f62\u56fe\u548c\u4eba\u53e3\u5bc6\u5ea6\u56fe\uff0c\u5206\u6790\u65e5\u672c\u4eba\u53e3\u5206\u5e03\u60c5\u51b5\u3002" },
            { en: "I can assess whether physical geography is the main reason for Japan\u2019s population distribution.", zh: "\u6211\u80fd\u8bc4\u4f30\u81ea\u7136\u5730\u7406\u662f\u5426\u662f\u65e5\u672c\u4eba\u53e3\u5206\u5e03\u7684\u4e3b\u8981\u539f\u56e0\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Japan is an island nation in East Asia sitting where the Pacific plate meets the Eurasian plate. This is a destructive (convergent) plate boundary, where the denser Pacific plate is subducted beneath the Eurasian plate. Subduction produces volcanoes, earthquakes, and ocean trenches. Japan is therefore one of the most tectonically active countries on Earth.", zh: "\u65e5\u672c\u662f\u4e1c\u4e9a\u7684\u4e00\u4e2a\u5c9b\u5c7f\u56fd\u5bb6\uff0c\u4f4d\u4e8e\u592a\u5e73\u6d0b\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u4ea4\u754c\u5904\u3002\u8fd9\u662f\u4e00\u4e2a\u6d88\u7075\u578b\uff08\u6c47\u805a\u578b\uff09\u677f\u5757\u8fb9\u754c\uff0c\u5bc6\u5ea6\u8f83\u5927\u7684\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\u3002\u4e0b\u6c89\u4f1a\u4ea7\u751f\u706b\u5c71\u3001\u5730\u9707\u548c\u6d77\u6c9f\u3002\u56e0\u6b64\uff0c\u65e5\u672c\u662f\u5730\u7403\u4e0a\u677f\u5757\u6784\u9020\u6d3b\u52a8\u6700\u4e3a\u5f3a\u70c8\u7684\u56fd\u5bb6\u4e4b\u4e00\u3002" },
            { type: "highlight", en: "Japan\u2019s physical geography shapes where people live. High mountainous and volcanic terrain (which covers much of the interior) tends to have low population density. Flat coastal plains, especially in the south and east, support the highest densities. Tokyo, Osaka, and other major cities are built on these flatter coastal areas.", zh: "\u65e5\u672c\u7684\u81ea\u7136\u5730\u7406\u5f62\u6001\u5f71\u54cd\u7740\u4eba\u53e3\u5206\u5e03\u3002\u5185\u9646\u5927\u7247\u9ad8\u5c71\u548c\u706b\u5c71\u5730\u5e26\u4eba\u53e3\u5bc6\u5ea6\u8f83\u4f4e\uff0c\u800c\u5357\u90e8\u548c\u4e1c\u90e8\u7684\u5e73\u5766\u6cbf\u6d77\u5730\u533a\u4eba\u53e3\u6700\u4e3a\u7a20\u96c6\u3002\u4e1c\u4eac\u3001\u5927\u962a\u7b49\u4e3b\u8981\u57ce\u5e02\u5747\u5efa\u5728\u8fd9\u4e9b\u76f8\u5bf9\u5e73\u5766\u7684\u6cbf\u6d77\u5730\u533a\u3002" },
            { type: "text", en: "However, Japan\u2019s case shows that physical geography alone does not tell the full story. Japan is affected by tectonic hazards, yet its population is not concentrated away from volcanic areas in simple ways. Economic development, industrialisation, and historical settlement patterns have all contributed to where people live today.", zh: "\u7136\u800c\uff0c\u65e5\u672c\u7684\u60c5\u51b5\u8bf4\u660e\uff0c\u5355\u9760\u81ea\u7136\u5730\u7406\u5e76\u4e0d\u80fd\u5448\u73b0\u5168\u8c8c\u3002\u65e5\u672c\u9762\u4e34\u677f\u5757\u6784\u9020\u707e\u5bb3\uff0c\u4f46\u5176\u4eba\u53e3\u5e76\u672a\u4ee5\u7b80\u5355\u7684\u65b9\u5f0f\u8fdc\u79bb\u706b\u5c71\u5730\u533a\u3002\u7ecf\u6d4e\u53d1\u5c55\u3001\u5de5\u4e1a\u5316\u8fdb\u7a0b\u548c\u5386\u53f2\u4e0a\u7684\u5b9a\u5c45\u6a21\u5f0f\uff0c\u5171\u540c\u5851\u9020\u4e86\u4eca\u65e5\u7684\u4eba\u53e3\u5206\u5e03\u683c\u5c40\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Destructive boundary", zh: "\u6d88\u7075\u578b\u8fb9\u754c", defEn: "A plate boundary where one plate sinks beneath another, causing volcanoes and earthquakes.", defZh: "\u4e00\u4e2a\u677f\u5757\u6c89\u5165\u53e6\u4e00\u4e2a\u677f\u5757\u4e0b\u65b9\u7684\u677f\u5757\u8fb9\u754c\uff0c\u4f1a\u5f15\u53d1\u706b\u5c71\u548c\u5730\u9707\u3002" },
            { en: "Subduction", zh: "\u4e0b\u6c89", defEn: "The process where one tectonic plate sinks beneath another at a convergent boundary.", defZh: "\u4e00\u4e2a\u677f\u5757\u5728\u6c47\u805a\u578b\u8fb9\u754c\u5904\u6c89\u5165\u53e6\u4e00\u677f\u5757\u4e0b\u65b9\u7684\u8fc7\u7a0b\u3002" },
            { en: "Relief map", zh: "\u5730\u5f62\u56fe", defEn: "A map that shows the height and shape of the land surface.", defZh: "\u5c55\u793a\u5730\u8868\u9ad8\u5ea6\u548c\u5730\u5f62\u72b6\u5c3e\u7684\u5730\u56fe\u3002" },
            { en: "Volcanic hazard", zh: "\u706b\u5c71\u707e\u5bb3", defEn: "A danger caused by volcanic activity, such as lava flows, ash clouds, or lahars.", defZh: "\u706b\u5c71\u6d3b\u52a8\u5f15\u53d1\u7684\u5371\u9669\uff0c\u5982\u71d5\u6d41\u3001\u706b\u5c71\u7070\u4e91\u6216\u6ce5\u77f3\u6d41\u3002" },
          ],
        },
        { type: "image", caption: "Mount Fuji \u2014 Japan\u2019s iconic volcano, formed at a destructive plate boundary where the Pacific plate is subducted beneath the Eurasian plate.", captionZh: "\u5bcc\u58eb\u5c71\u2014\u2014\u65e5\u672c\u6807\u5fd7\u6027\u706b\u5c71\uff0c\u5728\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\u7684\u6d88\u7075\u578b\u677f\u5757\u8fb9\u754c\u5904\u5f62\u6210\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chureito_Pagoda_and_Mount_Fuji_(44951842365).jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Tectonic Fact", labelZh: "\u91cd\u8981\u677f\u5757\u6784\u9020\u4e8b\u5b9e", en: "Japan is located where the Pacific plate is subducted beneath the Eurasian plate. This destructive boundary creates volcanoes, earthquakes, and ocean trenches \u2014 making Japan one of the most tectonically active nations on Earth.", zh: "\u65e5\u672c\u4f4d\u4e8e\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\u5904\u3002\u8fd9\u4e00\u6d88\u7075\u578b\u8fb9\u754c\u4ea7\u751f\u706b\u5c71\u3001\u5730\u9707\u548c\u6d77\u6c9f\uff0c\u4f7f\u65e5\u672c\u6210\u4e3a\u5730\u7403\u4e0a\u677f\u5757\u6784\u9020\u6d3b\u52a8\u6700\u4e3a\u5f3a\u70c8\u7684\u56fd\u5bb6\u4e4b\u4e00\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "What type of plate boundary is found under Japan, and what hazards does it create?", qZh: "\u65e5\u672c\u5e95\u90e8\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\u677f\u5757\u8fb9\u754c\uff1f\u5b83\u4f1a\u5e26\u6765\u54ea\u4e9b\u707e\u5bb3\uff1f", aEn: "Japan sits on a destructive (convergent) plate boundary where the Pacific plate sinks beneath the Eurasian plate. This subduction produces volcanic activity, frequent earthquakes, and ocean trenches.", aZh: "\u65e5\u672c\u5750\u843d\u5728\u6d88\u7075\u578b\uff08\u6c47\u805a\u578b\uff09\u677f\u5757\u8fb9\u754c\u4e0a\uff0c\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\u3002\u8fd9\u79cd\u4e0b\u6c89\u4e0e\u706b\u5c71\u6d3b\u52a8\u3001\u9891\u7e41\u5730\u9707\u548c\u6d77\u6c9f\u76f8\u5173\u3002" },
            { qEn: "A student says: \u2018Volcanoes completely determine where people live in Japan.\u2019 Do you agree? Explain your answer.", qZh: "\u4e00\u4e2a\u540c\u5b66\u8bf4\uff1a\u201c\u706b\u5c71\u5b8c\u5168\u51b3\u5b9a\u4e86\u65e5\u672c\u7684\u4eba\u53e3\u5206\u5e03\u3002\u201d\u4f60\u540c\u610f\u5417\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u7b54\u6848\u3002", aEn: "Partly agree. Physical geography does matter \u2014 mountainous volcanic interiors tend to have low population density, while flatter coastal plains are densely populated. However, human factors such as economic development, industrialisation, and historical city growth also strongly influence population distribution. Volcanoes are one factor, not the only one.", aZh: "\u90e8\u5206\u540c\u610f\u3002\u81ea\u7136\u5730\u7406\u786e\u5b9e\u91cd\u8981\u2014\u2014\u5c71\u5c81\u706b\u5c71\u5185\u5730\u901a\u5e38\u4eba\u53e3\u5bc6\u5ea6\u8f83\u4f4e\uff0c\u800c\u5e73\u5766\u6cbf\u6d77\u5730\u533a\u4eba\u53e3\u7a20\u96c6\u3002\u4f46\u7ecf\u6d4e\u53d1\u5c55\u3001\u5de5\u4e1a\u5316\u548c\u5386\u53f2\u57ce\u5e02\u6210\u957f\u7b49\u4eba\u6587\u56e0\u7d20\u4e5f\u5f3a\u70c8\u5f71\u54cd\u7740\u4eba\u53e3\u5206\u5e03\u3002\u706b\u5c71\u662f\u56e0\u7d20\u4e4b\u4e00\uff0c\u5e76\u975e\u552f\u4e00\u539f\u56e0\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What happens at a destructive plate boundary?",
          qZh: "\u6d88\u7075\u578b\u677f\u5757\u8fb9\u754c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "Two plates pull apart, creating new crust", zh: "\u4e24\u4e2a\u677f\u5757\u5206\u79bb\uff0c\u5f62\u6210\u65b0\u5730\u58f3" },
            { en: "One plate sinks beneath another, causing volcanoes and earthquakes", zh: "\u4e00\u4e2a\u677f\u5757\u5728\u53e6\u4e00\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\uff0c\u5f15\u53d1\u706b\u5c71\u548c\u5730\u9707" },
            { en: "Two continental plates push upwards to form fold mountains", zh: "\u4e24\u4e2a\u5927\u9646\u677f\u5757\u5411\u4e0a\u6324\u538b\uff0c\u5f62\u6210\u8944\u66f2\u5c71" },
            { en: "Plates slide past each other horizontally", zh: "\u677f\u5757\u6c34\u5e73\u6ede\u8fc7\u5f7c\u6b64" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! At a destructive boundary, a denser oceanic plate sinks beneath a lighter plate. The subduction produces magma, leading to volcanoes, and also causes frequent earthquakes.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5728\u6d88\u7075\u578b\u8fb9\u754c\uff0c\u5bc6\u5ea6\u8f83\u5927\u7684\u6d77\u6d0b\u677f\u5757\u6c89\u5165\u5bc6\u5ea6\u8f83\u5c0f\u7684\u677f\u5757\u4e0b\u65b9\u3002\u4e0b\u6c89\u4ea7\u751f\u5ca9\u6d46\uff0c\u5bfc\u81f4\u706b\u5c71\u6d3b\u52a8\uff0c\u5e76\u5f15\u53d1\u9891\u7e41\u5730\u9707\u3002",
          explainWrongEn: "Not quite. Pulling apart creates new crust (constructive boundary). Two continental plates pushing up forms fold mountains. Sliding plates are conservative. The correct answer describes a destructive boundary.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5206\u5f00\u6784\u9020\u65b0\u5730\u58f3\uff08\u6784\u9020\u578b\u8fb9\u754c\uff09\u3002\u4e24\u5757\u5927\u9646\u677f\u5757\u6324\u538b\u5f62\u6210\u8944\u66f2\u5c71\u3002\u6ede\u52a8\u677f\u5757\u5c5e\u4fdd\u7559\u578b\u3002\u6b63\u786e\u7b54\u6848\u63cf\u8ff0\u7684\u662f\u6d88\u7075\u578b\u8fb9\u754c\u3002",
        },
      ],
    },

    /* ========== Lesson 8 ========== */
    {
      num: 8,
      badge: "A",
      title: "How similar are the Himalayas and Japan?",
      titleZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u4e0e\u65e5\u672c\u6709\u591a\u76f8\u4f3c\uff1f",
      subtitle: "Comparing two very different physical environments \u2014 and what they reveal about tectonic processes and human geography.",
      subtitleZh: "\u5bf9\u6bd4\u4e24\u79cd\u5dee\u5f02\u6781\u5927\u7684\u81ea\u7136\u73af\u5883\u2014\u2014\u5e76\u63a2\u8ba8\u5b83\u4eec\u5bf9\u677f\u5757\u6784\u9020\u548c\u4eba\u6587\u5730\u7406\u7684\u542f\u793a\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can compare how the Himalayas and Japan formed at different types of plate boundaries.", zh: "\u6211\u80fd\u6bd4\u8f83\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u5728\u4e0d\u540c\u677f\u5757\u8fb9\u754c\u5904\u7684\u5f62\u6210\u8fc7\u7a0b\u3002" },
            { en: "I can identify similarities and differences in how physical geography affects population density in both places.", zh: "\u6211\u80fd\u8bc6\u522b\u81ea\u7136\u5730\u7406\u5bf9\u4e24\u5730\u4eba\u53e3\u5bc6\u5ea6\u5f71\u54cd\u7684\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002" },
            { en: "I can write a comparative explanation using geographical evidence from both case studies.", zh: "\u6211\u80fd\u8fd0\u7528\u4e24\u4e2a\u6848\u4f8b\u7684\u5730\u7406\u8bc1\u636e\u64b0\u5199\u5bf9\u6bd4\u6027\u8bf4\u660e\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The Himalayas and Japan are both shaped by tectonic processes, but in different ways. The Himalayas formed at a collision boundary where two continental plates pushed upwards, creating fold mountains. Japan formed at a destructive boundary where the oceanic Pacific plate sank beneath the Eurasian plate, producing volcanic islands.", zh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u90fd\u7531\u677f\u5757\u6784\u9020\u529b\u5851\u9020\uff0c\u4f46\u65b9\u5f0f\u4e0d\u540c\u3002\u559c\u9a6c\u62c9\u96c5\u5728\u4e24\u4e2a\u5927\u9646\u677f\u5757\u76f8\u4e92\u78b0\u649e\u3001\u5411\u4e0a\u6324\u538b\u5f62\u6210\u8944\u66f2\u5c71\u7684\u5730\u65b9\u5f62\u6210\u3002\u65e5\u672c\u5219\u5728\u6d88\u7075\u578b\u8fb9\u754c\u5904\u5f62\u6210\uff0c\u5bc6\u5ea6\u8f83\u5927\u7684\u6d77\u6d0b\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\uff0c\u4ea7\u751f\u706b\u5c71\u5c9b\u5c7f\u3002" },
            { type: "highlight", en: "Key similarities: both are shaped by tectonic forces; both have high-relief terrain that limits population density; both are prone to earthquakes. Key differences: the Himalayas are fold mountains on a continent; Japan is a volcanic island arc. Japan has major cities on flat coastal plains; Himalayan lowlands are shared across several countries.", zh: "\u4e3b\u8981\u76f8\u540c\u70b9\uff1a\u4e24\u8005\u90fd\u7531\u677f\u5757\u529b\u5851\u9020\uff1b\u4e24\u8005\u5747\u6709\u9ad8\u8d77\u4f0f\u5730\u5f62\uff0c\u9650\u5236\u4eba\u53e3\u5bc6\u5ea6\uff1b\u4e24\u8005\u90fd\u5bb9\u6613\u53d1\u751f\u5730\u9707\u3002\u4e3b\u8981\u4e0d\u540c\u70b9\uff1a\u559c\u9a6c\u62c9\u96c5\u662f\u5927\u9646\u4e0a\u7684\u8944\u66f2\u5c71\uff1b\u65e5\u672c\u662f\u706b\u5c71\u5c9b\u5f27\u3002\u65e5\u672c\u5728\u5e73\u5766\u6cbf\u6d77\u5730\u533a\u62e5\u6709\u5927\u57ce\u5e02\uff1b\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5c71\u9afe\u5730\u5e26\u5219\u7531\u591a\u4e2a\u56fd\u5bb6\u5171\u6709\u3002" },
            { type: "text", en: "In both places, relief strongly influences where people settle. The mountainous interiors tend to have low population density, while lower-lying and flatter areas support much denser populations. However, human factors \u2014 such as economic activity, agriculture, and historical settlement \u2014 also play a major role in determining where large communities develop.", zh: "\u5728\u8fd9\u4e24\u4e2a\u5730\u65b9\uff0c\u5730\u5f62\u5747\u5f3a\u70c8\u5f71\u54cd\u7740\u4eba\u4eec\u7684\u5b9a\u5c45\u9009\u62e9\u3002\u5c71\u533a\u5185\u90e8\u4eba\u53e3\u5bc6\u5ea6\u5f80\u5f80\u8f83\u4f4e\uff0c\u800c\u5730\u52bf\u8f83\u4f4e\u3001\u8f83\u5e73\u5766\u7684\u5730\u533a\u80fd\u652f\u6491\u66f4\u9ad8\u7684\u4eba\u53e3\u5bc6\u5ea6\u3002\u7136\u800c\uff0c\u7ecf\u6d4e\u6d3b\u52a8\u3001\u519c\u4e1a\u548c\u5386\u53f2\u5b9a\u5c45\u7b49\u4eba\u6587\u56e0\u7d20\u5bf9\u5927\u578b\u793e\u533a\u5728\u54ea\u91cc\u53d1\u5c55\u540c\u6837\u8d77\u7740\u91cd\u8981\u4f5c\u7528\u3002" },
            { type: "example", en: "Comparison tip: when comparing two places, always use the structure \u2018Both\u2026 However\u2026\u2019 to show both similarities and differences. For example: \u2018Both the Himalayas and Japan are shaped by tectonic forces and have high-relief terrain. However, the Himalayas were formed at a collision boundary, while Japan formed at a destructive boundary.\u2019", zh: "\u5bf9\u6bd4\u5c0f\u63d0\u793a\uff1a\u5bf9\u6bd4\u4e24\u5730\u65f6\uff0c\u59cb\u7ec8\u8fd0\u7528\u201c\u4e24\u8005\u90fd\u2026\u2026\u7136\u800c\u2026\u2026\u201d\u7684\u53e5\u5f0f\u5c55\u793a\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002\u4f8b\u5982\uff1a\u201c\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u90fd\u7531\u677f\u5757\u6784\u9020\u529b\u5851\u9020\uff0c\u5e76\u5177\u6709\u9ad8\u8d77\u4f0f\u5730\u5f62\u3002\u7136\u800c\uff0c\u559c\u9a6c\u62c9\u96c5\u5f62\u6210\u4e8e\u78b0\u649e\u578b\u8fb9\u754c\uff0c\u800c\u65e5\u672c\u5f62\u6210\u4e8e\u6d88\u7075\u578b\u8fb9\u754c\u3002\u201d" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Collision boundary", zh: "\u78b0\u649e\u578b\u8fb9\u754c", defEn: "A plate boundary where two continental plates meet and push upwards, forming fold mountains.", defZh: "\u4e24\u4e2a\u5927\u9646\u677f\u5757\u76f8\u9047\u5e76\u5411\u4e0a\u6324\u538b\u5f62\u6210\u8944\u66f2\u5c71\u7684\u677f\u5757\u8fb9\u754c\u3002" },
            { en: "Island arc", zh: "\u5c9b\u5f27", defEn: "A curved chain of volcanic islands formed above a subduction zone.", defZh: "\u5728\u4e0b\u6c89\u5e26\u4e0a\u65b9\u5f62\u6210\u7684\u5f27\u5f62\u706b\u5c71\u5c9b\u5c7f\u9e32\u3002" },
            { en: "Relief", zh: "\u5730\u5f62\u8d77\u4f0f", defEn: "The variation in height of the land surface \u2014 from high mountains to low valleys.", defZh: "\u5730\u8868\u9ad8\u5ea6\u7684\u53d8\u5316\u2014\u2014\u4ece\u9ad8\u5c71\u5230\u4f4e\u8c37\u3002" },
            { en: "Comparative writing", zh: "\u5bf9\u6bd4\u5199\u4f5c", defEn: "A style of writing that identifies both similarities and differences between two or more things.", defZh: "\u540c\u65f6\u8bc6\u522b\u4e24\u4e2a\u6216\u591a\u4e2a\u4e8b\u7269\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u7684\u5199\u4f5c\u65b9\u5f0f\u3002" },
          ],
        },
        { type: "image", caption: "Mount Fuji, Japan \u2014 a volcanic island arc formed at a destructive boundary, contrasting with the Himalayas formed at a collision boundary.", captionZh: "\u65e5\u672c\u5bcc\u58eb\u5c71\u2014\u2014\u5728\u6d88\u7075\u578b\u8fb9\u754c\u5f62\u6210\u7684\u706b\u5c71\u5c9b\u5f27\uff0c\u4e0e\u5728\u78b0\u649e\u578b\u8fb9\u754c\u5f62\u6210\u7684\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5f62\u6210\u5bf9\u6bd4\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chureito_Pagoda_and_Mount_Fuji_(44951842365).jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Comparison", labelZh: "\u5730\u7406\u5bf9\u6bd4", en: "Both the Himalayas and Japan are tectonically active. The Himalayas formed at a collision boundary (two continental plates) and the mountains themselves have low population density. Japan formed at a destructive boundary (oceanic plate subducting) and concentrates most of its population on flat coastal plains.", zh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u90fd\u5177\u6709\u677f\u5757\u6784\u9020\u6d3b\u52a8\u6027\u3002\u559c\u9a6c\u62c9\u96c5\u5728\u78b0\u649e\u578b\u8fb9\u754c\uff08\u4e24\u4e2a\u5927\u9646\u677f\u5757\uff09\u5f62\u6210\uff0c\u5c71\u533a\u672c\u8eab\u4eba\u53e3\u5bc6\u5ea6\u8f83\u4f4e\u3002\u65e5\u672c\u5728\u6d88\u7075\u578b\u8fb9\u754c\uff08\u6d77\u6d0b\u677f\u5757\u4e0b\u6c89\uff09\u5f62\u6210\uff0c\u5927\u90e8\u5206\u4eba\u53e3\u96c6\u4e2d\u5728\u5e73\u5766\u6cbf\u6d77\u5730\u533a\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Give one similarity and one difference between how the Himalayas and Japan were formed.", qZh: "\u5404\u4e3e\u4e00\u4e2a\u76f8\u540c\u70b9\u548c\u4e00\u4e2a\u4e0d\u540c\u70b9\uff0c\u6bd4\u8f83\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u7684\u5f62\u6210\u65b9\u5f0f\u3002", aEn: "Similarity: both were formed by tectonic plate movement and both are prone to earthquakes. Difference: the Himalayas formed at a collision boundary where two continental plates pushed upwards; Japan formed at a destructive boundary where an oceanic plate sank beneath a continental plate, creating volcanic activity.", aZh: "\u76f8\u540c\u70b9\uff1a\u4e24\u8005\u90fd\u7531\u677f\u5757\u8fd0\u52a8\u5f62\u6210\uff0c\u90fd\u5bb9\u6613\u53d1\u751f\u5730\u9707\u3002\u4e0d\u540c\u70b9\uff1a\u559c\u9a6c\u62c9\u96c5\u5728\u4e24\u4e2a\u5927\u9646\u677f\u5757\u4e92\u76f8\u6324\u538b\u5411\u4e0a\u7684\u78b0\u649e\u578b\u8fb9\u754c\u5f62\u6210\uff1b\u65e5\u672c\u5728\u6d77\u6d0b\u677f\u5757\u5728\u5927\u9646\u677f\u5757\u4e0b\u6c89\u7684\u6d88\u7075\u578b\u8fb9\u754c\u5f62\u6210\uff0c\u4ea7\u751f\u4e86\u706b\u5c71\u6d3b\u52a8\u3002" },
            { qEn: "How does physical geography similarly affect population distribution in both the Himalayas and Japan?", qZh: "\u81ea\u7136\u5730\u7406\u5982\u4f55\u4ee5\u76f8\u4f3c\u7684\u65b9\u5f0f\u5f71\u54cd\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u548c\u65e5\u672c\u7684\u4eba\u53e3\u5206\u5e03\uff1f", aEn: "In both places, high-relief terrain \u2014 whether mountain ranges or volcanic peaks \u2014 creates areas with low population density because steep slopes are hard to farm and build on, and higher altitudes mean colder climates. In both cases, flatter low-lying land is far more densely populated.", aZh: "\u5728\u4e24\u5730\uff0c\u9ad8\u8d77\u4f0f\u5730\u5f62\u2014\u2014\u65e0\u8bba\u662f\u5c71\u8109\u8fd8\u662f\u706b\u5c71\u5c71\u5cf0\u2014\u2014\u90fd\u5f62\u6210\u4e86\u4eba\u53e3\u5bc6\u5ea6\u8f83\u4f4e\u7684\u5730\u533a\uff0c\u56e0\u4e3a\u9668\u5cfb\u5c71\u5761\u96be\u4ee5\u8015\u4f5c\u548c\u5efa\u9020\uff0c\u9ad8\u6d77\u62d4\u610f\u5473\u7740\u6c14\u5019\u66f4\u5bd2\u51b7\u3002\u4e24\u5730\u5747\u662f\u8f83\u5e73\u5766\u7684\u4f4e\u6d3b\u5730\u533a\u4eba\u53e3\u8fdc\u8fdc\u66f4\u7a20\u96c6\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is a key DIFFERENCE between the Himalayas and Japan?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u4e0e\u65e5\u672c\u4e4b\u95f4\u7684\u4e00\u4e2a\u5173\u952e\u533a\u522b\uff1f",
          opts: [
            { en: "Both are affected by tectonic activity", zh: "\u4e24\u8005\u90fd\u53d7\u677f\u5757\u6784\u9020\u6d3b\u52a8\u5f71\u54cd" },
            { en: "Both have mountainous terrain that limits population density", zh: "\u4e24\u8005\u90fd\u6709\u5c71\u5ccd\u5730\u5f62\uff0c\u9650\u5236\u4e86\u4eba\u53e3\u5bc6\u5ea6" },
            { en: "Japan formed at a destructive boundary; the Himalayas at a collision boundary", zh: "\u65e5\u672c\u5728\u6d88\u7075\u578b\u8fb9\u754c\u5f62\u6210\uff1b\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5728\u78b0\u649e\u578b\u8fb9\u754c\u5f62\u6210" },
            { en: "Both have flat plains that are densely populated", zh: "\u4e24\u8005\u90fd\u6709\u4eba\u53e3\u7a20\u96c6\u7684\u5e73\u539f" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! This is the key difference. Japan formed at a destructive (subduction) boundary, producing volcanic islands. The Himalayas formed at a collision boundary between two continental plates.",
          explainCorrectZh: "\u6b63\u786e\uff01\u8fd9\u662f\u5173\u952e\u533a\u522b\u3002\u65e5\u672c\u5728\u6d88\u7075\u578b\uff08\u4e0b\u6c89\uff09\u8fb9\u754c\u5f62\u6210\uff0c\u4ea7\u751f\u706b\u5c71\u5c9b\u5c7f\u3002\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5728\u4e24\u5757\u5927\u9646\u677f\u5757\u7684\u78b0\u649e\u578b\u8fb9\u754c\u5f62\u6210\u3002",
          explainWrongEn: "Those options describe similarities, not differences. The key difference is the type of plate boundary that formed each place.",
          explainWrongZh: "\u90a3\u4e9b\u9009\u9879\u63cf\u8ff0\u7684\u662f\u76f8\u540c\u70b9\u800c\u975e\u4e0d\u540c\u70b9\u3002\u5173\u952e\u533a\u522b\u5728\u4e8e\u5f62\u6210\u5404\u5730\u7684\u677f\u5757\u8fb9\u754c\u7c7b\u578b\u4e0d\u540c\u3002",
        },
      ],
    },

    /* ========== Lesson 9 ========== */
    {
      num: 9,
      badge: "T",
      title: "The deserts of Asia",
      titleZh: "\u4e9a\u6d32\u7684\u6c99\u6f20",
      subtitle: "Deserts cover vast areas of Asia \u2014 from the scorching Arabian Desert to the freezing Gobi.",
      subtitleZh: "\u6c99\u6f20\u8986\u76d6\u4e86\u4e9a\u6d32\u5e7f\u9614\u7684\u5730\u5e26\u2014\u2014\u4ece\u70bd\u70ed\u7684\u963f\u62c9\u4f2f\u6c99\u6f20\u5230\u5bd2\u51b7\u7684\u6208\u58c1\u6c99\u6f20\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define what a desert is and explain how deserts are classified.", zh: "\u6211\u80fd\u5b9a\u4e49\u6c99\u6f20\uff0c\u5e76\u89e3\u91ca\u6c99\u6f20\u5982\u4f55\u5206\u7c7b\u3002" },
            { en: "I can compare the characteristics of hot and cold deserts in Asia.", zh: "\u6211\u80fd\u6bd4\u8f83\u4e9a\u6d32\u70ed\u6f20\u548c\u51b7\u6f20\u7684\u7279\u5f81\u3002" },
            { en: "I can describe the Arabian Desert and Gobi Desert as case studies.", zh: "\u6211\u80fd\u4ee5\u963f\u62c9\u4f2f\u6c99\u6f20\u548c\u6208\u58c1\u6c99\u6f20\u4e3a\u6848\u4f8b\u8fdb\u884c\u63cf\u8ff0\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A desert is a biome defined by very low precipitation \u2014 less than 250 mm of rain per year. This means deserts are not just about heat. They can also be extremely cold. What defines a desert is its dryness, not its temperature.", zh: "\u6c99\u6f20\u662f\u4e00\u79cd\u51fa\u73b0\u6781\u5c11\u964d\u6c34\u7684\u751f\u7269\u7fa4\u843d\u2014\u2014\u6bcf\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u3002\u8fd9\u610f\u5473\u7740\u6c99\u6f20\u5e76\u975e\u4ec5\u4ec5\u662f\u70bd\u70ed\u7684\u3002\u5b83\u4eec\u4e5f\u53ef\u4ee5\u6781\u5ea6\u5bd2\u51b7\u3002\u5b9a\u4e49\u6c99\u6f20\u7684\u662f\u5176\u5e72\u71e5\u7a0b\u5ea6\uff0c\u800c\u975e\u6c14\u6e29\u3002" },
            { type: "highlight", en: "Hot deserts: usually near the tropics, with very high daytime temperatures and cold nights. Low cloud cover means intense sunlight. Lots of bare rock and sand; very little surface water or plants. Example: the Arabian Desert. Cold deserts: often at higher altitude or far from the tropics. Very dry but temperatures can fall well below freezing. Example: the Gobi Desert.", zh: "\u70ed\u6f20\uff1a\u901a\u5e38\u5728\u70ed\u5e26\u9644\u8fd1\uff0c\u767d\u5929\u6c14\u6e29\u6781\u9ad8\uff0c\u591c\u665a\u5bd2\u51b7\u3002\u4e91\u5c42\u7a00\u5c11\u5bfc\u81f4\u5f3a\u70c8\u65e5\u7167\u3002\u5e7f\u6cdb\u7684\u88f8\u9732\u5ca9\u77f3\u548c\u6c99\u5730\uff0c\u5730\u8868\u6c34\u548c\u690d\u7269\u6781\u5c11\u3002\u4f8b\u5982\uff1a\u963f\u62c9\u4f2f\u6c99\u6f20\u3002\u51b7\u6f20\uff1a\u5e38\u5728\u9ad8\u6d77\u62d4\u6216\u8fdc\u79bb\u70ed\u5e26\u7684\u5730\u65b9\u3002\u6781\u5ea6\u5e72\u71e5\uff0c\u4f46\u6c14\u6e29\u53ef\u8fdc\u4f4e\u4e8e\u51b0\u70b9\u4ee5\u4e0b\u3002\u4f8b\u5982\uff1a\u6208\u58c1\u6c99\u6f20\u3002" },
            { type: "text", en: "The Arabian Desert covers most of the Arabian Peninsula. It is one of Asia\u2019s largest hot deserts, characterized by vast sandy areas (known as ergs), rocky plateaus, and extreme temperature differences between day and night. The Gobi Desert stretches across parts of China and Mongolia. It is a cold desert at high altitude. Temperatures can be very low in winter. Despite its harshness, the Gobi was historically important as part of the Silk Road trade routes.", zh: "\u963f\u62c9\u4f2f\u6c99\u6f20\u8986\u76d6\u4e86\u963f\u62c9\u4f2f\u534a\u5c9b\u5927\u90e8\u5206\u5730\u533a\u3002\u5b83\u662f\u4e9a\u6d32\u6700\u5927\u7684\u70ed\u6f20\u4e4b\u4e00\uff0c\u4ee5\u5e7f\u9614\u6c99\u4e18\uff08\u79f0\u4e3a\u5e72\u6c99\u4e18\uff09\u3001\u5ca9\u77f3\u9ad8\u539f\u548c\u663c\u591c\u6781\u5927\u7684\u6e29\u5dee\u4e3a\u7279\u5f81\u3002\u6208\u58c1\u6c99\u6f20\u5ef6\u4f38\u81f3\u4e2d\u56fd\u548c\u8499\u53e4\u90e8\u5206\u5730\u533a\u3002\u5b83\u662f\u4e00\u4e2a\u9ad8\u6d77\u62d4\u7684\u51b7\u6f20\uff0c\u51ac\u5b63\u6c14\u6e29\u53ef\u4ee5\u975e\u5e38\u4f4e\u3002\u5c3d\u7ba1\u4e25\u9177\u65f6\u80b6\uff0c\u6208\u58c1\u5728\u5386\u53f2\u4e0a\u4f5c\u4e3a\u4e1d\u7ef8\u4e4b\u8def\u8d38\u6613\u8def\u7ebf\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5177\u6709\u91cd\u8981\u610f\u4e49\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Desert", zh: "\u6c99\u6f20", defEn: "A biome that receives less than 250 mm of precipitation per year.", defZh: "\u6bcf\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u7684\u751f\u7269\u7fa4\u843d\u3002" },
            { en: "Biome", zh: "\u751f\u7269\u7fa4\u843d", defEn: "A large area with a distinctive climate, vegetation, and wildlife, such as a desert or rainforest.", defZh: "\u5177\u6709\u72ec\u7279\u6c14\u5019\u3001\u690d\u88ab\u548c\u91ce\u751f\u52a8\u7269\u7684\u5927\u578b\u5730\u533a\uff0c\u5982\u6c99\u6f20\u6216\u70ed\u5e26\u96e8\u6797\u3002" },
            { en: "Hot desert", zh: "\u70ed\u6f20", defEn: "A desert found near the tropics with very high temperatures during the day.", defZh: "\u4f4d\u4e8e\u70ed\u5e26\u9644\u8fd1\u3001\u767d\u5929\u6c14\u6e29\u6781\u9ad8\u7684\u6c99\u6f20\u3002" },
            { en: "Cold desert", zh: "\u51b7\u6f20", defEn: "A desert found at high altitude or far from the tropics, with very low temperatures in winter.", defZh: "\u4f4d\u4e8e\u9ad8\u6d77\u62d4\u6216\u8fdc\u79bb\u70ed\u5e26\u3001\u51ac\u5b63\u6c14\u6e29\u6781\u4f4e\u7684\u6c99\u6f20\u3002" },
          ],
        },
        { type: "image", caption: "The Gobi Desert \u2014 a cold desert spanning China and Mongolia, showing how deserts are defined by low rainfall, not just high temperatures.", captionZh: "\u6208\u58c1\u6c99\u6f20\u2014\u2014\u8de8\u8d8a\u4e2d\u56fd\u548c\u8499\u53e4\u7684\u51b7\u6f20\uff0c\u8bf4\u660e\u6c99\u6f20\u7531\u4f4e\u964d\u6c34\u91cf\u5b9a\u4e49\uff0c\u800c\u975e\u4ec5\u4ec5\u662f\u9ad8\u6e29\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gobi_Desert_dunes.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Definition", labelZh: "\u5730\u7406\u5b66\u5b9a\u4e49", en: "A desert is defined by its low annual precipitation (under 250 mm), not necessarily by high temperature. This is why the cold Gobi Desert and the hot Arabian Desert are both classified as deserts.", zh: "\u6c99\u6f20\u7684\u5b9a\u4e49\u662f\u5e74\u964d\u6c34\u91cf\u4f4e\uff08\u4e0d\u8db3250\u6beb\u7c73\uff09\uff0c\u800c\u975e\u5fc5\u7136\u662f\u6c14\u6e29\u9ad8\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u5bd2\u51b7\u7684\u6208\u58c1\u6c99\u6f20\u548c\u70bd\u70ed\u7684\u963f\u62c9\u4f2f\u6c99\u6f20\u90fd\u5c5e\u4e8e\u6c99\u6f20\u7684\u539f\u56e0\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "A student says \u2018All deserts are hot.\u2019 Is this correct? Use evidence to explain.", qZh: "\u4e00\u4e2a\u540c\u5b66\u8bf4\u201c\u6240\u6709\u6c99\u6f20\u90fd\u662f\u70bd\u70ed\u7684\u3002\u201d\u8fd9\u6b63\u786e\u5417\uff1f\u7528\u8bc1\u636e\u52a0\u4ee5\u89e3\u91ca\u3002", aEn: "This is incorrect. A desert is defined by low annual precipitation (under 250 mm), not by high temperature. The Gobi Desert in China and Mongolia is a cold desert where temperatures fall well below freezing in winter, yet it still qualifies as a desert because of its very low rainfall.", aZh: "\u8fd9\u662f\u4e0d\u6b63\u786e\u7684\u3002\u6c99\u6f20\u7684\u5b9a\u4e49\u662f\u5e74\u964d\u6c34\u91cf\u4f4e\uff08\u4e0d\u8db3250\u6beb\u7c73\uff09\uff0c\u800c\u975e\u6c14\u6e29\u9ad8\u3002\u4e2d\u56fd\u548c\u8499\u53e4\u7684\u6208\u58c1\u6c99\u6f20\u662f\u4e00\u4e2a\u51b7\u6f20\uff0c\u51ac\u5b63\u6c14\u6e29\u8fdc\u4f4e\u4e8e\u51b0\u70b9\uff0c\u4f46\u56e0\u5176\u964d\u6c34\u91cf\u5f88\u5c11\uff0c\u4ecd\u88ab\u5f52\u7c7b\u4e3a\u6c99\u6f20\u3002" },
            { qEn: "Give two reasons why deserts tend to have low population density.", qZh: "\u7ed9\u51fa\u4e24\u4e2a\u539f\u56e0\uff0c\u89e3\u91ca\u6c99\u6f20\u5730\u533a\u4eba\u53e3\u5bc6\u5ea6\u5f80\u5f80\u8f83\u4f4e\u3002", aEn: "First, deserts have very little water, making farming and drinking water supply very difficult. Second, deserts often have extreme temperatures (scorching by day or freezing by winter), making them hard to live and work in. Both factors limit how many people can settle there.", aZh: "\u9996\u5148\uff0c\u6c99\u6f20\u5730\u533a\u6c34\u6e90\u6781\u5c11\uff0c\u8015\u4f5c\u548c\u9965\u7528\u6c34\u4f9b\u5e94\u975e\u5e38\u56f0\u96be\u3002\u5176\u6b21\uff0c\u6c99\u6f20\u5730\u533a\u6c14\u6e29\u5c22\u52a2\uff08\u767d\u5929\u70bd\u70ed\u6216\u51ac\u5b63\u5bd2\u51b7\uff09\uff0c\u751f\u5b58\u548c\u5de5\u4f5c\u6761\u4ef6\u6050\u6001\u3002\u8fd9\u4e24\u4e2a\u56e0\u7d20\u5747\u9650\u5236\u4e86\u80fd\u591f\u5b9a\u5c45\u4e8e\u6b64\u5730\u7684\u4eba\u53e3\u6570\u91cf\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What is the correct definition of a desert in Geography?",
          qZh: "\u5730\u7406\u5b66\u4e2d\u6c99\u6f20\u7684\u6b63\u786e\u5b9a\u4e49\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "A hot, sandy area with no rainfall at all", zh: "\u4e00\u4e2a\u70bd\u70ed\u3001\u5e03\u6ee1\u6c99\u5730\u4e14\u5b8c\u5168\u65e0\u964d\u6c34\u7684\u5730\u533a" },
            { en: "A biome receiving less than 250 mm of precipitation per year", zh: "\u6bcf\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u7684\u751f\u7269\u7fa4\u843d" },
            { en: "Any area with temperatures above 40\u00b0C", zh: "\u6c14\u6e29\u8d85\u8fc740\u00b0C\u7684\u4efb\u4f55\u5730\u533a" },
            { en: "A barren landscape with no plants or animals", zh: "\u6ca1\u6709\u690d\u7269\u548c\u52a8\u7269\u7684\u8354\u820a\u66f4\u5730" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! A desert is defined by its low precipitation (under 250 mm per year). This means cold deserts like the Gobi also count as deserts, even though they are not hot.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6c99\u6f20\u7531\u964d\u6c34\u91cf\u4f4e\uff08\u6bcf\u5e74\u4e0d\u8db3250\u6beb\u7c73\uff09\u5b9a\u4e49\u3002\u8fd9\u610f\u5473\u7740\u6208\u58c1\u8fd9\u6837\u7684\u51b7\u6f20\u4e5f\u5c5e\u4e8e\u6c99\u6f20\uff0c\u5373\u4f7f\u5b83\u5e76\u4e0d\u70bd\u70ed\u3002",
          explainWrongEn: "Not quite. Deserts can be cold. They don\u2019t have to be completely rainless \u2014 just receive under 250 mm per year. Temperature alone does not define a desert. The correct answer is precipitation-based.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6c99\u6f20\u53ef\u4ee5\u662f\u5bd2\u51b7\u7684\u3002\u5b83\u4eec\u4e0d\u4e00\u5b9a\u5168\u5e74\u65e0\u96e8\u2014\u2014\u53ea\u9700\u6bcf\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u5373\u53ef\u3002\u5355\u72ec\u7684\u6c14\u6e29\u65e0\u6cd5\u5b9a\u4e49\u6c99\u6f20\u3002\u6b63\u786e\u7b54\u6848\u57fa\u4e8e\u964d\u6c34\u91cf\u3002",
        },
      ],
    },

    /* ========== Lesson 10 ========== */
    {
      num: 10,
      badge: "T",
      title: "What is happening to population in the Middle East?",
      titleZh: "\u4e2d\u4e1c\u5730\u533a\u7684\u4eba\u53e3\u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\uff1f",
      subtitle: "The Middle East is one of the world\u2019s fastest-growing regions \u2014 and migration to cities like Dubai is reshaping its population structure.",
      subtitleZh: "\u4e2d\u4e1c\u662f\u5168\u7403\u589e\u957f\u6700\u5feb\u7684\u5730\u533a\u4e4b\u4e00\u2014\u2014\u5411\u8fea\u62dc\u7b49\u57ce\u5e02\u7684\u79fb\u6c11\u6d6e\u6d41\u6b63\u5728\u91cd\u5851\u5176\u4eba\u53e3\u7ed3\u6784\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can identify the Middle East as a region with shared characteristics.", zh: "\u6211\u80fd\u8bc6\u522b\u4e2d\u4e1c\u662f\u4e00\u4e2a\u5177\u6709\u5171\u540c\u7279\u5f81\u7684\u5730\u533a\u3002" },
            { en: "I can read a population pyramid to identify patterns of migration and age structure.", zh: "\u6211\u80fd\u8bfb\u53d6\u4eba\u53e3\u91d1\u5b57\u5854\uff0c\u8bc6\u522b\u79fb\u6c11\u6d41\u52a8\u548c\u5e74\u9f84\u7ed3\u6784\u7684\u89c4\u5f8b\u3002" },
            { en: "I can explain why Dubai attracts large numbers of international migrants.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u8fea\u62dc\u5438\u5f15\u5927\u91cf\u56fd\u9645\u79fb\u6c11\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The Middle East is a region of around 17 countries sharing characteristics including a desert and semi-arid climate, Islam as the dominant religion, Arabic as a widely spoken language, and related cultural and food traditions. Countries include Saudi Arabia, the UAE, Qatar, Kuwait, Iraq, Iran, Jordan, and others.", zh: "\u4e2d\u4e1c\u662f\u4e00\u4e2a\u62e5\u670917\u4e2a\u56fd\u5bb6\u7684\u5730\u533a\uff0c\u5171\u540c\u7279\u5f81\u5305\u62ec\uff1a\u5e72\u65f1\u548c\u534a\u5e72\u65f1\u6c14\u5019\u3001\u4f0a\u65af\u5170\u6559\u4e3a\u4e3b\u8981\u5b97\u6559\u3001\u963f\u62c9\u4f2f\u8bed\u4e3a\u5e7f\u6cdb\u4f7f\u7528\u7684\u8bed\u8a00\uff0c\u4ee5\u53ca\u76f8\u4f3c\u7684\u6587\u5316\u548c\u996e\u98df\u4f20\u7edf\u3002\u5404\u56fd\u5305\u62ec\u6c99\u7279\u963f\u62c9\u4f2f\u3001\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u3001\u5361\u5854\u5c14\u3001\u79d1\u5a01\u7279\u3001\u4f0a\u62c9\u514b\u3001\u4f0a\u6717\u3001\u7ea6\u65e6\u7b49\u3002" },
            { type: "highlight", en: "The UAE\u2019s population pyramid shows evidence of strong international migration. There is a very large working-age group \u2014 especially men \u2014 relative to other age groups. This reflects massive labour migration, particularly to Dubai, which has grown rapidly because of oil wealth, tourism, and economic development.", zh: "\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u7684\u4eba\u53e3\u91d1\u5b57\u5854\u663e\u793a\u51fa\u5f3a\u70c8\u7684\u56fd\u9645\u79fb\u6c11\u8bc1\u636e\u3002\u4e0e\u5176\u4ed6\u5e74\u9f84\u7ec4\u76f8\u6bd4\uff0c\u52b3\u52a8\u5e74\u9f84\u7ec4\u4eba\u53e3\u6781\u5927\u2014\u2014\u5c24\u5176\u662f\u7537\u6027\u3002\u8fd9\u53cd\u6620\u4e86\u5927\u89c4\u6a21\u52b3\u52a8\u529b\u8fc1\u79fb\uff0c\u5c24\u5176\u662f\u6d41\u5165\u8fea\u62dc\u7684\u52b3\u52a8\u8005\uff0c\u8be5\u57ce\u5e02\u56e0\u77f3\u6cb9\u8d22\u5bcc\u3001\u65c5\u6e38\u4e1a\u548c\u7ecf\u6d4e\u53d1\u5c55\u800c\u8fc5\u901f\u6210\u957f\u3002" },
            { type: "text", en: "Dubai attracts migrants for multiple reasons. Pull factors include better-paid jobs in construction, hospitality, and finance; tourism employment; oil and energy sector work; opportunities to send remittances home; family career opportunities; business start-up opportunities; international schooling; and a warm coastal lifestyle. These pull factors have transformed Dubai into one of the fastest-growing cities in the world.", zh: "\u8fea\u62dc\u56e0\u591a\u79cd\u539f\u56e0\u5438\u5f15\u79fb\u6c11\u3002\u62c9\u529b\u56e0\u7d20\u5305\u62ec\uff1a\u5efa\u7b51\u3001\u9152\u5e97\u548c\u91d1\u878d\u884c\u4e1a\u8584\u8584\u7684\u5de5\u4f5c\uff1b\u65c5\u6e38\u5c31\u4e1a\u673a\u4f1a\uff1b\u77f3\u6cb9\u548c\u80fd\u6e90\u884c\u4e1a\u5de5\u4f5c\uff1b\u5411\u5bb6\u4eba\u6c47\u6b3e\u7684\u673a\u4f1a\uff1b\u5bb6\u5ead\u804c\u4e1a\u53d1\u5c55\u673a\u9047\uff1b\u521b\u4e1a\u6c34\u5bfc\uff1b\u56fd\u9645\u5b66\u6821\uff1b\u4ee5\u53ca\u6e29\u6696\u7684\u6d77\u6ee8\u751f\u6d3b\u65b9\u5f0f\u3002\u8fd9\u4e9b\u62c9\u529b\u56e0\u7d20\u5c06\u8fea\u62dc\u6253\u9020\u6210\u4e3a\u4e16\u754c\u4e0a\u589e\u957f\u6700\u5feb\u7684\u57ce\u5e02\u4e4b\u4e00\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Population pyramid", zh: "\u4eba\u53e3\u91d1\u5b57\u5854", defEn: "A bar chart showing the age and sex distribution of a population.", defZh: "\u663e\u793a\u4eba\u53e3\u5e74\u9f84\u548c\u6027\u522b\u5206\u5e03\u7684\u6761\u5f62\u56fe\u3002" },
            { en: "Labour migration", zh: "\u52b3\u52a8\u529b\u79fb\u6c11", defEn: "The movement of people from one place to another in search of work.", defZh: "\u4eba\u4eec\u4e3a\u5bfb\u627e\u5de5\u4f5c\u800c\u4ece\u4e00\u5730\u8fc1\u5f80\u53e6\u4e00\u5730\u7684\u8fc1\u79fb\u884c\u4e3a\u3002" },
            { en: "Remittance", zh: "\u6c47\u6b3e", defEn: "Money sent by a migrant worker back to their home country to support family members.", defZh: "\u52b3\u52a8\u8fc1\u79fb\u8005\u6c47\u5bc4\u56de\u5bb6\u4e61\u4ee5\u652f\u6301\u5bb6\u5ead\u6210\u5458\u7684\u8d44\u91d1\u3002" },
            { en: "Semi-arid", zh: "\u534a\u5e72\u65f1", defEn: "A climate that is dry but slightly wetter than a full desert, typically with sparse vegetation.", defZh: "\u5e72\u71e5\u4f46\u6bd4\u5b8c\u5168\u7684\u6c99\u6f20\u7565\u6e7f\u4e00\u4e9b\u7684\u6c14\u5019\uff0c\u901a\u5e38\u6709\u7a00\u758f\u690d\u88ab\u3002" },
          ],
        },
        { type: "image", caption: "Dubai skyline \u2014 one of the Middle East\u2019s fastest-growing cities, attracting international labour migrants from across Asia and beyond.", captionZh: "\u8fea\u62dc\u5929\u9645\u7ebf\u2014\u2014\u4e2d\u4e1c\u589e\u957f\u6700\u5feb\u7684\u57ce\u5e02\u4e4b\u4e00\uff0c\u5438\u5f15\u4e86\u6765\u81ea\u4e9a\u6d32\u5404\u5730\u7684\u56fd\u9645\u52b3\u52a8\u529b\u79fb\u6c11\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubai_Skyline_2016.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Case Study: Dubai pull factors", labelZh: "\u6848\u4f8b\u7814\u7a76\uff1a\u8fea\u62dc\u7684\u62c9\u529b\u56e0\u7d20", en: "Migrants move to Dubai for better-paid jobs, tourism work, oil sector employment, remittances, family opportunities, business start-ups, international schooling, and climate. The UAE\u2019s population pyramid reflects this: working-age men significantly outnumber other groups.", zh: "\u79fb\u6c11\u6d41\u5165\u8fea\u62dc\u7684\u539f\u56e0\u5305\u62ec\uff1a\u6c42\u8584\u5de5\u4f5c\u3001\u65c5\u6e38\u5c31\u4e1a\u3001\u77f3\u6cb9\u884c\u4e1a\u5c31\u4e1a\u3001\u6c47\u6b3e\u6c47\u5165\u3001\u5bb6\u5ead\u53d1\u5c55\u673a\u9047\u3001\u521b\u4e1a\u673a\u4f1a\u3001\u56fd\u9645\u5b66\u6821\u4ee5\u53ca\u6c14\u5019\u3002\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u7684\u4eba\u53e3\u91d1\u5b57\u5854\u5c55\u793a\u4e86\u8fd9\u4e00\u70b9\uff1a\u52b3\u52a8\u5e74\u9f84\u7537\u6027\u4eba\u53e3\u8fdc\u8fdc\u8d85\u8fc7\u5176\u4ed6\u7fa4\u4f53\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "What does the UAE\u2019s population pyramid tell us about migration into the country?", qZh: "\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u7684\u4eba\u53e3\u91d1\u5b57\u5854\u544a\u8bc9\u4e86\u6211\u4eec\u8be5\u56fd\u79fb\u6c11\u6d41\u5165\u7684\u4ec0\u4e48\u4fe1\u606f\uff1f", aEn: "The pyramid shows a very large working-age male population relative to other groups. This suggests that large numbers of male migrant workers have moved to the UAE, especially to cities like Dubai, for employment. It does not reflect a naturally balanced age structure, confirming that migration rather than natural increase is the main driver of population growth.", aZh: "\u91d1\u5b57\u5854\u663e\u793a\u52b3\u52a8\u5e74\u9f84\u7537\u6027\u4eba\u53e3\u8fdc\u8d85\u5176\u4ed6\u7fa4\u4f53\u3002\u8fd9\u8868\u660e\u5927\u91cf\u7537\u6027\u52b3\u52a8\u79fb\u6c11\u5df2\u6d41\u5165\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\uff0c\u5c24\u5176\u662f\u5728\u8fea\u62dc\u7b49\u57ce\u5e02\u5c31\u4e1a\u3002\u8fd9\u4e0d\u662f\u81ea\u7136\u5e73\u8861\u7684\u5e74\u9f84\u7ed3\u6784\uff0c\u5370\u8bc1\u79fb\u6c11\u800c\u975e\u81ea\u7136\u589e\u957f\u662f\u4eba\u53e3\u589e\u957f\u7684\u4e3b\u8981\u9a71\u52a8\u529b\u3002" },
            { qEn: "Give three pull factors that attract migrants to Dubai.", qZh: "\u5217\u51fa\u4e09\u4e2a\u5438\u5f15\u79fb\u6c11\u6d41\u5165\u8fea\u62dc\u7684\u62c9\u529b\u56e0\u7d20\u3002", aEn: "Three pull factors: (1) better-paid jobs in construction, hotels, and finance; (2) tourism employment in one of the world\u2019s busiest tourist destinations; (3) the opportunity to send remittances home to support family in poorer countries.", aZh: "\u4e09\u4e2a\u62c9\u529b\u56e0\u7d20\uff1a\uff081\uff09\u5efa\u7b51\u3001\u9152\u5e97\u548c\u91d1\u878d\u884c\u4e1a\u7684\u9ad8\u85aa\u5de5\u4f5c\uff1b\uff082\uff09\u4e16\u754c\u4e0a\u6700\u7e41\u5fd9\u65c5\u6e38\u76ee\u7684\u5730\u4e4b\u4e00\u7684\u65c5\u6e38\u5c31\u4e1a\u673a\u4f1a\uff1b\uff083\uff09\u5c06\u8584\u8584\u7684\u6c47\u6b3e\u5bd4\u56de\u5bb6\u4e61\u652f\u6301\u8f83\u8d2b\u7a77\u56fd\u5bb6\u5bb6\u4eba\u7684\u673a\u4f1a\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What does a population pyramid with a very large working-age male group most likely indicate?",
          qZh: "\u52b3\u52a8\u5e74\u9f84\u7537\u6027\u7fa4\u4f53\u6781\u5927\u7684\u4eba\u53e3\u91d1\u5b57\u5854\u6700\u53ef\u80fd\u8bf4\u660e\u4ec0\u4e48\uff1f",
          opts: [
            { en: "A country with very high birth rates", zh: "\u51fa\u751f\u7387\u6781\u9ad8\u7684\u56fd\u5bb6" },
            { en: "A country with a rapidly ageing population", zh: "\u4eba\u53e3\u8fc5\u901f\u8001\u9f84\u5316\u7684\u56fd\u5bb6" },
            { en: "A country that has received large numbers of male migrant workers", zh: "\u63a5\u53d7\u4e86\u5927\u91cf\u7537\u6027\u52b3\u52a8\u79fb\u6c11\u7684\u56fd\u5bb6" },
            { en: "A country where young people are emigrating", zh: "\u5e74\u8f7b\u4eba\u5927\u91cf\u79fb\u6c11\u6d77\u5916\u7684\u56fd\u5bb6" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! A disproportionately large working-age male group is a classic sign of labour immigration. Countries like the UAE have received huge numbers of male workers, especially in construction and hospitality.",
          explainCorrectZh: "\u6b63\u786e\uff01\u52b3\u52a8\u5e74\u9f84\u7537\u6027\u4eba\u53e3\u8fdc\u8d85\u5176\u4ed6\u7fa4\u4f53\uff0c\u662f\u52b3\u52a8\u529b\u79fb\u6c11\u6d41\u5165\u7684\u5178\u578b\u8868\u73b0\u3002\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u7b49\u56fd\u63a5\u53d7\u4e86\u5927\u91cf\u7537\u6027\u52b3\u5de5\uff0c\u5c24\u5176\u662f\u5728\u5efa\u7b51\u548c\u9152\u5e97\u884c\u4e1a\u3002",
          explainWrongEn: "Not quite. High birth rates would produce a wide base of young children. Ageing populations have wide older age groups. Emigration would reduce the working-age population, not enlarge it. The correct answer is labour immigration.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u9ad8\u51fa\u751f\u7387\u4f1a\u4f7f\u5e7c\u513f\u7fa4\u4f53\u5e95\u5e95\u6267\u5bbd\u3002\u4eba\u53e3\u8001\u9f84\u5316\u5219\u8001\u5e74\u7fa4\u4f53\u5f88\u5927\u3002\u7a0d\u6c11\u6d77\u5916\u4f1a\u51cf\u5c11\u52b3\u52a8\u5e74\u9f84\u4eba\u53e3\uff0c\u800c\u975e\u589e\u5927\u3002\u6b63\u786e\u7b54\u6848\u662f\u52b3\u52a8\u529b\u79fb\u6c11\u6d41\u5165\u3002",
        },
      ],
    },

    /* ========== Lesson 11 ========== */
    {
      num: 11,
      badge: "T",
      title: "Rainforests of Asia",
      titleZh: "\u4e9a\u6d32\u7684\u70ed\u5e26\u96e8\u6797",
      subtitle: "Asian rainforests are among the richest ecosystems on Earth \u2014 and they have a complex layered structure that supports extraordinary biodiversity.",
      subtitleZh: "\u4e9a\u6d32\u70ed\u5e26\u96e8\u6797\u662f\u5730\u7403\u4e0a\u6700\u4e30\u5bcc\u7684\u751f\u6001\u7cfb\u7edf\u4e4b\u4e00\u2014\u2014\u5b83\u4eec\u5177\u6709\u590d\u6742\u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u652f\u6491\u7740\u6781\u4e3a\u4e30\u5bcc\u7684\u751f\u7269\u591a\u6837\u6027\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain where Asian rainforests are found and describe their climate.", zh: "\u6211\u80fd\u89e3\u91ca\u4e9a\u6d32\u70ed\u5e26\u96e8\u6797\u7684\u5206\u5e03\u5730\u533a\u548c\u6c14\u5019\u7279\u5f81\u3002" },
            { en: "I can name and describe the five layers of a rainforest.", zh: "\u6211\u80fd\u8bf4\u51fa\u5e76\u63cf\u8ff0\u70ed\u5e26\u96e8\u6797\u7684\u4e94\u5c42\u7ed3\u6784\u3002" },
            { en: "I can describe one example of how a plant or animal is adapted to live in the rainforest.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e00\u79cd\u52a8\u690d\u7269\u9002\u5e94\u70ed\u5e26\u96e8\u6797\u751f\u6d3b\u7684\u4f8b\u5b50\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Tropical rainforests belong to the tropical climate zone and are found near the equator. A rainforest is a biome characterised by high precipitation (usually over 2,000 mm per year) and consistently hot temperatures throughout the year. In Asia, major rainforests are found in countries such as Indonesia, Malaysia, and the Philippines.", zh: "\u70ed\u5e26\u96e8\u6797\u5c5e\u4e8e\u70ed\u5e26\u6c14\u5019\u5e26\uff0c\u5206\u5e03\u5728\u8d64\u9053\u9644\u8fd1\u3002\u70ed\u5e26\u96e8\u6797\u662f\u4e00\u79cd\u751f\u7269\u7fa4\u843d\uff0c\u5176\u7279\u5f81\u662f\u964d\u6c34\u91cf\u9ad8\uff08\u901a\u5e38\u8d85\u8fc72000\u6beb\u7c73\uff09\uff0c\u5168\u5e74\u6c14\u6e29\u9ad8\u4e14\u7a33\u5b9a\u3002\u5728\u4e9a\u6d32\uff0c\u4e3b\u8981\u70ed\u5e26\u96e8\u6797\u5206\u5e03\u5728\u5370\u5ea6\u5c3c\u897f\u4e9a\u3001\u9a6c\u6765\u897f\u4e9a\u548c\u83f2\u5f8b\u5bbe\u7b49\u56fd\u5bb6\u3002" },
            { type: "highlight", en: "The five layers of a rainforest: (1) Emergent layer \u2014 the tallest trees, rising above the rest; (2) Canopy layer \u2014 the dense upper layer where most leaves and wildlife are found; (3) Understory / under canopy \u2014 smaller trees and large-leafed plants adapted to lower light; (4) Shrub layer \u2014 ferns, shrubs, and young plants; (5) Forest floor \u2014 very little light reaches here; decomposers break down fallen leaves.", zh: "\u70ed\u5e26\u96e8\u6797\u7684\u4e94\u4e2a\u5c42\u6b21\uff1a\uff081\uff09\u7a81\u51fa\u5c42\u2014\u2014\u6700\u9ad8\u7684\u6811\u6728\uff0c\u8fdc\u8fdc\u9ad8\u4e8e\u5176\u4f59\u6811\u6728\uff1b\uff082\uff09\u6811\u51a0\u5c42\u2014\u2014\u7b20\u5bc6\u7684\u4e0a\u90e8\u5c42\u6b21\uff0c\u5927\u591a\u6570\u53f6\u7247\u548c\u91ce\u751f\u52a8\u7269\u5728\u6b64\u5c45\u4f4f\uff1b\uff083\uff09\u6811\u51a0\u5c42\u4e0b\uff0f\u4e0b\u6728\u5c42\u2014\u2014\u9002\u5e94\u5e7d\u6697\u5149\u7ebf\u7684\u5c0f\u6811\u548c\u5bbd\u53f6\u690d\u7269\uff1b\uff084\uff09\u7070\u5c42\u2014\u2014\u8568\u7c7b\u3001\u704c\u6728\u548c\u5e7c\u82d7\uff1b\uff085\uff09\u6797\u5730\u2014\u2014\u51e0\u4e4e\u6ca1\u6709\u5149\u7ebf\u5230\u8fbe\uff0c\u5206\u89e3\u8005\u5c06\u843d\u53f6\u5206\u89e3\u3002" },
            { type: "text", en: "Plants and animals in the rainforest have developed adaptations to survive in their specific layer. For example, the orangutan \u2014 found in the forests of Borneo and Sumatra \u2014 has long arms adapted for swinging through the canopy layer, gripping branches, and finding fruit. It is critically endangered due to habitat loss from deforestation.", zh: "\u70ed\u5e26\u96e8\u6797\u4e2d\u7684\u52a8\u690d\u7269\u5df2\u5c55\u5f00\u9002\u5e94\u3002\u4e0d\u540c\u5c42\u6b21\u7684\u751f\u7269\u6709\u5404\u81ea\u7684\u751f\u5b58\u7279\u5f81\u3002\u4f8b\u5982\uff0c\u8f69\u8e22\u5308\u2014\u2014\u5206\u5e03\u5728\u5a46\u7f57\u6d32\u548c\u82cf\u95e8\u7b54\u814a\u7684\u68ee\u6797\u4e2d\u2014\u2014\u62e5\u6709\u7279\u522b\u957f\u7684\u624b\u81c2\uff0c\u9002\u5e94\u5728\u6811\u51a0\u5c42\u4e2d\u6447\u8361\u3001\u6293\u4e0e\u6811\u679d\u548c\u5bfb\u627e\u679c\u5b9e\u3002\u7531\u4e8e\u68ee\u6797\u7834\u574f\u5bfc\u81f4\u6805\u606f\u5730\u4e27\u5931\uff0c\u8f69\u8e22\u5156\u76ee\u524d\u5904\u4e8e\u6781\u5ea6\u6fee\u5371\u72b6\u6001\u3002" },
            { type: "example", en: "Source reliability: when researching rainforest species and adaptations, it is important to evaluate your sources. A peer-reviewed scientific journal or an established wildlife organisation (e.g. WWF) is generally more reliable than a personal blog. Ask: Who wrote it? When was it published? Is it based on evidence?", zh: "\u8d44\u6599\u53ef\u9760\u6027\uff1a\u5728\u7814\u7a76\u96e8\u6797\u7269\u79cd\u548c\u9002\u5e94\u6027\u65f6\uff0c\u9700\u8981\u8bc4\u4f30\u4fe1\u606f\u6765\u6e90\u7684\u53ef\u9760\u6027\u3002\u7ecf\u540c\u884c\u8bc4\u5ba1\u7684\u79d1\u5b66\u671f\u520a\u6216\u77e5\u540d\u91ce\u751f\u52a8\u7269\u673a\u6784\uff08\u5982\u4e16\u754c\u81ea\u7136\u57fa\u91d1\uff09\u901a\u5e38\u6bd4\u4e2a\u4eba\u535a\u5ba2\u66f4\u53ef\u9760\u3002\u53ef\u95ee\u4e09\u4e2a\u95ee\u9898\uff1a\u8c01\u5199\u7684\uff1f\u4f55\u65f6\u53d1\u5e03\u7684\uff1f\u662f\u5426\u57fa\u4e8e\u8bc1\u636e\uff1f" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Tropical rainforest", zh: "\u70ed\u5e26\u96e8\u6797", defEn: "A biome found near the equator with high rainfall and consistently high temperatures throughout the year.", defZh: "\u5206\u5e03\u5728\u8d64\u9053\u9644\u8fd1\u3001\u5168\u5e74\u964d\u6c34\u91cf\u4e30\u5bcc\u4e14\u6c14\u6e29\u59cb\u7ec8\u8f83\u9ad8\u7684\u751f\u7269\u7fa4\u843d\u3002" },
            { en: "Canopy layer", zh: "\u6811\u51a0\u5c42", defEn: "The dense upper layer of a rainforest where most trees\u2019 leaves and much of the wildlife are found.", defZh: "\u70ed\u5e26\u96e8\u6797\u7b20\u5bc6\u7684\u4e0a\u90e8\u5c42\u6b21\uff0c\u5927\u591a\u6570\u6811\u6728\u7684\u53f6\u7247\u548c\u5927\u591a\u6570\u91ce\u751f\u52a8\u7269\u5c45\u4e8e\u6b64\u5904\u3002" },
            { en: "Adaptation", zh: "\u9002\u5e94\u6027", defEn: "A feature of a plant or animal that helps it survive in its environment.", defZh: "\u52a8\u690d\u7269\u5e2e\u52a9\u5176\u5728\u73af\u5883\u4e2d\u751f\u5b58\u7684\u7279\u5f81\u3002" },
            { en: "Decomposer", zh: "\u5206\u89e3\u8005", defEn: "An organism such as a fungus or bacterium that breaks down dead organic matter, recycling nutrients.", defZh: "\u771f\u83cc\u6216\u7ec6\u83cc\u7b49\u5c06\u6b7b\u4ea1\u6709\u673a\u7269\u5206\u89e3\u5e76\u5faa\u73af\u5229\u7528\u5176\u4e2d\u517b\u5206\u7684\u751f\u7269\u3002" },
          ],
        },
        { type: "image", caption: "Tropical rainforest in Borneo \u2014 showing the dense layered canopy that supports extraordinary biodiversity in Asia\u2019s largest rainforests.", captionZh: "\u5a46\u7f57\u6d32\u70ed\u5e26\u96e8\u6797\u2014\u2014\u5c55\u73b0\u4e9a\u6d32\u6700\u5927\u96e8\u6797\u4e2d\u652f\u6491\u4e30\u5bcc\u751f\u7269\u591a\u6837\u6027\u7684\u7b20\u5bc6\u5c42\u6b21\u6811\u51a0\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/BorneoRainforest_DSC_9267.JPG", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Fact", labelZh: "\u5730\u7406\u5b66\u4e8b\u5b9e", en: "Tropical rainforests are found in the tropical climate zone near the equator. They receive over 2,000 mm of rainfall per year and have high temperatures throughout the year, making them the most biodiverse biomes on Earth.", zh: "\u70ed\u5e26\u96e8\u6797\u5206\u5e03\u5728\u8d64\u9053\u9644\u8fd1\u7684\u70ed\u5e26\u6c14\u5019\u5e26\u3002\u5b83\u4eec\u6bcf\u5e74\u964d\u6c34\u91cf\u8d85\u8fc72000\u6beb\u7c73\uff0c\u5168\u5e74\u6c14\u6e29\u9ad8\uff0c\u4f7f\u5176\u6210\u4e3a\u5730\u7403\u4e0a\u751f\u7269\u591a\u6837\u6027\u6700\u9ad8\u7684\u751f\u7269\u7fa4\u843d\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Name the five layers of a tropical rainforest and briefly describe what is found in each layer.", qZh: "\u8bf4\u51fa\u70ed\u5e26\u96e8\u6797\u7684\u4e94\u4e2a\u5c42\u6b21\uff0c\u5e76\u7b80\u8ff0\u6bcf\u5c42\u7684\u4e3b\u8981\u7279\u5f81\u3002", aEn: "Emergent: tallest trees, above the canopy; Canopy: dense, most wildlife and leaves; Understory: smaller trees, large leaves adapted to low light; Shrub layer: ferns and young plants; Forest floor: very dark, decomposers break down dead matter.", aZh: "\u7a81\u51fa\u5c42\uff1a\u6700\u9ad8\u7684\u6811\u6728\uff0c\u9ad8\u4e8e\u6811\u51a0\u5c42\uff1b\u6811\u51a0\u5c42\uff1a\u7b20\u5bc6\uff0c\u5927\u591a\u6570\u91ce\u751f\u52a8\u7269\u548c\u53f6\u7247\uff1b\u4e0b\u6728\u5c42\uff1a\u5c0f\u6811\uff0c\u5bbd\u53f6\u9002\u5e94\u5e7d\u6697\u5149\u7ebf\uff1b\u7070\u5c42\uff1a\u8568\u7c7b\u548c\u5e7c\u82d7\uff1b\u6797\u5730\uff1a\u975e\u5e38\u6697\u6697\uff0c\u5206\u89e3\u8005\u5c06\u6b7b\u4ea1\u7269\u8d28\u5206\u89e3\u3002" },
            { qEn: "Describe one adaptation of the orangutan that helps it survive in the rainforest canopy.", qZh: "\u63cf\u8ff0\u8f69\u8e22\u5156\u7684\u4e00\u79cd\u9002\u5e94\u6027\u7279\u5f81\uff0c\u8bf4\u660e\u5b83\u5982\u4f55\u5e2e\u52a9\u5b83\u5728\u96e8\u6797\u6811\u51a0\u5c42\u751f\u5b58\u3002", aEn: "The orangutan has very long arms, well adapted for swinging between branches in the canopy layer to travel and find fruit. Its strong grip allows it to hold onto branches while feeding, reducing the need to descend to the forest floor where predators may be present.", aZh: "\u8f69\u8e22\u5156\u6709\u975e\u5e38\u957f\u7684\u624b\u81c2\uff0c\u5341\u5206\u9002\u5e94\u5728\u6811\u51a0\u5c42\u4e2d\u6447\u8361\u79fb\u52a8\u548c\u5bfb\u627e\u679c\u5b9e\u3002\u5176\u5f3a\u52b2\u7684\u6293\u529b\u4f7f\u5b83\u80fd\u5728\u89c5\u98df\u65f6\u7d27\u63e1\u6811\u679d\uff0c\u51cf\u5c11\u4e0b\u964d\u6797\u5730\u7684\u9700\u8981\uff0c\u800c\u6797\u5730\u53ef\u80fd\u5b58\u5728\u5929\u654c\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which layer of a tropical rainforest receives the least sunlight?",
          qZh: "\u70ed\u5e26\u96e8\u6797\u54ea\u4e2a\u5c42\u6b21\u80fd\u83b7\u5f97\u7684\u9633\u5149\u6700\u5c11\uff1f",
          opts: [
            { en: "Emergent layer", zh: "\u7a81\u51fa\u5c42" },
            { en: "Canopy layer", zh: "\u6811\u51a0\u5c42" },
            { en: "Shrub layer", zh: "\u7070\u5c42" },
            { en: "Forest floor", zh: "\u6797\u5730" },
          ],
          correct: 3,
          explainCorrectEn: "Correct! The forest floor receives the least sunlight because the canopy and other layers above it block most of the light. This is why plants here have special adaptations to grow in very low-light conditions.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6797\u5730\u83b7\u5f97\u9633\u5149\u6700\u5c11\uff0c\u56e0\u4e3a\u4e0a\u65b9\u7684\u6811\u51a0\u5c42\u7b49\u5c42\u6b21\u62e6\u622a\u4e86\u5927\u90e8\u5206\u9633\u5149\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6797\u5730\u690d\u7269\u5177\u6709\u7279\u6b8a\u9002\u5e94\u6027\u4ee5\u5728\u6781\u5ea6\u4f4e\u5149\u7684\u73af\u5883\u4e2d\u751f\u5b58\u3002",
          explainWrongEn: "Not quite. The emergent layer is at the top and gets the most sun. The canopy and shrub layers are in between. The forest floor is at the bottom and receives the least light. The correct answer is the forest floor.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7a81\u51fa\u5c42\u5728\u6700\u9876\u90e8\uff0c\u83b7\u5f97\u9633\u5149\u6700\u591a\u3002\u6811\u51a0\u5c42\u548c\u7070\u5c42\u5728\u4e2d\u95f4\u3002\u6797\u5730\u5728\u6700\u5e95\u90e8\uff0c\u83b7\u5f97\u7684\u5149\u7ebf\u6700\u5c11\u3002\u6b63\u786e\u7b54\u6848\u662f\u6797\u5730\u3002",
        },
      ],
    },

    /* ========== Lesson 12 ========== */
    {
      num: 12,
      badge: "T",
      title: "How do rainforests benefit Asia?",
      titleZh: "\u70ed\u5e26\u96e8\u6797\u5982\u4f55\u4f7f\u4e9a\u6d32\u53d7\u76ca\uff1f",
      subtitle: "Rainforests are not just ecosystems \u2014 they provide economic, social, and environmental benefits that must be carefully weighed against each other.",
      subtitleZh: "\u70ed\u5e26\u96e8\u6797\u4e0d\u4ec5\u4ec5\u662f\u751f\u6001\u7cfb\u7edf\u2014\u2014\u5b83\u4eec\u63d0\u4f9b\u7684\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6548\u76ca\u9700\u8981\u8c28\u614e\u6743\u8861\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe the economic, social, and environmental benefits that rainforests provide.", zh: "\u6211\u80fd\u63cf\u8ff0\u70ed\u5e26\u96e8\u6797\u63d0\u4f9b\u7684\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6548\u76ca\u3002" },
            { en: "I can evaluate which benefits matter most to countries like Malaysia and Indonesia.", zh: "\u6211\u80fd\u8bc4\u4f30\u5bf9\u9a6c\u6765\u897f\u4e9a\u548c\u5370\u5ea6\u5c3c\u897f\u4e9a\u7b49\u56fd\u5bb6\u800c\u8a00\uff0c\u54ea\u4e9b\u6548\u76ca\u6700\u4e3a\u91cd\u8981\u3002" },
            { en: "I can write a balanced evaluation of rainforest benefits using geographical evidence.", zh: "\u6211\u80fd\u8fd0\u7528\u5730\u7406\u5b66\u8bc1\u636e\u64b0\u5199\u4e00\u7bc7\u5173\u4e8e\u70ed\u5e26\u96e8\u6797\u6548\u76ca\u7684\u5e73\u8861\u8bc4\u4f30\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Asian rainforests \u2014 found especially in Indonesia, Malaysia, and the Philippines \u2014 provide many kinds of benefit. Economic benefits include raw materials such as wood and hardwood for construction and furniture; fuel; fruits, nuts, fish, and meat for food; and tourism. Social benefits include medicines derived from rainforest plants, and livelihoods for local communities. Environmental benefits include very high biodiversity, and the role of trees as carbon stores that slow climate change.", zh: "\u4e9a\u6d32\u70ed\u5e27\u96e8\u6797\u2014\u2014\u5c24\u5176\u5206\u5e03\u5728\u5370\u5ea6\u5c3c\u897f\u4e9a\u3001\u9a6c\u6765\u897f\u4e9a\u548c\u83f2\u5f8b\u5bbe\u2014\u2014\u63d0\u4f9b\u591a\u79cd\u6548\u76ca\u3002\u7ecf\u6d4e\u6548\u76ca\u5305\u62ec\u6728\u6750\u548c\u786c\u6728\u7b49\u539f\u6750\u6599\uff0c\u7528\u4e8e\u5efa\u7b51\u548c\u5bb6\u5177\u5236\u9020\uff1b\u71c3\u6599\uff1b\u6c34\u679c\u3001\u575a\u679c\u3001\u9c7c\u7c7b\u548c\u8089\u7c7b\u7b49\u98df\u7269\uff1b\u4ee5\u53ca\u65c5\u6e38\u4e1a\u3002\u793e\u4f1a\u6548\u76ca\u5305\u62ec\u6e90\u81ea\u96e8\u6797\u690d\u7269\u7684\u836f\u7269\uff0c\u4ee5\u53ca\u5c45\u6c11\u793e\u533a\u7684\u751f\u8ba1\u6765\u6e90\u3002\u73af\u5883\u6548\u76ca\u5305\u62ec\u6781\u9ad8\u7684\u751f\u7269\u591a\u6837\u6027\uff0c\u4ee5\u53ca\u6811\u6728\u4f5c\u4e3a\u78b3\u8d50\u5b58\u5e93\u3001\u6162\u6709\u6c14\u5019\u53d8\u5316\u7684\u4f5c\u7528\u3002" },
            { type: "highlight", en: "Key rainforest benefits: raw materials (wood, hardwood); fuel; furniture; fruits, nuts, fish, meat; rainforest plants used in medicines; very high biodiversity; trees acting as carbon stores; rainforest tourism creating local jobs.", zh: "\u70ed\u5e26\u96e8\u6797\u7684\u4e3b\u8981\u6548\u76ca\uff1a\u539f\u6750\u6599\uff08\u6728\u6750\u3001\u786e\u6728\uff09\uff1b\u71c3\u6599\uff1b\u5bb6\u5177\uff1b\u6c34\u679c\u3001\u575a\u679c\u3001\u9c7c\u7c7b\u3001\u8089\u7c7b\uff1b\u96e8\u6797\u690d\u7269\u7528\u4e8e\u5236\u836f\uff1b\u6781\u9ad8\u7684\u751f\u7269\u591a\u6837\u6027\uff1b\u6811\u6728\u4f5c\u4e3a\u78b3\u8d50\u5b58\u5e93\uff1b\u96e8\u6797\u65c5\u6e38\u4e1a\u521b\u9020\u5c45\u6c11\u5c31\u4e1a\u673a\u4f1a\u3002" },
            { type: "text", en: "Countries like Malaysia and Indonesia have to weigh these benefits carefully. For example, Indonesia has large areas of rainforest that generate income through timber, palm oil, and tourism, but deforestation has also caused environmental damage and loss of biodiversity. Malaysia has taken steps to protect some forested areas while still allowing economic development. The challenge is to balance economic, social, and environmental interests.", zh: "\u9a6c\u6765\u897f\u4e9a\u548c\u5370\u5ea6\u5c3c\u897f\u4e9a\u7b49\u56fd\u5bb6\u5fc5\u987b\u8c28\u614e\u6743\u8861\u8fd9\u4e9b\u6548\u76ca\u3002\u4f8b\u5982\uff0c\u5370\u5ea6\u5c3c\u897f\u4e9a\u62e5\u6709\u5e7f\u9614\u7684\u70ed\u5e26\u96e8\u6797\uff0c\u901a\u8fc7\u6728\u6750\u3001\u68d5\u6988\u6cb9\u548c\u65c5\u6e38\u4e1a\u83b7\u5f97\u6536\u5165\uff0c\u4f46\u68ee\u6797\u7834\u574f\u4e5f\u9020\u6210\u4e86\u73af\u5883\u7834\u574f\u548c\u751f\u7269\u591a\u6837\u6027\u4e27\u5931\u3002\u9a6c\u6765\u897f\u4e9a\u5df2\u91c7\u53d6\u63aa\u65bd\u4fdd\u62a4\u90e8\u5206\u68ee\u6797\u5730\u533a\uff0c\u540c\u65f6\u5141\u8bb8\u7ecf\u6d4e\u53d1\u5c55\u3002\u6311\u6218\u5728\u4e8e\u5982\u4f55\u5e73\u8861\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u5229\u76ca\u3002" },
            { type: "example", en: "Evaluation structure: when asked to evaluate rainforest benefits, organise your answer into three groups \u2014 economic, social, and environmental. For each, give a specific example. Then conclude by saying which type of benefit you think is most important and why. This makes your answer analytical rather than just a list.", zh: "\u8bc4\u4f30\u7ed3\u6784\uff1a\u88ab\u8981\u6c42\u8bc4\u4f30\u70ed\u5e26\u96e8\u6797\u7684\u6548\u76ca\u65f6\uff0c\u5c06\u7b54\u6848\u5206\u4e3a\u4e09\u7c7b\u2014\u2014\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u3002\u6bcf\u7c7b\u5404\u4e3e\u4e00\u4e2a\u5177\u4f53\u4f8b\u5b50\uff0c\u7136\u540e\u7ed3\u5c3e\u65f6\u8bf4\u660e\u4f60\u8ba4\u4e3a\u54ea\u7c7b\u6548\u76ca\u6700\u91cd\u8981\u53ca\u5176\u539f\u56e0\u3002\u8fd9\u6837\u7684\u7b54\u6848\u662f\u5206\u6790\u6027\u7684\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5217\u4e3e\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Biodiversity", zh: "\u751f\u7269\u591a\u6837\u6027", defEn: "The variety of plant and animal life in a particular area or ecosystem.", defZh: "\u7279\u5b9a\u5730\u533a\u6216\u751f\u6001\u7cfb\u7edf\u4e2d\u52a8\u690d\u7269\u751f\u547d\u7684\u591a\u6837\u6027\u3002" },
            { en: "Carbon store", zh: "\u78b3\u8d54\u5b58\u5e93", defEn: "A natural system that absorbs and holds carbon dioxide, helping to slow climate change.", defZh: "\u5438\u6536\u5e76\u5b58\u5050\u4e8c\u6c27\u5316\u78b3\u7684\u81ea\u7136\u7cfb\u7edf\uff0c\u6709\u52a9\u4e8e\u6162\u6709\u6c14\u5019\u53d8\u5316\u3002" },
            { en: "Deforestation", zh: "\u68ee\u6797\u7834\u574f", defEn: "The large-scale clearing of trees and forest, often for farming, logging, or development.", defZh: "\u5927\u89c4\u6a21\u6e05\u9664\u6811\u6728\u548c\u68ee\u6797\uff0c\u901a\u5e38\u7528\u4e8e\u519c\u4e1a\u3001\u4f10\u6728\u6216\u5f00\u53d1\u5efa\u8bbe\u3002" },
            { en: "Ecotourism", zh: "\u751f\u6001\u65c5\u6e38", defEn: "Tourism focused on natural environments that aims to be sustainable and benefit local communities.", defZh: "\u4ee5\u81ea\u7136\u73af\u5883\u4e3a\u91cd\u70b9\u3001\u65e8\u5728\u53ef\u6301\u7eed\u5e76\u60e0\u53ca\u5f53\u5730\u793e\u533a\u7684\u65c5\u6e38\u3002" },
          ],
        },
        { type: "image", caption: "Rainforest in Borneo \u2014 Indonesia and Malaysia both have major rainforest areas on this island, providing economic, social, and environmental benefits.", captionZh: "\u5a46\u7f57\u6d32\u70ed\u5e27\u96e8\u6797\u2014\u2014\u5370\u5ea6\u5c3c\u897f\u4e9a\u548c\u9a6c\u6765\u897f\u4e9a\u5728\u8fd9\u4e2a\u5c9b\u5c7f\u4e0a\u90fd\u6709\u91cd\u8981\u7684\u96e8\u6797\u5730\u533a\uff0c\u63d0\u4f9b\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6548\u76ca\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borneo_rainforest.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Evaluation", labelZh: "\u5730\u7406\u5b66\u8bc4\u4f30", en: "Rainforests provide economic benefits (timber, palm oil, tourism), social benefits (medicines, livelihoods), and environmental benefits (biodiversity, carbon storage). Countries like Indonesia and Malaysia must weigh all three to make sustainable decisions.", zh: "\u70ed\u5e27\u96e8\u6797\u63d0\u4f9b\u7ecf\u6d4e\u6548\u76ca\uff08\u6728\u6750\u3001\u68d5\u6988\u6cb9\u3001\u65c5\u6e38\uff09\u3001\u793e\u4f1a\u6548\u76ca\uff08\u836f\u7269\u3001\u751f\u8ba1\u6765\u6e90\uff09\u548c\u73af\u5883\u6548\u76ca\uff08\u751f\u7269\u591a\u6837\u6027\u3001\u78b3\u8d54\u5b58\u50a8\uff09\u3002\u5370\u5ea6\u5c3c\u897f\u4e9a\u548c\u9a6c\u6765\u897f\u4e9a\u7b49\u56fd\u5fc5\u987b\u6743\u8861\u4e09\u8005\uff0c\u4e5f\u5f53\u505a\u51fa\u53ef\u6301\u7eed\u7684\u51b3\u7b56\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Give one economic, one social, and one environmental benefit of Asian rainforests.", qZh: "\u5404\u4e3e\u4e00\u4e2a\u4e9a\u6d32\u70ed\u5e24\u96e8\u6797\u7684\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6548\u76ca\u3002", aEn: "Economic: timber and hardwood provide income for logging companies and governments. Social: many plants found only in rainforests are used to make medicines, benefiting health. Environmental: trees act as carbon stores, absorbing CO2 and helping slow climate change.", aZh: "\u7ecf\u6d4e\uff1a\u6728\u6750\u548c\u786c\u6728\u4e3a\u4f10\u6728\u516c\u53f8\u548c\u653f\u5e9c\u5e26\u6765\u6536\u5165\u3002\u793e\u4f1a\uff1a\u5f88\u591a\u4ec5\u5728\u70ed\u5e27\u96e8\u6797\u4e2d\u53d1\u73b0\u7684\u690d\u7269\u88ab\u7528\u4e8e\u5236\u836f\uff0c\u6709\u76ca\u5065\u5eb7\u3002\u73af\u5883\uff1a\u6811\u6728\u4f5c\u4e3a\u78b3\u8d54\u5b58\u5e93\uff0c\u5438\u6536\u4e8c\u6c27\u5316\u78b3\uff0c\u6709\u52a9\u4e8e\u6162\u6709\u6c14\u5019\u53d8\u5316\u3002" },
            { qEn: "A student says: \u2018Economic benefits of rainforests are always more important than environmental ones.\u2019 Do you agree? Explain using evidence.", qZh: "\u4e00\u4e2a\u540c\u5b66\u8bf4\uff1a\u201c\u70ed\u5e24\u96e8\u6797\u7684\u7ecf\u6d4e\u6548\u76ca\u603b\u662f\u6bd4\u73af\u5883\u6548\u76ca\u66f4\u91cd\u8981\u3002\u201d\u4f60\u540c\u610f\u5417\uff1f\u7528\u8bc1\u636e\u52a0\u4ee5\u89e3\u91ca\u3002", aEn: "I disagree. Environmental benefits such as carbon storage are globally important because they slow climate change, which affects every country on Earth. Biodiversity also protects future resources \u2014 species lost to deforestation cannot be recovered. Economic benefits from logging or farming may provide short-term income but can destroy long-term environmental and social value. A balance is needed.", aZh: "\u6211\u4e0d\u540c\u610f\u3002\u78b3\u8d54\u5b58\u50a8\u7b49\u73af\u5883\u6548\u76ca\u5728\u5168\u7403\u8303\u56f4\u5185\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u6162\u6709\u6c14\u5019\u53d8\u5316\uff0c\u800c\u6c14\u5019\u53d8\u5316\u5f71\u54cd\u5730\u7403\u4e0a\u6bcf\u4e2a\u56fd\u5bb6\u3002\u751f\u7269\u591a\u6837\u6027\u4e5f\u4fdd\u62a4\u672a\u6765\u7684\u8d44\u6e90\u2014\u2014\u56e0\u68ee\u6797\u7834\u574f\u800c\u706d\u7edd\u7684\u7269\u79cd\u65e0\u6cd5\u590d\u539f\u3002\u4f10\u6728\u6216\u519c\u4e1a\u5e26\u6765\u7684\u7ecf\u6d4e\u6548\u76ca\u53ef\u80fd\u63d0\u4f9b\u77ed\u671f\u6536\u5165\uff0c\u4f46\u53ef\u80fd\u6bc1\u574f\u957f\u671f\u7684\u73af\u5883\u548c\u793e\u4f1a\u4ef7\u5024\u3002\u9700\u8981\u5bfb\u6c42\u5e73\u8861\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is an ENVIRONMENTAL benefit of rainforests?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u70ed\u5e27\u96e8\u6797\u7684\u73af\u5883\u6548\u76ca\uff1f",
          opts: [
            { en: "Timber for furniture and construction", zh: "\u7528\u4e8e\u5bb6\u5177\u548c\u5efa\u7b51\u7684\u6728\u6750" },
            { en: "Medicines derived from rainforest plants", zh: "\u6e90\u81ea\u96e8\u6797\u690d\u7269\u7684\u836f\u7269" },
            { en: "Trees acting as carbon stores that slow climate change", zh: "\u6811\u6728\u4f5c\u4e3a\u78b3\u8d54\u5b58\u5e93\uff0c\u6162\u6709\u6c14\u5019\u53d8\u5316" },
            { en: "Tourism employment for local people", zh: "\u65c5\u6e38\u4e1a\u4e3a\u5f53\u5730\u5c45\u6c11\u63d0\u4f9b\u7684\u5c31\u4e1a\u673a\u4f1a" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Trees absorbing and storing carbon dioxide is an environmental benefit because it helps reduce the greenhouse effect and slow global climate change.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6811\u6728\u5438\u6536\u5e76\u5b58\u5050\u4e8c\u6c27\u5316\u78b3\u662f\u4e00\u79cd\u73af\u5883\u6548\u76ca\uff0c\u56e0\u4e3a\u5b83\u6709\u52a9\u4e8e\u51cf\u5c11\u6e29\u5ba4\u6c14\u4f53\u6548\u5e94\u5e76\u6162\u6709\u5168\u7403\u6c14\u5019\u53d8\u5316\u3002",
          explainWrongEn: "Not quite. Timber is an economic benefit. Medicines are a social benefit. Tourism employment is also a social/economic benefit. The environmental benefit is carbon storage. The correct answer is trees as carbon stores.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6728\u6750\u662f\u7ecf\u6d4e\u6548\u76ca\u3002\u836f\u7269\u662f\u793e\u4f1a\u6548\u76ca\u3002\u65c5\u6e38\u5c31\u4e1a\u4e5f\u662f\u793e\u4f1a\uff0f\u7ecf\u6d4e\u6548\u76ca\u3002\u73af\u5883\u6548\u76ca\u662f\u78b3\u8d54\u5b58\u5e93\u3002\u6b63\u786e\u7b54\u6848\u662f\u6811\u6728\u4f5c\u4e3a\u78b3\u8d54\u5b58\u5e93\u3002",
        },
      ],
    },

  ],
};

export default asia;
