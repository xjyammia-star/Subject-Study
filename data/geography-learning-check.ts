import { Topic } from "./types";

export const geographyLearningCheck: Topic = {
  slug: "geography-learning-check",
  name: "Geography \u2014 Learning Check",
  nameZh: "\u5730\u7406\u2014\u2014\u5355\u5143\u6d4b\u8bc4",
  subject: "Geography",
  subjectZh: "\u5730\u7406",
  year: "Year 8",
  lessons: [

    /* ========== LC1: Asia ========== */
    {
      num: 1,
      badge: "T",
      title: "Why is Asia the World\u2019s Largest Continent? \u2014 Review",
      titleZh: "\u4e9a\u6d32\u4e3a\u4ec0\u4e48\u662f\u4e16\u754c\u6700\u5927\u7684\u5927\u6d32\uff1f\u2014\u2014\u590d\u4e60",
      subtitle: "A review of Asia\u2019s regions, population density, development, tectonic processes, deserts, and rainforests.",
      subtitleZh: "\u590d\u4e60\u4e9a\u6d32\u7684\u5730\u533a\u3001\u4eba\u53e3\u5bc6\u5ea6\u3001\u53d1\u5c55\u6c34\u5e73\u3001\u677f\u5757\u6784\u9020\u8fc7\u7a0b\u3001\u6c99\u6f20\u4e0e\u96e8\u6797\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe key facts about Asia\u2019s size, population, and physical features.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e9a\u6d32\u5927\u5c0f\u3001\u4eba\u53e3\u548c\u81ea\u7136\u5730\u7406\u7279\u5f81\u7684\u5173\u952e\u4e8b\u5b9e\u3002" },
            { en: "I can explain how physical and human factors shape population density and development across Asia.", zh: "\u6211\u80fd\u89e3\u91ca\u81ea\u7136\u56e0\u7d20\u548c\u4eba\u6587\u56e0\u7d20\u5982\u4f55\u5f71\u54cd\u4e9a\u6d32\u5404\u5730\u7684\u4eba\u53e3\u5bc6\u5ea6\u548c\u53d1\u5c55\u6c34\u5e73\u3002" },
            { en: "I can evaluate key concepts including tectonic processes, desert biomes, and rainforest benefits.", zh: "\u6211\u80fd\u8bc4\u4f30\u677f\u5757\u6784\u9020\u8fc7\u7a0b\u3001\u6c99\u6f20\u751f\u7269\u7fa4\u843d\u548c\u96e8\u6797\u6548\u76ca\u7b49\u5173\u952e\u6982\u5ff5\u3002" },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Asia contains 49 countries according to the UN and is home to over 4.7 billion people. Give two pieces of evidence to show that Asia is a \u2018continent of contrasts\u2019.",
              qZh: "\u6839\u636e\u8054\u5408\u56fd\u7684\u6570\u636e\uff0c\u4e9a\u6d32\u5171\u670949\u4e2a\u56fd\u5bb6\uff0c\u62e5\u670947\u4ebf\u591a\u4eba\u53e3\u3002\u5217\u4e3e\u4e24\u4e2a\u8bc1\u636e\uff0c\u8bf4\u660e\u4e9a\u6d32\u662f\u4e00\u4e2a\u201c\u5145\u6ee1\u5f3a\u70c8\u5bf9\u6bd4\u7684\u5927\u6d32\u201d\u3002",
              aEn: "Any two valid contrasts, for example: Asia contains the world\u2019s highest mountain (Mount Everest at 8,849 m) but also one of its largest deserts (the Gobi). It also includes some of the world\u2019s wealthiest countries (Singapore, Qatar) alongside some of its poorest (Afghanistan, Yemen), showing sharp contrasts in both physical and human geography.",
              aZh: "\u4efb\u610f\u4e24\u4e2a\u6709\u6548\u5bf9\u6bd4\uff0c\u4f8b\u5982\uff1a\u4e9a\u6d32\u6709\u4e16\u754c\u6700\u9ad8\u5c71\u5cf0\uff08\u73e0\u7a46\u6717\u739b\u5cf0\uff0c\u6d778849\u7c73\uff09\uff0c\u4e5f\u6709\u6700\u5927\u6c99\u6f20\u4e4b\u4e00\uff08\u6208\u58c1\u6c99\u6f20\uff09\u3002\u5b83\u540c\u65f6\u62e5\u6709\u4e16\u754c\u4e0a\u6700\u5bcc\u88d5\u7684\u56fd\u5bb6\uff08\u65b0\u52a0\u5761\u3001\u5361\u5854\u5c14\uff09\u548c\u6700\u8d2b\u7a77\u7684\u56fd\u5bb6\uff08\u963f\u5bcc\u6c57\u3001\u4e5f\u95e8\uff09\uff0c\u5c55\u793a\u4e86\u81ea\u7136\u5730\u7406\u548c\u4eba\u6587\u5730\u7406\u4e0a\u7684\u9c9c\u660e\u5bf9\u6bd4\u3002",
            },
            {
              qEn: "A High Income Country (HIC) has a GNI per capita of at least $12,746. A Low Income Country (LIC) has a GNI per capita below $1,045. Explain two reasons why development levels vary so greatly across Asia.",
              qZh: "\u9ad8\u6536\u5165\u56fd\uff08HIC\uff09\u7684\u4eba\u5747GNI\u81f3\u5c1112,746\u7f8e\u5143\u3002\u4f4e\u6536\u5165\u56fd\uff08LIC\uff09\u7684\u4eba\u5747GNI\u4f4e\u4e8e1,045\u7f8e\u5143\u3002\u89e3\u91ca\u4e9a\u6d32\u5404\u5730\u53d1\u5c55\u6c34\u5e73\u5dee\u5f02\u60a6\u5982\u6b64\u5de8\u5927\u7684\u4e24\u4e2a\u539f\u56e0\u3002",
              aEn: "Reasons can include: natural resources \u2014 countries like Qatar and the UAE have large oil reserves that generate wealth rapidly; political factors \u2014 Cambodia\u2019s history of conflict slowed its development for decades; physical factors \u2014 Mongolia\u2019s dry desert conditions make farming and industry harder; or natural hazards \u2014 which can both limit development and create opportunity (e.g. fertile volcanic soils in Indonesia).",
              aZh: "\u539f\u56e0\u53ef\u5305\u62ec\uff1a\u81ea\u7136\u8d44\u6e90\u2014\u2014\u5361\u5854\u5c14\u548c\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\u7b49\u62e5\u6709\u5927\u91cf\u77f3\u6cb9\u50a8\u91cf\uff0c\u80fd\u5feb\u901f\u521b\u9020\u8d22\u5bcc\uff1b\u653f\u6cbb\u56e0\u7d20\u2014\u2014\u67ec\u57d4\u5be8\u7684\u51b2\u7a81\u5386\u53f2\u4f7f\u5176\u53d1\u5c55\u8fdf\u6eadn\u5e74\uff1b\u81ea\u7136\u56e0\u7d20\u2014\u2014\u8499\u53e4\u5e72\u65f1\u7684\u6c99\u6f20\u5730\u5f62\u4f7f\u519c\u4e1a\u548c\u5de5\u4e1a\u53d1\u5c55\u66f4\u52a0\u56f0\u96be\uff1b\u6216\u81ea\u7136\u707e\u5bb3\u2014\u2014\u53ef\u80fd\u5438\u5f15\u4e5f\u53ef\u80fd\u963b\u788d\u53d1\u5c55\uff08\u5982\u5370\u5ea6\u5c3c\u897f\u4e9a\u80a5\u6c83\u7684\u706b\u5c71\u571f\u58e4\uff09\u3002",
            },
            {
              qEn: "The Himalayas formed where the Indian plate collided with the Eurasian plate. Japan formed at a destructive boundary where the Pacific plate is subducted beneath the Eurasian plate. Give one similarity and one difference between how these two physical features affect population distribution.",
              qZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5728\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u78b0\u649e\u5904\u5f62\u6210\u3002\u65e5\u672c\u5728\u6d88\u7075\u578b\u8fb9\u754c\u5904\u5f62\u6210\uff0c\u592a\u5e73\u6d0b\u677f\u5757\u5728\u4e9a\u6b27\u677f\u5757\u4e0b\u65b9\u4e0b\u6c89\u3002\u8bf4\u51fa\u8fd9\u4e24\u4e2a\u5730\u7406\u7279\u5f81\u5bf9\u4eba\u53e3\u5206\u5e03\u5f71\u54cd\u7684\u4e00\u4e2a\u76f8\u540c\u70b9\u548c\u4e00\u4e2a\u4e0d\u540c\u70b9\u3002",
              aEn: "Similarity: in both places, high-relief mountainous terrain tends to have low population density because steep slopes are hard to build on and high altitudes mean colder climates. Difference: the Himalayas are fold mountains on a continent shared by five countries (India, Pakistan, Nepal, Bhutan, China); Japan is a volcanic island arc where major cities like Tokyo and Osaka are built on flat coastal plains despite the volcanic interior.",
              aZh: "\u76f8\u540c\u70b9\uff1a\u4e24\u5730\u5747\u6709\u9ad8\u8d77\u4f0f\u7684\u5c71\u5c71\u5730\u5f62\uff0c\u4eba\u53e3\u5bc6\u5ea6\u5f80\u5f80\u8f83\u4f4e\uff0c\u56e0\u4e3a\u9655\u5cfb\u5c71\u5761\u96be\u4ee5\u5efa\u9020\u4e14\u9ad8\u6d77\u62d4\u610f\u5473\u7740\u6c14\u5019\u66f4\u5bd2\u51b7\u3002\u4e0d\u540c\u70b9\uff1a\u559c\u9a6c\u62c9\u96c5\u662f\u7531\u5370\u5ea6\u3001\u5df4\u57fa\u65af\u5766\u3001\u5c3c\u6cca\u5c14\u3001\u4e0d\u4e39\u548c\u4e2d\u56fd\u4e94\u56fd\u5171\u6709\u7684\u5927\u9646\u8944\u66f2\u5c71\uff1b\u65e5\u672c\u662f\u706b\u5c71\u5c9b\u5f27\uff0c\u5c06\u4e1c\u4eac\u3001\u5927\u962a\u7b49\u5927\u57ce\u5e02\u5efa\u5728\u5e73\u5766\u6cbf\u6d77\u5730\u5e26\uff0c\u5185\u9646\u5219\u662f\u706b\u5c71\u5730\u5e26\u3002",
            },
            {
              qEn: "A desert is a biome that receives less than 250 mm of precipitation per year. Rainforests provide economic, social, and environmental benefits. Evaluate which type of benefit from rainforests you think is most important, using evidence.",
              qZh: "\u6c99\u6f20\u662f\u6bfe\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u7684\u751f\u7269\u7fa4\u843d\u3002\u70ed\u5e26\u96e8\u6797\u63d0\u4f9b\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6548\u76ca\u3002\u7528\u8bc1\u636e\u8bc4\u4f30\u4f60\u8ba4\u4e3a\u70ed\u5e27\u96e8\u6797\u6700\u91cd\u8981\u7684\u662f\u54ea\u79cd\u6548\u76ca\u3002",
              aEn: "Any well-supported judgement is valid. Environmental benefits such as carbon storage are globally important because they slow climate change. Economic benefits such as timber, palm oil, and tourism provide income that countries like Indonesia and Malaysia rely on. Social benefits include medicines derived from rainforest plants. A strong answer will give specific examples (e.g. 23,000 coral species, carbon dioxide absorbed by trees) and explain why one category outweighs the others.",
              aZh: "\u4efb\u4f55\u6709\u7406\u7531\u652f\u6301\u7684\u5224\u65ad\u90fd\u6709\u6548\u3002\u73af\u5883\u6548\u76ca\uff08\u5982\u78b3\u8d54\u5b58\u5e93\uff09\u5728\u5168\u7403\u8303\u56f4\u5185\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u6837\u6b62\u6c14\u5019\u53d8\u5316\u3002\u7ecf\u6d4e\u6548\u76ca\uff08\u5982\u6728\u6750\u3001\u68d5\u6988\u6cb9\u548c\u65c5\u6e38\uff09\u4e3a\u5370\u5ea6\u5c3c\u897f\u4e9a\u3001\u9a6c\u6765\u897f\u4e9a\u7b49\u56fd\u63d0\u4f9b\u6536\u5165\u3002\u793e\u4f1a\u6548\u76ca\u5305\u62ec\u6e90\u81ea\u96e8\u6797\u690d\u7269\u7684\u836f\u7269\u3002\u4f18\u79c0\u7b54\u6848\u5e94\u7ed9\u51fa\u5177\u4f53\u4f8b\u5b50\u5e76\u89e3\u91ca\u4e3a\u4ec0\u4e48\u67d0\u4e00\u7c7b\u6548\u76ca\u8d85\u8fc7\u5176\u4ed6\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What is the correct definition of a desert?",
          qZh: "\u6c99\u6f20\u7684\u6b63\u786e\u5b9a\u4e49\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "A hot, sandy area with no plants", zh: "\u4e00\u4e2a\u70bd\u70ed\u3001\u5e03\u6ee1\u6c99\u5730\u4e14\u6ca1\u6709\u690d\u7269\u7684\u5730\u65b9" },
            { en: "A biome receiving less than 250 mm of precipitation per year", zh: "\u6bcf\u5e74\u964d\u6c34\u91cf\u4e0d\u8db3250\u6beb\u7c73\u7684\u751f\u7269\u7fa4\u843d" },
            { en: "Any area found in the tropics", zh: "\u4efb\u4f55\u5904\u4e8e\u70ed\u5e27\u7684\u5730\u533a" },
            { en: "An area with temperatures above 40\u00b0C", zh: "\u6c14\u6e29\u8d85\u8fc740\u00b0C\u7684\u5730\u533a" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! A desert is defined by its low annual precipitation (under 250 mm), not by temperature. This is why cold deserts like the Gobi also count as deserts.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6c99\u6f20\u7531\u5e74\u964d\u6c34\u91cf\u4f4e\uff08\u4e0d\u8db3250\u6beb\u7c73\uff09\u5b9a\u4e49\uff0c\u800c\u975e\u6c14\u6e29\u3002\u56e0\u6b64\u6208\u58c1\u8fd9\u6837\u7684\u51b7\u6f20\u4e5f\u5c5e\u4e8e\u6c99\u6f20\u3002",
          explainWrongEn: "Not quite. Deserts can be cold, they don\u2019t have to be in the tropics, and temperature alone doesn\u2019t define them. The correct definition is based on precipitation: less than 250 mm per year.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6c99\u6f20\u53ef\u4ee5\u5f88\u5bd2\u51b7\uff0c\u4e0d\u4e00\u5b9a\u5728\u70ed\u5e27\uff0c\u6c14\u6e29\u5355\u72ec\u65e0\u6cd5\u5b9a\u4e49\u6c99\u6f20\u3002\u6b63\u786e\u5b9a\u4e49\u57fa\u4e8e\u964d\u6c34\u91cf\uff1a\u6bcf\u5e74\u4e0d\u8db3250\u6beb\u7c73\u3002",
        },
        {
          type: "quiz",
          qEn: "Which plate boundary type formed the Himalayas?",
          qZh: "\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u662f\u7531\u54ea\u79cd\u677f\u5757\u8fb9\u754c\u7c7b\u578b\u5f62\u6210\u7684\uff1f",
          opts: [
            { en: "Destructive boundary \u2014 oceanic plate sinking", zh: "\u6d88\u7075\u578b\u8fb9\u754c\u2014\u2014\u6d77\u6d0b\u677f\u5757\u4e0b\u6c89" },
            { en: "Constructive boundary \u2014 plates pulling apart", zh: "\u6784\u9020\u578b\u8fb9\u754c\u2014\u2014\u677f\u5757\u5206\u5f00" },
            { en: "Collision boundary \u2014 two continental plates pushing upwards", zh: "\u78b0\u649e\u578b\u8fb9\u754c\u2014\u2014\u4e24\u5757\u5927\u9646\u677f\u5757\u5411\u4e0a\u6324\u538b" },
            { en: "Conservative boundary \u2014 plates sliding past each other", zh: "\u4fdd\u7559\u578b\u8fb9\u754c\u2014\u2014\u677f\u5757\u6ede\u52a8\u9519\u8fc7" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! The Himalayas formed where the Indian plate collided with the Eurasian plate. Both are continental plates, so neither sinks \u2014 instead the crust is pushed upwards to form fold mountains.",
          explainCorrectZh: "\u6b63\u786e\uff01\u559c\u9a6c\u62c9\u96c5\u5c71\u8109\u5728\u5370\u5ea6\u677f\u5757\u4e0e\u4e9a\u6b27\u677f\u5757\u78b0\u649e\u5904\u5f62\u6210\u3002\u4e24\u8005\u90fd\u662f\u5927\u9646\u677f\u5757\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4e0b\u6c89\u2014\u2014\u5730\u58f3\u88ab\u5411\u4e0a\u6324\u538b\uff0c\u5f62\u6210\u8944\u66f2\u5c71\u3002",
          explainWrongEn: "Not quite. Destructive boundaries involve a sinking oceanic plate (that formed Japan). Constructive boundaries pull apart. Conservative boundaries slide. The Himalayas were formed by a collision of two continental plates.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6d88\u7075\u578b\u8fb9\u754c\u6d89\u53ca\u6d77\u6d0b\u677f\u5757\u4e0b\u6c89\uff08\u5f62\u6210\u4e86\u65e5\u672c\uff09\u3002\u6784\u9020\u578b\u8fb9\u754c\u662f\u5206\u5f00\u7684\u3002\u4fdd\u7559\u578b\u8fb9\u754c\u662f\u6ede\u52a8\u7684\u3002\u559c\u9a6c\u62c9\u96c5\u7531\u4e24\u5757\u5927\u9646\u677f\u5757\u78b0\u649e\u5f62\u6210\u3002",
        },
      ],
    },

    /* ========== LC2: Economic Boom ========== */
    {
      num: 2,
      badge: "T",
      title: "What is the Cause of Asia\u2019s Economic Boom? \u2014 Review",
      titleZh: "\u4e9a\u6d32\u7ecf\u6d4e\u8363\u666f\u7684\u539f\u56e0\u662f\u4ec0\u4e48\uff1f\u2014\u2014\u590d\u4e60",
      subtitle: "A review of economic sectors, the causes of growth, TNCs, the global shift, and sustainability.",
      subtitleZh: "\u590d\u4e60\u7ecf\u6d4e\u90e8\u95e8\u3001\u589e\u957f\u539f\u56e0\u3001\u8de8\u56fd\u516c\u53f8\u3001\u5168\u7403\u8f6c\u79fb\u548c\u53ef\u6301\u7eed\u53d1\u5c55\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe the four economic sectors and link them to levels of development.", zh: "\u6211\u80fd\u63cf\u8ff0\u56db\u4e2a\u7ecf\u6d4e\u90e8\u95e8\u5e76\u5c06\u5176\u4e0e\u53d1\u5c55\u6c34\u5e73\u76f8\u8054\u7cfb\u3002" },
            { en: "I can explain the three main causes of Asia\u2019s economic growth.", zh: "\u6211\u80fd\u89e3\u91ca\u4e9a\u6d32\u7ecf\u6d4e\u589e\u957f\u7684\u4e09\u4e2a\u4e3b\u8981\u539f\u56e0\u3002" },
            { en: "I can evaluate the benefits and challenges of TNCs and the global shift for different groups.", zh: "\u6211\u80fd\u8bc4\u4f30\u8de8\u56fd\u516c\u53f8\u548c\u5168\u7403\u8f6c\u79fb\u5bf9\u4e0d\u540c\u7fa4\u4f53\u7684\u5229\u76ca\u548c\u6311\u6218\u3002" },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The economy is a system involving the production, distribution, and consumption of goods and services. Explain the difference between the primary and tertiary economic sectors, giving one country example for each.",
              qZh: "\u7ecf\u6d4e\u662f\u6d89\u53ca\u5546\u54c1\u548c\u670d\u52a1\u7684\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u7684\u7cfb\u7edf\u3002\u89e3\u91ca\u7b2c\u4e00\u4ea7\u4e1a\u548c\u7b2c\u4e09\u4ea7\u4e1a\u7684\u533a\u522b\uff0c\u5404\u4e3e\u4e00\u4e2a\u56fd\u5bb6\u4e3e\u4f8b\u3002",
              aEn: "The primary sector extracts raw materials from the earth \u2014 such as farming, fishing, and mining. Country example: Ghana or Nepal. The tertiary sector provides services to people and businesses \u2014 such as retail, healthcare, and education. Country example: United States or Spain. Developing countries tend to have larger primary sectors; more developed countries tend to have larger tertiary sectors.",
              aZh: "\u7b2c\u4e00\u4ea7\u4e1a\u4ece\u5730\u7403\u63d0\u53d6\u539f\u6750\u6599\u2014\u2014\u5982\u519c\u4e1a\u3001\u6355\u9c7c\u548c\u91c7\u77ff\u3002\u56fd\u5bb6\u4e3e\u4f8b\uff1a\u52a0\u7eb3\u6216\u5c3c\u6cca\u5c14\u3002\u7b2c\u4e09\u4ea7\u4e1a\u4e3a\u4eba\u548c\u4f01\u4e1a\u63d0\u4f9b\u670d\u52a1\u2014\u2014\u5982\u96f6\u552e\u3001\u533b\u7597\u548c\u6559\u80b2\u3002\u56fd\u5bb6\u4e3e\u4f8b\uff1a\u7f8e\u56fd\u6216\u897f\u73ed\u7259\u3002\u53d1\u5c55\u4e2d\u56fd\u5bb6\u7b2c\u4e00\u4ea7\u4e1a\u6bd4\u4f8b\u8f83\u5927\uff1b\u53d1\u5c55\u7a0b\u5ea6\u8f83\u9ad8\u7684\u56fd\u5bb6\u7b2c\u4e09\u4ea7\u4e1a\u6bd4\u4f8b\u8f83\u5927\u3002",
            },
            {
              qEn: "China has been the world\u2019s largest recipient of FDI since 2000, and its share of global trade rose from 3% in 2001 to 10% by 2013. Explain two of the three main causes of Asia\u2019s economic growth.",
              qZh: "\u4e2d\u56fd\u81ea2000\u5e74\u4ee5\u6765\u4e00\u76f4\u662f\u5168\u7403\u6700\u5927\u7684\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u63a5\u53d7\u56fd\uff0c\u5176\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd42001\u5e74\u4e3a3%\uff0c\u52302013\u5e74\u589e\u81f310%\u3002\u89e3\u91ca\u4e9a\u6d32\u7ecf\u6d4e\u589e\u957f\u7684\u4e09\u5927\u4e3b\u8981\u539f\u56e0\u4e2d\u7684\u4e24\u4e2a\u3002",
              aEn: "Any two of the following: Foreign Direct Investment (FDI) \u2014 after WWII, Asian countries attracted major FDI into manufacturing and infrastructure, creating jobs, technology transfer, and rising national wealth. China is the clearest example. Increasing education \u2014 as countries grew richer they invested in education, allowing workers to move from lower-skilled to higher-skilled jobs, promoting social mobility. Government control \u2014 governments guided growth through tax laws, increasing exports, limiting imports to protect local industry, and reducing dependence on foreign suppliers.",
              aZh: "\u4ee5\u4e0b\u4efb\u610f\u4e24\u70b9\uff1a\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff08FDI\uff09\u2014\u2014\u4e8c\u6218\u540e\uff0c\u4e9a\u6d32\u56fd\u5bb6\u5438\u5f15\u5927\u91cf\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u6d41\u5165\u5236\u9020\u4e1a\u548c\u57fa\u7840\u8bbe\u65bd\uff0c\u521b\u9020\u4e86\u5c31\u4e1a\u673a\u4f1a\u548c\u6280\u672f\u8f6c\u8ba9\uff0c\u4e2d\u56fd\u662f\u6700\u5178\u578b\u7684\u4f8b\u5b50\u3002\u6269\u5c55\u6559\u80b2\u2014\u2014\u968f\u7740\u56fd\u5bb6\u53d8\u5f97\u66f4\u5bcc\u88d5\uff0c\u5728\u6559\u80b2\u4e0a\u6295\u5165\u66f4\u591a\uff0c\u5de5\u4eba\u53ef\u4ee5\u4ece\u4f4e\u6280\u80fd\u8f6c\u5411\u9ad8\u6280\u80fd\u5de5\u4f5c\uff0c\u4fc3\u8fdb\u793e\u4f1a\u6d41\u52a8\u3002\u653f\u5e9c\u63a7\u5236\u2014\u2014\u653f\u5e9c\u901a\u8fc7\u7a0e\u6cd5\u3001\u589e\u52a0\u51fa\u53e3\u3001\u9650\u5236\u8fdb\u53e3\u4ee5\u4fdd\u62a4\u672c\u5730\u4ea7\u4e1a\u5e76\u51cf\u5c11\u5bf9\u5916\u56fd\u4f9b\u5e94\u5546\u7684\u4f9d\u8d56\u6765\u5f15\u5bfc\u589e\u957f\u3002",
            },
            {
              qEn: "Apple outsources iPhone production to Foxconn, a Taiwanese TNC with factories in China. Explain the global shift and evaluate whether it benefits Western countries, Asian countries, or TNCs the most.",
              qZh: "\u82f9\u679c\u516c\u53f8\u5c06iPhone\u5236\u9020\u5916\u5305\u7ed9\u5bcc\u58eb\u5eb7\u2014\u2014\u4e00\u5bb6\u5728\u4e2d\u56fd\u62e5\u6709\u5de5\u5382\u7684\u53f0\u6e7e\u8de8\u56fd\u516c\u53f8\u3002\u89e3\u91ca\u5168\u7403\u8f6c\u79fb\uff0c\u5e76\u8bc4\u4f30\u5b83\u5bf9\u897f\u65b9\u56fd\u5bb6\u3001\u4e9a\u6d32\u56fd\u5bb6\u8fd8\u662f\u8de8\u56fd\u516c\u53f8\u6700\u6709\u5229\u3002",
              aEn: "The global shift is the relocation of the world\u2019s economic centre of gravity towards Asia from Europe and North America over the last 30 years, driven by outsourcing to lower-cost countries. TNCs arguably benefit most: they access cheap labour, new markets, and keep profits in the source country. Asian countries gain jobs and investment but often receive low wages. Western consumers get cheaper goods but workers lose manufacturing jobs (deindustrialisation). A balanced answer should acknowledge evidence for all three groups.",
              aZh: "\u5168\u7403\u8f6c\u79fb\u662f\u8fc7\u53bb30\u5e74\u95f4\u5168\u7403\u7ecf\u6d4e\u91cd\u5fc3\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u8f6c\u79fb\u7684\u8fc7\u7a0b\uff0c\u7531\u5c06\u5236\u9020\u5916\u5305\u7ed9\u6210\u672c\u8f83\u4f4e\u7684\u56fd\u5bb6\u63a8\u52a8\u3002\u8de8\u56fd\u516c\u53f8\u53ef\u8bf4\u662f\u6700\u53d7\u76ca\u7684\u4e00\u65b9\uff1a\u5b83\u4eec\u83b7\u5f97\u5ec9\u4ef7\u52b3\u52a8\u529b\u3001\u65b0\u5e02\u573a\uff0c\u5e76\u5c06\u5229\u6da6\u4fdd\u7559\u5728\u6765\u6e90\u56fd\u3002\u4e9a\u6d32\u56fd\u5bb6\u83b7\u5f97\u5c31\u4e1a\u673a\u4f1a\u548c\u6295\u8d44\uff0c\u4f46\u5de5\u8d44\u5f80\u5f80\u8f83\u4f4e\u3002\u897f\u65b9\u6d88\u8d39\u8005\u53ef\u4ee5\u4ab7\u4ef7\u8d2d\u5546\u54c1\uff0c\u4f46\u5de5\u4eba\u5374\u5931\u53bb\u4e86\u5236\u9020\u4e1a\u5c31\u4e1a\u673a\u4f1a\uff08\u53bb\u5de5\u4e1a\u5316\uff09\u3002\u5e73\u8861\u7684\u7b54\u6848\u5e94\u7ed9\u51fa\u4e09\u7fa4\u4f53\u7684\u8bc1\u636e\u3002",
            },
            {
              qEn: "Reports link H&M\u2019s supply chain to factories in Myanmar with very low wages and workers as young as 14. A student says: \u2018H&M definitely uses sweatshops.\u2019 How far do you agree? Justify your answer.",
              qZh: "\u6709\u62a5\u544a\u5c06H&M\u7684\u4f9b\u5e94\u94fe\u4e0e\u7f5a\u7538\u5de5\u5382\u76f8\u5173\u8054\uff0c\u8fd9\u4e9b\u5de5\u5382\u5de5\u8d44\u6781\u4f4e\u4e14\u96c7\u7528\u5e7415\u5c81\u7684\u5de5\u4eba\u3002\u4e00\u540d\u5b66\u751f\u8bf4\uff1a\u201cH&M\u5c31\u662f\u4e00\u5bb6\u4f7f\u7528\u8102\u6c57\u5de5\u5382\u7684\u516c\u53f8\u3002\u201d\u4f60\u5230\u4f55\u79cd\u7a0b\u5ea6\u540c\u610f\uff1f\u8be6\u8ff0\u4f60\u7684\u7406\u7531\u3002",
              aEn: "Partly agree. Evidence supporting the claim: reports of very low wages, factory unrest, and the use of workers as young as 14 in Myanmar factories linked to H&M\u2019s supply chain match key features of sweatshops (long hours, low pay, poor conditions, no union rights). However, H&M does not directly run these factories \u2014 it uses suppliers. It also disputes some claims and has a stated code of conduct. A good answer notes the limits of the evidence and distinguishes between H&M\u2019s direct responsibility and indirect supply chain links.",
              aZh: "\u90e8\u5206\u540c\u610f\u3002\u652f\u6301\u8be5\u89c2\u70b9\u7684\u8bc1\u636e\uff1a\u5de5\u8d44\u6781\u4f4e\u3001\u5de5\u5382\u77db\u76fe\u548c\u7f5a\u7538\u5de5\u5382\u96c7\u7528\u672a\u6210\u5e74\u5de5\u4eba\u7b49\u62a5\u544a\u4e0e\u8102\u6c57\u5de5\u5382\u7684\u4e3b\u8981\u7279\u5f81\u76f8\u5339\u914d\u3002\u7136\u800c\uff0cH&M\u5e76\u975e\u76f4\u63a5\u7ecf\u8425\u8fd9\u4e9b\u5de5\u5382\u2014\u2014\u5b83\u4f7f\u7528\u4f9b\u5e94\u5546\u3002\u5b83\u4e5f\u5bf9\u90e8\u5206\u6307\u63a7\u63d0\u51fa\u5f02\u8bae\uff0c\u5e76\u8868\u793a\u5177\u6709\u4f9b\u5e94\u5546\u884c\u4e3a\u51c6\u5219\u3002\u4f18\u79c0\u7b54\u6848\u5e94\u6307\u51fa\u8bc1\u636e\u7684\u5c40\u9650\u6027\uff0c\u5e76\u533a\u5206H&M\u7684\u76f4\u63a5\u8d23\u4efb\u4e0e\u95f4\u63a5\u4f9b\u5e94\u94fe\u5173\u8054\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What is the global shift?",
          qZh: "\u5168\u7403\u8f6c\u79fb\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The movement of people from rural to urban areas in Asia", zh: "\u4e9a\u6d32\u4eba\u53e3\u4ece\u519c\u6751\u5411\u57ce\u5e02\u8fc1\u79fb\u7684\u8fc7\u7a0b" },
            { en: "The relocation of the world\u2019s economic activity from Europe and North America towards Asia", zh: "\u5168\u7403\u7ecf\u6d4e\u6d3b\u52a8\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u8f6c\u79fb\u7684\u8fc7\u7a0b" },
            { en: "The growth of China\u2019s Belt and Road Initiative", zh: "\u4e2d\u56fd\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u7684\u589e\u957f" },
            { en: "The shift from primary to tertiary sector employment in developing countries", zh: "\u53d1\u5c55\u4e2d\u56fd\u5bb6\u5c31\u4e1a\u7ed3\u6784\u4ece\u7b2c\u4e00\u4ea7\u4e1a\u5411\u7b2c\u4e09\u4ea7\u4e1a\u8f6c\u53d8" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! The global shift is the movement of the world\u2019s economic centre of gravity from Europe and North America towards Asia over the last 30 years, driven by outsourcing and lower labour costs.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5168\u7403\u8f6c\u79fb\u662f\u8fc7\u53bb30\u5e74\u95f4\u5168\u7403\u7ecf\u6d4e\u91cd\u5fc3\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u8f6c\u79fb\u7684\u8fc7\u7a0b\uff0c\u7531\u5916\u5305\u548c\u8f83\u4f4e\u52b3\u52a8\u529b\u6210\u672c\u63a8\u52a8\u3002",
          explainWrongEn: "Not quite. Urbanisation, the BRI, and sector shifts are related topics but they are not the definition of the global shift. The correct answer is the relocation of economic activity from the West towards Asia.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u57ce\u9547\u5316\u3001\u4e00\u5e27\u4e00\u8def\u5021\u8bae\u548c\u4ea7\u4e1a\u7ed3\u6784\u8f6c\u53d8\u8fd9\u4e9b\u9898\u76ee\u4e0e\u5168\u7403\u8f6c\u79fb\u76f8\u5173\uff0c\u4f46\u5e76\u975e\u5176\u5b9a\u4e49\u3002\u6b63\u786e\u7b54\u6848\u662f\u7ecf\u6d4e\u6d3b\u52a8\u4ece\u897f\u65b9\u5411\u4e9a\u6d32\u8f6c\u79fb\u3002",
        },
        {
          type: "quiz",
          qEn: "Which of the following is a feature of a sweatshop?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\uff1f",
          opts: [
            { en: "Workers earn above the living wage", zh: "\u5de5\u4eba\u5de5\u8d44\u9ad8\u4e8e\u751f\u6d3b\u5de5\u8d44\u6807\u51c6" },
            { en: "Workers have the right to join a trade union", zh: "\u5de5\u4eba\u6709\u6743\u52a0\u5165\u5de5\u4f1a" },
            { en: "Workers work excessive hours for very low wages", zh: "\u5de5\u4eba\u4ee5\u6781\u4f4e\u5de5\u8d44\u8d85\u65f6\u5de5\u4f5c" },
            { en: "Workers are provided with safe, comfortable conditions", zh: "\u5de5\u4eba\u6709\u5b89\u5168\u8212\u9002\u7684\u5de5\u4f5c\u73af\u5883" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Sweatshops are characterised by excessive hours, very low wages, poor conditions, and often no trade union rights. The other options describe fair workplaces.",
          explainCorrectZh: "\u6b63\u786e\uff01\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\u662f\u5de5\u4f5c\u65f6\u95f4\u8fc7\u957f\u3001\u5de5\u8d44\u6781\u4f4e\u3001\u5de5\u4f5c\u6761\u4ef6\u6076\u52a3\uff0c\u5e76\u4e14\u5f80\u5f80\u6ca1\u6709\u5de5\u4f1a\u6743\u5229\u3002\u5176\u4ed6\u9009\u9879\u63cf\u8ff0\u7684\u662f\u516c\u5e73\u7684\u5de5\u4f5c\u573a\u6240\u3002",
          explainWrongEn: "Not quite. Fair wages, union rights, and safe conditions are features of fair workplaces \u2014 the opposite of sweatshops. The correct answer is workers working excessive hours for very low wages.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5408\u7406\u5de5\u8d44\u3001\u5de5\u4f1a\u6743\u5229\u548c\u5b89\u5168\u6761\u4ef6\u662f\u516c\u5e73\u5de5\u4f5c\u573a\u6240\u7684\u7279\u5f81\u2014\u2014\u6070\u6070\u4e0e\u8102\u6c57\u5de5\u5382\u76f8\u53cd\u3002\u6b63\u786e\u7b54\u6848\u662f\u5de5\u4eba\u4ee5\u6781\u4f4e\u5de5\u8d44\u8d85\u65f6\u5de5\u4f5c\u3002",
        },
      ],
    },

    /* ========== LC3: Weather & Climate ========== */
    {
      num: 3,
      badge: "T",
      title: "Why Do Different Places Have Different Weather Patterns? \u2014 Review",
      titleZh: "\u4e3a\u4ec0\u4e48\u4e0d\u540c\u5730\u65b9\u7684\u5929\u6c14\u6a21\u5f0f\u5404\u4e0d\u76f8\u540c\uff1f\u2014\u2014\u590d\u4e60",
      subtitle: "A review of weather and climate, differential heating, convectional rainfall, air masses, GIS, microclimates, and fieldwork.",
      subtitleZh: "\u590d\u4e60\u5929\u6c14\u4e0e\u6c14\u5019\u3001\u5dee\u5f02\u52a0\u70ed\u3001\u5bf9\u6d41\u964d\u96e8\u3001\u6c14\u56e2\u3001GIS\u3001\u5c0f\u6c14\u5019\u4e0e\u91ce\u5916\u8c03\u67e5\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain differential heating and why Thailand is hotter in the south than the north.", zh: "\u6211\u80fd\u89e3\u91ca\u5dee\u5f02\u52a0\u70ed\uff0c\u4ee5\u53ca\u6cf0\u56fd\u5357\u90e8\u4e3a\u4ec0\u4e48\u6bd4\u5317\u90e8\u66f4\u70ed\u3002" },
            { en: "I can describe how convectional rainfall forms and explain the role of air masses in Thailand\u2019s seasons.", zh: "\u6211\u80fd\u63cf\u8ff0\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\uff0c\u5e76\u89e3\u91ca\u6c14\u56e2\u5728\u6cf0\u56fd\u5b63\u8282\u4e2d\u7684\u4f5c\u7528\u3002" },
            { en: "I can explain what GIS is and describe the factors that cause a microclimate.", zh: "\u6211\u80fd\u89e3\u91ca\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u662f\u4ec0\u4e48\uff0c\u5e76\u63cf\u8ff0\u5bfc\u81f4\u5c0f\u6c14\u5019\u7684\u56e0\u7d20\u3002" },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Bangkok\u2019s average temperature stays between roughly 26\u00b0C and 30\u00b0C throughout the year. Explain two reasons why Thailand is colder in the north than the south.",
              qZh: "\u66f2\u8c37\u5168\u5e74\u5e73\u5747\u6c14\u6e29\u5927\u7ea626\u00b0C\u81f330\u00b0C\u3002\u89e3\u91ca\u6cf0\u56fd\u5317\u90e8\u6bd4\u5357\u90e8\u66f4\u51b7\u7684\u4e24\u4e2a\u539f\u56e0\u3002",
              aEn: "First, the north of Thailand is further from the equator than the south. Because of differential heating, solar energy is less concentrated at higher latitudes, so temperatures are lower. Second, the north of Thailand is more mountainous and at a higher altitude than the south. Higher altitude means lower temperatures because the atmosphere is thinner and retains less heat.",
              aZh: "\u7b2c\u4e00\uff0c\u6cf0\u56fd\u5317\u90e8\u6bd4\u5357\u90e8\u8dbb\u8d62\u9053\u66f4\u8fdc\u3002\u7531\u4e8e\u5dee\u5f02\u52a0\u70ed\uff0c\u8f83\u9ad8\u7eac\u5ea6\u5904\u7684\u592a\u9633\u80fd\u91cf\u96c6\u4e2d\u7a0b\u5ea6\u8f83\u4f4e\uff0c\u56e0\u6b64\u6c14\u6e29\u8f83\u4f4e\u3002\u7b2c\u4e8c\uff0c\u6cf0\u56fd\u5317\u90e8\u6bd4\u5357\u90e8\u5730\u52bf\u66f4\u9ad8\u3001\u5c71\u8109\u66f4\u591a\u3002\u6d77\u62d4\u8f83\u9ad8\u610f\u5473\u7740\u6c14\u6e29\u66f4\u4f4e\uff0c\u56e0\u4e3a\u5927\u6c14\u5c42\u8f83\u7a00\u8584\uff0c\u4fdd\u5c58\u7684\u70ed\u91cf\u8f83\u5c11\u3002",
            },
            {
              qEn: "Draw an annotated diagram or describe in steps how convectional rainfall forms. Include at least four stages in the correct order.",
              qZh: "\u7ed8\u5236\u4e00\u5e45\u5e26\u6ce8\u91ca\u7684\u793a\u610f\u56fe\uff0c\u6216\u6309\u6b65\u9aa4\u63cf\u8ff0\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\u3002\u81f3\u5c11\u5305\u62ec\u56db\u4e2a\u6b65\u9aa4\u4e14\u987a\u5e8f\u6b63\u786e\u3002",
              aEn: "1. The Sun heats the Earth\u2019s surface. 2. The ground heats the air above it, making it less dense. 3. Warm, less dense air rises \u2014 this creates a low pressure system. 4. As the air rises it cools. 5. Water vapour in the cooling air condenses. 6. Condensation forms cumulonimbus clouds and heavy rain falls. Bonus: low pressure is needed for rain to form \u2014 rising air reduces surface pressure.",
              aZh: "1.\u592a\u9633\u52a0\u70ed\u5730\u8868\u30022.\u5730\u9762\u52a0\u70ed\u4e0a\u65b9\u7a7a\u6c14\uff0c\u4f7f\u5176\u5bc6\u5ea6\u964d\u4f4e\u30023.\u6696\u7a7a\u6c14\u4e0a\u5347\u2014\u2014\u5f62\u6210\u4f4e\u6c14\u538b\u30024.\u7a7a\u6c14\u4e0a\u5347\u540e\u51b7\u5374\u30025.\u51b7\u5374\u7a7a\u6c14\u4e2d\u7684\u6c34\u84b8\u6c14\u51dd\u7ed3\u30026.\u51dd\u7ed3\u5f62\u6210\u79ef\u96e8\u4e91\uff0c\u964d\u4e0b\u5927\u96e8\u3002\u9898\u5916\u52a0\u5206\uff1a\u964d\u96e8\u9700\u8981\u4f4e\u6c14\u538b\u2014\u2014\u4e0a\u5347\u7a7a\u6c14\u4f7f\u5730\u9762\u6c14\u538b\u964d\u4f4e\u3002",
            },
            {
              qEn: "Thailand has two air masses. The cT (continental tropical) air mass dominates in the dry season. Explain how this air mass causes the dry season, and describe what GIS is and how it helps geographers study weather patterns.",
              qZh: "\u6cf0\u56fd\u53d7\u4e24\u79cd\u6c14\u56e2\u5f71\u54cd\u3002\u5e72\u5b63\u4e3b\u8981\u53d7\u5927\u9646\u6c14\u56e2\uff08cT\uff09\u63a7\u5236\u3002\u89e3\u91ca\u8be5\u6c14\u56e2\u5982\u4f55\u5bfc\u81f4\u65f1\u5b63\uff0c\u5e76\u63cf\u8ff0\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5b83\u5982\u4f55\u5e2e\u52a9\u5730\u7406\u5b66\u5bb6\u7814\u7a76\u5929\u6c14\u89c4\u5f8b\u3002",
              aEn: "In the dry season, the wind changes direction and air comes from the north over land in the cT air mass. Continental air masses form over land and contain little moisture, so there is less condensation and therefore less rainfall. GIS stands for Geographic Information Systems \u2014 a technology that uses different geographic data such as weather, land use, and population information displayed on maps. It helps geographers compare weather data across locations, identify spatial patterns, and spot anomalies.",
              aZh: "\u65f1\u5b63\u65f6\uff0c\u98ce\u5411\u6539\u53d8\uff0c\u6c14\u6d41\u5c06\u5927\u9646\u6c14\u56e2\u4ece\u5317\u65b9\u9646\u5730\u5e26\u5165\u3002\u5927\u9646\u6c14\u56e2\u5728\u9646\u5730\u4e0a\u5f62\u6210\uff0c\u6c34\u5206\u542b\u91cf\u5f88\u5c11\uff0c\u56e0\u6b64\u51dd\u7ed3\u51cf\u5c11\uff0c\u964d\u96e8\u4e5f\u968f\u4e4b\u51cf\u5c11\u3002GIS\u5373\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\u2014\u2014\u4e00\u79cd\u5229\u7528\u5929\u6c14\u3001\u571f\u5730\u5229\u7528\u548c\u4eba\u53e3\u7b49\u5730\u7406\u6570\u636e\u5e76\u5c06\u5176\u5c55\u793a\u5728\u5730\u56fe\u4e0a\u7684\u6280\u672f\u3002\u5b83\u5e2e\u52a9\u5730\u7406\u5b66\u5bb6\u6bd4\u8f83\u5404\u5730\u5929\u6c14\u6570\u636e\u3001\u8bc6\u522b\u7a7a\u95f4\u89c4\u5f8b\u5e76\u53d1\u73b0\u5f02\u5e38\u503c\u3002",
            },
            {
              qEn: "A microclimate is the climate in a small area such as a park or school. State two factors that can cause a microclimate and explain how they each affect temperature or wind.",
              qZh: "\u5c0f\u6c14\u5019\u662f\u4e00\u4e2a\u5c0f\u5730\u5e26\uff08\u5982\u516c\u56ed\u6216\u5b66\u6821\uff09\u5185\u7684\u6c14\u5019\u3002\u5217\u51fa\u4e24\u4e2a\u5bfc\u81f4\u5c0f\u6c14\u5019\u5f62\u6210\u7684\u56e0\u7d20\uff0c\u5e76\u89e3\u91ca\u5b83\u4eec\u5404\u81ea\u5982\u4f55\u5f71\u54cd\u6c14\u6e29\u6216\u98ce\u529b\u3002",
              aEn: "Any two of the following: Surface \u2014 dark tarmac absorbs more solar energy than grass, making paved areas warmer; grass loses heat through transpiration, keeping it cooler. Shelter \u2014 buildings and walls block wind and trap warmth, making sheltered spots warmer and less windy. Exposure \u2014 open areas with little shelter feel colder because wind removes heat from surfaces and people (wind chill).",
              aZh: "\u4ee5\u4e0b\u4efb\u610f\u4e24\u70b9\uff1a\u5730\u9762\u7c7b\u578b\u2014\u2014\u6df1\u8272\u6c25\u9752\u6c41\u6d82\u8def\u6bd4\u8349\u5730\u5438\u6536\u66f4\u591a\u592a\u9633\u80fd\u91cf\uff0c\u4f7f\u786c\u5316\u5730\u9762\u6e29\u5ea6\u8f83\u9ad8\uff1b\u8349\u5730\u901a\u8fc7\u852d\u817e\u6563\u70ed\uff0c\u4fdd\u6301\u51c9\u723d\u3002\u906e\u853d\u7269\u2014\u2014\u5efa\u7b51\u7269\u548c\u5899\u58c1\u6321\u6321\u98ce\u5e76\u7669\u7559\u6696\u610f\uff0c\u4f7f\u906e\u853d\u5730\u70b9\u66f4\u6696\u548c\u98ce\u529b\u66f4\u5c0f\u3002\u66b4\u9732\u5730\u5e26\u2014\u2014\u7f3a\u5c11\u906e\u853d\u7684\u5f00\u9614\u5730\u5e26\u611f\u89c9\u66f4\u51b7\uff0c\u56e0\u4e3a\u98ce\u5e26\u8d70\u5730\u9762\u548c\u4eba\u4f53\u7684\u70ed\u91cf\uff08\u98ce\u5bd2\u6548\u5e94\uff09\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What type of air pressure is needed for convectional rainfall to form?",
          qZh: "\u5bf9\u6d41\u964d\u96e8\u5f62\u6210\u9700\u8981\u4ec0\u4e48\u6c14\u538b\u7c7b\u578b\uff1f",
          opts: [
            { en: "High pressure", zh: "\u9ad8\u6c14\u538b" },
            { en: "Low pressure", zh: "\u4f4e\u6c14\u538b" },
            { en: "Equal pressure across the surface", zh: "\u5730\u9762\u6c14\u538b\u5747\u5339" },
            { en: "Pressure is not relevant to rainfall", zh: "\u6c14\u538b\u4e0e\u964d\u96e8\u65e0\u5173" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Low pressure is needed for convectional rainfall. When warm air rises it creates a low pressure system. The rising air then cools, water vapour condenses, and rain falls.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5bf9\u6d41\u964d\u96e8\u9700\u8981\u4f4e\u6c14\u538b\u3002\u6696\u7a7a\u6c14\u4e0a\u5347\u65f6\u5f62\u6210\u4f4e\u6c14\u538b\u7cfb\u7edf\u3002\u4e0a\u5347\u7a7a\u6c14\u968f\u540e\u51b7\u5374\uff0c\u6c34\u84b8\u6c14\u51dd\u7ed3\uff0c\u964d\u96e8\u5f62\u6210\u3002",
          explainWrongEn: "Not quite. High pressure is associated with clear, dry weather because air sinks rather than rises. Convectional rainfall requires low pressure \u2014 created by warm rising air.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u9ad8\u6c14\u538b\u4e0e\u6674\u5929\u3001\u5e72\u71e5\u5929\u6c14\u76f8\u5173\uff0c\u56e0\u4e3a\u6c14\u6d41\u4e0b\u6c89\u800c\u975e\u4e0a\u5347\u3002\u5bf9\u6d41\u964d\u96e8\u9700\u8981\u4f4e\u6c14\u538b\u2014\u2014\u7531\u6696\u7a7a\u6c14\u4e0a\u5347\u5f62\u6210\u3002",
        },
        {
          type: "quiz",
          qEn: "Thailand has two air masses. Which air mass brings the dry season, and why does it cause dry conditions?",
          qZh: "\u6cf0\u56fd\u53d7\u4e24\u79cd\u6c14\u56e2\u5f71\u54cd\u3002\u54ea\u79cd\u6c14\u56e2\u5e26\u6765\u65f1\u5b63\uff0c\u4e3a\u4ec0\u4e48\u5bfc\u81f4\u5e72\u71e5\u5929\u6c14\uff1f",
          opts: [
            { en: "The mT (maritime tropical) air mass \u2014 it forms over the ocean and carries little moisture", zh: "\u6d77\u6d0b\u6c14\u56e2\uff08mT\uff09\u2014\u2014\u5728\u6d77\u6d0b\u4e0a\u5f62\u6210\uff0c\u542b\u6c34\u5206\u5c11" },
            { en: "The cT (continental tropical) air mass \u2014 it forms over land and contains little moisture", zh: "\u5927\u9646\u6c14\u56e2\uff08cT\uff09\u2014\u2014\u5728\u9646\u5730\u4e0a\u5f62\u6210\uff0c\u6c34\u5206\u542b\u91cf\u5f88\u5c11" },
            { en: "The cT (continental tropical) air mass \u2014 it brings heavy rain from the north", zh: "\u5927\u9646\u6c14\u56e2\uff08cT\uff09\u2014\u2014\u4ece\u5317\u65b9\u5e26\u6765\u5927\u91cf\u964d\u96e8" },
            { en: "The mT (maritime tropical) air mass \u2014 it forms over land and traps heat", zh: "\u6d77\u6d0b\u6c14\u56e2\uff08mT\uff09\u2014\u2014\u5728\u9646\u5730\u4e0a\u5f62\u6210\u5e76\u5609\u7559\u70ed\u91cf" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! The cT (continental tropical) air mass dominates in the dry season. It forms over land to the north and contains little moisture, so there is less condensation and therefore little rainfall in Thailand.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5927\u9646\u6c14\u56e2\uff08cT\uff09\u5728\u65f1\u5b63\u5360\u4e3b\u5bfc\u5730\u4f4d\u3002\u5b83\u5728\u5317\u65b9\u9646\u5730\u4e0a\u5f62\u6210\uff0c\u6c34\u5206\u542b\u91cf\u5f88\u5c11\uff0c\u56e0\u6b64\u51dd\u7ed3\u51cf\u5c11\uff0c\u6cf0\u56fd\u964d\u96e8\u4e5f\u968f\u4e4b\u51cf\u5c11\u3002",
          explainWrongEn: "Not quite. The dry season is caused by the cT (continental tropical) air mass, which forms over land and carries little moisture \u2014 not the mT air mass which forms over the ocean. The cT air mass does not bring rain; it brings dry conditions.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u65f1\u5b63\u7531\u5927\u9646\u6c14\u56e2\uff08cT\uff09\u5bfc\u81f4\uff0c\u5b83\u5728\u9646\u5730\u4e0a\u5f62\u6210\u4e14\u6c34\u5206\u542b\u91cf\u5c11\u2014\u2014\u800c\u975e\u5728\u6d77\u6d0b\u4e0a\u5f62\u6210\u7684\u6d77\u6d0b\u6c14\u56e2\uff08mT\uff09\u3002\u5927\u9646\u6c14\u56e2\u4e0d\u5e26\u6765\u964d\u96e8\uff0c\u800c\u662f\u5e26\u6765\u5e72\u71e5\u5929\u6c14\u3002",
        },
      ],
    },

    /* ========== LC4: Tourism ========== */
    {
      num: 4,
      badge: "T",
      title: "How Can Tourism Be Managed Effectively? \u2014 Review",
      titleZh: "\u65c5\u6e38\u5982\u4f55\u5f97\u5230\u6709\u6548\u7ba1\u7406\uff1f\u2014\u2014\u590d\u4e60",
      subtitle: "A review of tourism types, growth data, mass tourism, overtourism, and sustainable management.",
      subtitleZh: "\u590d\u4e60\u65c5\u6e38\u7c7b\u578b\u3001\u589e\u957f\u6570\u636e\u3001\u5927\u4f17\u65c5\u6e38\u3001\u8fc7\u5ea6\u65c5\u6e38\u548c\u53ef\u6301\u7eed\u7ba1\u7406\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe the growth of tourism using data and the TEA method.", zh: "\u6211\u80fd\u7528\u6570\u636e\u548cTEA\u6cd5\u63cf\u8ff0\u65c5\u6e38\u4e1a\u589e\u957f\u60c5\u51b5\u3002" },
            { en: "I can explain how mass tourism and social media contribute to overtourism.", zh: "\u6211\u80fd\u89e3\u91ca\u5927\u4f17\u65c5\u6e38\u548c\u793e\u4ea4\u5a92\u4f53\u5982\u4f55\u52a0\u5267\u8fc7\u5ea6\u65c5\u6e38\u3002" },
            { en: "I can evaluate how effective tourism management at Maya Bay has been, using evidence.", zh: "\u6211\u80fd\u7528\u8bc1\u636e\u8bc4\u4f30\u739b\u96c5\u6e7e\u65c5\u6e38\u7ba1\u7406\u7684\u6548\u679c\u3002" },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "In 2016, Thailand received 32.85 million international tourist arrivals \u2014 the second highest in Asia after China (59.27 million). Use the TEA method to describe the trend in international tourist arrivals to Thailand, including the 2020 anomaly.",
              qZh: "2016\u5e74\uff0c\u6cf0\u56fd\u63a53285\u4e07\u56fd\u9645\u6e38\u5ba2\u2014\u2014\u4ec5\u6b21\u4e8e\u4e2d\u56fd\uff08 5927\u4e07\uff09\uff0c\u5c45\u4e9a\u6d32\u7b2c\u4e8c\u3002\u8fd0\u7528TEA\u6cd5\u63cf\u8ff0\u6cf0\u56fd\u56fd\u9645\u6e38\u5ba2\u5165\u5883\u4eba\u6570\u7684\u8d8b\u52bf\uff0c\u5305\u62ec2020\u5e74\u7684\u5f02\u5e38\u503c\u3002",
              aEn: "Trend: international tourist arrivals to Thailand grew consistently from 2015 onwards. Evidence: Thailand received 32.85 million arrivals in 2016, making it the second most visited country in Asia. Anomaly: in 2020, arrivals collapsed dramatically because of the COVID-19 pandemic, which caused governments to close borders and halt international travel worldwide. This does not fit the strong upward trend seen before 2020.",
              aZh: "\u8d8b\u52bf\uff1a\u56fd\u9645\u6e38\u5ba2\u5165\u5883\u6cf0\u56fd\u7684\u4eba\u65702015\u5e74\u4ee5\u6765\u6301\u7eed\u589e\u957f\u3002\u8bc1\u636e\uff1a\u6cf0\u56fd2016\u5e74\u63a53285\u4e07\u6e38\u5ba2\uff0c\u4e3a\u4e9a\u6d32\u8bbf\u5ba2\u6700\u591a\u7684\u56fd\u5bb6\u4e2d\u7b2c\u4e8c\u3002\u5f02\u5e38\u503c\uff1a2020\u5e74\u6e38\u5ba2\u4eba\u6570\u6025\u5267\u5d29\u6e83\uff0c\u539f\u56e0\u662f\u65b0\u51a0\u75ab\u60c5\u5bfc\u81f4\u5404\u56fd\u5c01\u9501\u8fb9\u5883\u5e76\u6682\u505c\u56fd\u9645\u65c5\u884c\u3002\u8fd9\u4e0d\u7b26\u5408 2020 \u5e74\u4ee5\u524d\u5f3a\u52b2\u7684\u4e0a\u5347\u8d8b\u52bf\u3002",
            },
            {
              qEn: "Maya Bay became famous after the 1999 film \u2018The Beach\u2019. Explain how social media has contributed to overtourism at destinations like Maya Bay.",
              qZh: "\u739b\u96c5\u6e7e\u56e01999\u5e74\u7535\u5f71\u300a\u6d77\u6ee9\u300b\u800c\u95fb\u540d\u3002\u89e3\u91ca\u793e\u4ea4\u5a92\u4f53\u5982\u4f55\u52a0\u5267\u4e86\u739b\u96c5\u6e7e\u7b49\u65c5\u6e38\u76ee\u7684\u5730\u7684\u8fc7\u5ea6\u65c5\u6e38\u3002",
              aEn: "Social media platforms like Instagram and sites like TripAdvisor allow users to share photos and reviews of destinations. When images of beautiful or unusual places spread online, they attract far more visitors than the destination can sustainably manage. Maya Bay\u2019s appearance in a famous film gave it initial fame, and social media amplified this by making it globally recognisable. The result was visitor numbers far exceeding the bay\u2019s carrying capacity, causing environmental damage to coral reefs and marine ecosystems.",
              aZh: "Instagram\u7b49\u793e\u4ea4\u5a92\u4f53\u5e73\u53f0\u548cTripAdvisor\u7b49\u7f51\u7ad9\u5141\u8bb8\u7528\u6237\u5206\u4eab\u65c5\u6e38\u76ee\u7684\u5730\u7684\u7167\u7247\u548c\u8bc4\u8bba\u3002\u5f53\u7f8e\u4e3d\u6216\u72ec\u7279\u5730\u70b9\u7684\u56fe\u7247\u5728\u7f51\u4e0a\u4f20\u64ad\u65f6\uff0c\u5438\u5f15\u7684\u6e38\u5ba2\u5f80\u5f80\u8fdc\u8d85\u8fc7\u5176\u53ef\u6301\u7eed\u627f\u80fd\u7684\u6570\u91cf\u3002\u739b\u96c5\u6e7e\u56e0\u4e00\u90e8\u8457\u540d\u7535\u5f71\u83b7\u5f97\u6700\u521d\u7684\u77e5\u540d\u5ea6\uff0c\u793e\u4ea4\u5a92\u4f53\u5219\u8fdb\u4e00\u6b65\u653e\u5927\u4e86\u8fd9\u4e00\u6548\u5e94\uff0c\u4f7f\u5176\u5168\u7403\u95fb\u540d\u3002\u7ed3\u679c\u6e38\u5ba2\u4eba\u6570\u8fdc\u8fdc\u8d85\u8fc7\u8be5\u6e7e\u7684\u627f\u8f7d\u80fd\u529b\uff0c\u5bfc\u81f4\u73ca\u745a\u793c\u7901\u548c\u6d77\u6d0b\u751f\u6001\u7cfb\u7edf\u904e\u77ad\u73af\u5883\u7834\u574f\u3002",
            },
            {
              qEn: "Maya Bay closed in June 2018 and reopened in January 2022. After closure, reef sharks and ghost crabs returned and over 23,000 corals planted by officials began to grow. Using this evidence, evaluate how effective the management of Maya Bay has been.",
              qZh: "\u739b\u96c5\u6e7e\u4e8e2018\u5e746\u6708\u5c01\u9501\uff0c2022\u5e741\u6708\u91cd\u5f00\u3002\u5c01\u9501\u540e\uff0c\u73ca\u745a\u9cb2\u548c\u5c4c\u7b2c\u87f9\u91cd\u8fd4\uff0c\u5b98\u5458\u79cd\u690d\u76842.3\u4e07\u682e\u73ca\u745a\u5f00\u59cb\u751f\u957f\u3002\u5229\u7528\u8fd9\u4e9b\u8bc1\u636e\uff0c\u8bc4\u4f30\u739b\u96c5\u6e7e\u7684\u7ba1\u7406\u6548\u679c\u5982\u4f55\u3002",
              aEn: "The management of Maya Bay has been largely effective. The evidence of ecological recovery is strong: reef sharks and ghost crabs returned, showing that marine wildlife can recover when visitor pressure is removed. Over 23,000 corals growing from official replanting shows active conservation work. However, the damage took many years to accumulate and required over three years of complete closure to begin to reverse \u2014 which suggests that prevention would have been far better than cure. Long-term sustainability will depend on how visitor numbers are controlled after reopening.",
              aZh: "\u739b\u96c5\u6e7e\u7684\u7ba1\u7406\u603b\u4f53\u6765\u8bf4\u6709\u6548\u3002\u751f\u6001\u6062\u590d\u7684\u8bc1\u636e\u5f88\u5f3a\uff1a\u73ca\u745a\u9cb2\u548c\u5c4c\u7b2c\u87f9\u91cd\u8fd4\uff0c\u8bf4\u660e\u6e38\u5ba2\u538b\u529b\u89e3\u9664\u540e\u6d77\u6d0b\u751f\u7269\u53ef\u4ee5\u6062\u590d\u3002\u5b98\u65b9\u79cd\u690d\u76842.3\u4e07\u682e\u73ca\u745a\u751f\u957f\uff0c\u8bf4\u660e\u6709\u79ef\u6781\u7684\u4fdd\u62a4\u5de5\u4f5c\u5728\u63a8\u8fdb\u3002\u7136\u800c\uff0c\u635f\u5bb3\u7684\u79ef\u7d2f\u5386\u65f6\u591a\u5e74\uff0c\u5e76\u9700\u8981\u5c01\u95ed\u4e09\u5e74\u591a\u624d\u5f00\u59cb\u6062\u590d\u2014\u2014\u8fd9\u8bf4\u660e\u9884\u9632\u8fdc\u80dc\u4e8e\u6cbb\u7597\u3002\u957f\u671f\u53ef\u6301\u7eed\u6027\u53d6\u51b3\u4e8e\u91cd\u5f00\u540e\u6e38\u5ba2\u4eba\u6570\u7684\u63a7\u5236\u65b9\u5f0f\u3002",
            },
            {
              qEn: "Compare mass tourism and ecotourism. Give two differences and explain which you think is more beneficial for local communities.",
              qZh: "\u6bd4\u8f83\u5927\u4f17\u65c5\u6e38\u548c\u751f\u6001\u65c5\u6e38\u3002\u5217\u4e3e\u4e24\u70b9\u4e0d\u540c\u4e4b\u5904\uff0c\u5e76\u89e3\u91ca\u4f60\u8ba4\u4e3a\u54ea\u79cd\u65c5\u6e38\u5bf9\u5f53\u5730\u793e\u533a\u66f4\u6709\u5229\u3002",
              aEn: "Two differences: first, mass tourism involves large numbers of tourists at popular destinations while ecotourism involves small groups visiting natural environments with educational intent. Second, in mass tourism profits often flow to large hotel chains and international companies; in ecotourism profits are intended to reach local communities directly. Ecotourism is arguably more beneficial for local communities because it employs local people, funds conservation, and keeps profits within the area rather than allowing them to leave with international companies.",
              aZh: "\u4e24\u4e2a\u4e0d\u540c\u70b9\uff1a\u7b2c\u4e00\uff0c\u5927\u4f17\u65c5\u6e38\u6d89\u53ca\u5927\u91cf\u6e38\u5ba2\u805a\u96c6\u5728\u70ed\u95e8\u76ee\u7684\u5730\uff0c\u751f\u6001\u65c5\u6e38\u5219\u662f\u5c0f\u578b\u56e2\u4f53\u4ee5\u5177\u6709\u6559\u80b2\u610f\u4e49\u7684\u65b9\u5f0f\u53c2\u89c2\u81ea\u7136\u73af\u5883\u3002\u7b2c\u4e8c\uff0c\u5927\u4f17\u65c5\u6e38\u7684\u5229\u6da6\u5f80\u5f80\u6d41\u5411\u5927\u578b\u9152\u5e97\u8fde\u9501\u548c\u8de8\u56fd\u516c\u53f8\uff1b\u751f\u6001\u65c5\u6e38\u7684\u5229\u6da6\u65e8\u5728\u76f4\u63a5\u6d41\u5165\u5f53\u5730\u793e\u533a\u3002\u751f\u6001\u65c5\u6e38\u5bf9\u5f53\u5730\u793e\u533a\u66f4\u6709\u5229\uff0c\u56e0\u4e3a\u5b83\u96c7\u7528\u5f53\u5730\u4eba\u3001\u8d44\u52a9\u4fdd\u62a4\u5de5\u4f5c\uff0c\u5e76\u5c06\u5229\u6da6\u7559\u5728\u5f53\u5730\uff0c\u800c\u975e\u968f\u8de8\u56fd\u516c\u53f8\u6d41\u5931\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes why mass tourism is considered unsustainable?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u8bf4\u660e\u5927\u4f17\u65c5\u6e38\u88ab\u8ba4\u4e3a\u4e0d\u53ef\u6301\u7eed\u7684\u539f\u56e0\uff1f",
          opts: [
            { en: "It is too expensive for most tourists", zh: "\u5bf9\u5927\u591a\u6570\u6e38\u5ba2\u6765\u8bf4\u592a\u8d35" },
            { en: "Visitor numbers exceed what a destination can manage, causing environmental and social damage", zh: "\u6e38\u5ba2\u4eba\u6570\u8d85\u8fc7\u76ee\u7684\u5730\u7684\u627f\u8f7d\u80fd\u529b\uff0c\u5bfc\u81f4\u73af\u5883\u548c\u793e\u4f1a\u635f\u5bb3" },
            { en: "It only benefits tourists, not local people", zh: "\u5b83\u53ea\u60e0\u53ca\u6e38\u5ba2\uff0c\u4e0d\u60e0\u53ca\u5f53\u5730\u4eba" },
            { en: "It always destroys the natural environment completely", zh: "\u5b83\u5fc5\u7136\u5bfc\u81f4\u81ea\u7136\u73af\u5883\u5b8c\u5168\u6bc1\u574f" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Mass tourism is unsustainable when visitor numbers exceed what a destination can manage \u2014 causing environmental damage such as coral reef destruction, plastic pollution, and loss of local culture. This is exactly what happened at Maya Bay.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5f53\u6e38\u5ba2\u4eba\u6570\u8d85\u8fc7\u76ee\u7684\u5730\u7684\u627f\u8f7d\u80fd\u529b\u65f6\uff0c\u5927\u4f17\u65c5\u6e38\u5c31\u4e0d\u53ef\u6301\u7eed\u2014\u2014\u5bfc\u81f4\u73ca\u745a\u793c\u7901\u88ab\u6bc1\u3001\u5851\u6599\u6c61\u67d3\u548c\u5f53\u5730\u6587\u5316\u4e27\u5931\u7b49\u73af\u5883\u635f\u5bb3\u3002\u8fd9\u6b63\u662f\u739b\u96c5\u6e7e\u53d1\u751f\u7684\u60c5\u51b5\u3002",
          explainWrongEn: "Not quite. Mass tourism is not defined by cost, and it does bring jobs and income to local people \u2014 though unevenly. It does not always destroy the environment completely. The key problem is that visitor numbers exceed what the destination can sustainably manage.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5927\u4f17\u65c5\u6e38\u4e0d\u662f\u7531\u8d39\u7528\u5b9a\u4e49\u7684\uff0c\u5b83\u786e\u5b9e\u80fd\u4e3a\u5f53\u5730\u4eba\u5e26\u6765\u5c31\u4e1a\u673a\u4f1a\u548c\u6536\u5165\u2014\u2014\u5c3d\u7ba1\u5e76\u4e0d\u5747\u5300\u3002\u5b83\u4e5f\u5e76\u975e\u5fc5\u7136\u5bfc\u81f4\u73af\u5883\u5b8c\u5168\u6bc1\u574f\u3002\u6838\u5fc3\u95ee\u9898\u5728\u4e8e\u6e38\u5ba2\u4eba\u6570\u8d85\u8fc7\u76ee\u7684\u5730\u53ef\u53ef\u6301\u7eed\u627f\u8f7d\u7684\u8303\u56f4\u3002",
        },
        {
          type: "quiz",
          qEn: "Which of the following is a key feature of ecotourism that makes it more sustainable than mass tourism?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u662f\u751f\u6001\u65c5\u6e38\u7684\u5173\u952e\u7279\u5f81\uff0c\u4f7f\u5176\u6bd4\u5927\u4f17\u65c5\u6e38\u66f4\u53ef\u6301\u7eed\uff1f",
          opts: [
            { en: "Large numbers of tourists visiting popular beaches and hotels", zh: "\u5927\u91cf\u6e38\u5ba2\u5c55\u7740\u70ed\u95e8\u6d77\u6ee9\u548c\u9152\u5e97" },
            { en: "Profits flowing to large international hotel chains", zh: "\u5229\u6da6\u6d41\u5165\u5927\u578b\u8de8\u56fd\u9152\u5e97\u96c6\u56e2" },
            { en: "Small groups, educational focus, and profits reaching local communities", zh: "\u5c0f\u578b\u56e2\u4f53\u3001\u6ce8\u91cd\u6559\u80b2\u4e14\u5229\u6da6\u6d41\u5165\u5f53\u5730\u793e\u533a" },
            { en: "Using social media to attract as many visitors as possible", zh: "\u901a\u8fc7\u793e\u4ea4\u5a92\u4f53\u5438\u5f15\u5c3d\u53ef\u80fd\u591a\u7684\u6e38\u5ba2" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Ecotourism is characterised by small groups, an educational focus, and profits reaching local communities directly \u2014 rather than flowing to large international companies. It also aims to support conservation rather than damage the environment.",
          explainCorrectZh: "\u6b63\u786e\uff01\u751f\u6001\u65c5\u6e38\u7684\u7279\u5f81\u662f\u5c0f\u578b\u56e2\u4f53\u3001\u6ce8\u91cd\u6559\u80b2\u4e14\u5229\u6da6\u76f4\u63a5\u6d41\u5165\u5f53\u5730\u793e\u533a\u2014\u2014\u800c\u975e\u6d41\u5411\u5927\u578b\u8de8\u56fd\u516c\u53f8\u3002\u5b83\u8fd8\u65e8\u5728\u652f\u6301\u4fdd\u62a4\u5de5\u4f5c\uff0c\u800c\u975e\u635f\u5bb3\u73af\u5883\u3002",
          explainWrongEn: "Not quite. Large crowds, profits to hotel chains, and maximising visitor numbers are all features of mass tourism \u2014 the opposite of ecotourism. The key feature of ecotourism is small groups with an educational focus and profits going to local communities.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5927\u91cf\u6e38\u5ba2\u3001\u5229\u6da6\u6d41\u5165\u9152\u5e97\u96c6\u56e2\u548c\u6700\u5927\u5316\u6e38\u5ba2\u4eba\u6570\u90fd\u662f\u5927\u4f17\u65c5\u6e38\u7684\u7279\u5f81\u2014\u2014\u4e0e\u751f\u6001\u65c5\u6e38\u6070\u6070\u76f8\u53cd\u3002\u751f\u6001\u65c5\u6e38\u7684\u5173\u952e\u7279\u5f81\u662f\u5c0f\u578b\u56e2\u4f53\u3001\u6ce8\u91cd\u6559\u80b2\u4e14\u5229\u6da6\u6d41\u5165\u5f53\u5730\u793e\u533a\u3002",
        },
      ],
    },

  ],
};

export default geographyLearningCheck;
