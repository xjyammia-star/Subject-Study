import { Topic } from "./types";

export const asiaEconomicBoom: Topic = {
  slug: "asia-economic-boom",
  name: "What is the Cause of Asia\u2019s Economic Boom?",
  nameZh: "\u4e9a\u6d32\u7ecf\u6d4e\u8363\u666f\u7684\u539f\u56e0\u662f\u4ec0\u4e48\uff1f",
  subject: "Geography",
  subjectZh: "\u5730\u7406",
  year: "Year 8",
  lessons: [

    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "What is the economy?",
      titleZh: "\u7ecf\u6d4e\u662f\u4ec0\u4e48\uff1f",
      subtitle: "The economy is a system of production, distribution, and consumption \u2014 and understanding it helps explain why some countries are wealthier than others.",
      subtitleZh: "\u7ecf\u6d4e\u662f\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u7684\u7cfb\u7edf\u2014\u2014\u7406\u89e3\u5b83\u6709\u52a9\u4e8e\u89e3\u91ca\u4e3a\u4ec0\u4e48\u67d0\u4e9b\u56fd\u5bb6\u6bd4\u5176\u4ed6\u56fd\u5bb6\u66f4\u5bcc\u88d5\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe what the economy is using the terms production, distribution, and consumption.", zh: "\u6211\u80fd\u8fd0\u7528\u201c\u751f\u4ea7\u201d\u3001\u201c\u5206\u914d\u201d\u548c\u201c\u6d88\u8d39\u201d\u8fd9\u4e09\u4e2a\u6982\u5ff5\u63cf\u8ff0\u7ecf\u6d4e\u3002" },
            { en: "I can explain how the economy is measured using GDP, GNI per capita, and PPP.", zh: "\u6211\u80fd\u89e3\u91ca\u5982\u4f55\u7528GDP\u3001\u4eba\u5747GNI\u548cPPP\u8861\u91cf\u7ecf\u6d4e\u3002" },
            { en: "I can explain why a stronger economy matters for a country\u2019s people.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u66f4\u5f3a\u5927\u7684\u7ecf\u6d4e\u5bf9\u4e00\u4e2a\u56fd\u5bb6\u7684\u4eba\u6c11\u5f88\u91cd\u8981\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The economy is a system involving the production, distribution, and consumption of goods and services. Production means creating goods and services. Distribution means delivering goods and services to people who want or need them. Consumption is when people use the goods and services produced.", zh: "\u7ecf\u6d4e\u662f\u4e00\u4e2a\u6d89\u53ca\u5546\u54c1\u548c\u670d\u52a1\u7684\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u7684\u7cfb\u7edf\u3002\u751f\u4ea7\u662f\u6307\u521b\u9020\u5546\u54c1\u548c\u670d\u52a1\u3002\u5206\u914d\u662f\u6307\u5c06\u5546\u54c1\u548c\u670d\u52a1\u9001\u8fbe\u6709\u9700\u8981\u7684\u4eba\u3002\u6d88\u8d39\u662f\u6307\u4eba\u4eec\u4f7f\u7528\u6240\u751f\u4ea7\u7684\u5546\u54c1\u548c\u670d\u52a1\u3002" },
            { type: "highlight", en: "Why the economy matters: a stronger economy can improve standard of living, improve public services such as healthcare and education, and increase a country\u2019s global influence. The economy affects everyday life for every person in a country.", zh: "\u7ecf\u6d4e\u4e3a\u4ec0\u4e48\u91cd\u8981\uff1a\u66f4\u5f3a\u5927\u7684\u7ecf\u6d4e\u53ef\u4ee5\u63d0\u9ad8\u751f\u6d3b\u6c34\u5e73\uff0c\u5b8c\u5584\u516c\u5171\u670d\u52a1\uff08\u5982\u533b\u7597\u548c\u6559\u80b2\uff09\uff0c\u5e76\u589e\u5f3a\u4e00\u4e2a\u56fd\u5bb6\u7684\u5168\u7403\u5f71\u54cd\u529b\u3002\u7ecf\u6d4e\u5f71\u54cd\u4e00\u4e2a\u56fd\u5bb6\u6bcf\u4e2a\u4eba\u7684\u65e5\u5e38\u751f\u6d3b\u3002" },
            { type: "text", en: "Economies are measured in several ways. GDP (Gross Domestic Product) measures the total value of final goods and services produced in a country. GNI per capita shows average income per person and is used to compare wealth between countries. PPP (Purchasing Power Parity) compares what money can actually buy in different countries, not just the numbers on paper.", zh: "\u7ecf\u6d4e\u53ef\u4ee5\u7528\u591a\u79cd\u65b9\u5f0f\u8861\u91cf\u3002GDP\uff08\u56fd\u5185\u751f\u4ea7\u603b\u503c\uff09\u8861\u91cf\u4e00\u4e2a\u56fd\u5bb6\u751f\u4ea7\u7684\u6240\u6709\u6700\u7ec8\u5546\u54c1\u548c\u670d\u52a1\u7684\u603b\u4ef7\u5024\u3002\u4eba\u5747GNI\u663e\u793a\u6bcf\u4eba\u5e73\u5747\u6536\u5165\uff0c\u7528\u4e8e\u6bd4\u8f83\u56fd\u5bb6\u95f4\u7684\u8d22\u5bcc\u6c34\u5e73\u3002PPP\uff08\u8d2d\u4e70\u529b\u5e73\u4ef7\uff09\u6bd4\u8f83\u4e0d\u540c\u56fd\u5bb6\u91d1\u94b1\u5b9e\u9645\u80fd\u8d2d\u4e70\u7684\u5546\u54c1\u548c\u670d\u52a1\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u6570\u5b57\u4e0a\u7684\u6bd4\u8f83\u3002" },
            { type: "example", en: "For example: if a meal costs \u00a310 in the UK but an equivalent meal costs \u00a35 in another country, then the same amount of money buys more in the cheaper country. PPP accounts for these real differences in buying power, making it a fairer comparison than GDP or GNI alone.", zh: "\u4f8b\u5982\uff1a\u5982\u679c\u82f1\u56fd\u4e00\u987f\u996d\u82b110\u82f1\u9551\uff0c\u800c\u53e6\u4e00\u4e2a\u56fd\u5bb6\u7684\u540c\u7b49\u996d\u98df\u53ea\u9700\u00a35\uff0c\u90a3\u4e48\u540c\u6837\u7684\u9322\u5728\u4f4e\u7269\u4ef7\u56fd\u5bb6\u80fd\u4e70\u5230\u66f4\u591a\u7684\u4e1c\u897f\u3002PPP\u8003\u8651\u5230\u8fd9\u4e9b\u8d2d\u4e70\u529b\u7684\u5b9e\u9645\u5dee\u5f02\uff0c\u6bd4\u5355\u72ec\u4f7f\u7528GDP\u6216GNI\u66f4\u516c\u5e73\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Economy", zh: "\u7ecf\u6d4e", defEn: "A system involving the production, distribution, and consumption of goods and services.", defZh: "\u6d89\u53ca\u5546\u54c1\u548c\u670d\u52a1\u7684\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u7684\u7cfb\u7edf\u3002" },
            { en: "GDP", zh: "\u56fd\u5185\u751f\u4ea7\u603b\u503c", defEn: "Gross Domestic Product \u2014 the total value of goods and services produced in a country.", defZh: "\u56fd\u5185\u751f\u4ea7\u603b\u503c\u2014\u2014\u4e00\u4e2a\u56fd\u5bb6\u751f\u4ea7\u7684\u5546\u54c1\u548c\u670d\u52a1\u603b\u4ef7\u5024\u3002" },
            { en: "PPP", zh: "\u8d2d\u4e70\u529b\u5e73\u4ef7", defEn: "Purchasing Power Parity \u2014 a measure of what money can actually buy in different countries.", defZh: "\u8d2d\u4e70\u529b\u5e73\u4ef7\u2014\u2014\u8861\u91cf\u4e0d\u540c\u56fd\u5bb6\u91d1\u9322\u5b9e\u9645\u8d2d\u4e70\u529b\u7684\u6307\u6807\u3002" },
            { en: "Standard of living", zh: "\u751f\u6d3b\u6c34\u5e73", defEn: "The level of comfort, material goods, and services available to a person or group.", defZh: "\u4e00\u4e2a\u4eba\u6216\u7fa4\u4f53\u53ef\u83b7\u5f97\u7684\u8212\u9002\u7a0b\u5ea6\u3001\u7269\u8d28\u5546\u54c1\u548c\u670d\u52a1\u6c34\u5e73\u3002" },
          ],
        },
        { type: "image", caption: "A diagram showing the circular flow of the economy: production, distribution, and consumption.", captionZh: "\u5c55\u793a\u7ecf\u6d4e\u5faa\u73af\u6d41\u7a0b\u7684\u793a\u610f\u56fe\uff1a\u751f\u4ea7\u3001\u5206\u914d\u4e0e\u6d88\u8d39\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Key Economic Concept", labelZh: "\u91cd\u8981\u7ecf\u6d4e\u6982\u5ff5", en: "The economy is not just about money \u2014 it is about how societies organise the production, distribution, and consumption of everything people need and want. Measuring it through GDP, GNI per capita, and PPP gives different but complementary pictures of a country\u2019s wealth.", zh: "\u7ecf\u6d4e\u4e0d\u4ec5\u4ec5\u662f\u5173\u4e8e\u91d1\u9322\u7684\u2014\u2014\u5b83\u662f\u5173\u4e8e\u793e\u4f1a\u5982\u4f55\u7ec4\u7ec7\u4eba\u4eec\u6240\u9700\u6240\u6c42\u7684\u4e00\u5207\u4e8b\u7269\u7684\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u3002\u901a\u8fc7GDP\u3001\u4eba\u5747GNI\u548cPPP\u8861\u91cf\uff0c\u53ef\u4ee5\u4ece\u4e0d\u540c\u4f46\u4e92\u8865\u7684\u89d2\u5ea6\u5448\u73b0\u4e00\u4e2a\u56fd\u5bb6\u7684\u8d22\u5bcc\u72b6\u51b5\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain the difference between production, distribution, and consumption using a real-world example.", qZh: "\u7528\u4e00\u4e2a\u73b0\u5b9e\u4e16\u754c\u7684\u4f8b\u5b50\u89e3\u91ca\u751f\u4ea7\u3001\u5206\u914d\u548c\u6d88\u8d39\u4e4b\u95f4\u7684\u5dee\u5f02\u3002", aEn: "For example, with a mobile phone: production is the factory making the phone; distribution is shipping and selling it through stores or online; consumption is when a person buys and uses the phone. The economy involves all three stages working together.", aZh: "\u4ee5\u624b\u673a\u4e3a\u4f8b\uff1a\u751f\u4ea7\u662f\u5de5\u5382\u5236\u9020\u624b\u673a\uff1b\u5206\u914d\u662f\u901a\u8fc7\u5b9e\u5e97\u6216\u7f51\u7edc\u8fd0\u8f93\u548c\u9500\u552e\u624b\u673a\uff1b\u6d88\u8d39\u662f\u4e00\u4e2a\u4eba\u8d2d\u4e70\u5e76\u4f7f\u7528\u624b\u673a\u3002\u7ecf\u6d4e\u6d89\u53ca\u4e09\u4e2a\u9636\u6bb5\u7684\u534f\u540c\u8fd0\u4f5c\u3002" },
            { qEn: "Why might PPP be a more useful measure than GDP alone when comparing living standards between countries?", qZh: "\u4e3a\u4ec0\u4e48\u5728\u6bd4\u8f83\u56fd\u5bb6\u95f4\u751f\u6d3b\u6c34\u5e73\u65f6\uff0cPPP\u53ef\u80fd\u6bd4\u5355\u72ec\u4f7f\u7528GDP\u66f4\u6709\u7528\uff1f", aEn: "GDP shows the total economic output of a country but does not account for the cost of living. PPP adjusts for what money can actually buy in each country. A person earning $20,000 in a country where everything is cheap may have a higher real standard of living than someone earning $30,000 in a very expensive country.", aZh: "GDP\u663e\u793a\u4e86\u4e00\u4e2a\u56fd\u5bb6\u7684\u603b\u7ecf\u6d4e\u4ea7\u51fa\uff0c\u4f46\u6ca1\u6709\u8003\u8651\u751f\u6d3b\u6210\u672c\u3002PPP\u8c03\u6574\u4e86\u91d1\u9322\u5728\u6bcf\u4e2a\u56fd\u5bb6\u7684\u5b9e\u9645\u8d2d\u4e70\u529b\u3002\u4e00\u4e2a\u5728\u7269\u4ef7\u4fbf\u5b9c\u7684\u56fd\u5bb6\u5e74\u6536\u2000\u7f8e\u5143\u7684\u4eba\uff0c\u5176\u5b9e\u9645\u751f\u6d3b\u6c34\u5e73\u53ef\u80fd\u9ad8\u4e8e\u5728\u7269\u4ef7\u8d35\u7684\u56fd\u5bb6\u5e74\u65363\u4e07\u7f8e\u5143\u7684\u4eba\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which term describes the stage when people use the goods and services that have been produced?",
          qZh: "\u54ea\u4e2a\u6837\u8bcd\u63cf\u8ff0\u4e86\u4eba\u4eec\u4f7f\u7528\u5df2\u751f\u4ea7\u7684\u5546\u54c1\u548c\u670d\u52a1\u7684\u9636\u6bb5\uff1f",
          opts: [
            { en: "Production", zh: "\u751f\u4ea7" },
            { en: "Distribution", zh: "\u5206\u914d" },
            { en: "Consumption", zh: "\u6d88\u8d39" },
            { en: "Investment", zh: "\u6295\u8d44" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Consumption is when people use the goods and services that have been produced and distributed. It is the final stage in the economic cycle.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6d88\u8d39\u662f\u6307\u4eba\u4eec\u4f7f\u7528\u5df2\u751f\u4ea7\u548c\u5206\u914d\u7684\u5546\u54c1\u548c\u670d\u52a1\u7684\u9636\u6bb5\u3002\u8fd9\u662f\u7ecf\u6d4e\u5faa\u73af\u7684\u6700\u540e\u4e00\u4e2a\u73af\u8282\u3002",
          explainWrongEn: "Not quite. Production is creating goods and services; distribution is delivering them. Investment is putting money into something to generate future income. The correct answer is consumption.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u751f\u4ea7\u662f\u521b\u9020\u5546\u54c1\u548c\u670d\u52a1\uff1b\u5206\u914d\u662f\u8ffd\u9001\u5546\u54c1\u548c\u670d\u52a1\u3002\u6295\u8d44\u662f\u628a\u91d1\u9322\u6295\u5165\u67d0\u7269\u4ee5\u4ea7\u751f\u672a\u6765\u6536\u5165\u3002\u6b63\u786e\u7b54\u6848\u662f\u6d88\u8d39\u3002",
        },
      ],
    },

    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "Economic Sectors",
      titleZh: "\u7ecf\u6d4e\u90e8\u95e8",
      subtitle: "Every economy is divided into sectors \u2014 and the balance between sectors reveals how developed a country is.",
      subtitleZh: "\u6bcf\u4e2a\u7ecf\u6d4e\u90fd\u5212\u5206\u4e3a\u4e0d\u540c\u90e8\u95e8\u2014\u2014\u5404\u90e8\u95e8\u4e4b\u95f4\u7684\u5e73\u8861\u5173\u7cfb\u63ed\u793a\u4e86\u4e00\u4e2a\u56fd\u5bb6\u7684\u53d1\u5c55\u7a0b\u5ea6\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can identify and describe the four economic sectors: primary, secondary, tertiary, and quaternary.", zh: "\u6211\u80fd\u8bc6\u522b\u5e76\u63cf\u8ff0\u56db\u4e2a\u7ecf\u6d4e\u90e8\u95ee\uff1a\u7b2c\u4e00\u4ea7\u4e1a\u3001\u7b2c\u4e8c\u4ea7\u4e1a\u3001\u7b2c\u4e09\u4ea7\u4e1a\u548c\u7b2c\u56db\u4ea7\u4e1a\u3002" },
            { en: "I can explain how economic structure relates to a country\u2019s level of development.", zh: "\u6211\u80fd\u89e3\u91ca\u7ecf\u6d4e\u7ed3\u6784\u4e0e\u56fd\u5bb6\u53d1\u5c55\u6c34\u5e73\u7684\u5173\u7cfb\u3002" },
            { en: "I can describe what a production chain is and give an example.", zh: "\u6211\u80fd\u63cf\u8ff0\u751f\u4ea7\u94fe\u7684\u542b\u4e49\u5e76\u4e3e\u4f8b\u8bf4\u660e\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A production chain is the sequence of stages involved in creating and distributing a product. Each stage belongs to a different economic sector. The four sectors are: primary (extracting raw materials), secondary (manufacturing), tertiary (services), and quaternary (knowledge and research).", zh: "\u751f\u4ea7\u94fe\u662f\u521b\u9020\u548c\u5206\u914d\u4e00\u4e2a\u4ea7\u54c1\u6240\u6d89\u53ca\u7684\u4e00\u7cfb\u5217\u9636\u6bb5\u3002\u6bcf\u4e2a\u9636\u6bb5\u5c5e\u4e8e\u4e0d\u540c\u7684\u7ecf\u6d4e\u90e8\u95e8\u3002\u56db\u4e2a\u90e8\u95e8\u5206\u522b\u662f\uff1a\u7b2c\u4e00\u4ea7\u4e1a\uff08\u63d0\u53d6\u539f\u6750\u6599\uff09\u3001\u7b2c\u4e8c\u4ea7\u4e1a\uff08\u5236\u9020\u4e1a\uff09\u3001\u7b2c\u4e09\u4ea7\u4e1a\uff08\u670d\u52a1\u4e1a\uff09\u548c\u7b2c\u56db\u4ea7\u4e1a\uff08\u77e5\u8bc6\u548c\u7814\u7a76\uff09\u3002" },
            { type: "highlight", en: "Primary sector: extracting raw materials from the earth. Country examples: Ghana, Nepal. Secondary sector: manufacturing and processing raw materials into products. Country examples: China, Vietnam. Tertiary sector: providing services to people and businesses. Country examples: United States, Spain. Quaternary sector: knowledge-based work such as research and development. Country examples: Japan, Sweden.", zh: "\u7b2c\u4e00\u4ea7\u4e1a\uff1a\u4ece\u5730\u7403\u63d0\u53d6\u539f\u6750\u6599\u3002\u4ee3\u8868\u56fd\u5bb6\uff1a\u52a0\u7eb3\u3001\u5c3c\u6cca\u5c14\u3002\u7b2c\u4e8c\u4ea7\u4e1a\uff1a\u5c06\u539f\u6750\u6599\u52a0\u5de5\u5236\u9020\u6210\u4ea7\u54c1\u3002\u4ee3\u8868\u56fd\u5bb6\uff1a\u4e2d\u56fd\u3001\u8d8a\u5357\u3002\u7b2c\u4e09\u4ea7\u4e1a\uff1a\u4e3a\u4eba\u548c\u4f01\u4e1a\u63d0\u4f9b\u670d\u52a1\u3002\u4ee3\u8868\u56fd\u5bb6\uff1a\u7f8e\u56fd\u3001\u897f\u73ed\u7259\u3002\u7b2c\u56db\u4ea7\u4e1a\uff1a\u7814\u7a76\u4e0e\u5f00\u53d1\u7b49\u77e5\u8bc6\u5bc6\u96c6\u578b\u5de5\u4f5c\u3002\u4ee3\u8868\u56fd\u5bb6\uff1a\u65e5\u672c\u3001\u745e\u5178\u3002" },
            { type: "text", en: "The balance of sectors in a country\u2019s economy reveals its level of development. Developing countries tend to have a large proportion of workers in the primary sector. Emerging economies have growing secondary sectors as manufacturing expands. Developed and highly developed countries have larger tertiary and quaternary sectors as their economies become more focused on services and knowledge.", zh: "\u4e00\u4e2a\u56fd\u5bb6\u7ecf\u6d4e\u4e2d\u5404\u90e8\u95e8\u7684\u5e73\u8861\u5173\u7cfb\u63ed\u793a\u4e86\u5b83\u7684\u53d1\u5c55\u6c34\u5e73\u3002\u53d1\u5c55\u4e2d\u56fd\u5bb6\u7b2c\u4e00\u4ea7\u4e1a\u52b3\u52a8\u8005\u6bd4\u4f8b\u8f83\u5927\u3002\u65b0\u5174\u5e02\u573a\u7ecf\u6d4e\u4f53\u968f\u5236\u9020\u4e1a\u6269\u5c55\u800c\u7b2c\u4e8c\u4ea7\u4e1a\u4e0d\u65ad\u589e\u957f\u3002\u53d1\u5c55\u548c\u9ad8\u5ea6\u53d1\u5c55\u7684\u56fd\u5bb6\u7b2c\u4e09\u4ea7\u4e1a\u548c\u7b2c\u56db\u4ea7\u4e1a\u6bd4\u4f8b\u8f83\u5927\uff0c\u5176\u7ecf\u6d4e\u8d8a\u6765\u8d8a\u4ee5\u670d\u52a1\u548c\u77e5\u8bc6\u4e3a\u4e3b\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Primary sector", zh: "\u7b2c\u4e00\u4ea7\u4e1a", defEn: "The part of the economy that extracts raw materials from the earth, such as farming, fishing, and mining.", defZh: "\u7ecf\u6d4e\u4e2d\u4ece\u5730\u7403\u63d0\u53d6\u539f\u6750\u6599\u7684\u90e8\u5206\uff0c\u5982\u519c\u4e1a\u3001\u6355\u9c7c\u548c\u91c7\u77ff\u3002" },
            { en: "Secondary sector", zh: "\u7b2c\u4e8c\u4ea7\u4e1a", defEn: "The part of the economy that manufactures raw materials into finished products.", defZh: "\u7ecf\u6d4e\u4e2d\u5c06\u539f\u6750\u6599\u52a0\u5de5\u5236\u9020\u6210\u6210\u54c1\u7684\u90e8\u5206\u3002" },
            { en: "Tertiary sector", zh: "\u7b2c\u4e09\u4ea7\u4e1a", defEn: "The part of the economy that provides services, such as retail, healthcare, and education.", defZh: "\u7ecf\u6d4e\u4e2d\u63d0\u4f9b\u670d\u52a1\u7684\u90e8\u5206\uff0c\u5982\u96f6\u552e\u3001\u533b\u7597\u548c\u6559\u80b2\u3002" },
            { en: "Production chain", zh: "\u751f\u4ea7\u94fe", defEn: "The sequence of stages involved in creating and distributing a product, from raw material to consumer.", defZh: "\u521b\u9020\u548c\u5206\u914d\u4e00\u4e2a\u4ea7\u54c1\u6240\u6d89\u53ca\u7684\u4e00\u7cfb\u5217\u9636\u6bb5\uff0c\u4ece\u539f\u6750\u6599\u5230\u6d88\u8d39\u8005\u3002" },
          ],
        },
        { type: "image", caption: "A diagram of the four economic sectors with country examples for each.", captionZh: "\u56db\u4e2a\u7ecf\u6d4e\u90e8\u95e8\u793a\u610f\u56fe\uff0c\u5404\u9644\u5177\u4f53\u56fd\u5bb6\u4e3e\u4f8b\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Economic Development Pattern", labelZh: "\u7ecf\u6d4e\u53d1\u5c55\u89c4\u5f8b", en: "As countries develop, workers tend to move from primary sector jobs into secondary, then tertiary and quaternary work. China and Vietnam are currently strong in secondary sector manufacturing, while Japan and Sweden have large quaternary sectors.", zh: "\u968f\u7740\u56fd\u5bb6\u53d1\u5c55\uff0c\u52b3\u52a8\u8005\u5f80\u5f80\u4ece\u7b2c\u4e00\u4ea7\u4e1a\u5de5\u4f5c\u8f6c\u5411\u7b2c\u4e8c\u4ea7\u4e1a\uff0c\u518d\u5230\u7b2c\u4e09\u4ea7\u4e1a\u548c\u7b2c\u56db\u4ea7\u4e1a\u3002\u4e2d\u56fd\u548c\u8d8a\u5357\u76ee\u524d\u5728\u7b2c\u4e8c\u4ea7\u4e1a\u5236\u9020\u4e1a\u5b9e\u529b\u5f3a\u5927\uff0c\u800c\u65e5\u672c\u548c\u745e\u5178\u5219\u62e5\u6709\u5e9e\u5927\u7684\u7b2c\u56db\u4ea7\u4e1a\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Why are developing countries more likely to have larger primary sectors than developed countries?", qZh: "\u4e3a\u4ec0\u4e48\u53d1\u5c55\u4e2d\u56fd\u5bb6\u6bd4\u53d1\u5c55\u56fd\u5bb6\u66f4\u53ef\u80fd\u62e5\u6709\u8f83\u5927\u7684\u7b2c\u4e00\u4ea7\u4e1a\uff1f", aEn: "Developing countries often lack the technology, capital, and infrastructure needed for manufacturing or services. Farming, fishing, and mining require fewer complex inputs and are accessible even with limited investment. As countries gain wealth and infrastructure, workers can move into higher-value sectors.", aZh: "\u53d1\u5c55\u4e2d\u56fd\u5bb6\u901a\u5e38\u7f3a\u4e4f\u5236\u9020\u4e1a\u6216\u670d\u52a1\u4e1a\u6240\u9700\u7684\u6280\u672f\u3001\u8d44\u672c\u548c\u57fa\u7840\u8bbe\u65bd\u3002\u519c\u4e1a\u3001\u6355\u9c7c\u548c\u91c7\u77ff\u6240\u9700\u6295\u5165\u8f83\u5c11\uff0c\u5373\u4f7f\u6295\u8d44\u6709\u9650\u4e5f\u80fd\u8fdb\u884c\u3002\u968f\u7740\u56fd\u5bb6\u53d8\u5f97\u5bcc\u88d5\u4e14\u57fa\u7840\u8bbe\u65bd\u5b8c\u5584\uff0c\u52b3\u52a8\u8005\u53ef\u4ee5\u8f6c\u5165\u9ad8\u4ef7\u5024\u90e8\u95e8\u3002" },
            { qEn: "Give one example of a product and trace it through the production chain, naming which sector each stage belongs to.", qZh: "\u4e3e\u4e00\u4e2a\u4ea7\u54c1\u7684\u4f8b\u5b50\uff0c\u5e76\u8ffd\u8e2a\u5176\u751f\u4ea7\u94fe\uff0c\u6307\u51fa\u6bcf\u4e2a\u9636\u6bb5\u5c5e\u4e8e\u54ea\u4e2a\u90e8\u95e8\u3002", aEn: "Example: a school uniform. Primary sector: growing cotton or making synthetic fabric. Secondary sector: cutting and sewing the uniform in a factory. Tertiary sector: delivering and selling the uniform in a shop. Each stage adds value to the product.", aZh: "\u4e3e\u4f8b\uff1a\u6821\u670d\u3002\u7b2c\u4e00\u4ea7\u4e1a\uff1a\u79cd\u690d\u68c9\u82b1\u6216\u5236\u9020\u5408\u6210\u9762\u6599\u3002\u7b2c\u4e8c\u4ea7\u4e1a\uff1a\u5728\u5de5\u5382\u88c1\u526a\u548c\u7f1d\u5236\u6821\u670d\u3002\u7b2c\u4e09\u4ea7\u4e1a\uff1a\u5c06\u6821\u670d\u8fd0\u8f93\u5e76\u5728\u5546\u5e97\u51fa\u552e\u3002\u6bcf\u4e2a\u9636\u6bb5\u90fd\u4e3a\u4ea7\u54c1\u589e\u52a0\u4ef7\u5024\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which economic sector does a factory worker in Vietnam assembling electronics belong to?",
          qZh: "\u8d8a\u5357\u4e00\u540d\u5728\u5de5\u5382\u88c5\u914d\u7535\u5b50\u4ea7\u54c1\u7684\u5de5\u4eba\u5c5e\u4e8e\u54ea\u4e2a\u7ecf\u6d4e\u90e8\u95e8\uff1f",
          opts: [
            { en: "Primary", zh: "\u7b2c\u4e00\u4ea7\u4e1a" },
            { en: "Secondary", zh: "\u7b2c\u4e8c\u4ea7\u4e1a" },
            { en: "Tertiary", zh: "\u7b2c\u4e09\u4ea7\u4e1a" },
            { en: "Quaternary", zh: "\u7b2c\u56db\u4ea7\u4e1a" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Manufacturing and assembling products in a factory is secondary sector work. Vietnam is a strong example of a country with a large and growing secondary sector.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5728\u5de5\u5382\u5236\u9020\u548c\u88c5\u914d\u4ea7\u54c1\u5c5e\u4e8e\u7b2c\u4e8c\u4ea7\u4e1a\u3002\u8d8a\u5357\u662f\u62e5\u6709\u5e9e\u5927\u4e14\u4e0d\u65ad\u589e\u957f\u7684\u7b2c\u4e8c\u4ea7\u4e1a\u7684\u5178\u578b\u4f8b\u5b50\u3002",
          explainWrongEn: "Not quite. Primary is extracting raw materials. Tertiary is services. Quaternary is knowledge work like research. Factory assembly is secondary. The correct answer is Secondary.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7b2c\u4e00\u4ea7\u4e1a\u662f\u63d0\u53d6\u539f\u6750\u6599\u3002\u7b2c\u4e09\u4ea7\u4e1a\u662f\u670d\u52a1\u4e1a\u3002\u7b2c\u56db\u4ea7\u4e1a\u662f\u7814\u7a76\u7b49\u77e5\u8bc6\u5de5\u4f5c\u3002\u5de5\u5382\u88c5\u914d\u5c5e\u4e8e\u7b2c\u4e8c\u4ea7\u4e1a\u3002\u6b63\u786e\u7b54\u6848\u662f\u7b2c\u4e8c\u4ea7\u4e1a\u3002",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Causes of economic growth",
      titleZh: "\u7ecf\u6d4e\u589e\u957f\u7684\u539f\u56e0",
      subtitle: "Asia\u2019s economic rise was driven by foreign investment, expanding education, and active government policy \u2014 not by one factor alone.",
      subtitleZh: "\u4e9a\u6d32\u7684\u7ecf\u6d4e\u5d1b\u8d77\u7531\u5916\u56fd\u6295\u8d44\u3001\u6269\u5c55\u7684\u6559\u80b2\u548c\u653f\u5e9c\u7684\u79ef\u6781\u653f\u7b56\u5171\u540c\u63a8\u52a8\u2014\u2014\u800c\u975e\u5355\u4e00\u56e0\u7d20\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain how foreign direct investment (FDI) helped Asian economies grow.", zh: "\u6211\u80fd\u89e3\u91ca\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff08FDI\uff09\u5982\u4f55\u5e2e\u52a9\u4e9a\u6d32\u7ecf\u6d4e\u589e\u957f\u3002" },
            { en: "I can describe how investment in education supports economic development.", zh: "\u6211\u80fd\u63cf\u8ff0\u6559\u80b2\u6295\u8d44\u5982\u4f55\u652f\u6301\u7ecf\u6d4e\u53d1\u5c55\u3002" },
            { en: "I can explain how government policies helped shape Asia\u2019s economic growth.", zh: "\u6211\u80fd\u89e3\u91ca\u653f\u5e9c\u653f\u7b56\u5982\u4f55\u5e2e\u52a9\u5851\u9020\u4e9a\u6d32\u7ecf\u6d4e\u589e\u957f\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Asia\u2019s wealth has grown dramatically over the past 70 years. This growth did not happen automatically. Three key reasons explain it: foreign direct investment, increasing education, and government control of the economy.", zh: "\u8fc7\u53bb70\u5e74\u95f4\uff0c\u4e9a\u6d32\u7684\u8d22\u5bcc\u5927\u5e45\u589e\u957f\u3002\u8fd9\u4e00\u589e\u957f\u5e76\u975e\u81ea\u52a8\u53d1\u751f\u3002\u4e09\u4e2a\u5173\u952e\u539f\u56e0\u53ef\u4ee5\u89e3\u91ca\uff1a\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u3001\u6269\u5c55\u6559\u80b2\u548c\u653f\u5e9c\u5bf9\u7ecf\u6d4e\u7684\u63a7\u5236\u3002" },
            { type: "highlight", en: "Reason 1 \u2014 Foreign Direct Investment (FDI): After World War II, many Asian countries attracted major FDI, especially into manufacturing, factories, and infrastructure. Effects include: job creation, technology transfer, skill transfer, increased trade, and rising national wealth. China is the clearest example.", zh: "\u539f\u56e0\u4e00\u2014\u2014\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff08FDI\uff09\uff1a\u4e8c\u6218\u540e\uff0c\u8bb8\u591a\u4e9a\u6d32\u56fd\u5bb6\u5438\u5f15\u4e86\u5927\u91cf\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff0c\u5c24\u5176\u662f\u6295\u5165\u5236\u9020\u4e1a\u3001\u5de5\u5382\u548c\u57fa\u7840\u8bbe\u65bd\u3002\u5176\u6548\u679c\u5305\u62ec\uff1a\u521b\u9020\u5c31\u4e1a\u673a\u4f1a\u3001\u6280\u672f\u8f6c\u8ba9\u3001\u6280\u80fd\u8f6c\u8ba9\u3001\u4e70\u5c04\u589e\u52a0\u548c\u56fd\u5bb6\u8d22\u5bcc\u589e\u957f\u3002\u4e2d\u56fd\u662f\u6700\u5178\u578b\u7684\u4f8b\u5b50\u3002" },
            { type: "text", en: "Reason 2 \u2014 Increasing education: As countries became richer they invested more in education. This allowed people to move from lower-skilled work into higher-skilled jobs such as banking and research. Education also promotes social mobility, new ideas and businesses, reduced ignorance, and improved security later in life.", zh: "\u539f\u56e0\u4e8c\u2014\u2014\u6269\u5c55\u6559\u80b2\uff1a\u968f\u7740\u56fd\u5bb6\u8d8a\u6765\u8d8a\u5bcc\u88d5\uff0c\u5b83\u4eec\u5728\u6559\u80b2\u4e0a\u6295\u5165\u66f4\u591a\u3002\u8fd9\u4f7f\u4eba\u4eec\u80fd\u591f\u4ece\u4f4e\u6280\u80fd\u5de5\u4f5c\u8f6c\u5411\u9ad8\u6280\u80fd\u5c82\u4f4d\uff0c\u5982\u91d1\u878d\u548c\u7814\u7a76\u3002\u6559\u80b2\u8fd8\u4fc3\u8fdb\u793e\u4f1a\u6d41\u52a8\u3001\u65b0\u601d\u60f3\u548c\u65b0\u4e1a\u52a1\u3001\u51cf\u5c11\u6587\u76f2\u5e76\u6539\u5584\u665a\u5e74\u751f\u6d3b\u4fdd\u969c\u3002" },
            { type: "example", en: "Reason 3 \u2014 Government control: Governments actively shaped growth by guiding industry through tax laws, increasing exports, limiting some imports to protect local industries, and trying to remain less dependent on outside suppliers. This shows that Asia\u2019s economic growth was politically managed, not just the result of market forces alone.", zh: "\u539f\u56e0\u4e09\u2014\u2014\u653f\u5e9c\u63a7\u5236\uff1a\u653f\u5e9c\u901a\u8fc7\u7a0e\u6cd5\u5f15\u5bfc\u4e0a\u4e1a\u53d1\u5c55\u3001\u589e\u52a0\u51fa\u53e3\u3001\u9650\u5236\u90e8\u5206\u8fdb\u53e3\u4ee5\u4fdd\u62a4\u672c\u5730\u4ea7\u4e1a\u3001\u5e76\u5c3d\u91cf\u51cf\u5c11\u5bf9\u5916\u90e8\u4f9b\u5e94\u5546\u7684\u4f9d\u8d56\uff0c\u79ef\u6781\u5f15\u5bfc\u7ecf\u6d4e\u589e\u957f\u3002\u8fd9\u8bf4\u660e\u4e9a\u6d32\u7684\u7ecf\u6d4e\u589e\u957f\u662f\u653f\u6cbb\u5c42\u9762\u4e3b\u52a8\u7ba1\u7406\u7684\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5e02\u573a\u529b\u91cf\u7684\u7ed3\u679c\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Foreign Direct Investment (FDI)", zh: "\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff08FDI\uff09", defEn: "Investment made by a company or government from one country into businesses or infrastructure in another country.", defZh: "\u4e00\u4e2a\u56fd\u5bb6\u7684\u516c\u53f8\u6216\u653f\u5e9c\u5bf9\u53e6\u4e00\u4e2a\u56fd\u5bb6\u7684\u4f01\u4e1a\u6216\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u7684\u6295\u8d44\u3002" },
            { en: "Technology transfer", zh: "\u6280\u672f\u8f6c\u8ba9", defEn: "The process by which a company or country shares its technical knowledge or equipment with another.", defZh: "\u4e00\u4e2a\u516c\u53f8\u6216\u56fd\u5bb6\u5c06\u5176\u6280\u672f\u77e5\u8bc6\u6216\u8bbe\u5907\u5206\u4eab\u7ed9\u53e6\u4e00\u4e2a\u7684\u8fc7\u7a0b\u3002" },
            { en: "Social mobility", zh: "\u793e\u4f1a\u6d41\u52a8", defEn: "The ability of people to move between different levels of wealth, income, or social status.", defZh: "\u4eba\u4eec\u5728\u4e0d\u540c\u8d22\u5bcc\u3001\u6536\u5165\u6216\u793e\u4f1a\u5730\u4f4d\u4e4b\u95f4\u6d41\u52a8\u7684\u80fd\u529b\u3002" },
            { en: "Export", zh: "\u51fa\u53e3", defEn: "Goods or services sold by one country to another country.", defZh: "\u4e00\u4e2a\u56fd\u5bb6\u5bfc\u5165\u5356\u7ed9\u53e6\u4e00\u4e2a\u56fd\u5bb6\u7684\u5546\u54c1\u6216\u670d\u52a1\u3002" },
          ],
        },
        { type: "image", caption: "A chart showing the three main causes of Asia\u2019s economic growth: FDI, education, and government policy.", captionZh: "\u5c55\u793a\u4e9a\u6d32\u7ecf\u6d4e\u589e\u957f\u4e09\u5927\u4e3b\u56e0\u7684\u56fe\u8868\uff1a\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u3001\u6559\u80b2\u4e0e\u653f\u5e9c\u653f\u7b56\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Key Geographical Explanation", labelZh: "\u91cd\u8981\u5730\u7406\u5b66\u89e3\u91ca", en: "Asia\u2019s economic growth was driven by three interconnected factors: FDI brought capital, jobs, and technology; investment in education created a more skilled workforce; and government policies shaped which industries grew and how dependent countries were on foreign markets.", zh: "\u4e9a\u6d32\u7684\u7ecf\u6d4e\u589e\u957f\u7531\u4e09\u4e2a\u76f8\u4e92\u5173\u8054\u7684\u56e0\u7d20\u63a8\u52a8\uff1a\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u5e26\u6765\u4e86\u8d44\u672c\u3001\u5c31\u4e1a\u673a\u4f1a\u548c\u6280\u672f\uff1b\u6559\u80b2\u6295\u8d44\u57f9\u517b\u4e86\u66f4\u5177\u6280\u80fd\u7684\u52b3\u52a8\u529b\uff1b\u653f\u5e9c\u653f\u7b56\u5851\u9020\u4e86\u54ea\u4e9b\u4e1a\u7b2c\u5f97\u5230\u53d1\u5c55\u4ee5\u53ca\u5404\u56fd\u5bf9\u5916\u56fd\u5e02\u573a\u7684\u4f9d\u8d56\u7a0b\u5ea6\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain two ways in which FDI can help an Asian country\u2019s economy grow.", qZh: "\u89e3\u91ca\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u5982\u4f55\u5e2e\u52a9\u4e9a\u6d32\u56fd\u5bb6\u7ecf\u6d4e\u589e\u957f\u7684\u4e24\u4e2a\u65b9\u9762\u3002", aEn: "First, FDI creates jobs by funding factories and businesses. Workers earn wages, which they spend in the local economy. Second, FDI brings technology transfer \u2014 new equipment and working methods help local workers become more productive, which increases economic output.", aZh: "\u7b2c\u4e00\uff0c\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u901a\u8fc7\u8d44\u52a9\u5de5\u5382\u548c\u4e1a\u52a1\u521b\u9020\u5c31\u4e1a\u673a\u4f1a\u3002\u5de5\u4eba\u83b7\u5f97\u5de5\u8d44\uff0c\u5e76\u5c06\u5176\u82b1\u8d39\u5728\u5f53\u5730\u7ecf\u6d4e\u4e2d\u3002\u7b2c\u4e8c\uff0c\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u5e26\u6765\u6280\u672f\u8f6c\u8ba9\u2014\u2014\u65b0\u8bbe\u5907\u548c\u5de5\u4f5c\u65b9\u6cd5\u5e2e\u52a9\u5f53\u5730\u5de5\u4eba\u63d0\u9ad8\u751f\u4ea7\u529b\uff0c\u4ece\u800c\u589e\u52a0\u7ecf\u6d4e\u4ea7\u51fa\u3002" },
            { qEn: "Which of the three causes of economic growth do you think was most important for Asia? Explain your reasoning.", qZh: "\u4f60\u8ba4\u4e3a\u7ecf\u6d4e\u589e\u957f\u7684\u4e09\u4e2a\u539f\u56e0\u4e2d\uff0c\u54ea\u4e00\u4e2a\u5bf9\u4e9a\u6d32\u6700\u91cd\u8981\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u7406\u7531\u3002", aEn: "A reasonable argument: FDI was most important because it provided the initial capital and technology without which education investment and government policy would have had less impact. However, government policy could also be argued as most important because it created the stable conditions and incentives that attracted FDI in the first place. Both sides are valid if supported with evidence.", aZh: "\u4e00\u4e2a\u5408\u7406\u7684\u8bba\u70b9\uff1a\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u6700\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u521d\u59cb\u8d44\u672c\u548c\u6280\u672f\uff0c\u6ca1\u6709\u8fd9\u4e9b\uff0c\u6559\u80b2\u6295\u8d44\u548c\u653f\u5e9c\u653f\u7b56\u7684\u5f71\u54cd\u4f1a\u5927\u6253\u6298\u6263\u3002\u7136\u800c\uff0c\u4e5f\u53ef\u4ee5\u8bba\u8bc1\u653f\u5e9c\u653f\u7b56\u6700\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u521b\u9020\u4e86\u5438\u5f15\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u7684\u7a33\u5b9a\u73af\u5883\u548c\u6fc0\u52b1\u63aa\u65bd\u3002\u53ea\u8981\u6709\u8bc1\u636e\u652f\u6301\uff0c\u4e24\u79cd\u89c2\u70b9\u90fd\u662f\u6709\u6548\u7684\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is an economic effect of foreign direct investment (FDI)?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff08FDI\uff09\u7684\u7ecf\u6d4e\u5f71\u54cd\uff1f",
          opts: [
            { en: "Increased rainfall in farming regions", zh: "\u519c\u4e1a\u5730\u533a\u964d\u96e8\u91cf\u589e\u52a0" },
            { en: "Technology transfer to the host country", zh: "\u5411\u4e1c\u9053\u56fd\u8f6c\u8ba9\u6280\u672f" },
            { en: "A reduction in government spending", zh: "\u653f\u5e9c\u652f\u51fa\u51cf\u5c11" },
            { en: "Lower population density in cities", zh: "\u57ce\u5e02\u4eba\u53e3\u5bc6\u5ea6\u964d\u4f4e" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! When a foreign company invests in a country, it often brings new technology and working methods \u2014 this is called technology transfer and it helps local workers become more productive.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5f53\u5916\u56fd\u516c\u53f8\u5728\u4e00\u4e2a\u56fd\u5bb6\u6295\u8d44\u65f6\uff0c\u5b83\u901a\u5e38\u4f1a\u5e26\u6765\u65b0\u6280\u672f\u548c\u5de5\u4f5c\u65b9\u6cd5\u2014\u2014\u8fd9\u79f0\u4e3a\u6280\u672f\u8f6c\u8ba9\uff0c\u6709\u52a9\u4e8e\u5f53\u5730\u5de5\u4eba\u63d0\u9ad8\u751f\u4ea7\u529b\u3002",
          explainWrongEn: "Not quite. Rainfall, government spending levels, and population density are not direct effects of FDI. Technology transfer is a well-established economic effect. The correct answer is technology transfer.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u964d\u96e8\u91cf\u3001\u653f\u5e9c\u652f\u51fa\u548c\u4eba\u53e3\u5bc6\u5ea6\u5e76\u975e\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u7684\u76f4\u63a5\u5f71\u54cd\u3002\u6280\u672f\u8f6c\u8ba9\u662f\u516c\u8ba4\u7684\u7ecf\u6d4e\u5f71\u54cd\u3002\u6b63\u786e\u7b54\u6848\u662f\u6280\u672f\u8f6c\u8ba9\u3002",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "T",
      title: "Transnational Corporations",
      titleZh: "\u8de8\u56fd\u516c\u53f8",
      subtitle: "TNCs operate across many countries \u2014 driven by profit, they bring both opportunities and challenges to the places they invest in.",
      subtitleZh: "\u8de8\u56fd\u516c\u53f8\u8de8\u8d8a\u591a\u4e2a\u56fd\u5bb6\u8fd0\u8425\u2014\u2014\u5728\u5229\u6da6\u9a71\u52a8\u4e0b\uff0c\u5b83\u4eec\u7ed9\u6240\u6295\u8d44\u5730\u5e26\u6765\u673a\u9047\u548c\u6311\u6218\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define what a transnational corporation (TNC) is and explain the difference between source and host countries.", zh: "\u6211\u80fd\u5b9a\u4e49\u8de8\u56fd\u516c\u53f8\uff08TNC\uff09\uff0c\u5e76\u89e3\u91ca\u6765\u6e90\u56fd\u548c\u4e1c\u9053\u56fd\u7684\u533a\u522b\u3002" },
            { en: "I can explain how TNCs increase profits through pricing, cost reduction, and sales.", zh: "\u6211\u80fd\u89e3\u91ca\u8de8\u56fd\u516c\u53f8\u5982\u4f55\u901a\u8fc7\u5b9a\u4ef7\u3001\u964d\u6210\u672c\u548c\u589e\u52a0\u9500\u552e\u6765\u63d0\u9ad8\u5229\u6da6\u3002" },
            { en: "I can evaluate both the benefits and challenges that TNCs bring to host countries.", zh: "\u6211\u80fd\u8bc4\u4f30\u8de8\u56fd\u516c\u53f8\u7ed9\u4e1c\u9053\u56fd\u5e26\u6765\u7684\u76ca\u5904\u548c\u6311\u6218\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A transnational corporation (TNC) is a company that operates in more than one country. The source country is where the TNC is originally based and where profits return to. The host country is where the TNC sets up operations, factories, or offices. McDonald\u2019s is a clear example \u2014 its source country is the USA, but it operates in host countries across Asia and the world.", zh: "\u8de8\u56fd\u516c\u53f8\uff08TNC\uff09\u662f\u5728\u4e0d\u6b62\u4e00\u4e2a\u56fd\u5bb6\u8fd0\u8425\u7684\u516c\u53f8\u3002\u6765\u6e90\u56fd\u662f\u8de8\u56fd\u516c\u53f8\u6700\u521d\u7684\u603b\u90e8\u6240\u5728\u5730\uff0c\u5229\u6da6\u6700\u7ec8\u6d41\u56de\u6b64\u5730\u3002\u4e1c\u9053\u56fd\u662f\u8de8\u56fd\u516c\u53f8\u8bbe\u7acb\u4e1a\u52a1\u3001\u5de5\u5382\u6216\u529e\u516c\u5ba4\u7684\u5730\u65b9\u3002\u9ea6\u5f53\u52b3\u662f\u4e00\u4e2a\u5178\u578b\u4f8b\u5b50\u2014\u2014\u5176\u6765\u6e90\u56fd\u662f\u7f8e\u56fd\uff0c\u4f46\u5b83\u5728\u4e9a\u6d32\u548c\u4e16\u754c\u5404\u5730\u7684\u4e1c\u9053\u56fd\u8fd0\u8425\u3002" },
            { type: "highlight", en: "TNCs are primarily driven by profit. There are three main strategies to increase profit: increase prices (charge more for products or services); decrease production costs (pay lower wages, use cheaper materials, move to cheaper locations); sell more products (expand into new markets, especially growing economies in Asia).", zh: "\u8de8\u56fd\u516c\u53f8\u4e3b\u8981\u7531\u5229\u6da6\u9a71\u52a8\u3002\u63d0\u9ad8\u5229\u6da6\u7684\u4e09\u4e2a\u4e3b\u8981\u7b56\u7565\u662f\uff1a\u63d0\u9ad8\u4ef7\u683c\uff08\u5bf9\u4ea7\u54c1\u6216\u670d\u52a1\u6536\u53d6\u66f4\u9ad8\u8d39\u7528\uff09\uff1b\u964d\u4f4e\u751f\u4ea7\u6210\u672c\uff08\u652f\u4ed8\u66f4\u4f4e\u5de5\u8d44\u3001\u4f7f\u7528\u66f4\u4fbf\u5b9c\u7684\u539f\u6599\u3001\u8fc1\u5f80\u6210\u672c\u66f4\u4f4e\u7684\u5730\u65b9\uff09\uff1b\u589e\u52a0\u4ea7\u54c1\u9500\u552e\u91cf\uff08\u5f00\u62d3\u65b0\u5e02\u573a\uff0c\u5c24\u5176\u662f\u4e9a\u6d32\u65b0\u5174\u7ecf\u6d4e\u4f53\uff09\u3002" },
            { type: "text", en: "TNCs bring benefits to host countries including: job creation, investment in local infrastructure, tax revenues for governments, and access to new technology. However, they also bring challenges: profits often flow back to the source country rather than staying in the host country; wages may be low; workers may face poor conditions; and local businesses may struggle to compete.", zh: "\u8de8\u56fd\u516c\u53f8\u7ed9\u4e1c\u9053\u56fd\u5e26\u6765\u7684\u76ca\u5904\u5305\u62ec\uff1a\u521b\u9020\u5c31\u4e1a\u673a\u4f1a\u3001\u6295\u8d44\u5f53\u5730\u57fa\u7840\u8bbe\u65bd\u3001\u4e3a\u653f\u5e9c\u63d0\u4f9b\u7a0e\u6536\u4ee5\u53ca\u83b7\u5f97\u65b0\u6280\u672f\u3002\u7136\u800c\uff0c\u5b83\u4eec\u4e5f\u5e26\u6765\u6311\u6218\uff1a\u5229\u6da6\u5f80\u5f80\u6d41\u56de\u6765\u6e90\u56fd\u800c\u975e\u559c\u7559\u4e1c\u9053\u56fd\uff1b\u5de5\u8d44\u53ef\u80fd\u5f88\u4f4e\uff1b\u5de5\u4eba\u53ef\u80fd\u9762\u4e34\u6076\u52a3\u7684\u5de5\u4f5c\u6761\u4ef6\uff1b\u5f53\u5730\u4e1a\u52a1\u53ef\u80fd\u96be\u4ee5\u7b51\u5f97\u7adf\u4e89\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Transnational corporation (TNC)", zh: "\u8de8\u56fd\u516c\u53f8\uff08TNC\uff09", defEn: "A company that operates in more than one country, with its headquarters usually in one nation and operations in others.", defZh: "\u5728\u4e0d\u6b62\u4e00\u4e2a\u56fd\u5bb6\u8fd0\u8425\u7684\u516c\u53f8\uff0c\u603b\u90e8\u901a\u5e38\u5728\u4e00\u4e2a\u56fd\u5bb6\uff0c\u4e1a\u52a1\u5219\u5728\u5176\u4ed6\u56fd\u5bb6\u5c55\u5f00\u3002" },
            { en: "Source country", zh: "\u6765\u6e90\u56fd", defEn: "The country where a TNC is originally headquartered and where profits ultimately return.", defZh: "\u8de8\u56fd\u516c\u53f8\u6700\u521d\u8bbe\u7acb\u603b\u90e8\u3001\u5229\u6da6\u6700\u7ec8\u6d41\u56de\u7684\u56fd\u5bb6\u3002" },
            { en: "Host country", zh: "\u4e1c\u9053\u56fd", defEn: "The country where a TNC sets up operations, factories, or offices outside its home country.", defZh: "\u8de8\u56fd\u516c\u53f8\u5728\u6765\u6e90\u56fd\u4ee5\u5916\u8bbe\u7acb\u4e1a\u52a1\u3001\u5de5\u5382\u6216\u529e\u516c\u5ba4\u7684\u56fd\u5bb6\u3002" },
            { en: "Outsourcing", zh: "\u5916\u5305", defEn: "When a company pays another company or workers in a different country to carry out part of its work.", defZh: "\u516c\u53f8\u5c06\u5176\u90e8\u5206\u5de5\u4f5c\u4ea4\u7531\u53e6\u4e00\u4e2a\u516c\u53f8\u6216\u5176\u4ed6\u56fd\u5bb6\u5de5\u4eba\u5b8c\u6210\u7684\u505a\u6cd5\u3002" },
          ],
        },
        { type: "image", caption: "A map showing a TNC\u2019s source country and its host countries across Asia.", captionZh: "\u5c55\u793a\u4e00\u5bb6\u8de8\u56fd\u516c\u53f8\u7684\u6765\u6e90\u56fd\u53ca\u5176\u5728\u4e9a\u6d32\u5404\u4e1c\u9053\u56fd\u7684\u5730\u56fe\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "TNC Case Study: McDonald\u2019s", labelZh: "\u8de8\u56fd\u516c\u53f8\u6848\u4f8b\uff1a\u9ea6\u5f53\u52b3", en: "McDonald\u2019s source country is the USA. It operates as a TNC in host countries across Asia, including China, Japan, and India. Its profit strategies include keeping production costs low, selling at high volume, and adapting menus to local tastes to increase sales.", zh: "\u9ea6\u5f53\u52b3\u7684\u6765\u6e90\u56fd\u662f\u7f8e\u56fd\u3002\u5b83\u4f5c\u4e3a\u8de8\u56fd\u516c\u53f8\u5728\u5305\u62ec\u4e2d\u56fd\u3001\u65e5\u672c\u548c\u5370\u5ea6\u5728\u5185\u7684\u4e9a\u6d32\u4e1c\u9053\u56fd\u8fd0\u8425\u3002\u5176\u5229\u6da6\u7b56\u7565\u5305\u62ec\uff1a\u964d\u4f4e\u751f\u4ea7\u6210\u672c\u3001\u5927\u91cf\u9500\u552e\u4ee5\u53ca\u6839\u636e\u5f53\u5730\u53e3\u5473\u8c03\u6574\u83dc\u5355\u4ee5\u589e\u52a0\u9500\u552e\u91cf\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain how a TNC could increase its profits by decreasing production costs. Give an example.", qZh: "\u89e3\u91ca\u8de8\u56fd\u516c\u53f8\u5982\u4f55\u901a\u8fc7\u964d\u4f4e\u751f\u4ea7\u6210\u672c\u63d0\u9ad8\u5229\u6da6\u3002\u4e3e\u4f8b\u8bf4\u660e\u3002", aEn: "A TNC can move its manufacturing operations to a country where wages are lower. For example, a clothing company might outsource sewing to factories in Bangladesh or Vietnam, where labour costs are much lower than in the USA or UK. This reduces the cost of making each item, increasing the profit margin.", aZh: "\u8de8\u56fd\u516c\u53f8\u53ef\u4ee5\u5c06\u5236\u9020\u4e1a\u52a1\u8fc1\u5f80\u5de5\u8d44\u8f83\u4f4e\u7684\u56fd\u5bb6\u3002\u4f8b\u5982\uff0c\u4e00\u5bb6\u670d\u88c5\u516c\u53f8\u53ef\u80fd\u5c06\u7f1d\u7ea253\u5305\u7ed9\u5b5f\u52a0\u62c9\u5c71\u6216\u8d8a\u5357\u7684\u5de5\u5382\uff0c\u90a3\u91cc\u7684\u52b3\u52a8\u6210\u672c\u8fdc\u4f4e\u4e8e\u7f8e\u56fd\u6216\u82f1\u56fd\u3002\u8fd9\u964d\u4f4e\u4e86\u6bcf\u4e2a\u4ea7\u54c1\u7684\u5236\u9020\u6210\u672c\uff0c\u63d0\u9ad8\u4e86\u5229\u6da6\u7a7a\u95f4\u3002" },
            { qEn: "Give one benefit and one challenge that a TNC brings to a host country in Asia.", qZh: "\u5404\u4e3e\u4e00\u4e2a\u8de8\u56fd\u516c\u53f8\u7ed9\u4e9a\u6d32\u4e1c\u9053\u56fd\u5e26\u6765\u7684\u76ca\u5904\u548c\u6311\u6218\u3002", aEn: "Benefit: TNCs create jobs for local workers, providing wages and reducing unemployment. Challenge: profits flow back to the source country rather than staying in the host country, so the local economy may not benefit as much as expected in the long term.", aZh: "\u76ca\u5904\uff1a\u8de8\u56fd\u516c\u53f8\u4e3a\u5f53\u5730\u5de5\u4eba\u521b\u9020\u5c31\u4e1a\u673a\u4f1a\uff0c\u63d0\u4f9b\u5de5\u8d44\u5e76\u51cf\u5c11\u5931\u4e1a\u3002\u6311\u6218\uff1a\u5229\u6da6\u6d41\u56de\u6765\u6e90\u56fd\u800c\u975e\u7559\u5728\u4e1c\u9053\u56fd\uff0c\u56e0\u6b64\u5f53\u5730\u7ecf\u6d4e\u4ece\u957f\u8fdc\u6765\u770b\u53ef\u80fd\u65e0\u6cd5\u50cf\u9884\u671f\u7684\u90a3\u6837\u83b7\u76ca\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What is the \u2018source country\u2019 of a transnational corporation?",
          qZh: "\u8de8\u56fd\u516c\u53f8\u7684\u201c\u6765\u6e90\u56fd\u201d\u662f\u6307\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The country where the TNC has the most workers", zh: "\u8de8\u56fd\u516c\u53f8\u5de5\u4eba\u6700\u591a\u7684\u56fd\u5bb6" },
            { en: "The country where the TNC is originally headquartered", zh: "\u8de8\u56fd\u516c\u53f8\u6700\u521d\u8bbe\u7acb\u603b\u90e8\u7684\u56fd\u5bb6" },
            { en: "The country that produces the most raw materials for the TNC", zh: "\u4e3a\u8de8\u56fd\u516c\u53f8\u751f\u4ea7\u6700\u591a\u539f\u6750\u6599\u7684\u56fd\u5bb6" },
            { en: "The country where the TNC sells the most products", zh: "\u8de8\u56fd\u516c\u53f8\u9500\u552e\u4ea7\u54c1\u6700\u591a\u7684\u56fd\u5bb6" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! The source country is where a TNC is originally based and where profits ultimately return to. For McDonald\u2019s, the source country is the USA.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6765\u6e90\u56fd\u662f\u8de8\u56fd\u516c\u53f8\u6700\u521d\u8bbe\u7acb\u3001\u5229\u6da6\u6700\u7ec8\u6d41\u56de\u7684\u56fd\u5bb6\u3002\u5bf9\u4e8e\u9ea6\u5f53\u52b3\u6765\u8bf4\uff0c\u6765\u6e90\u56fd\u662f\u7f8e\u56fd\u3002",
          explainWrongEn: "Not quite. The source country is defined by where the TNC is headquartered, not by worker numbers, raw materials, or sales volume. The correct answer is the country where the TNC is originally headquartered.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6765\u6e90\u56fd\u7531\u8de8\u56fd\u516c\u53f8\u603b\u90e8\u6240\u5728\u5730\u51b3\u5b9a\uff0c\u800c\u975e\u7531\u5de5\u4eba\u6570\u91cf\u3001\u539f\u6750\u6599\u6216\u9500\u552e\u91cf\u51b3\u5b9a\u3002\u6b63\u786e\u7b54\u6848\u662f\u8de8\u56fd\u516c\u53f8\u6700\u521d\u8bbe\u7acb\u603b\u90e8\u7684\u56fd\u5bb6\u3002",
        },
      ],
    },

    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "T",
      title: "The Rise of China",
      titleZh: "\u4e2d\u56fd\u7684\u5d1b\u8d77",
      subtitle: "China\u2019s economic transformation over the past 70 years is one of the most dramatic in history \u2014 driven by FDI, Special Economic Zones, and rapid urbanisation.",
      subtitleZh: "\u4e2d\u56fd\u8fc7\u53bb70\u5e74\u7684\u7ecf\u6d4e\u8f6c\u578b\u662f\u5386\u53f2\u4e0a\u6700\u6233\u76ee\u60ca\u5fc3\u7684\u4e4b\u4e00\u2014\u2014\u7531\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u3001\u7ecf\u6d4e\u7279\u533a\u548c\u5feb\u901f\u57ce\u9547\u5316\u63a8\u52a8\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe the key events in China\u2019s economic development since the 1970s.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e2d\u56fd\u81ea1970\u5e74\u4ee3\u4ee5\u6765\u7ecf\u6d4e\u53d1\u5c55\u7684\u5173\u952e\u4e8b\u4ef6\u3002" },
            { en: "I can explain how China\u2019s share of global trade grew and what drove rapid urbanisation.", zh: "\u6211\u80fd\u89e3\u91ca\u4e2d\u56fd\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u6bd4\u91cd\u5982\u4f55\u589e\u957f\uff0c\u4ee5\u53ca\u5e02\u9547\u5316\u8fc5\u901f\u63a8\u8fdb\u7684\u539f\u56e0\u3002" },
            { en: "I can describe what the Belt and Road Initiative is and how it links to China\u2019s global ambitions.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5b83\u4e0e\u4e2d\u56fd\u5168\u7403\u96c4\u5fc3\u7684\u5173\u8054\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "China has been the world\u2019s largest recipient of FDI since 2000. Its share of global trade rose from 3% in 2001 to 10% by 2013. Rapid industrialisation was matched by rapid urbanisation: by 2015, China had 150 cities with over 1 million people, up from just 30 in 2000.", zh: "\u4e2d\u56fd\u81ea2000\u5e74\u4ee5\u6765\u4e00\u76f4\u662f\u5168\u7403\u6700\u5927\u7684\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u63a5\u53d7\u56fd\u3002\u5b83\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd42001\u5e74\u73b03%\u589e\u81f32013\u5e74\u7684 10%\u3002\u5feb\u901f\u5de5\u4e1a\u5316\u4f34\u968f\u7740\u5feb\u901f\u57ce\u9547\u5316\uff1a\u52302015\u5e74\uff0c\u4e2d\u56fd\u62e5\u6709150\u4e2a\u4eba\u53e3\u8d85\u8fc7100\u4e07\u7684\u57ce\u5e02\uff0c\u800c2000\u5e74\u8fd9\u4e00\u6570\u5b57\u4ec5\u4e3a30\u4e2a\u3002" },
            { type: "highlight", en: "Key events in China\u2019s economic story: death of Mao Zedong \u2192 economic reforms begin; Special Economic Zones (SEZs) open to attract FDI; Tiananmen Square 1989; China joins the WTO; Beijing Olympics 2008; global financial crash 2008; growth of megacities; Belt and Road Initiative announced 2013; China\u2013USA trade tensions.", zh: "\u4e2d\u56fd\u7ecf\u6d4e\u53d1\u5c55\u7684\u5173\u952e\u4e8b\u4ef6\uff1a\u6bdb\u6cfd\u4e1c\u53bb\u4e16\u2192\u7ecf\u6d4e\u6539\u9769\u5f00\u59cb\uff1b\u7ecf\u6d4e\u7279\u533a\u5411\u5916\u5f00\u653e\u5438\u5f15\u5916\u56fd\u76f4\u63a5\u6295\u8d44\uff1b1989\u5e74\u5929\u5b89\u95e8\u4e8b\u4ef6\uff1b\u4e2d\u56fd\u52a0\u5165\u4e16\u8d38\u7ec4\u7ec7\uff1b2008\u5e74\u5317\u4eac\u5965\u8fd0\u4f1a\uff1b2008\u5e74\u5168\u7403\u91d1\u878d\u5371\u673a\uff1b\u8d85\u5927\u57ce\u5e02\u589e\u957f\uff1b2013\u5e74\u5ba3\u5e03\u4e00\u5e26\u4e00\u8def\u5021\u8bae\uff1b\u4e2d\u7f8e\u8d38\u6613\u6469\u64e6\u3002" },
            { type: "text", en: "The Belt and Road Initiative (BRI) was announced in 2013. It aims to build transport infrastructure connecting China with Asia, Europe, and Africa through both land and sea routes. One example is the Bangkok\u2013Phitsanulok High-Speed Railway in Thailand, which is linked to the BRI. The BRI gives China greater influence over trade routes and partner economies.", zh: "\u4e00\u5e26\u4e00\u8def\u5021\u8bae\uff08BRI\uff09\u4e8e2013\u5e74\u5ba3\u5e03\u3002\u5b83\u65e8\u5728\u5efa\u8bbe\u8fde\u63a5\u4e2d\u56fd\u4e0e\u4e9a\u6d32\u3001\u6b27\u6d32\u548c\u975e\u6d32\u7684\u9646\u4e0a\u548c\u6d77\u4e0a\u4ea4\u901a\u57fa\u7840\u8bbe\u65bd\u3002\u6cf0\u56fd\u66fc\u8c37\u81f3\u5f6d\u4e16\u6d1b\u7684\u9ad8\u94c1\u9879\u76ee\u662f\u4e0e\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u76f8\u5173\u8054\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u8d4b\u4e88\u4e86\u4e2d\u56fd\u5bf9\u8d38\u6613\u8def\u7ebf\u548c\u4f19\u4f34\u56fd\u7ecf\u6d4e\u6709\u66f4\u5f3a\u7684\u5f71\u54cd\u529b\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Special Economic Zone (SEZ)", zh: "\u7ecf\u6d4e\u7279\u533a\uff08SEZ\uff09", defEn: "A designated area in a country where business and trade laws are different from the rest of the country, often to attract foreign investment.", defZh: "\u4e00\u4e2a\u56fd\u5bb6\u5185\u7684\u7279\u5b9a\u5730\u533a\uff0c\u5546\u4e1a\u548c\u8d38\u6613\u6cd5\u5f8b\u4e0e\u5176\u4ed6\u5730\u533a\u4e0d\u540c\uff0c\u901a\u5e38\u662f\u4e3a\u4e86\u5438\u5f15\u5916\u56fd\u6295\u8d44\u3002" },
            { en: "Urbanisation", zh: "\u57ce\u9547\u5316", defEn: "The process by which more people move to live in towns and cities rather than rural areas.", defZh: "\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u79fb\u5c45\u57ce\u9547\u800c\u975e\u519c\u6751\u5730\u533a\u7684\u8fc7\u7a0b\u3002" },
            { en: "Belt and Road Initiative (BRI)", zh: "\u4e00\u5e26\u4e00\u8def\u5021\u8bae\uff08BRI\uff09", defEn: "A Chinese government project announced in 2013 to build transport links connecting China with Asia, Europe, and Africa.", defZh: "\u4e2d\u56fd\u653f\u5e9c2013\u5e74\u5ba3\u5e03\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5efa\u8bbe\u8fde\u63a5\u4e2d\u56fd\u4e0e\u4e9a\u6d32\u3001\u6b27\u6d32\u548c\u975e\u6d32\u7684\u4ea4\u901a\u8054\u7cfb\u3002" },
            { en: "Megacity", zh: "\u8d85\u5927\u57ce\u5e02", defEn: "A city with a population of more than 10 million people.", defZh: "\u4eba\u53e3\u8d85\u8fc71000\u4e07\u7684\u57ce\u5e02\u3002" },
          ],
        },
        { type: "image", caption: "A map of China\u2019s Belt and Road Initiative showing land and sea routes connecting Asia, Europe, and Africa.", captionZh: "\u4e2d\u56fd\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u5730\u56fe\uff0c\u5c55\u793a\u8fde\u63a5\u4e9a\u6d32\u3001\u6b27\u6d32\u548c\u975e\u6d32\u7684\u9646\u4e0a\u548c\u6d77\u4e0a\u8def\u7ebf\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Key Economic Data: China", labelZh: "\u5173\u952e\u7ecf\u6d4e\u6570\u636e\uff1a\u4e2d\u56fd", en: "China\u2019s share of global trade rose from 3% in 2001 to 10% by 2013. By 2015, it had 150 cities with over 1 million people \u2014 up from 30 in 2000. It has been the world\u2019s largest recipient of FDI since 2000.", zh: "\u4e2d\u56fd\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd4\u4ece2001\u5e74\u7684 3%\u589e\u81f32013\u5e74\u7684 10%\u3002\u52302015\u5e74\uff0c\u4e2d\u56fd\u5df2\u62e5\u6709 150\u4e2a\u4eba\u53e3\u8d85\u8fc7100\u4e07\u7684\u57ce\u5e02\u2014\u2014\u4e3a2000\u5e74\u7684 30\u4e2a\u7684\u4e94\u500d\u3002\u81ea2000\u5e74\u4ee5\u6765\uff0c\u4e2d\u56fd\u4e00\u76f4\u662f\u5168\u7403\u6700\u5927\u7684\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u63a5\u53d7\u56fd\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain how Special Economic Zones helped China attract foreign direct investment.", qZh: "\u89e3\u91ca\u7ecf\u6d4e\u7279\u533a\u5982\u4f55\u5e2e\u52a9\u4e2d\u56fd\u5438\u5f15\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u3002", aEn: "Special Economic Zones offered foreign companies more favourable business conditions than the rest of China, such as lower taxes and fewer regulations. This made it more profitable for TNCs to set up factories in China. Once established, these factories created jobs and technology transfer, which helped further economic growth.", aZh: "\u7ecf\u6d4e\u7279\u533a\u4e3a\u5916\u8d44\u4f01\u4e1a\u63d0\u4f9b\u4e86\u6bd4\u4e2d\u56fd\u5176\u4ed6\u5730\u533a\u66f4\u6709\u5229\u7684\u4e1a\u52a1\u6761\u4ef6\uff0c\u5982\u8f83\u4f4e\u7684\u7a0e\u6536\u548c\u66f4\u5c11\u7684\u6cd5\u89c4\u9650\u5236\u3002\u8fd9\u4f7f\u8de8\u56fd\u516c\u53f8\u5728\u4e2d\u56fd\u5efa\u5382\u66f4\u6709\u5229\u53ef\u56fe\u3002\u5de5\u5382\u5efa\u7acb\u540e\uff0c\u521b\u9020\u4e86\u5c31\u4e1a\u673a\u4f1a\u5e76\u4fc3\u8fdb\u6280\u672f\u8f6c\u8ba9\uff0c\u8fdb\u4e00\u6b65\u63a8\u52a8\u4e86\u7ecf\u6d4e\u589e\u957f\u3002" },
            { qEn: "What is the Belt and Road Initiative and how might it increase China\u2019s global influence?", qZh: "\u4ec0\u4e48\u662f\u4e00\u5e26\u4e00\u8def\u5021\u8bae\uff1f\u5b83\u5982\u4f55\u589e\u5f3a\u4e2d\u56fd\u7684\u5168\u7403\u5f71\u54cd\u529b\uff1f", aEn: "The BRI is a Chinese government project announced in 2013 to build transport infrastructure connecting China with Asia, Europe, and Africa by land and sea. By funding roads, railways, and ports in other countries, China gains greater control over trade routes and creates economic dependency in partner nations, increasing its political and economic influence globally.", aZh: "\u4e00\u5e26\u4e00\u8def\u5021\u8bae\u662f\u4e2d\u56fd\u653f\u5e9c2013\u5e74\u5ba3\u5e03\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5efa\u8bbe\u9646\u4e0a\u548c\u6d77\u4e0a\u4ea4\u901a\u57fa\u7840\u8bbe\u65bd\uff0c\u5c06\u4e2d\u56fd\u4e0e\u4e9a\u6d32\u3001\u6b27\u6d32\u548c\u975e\u6d32\u8fde\u63a5\u8d77\u6765\u3002\u901a\u8fc7\u8d44\u52a9\u5176\u4ed6\u56fd\u5bb6\u5efa\u8bbe\u516c\u8def\u3001\u9993\u8def\u548c\u6e2f\u53e3\uff0c\u4e2d\u56fd\u83b7\u5f97\u4e86\u5bf9\u8d38\u6613\u8def\u7ebf\u7684\u66f4\u5927\u63a7\u5236\u6743\uff0c\u5e76\u5728\u4f19\u4f34\u56fd\u5185\u5f62\u6210\u7ecf\u6d4e\u4f9d\u8d56\uff0c\u4ece\u800c\u589e\u5f3a\u5176\u5168\u7403\u653f\u6cbb\u548c\u7ecf\u6d4e\u5f71\u54cd\u529b\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What was China\u2019s share of global trade by 2013?",
          qZh: "\u52302013\u5e74\uff0c\u4e2d\u56fd\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd4\u662f\u591a\u5c11\uff1f",
          opts: [
            { en: "3%", zh: "3%" },
            { en: "10%", zh: "10%" },
            { en: "25%", zh: "25%" },
            { en: "40%", zh: "40%" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! China\u2019s share of global trade rose from 3% in 2001 to 10% by 2013, reflecting its rapid industrial and export growth.",
          explainCorrectZh: "\u6b63\u786e\uff01\u4e2d\u56fd\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd4\u4ece2001\u5e74\u7684 3%\u589e\u81f32013\u5e74\u7684 10%\uff0c\u53cd\u6620\u4e86\u5176\u5feb\u901f\u7684\u5de5\u4e1a\u5316\u548c\u51fa\u53e3\u589e\u957f\u3002",
          explainWrongEn: "Not quite. China\u2019s share of global trade was 3% in 2001 and grew to 10% by 2013. The correct answer is 10%.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4e2d\u56fd\u5728\u5168\u7403\u8d38\u6613\u4e2d\u7684\u5360\u6bd42001\u5e74\u4e3a 3%\uff0c\u5230 2013\u5e74\u589e\u81f3 10%\u3002\u6b63\u786e\u7b54\u6848\u662f 10%\u3002",
        },
      ],
    },

    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "T",
      title: "The Global Shift",
      titleZh: "\u5168\u7403\u8f6c\u79fb",
      subtitle: "Over the past 30 years, the world\u2019s economic centre of gravity has shifted from Europe and North America towards Asia \u2014 with unequal benefits.",
      subtitleZh: "\u8fc7\u53bb 30 \u5e74\u95f4\uff0c\u5168\u7403\u7ecf\u6d4e\u91cd\u5fc3\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u8f6c\u79fb\u2014\u2014\u4f46\u6240\u5e26\u6765\u7684\u76ca\u5904\u5e76\u4e0d\u5747\u8861\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define the global shift and explain what caused it.", zh: "\u6211\u80fd\u5b9a\u4e49\u5168\u7403\u8f6c\u79fb\u5e76\u89e3\u91ca\u5176\u539f\u56e0\u3002" },
            { en: "I can describe advantages and disadvantages of the global shift for TNCs, Western countries, and Asian countries.", zh: "\u6211\u80fd\u63cf\u8ff0\u5168\u7403\u8f6c\u79fb\u5bf9\u8de8\u56fd\u516c\u53f8\u3001\u897f\u65b9\u56fd\u5bb6\u548c\u4e9a\u6d32\u56fd\u5bb6\u7684\u5229\u5f0a\u3002" },
            { en: "I can explain what outsourcing is and use Apple and Foxconn as an example.", zh: "\u6211\u80fd\u89e3\u91ca\u5916\u5305\u7684\u542b\u4e49\uff0c\u5e76\u4ee5\u82f9\u679c\u516c\u53f8\u548c\u5bcc\u58eb\u5eb7\u4e3a\u4f8b\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The global shift is the relocation of the world\u2019s economic centre of gravity towards Asia from Europe and North America over the last 30 years. It is closely connected to globalisation and to outsourcing, where companies in wealthy countries pay factories or workers in lower-income countries to carry out manufacturing.", zh: "\u5168\u7403\u8f6c\u79fb\u662f\u6307\u5168\u7403\u7ecf\u6d4e\u91cd\u5fc3\u5728\u8fc7\u53bb 30 \u5e74\u95f4\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u7684\u8f6c\u79fb\u3002\u5b83\u4e0e\u5168\u7403\u5316\u548c\u5916\u5305\u5bc6\u5207\u76f8\u5173\u2014\u2014\u5bcc\u88d5\u56fd\u5bb6\u7684\u516c\u53f8\u4ed8\u8d39\u7ed9\u4f4e\u6536\u5165\u56fd\u5bb6\u7684\u5de5\u5382\u6216\u5de5\u4eba\u8fdb\u884c\u5236\u9020\u3002" },
            { type: "highlight", en: "Advantages and disadvantages of the global shift: For TNCs \u2014 lower production costs and access to new markets, but reputational risk if labour conditions are poor. For Western countries \u2014 cheaper goods for consumers, but loss of manufacturing jobs and deindustrialisation. For Asian countries \u2014 job creation, investment, and economic growth, but low wages, poor conditions, and profits leaving the country.", zh: "\u5168\u7403\u8f6c\u79fb\u7684\u5229\u5f0a\uff1a\u5bf9\u8de8\u56fd\u516c\u53f8\u2014\u2014\u5e94\u4ea7\u6210\u672c\u964d\u4f4e\u548c\u5e02\u573a\u6269\u5c55\uff0c\u4f46\u5982\u679c\u52b3\u52a8\u6761\u4ef6\u6076\u52a3\u5219\u6709\u58f0\u8a89\u98ce\u9669\u3002\u5bf9\u897f\u65b9\u56fd\u5bb6\u2014\u2014\u6d88\u8d39\u8005\u53ef\u4ee5\u4ab7\u4ef7\u8d2d\u5546\u54c1\uff0c\u4f46\u5236\u9020\u4e1a\u5c31\u4e1a\u673a\u4f1a\u6d41\u5931\u4e14\u5c06\u5bfc\u81f4\u53bb\u5de5\u4e1a\u5316\u3002\u5bf9\u4e9a\u6d32\u56fd\u5bb6\u2014\u2014\u521b\u9020\u5c31\u4e1a\u673a\u4f1a\u3001\u5f15\u5165\u6295\u8d44\u548c\u63a8\u52a8\u7ecf\u6d4e\u589e\u957f\uff0c\u4f46\u5de5\u8d44\u4f4e\u3001\u5de5\u4f5c\u6761\u4ef6\u5dee\uff0c\u4e14\u5229\u6da6\u5916\u6d41\u3002" },
            { type: "example", en: "Apple outsources iPhone production to Foxconn, a Taiwanese company with major factories in China. This reduces Apple\u2019s production costs significantly while Foxconn employs hundreds of thousands of workers in China. However, Foxconn workers have faced criticism for long hours and poor conditions, showing that the benefits of the global shift are not evenly shared.", zh: "\u82f9\u679c\u516c\u53f8\u5c06iPhone\u751f\u4ea7\u5916\u5305\u7ed9\u5bcc\u58eb\u5eb7\uff0c\u5bcc\u58eb\u5eb7\u662f\u4e00\u5bb6\u5728\u4e2d\u56fd\u62e5\u6709\u5927\u578b\u5de5\u5382\u7684\u53f0\u6e7e\u516c\u53f8\u3002\u8fd9\u5927\u5e45\u964d\u4f4e\u4e86\u82f9\u679c\u7684\u751f\u4ea7\u6210\u672c\uff0c\u5bcc\u58eb\u5eb7\u5219\u5728\u4e2d\u56fd\u96c7\u7528\u4e86\u6570\u5341\u4e07\u5de5\u4eba\u3002\u7136\u800c\uff0c\u5bcc\u58eb\u5eb7\u5de5\u4eba\u56e0\u52a3\u8d28\u5de5\u4f5c\u6761\u4ef6\u548c\u8d85\u957f\u5de5\u65f6\u53d7\u5230\u6279\u8bc4\uff0c\u8fd9\u8868\u660e\u5168\u7403\u8f6c\u79fb\u7684\u76ca\u5904\u5e76\u4e0d\u5747\u8861\u5206\u914d\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Global shift", zh: "\u5168\u7403\u8f6c\u79fb", defEn: "The movement of the world\u2019s economic activity away from Europe and North America towards Asia over the past 30 years.", defZh: "\u5168\u7403\u7ecf\u6d4e\u6d3b\u52a8\u5728\u8fc7\u53bb 30 \u5e74\u95f4\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u8f6c\u79fb\u7684\u8fc7\u7a0b\u3002" },
            { en: "Globalisation", zh: "\u5168\u7403\u5316", defEn: "The increasing connection of the world\u2019s economies, cultures, and populations through trade, communication, and movement.", defZh: "\u5168\u7403\u7ecf\u6d4e\u3001\u6587\u5316\u548c\u4eba\u53e3\u901a\u8fc7\u8d38\u6613\u3001\u901a\u4fe1\u548c\u4eba\u53e3\u6d41\u52a8\u5bfc\u81f4\u7684\u8054\u7cfb\u4e0d\u65ad\u52a0\u5f3a\u7684\u8fc7\u7a0b\u3002" },
            { en: "Deindustrialisation", zh: "\u53bb\u5de5\u4e1a\u5316", defEn: "The decline of manufacturing industry in a country or region, often as jobs move abroad.", defZh: "\u4e00\u4e2a\u56fd\u5bb6\u6216\u5730\u533a\u5236\u9020\u4e1a\u8870\u9000\u7684\u8fc7\u7a0b\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5c31\u4e1a\u673a\u4f1a\u6d41\u5411\u6d77\u5916\u3002" },
            { en: "Outsourcing", zh: "\u5916\u5305", defEn: "When a company pays another company or workers elsewhere to carry out part of its work, often to reduce costs.", defZh: "\u516c\u53f8\u5c06\u90e8\u5206\u5de5\u4f5c\u4ea4\u7531\u5176\u4ed6\u5730\u65b9\u7684\u516c\u53f8\u6216\u5de5\u4eba\u5b8c\u6210\uff0c\u901a\u5e38\u662f\u4e3a\u4e86\u964d\u4f4e\u6210\u672c\u3002" },
          ],
        },
        { type: "image", caption: "A diagram showing the global shift of manufacturing from Europe and North America to Asia.", captionZh: "\u5c55\u793a\u5236\u9020\u4e1a\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u5168\u7403\u8f6c\u79fb\u7684\u793a\u610f\u56fe\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Case Study: Apple and Foxconn", labelZh: "\u6848\u4f8b\u7814\u7a76\uff1a\u82f9\u679c\u516c\u53f8\u4e0e\u5bcc\u58eb\u5eb7", en: "Apple outsources iPhone production to Foxconn, a Taiwanese TNC with factories in China. This reduces Apple\u2019s costs while employing hundreds of thousands of workers in Asia. The arrangement illustrates both the economic benefits and the labour challenges of outsourcing in the global shift.", zh: "\u82f9\u679c\u516c\u53f8\u5c06iPhone\u5236\u9020\u5916\u5305\u7ed9\u5bcc\u58eb\u5eb7\u2014\u2014\u4e00\u5bb6\u5728\u4e2d\u56fd\u62e5\u6709\u5de5\u5382\u7684\u53f0\u6e7e\u8de8\u56fd\u516c\u53f8\u3002\u8fd9\u964d\u4f4e\u4e86\u82f9\u679c\u7684\u6210\u672c\uff0c\u540c\u65f6\u5728\u4e9a\u6d32\u96c7\u7528\u4e86\u6570\u5341\u4e07\u5de5\u4eba\u3002\u8fd9\u4e00\u5b89\u6392\u540c\u65f6\u8bf4\u660e\u4e86\u5168\u7403\u8f6c\u79fb\u4e2d\u5916\u5305\u7684\u7ecf\u6d4e\u6548\u76ca\u548c\u52b3\u52a8\u6311\u6218\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain what the global shift is and give one reason why it happened.", qZh: "\u89e3\u91ca\u5168\u7403\u8f6c\u79fb\u662f\u4ec0\u4e48\uff0c\u5e76\u8bf4\u51fa\u5b83\u53d1\u751f\u7684\u4e00\u4e2a\u539f\u56e0\u3002", aEn: "The global shift is the movement of the world\u2019s manufacturing and economic activity from Europe and North America towards Asia over the past 30 years. One reason it happened is that labour costs in Asian countries were much lower, so TNCs could reduce production costs by outsourcing manufacturing to countries like China and Vietnam.", aZh: "\u5168\u7403\u8f6c\u79fb\u662f\u6307\u5168\u7403\u5236\u9020\u4e1a\u548c\u7ecf\u6d4e\u6d3b\u52a8\u5728\u8fc7\u53bb 30 \u5e74\u95f4\u4ece\u6b27\u6d32\u548c\u5317\u7f8e\u5411\u4e9a\u6d32\u7684\u8f6c\u79fb\u3002\u5176\u53d1\u751f\u7684\u4e00\u4e2a\u539f\u56e0\u662f\u4e9a\u6d32\u56fd\u5bb6\u52b3\u52a8\u529b\u6210\u672c\u8fdc\u4f4e\u4e8e\u6b27\u7f8e\uff0c\u56e0\u6b64\u8de8\u56fd\u516c\u53f8\u53ef\u4ee5\u901a\u8fc7\u5c06\u5236\u9020\u5916\u5305\u7ed9\u4e2d\u56fd\u3001\u8d8a\u5357\u7b49\u56fd\u6765\u964d\u4f4e\u751f\u4ea7\u6210\u672c\u3002" },
            { qEn: "Who benefits most from the global shift: TNCs, Western countries, or Asian countries? Use evidence to support your answer.", qZh: "\u5168\u7403\u8f6c\u79fb\u5bf9\u8c01\u6700\u6709\u5229\uff1a\u8de8\u56fd\u516c\u53f8\u3001\u897f\u65b9\u56fd\u5bb6\u8fd8\u662f\u4e9a\u6d32\u56fd\u5bb6\uff1f\u7528\u8bc1\u636e\u652f\u6301\u4f60\u7684\u7b54\u6848\u3002", aEn: "TNCs arguably benefit most because they access cheap labour (reducing costs) and new markets (increasing sales), while keeping profits in the source country. Asian countries gain jobs and investment but often receive low wages and see profits leave. Western consumers benefit from cheaper goods but workers lose manufacturing jobs. Any answer is valid if supported with evidence from each group.", aZh: "\u8de8\u56fd\u516c\u53f8\u53ef\u8bf4\u662f\u6700\u53d7\u76ca\u7684\u4e00\u65b9\uff0c\u56e0\u4e3a\u5b83\u4eec\u83b7\u5f97\u4e86\u5ec9\u4ef7\u52b3\u52a8\u529b\uff08\u964d\u4f4e\u6210\u672c\uff09\u548c\u65b0\u5e02\u573a\uff08\u589e\u52a0\u9500\u552e\uff09\uff0c\u5e76\u5c06\u5229\u6da6\u4fdd\u7559\u5728\u6765\u6e90\u56fd\u3002\u4e9a\u6d32\u56fd\u5bb6\u83b7\u5f97\u4e86\u5c31\u4e1a\u673a\u4f1a\u548c\u6295\u8d44\uff0c\u4f46\u5de5\u8d44\u5f80\u5f80\u8f83\u4f4e\u4e14\u5229\u6da6\u5916\u6d41\u3002\u897f\u65b9\u6d88\u8d39\u8005\u53ef\u4ee5\u4ab7\u4ef7\u8d2d\u5546\u54c1\uff0c\u4f46\u5de5\u4eba\u5374\u5931\u53bb\u4e86\u5236\u9020\u4e1a\u5c31\u4e1a\u673a\u4f1a\u3002\u4efb\u4f55\u89c2\u70b9\u53ea\u8981\u6709\u8bc1\u636e\u652f\u6301\u5747\u6709\u6548\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which company does Apple outsource iPhone production to, as an example of the global shift?",
          qZh: "\u4f5c\u4e3a\u5168\u7403\u8f6c\u79fb\u7684\u4f8b\u5b50\uff0c\u82f9\u679c\u516c\u53f8\u5c06iPhone\u5236\u9020\u5916\u5305\u7ed9\u54ea\u5bb6\u516c\u53f8\uff1f",
          opts: [
            { en: "Samsung", zh: "\u4e09\u661f" },
            { en: "Foxconn", zh: "\u5bcc\u58eb\u5eb7" },
            { en: "Huawei", zh: "\u534e\u4e3a" },
            { en: "Sony", zh: "\u7d22\u5c3c" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Apple outsources iPhone production to Foxconn, a Taiwanese TNC with major factories in China. This is a key example of outsourcing and the global shift.",
          explainCorrectZh: "\u6b63\u786e\uff01\u82f9\u679c\u5c06iPhone\u5236\u9020\u5916\u5305\u7ed9\u5bcc\u58eb\u5eb7\u2014\u2014\u4e00\u5bb6\u5728\u4e2d\u56fd\u62e5\u6709\u5927\u578b\u5de5\u5382\u7684\u53f0\u6e7e\u8de8\u56fd\u516c\u53f8\u3002\u8fd9\u662f\u5916\u5305\u548c\u5168\u7403\u8f6c\u79fb\u7684\u4e00\u4e2a\u5173\u952e\u4f8b\u5b50\u3002",
          explainWrongEn: "Not quite. Samsung, Huawei, and Sony are all electronics companies but they are not the company Apple uses for iPhone manufacturing. The correct answer is Foxconn.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4e09\u661f\u3001\u534e\u4e3a\u548c\u7d22\u5c3c\u90fd\u662f\u7535\u5b50\u516c\u53f8\uff0c\u4f46\u5b83\u4eec\u90fd\u4e0d\u662f\u82f9\u679c\u7528\u4e8e iPhone \u5236\u9020\u7684\u516c\u53f8\u3002\u6b63\u786e\u7b54\u6848\u662f\u5bcc\u58eb\u5eb7\u3002",
        },
      ],
    },

    /* ========== Lesson 7 ========== */
    {
      num: 7,
      badge: "A",
      title: "Do H&M use sweatshops?",
      titleZh: "H&M\u4f7f\u7528\u8102\u6c57\u5de5\u5382\u5417\uff1f",
      subtitle: "This lesson treats sweatshops as an investigation \u2014 gather evidence, compare with criteria, and make a justified judgement.",
      subtitleZh: "\u672c\u8bfe\u5c06\u8102\u6c57\u5de5\u5382\u95ee\u9898\u4f5c\u4e3a\u4e00\u9879\u8c03\u67e5\u7814\u7a76\u2014\u2014\u6536\u96c6\u8bc1\u636e\u3001\u5bf9\u6bd4\u6807\u51c6\uff0c\u518d\u4f5c\u51fa\u6709\u7406\u7531\u7684\u5224\u65ad\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define what a sweatshop is and identify key features of sweatshop conditions.", zh: "\u6211\u80fd\u5b9a\u4e49\u8102\u6c57\u5de5\u5382\uff0c\u5e76\u8bc6\u522b\u8102\u6c57\u5de5\u5382\u5de5\u4f5c\u6761\u4ef6\u7684\u4e3b\u8981\u7279\u5f81\u3002" },
            { en: "I can compare evidence about H&M factories with the criteria for a sweatshop.", zh: "\u6211\u80fd\u5c06\u6709\u5173H&M\u5de5\u5382\u7684\u8bc1\u636e\u4e0e\u8102\u6c57\u5de5\u5382\u7684\u6807\u51c6\u8fdb\u884c\u6bd4\u8f83\u3002" },
            { en: "I can make a justified judgement about whether H&M uses sweatshop labour.", zh: "\u6211\u80fd\u5c31H&M\u662f\u5426\u4f7f\u7528\u8102\u6c57\u5de5\u5382\u52b3\u52a8\u4f5c\u51fa\u6709\u7406\u7531\u7684\u5224\u65ad\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A sweatshop is a factory or workplace where workers are employed for very long hours, at very low wages, and often in unsafe or poor conditions. Sweatshops are often found in countries with weak labour laws where TNCs can reduce production costs. Key features include: very low wages; excessive working hours; child labour; unsafe conditions; no trade union rights.", zh: "\u8102\u6c57\u5de5\u5382\u662f\u4e00\u79cd\u5de5\u5382\u6216\u5de5\u4f5c\u573a\u6240\uff0c\u5de5\u4eba\u5728\u6781\u957f\u7684\u5de5\u4f5c\u65f6\u95f4\u5185\u4ee5\u6781\u4f4e\u7684\u5de5\u8d44\u5de5\u4f5c\uff0c\u5e38\u5e38\u5904\u4e8e\u4e0d\u5b89\u5168\u6216\u6076\u52a3\u7684\u73af\u5883\u4e2d\u3002\u8102\u6c57\u5de5\u5382\u5e38\u89c1\u4e8e\u52b3\u52a8\u6cd5\u5f8b\u8f83\u5f31\u7684\u56fd\u5bb6\uff0c\u8de8\u56fd\u516c\u53f8\u5229\u7528\u8fd9\u4e9b\u5730\u65b9\u964d\u4f4e\u751f\u4ea7\u6210\u672c\u3002\u8102\u6c57\u5de5\u5382\u7684\u4e3b\u8981\u7279\u5f81\u5305\u62ec\uff1a\u5de5\u8d44\u6781\u4f4e\u3001\u5de5\u4f5c\u65f6\u95f4\u8fc7\u957f\u3001\u4f7f\u7528\u7ae5\u5de5\u3001\u73af\u5883\u4e0d\u5b89\u5168\u3001\u6ca1\u6709\u5de5\u4f1a\u6743\u5229\u3002" },
            { type: "highlight", en: "The H&M investigation: H&M is a major fashion TNC that sources garments from factories in Bangladesh and Myanmar. Evidence gathered about H&M includes: reports of very low wages paid to factory workers; accounts of factory unrest in Myanmar; reports of 14-year-old workers in Myanmar factories linked to H&M supply chains.", zh: "H&M\u8c03\u67e5\uff1aH&M\u662f\u4e00\u5bb6\u5c068\u670d\u88c5\u8de8\u56fd\u516c\u53f8\uff0c\u5728\u5b5f\u52a0\u62c9\u5c71\u548c\u7f05\u7538\u7684\u5de5\u5382\u8fdb\u8d27\u670d\u88c5\u3002\u6709\u5173H&M\u7684\u8bc1\u636e\u5305\u62ec\uff1a\u5de5\u5382\u5de5\u4eba\u5de5\u8d44\u6781\u4f4e\u7684\u62a5\u544a\uff1b\u7f05\u7538\u5de5\u5382\u7f62\u5de5\u4e8b\u4ef6\u7684\u4e0a\u8ff0\uff1b\u4e0eH&M\u4f9b\u5e94\u94fe\u76f8\u5173\u7684\u7f05\u7538\u5de5\u5382\u5c635\u5c81\u7ae5\u5de5\u7684\u62a5\u544a\u3002" },
            { type: "text", en: "This lesson is structured like an investigation: gather evidence, compare with sweatshop criteria, make a judgement, and justify the answer. The key skill is evaluating sources of evidence rather than just accepting claims. Ask: Who produced this evidence? What is their motive? Is it based on direct investigation or second-hand reporting?", zh: "\u672c\u8bfe\u50cf\u4e00\u9879\u8c03\u67e5\u4e00\u6837\u7ec4\u7ec7\uff1a\u6536\u96c6\u8bc1\u636e\u3001\u4e0e\u8102\u6c57\u5de5\u5382\u6807\u51c6\u8fdb\u884c\u6bd4\u8f83\u3001\u4f5c\u51fa\u5224\u65ad\u5e76\u8aad\u660e\u7406\u7531\u3002\u5173\u952e\u6280\u80fd\u662f\u8bc4\u4f30\u8bc1\u636e\u6765\u6e90\uff0c\u800c\u975e\u76f2\u76ee\u63a5\u53d7\u58f0\u79f0\u3002\u95ee\uff1a\u8fd9\u4e9b\u8bc1\u636e\u662f\u8c01\u5236\u4f5c\u7684\uff1f\u52a8\u673a\u662f\u4ec0\u4e48\uff1f\u662f\u76f4\u63a5\u8c03\u67e5\u7ed3\u679c\u8fd8\u662f\u9593\u63a5\u8f6c\u8ff0\uff1f" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Sweatshop", zh: "\u8102\u6c57\u5de5\u5382", defEn: "A factory where workers are employed for long hours, very low wages, and often in poor or unsafe conditions.", defZh: "\u5de5\u4eba\u5de5\u4f5c\u65f6\u95f4\u957f\u3001\u5de5\u8d44\u4f4e\u4e14\u5de5\u4f5c\u6761\u4ef6\u6076\u52a3\u6216\u4e0d\u5b89\u5168\u7684\u5de5\u5382\u3002" },
            { en: "Supply chain", zh: "\u4f9b\u5e94\u94fe", defEn: "The sequence of companies and processes involved in producing and delivering a product from raw material to consumer.", defZh: "\u4ece\u539f\u6750\u6599\u5230\u6d88\u8d39\u8005\uff0c\u5c06\u4ea7\u54c1\u751f\u4ea7\u5e76\u8fde\u9001\u5230\u6d88\u8d39\u8005\u624b\u4e2d\u6d89\u53ca\u7684\u516c\u53f8\u548c\u6d41\u7a0b\u7684\u9f3e\u5c42\u5e8f\u5217\u3002" },
            { en: "Trade union", zh: "\u5de5\u4f1a", defEn: "An organised group of workers who act together to protect their rights, wages, and working conditions.", defZh: "\u4e00\u7fa4\u5de5\u4eba\u7ec4\u7ec7\u8d77\u6765\uff0c\u5171\u540c\u4fdd\u62a4\u5176\u6743\u5229\u3001\u5de5\u8d44\u548c\u5de5\u4f5c\u6761\u4ef6\u3002" },
            { en: "Child labour", zh: "\u7ae5\u5de5", defEn: "The use of children in work that deprives them of childhood, education, and may be harmful to their health.", defZh: "\u5c06\u513f\u7ae5\u7528\u4e8e\u526a\u593a\u5176\u7ae5\u5e74\u3001\u6559\u80b2\u673a\u4f1a\u4e14\u53ef\u80fd\u5bb3\u5065\u5eb7\u7684\u5de5\u4f5c\u3002" },
          ],
        },
        { type: "image", caption: "A garment factory in South-East Asia \u2014 the type of facility linked to global fashion supply chains.", captionZh: "\u4e1c\u5357\u4e9a\u7684\u4e00\u5bb6\u670d\u88c5\u5de5\u5382\u2014\u2014\u8fd9\u7c7b\u8bbe\u65bd\u4e0e\u5168\u7403\u65f6\u88c5\u4f9b\u5e94\u94fe\u76f8\u5173\u8054\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Investigation Evidence: H&M in Myanmar", labelZh: "\u8c03\u67e5\u8bc1\u636e\uff1aH&M\u5728\u7f05\u7538", en: "Reports have linked H&M\u2019s supply chain to factories in Myanmar with very low wages, factory unrest, and the use of workers as young as 14. H&M disputes some of these claims and states it has a supplier code of conduct. Students are expected to weigh the evidence and make a justified judgement.", zh: "\u6709\u62a5\u544a\u5c06H&M\u7684\u4f9b\u5e94\u94fe\u4e0e\u7f5a\u7538\u4e00\u4e9b\u5de5\u5382\u76f8\u5173\u8054\uff0c\u8fd9\u4e9b\u5de5\u5382\u5de5\u8d44\u6781\u4f4e\u3001\u5de5\u4eba\u7f62\u5de5\u4e14\u96c7\u7528\u5e7415\u5c81\u7684\u5de5\u4eba\u3002H&M\u5bf9\u90e8\u5206\u6307\u63a7\u63d0\u51fa\u5f02\u8bae\uff0c\u5e76\u8868\u793a\u5176\u5177\u6709\u4f9b\u5e94\u5546\u884c\u4e3a\u51c6\u5219\u3002\u5b66\u751f\u5e94\u6743\u8861\u8bc1\u636e\u5e76\u4f5c\u51fa\u6709\u7406\u7531\u7684\u5224\u65ad\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "List three features that would make a workplace count as a sweatshop.", qZh: "\u5217\u51fa\u4e09\u4e2a\u4f7f\u5de5\u4f5c\u573a\u6240\u88ab\u8ba4\u5b9a\u4e3a\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\u3002", aEn: "Any three from: very low wages below a living wage; excessive working hours often over 12 hours per day; use of child labour under the legal working age; unsafe working conditions with risk of injury; no right to join a trade union or strike.", aZh: "\u4ee5\u4e0b\u4e09\u70b9\uff1a\u5de5\u8d44\u8fdc\u4f4e\u4e8e\u751f\u6d3b\u5de5\u8d44\u6807\u51c6\uff1b\u5de5\u4f5c\u65f6\u95f4\u8fc7\u957f\uff0c\u901a\u5e38\u8d85\u8fc7\u6bcf\u65e5 12 \u5c0f\u65f6\uff1b\u4f7f\u7528\u4e0d\u8db3\u6cd5\u5b9a\u5de5\u4f5c\u5e74\u9f84\u7684\u7ae5\u5de5\uff1b\u5de5\u4f5c\u6761\u4ef6\u4e0d\u5b89\u5168\u4e14\u5b58\u5728\u53d7\u4f24\u98ce\u9669\uff1b\u6ca1\u6709\u52a0\u5165\u5de5\u4f1a\u6216\u7f22\u5de5\u7684\u6743\u5229\u3002" },
            { qEn: "Based on the evidence available, do you think H&M uses sweatshop labour? Justify your answer.", qZh: "\u6839\u636e\u73b0\u6709\u8bc1\u636e\uff0c\u4f60\u8ba4\u4e3aH&M\u662f\u5426\u4f7f\u7528\u8102\u6c57\u5de5\u5382\u52b3\u52a8\uff1f\u8bf7\u8aad\u660e\u4f60\u7684\u7b54\u6848\u3002", aEn: "The evidence suggests that at least some factories in H&M\u2019s supply chain share features of sweatshops, including very low wages and the use of underage workers in Myanmar. However, H&M is not directly running these factories \u2014 it uses suppliers. A fair judgement would acknowledge the evidence points to sweatshop-like conditions in parts of its supply chain, while noting that H&M disputes some claims and has a stated code of conduct.", aZh: "\u73b0\u6709\u8bc1\u636e\u8868\u660e\uff0cH&M\u4f9b\u5e94\u94fe\u4e2d\u81f3\u5c11\u90e8\u5206\u5de5\u5382\u5177\u6709\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\uff0c\u5305\u62ec\u5de5\u8d44\u6781\u4f4e\u548c\u7f5a\u7538\u4f7f\u7528\u672a\u6210\u5e74\u5de5\u4eba\u3002\u7136\u800c\uff0cH&M\u5e76\u975e\u76f4\u63a5\u7ecf\u8425\u8fd9\u4e9b\u5de5\u5382\u2014\u2014\u5b83\u4f7f\u7528\u7684\u662f\u4f9b\u5e94\u5546\u3002\u516c\u5e73\u7684\u5224\u65ad\u5e94\u5f53\u627f\u8ba4\u8bc1\u636e\u6307\u5411\u5176\u4f9b\u5e94\u94fe\u7684\u90e8\u5206\u5de5\u5382\u5b58\u5728\u8102\u6c57\u5de5\u5382\u5f0f\u7684\u5de5\u4f5c\u6761\u4ef6\uff0c\u540c\u65f6\u6307\u51faH&M\u5bf9\u90e8\u5206\u6307\u63a7\u63d0\u51fa\u5f02\u8bae\u4e14\u5177\u6709\u660e\u786e\u7684\u884c\u4e3a\u51c6\u5219\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is a feature of a sweatshop?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\uff1f",
          opts: [
            { en: "Workers earn above the living wage", zh: "\u5de5\u4eba\u5de5\u8d44\u9ad8\u4e8e\u751f\u6d3b\u5de5\u8d44\u6807\u51c6" },
            { en: "Workers have the right to join a trade union", zh: "\u5de5\u4eba\u6709\u6743\u5229\u52a0\u5165\u5de5\u4f1a" },
            { en: "Workers work excessive hours for very low pay", zh: "\u5de5\u4eba\u4ee5\u6781\u4f4e\u5de5\u8d44\u8d85\u65f6\u5de5\u4f5c" },
            { en: "Workers are provided with safe, comfortable conditions", zh: "\u5de5\u4eba\u88ab\u63d0\u4f9b\u5b89\u5168\u3001\u8212\u9002\u7684\u5de5\u4f5c\u6761\u4ef6" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Sweatshops are defined by excessive hours, very low wages, and poor conditions. Working long hours for very low pay is one of the clearest indicators.",
          explainCorrectZh: "\u6b63\u786e\uff01\u8102\u6c57\u5de5\u5382\u7684\u7279\u5f81\u662f\u5de5\u4f5c\u65f6\u95f4\u8fc7\u957f\u3001\u5de5\u8d44\u6781\u4f4e\u548c\u5de5\u4f5c\u6761\u4ef6\u6076\u52a3\u3002\u4ee5\u6781\u4f4e\u5de5\u8d44\u8d85\u65f6\u5de5\u4f5c\u662f\u6700\u660e\u663e\u7684\u6307\u6807\u4e4b\u4e00\u3002",
          explainWrongEn: "Not quite. Fair wages, union rights, and safe conditions are features of fair workplaces \u2014 the opposite of sweatshops. The correct answer is workers working excessive hours for very low pay.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5408\u7406\u5de5\u8d44\u3001\u5de5\u4f1a\u6743\u5229\u548c\u5b89\u5168\u6761\u4ef6\u662f\u516c\u5e73\u5de5\u4f5c\u573a\u6240\u7684\u7279\u5f81\u2014\u2014\u6070\u6070\u4e0e\u8102\u6c57\u5de5\u5382\u76f8\u53cd\u3002\u6b63\u786e\u7b54\u6848\u662f\u5de5\u4eba\u4ee5\u6781\u4f4e\u5de5\u8d44\u8d85\u65f6\u5de5\u4f5c\u3002",
        },
      ],
    },

    /* ========== Lesson 8 ========== */
    {
      num: 8,
      badge: "T",
      title: "Decline of industry in developed countries",
      titleZh: "\u53d1\u5c55\u4e2d\u56fd\u5bb6\u7684\u5de5\u4e1a\u8870\u9000",
      subtitle: "As manufacturing moved to Asia, the industrial regions of Europe and North America went into decline \u2014 with long-lasting social consequences.",
      subtitleZh: "\u968f\u7740\u5236\u9020\u4e1a\u5411\u4e9a\u6d32\u8f6c\u79fb\uff0c\u6b27\u6d32\u548c\u5317\u7f8e\u7684\u5de5\u4e1a\u5730\u533a\u5f00\u59cb\u8870\u9000\u2014\u2014\u5e76\u4ea7\u751f\u4e86\u6301\u4e45\u7684\u793e\u4f1a\u5f71\u54cd\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain what deindustrialisation is and why it happened in developed countries.", zh: "\u6211\u80fd\u89e3\u91ca\u53bb\u5de5\u4e1a\u5316\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5b83\u4e3a\u4ec0\u4e48\u5728\u53d1\u5c55\u4e2d\u56fd\u5bb6\u53d1\u751f\u3002" },
            { en: "I can describe the social effects of deindustrialisation on communities.", zh: "\u6211\u80fd\u63cf\u8ff0\u53bb\u5de5\u4e1a\u5316\u5bf9\u793e\u533a\u7684\u793e\u4f1a\u5f71\u54cd\u3002" },
            { en: "I can link deindustrialisation to outsourcing and the global shift.", zh: "\u6211\u80fd\u5c06\u53bb\u5de5\u4e1a\u5316\u4e0e\u5916\u5305\u548c\u5168\u7403\u8f6c\u79fb\u76f8\u8054\u7cfb\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Deindustrialisation is the decline of manufacturing industry in a country or region, usually because factories close or move abroad. In the UK, cities like Blackburn were once major centres of textile manufacturing. As cheaper production became available in Asia through outsourcing, these industries declined and thousands of factory jobs were lost.", zh: "\u53bb\u5de5\u4e1a\u5316\u662f\u6307\u4e00\u4e2a\u56fd\u5bb6\u6216\u5730\u533a\u7684\u5236\u9020\u4e1a\u8870\u9000\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5de5\u5382\u5173\u95ed\u6216\u8fc1\u5f80\u5176\u4ed6\u5730\u65b9\u3002\u5728\u82f1\u56fd\uff0c\u662f\u83b1\u514b\u518c\u7b49\u57ce\u5e02\u66fe\u7ecf\u662f\u7eb7\u7ec7\u5236\u9020\u4e1a\u7684\u91cd\u8981\u4e2d\u5fc3\u3002\u968f\u7740\u5de5\u4e1a\u751f\u4ea7\u901a\u8fc7\u5916\u5305\u8f6c\u79fb\u81f3\u4e9a\u6d32\u8fdb\u800c\u64b8\u4f4e\u4e86\u751f\u4ea7\u6210\u672c\uff0c\u8fd9\u4e9b\u4e1a\u52a1\u8d70\u5411\u8870\u9000\uff0c\u6570\u4e07\u5de5\u5382\u5c31\u4e1a\u673a\u4f1a\u5c31\u6b64\u6d88\u5931\u3002" },
            { type: "highlight", en: "Social effects of deindustrialisation include: high unemployment in former industrial areas; poverty and reduced income for families; poor physical and mental health; decline of local businesses as people have less money to spend; population decline as people move away to find work; environmental damage from abandoned industrial sites.", zh: "\u53bb\u5de5\u4e1a\u5316\u7684\u793e\u4f1a\u5f71\u54cd\u5305\u62ec\uff1a\u524d\u5de5\u4e1a\u5730\u533a\u5931\u4e1a\u7387\u9ad8\u5c45\uff1b\u5bb6\u5ead\u8d2b\u56f0\u548c\u6536\u5165\u964d\u4f4e\uff1b\u8eab\u5fc3\u5065\u5eb7\u6c34\u5e73\u4e0b\u964d\uff1b\u56e0\u4eba\u4eec\u82b1\u9500\u51cf\u5c11\u800c\u5bfc\u81f4\u5f53\u5730\u4e1a\u52a1\u8870\u9000\uff1b\u4eba\u53e3\u5916\u6d41\u6c42\u804c\u5bfc\u81f4\u4eba\u53e3\u51cf\u5c11\uff1b\u5e9f\u5f03\u5de5\u4e1a\u5382\u5740\u5bf9\u73af\u5883\u7684\u635f\u5bb3\u3002" },
            { type: "example", en: "Blackburn, UK: Blackburn was once a world leader in cotton textile production. As global shift and outsourcing moved textile production to Asia, Blackburn\u2019s mills closed. The town experienced high unemployment, poverty, and population loss. This shows that the same processes that created growth in Asia caused decline in places like Blackburn.", zh: "\u82f1\u56fd\u5e03\u83b1\u514b\u518c\uff1a\u5e03\u83b1\u514b\u518c\u66fe\u7ecf\u662f\u5168\u7403\u68c9\u7eb6\u5236\u9020\u4e1a\u7684\u9886\u5148\u8005\u3002\u968f\u7740\u5168\u7403\u8f6c\u79fb\u548c\u5916\u5305\u5c06\u7eb6\u7ec7\u751f\u4ea7\u8f6c\u79fb\u81f3\u4e9a\u6d32\uff0c\u5e03\u83b1\u514b\u518c\u7684\u7eb7\u5382\u76f8\u7ee7\u5173\u95ed\u3002\u8be5\u9547\u7ecf\u5386\u4e86\u9ad8\u5931\u4e1a\u7387\u3001\u8d2b\u56f0\u548c\u4eba\u53e3\u5916\u6d41\u3002\u8fd9\u8bf4\u660e\uff0c\u5728\u4e9a\u6d32\u521b\u9020\u589e\u957f\u7684\u540c\u4e00\u8fc7\u7a0b\uff0c\u5bf9\u5e03\u83b1\u514b\u518c\u7b49\u5730\u5372\u6765\u4e86\u8870\u9000\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Deindustrialisation", zh: "\u53bb\u5de5\u4e1a\u5316", defEn: "The decline of manufacturing industry in a country or region, often because factories close or relocate abroad.", defZh: "\u4e00\u4e2a\u56fd\u5bb6\u6216\u5730\u533a\u5236\u9020\u4e1a\u8870\u9000\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5de5\u5382\u5173\u95ed\u6216\u8fc1\u5f80\u5176\u4ed6\u5730\u65b9\u3002" },
            { en: "Unemployment", zh: "\u5931\u4e1a", defEn: "The state of being without paid employment while available for and actively seeking work.", defZh: "\u5df2\u5185\u5de5\u4f5c\u6c42\u804c\u4f46\u5c1a\u672a\u83b7\u5f97\u5e26\u85aa\u5c31\u4e1a\u7684\u72b6\u6001\u3002" },
            { en: "Post-industrial", zh: "\u540e\u5de5\u4e1a\u5316", defEn: "Describing an economy or region that has moved away from manufacturing towards services and knowledge-based work.", defZh: "\u63cf\u8ff0\u5df2\u4ece\u5236\u9020\u4e1a\u8f6c\u5411\u670d\u52a1\u4e1a\u548c\u77e5\u8bc6\u5bc6\u96c6\u578b\u5de5\u4f5c\u7684\u7ecf\u6d4e\u6216\u5730\u533a\u3002" },
            { en: "Industrial decline", zh: "\u5de5\u4e1a\u8870\u9000", defEn: "The reduction in manufacturing output and jobs in a region, often leading to economic and social problems.", defZh: "\u4e00\u4e2a\u5730\u533a\u5236\u9020\u4e1a\u4ea7\u51fa\u548c\u5c31\u4e1a\u673a\u4f1a\u51cf\u5c11\uff0c\u5f80\u5f80\u5bfc\u81f4\u7ecf\u6d4e\u548c\u793e\u4f1a\u95ee\u9898\u3002" },
          ],
        },
        { type: "image", caption: "An abandoned textile mill in Blackburn, UK \u2014 a symbol of deindustrialisation.", captionZh: "\u82f1\u56fd\u5e03\u83b1\u514b\u518c\u4e00\u5ea7\u5e9f\u5f03\u7684\u7eb6\u7ec7\u5382\u2014\u2014\u53bb\u5de5\u4e1a\u5316\u7684\u8c61\u5f81\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Case Study: Blackburn", labelZh: "\u6848\u4f8b\u7814\u7a76\uff1a\u5e03\u83b1\u514b\u518c", en: "Blackburn was a world centre for cotton textile production. Global shift and outsourcing to Asia caused its mills to close. High unemployment, poverty, and poor health followed. The town\u2019s story illustrates how deindustrialisation and the global shift are two sides of the same economic process.", zh: "\u5e03\u83b1\u514b\u518c\u66fe\u662f\u68c9\u7eb6\u5236\u9020\u4e1a\u7684\u4e16\u754c\u4e2d\u5fc3\u3002\u5168\u7403\u8f6c\u79fb\u548c\u5c31\u4e9a\u5de5\u5382\u5173\u95ed\u5bfc\u81f4\u5176\u7eb9\u5382\u76f8\u7ee7\u5173\u95ed\u3002\u9ad8\u5931\u4e1a\u7387\u3001\u8d2b\u56f0\u548c\u5065\u5eb7\u72b6\u51b5\u6076\u5316\u968f\u4e4b\u800c\u6765\u3002\u8be5\u9547\u7684\u6545\u4e8b\u8bf4\u660e\uff0c\u53bb\u5de5\u4e1a\u5316\u548c\u5168\u7403\u8f6c\u79fb\u662f\u540c\u4e00\u7ecf\u6d4e\u8fc7\u7a0b\u7684\u4e24\u4e2a\u9762\u5411\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain the link between outsourcing, the global shift, and deindustrialisation in the UK.", qZh: "\u89e3\u91ca\u82f1\u56fd\u5916\u5305\u3001\u5168\u7403\u8f6c\u79fb\u548c\u53bb\u5de5\u4e1a\u5316\u4e4b\u95f4\u7684\u8054\u7cfb\u3002", aEn: "As TNCs outsourced manufacturing to lower-cost countries in Asia, UK factories became less competitive and closed. This is the global shift in action \u2014 economic activity moved from the UK to Asia. The result in the UK was deindustrialisation: fewer factory jobs, rising unemployment, and declining industrial towns like Blackburn.", aZh: "\u968f\u7740\u8de8\u56fd\u516c\u53f8\u5c06\u5236\u9020\u4e1a\u5916\u5305\u7ed9\u4e9a\u6d32\u6210\u672c\u8f83\u4f4e\u7684\u56fd\u5bb6\uff0c\u82f1\u56fd\u5de5\u5382\u5931\u53bb\u7ade\u4e89\u529b\u5e76\u7eda\u7eb7\u5173\u95ed\u3002\u8fd9\u662f\u5168\u7403\u8f6c\u79fb\u7684\u5b9e\u9645\u4f53\u73b0\u2014\u2014\u7ecf\u6d4e\u6d3b\u52a8\u4ece\u82f1\u56fd\u8f6c\u79fb\u5230\u4e9a\u6d32\u3002\u5176\u5728\u82f1\u56fd\u7684\u7ed3\u679c\u662f\u53bb\u5de5\u4e1a\u5316\uff1a\u5de5\u5382\u5c31\u4e1a\u673a\u4f1a\u51cf\u5c11\u3001\u5931\u4e1a\u7387\u4e0a\u5347\u4ee5\u53ca\u5e03\u83b1\u514b\u518c\u7b49\u5de5\u4e1a\u57ce\u9547\u8870\u9000\u3002" },
            { qEn: "Describe two social effects of deindustrialisation on a community like Blackburn.", qZh: "\u63cf\u8ff0\u53bb\u5de5\u4e1a\u5316\u5bf9\u5e03\u83b1\u514b\u518c\u8fd9\u7c7b\u793e\u533a\u7684\u4e24\u4e2a\u793e\u4f1a\u5f71\u54cd\u3002", aEn: "First, high unemployment: when factories close, large numbers of workers lose their jobs and may struggle to find alternative employment, especially in areas with few other industries. Second, poor health: unemployment and poverty are linked to higher rates of physical illness and mental health problems, as people face financial stress and loss of purpose.", aZh: "\u7b2c\u4e00\uff0c\u9ad8\u5931\u4e1a\u7387\uff1a\u5de5\u5382\u5173\u95ed\u540e\uff0c\u5927\u91cf\u5de5\u4eba\u5931\u53bb\u5de5\u4f5c\uff0c\u5c24\u5176\u5728\u5176\u4ed6\u4e1a\u52a1\u7a00\u5c11\u7684\u5730\u533a\uff0c\u53ef\u80fd\u96be\u4ee5\u627e\u5230\u5176\u4ed6\u5c31\u4e1a\u673a\u4f1a\u3002\u7b2c\u4e8c\uff0c\u5065\u5eb7\u72b6\u51b5\u6076\u5316\uff1a\u5931\u4e1a\u548c\u8d2b\u56f0\u4e0e\u8eab\u4f53\u75be\u75c5\u548c\u5fc3\u7406\u5065\u5eb7\u95ee\u9898\u53d1\u751f\u7387\u9ad8\u76f8\u5173\uff0c\u56e0\u4e3a\u4eba\u4eec\u9762\u4e34\u7ecf\u6d4e\u538b\u529b\u548c\u4e27\u5931\u4eba\u751f\u76ee\u6807\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What is deindustrialisation?",
          qZh: "\u4ec0\u4e48\u662f\u53bb\u5de5\u4e1a\u5316\uff1f",
          opts: [
            { en: "The growth of new factories in developing countries", zh: "\u53d1\u5c55\u4e2d\u56fd\u5bb6\u65b0\u5de5\u5382\u7684\u589e\u957f" },
            { en: "The decline of manufacturing in a country as jobs move abroad", zh: "\u968f\u7740\u5c31\u4e1a\u673a\u4f1a\u5916\u6d41\uff0c\u4e00\u4e2a\u56fd\u5bb6\u7684\u5236\u9020\u4e1a\u8870\u9000" },
            { en: "The movement of services from cities to rural areas", zh: "\u670d\u52a1\u4e1a\u4ece\u57ce\u5e02\u5411\u519c\u6751\u5730\u533a\u7684\u8f6c\u79fb" },
            { en: "The increase in primary sector employment", zh: "\u7b2c\u4e00\u4ea7\u4e1a\u5c31\u4e1a\u4eba\u6570\u589e\u52a0" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Deindustrialisation is the decline of manufacturing in a country or region, often because factories close or relocate to lower-cost countries through outsourcing.",
          explainCorrectZh: "\u6b63\u786e\uff01\u53bb\u5de5\u4e1a\u5316\u662f\u4e00\u4e2a\u56fd\u5bb6\u6216\u5730\u533a\u5236\u9020\u4e1a\u8870\u9000\u7684\u8fc7\u7a0b\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5de5\u5382\u5173\u95ed\u6216\u901a\u8fc7\u5916\u5305\u8fc1\u5f80\u6210\u672c\u8f83\u4f4e\u7684\u56fd\u5bb6\u3002",
          explainWrongEn: "Not quite. Deindustrialisation is about the decline of manufacturing, not its growth, not service movements, and not primary employment. The correct answer is the decline of manufacturing as jobs move abroad.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u53bb\u5de5\u4e1a\u5316\u662f\u5173\u4e8e\u5236\u9020\u4e1a\u7684\u8870\u9000\uff0c\u800c\u975e\u5176\u589e\u957f\uff0c\u4e0d\u6d89\u53ca\u670d\u52a1\u4e1a\u8fc1\u79fb\uff0c\u4e5f\u4e0d\u662f\u7b2c\u4e00\u4ea7\u4e1a\u5c31\u4e1a\u3002\u6b63\u786e\u7b54\u6848\u662f\u968f\u7740\u5c31\u4e1a\u673a\u4f1a\u5916\u6d41\u800c\u5bfc\u81f4\u5236\u9020\u4e1a\u8870\u9000\u3002",
        },
      ],
    },

    /* ========== Lesson 9 ========== */
    {
      num: 9,
      badge: "A",
      title: "Post-industrial economies: The Rust Belt",
      titleZh: "\u540e\u5de5\u4e1a\u5316\u7ecf\u6d4e\uff1a\u9508\u8680\u5730\u5e26",
      subtitle: "The Rust Belt shows how deindustrialisation creates long-term economic, social, and environmental challenges for entire regions.",
      subtitleZh: "\u9508\u8680\u5730\u5e26\u5c55\u793a\u4e86\u53bb\u5de5\u4e1a\u5316\u5982\u4f55\u5bf9\u6574\u4e2a\u5730\u533a\u4ea7\u751f\u957f\u671f\u7684\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u6311\u6218\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe what the Rust Belt is and explain how it formed.", zh: "\u6211\u80fd\u63cf\u8ff0\u9508\u8680\u5730\u5e26\u662f\u4ec0\u4e48\uff0c\u5e76\u89e3\u91ca\u5b83\u662f\u5982\u4f55\u5f62\u6210\u7684\u3002" },
            { en: "I can explain the economic, social, health, and environmental effects of deindustrialisation in the Rust Belt.", zh: "\u6211\u80fd\u89e3\u91ca\u9508\u8680\u5730\u5e26\u53bb\u5de5\u4e1a\u5316\u5bf9\u7ecf\u6d4e\u3001\u793e\u4f1a\u3001\u5065\u5eb7\u548c\u73af\u5883\u7684\u5f71\u54cd\u3002" },
            { en: "I can describe how some Rust Belt cities have tried to regenerate their economies.", zh: "\u6211\u80fd\u63cf\u8ff0\u9508\u8680\u5730\u5e26\u7684\u4e00\u4e9b\u57ce\u5e02\u5982\u4f55\u5c1d\u8bd5\u91cd\u632f\u7ecf\u6d4e\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "The Rust Belt is a region in the north-eastern and mid-western United States that was once a major centre of manufacturing, particularly steel, car production, and heavy industry. Cities such as Detroit, Pittsburgh, and Cleveland were among the most industrialised in the world. As manufacturing shifted to Asia through the global shift and outsourcing, these cities experienced rapid deindustrialisation.", zh: "\u9508\u8680\u5730\u5e26\u662f\u7f8e\u56fd\u4e1c\u5317\u90e8\u548c\u4e2d\u897f\u90e8\u7684\u4e00\u4e2a\u5730\u533a\uff0c\u66fe\u7ecf\u662f\u5236\u9020\u4e1a\u7684\u91cd\u8981\u4e2d\u5fc3\uff0c\u5c24\u5176\u662f\u9493\u9435\u3001\u6c7d\u8f66\u751f\u4ea7\u548c\u91cd\u5de5\u4e1a\u3002\u5fb7\u5f8b\u3001\u5339\u5179\u5821\u548c\u514b\u5229\u592b\u5170\u7b49\u57ce\u5e02\u66fe\u662f\u5168\u7403\u5de5\u4e1a\u5316\u7a0b\u5ea6\u6700\u9ad8\u7684\u57ce\u5e02\u4e4b\u4e00\u3002\u968f\u7740\u5236\u9020\u4e1a\u901a\u8fc7\u5168\u7403\u8f6c\u79fb\u548c\u5916\u5305\u5411\u4e9a\u6d32\u8f6c\u79fb\uff0c\u8fd9\u4e9b\u57ce\u5e02\u7ecf\u5386\u4e86\u8fc5\u901f\u7684\u53bb\u5de5\u4e1a\u5316\u8fc7\u7a0b\u3002" },
            { type: "highlight", en: "Effects of deindustrialisation in the Rust Belt: Economic: high unemployment, businesses closing, declining tax revenues. Social: poverty, population decline as people leave, poor housing, crime. Health: stress-related illness, poor mental health, drug and alcohol dependency. Environmental: abandoned factories and contaminated land (brownfield sites) left behind by heavy industry.", zh: "\u9508\u8680\u5730\u5e26\u53bb\u5de5\u4e1a\u5316\u7684\u5f71\u54cd\uff1a\u7ecf\u6d4e\u65b9\u9762\uff1a\u5931\u4e1a\u7387\u9ad8\u3001\u4e1a\u52a1\u5173\u95ed\u3001\u7a0e\u6536\u51cf\u5c11\u3002\u793e\u4f1a\u65b9\u9762\uff1a\u8d2b\u56f0\u3001\u4eba\u53e3\u5916\u6d41\u3001\u4f4f\u623f\u8d28\u91cf\u4e0b\u964d\u3001\u72af\u7f6a\u7387\u5347\u9ad8\u3002\u5065\u5eb7\u65b9\u9762\uff1a\u538b\u529b\u76f8\u5173\u75be\u75c5\u3001\u5fc3\u7406\u5065\u5eb7\u72b6\u51b5\u6076\u5316\u3001\u836f\u7269\u548c\u9152\u7cbe\u4f9d\u8d56\u3002\u73af\u5883\u65b9\u9762\uff1a\u91cd\u5de5\u4e1a\u9057\u7559\u7684\u5e9f\u5f03\u5de5\u5382\u548c\u53d7\u6c61\u67d3\u571f\u5730\uff08\u68d5\u5730\uff09\u3002" },
            { type: "text", en: "Some Rust Belt cities have tried to regenerate. Pittsburgh, for example, has reinvented itself as a centre for healthcare, education, and technology. This shows that post-industrial change is possible, but it is not automatic and not every community benefits equally from regeneration.", zh: "\u9508\u8680\u5730\u5e26\u7684\u4e00\u4e9b\u57ce\u5e02\u5c1d\u8bd5\u8fdb\u884c\u518d\u751f\u3002\u4f8b\u5982\uff0c\u5339\u5179\u5821\u5c06\u81ea\u8eab\u91cd\u5851\u4e3a\u533b\u7597\u3001\u6559\u80b2\u548c\u79d1\u6280\u4e2d\u5fc3\u3002\u8fd9\u8bf4\u660e\u540e\u5de5\u4e1a\u5316\u8f6c\u578b\u662f\u53ef\u80fd\u7684\uff0c\u4f46\u5e76\u975e\u4e00\u8717\u800c\u5c31\uff0c\u4e5f\u5e76\u975e\u6bcf\u4e2a\u793e\u533a\u90fd\u80fd\u540c\u7b49\u53d7\u76ca\u4e8e\u518d\u751f\u8ba1\u5212\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Rust Belt", zh: "\u9508\u8680\u5730\u5e26", defEn: "A region in the north-eastern USA once dominated by manufacturing, now associated with industrial decline and deindustrialisation.", defZh: "\u7f8e\u56fd\u4e1c\u5317\u90e8\u4e00\u5ea6\u4ee5\u5236\u9020\u4e1a\u4e3a\u4e3b\u7684\u5730\u533a\uff0c\u73b0\u5728\u4e0e\u5de5\u4e1a\u8870\u9000\u548c\u53bb\u5de5\u4e1a\u5316\u76f8\u5173\u8054\u3002" },
            { en: "Brownfield site", zh: "\u68d5\u5730", defEn: "Land previously used for industrial purposes that may be contaminated and requires clean-up before it can be reused.", defZh: "\u66fe\u7528\u4e8e\u5de5\u4e1a\u76ee\u7684\u7684\u571f\u5730\uff0c\u53ef\u80fd\u53d7\u5230\u6c61\u67d3\uff0c\u9700\u8981\u6e05\u7406\u540e\u624d\u80fd\u518d\u5229\u7528\u3002" },
            { en: "Regeneration", zh: "\u518d\u751f", defEn: "The process of improving and reviving a declining area, often through new investment, housing, or industries.", defZh: "\u901a\u8fc7\u65b0\u6295\u8d44\u3001\u4f4f\u623f\u6216\u4e1a\u52a1\u6539\u5584\u548c\u590d\u5174\u8870\u9000\u5730\u533a\u7684\u8fc7\u7a0b\u3002" },
            { en: "Contaminated land", zh: "\u53d7\u6c61\u67d3\u571f\u5730", defEn: "Land that has been polluted by chemicals, waste, or industrial activity and poses a risk to health and the environment.", defZh: "\u88ab\u5316\u5b66\u54c1\u3001\u5e9f\u6599\u6216\u5de5\u4e1a\u6d3b\u52a8\u6c61\u67d3\u7684\u571f\u5730\uff0c\u5bf9\u5065\u5eb7\u548c\u73af\u5883\u6784\u6210\u5a01\u8583\u3002" },
          ],
        },
        { type: "image", caption: "An abandoned factory in the Rust Belt \u2014 a visual symbol of post-industrial decline.", captionZh: "\u9508\u8680\u5730\u5e26\u7684\u4e00\u5ea7\u5e9f\u5f03\u5de5\u5382\u2014\u2014\u540e\u5de5\u4e1a\u5316\u8870\u9000\u7684\u76f4\u89c2\u8c61\u5f81\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Case Study: The Rust Belt", labelZh: "\u6848\u4f8b\u7814\u7a76\uff1a\u9508\u8680\u5730\u5e26", en: "The Rust Belt in the north-eastern USA includes cities like Detroit, Pittsburgh, and Cleveland. Once manufacturing centres, they experienced rapid deindustrialisation as production shifted to Asia. Effects include unemployment, population loss, poor health, and contaminated brownfield sites. Pittsburgh has partly regenerated through healthcare and technology.", zh: "\u7f8e\u56fd\u4e1c\u5317\u90e8\u7684\u9508\u8680\u5730\u5e26\u5305\u62ec\u5fb7\u5f8b\u3001\u5339\u5179\u5821\u548c\u514b\u5229\u592b\u5170\u7b49\u57ce\u5e02\u3002\u5b83\u4eec\u66fe\u662f\u5236\u9020\u4e1a\u4e2d\u5fc3\uff0c\u968f\u7740\u751f\u4ea7\u8f6c\u5411\u4e9a\u6d32\u800c\u7ecf\u5386\u4e86\u8fc5\u901f\u53bb\u5de5\u4e1a\u5316\u3002\u5f71\u54cd\u5305\u62ec\u5931\u4e1a\u3001\u4eba\u53e3\u5916\u6d41\u3001\u5065\u5eb7\u72b6\u51b5\u6076\u5316\u548c\u68d5\u5730\u6c61\u67d3\u3002\u5339\u5179\u5821\u5df2\u901a\u8fc7\u533b\u7597\u548c\u79d1\u6280\u4e1a\u90e8\u5206\u5b9e\u73b0\u518d\u751f\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain why the Rust Belt experienced deindustrialisation. Link your answer to the global shift.", qZh: "\u89e3\u91ca\u9508\u8680\u5730\u5e26\u4e3a\u4ec0\u4e48\u7ecf\u5386\u4e86\u53bb\u5de5\u4e1a\u5316\u3002\u5c06\u4f60\u7684\u7b54\u6848\u4e0e\u5168\u7403\u8f6c\u79fb\u76f8\u5173\u8054\u3002", aEn: "The Rust Belt experienced deindustrialisation because TNCs and manufacturers outsourced production to lower-cost countries in Asia. This is the global shift: economic activity and manufacturing jobs moved from the USA to Asian countries like China and Vietnam. As a result, factories in the Rust Belt closed, unemployment rose, and former industrial cities declined.", aZh: "\u9508\u8680\u5730\u5e26\u53d1\u751f\u53bb\u5de5\u4e1a\u5316\uff0c\u662f\u56e0\u4e3a\u8de8\u56fd\u516c\u53f8\u548c\u5236\u9020\u5546\u5c06\u751f\u4ea7\u5916\u5305\u7ed9\u4e9a\u6d32\u6210\u672c\u8f83\u4f4e\u7684\u56fd\u5bb6\u3002\u8fd9\u5c31\u662f\u5168\u7403\u8f6c\u79fb\uff1a\u7ecf\u6d4e\u6d3b\u52a8\u548c\u5236\u9020\u4e1a\u5c31\u4e1a\u673a\u4f1a\u4ece\u7f8e\u56fd\u8f6c\u5411\u4e2d\u56fd\u3001\u8d8a\u5357\u7b49\u4e9a\u6d32\u56fd\u5bb6\u3002\u7ed3\u679c\uff0c\u9508\u8680\u5730\u5e26\u7684\u5de5\u5382\u5173\u95ed\uff0c\u5931\u4e1a\u7387\u4e0a\u5347\uff0c\u524d\u5de5\u4e1a\u57ce\u5e02\u8870\u9000\u3002" },
            { qEn: "Describe two economic and two social effects of deindustrialisation in the Rust Belt.", qZh: "\u63cf\u8ff0\u9508\u8680\u5730\u5e26\u53bb\u5de5\u4e1a\u5316\u7684\u4e24\u4e2a\u7ecf\u6d4e\u5f71\u54cd\u548c\u4e24\u4e2a\u793e\u4f1a\u5f71\u54cd\u3002", aEn: "Economic: (1) High unemployment as factories close and large numbers of workers lose their jobs. (2) Declining tax revenues as fewer businesses operate, leaving less money for public services. Social: (1) Population decline as people move away from affected cities to find work elsewhere. (2) Rising poverty and poor housing as incomes fall and investment in the area reduces.", aZh: "\u7ecf\u6d4e\uff1a\uff081\uff09\u5de5\u5382\u5173\u95ed\u5bfc\u81f4\u5927\u91cf\u5de5\u4eba\u5931\u4e1a\uff0c\u5931\u4e1a\u7387\u9ad8\u5c45\u3002\uff082\uff09\u7531\u4e8e\u4e1a\u52a1\u51cf\u5c11\uff0c\u7a0e\u6536\u51cf\u5c11\uff0c\u7528\u4e8e\u516c\u5171\u670d\u52a1\u7684\u8d44\u91d1\u8d8a\u6765\u8d8a\u5c11\u3002\u793e\u4f1a\uff1a\uff081\uff09\u4eba\u53e3\u5916\u6d41\uff0c\u4eba\u4eec\u79bb\u5f00\u53d7\u5f71\u54cd\u7684\u57ce\u5e02\u53bb\u522b\u5904\u5bfb\u627e\u5c31\u4e1a\u673a\u4f1a\u3002\uff082\uff09\u6536\u5165\u4e0b\u964d\u548c\u6295\u8d44\u51cf\u5c11\u5bfc\u81f4\u8d2b\u56f0\u52a0\u5265\u548c\u4f4f\u623f\u8d28\u91cf\u4e0b\u964d\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which US city is a well-known example of Rust Belt regeneration, having rebuilt its economy around healthcare and technology?",
          qZh: "\u54ea\u4e2a\u7f8e\u56fd\u57ce\u5e02\u662f\u9508\u8680\u5730\u5e26\u518d\u751f\u7684\u8457\u540d\u4f8b\u5b50\uff0c\u5df2\u5c06\u5176\u7ecf\u6d4e\u91cd\u5efa\u56f4\u7ed5\u533b\u7597\u548c\u79d1\u6280\u5c55\u5f00\uff1f",
          opts: [
            { en: "Detroit", zh: "\u5fb7\u5f8b" },
            { en: "Cleveland", zh: "\u514b\u5229\u592b\u5170" },
            { en: "Pittsburgh", zh: "\u5339\u5179\u5821" },
            { en: "Chicago", zh: "\u829d\u52a0\u54e5" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Pittsburgh has partly regenerated by rebuilding its economy around healthcare, universities, and technology \u2014 shifting from steel to knowledge-based industries.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5339\u5179\u5821\u5df2\u90e8\u5206\u5b9e\u73b0\u518d\u751f\uff0c\u5c06\u5176\u7ecf\u6d4e\u91cd\u5fc3\u91cd\u5851\u4e3a\u533b\u7597\u3001\u9ad8\u6821\u548c\u79d1\u6280\u2014\u2014\u4ece\u9493\u9435\u8f6c\u5411\u77e5\u8bc6\u5bc6\u96c6\u578b\u4ea7\u4e1a\u3002",
          explainWrongEn: "Not quite. Detroit and Cleveland are still heavily associated with industrial decline. Chicago is not typically classified as a Rust Belt city. The correct answer is Pittsburgh.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5fb7\u5f8b\u548c\u514b\u5229\u592b\u5170\u4ecd\u4e0e\u5de5\u4e1a\u8870\u9000\u5bc6\u5207\u76f8\u5173\u3002\u829d\u52a0\u54e5\u901a\u5e38\u4e0d\u5c5e\u4e8e\u9508\u8680\u5730\u5e27\u57ce\u5e02\u3002\u6b63\u786e\u7b54\u6848\u662f\u5339\u5179\u5821\u3002",
        },
      ],
    },

    /* ========== Lesson 10 ========== */
    {
      num: 10,
      badge: "E",
      title: "The future for Asian economies",
      titleZh: "\u4e9a\u6d32\u7ecf\u6d4e\u7684\u672a\u6765",
      subtitle: "Asia\u2019s economic boom has lifted millions out of poverty \u2014 but it also faces serious long-term challenges around inequality, sustainability, and global power.",
      subtitleZh: "\u4e9a\u6d32\u7684\u7ecf\u6d4e\u8363\u666f\u5c06\u6570\u4ebf\u4eba\u53e3\u5e26\u51fa\u8d2b\u56f0\u2014\u2014\u4f46\u5b83\u4e5f\u9762\u4e34\u5173\u4e8e\u4e0d\u5e73\u7b49\u3001\u53ef\u6301\u7eed\u6027\u548c\u5168\u7403\u5b9a\u4f4d\u7684\u4e25\u9525\u957f\u671f\u6311\u6218\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe the key successes of Asia\u2019s economic boom.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e9a\u6d32\u7ecf\u6d4e\u8363\u666f\u7684\u4e3b\u8981\u6210\u5c31\u3002" },
            { en: "I can identify key long-term challenges facing Asian economies.", zh: "\u6211\u80fd\u8bc6\u522b\u4e9a\u6d32\u7ecf\u6d4e\u9762\u4e34\u7684\u4e3b\u8981\u957f\u671f\u6311\u6218\u3002" },
            { en: "I can evaluate whether Asia\u2019s economic growth is sustainable in the long term.", zh: "\u6211\u80fd\u8bc4\u4f30\u4e9a\u6d32\u7684\u7ecf\u6d4e\u589e\u957f\u662f\u5426\u957f\u671f\u53ef\u6301\u7eed\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Asia\u2019s economic growth over the past 70 years has been remarkable. Hundreds of millions of people have been lifted out of poverty. Life expectancy has risen. Literacy rates have improved. Cities have grown. Countries that were LICs have become MICs or HICs. Countries like China, Japan, South Korea, and Singapore are now major global economic powers.", zh: "\u4e9a\u6d32\u8fc7\u53bb70\u5e74\u7684\u7ecf\u6d4e\u589e\u957f\u662f\u53ef\u51e1\u7684\u3002\u6570\u4ebf\u4eba\u53e3\u8131\u8d2b\u3002\u9884\u671f\u5bff\u547d\u5ef6\u957f\u3002\u8bc6\u5b57\u7387\u63d0\u9ad8\u3002\u57ce\u5e02\u5e9e\u5927\u3002\u66fe\u7ecf\u7684\u4f4e\u6536\u5165\u56fd\u6210\u4e3a\u4e2d\u7b49\u6536\u5165\u56fd\u6216\u9ad8\u6536\u5165\u56fd\u3002\u4e2d\u56fd\u3001\u65e5\u672c\u3001\u97e9\u56fd\u548c\u65b0\u52a0\u5761\u7b49\u56fd\u5bb6\u73b0\u5728\u5df2\u662f\u4e3b\u8981\u7684\u5168\u7403\u7ecf\u6d4e\u5927\u56fd\u3002" },
            { type: "highlight", en: "Key challenges for Asia\u2019s future: inequality \u2014 growth has not been shared equally within or between countries; environmental damage \u2014 rapid industrialisation has caused air and water pollution; labour rights \u2014 sweatshop conditions remain in parts of Asia\u2019s supply chains; demographic change \u2014 ageing populations in Japan and China may slow growth; geopolitical tensions \u2014 especially China\u2013USA relations.", zh: "\u4e9a\u6d32\u672a\u6765\u7684\u4e3b\u8981\u6311\u6218\uff1a\u4e0d\u5e73\u7b49\u2014\u2014\u589e\u957f\u5e76\u6ca1\u6709\u5e73\u5747\u5206\u914d\u7ed9\u56fd\u5185\u6216\u56fd\u5bb6\u95f4\u7684\u6240\u6709\u4eba\uff1b\u73af\u5883\u7834\u574f\u2014\u2014\u5feb\u901f\u5de5\u4e1a\u5316\u5bfc\u81f4\u7a7a\u6c14\u548c\u6c34\u6c61\u67d3\uff1b\u52b3\u5de5\u6743\u5229\u2014\u2014\u8102\u6c57\u5de5\u5382\u6761\u4ef6\u5728\u4e9a\u6d32\u4f9b\u5e94\u94fe\u7684\u90e8\u5206\u5730\u533a\u4ecd\u5b58\u5728\uff1b\u4eba\u53e3\u7ed3\u6784\u53d8\u5316\u2014\u2014\u65e5\u672c\u548c\u4e2d\u56fd\u7684\u8001\u9f84\u5316\u4eba\u53e3\u53ef\u80fd\u62d6\u6162\u589e\u957f\uff1b\u5730\u7f18\u653f\u6cbb\u7d27\u5f20\u2014\u2014\u5c24\u5176\u662f\u4e2d\u7f8e\u5173\u7cfb\u3002" },
            { type: "example", en: "Evaluating sustainability: Asia\u2019s growth has been extraordinary but not without cost. Rapid industrialisation in China and India has produced serious air pollution affecting millions of people. Inequality between rich coastal cities and poor inland rural areas remains sharp. A balanced evaluation would acknowledge both the achievements and the ongoing costs and challenges.", zh: "\u8bc4\u4f30\u53ef\u6301\u7eed\u6027\uff1a\u4e9a\u6d32\u7684\u589e\u957f\u975e\u51e1\u800c\u4e0d\u65e0\u4ee3\u4ef7\u3002\u4e2d\u56fd\u548c\u5370\u5ea6\u7684\u5feb\u901f\u5de5\u4e1a\u5316\u4ea7\u751f\u4e86\u4e25\u91cd\u7684\u7a7a\u6c14\u6c61\u67d3\uff0c\u5f71\u54cd\u4e86\u6570\u4e07\u4eba\u3002\u5bcc\u88d5\u6cbf\u6d77\u57ce\u5e02\u4e0e\u8d2b\u7a77\u5185\u9646\u519c\u6751\u5730\u533a\u4e4b\u95f4\u7684\u4e0d\u5e73\u7b49\u4ecd\u5f88\u660e\u663e\u3002\u5e73\u8861\u7684\u8bc4\u4f30\u5e94\u8be5\u5c06\u627f\u8ba4\u6210\u5c31\u4e0e\u6301\u7eed\u7684\u4ee3\u4ef7\u548c\u6311\u6218\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Sustainability", zh: "\u53ef\u6301\u7eed\u6027", defEn: "The ability to maintain economic, social, and environmental wellbeing without damaging future generations\u2019 ability to meet their needs.", defZh: "\u5728\u4e0d\u635f\u5bb3\u672a\u6765\u4e16\u4ee3\u6ee1\u8db3\u5176\u9700\u6c42\u7684\u80fd\u529b\u7684\u524d\u63d0\u4e0b\uff0c\u7ef4\u6301\u7ecf\u6d4e\u3001\u793e\u4f1a\u548c\u73af\u5883\u5065\u5eb7\u7684\u80fd\u529b\u3002" },
            { en: "Inequality", zh: "\u4e0d\u5e73\u7b49", defEn: "The unequal distribution of wealth, resources, or opportunities between people or countries.", defZh: "\u8d22\u5bcc\u3001\u8d44\u6e90\u6216\u673a\u4f1a\u5728\u4eba\u4eec\u6216\u56fd\u5bb6\u4e4b\u95f4\u7684\u4e0d\u5747\u5916\u5206\u914d\u3002" },
            { en: "Ageing population", zh: "\u8001\u9f84\u5316\u4eba\u53e3", defEn: "A population with an increasing proportion of older people and a declining proportion of young people.", defZh: "\u8001\u5e74\u4eba\u53e3\u6bd4\u4f8b\u4e0d\u65ad\u589e\u52a0\u800c\u5e74\u8f7b\u4eba\u53e3\u6bd4\u4f8b\u4e0d\u65ad\u4e0b\u964d\u7684\u4eba\u53e3\u3002" },
            { en: "Geopolitics", zh: "\u5730\u7f18\u653f\u6cbb", defEn: "The influence of geography and politics on international relations and global power.", defZh: "\u5730\u7406\u548c\u653f\u6cbb\u5bf9\u56fd\u9645\u5173\u7cfb\u548c\u5168\u7403\u529b\u91cf\u7684\u5f71\u54cd\u3002" },
          ],
        },
        { type: "image", caption: "A chart showing economic growth versus pollution and inequality challenges facing Asian economies.", captionZh: "\u5c55\u793a\u4e9a\u6d32\u7ecf\u6d4e\u9762\u4e34\u7684\u7ecf\u6d4e\u589e\u957f\u4e0e\u6c61\u67d3\u53ca\u4e0d\u5e73\u7b49\u6311\u6218\u5bf9\u6bd4\u7684\u56fe\u8868\u3002", source: "Placeholder \u2014 image to be added" },
        { type: "source", labelEn: "Evaluative Summary", labelZh: "\u8bc4\u4f30\u603b\u7ed3", en: "Asia\u2019s economic boom lifted hundreds of millions out of poverty and transformed the global economy. However, the same processes also caused inequality, environmental damage, labour exploitation, and demographic change. Evaluating whether growth is sustainable requires weighing both the achievements and the ongoing costs.", zh: "\u4e9a\u6d32\u7684\u7ecf\u6d4e\u8363\u666f\u5c06\u6570\u4ebf\u4eba\u53e3\u5e26\u51fa\u8d2b\u56f0\uff0c\u5e76\u6539\u53d8\u4e86\u5168\u7403\u7ecf\u6d4e\u683c\u5c40\u3002\u7136\u800c\uff0c\u540c\u4e00\u8fc7\u7a0b\u4e5f\u5bfc\u81f4\u4e86\u4e0d\u5e73\u7b49\u3001\u73af\u5883\u7834\u574f\u3001\u5de5\u4eba\u88ab\u5269\u524a\u548c\u4eba\u53e3\u7ed3\u6784\u53d8\u5316\u3002\u8bc4\u4f30\u589e\u957f\u662f\u5426\u53ef\u6301\u7eed\uff0c\u9700\u8981\u6743\u8861\u6210\u5c31\u4e0e\u6301\u7eed\u7684\u4ee3\u4ef7\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Give two pieces of evidence to show that Asia\u2019s economic boom has been successful.", qZh: "\u5217\u4e3e\u4e24\u4e2a\u8bc1\u636e\uff0c\u8bf4\u660e\u4e9a\u6d32\u7ecf\u6d4e\u8363\u666f\u662f\u6210\u529f\u7684\u3002", aEn: "First, hundreds of millions of people have been lifted out of poverty, particularly in China and India, as economic growth created jobs and raised incomes. Second, countries that were once classified as LICs have moved up to become MICs or HICs, with improved life expectancy, literacy, and access to services.", aZh: "\u7b2c\u4e00\uff0c\u6570\u4ebf\u4eba\u53e3\u5e84\u5d1b\u8d70\u51fa\u8d2b\u56f0\uff0c\u5c24\u5176\u662f\u5728\u4e2d\u56fd\u548c\u5370\u5ea6\uff0c\u7ecf\u6d4e\u589e\u957f\u521b\u9020\u4e86\u5c31\u4e1a\u673a\u4f1a\u5e76\u63d0\u9ad8\u4e86\u6536\u5165\u3002\u7b2c\u4e8c\uff0c\u66fe\u7ecf\u5c5e\u4e8e\u4f4e\u6536\u5165\u56fd\u7684\u56fd\u5bb6\u5df2\u5347\u7ea7\u4e3a\u4e2d\u7b49\u6536\u5165\u56fd\u6216\u9ad8\u6536\u5165\u56fd\uff0c\u9884\u671f\u5bff\u547d\u3001\u8bc6\u5b57\u7387\u548c\u516c\u5171\u670d\u52a1\u5747\u5f97\u5230\u6539\u5584\u3002" },
            { qEn: "\u2018Asia\u2019s economic growth is not sustainable.\u2019 To what extent do you agree with this statement? Use evidence to support your answer.", qZh: "\u201c\u4e9a\u6d32\u7684\u7ecf\u6d4e\u589e\u957f\u662f\u4e0d\u53ef\u6301\u7eed\u7684\u3002\u201d\u4f60\u5230\u4f55\u79cd\u7a0b\u5ea6\u540c\u610f\u8fd9\u4e00\u89c2\u70b9\uff1f\u7528\u8bc1\u636e\u652f\u6301\u4f60\u7684\u7b54\u6848\u3002", aEn: "Partly agree. Evidence supporting the statement: rapid industrialisation in China and India has caused severe air pollution; inequality between urban and rural areas remains sharp; ageing populations in Japan and China may slow growth; labour exploitation continues in parts of supply chains. However, some Asian countries are investing in clean energy and diversifying their economies. A balanced conclusion would say that growth faces serious sustainability challenges but is not inevitably doomed.", aZh: "\u90e8\u5206\u540c\u610f\u3002\u652f\u6301\u8fd9\u4e00\u89c2\u70b9\u7684\u8bc1\u636e\uff1a\u4e2d\u56fd\u548c\u5370\u5ea6\u7684\u5feb\u901f\u5de5\u4e1a\u5316\u5bfc\u81f4\u4e25\u91cd\u7684\u7a7a\u6c14\u6c61\u67d3\uff1b\u57ce\u4e61\u4e4b\u95f4\u7684\u4e0d\u5e73\u7b49\u4ecd\u5f88\u660e\u663e\uff1b\u65e5\u672c\u548c\u4e2d\u56fd\u7684\u8001\u9f84\u5316\u4eba\u53e3\u53ef\u80fd\u62d6\u6162\u589e\u957f\uff1b\u4f9b\u5e94\u94fe\u7684\u90e8\u5206\u5730\u533a\u5de5\u4eba\u4e0d\u65ad\u88ab\u5265\u524a\u3002\u7136\u800c\uff0c\u90e8\u5206\u4e9a\u6d32\u56fd\u5bb6\u6b63\u5728\u6295\u8d44\u6e05\u6d01\u80fd\u6e90\u5e76\u5b9e\u73b0\u7ecf\u6d4e\u591a\u5143\u5316\u3002\u5e73\u8861\u7684\u7ed3\u8bba\u5e94\u662f\uff1a\u589e\u957f\u9762\u4e34\u4e25\u5cfb\u7684\u53ef\u6301\u7eed\u6027\u6311\u6218\uff0c\u4f46\u5e76\u975e\u5fc5\u7136\u8d70\u5411\u5d29\u6e83\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is a long-term challenge facing Asian economies?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u4e9a\u6d32\u7ecf\u6d4e\u9762\u4e34\u7684\u957f\u671f\u6311\u6218\uff1f",
          opts: [
            { en: "Lack of any manufacturing in Asia", zh: "\u4e9a\u6d32\u7f3a\u4e4f\u4efb\u4f55\u5236\u9020\u4e1a" },
            { en: "Rapidly falling population in all Asian countries", zh: "\u6240\u6709\u4e9a\u6d32\u56fd\u5bb6\u4eba\u53e3\u5feb\u901f\u4e0b\u964d" },
            { en: "Environmental damage from rapid industrialisation", zh: "\u5feb\u901f\u5de5\u4e1a\u5316\u5bfc\u81f4\u7684\u73af\u5883\u7834\u574f" },
            { en: "Asia having no access to global trade", zh: "\u4e9a\u6d32\u65e0\u6cd5\u53c2\u4e0e\u5168\u7403\u8d38\u6613" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Rapid industrialisation in countries like China and India has produced significant air and water pollution, which is a major long-term challenge to sustainable development.",
          explainCorrectZh: "\u6b63\u786e\uff01\u4e2d\u56fd\u548c\u5370\u5ea6\u7b49\u56fd\u7684\u5feb\u901f\u5de5\u4e1a\u5316\u4ea7\u751f\u4e86\u4e25\u91cd\u7684\u7a7a\u6c14\u548c\u6c34\u6c61\u67d3\uff0c\u8fd9\u662f\u53ef\u6301\u7eed\u53d1\u5c55\u9762\u4e34\u7684\u4e00\u4e2a\u91cd\u8981\u957f\u671f\u6311\u6218\u3002",
          explainWrongEn: "Not quite. Asia has extensive manufacturing and global trade, and not all Asian populations are declining. Environmental damage is the correct long-term challenge from this list.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4e9a\u6d32\u62e5\u6709\u5e7f\u6cdb\u7684\u5236\u9020\u4e1a\u548c\u5168\u7403\u8d38\u6613\uff0c\u4e14\u5e76\u975e\u6240\u6709\u4e9a\u6d32\u56fd\u5bb6\u7684\u4eba\u53e3\u90fd\u5728\u4e0b\u964d\u3002\u73af\u5883\u7834\u574f\u662f\u8fd9\u4e2a\u5217\u8868\u4e2d\u6b63\u786e\u7684\u957f\u671f\u6311\u6218\u3002",
        },
      ],
    },

  ],
};

export default asiaEconomicBoom;
