import { Topic } from "./types";

export const learningCheck: Topic = {
  slug: "learning-check",
  name: "Learning Check",
  nameZh: "\u5355\u5143\u5c0f\u6d4b",
  subject: "History",
  subjectZh: "\u5386\u53f2",
  year: "Year 8",
  lessons: [
    /* ========== Lesson 1: Human Rights and Slavery ========== */
    {
      num: 1,
      badge: "E",
      title: "Human Rights and Slavery \u2014 Review",
      titleZh: "\u4eba\u6743\u4e0e\u5974\u96b6\u5236\u5ea6\u2014\u2014\u5355\u5143\u56de\u987e",
      subtitle: "Test your understanding of rights, slavery, and the UN Declaration.",
      subtitleZh: "\u6d4b\u9a8c\u4f60\u5bf9\u6743\u5229\u3001\u5974\u96b6\u5236\u5ea6\u4e0e\u8054\u5408\u56fd\u5ba3\u8a00\u7684\u7406\u89e3\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain the difference between a right, a responsibility, and a privilege.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6743\u5229\u3001\u8d23\u4efb\u548c\u7279\u6743\u4e4b\u95f4\u7684\u533a\u522b\u3002",
            },
            {
              en: "I can identify which articles of the UN Declaration were violated by slavery and explain why.",
              zh: "\u6211\u80fd\u6307\u51fa\u5974\u96b6\u5236\u5ea6\u4fb5\u72af\u4e86\u5ba3\u8a00\u7684\u54ea\u4e9b\u6761\u6b3e\uff0c\u5e76\u89e3\u91ca\u539f\u56e0\u3002",
            },
            {
              en: "I can explain why the UN Declaration was written in 1948 and why it still matters today.",
              zh: "\u6211\u80fd\u89e3\u91ca\u8054\u5408\u56fd\u5ba3\u8a00\u4e3a\u4ec0\u4e48\u5199\u4e8e1948\u5e74\uff0c\u4ee5\u53ca\u5b83\u4e3a\u4ec0\u4e48\u5bf9\u5f53\u4eca\u4ecd\u7136\u91cd\u8981\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Article 2 of the UN Declaration states that no one shall be treated differently because of their race, colour, sex, language, religion, or where they come from. Give two specific examples from the history of slavery that broke this article.",
              qZh: "\u8054\u5408\u56fd\u5ba3\u8a00\u7b2c2\u6761\u8bf4\u660e\uff0c\u4efb\u4f55\u4eba\u4e0d\u5f97\u56e0\u79cd\u65cf\u3001\u80a4\u8272\u3001\u6027\u522b\u3001\u8bed\u8a00\u3001\u5b97\u6559\u6216\u51fa\u8eab\u5730\u800c\u53d7\u5230\u4e0d\u540c\u5bf9\u5f85\u3002\u8bf7\u4ece\u5974\u96b6\u5236\u5ea6\u5386\u53f2\u4e2d\u5217\u4e3e\u4e24\u4e2a\u5177\u4f53\u4f8b\u5b50\u8bf4\u660e\u8fd9\u4e00\u6761\u6b3e\u662f\u5982\u4f55\u88ab\u4fb5\u72af\u7684\u3002",
              aEn: "Any two of the following: (1) Enslaved Africans were captured and transported purely because of their race \u2014 their skin colour was used to justify treating them as property. (2) Enslaved people were not allowed to read, write, or attend school, while white colonists had access to education. (3) Enslaved people had no legal rights in court, while enslavers could use the courts to claim insurance money, as in the Zong case. (4) Enslaved people were given far harsher living and working conditions based solely on their racial identity. All of these show that race was used to create a two-tier system of humanity, which Article 2 is designed to prevent.",
              aZh: "\u4ee5\u4e0b\u4efb\u610f\u4e24\u9879\u5747\u53ef\uff1a\uff081\uff09\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u4ec5\u56e0\u79cd\u65cf\u800c\u88ab\u6355\u83b7\u548c\u8fd0\u8f93\u2014\u2014\u80a4\u8272\u88ab\u7528\u6765\u4e3a\u5c06\u4ed6\u4eec\u89c6\u4e3a\u8d22\u4ea7\u8fdb\u884c\u8fa9\u62a4\u3002\uff082\uff09\u88ab\u5974\u5f79\u8005\u4e0d\u5141\u8bb8\u8bfb\u4e66\u5199\u5b57\u6216\u4e0a\u5b66\uff0c\u800c\u767d\u4eba\u6b96\u6c11\u5374\u53ef\u4ee5\u63a5\u53d7\u6559\u80b2\u3002\uff083\uff09\u88ab\u5974\u5f79\u8005\u5728\u6cd5\u5ead\u4e0a\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u800c\u5974\u96b6\u4e3b\u5374\u53ef\u4ee5\u5229\u7528\u6cd5\u5ead\u7533\u8bf7\u4fdd\u9669\u8d54\u507f\uff08\u5982\u5c0a\u683c\u53f7\u4e8b\u4ef6\uff09\u3002\uff084\uff09\u88ab\u5974\u5f79\u8005\u4ec5\u56e0\u79cd\u65cf\u8eab\u4efd\u5c31\u88ab\u5b89\u6392\u4e86\u5dee\u5f97\u591a\u3001\u66f4\u4e3a\u6076\u52a3\u7684\u751f\u6d3b\u548c\u5de5\u4f5c\u6761\u4ef6\u3002",
            },
            {
              qEn: "A 'right' is something all people should have regardless of who they are. A 'privilege' is an advantage only some people have because of wealth or position. Using these definitions, explain why access to education was a privilege rather than a right during the period of slavery.",
              qZh: "\u201c\u6743\u5229\u201d\u662f\u6240\u6709\u4eba\u65e0\u8bba\u8eab\u4efd\u5982\u4f55\u90fd\u5e94\u5f97\u5230\u7684\u4e1c\u897f\u3002\u201c\u7279\u6743\u201d\u662f\u53ea\u6709\u5c11\u6570\u4eba\u56e0\u8d22\u5bcc\u6216\u5730\u4f4d\u624d\u80fd\u6d3b\u5f97\u7684\u4f18\u52bf\u3002\u8fd0\u7528\u8fd9\u4e24\u4e2a\u5b9a\u4e49\uff0c\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5728\u5974\u96b6\u5236\u5ea6\u65f6\u671f\uff0c\u63a5\u53d7\u6559\u80b2\u662f\u4e00\u79cd\u7279\u6743\u800c\u975e\u6743\u5229\u3002",
              aEn: "During slavery, access to education was a privilege because it was only available to certain people based on race and social position, not to all human beings equally. Enslaved people were legally forbidden from learning to read or write. This was deliberate \u2014 literacy would give enslaved people access to information, legal documents, and the ability to communicate and organise resistance. By keeping education as a privilege of the white population only, slaveholders maintained control. Under the UN Declaration, Article 26 states education is a right for everyone. The history of slavery shows exactly why that right had to be written down \u2014 because it had been denied for so long.",
              aZh: "\u5728\u5974\u96b6\u5236\u5ea6\u65f6\u671f\uff0c\u63a5\u53d7\u6559\u80b2\u662f\u4e00\u79cd\u7279\u6743\uff0c\u56e0\u4e3a\u5b83\u53ea\u5bf9\u7279\u5b9a\u4eba\u7fa4\u5f00\u653e\uff0c\u5373\u57fa\u4e8e\u79cd\u65cf\u548c\u793e\u4f1a\u5730\u4f4d\uff0c\u800c\u975e\u5bf9\u6240\u6709\u4eba\u5e73\u7b49\u5f00\u653e\u3002\u88ab\u5974\u5f79\u8005\u5728\u6cd5\u5f8b\u4e0a\u88ab\u7981\u6b62\u5b66\u4e60\u8bfb\u5199\u3002\u8fd9\u662f\u6545\u610f\u4e3a\u4e4b\u7684\u2014\u2014\u8bc6\u5b57\u80fd\u529b\u4f1a\u8ba9\u88ab\u5974\u5f79\u8005\u63a5\u89e6\u4fe1\u606f\u3001\u6cd5\u5f8b\u6587\u4ef6\uff0c\u5e76\u5177\u5907\u4ea4\u6d41\u548c\u7ec4\u7ec7\u53cd\u6297\u7684\u80fd\u529b\u3002\u901a\u8fc7\u5c06\u6559\u80b2\u4f5c\u4e3a\u767d\u4eba\u7fa4\u4f53\u72ec\u6709\u7684\u7279\u6743\uff0c\u5974\u96b6\u4e3b\u7ef4\u6301\u4e86\u63a7\u5236\u3002\u6839\u636e\u8054\u5408\u56fd\u5ba3\u8a00\u7b2c26\u6761\uff0c\u6559\u80b2\u662f\u6bcf\u4e2a\u4eba\u7684\u6743\u5229\u3002\u5974\u96b6\u5236\u5ea6\u7684\u5386\u53f2\u6050\u786e\u8bc1\u660e\u4e86\u4e3a\u4ec0\u4e48\u8fd9\u4e00\u6743\u5229\u5fc5\u987b\u88ab\u5199\u5165\u6cd5\u5f8b\u2014\u2014\u56e0\u4e3a\u5b83\u5df2\u88ab\u5265\u593a\u4e86\u592a\u4e45\u3002",
            },
            {
              qEn: "The UN Declaration was written in 1948, over 100 years after slavery was abolished in the British Empire. Does this mean the Declaration came too late to matter? Give reasons for your answer.",
              qZh: "\u8054\u5408\u56fd\u5ba3\u8a00\u5199\u4e8e1948\u5e74\uff0c\u5373\u5974\u96b6\u5236\u5ea6\u5728\u82f1\u5e1d\u56fd\u88ab\u5e9f\u9664100\u591a\u5e74\u540e\u3002\u8fd9\u662f\u5426\u610f\u5473\u7740\u5ba3\u8a00\u51fa\u73b0\u5f97\u592a\u665a\u800c\u6ca1\u6709\u610f\u4e49\uff1f\u8bf7\u8bf4\u660e\u4f60\u7684\u7406\u7531\u3002",
              aEn: "No \u2014 the Declaration did not come too late, for several reasons. First, slavery may have ended in the British Empire in 1833, but racial oppression, segregation, and forced labour continued around the world into the 20th century. The Declaration created a legal framework to challenge these. Second, the Declaration was a response to the Holocaust and World War II \u2014 events that showed what happens when governments are not bound by any universal standard of human rights. Third, the Declaration is not only about the past: it sets a continuing standard for governments today. The history of slavery shows exactly why such protections were needed and why they continue to matter.",
              aZh: "\u4e0d\u2014\u2014\u5ba3\u8a00\u5e76\u6ca1\u6709\u51fa\u73b0\u5f97\u592a\u665a\u3002\u9996\u5148\uff0c\u5974\u96b6\u5236\u5ea6\u867d\u4e8e1833\u5e74\u5728\u82f1\u5e1d\u56fd\u7ec8\u6b62\uff0c\u4f46\u79cd\u65cf\u538b\u8feb\u3001\u79cd\u65cf\u9694\u79bb\u548c\u5f3a\u5236\u52b3\u52a8\u5374\u572820\u4e16\u7eaa\u4e16\u754c\u5404\u5730\u6301\u7eed\u5b58\u5728\u3002\u5ba3\u8a00\u5efa\u7acb\u4e86\u4e00\u4e2a\u6cd5\u5f8b\u6846\u67b6\u6765\u6311\u6218\u8fd9\u4e9b\u73b0\u8c61\u3002\u5176\u6b21\uff0c\u5ba3\u8a00\u662f\u5bf9\u5927\u5c60\u6740\u548c\u4e8c\u6218\u7684\u56de\u5e94\u2014\u2014\u8fd9\u4e9b\u4e8b\u4ef6\u8868\u660e\u5f53\u653f\u5e9c\u4e0d\u53d7\u4efb\u4f55\u666e\u9002\u4eba\u6743\u6807\u51c6\u7ea6\u675f\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002\u7b2c\u4e09\uff0c\u5ba3\u8a00\u4e0d\u4ec5\u5173\u4e4e\u8fc7\u53bb\uff1a\u5b83\u4e3a\u5f53\u4eca\u653f\u5e9c\u8bbe\u7acb\u4e86\u6301\u7eed\u9002\u7528\u7684\u6807\u51c6\u3002\u5974\u96b6\u5236\u5ea6\u7684\u5386\u53f2\u6050\u786e\u8bc1\u660e\u4e86\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e9b\u4fdd\u62a4\u3002",
            },
            {
              qEn: "Look at Article 6 of the Declaration: 'Children have the right to grow up safe and in a very peaceful home.' How was this article violated for children who were born into slavery on plantations?",
              qZh: "\u770b\u5ba3\u8a00\u7b2c6\u6761\uff1a\u201c\u513f\u7ae5\u6709\u6743\u5229\u5728\u5b89\u5168\u3001\u548c\u5e73\u7684\u5bb6\u5ead\u4e2d\u6210\u957f\u3002\u201d\u5bf9\u4e8e\u5728\u79cd\u690d\u56ed\u51fa\u751f\u7684\u5974\u96b6\u5b69\u5b50\u6765\u8bf4\uff0c\u8fd9\u4e00\u6761\u6b3e\u662f\u5982\u4f55\u88ab\u4fb5\u72af\u7684\uff1f",
              aEn: "Children born into slavery on plantations faced violations of Article 6 from birth. They were born as legal property of the plantation owner, meaning they could be sold away from their parents at any time. The Zong case shows how human lives \u2014 including children \u2014 were treated as cargo. Living conditions were cramped, with up to ten people sharing a hut, and food was poor and insufficient. Children born into slavery had no protected home: they could be separated from their families at auction, branded like cattle, and put to work without any protection. The 'scramble' at slave auctions, where buyers rushed in to grab enslaved people, meant that even families who had survived the Middle Passage together could be torn apart within minutes of arrival.",
              aZh: "\u5728\u79cd\u690d\u56ed\u51fa\u751f\u7684\u5974\u96b6\u5b69\u5b50\u4ece\u51fa\u751f\u8d77\u5c31\u9762\u4e34\u7b2c6\u6761\u88ab\u4fb5\u72af\u7684\u5904\u5883\u3002\u4ed6\u4eec\u4e00\u51fa\u751f\u5c31\u662f\u79cd\u690d\u56ed\u4e3b\u7684\u5408\u6cd5\u8d22\u4ea7\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u968f\u65f6\u53ef\u80fd\u88ab\u4e0e\u7236\u6bcd\u5206\u6562\u5356\u51fa\u3002\u5c0a\u683c\u53f7\u4e8b\u4ef6\u8868\u660e\uff0c\u4eba\u7c7b\u751f\u547d\u2014\u2014\u5305\u62ec\u5b69\u5b50\u2014\u2014\u88ab\u5f53\u4f5c\u8d27\u7269\u5bf9\u5f85\u3002\u751f\u6d3b\u6761\u4ef6\u62e5\u6324\uff0c\u591a\u8fbe\u5341\u4eba\u5171\u7528\u4e00\u95f4\u5c0f\u5c4b\uff0c\u98df\u7269\u532e\u4e4f\u4e14\u8425\u517b\u4e0d\u8db3\u3002\u5974\u96b6\u5b69\u5b50\u6ca1\u6709\u53d7\u4fdd\u62a4\u7684\u5bb6\u5ead\uff1a\u5728\u62cd\u5356\u4f1a\u4e0a\u53ef\u80fd\u4e0e\u5bb6\u4eba\u5206\u79bb\uff0c\u88ab\u50cf\u725b\u4e00\u6837\u70d9\u4e0a\u6807\u8bb0\uff0c\u5e76\u88ab\u8feb\u5de5\u4f5c\u800c\u6ca1\u6709\u4efb\u4f55\u4fdd\u62a4\u3002\u62cd\u5356\u73b0\u573a\u7684\u4e89\u629a\u610f\u5473\u7740\uff0c\u5373\u4f7f\u548c\u5bb6\u4eba\u4e00\u8d77\u719f\u5f88\u4e86\u4e2d\u95f4\u822a\u7a0b\u7684\u5bb6\u5ead\uff0c\u4e5f\u53ef\u80fd\u5728\u5230\u8fbe\u540e\u51e0\u5206\u949f\u5185\u5c31\u88ab\u62c6\u6563\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Article 24 of the UN Declaration states that everyone has the right to rest and leisure and no one should work too many hours. Which aspect of plantation life most directly violated this article?",
          qZh: "\u8054\u5408\u56fd\u5ba3\u8a00\u7b2c24\u6761\u8bf4\u660e\u4eba\u4eba\u6709\u6743\u4eab\u53d7\u4f11\u606f\u548c\u95f2\u6682\uff0c\u4efb\u4f55\u4eba\u90fd\u4e0d\u5e94\u8fc7\u5ea6\u5de5\u4f5c\u3002\u79cd\u690d\u56ed\u751f\u6d3b\u7684\u54ea\u4e2a\u65b9\u9762\u6700\u76f4\u63a5\u4fb5\u72af\u4e86\u8fd9\u4e00\u6761\u6b3e\uff1f",
          opts: [
            { en: "Enslaved people were given new names and not allowed to keep their African identity", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u8d4b\u4e88\u65b0\u540d\u5b57\uff0c\u4e0d\u5141\u8bb8\u4fdd\u7559\u5176\u975e\u6d32\u8eab\u4efd" },
            { en: "Enslaved people were forced to work from sunrise to sunset with little or no rest days", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u8feb\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u51e0\u4e4e\u6ca1\u6709\u4f11\u606f\u65e5" },
            { en: "Enslaved people were not allowed to go to church or practice their religion", zh: "\u88ab\u5974\u5f79\u8005\u4e0d\u5141\u8bb8\u53bb\u6559\u5802\u6216\u5b9e\u8df5\u5176\u5b97\u6559\u4fe1\u4ef0" },
            { en: "Enslaved people were branded with estate marks to show who owned them", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u70d9\u4e0a\u5e84\u56ed\u6807\u8bb0\uff0c\u8868\u660e\u4ed6\u4eec\u5c5e\u4e8e\u8c01" },
          ],
          correct: 1,
          explainCorrectEn: "The lesson materials state that most enslaved people had to work from sunrise to sunset, and some owners made their enslaved people work every day with no rest days at all. Article 24 gives everyone the right to rest and reasonable working hours. Forcing people to work all day every day with no choice and no pay is a direct violation of this article.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u8bf4\u660e\uff0c\u5927\u591a\u6570\u88ab\u5974\u5f79\u8005\u5fc5\u987b\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u6709\u4e9b\u4e3b\u4eba\u751a\u81f3\u8981\u6c42\u88ab\u5974\u5f79\u8005\u6bcf\u5929\u5de5\u4f5c\u4e14\u6ca1\u6709\u4f11\u606f\u65e5\u3002\u7b2c24\u6761\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u4f11\u606f\u548c\u5408\u7406\u5de5\u4f5c\u65f6\u9650\u7684\u6743\u5229\u3002\u5f3a\u8feb\u4eba\u4eec\u65e5\u590d\u4e00\u65e5\u65e0\u4f11\u6b62\u3001\u65e0\u9009\u62e9\u3001\u65e0\u5de5\u8d44\u5730\u5de5\u4f5c\uff0c\u662f\u5bf9\u8fd9\u4e00\u6761\u6b3e\u7684\u76f4\u63a5\u4fb5\u72af\u3002",
          explainWrongEn: "The correct answer is B. While the other options also describe injustices that break different articles of the Declaration, Article 24 specifically protects the right to rest and limits on working hours. Being forced to work from sunrise to sunset every day directly violates this right.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u867d\u7136\u5176\u4ed6\u9009\u9879\u4e5f\u63cf\u8ff0\u4e86\u4fb5\u72af\u5ba3\u8a00\u5176\u4ed6\u6761\u6b3e\u7684\u4e0d\u516c\u6b63\u884c\u4e3a\uff0c\u4f46\u7b2c24\u6761\u7279\u522b\u4fdd\u62a4\u4f11\u606f\u6743\u548c\u5de5\u4f5c\u65f6\u9650\u3002\u88ab\u8feb\u6bcf\u5929\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\u662f\u5bf9\u8fd9\u4e00\u6743\u5229\u7684\u76f4\u63a5\u4fb5\u72af\u3002",
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes why the Zong case of 1781 is historically significant?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u8bf4\u660e\u4e3a\u4ec0\u4e481781\u5e74\u7684\u5c0a\u683c\u53f7\u4e8b\u4ef6\u5177\u6709\u91cd\u8981\u7684\u5386\u53f2\u610f\u4e49\uff1f",
          opts: [
            { en: "It was the first time enslaved people successfully resisted their captors on a slave ship", zh: "\u8fd9\u662f\u88ab\u5974\u5f79\u8005\u9996\u6b21\u5728\u5974\u96b6\u8239\u4e0a\u6210\u529f\u53cd\u6297\u636e\u7981\u8005" },
            { en: "The court case revealed that the law treated enslaved people as cargo rather than as human beings", zh: "\u6cd5\u5f8b\u6848\u4ef6\u63ed\u793a\u4e86\u6cd5\u5f8b\u5c06\u88ab\u5974\u5f79\u8005\u89c6\u4e3a\u8d27\u7269\u800c\u975e\u4eba\u7c7b" },
            { en: "It led directly to Parliament passing a law against the slave trade in 1782", zh: "\u5b83\u76f4\u63a5\u5bfc\u81f4\u8bae\u4f1a\u4e8e1782\u5e74\u901a\u8fc7\u4e86\u53cd\u5974\u96b6\u8d38\u6613\u6cd5\u5f8b" },
            { en: "It proved that slave ships always carried too many people to be safe", zh: "\u5b83\u8bc1\u660e\u5974\u96b6\u8239\u603b\u662f\u8f7d\u4eba\u8fc7\u591a\u800c\u4e0d\u5b89\u5168" },
          ],
          correct: 1,
          explainCorrectEn: "The Zong case is significant because the court case was not about whether killing 133 enslaved people was wrong \u2014 it was about whether the ship owners could claim insurance money for the 'cargo' they had lost. This revealed that the legal system of the time treated enslaved people as property rather than human beings. This deeply shocked many people in Britain and strengthened the arguments of abolitionists like Olaudah Equiano who used the case in their public campaigns.",
          explainCorrectZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\u5177\u6709\u91cd\u8981\u610f\u4e49\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6cd5\u5f8b\u6848\u4ef6\u5e76\u4e0d\u662f\u5173\u4e8e\u6740\u6b7b133\u540d\u88ab\u5974\u5f79\u8005\u662f\u5426\u9519\u8bef\u2014\u2014\u800c\u662f\u5173\u4e8e\u8239\u4e3b\u662f\u5426\u53ef\u4ee5\u7533\u8bf7\u4fdd\u9669\u8d54\u507f\u3002\u8fd9\u63ed\u793a\u4e86\u5f53\u65f6\u7684\u6cd5\u5f8b\u4f53\u7cfb\u5c06\u88ab\u5974\u5f79\u8005\u89c6\u4e3a\u8d22\u4ea7\u800c\u975e\u4eba\u7c7b\u3002\u8fd9\u4f7f\u82f1\u56fd\u8bb8\u591a\u4eba\u611f\u5230\u9707\u60ca\uff0c\u5e76\u5f3a\u5316\u4e86\u5e9f\u5974\u8fd0\u52a8\u8005\u7684\u8bba\u70b9\u3002",
          explainWrongEn: "The correct answer is B. The Zong case did not lead directly to abolition in 1782, and it was not about a slave rebellion. What made it historically significant was that it exposed, in a public courtroom, how the law defined enslaved people as insurable property \u2014 not as human beings with rights.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5c0a\u683c\u53f7\u4e8b\u4ef6\u5e76\u6ca1\u6709\u5bfc\u81f4\u52301782\u5e74\u7acb\u5373\u5e9f\u9664\u5974\u96b6\u5236\u5ea6\uff0c\u4e5f\u4e0e\u5974\u96b6\u66b4\u52a8\u65e0\u5173\u3002\u5b83\u5177\u6709\u5386\u53f2\u610f\u4e49\u7684\u539f\u56e0\u5728\u4e8e\uff0c\u5b83\u5728\u516c\u5f00\u7684\u6cd5\u5ead\u4e0a\u63ed\u793a\u4e86\u6cd5\u5f8b\u5982\u4f55\u5c06\u88ab\u5974\u5f79\u8005\u5b9a\u4e49\u4e3a\u53ef\u6295\u4fdd\u7684\u8d22\u4ea7\u2014\u2014\u800c\u975e\u62e5\u6709\u6743\u5229\u7684\u4eba\u7c7b\u3002",
        },
      ],
    },

    /* ========== Lesson 2: Atlantic Slave Trade Review ========== */
    {
      num: 2,
      badge: "E",
      title: "The Atlantic Slave Trade \u2014 Review",
      titleZh: "\u5927\u897f\u6d0b\u5974\u96b6\u8d38\u6613\u2014\u2014\u5355\u5143\u56de\u987e",
      subtitle: "Test your understanding of the slave trade, its causes, and its human cost.",
      subtitleZh: "\u6d4b\u9a8c\u4f60\u5bf9\u5974\u96b6\u8d38\u6613\u3001\u5176\u6210\u56e0\u53ca\u5176\u4eba\u7c7b\u4ee3\u4ef7\u7684\u7406\u89e3\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain what drove the growth of the Atlantic slave trade.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4fc3\u4f7f\u5927\u897f\u6d0b\u5974\u96b6\u8d38\u6613\u53d1\u5c55\u7684\u52a8\u56e0\u3002",
            },
            {
              en: "I can describe the experiences of enslaved people during capture, transportation, and plantation life.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u8005\u5728\u88ab\u6355\u83b7\u3001\u8fd0\u8f93\u548c\u79cd\u690d\u56ed\u751f\u6d3b\u4e2d\u7684\u7ecf\u5386\u3002",
            },
            {
              en: "I can explain why the slave trade continued for so long despite evidence of its cruelty.",
              zh: "\u6211\u80fd\u89e3\u91ca\u5c3d\u7ba1\u6709\u5176\u6b8b\u9177\u7684\u8bc1\u636e\uff0c\u5974\u96b6\u8d38\u6613\u4e3a\u4ec0\u4e48\u8fd8\u662f\u6301\u7eed\u4e86\u90a3\u4e48\u957f\u65f6\u95f4\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "African chiefs played a role in the slave trade by selling captured people to European traders. Does this mean that responsibility for the slave trade was shared equally between Africa and Europe? Explain your answer.",
              qZh: "\u975e\u6d32\u9996\u9886\u901a\u8fc7\u5c06\u88ab\u6355\u83b7\u7684\u4eba\u5356\u7ed9\u6b27\u6d32\u5546\u4eba\uff0c\u53c2\u4e0e\u4e86\u5974\u96b6\u8d38\u6613\u3002\u8fd9\u662f\u5426\u610f\u5473\u7740\u975e\u6d32\u4e0e\u6b27\u6d32\u5bf9\u5974\u96b6\u8d38\u6613\u6709\u540c\u7b49\u8d23\u4efb\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u56de\u7b54\u3002",
              aEn: "Responsibility was not shared equally. While some African chiefs did sell captured people to European traders, the demand came from Europe and the Americas \u2014 it was European merchants who created the market, supplied the ships, and profited most enormously. The scale was driven by European colonial plantations that needed labour. The legal, financial, and military power that kept the trade going was European. African participation was real but secondary to the system as a whole. Historians also note that African rulers often did not understand the full scale and permanence of what was being done to the people they sold.",
              aZh: "\u8d23\u4efb\u5e76\u4e0d\u5e73\u7b49\u5206\u62c5\u3002\u867d\u7136\u4e00\u4e9b\u975e\u6d32\u9996\u9886\u786e\u5b9e\u5c06\u88ab\u6355\u83b7\u7684\u4eba\u5356\u7ed9\u4e86\u6b27\u6d32\u5546\u4eba\uff0c\u4f46\u9700\u6c42\u6765\u81ea\u6b27\u6d32\u548c\u7f8e\u6d32\u2014\u2014\u662f\u6b27\u6d32\u5546\u4eba\u521b\u9020\u4e86\u5e02\u573a\u3001\u63d0\u4f9b\u4e86\u8239\u53ea\uff0c\u5e76\u4e14\u83b7\u5f97\u4e86\u6700\u5de8\u5927\u7684\u5229\u76ca\u3002\u5176\u89c4\u6a21\u7531\u6b27\u6d32\u79cd\u690d\u56ed\u5bf9\u52b3\u52a8\u529b\u7684\u9700\u6c42\u63a8\u52a8\u3002\u975e\u6d32\u4eba\u7684\u53c2\u4e0e\u662f\u771f\u5b9e\u7684\uff0c\u4f46\u76f8\u5bf9\u4e8e\u6574\u4e2a\u4f53\u7cfb\u800c\u8a00\u5c5e\u4e8e\u6b21\u8981\u5730\u4f4d\u3002",
            },
            {
              qEn: "The Zong case of 1781 shocked many people in Britain. Why do you think it helped build support for abolishing the slave trade, even though it did not immediately change the law?",
              qZh: "1781\u5e74\u7684\u5c0a\u683c\u53f7\u4e8b\u4ef6\u4f7f\u82f1\u56fd\u8bb8\u591a\u4eba\u611f\u5230\u9707\u60ca\u3002\u4f60\u8ba4\u4e3a\u5b83\u4e3a\u4ec0\u4e48\u6709\u52a9\u4e8e\u5efa\u7acb\u5e9f\u9664\u5974\u96b6\u8d38\u6613\u7684\u652f\u6301\uff0c\u5373\u4f7f\u5b83\u5e76\u6ca1\u6709\u7acb\u5373\u6539\u53d8\u6cd5\u5f8b\uff1f",
              aEn: "The Zong case made the true nature of the slave trade impossible to ignore. The fact that 133 enslaved people were thrown overboard and the court case was about insurance \u2014 not murder \u2014 showed ordinary British people that the legal system treated enslaved Africans as cargo, not human beings. This was morally shocking in a way that statistics alone could not achieve. It gave abolitionists a concrete, specific story they could share publicly. Public opinion is often changed by individual cases rather than large numbers, and the Zong case became one of the most powerful pieces of evidence that abolitionist campaigners used in their arguments.",
              aZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\u4f7f\u4eba\u4eec\u65e0\u6cd5\u5ffd\u89c6\u5974\u96b6\u8d38\u6613\u7684\u771f\u5b9e\u672c\u8d28\u3002133\u540d\u88ab\u5974\u5f79\u8005\u88ab\u6295\u5165\u6d77\u4e2d\uff0c\u800c\u5ba1\u5224\u7684\u662f\u4fdd\u9669\u8d54\u507f\u95ee\u9898\u800c\u975e\u8c0b\u6740\u2014\u2014\u8fd9\u8ba9\u666e\u901a\u82f1\u56fd\u4eba\u770b\u5230\uff0c\u6cd5\u5f8b\u4f53\u7cfb\u5c06\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u89c6\u4e3a\u8d27\u7269\u800c\u975e\u4eba\u7c7b\u3002\u8fd9\u5728\u9053\u5fb7\u4e0a\u4ee4\u4eba\u9707\u60ca\uff0c\u662f\u5355\u7eaf\u7684\u6570\u5b57\u65e0\u6cd5\u505a\u5230\u7684\u3002\u5b83\u7ed9\u4e86\u5e9f\u5974\u8fd0\u52a8\u8005\u4e00\u4e2a\u5177\u4f53\u7684\u3001\u53ef\u516c\u5f00\u5206\u4eab\u7684\u6545\u4e8b\u3002",
            },
            {
              qEn: "Early European colonists in America tried to force Native Americans to work for them, but it was not enough. They then turned to enslaved Africans. What does this tell us about the main reason behind the slave trade?",
              qZh: "\u65e9\u671f\u5728\u7f8e\u6d32\u7684\u6b27\u6d32\u6b96\u6c11\u8bd5\u56fe\u5f3a\u8feb\u7f8e\u6d32\u539f\u4f4f\u6c11\u4e3a\u5176\u52b3\u52a8\uff0c\u4f46\u4e0d\u591f\u7528\u3002\u4e8e\u662f\u4ed6\u4eec\u8f6c\u800c\u5bfb\u6c42\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\u5974\u96b6\u8d38\u6613\u80cc\u540e\u7684\u4e3b\u8981\u539f\u56e0\u662f\u4ec0\u4e48\uff1f",
              aEn: "This shows that the slave trade was driven primarily by economic demand for cheap labour, not by any existing hatred of Africans specifically. Colonists needed people to work on their plantations and grow profitable crops like sugar, tobacco, and cotton. When one source of labour failed, they simply found another. This reveals that the slave trade was fundamentally an economic system: Africans were targeted not because of any unique quality, but because African traders were willing to sell captives and because the profits were enormous. Understanding the economic motive helps explain why the trade continued for so long even as opposition grew.",
              aZh: "\u8fd9\u8868\u660e\u5974\u96b6\u8d38\u6613\u7684\u4e3b\u8981\u52a8\u673a\u662f\u5bf9\u5ec9\u4ef7\u52b3\u52a8\u529b\u7684\u7ecf\u6d4e\u9700\u6c42\uff0c\u800c\u975e\u5bf9\u975e\u6d32\u4eba\u7684\u4ef7\u6001\u3002\u6b96\u6c11\u9700\u8981\u4eba\u5728\u79cd\u690d\u56ed\u5de5\u4f5c\uff0c\u79cd\u690d\u7cd6\u3001\u70df\u8349\u548c\u68c9\u82b1\u7b49\u6709\u5229\u53ef\u56fe\u7684\u4f5c\u7269\u3002\u5f53\u4e00\u79cd\u52b3\u52a8\u529b\u6765\u6e90\u5931\u8d25\u65f6\uff0c\u4ed6\u4eec\u5c31\u7b80\u5355\u5730\u5bfb\u627e\u53e6\u4e00\u79cd\u3002\u8fd9\u8bc1\u660e\u5974\u96b6\u8d38\u6613\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u7ecf\u6d4e\u4f53\u7cfb\uff1a\u975e\u6d32\u4eba\u88ab\u9488\u5bf9\u5e76\u975e\u56e0\u4e3a\u4efb\u4f55\u72ec\u7279\u8d28\u91cf\uff0c\u800c\u662f\u56e0\u4e3a\u975e\u6d32\u5546\u4eba\u613f\u610f\u51fa\u552e\u4fe3\u8651\uff0c\u5e76\u4e14\u5229\u6da6\u975e\u5e38\u4e30\u539a\u3002",
            },
            {
              qEn: "The slave trade was declared illegal in the British Empire in 1807, but slavery itself was not abolished until 1833. What does this 26-year gap most likely tell us?",
              qZh: "1807\u5e74\u5974\u96b6\u8d38\u6613\u5728\u82f1\u5e1d\u56fd\u88ab\u5ba3\u5e03\u4e3a\u975e\u6cd5\uff0c\u4f46\u5974\u96b6\u5236\u5ea6\u672c\u8eab\u76f4\u52301833\u5e74\u624d\u88ab\u5e9f\u9664\u3002\u8fd926\u5e74\u7684\u5dee\u8ddd\u6700\u53ef\u80fd\u8bf4\u660e\u4e86\u4ec0\u4e48\uff1f",
              aEn: "The 26-year gap shows that ending the trade was politically easier than emancipation. Plantation owners had enormous economic and political power and resisted emancipation because it threatened their profits. Even after 1807, those already enslaved on plantations continued to be exploited. This shows that moral arguments alone were not enough \u2014 economic interests had to be overcome as well. It also shows that legal change is rarely instant: the abolition of the trade and the abolition of slavery itself were two separate battles, each requiring sustained campaigning.",
              aZh: "26\u5e74\u7684\u5dee\u8ddd\u8868\u660e\uff0c\u7ec8\u6b62\u8d38\u6613\u5728\u653f\u6cbb\u4e0a\u6bd4\u89e3\u653e\u66f4\u5bb9\u6613\u3002\u79cd\u690d\u56ed\u4e3b\u62e5\u6709\u5de8\u5927\u7684\u7ecf\u6d4e\u548c\u653f\u6cbb\u529b\u91cf\uff0c\u4ed6\u4eec\u6297\u62d2\u89e3\u653e\u56e0\u4e3a\u8fd9\u4f1a\u5a01\u80c1\u5230\u5229\u6da6\u3002\u5373\u4f7f1807\u5e74\u4e4b\u540e\uff0c\u5df2\u5728\u79cd\u690d\u56ed\u7684\u88ab\u5974\u5f79\u8005\u4ecd\u7ee7\u7eed\u88ab\u5265\u524a\u3002\u8fd9\u8bf4\u660e\u5355\u9760\u9053\u5fb7\u8bba\u8bc1\u662f\u4e0d\u591f\u7684\u2014\u2014\u8fd8\u5fc5\u987b\u514b\u670d\u7ecf\u6d4e\u5229\u76ca\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "By the 17th century, enslaved people could be purchased in Africa for about $25 and sold in the Americas for about $150. Even with a death rate of 50 per cent on the Middle Passage, merchants still made large profits. What does this tell us about why the slave trade continued for so long?",
          qZh: "\u572817\u4e16\u7eaa\uff0c\u88ab\u5974\u5f79\u8005\u5728\u975e\u6d32\u7684\u8d2d\u4e70\u4ef7\u683c\u7ea625\u7f8e\u5143\uff0c\u5728\u7f8e\u6d32\u7684\u552e\u4ef7\u7ea6150\u7f8e\u5143\u3002\u5373\u4f7f\u4e2d\u95f4\u822a\u7a0b\u7684\u6b7b\u4ea1\u7387\u8fbe50%\uff0c\u5546\u4eba\u4ecd\u7136\u83b7\u5f97\u5de8\u989d\u5229\u6da6\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\u5974\u96b6\u8d38\u6613\u4e3a\u4ec0\u4e48\u6301\u7eed\u4e86\u90a3\u4e48\u957f\u65f6\u95f4\uff1f",
          opts: [
            { en: "Merchants did not know how many people were dying during the crossing", zh: "\u5546\u4eba\u4e0d\u77e5\u9053\u6e21\u6d77\u671f\u95f4\u6709\u591a\u5c11\u4eba\u6b7b\u4ea1" },
            { en: "The trade was so profitable that merchants accepted the human cost as a business expense", zh: "\u8d38\u6613\u5982\u6b64\u6709\u5229\u53ef\u56fe\uff0c\u5546\u4eba\u5c06\u4eba\u7c7b\u4ee3\u4ef7\u4f5c\u4e3a\u7ecf\u8425\u6210\u672c\u6765\u63a5\u53d7" },
            { en: "Governments forced merchants to continue the trade even if they did not want to", zh: "\u653f\u5e9c\u5f3a\u8ffd\u5546\u4eba\u7ee7\u7eed\u5974\u96b6\u8d38\u6613\uff0c\u5373\u4f7f\u4ed6\u4eec\u4e0d\u613f\u610f" },
            { en: "Enslaved people on the Middle Passage voluntarily worked in exchange for their freedom later", zh: "\u4e2d\u95f4\u822a\u7a0b\u4e2d\u7684\u88ab\u5974\u5f79\u8005\u81ea\u613f\u52b3\u52a8\u4ee5\u6362\u53d6\u65e5\u540e\u7684\u81ea\u7531" },
          ],
          correct: 1,
          explainCorrectEn: "The figures show that even with a 50 per cent death rate, the profit margin was enormous \u2014 a six-fold return on investment in Africa alone. This means merchants treated the deaths of enslaved people as an acceptable business cost. When profit is the primary motive, human lives become expendable. This is exactly why the slave trade continued for over 150 years despite evidence of its cruelty: the economic rewards were simply too large for those who ran the trade to abandon it voluntarily.",
          explainCorrectZh: "\u8fd9\u4e9b\u6570\u5b57\u8868\u660e\uff0c\u5373\u4f7f\u6b7b\u4ea1\u7387\u8fbe50%\uff0c\u5229\u6da6\u7a7a\u95f4\u4ecd\u7136\u5de8\u5927\u2014\u2014\u4ec5\u5728\u975e\u6d32\u5c31\u6709\u516d\u500d\u7684\u6295\u8d44\u56de\u62a5\u3002\u8fd9\u610f\u5473\u7740\u5546\u4eba\u5c06\u88ab\u5974\u5f79\u8005\u7684\u6b7b\u4ea1\u89c6\u4e3a\u53ef\u63a5\u53d7\u7684\u7ecf\u8425\u6210\u672c\u3002\u5f53\u5229\u6da6\u662f\u9996\u8981\u52a8\u673a\u65f6\uff0c\u4eba\u547d\u5c31\u53d8\u5f97\u53ef\u4ee5\u6d88\u8017\u3002\u8fd9\u6b63\u662f\u5974\u96b6\u8d38\u6613\u5c3d\u7ba1\u6709\u5176\u6b8b\u9177\u7684\u8bc1\u636e\u5374\u4ecd\u6301\u7eed\u4e86\u8d85\u8fc7150\u5e74\u7684\u539f\u56e0\u3002",
          explainWrongEn: "The correct answer is B. Merchants absolutely knew the death rates \u2014 the Zong case proves this. They continued because the profits were so large that deaths were treated as an acceptable business cost. The trade was voluntary for merchants and enormously rewarding. Only sustained legal and moral pressure eventually ended it.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5546\u4eba\u5b8c\u5168\u77e5\u9053\u6b7b\u4ea1\u7387\u2014\u2014\u5c0a\u683c\u53f7\u4e8b\u4ef6\u8bc1\u660e\u4e86\u8fd9\u4e00\u70b9\u3002\u4ed6\u4eec\u7ee7\u7eed\u662f\u56e0\u4e3a\u5229\u6da6\u5982\u6b64\u4e30\u539a\uff0c\u4ee5\u81f3\u6b7b\u4ea1\u88ab\u5f53\u4f5c\u53ef\u63a5\u53d7\u7684\u7ecf\u8425\u6210\u672c\u3002\u53ea\u6709\u6301\u7eed\u7684\u6cd5\u5f8b\u548c\u9053\u5fb7\u538b\u529b\u624d\u6700\u7ec8\u7ec8\u6b62\u4e86\u5b83\u3002",
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes what the 'triangular trade' was?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u63cf\u8ff0\u201c\u4e09\u89d2\u8d38\u6613\u201d\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "A trade agreement between France, Spain, and Britain to share African colonies", zh: "\u6cd5\u56fd\u3001\u897f\u73ed\u7259\u548c\u82f1\u56fd\u4e4b\u95f4\u5206\u4eab\u975e\u6d32\u6b96\u6c11\u5730\u7684\u8d38\u6613\u534f\u8bae" },
            { en: "A system of three voyages linking Britain, West Africa, and the Americas, each stage generating profit", zh: "\u4e00\u4e2a\u8fde\u63a5\u82f1\u56fd\u3001\u897f\u975e\u548c\u7f8e\u6d32\u7684\u4e09\u6b21\u822a\u884c\u4f53\u7cfb\uff0c\u6bcf\u4e2a\u9636\u6bb5\u90fd\u4ea7\u751f\u5229\u6da6" },
            { en: "A route used by enslaved Africans to escape from plantations through three stages of the journey", zh: "\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u901a\u8fc7\u4e09\u4e2a\u9636\u6bb5\u9003\u79bb\u79cd\u690d\u56ed\u7684\u8def\u7ebf" },
            { en: "A system where three African kingdoms took turns supplying enslaved people to European traders", zh: "\u4e09\u4e2a\u975e\u6d32\u738b\u56fd\u8f6e\u6d41\u5411\u6b27\u6d32\u5546\u4eba\u63d0\u4f9b\u5974\u96b6\u7684\u4f53\u7cfb" },
          ],
          correct: 1,
          explainCorrectEn: "The triangular trade was a three-stage system. First, British ships took manufactured goods (cloth, metal, guns, alcohol) from Britain to West Africa and traded them for enslaved people. Second, enslaved Africans were transported across the Atlantic to the Americas \u2014 the Middle Passage. Third, ships returned to Britain loaded with plantation goods such as sugar, tobacco, and coffee. Each voyage made money, which is why it continued for over 150 years.",
          explainCorrectZh: "\u4e09\u89d2\u8d38\u6613\u662f\u4e00\u4e2a\u4e09\u9636\u6bb5\u4f53\u7cfb\u3002\u9996\u5148\uff0c\u82f1\u56fd\u8239\u53ea\u5c06\u5236\u9020\u54c1\uff08\u5e03\u6599\u3001\u91d1\u5c5e\u3001\u67aa\u652f\u3001\u9152\u7cbe\uff09\u4ece\u82f1\u56fd\u8fd0\u5f80\u897f\u975e\uff0c\u7528\u6765\u6362\u53d6\u88ab\u5974\u5f79\u7684\u4eba\u3002\u5176\u6b21\uff0c\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u8fd0\u8fc7\u5927\u897f\u6d0b\u5230\u7f8e\u6d32\u2014\u2014\u5373\u4e2d\u95f4\u822a\u7a0b\u3002\u6700\u540e\uff0c\u8239\u53ea\u6ee1\u8f7d\u7cd6\u3001\u70df\u8349\u3001\u548b\u554a\u7b49\u79cd\u690d\u56ed\u5546\u54c1\u8fd4\u56de\u82f1\u56fd\u3002\u6bcf\u6b21\u822a\u884c\u90fd\u4e3a\u5546\u4eba\u5e26\u6765\u5229\u6da6\uff0c\u8fd9\u5c31\u662f\u5b83\u6301\u7eed\u4e86\u8d85\u8fc7150\u5e74\u7684\u539f\u56e0\u3002",
          explainWrongEn: "The correct answer is B. The 'triangular' shape refers to the map shape of the three-stage voyage, not to three countries or three kingdoms sharing anything. Each stage made money: goods for enslaved people in Africa, enslaved people for plantation crops in the Americas, and plantation crops sold for profit back in Britain.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u201c\u4e09\u89d2\u201d\u5f62\u6307\u7684\u662f\u4e09\u9636\u6bb5\u822a\u884c\u5728\u5730\u56fe\u4e0a\u7684\u5f62\u72b6\uff0c\u800c\u975e\u4e09\u4e2a\u56fd\u5bb6\u6216\u4e09\u4e2a\u738b\u56fd\u5171\u4eab\u4ec0\u4e48\u3002\u6bcf\u4e2a\u9636\u6bb5\u90fd\u5e26\u6765\u5229\u6da6\u3002",
        },
      ],
    },

    /* ========== Lesson 3: British Empire Review ========== */
    {
      num: 3,
      badge: "E",
      title: "The British Empire \u2014 Review",
      titleZh: "\u82f1\u5e1d\u56fd\u2014\u2014\u5355\u5143\u56de\u987e",
      subtitle: "Test your ability to argue about the British Empire using evidence.",
      subtitleZh: "\u6d4b\u9a8c\u4f60\u5229\u7528\u8bc1\u636e\u5c31\u82f1\u5e1d\u56fd\u8fdb\u884c\u8bba\u8ba4\u7684\u80fd\u529b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain at least two reasons why Britain was able to build such a large empire.",
              zh: "\u6211\u80fd\u89e3\u91ca\u82f1\u56fd\u80fd\u591f\u5efa\u7acb\u5982\u6b64\u5e9e\u5927\u5e1d\u56fd\u7684\u81f3\u5c11\u4e24\u4e2a\u539f\u56e0\u3002",
            },
            {
              en: "I can describe at least one argument in favour of the British Empire and one argument against it.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u81f3\u5c11\u4e00\u4e2a\u652f\u6301\u82f1\u5e1d\u56fd\u7684\u8bba\u70b9\u548c\u4e00\u4e2a\u53cd\u5bf9\u7684\u8bba\u70b9\u3002",
            },
            {
              en: "I can explain why historians like Terry Deary, Richard Gott, and Niall Ferguson disagree about the Empire.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u7279\u91cc\u00b7\u8fea\u91cc\u3001\u7406\u67e5\u5fb7\u00b7\u6208\u7279\u548c\u5c3c\u5c14\u00b7\u8d39\u683c\u68ee\u7b49\u5386\u53f2\u5b66\u5bb6\u5bf9\u5e1d\u56fd\u5b58\u5206\u6b67\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The lesson materials describe four main ways Britain built its empire: war, discovery, settlers, and trade. Which of these four do you think was the most important, and why?",
              qZh: "\u8bfe\u7a0b\u6750\u6599\u63cf\u8ff0\u4e86\u82f1\u56fd\u5efa\u7acb\u5e1d\u56fd\u7684\u56db\u79cd\u4e3b\u8981\u65b9\u5f0f\uff1a\u6218\u4e89\u3001\u53d1\u73b0\u3001\u6b96\u6c11\u548c\u8d38\u6613\u3002\u4f60\u8ba4\u4e3a\u8fd9\u56db\u79cd\u65b9\u5f0f\u4e2d\u54ea\u4e2a\u6700\u91cd\u8981\uff0c\u4e3a\u4ec0\u4e48\uff1f",
              aEn: "Any of the four can be argued, but the strongest answers will explain why and compare across methods. Trade is a strong choice: it created the economic incentive that drove the whole system, and the East India Company shows how trade could grow into direct political control. War is also strong: Britain's naval power meant it could take territory from rivals and defend its colonies worldwide. The important point is to give reasons and not just name one method. Top answers will acknowledge that all four worked together \u2014 trade created the motive, settlers extended control, discovery provided the legal claim, and war defended or extended all three.",
              aZh: "\u56db\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u4e3a\u4e4b\u8bba\u8bc1\uff0c\u4f46\u6700\u4f73\u56de\u7b54\u5c06\u89e3\u91ca\u539f\u56e0\u5e76\u8fdb\u884c\u6bd4\u8f83\u3002\u8d38\u6613\u662f\u4e00\u4e2a\u6709\u529b\u7684\u9009\u62e9\uff1a\u5b83\u521b\u9020\u4e86\u63a8\u52a8\u6574\u4e2a\u4f53\u7cfb\u7684\u7ecf\u6d4e\u52a8\u673a\uff0c\u4e2d\u82f1\u8d38\u6613\u516c\u53f8\u5c31\u8bf4\u660e\u8d38\u6613\u5982\u4f55\u80fd\u53d1\u5c55\u6210\u76f4\u63a5\u7684\u653f\u6cbb\u63a7\u5236\u3002\u6218\u4e89\u4e5f\u5f88\u5f3a\uff1a\u82f1\u56fd\u7684\u6d77\u519b\u529b\u91cf\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u4ece\u5bf9\u624b\u90a3\u91cc\u593a\u53d6\u9886\u571f\u5e76\u5728\u5168\u7403\u4fdd\u536b\u5176\u6b96\u6c11\u5730\u3002\u91cd\u8981\u7684\u662f\u8bf4\u660e\u7406\u7531\u800c\u4e0d\u4ec5\u4ec5\u547d\u540d\u4e00\u79cd\u65b9\u5f0f\u3002",
            },
            {
              qEn: "Terry Deary argues that the British Empire did more harm than good: 'people did not benefit, land was taken, people died in poverty, and lasting economic damage was done.' Richard Gott says it was 'created and maintained through bloodshed, violence, brutality, conquest, and war.' Do you agree with these views? Use evidence to explain your answer.",
              qZh: "\u7279\u91cc\u00b7\u8fea\u91cc\u8ba4\u4e3a\u82f1\u5e1d\u56fd\u5f0a\u5927\u4e8e\u5229\uff1a\u201c\u4eba\u4eec\u5e76\u6ca1\u6709\u53d7\u76ca\uff0c\u571f\u5730\u88ab\u5265\u593a\uff0c\u4eba\u4eec\u6b7b\u4e8e\u8d2b\u56f0\uff0c\u5e76\u9020\u6210\u4e86\u6301\u4e45\u7684\u7ecf\u6d4e\u635f\u5bb3\u3002\u201d\u7406\u67e5\u5fb7\u00b7\u6208\u7279\u8bf4\u5b83\u201c\u662f\u901a\u8fc7\u6d41\u8840\u3001\u66b4\u529b\u3001\u6b8b\u9177\u3001\u5f81\u670d\u548c\u6218\u4e89\u5efa\u7acb\u5e76\u7ef4\u6301\u7684\u3002\u201d\u4f60\u540c\u610f\u8fd9\u4e9b\u89c2\u70b9\u5417\uff1f\u8bf7\u7528\u8bc1\u636e\u89e3\u91ca\u4f60\u7684\u56de\u7b54\u3002",
              aEn: "Both views have strong evidence. For Deary and Gott: the slave trade itself was run by Britain as a major empire operation; colonised people lost their land, their self-governance, and often their cultural identity; India's textile industry was deliberately undermined by British trade policy; many colonial subjects died in famines partly caused by British economic policies. Against the strongest version of their view: railways and infrastructure were built, though primarily to serve British economic interests; some legal and educational institutions remained after independence. The best answers will acknowledge both sides but explain why the harm was structural and long-lasting while the benefits were often unequally distributed.",
              aZh: "\u4e24\u79cd\u89c2\u70b9\u90fd\u6709\u5f3a\u6709\u529b\u7684\u8bc1\u636e\u652f\u6301\u3002\u652f\u6301\u8fea\u91cc\u548c\u6208\u7279\u7684\u8bc1\u636e\uff1a\u5974\u96b6\u8d38\u6613\u672c\u8eab\u5c31\u662f\u82f1\u56fd\u4f5c\u4e3a\u5e1d\u56fd\u7684\u4e3b\u8981\u884c\u52a8\u8fd0\u884c\u7684\uff1b\u88ab\u6b96\u6c11\u7684\u4eba\u4eec\u5931\u53bb\u4e86\u571f\u5730\u3001\u81ea\u6cbb\u6743\u5c45\u5e38\u5fc3\u8fd8\u6709\u6587\u5316\u8eab\u4efd\uff1b\u5370\u5ea6\u7eb6\u7ec7\u4e1a\u88ab\u82f1\u56fd\u8d38\u6613\u653f\u7b56\u6545\u610f\u524a\u5f31\uff1b\u8bb8\u591a\u6b96\u6c11\u5730\u660e\u6b7b\u4e8e\u90e8\u5206\u7531\u82f1\u56fd\u7ecf\u6d4e\u653f\u7b56\u9020\u6210\u7684\u9965\u8352\u3002\u6700\u4f73\u56de\u7b54\u5c06\u627f\u8ba4\u4e24\u9762\uff0c\u4f46\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4f24\u5bb3\u662f\u7ed3\u6784\u6027\u7684\u548c\u6301\u4e45\u6027\u7684\uff0c\u800c\u5229\u76ca\u5f80\u5f80\u5206\u914d\u4e0d\u5747\u3002",
            },
            {
              qEn: "Some people argue that the British Empire brought benefits such as railways, roads, and education. Others argue that these so-called benefits served British interests, not local people. Which view do you find more convincing, and why?",
              qZh: "\u4e00\u4e9b\u4eba\u8ba4\u4e3a\u82f1\u5e1d\u56fd\u7ed9\u5176\u63a7\u5236\u7684\u56fd\u5bb6\u5e26\u6765\u4e86\u9493\u8def\u3001\u516c\u8def\u548c\u6559\u80b2\u7b49\u76ca\u5904\u3002\u53e6\u4e00\u4e9b\u4eba\u5219\u8ba4\u4e3a\u8fd9\u4e9b\u6240\u8c13\u76ca\u5904\u662f\u4e3a\u82f1\u56fd\u5229\u76ca\u670d\u52a1\u7684\uff0c\u800c\u975e\u9762\u5411\u5f53\u5730\u4eba\u6c11\u3002\u4f60\u8ba4\u4e3a\u54ea\u79cd\u89c2\u70b9\u66f4\u5177\u8bf4\u670d\u529b\uff0c\u4e3a\u4ec0\u4e48\uff1f",
              aEn: "Both views have merit and the honest answer is that both were true to some extent. Railways were built, but they were primarily built to move goods and troops \u2014 to extract resources and maintain control. Education was introduced, but it often taught people to accept British authority. The 'benefits' argument tends to look at outcomes in isolation; the 'exploitation' argument looks at motive and effect on local people. Most historians today agree that even where genuine improvements occurred, they were a by-product of exploitation rather than the main aim. A fully rounded answer acknowledges both sides while explaining why motive matters as much as outcome.",
              aZh: "\u4e24\u79cd\u89c2\u70b9\u90fd\u6709\u5176\u4ef7\u503c\uff0c\u8bda\u5b9e\u7684\u56de\u7b54\u662f\u4e24\u8005\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u90fd\u662f\u771f\u5b9e\u7684\u3002\u9493\u8def\u786e\u5b9e\u5efa\u9020\u4e86\uff0c\u4f46\u4e3b\u8981\u662f\u4e3a\u4e86\u8fd0\u8f93\u8d27\u7269\u548c\u519b\u961f\u3002\u6559\u80b2\u88ab\u5f15\u5165\uff0c\u4f46\u5b83\u5f80\u5f80\u662f\u6559\u4eba\u4eec\u63a5\u53d7\u82f1\u56fd\u6743\u5a01\u3002\u5927\u591a\u6570\u5f53\u4ee3\u5386\u53f2\u5b66\u5bb6\u8ba4\u4e3a\uff0c\u5373\u4f7f\u5728\u771f\u6b63\u6539\u5584\u53d1\u751f\u7684\u5730\u65b9\uff0c\u90a3\u4e5f\u662f\u5265\u524a\u7684\u526f\u4ea7\u54c1\u800c\u975e\u4e3b\u8981\u76ee\u6807\u3002",
            },
            {
              qEn: "Why do you think people in Britain today still disagree about whether the British Empire was a good or a bad thing? What makes this question so difficult to answer?",
              qZh: "\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u5f53\u4eca\u82f1\u56fd\u4eba\u5bf9\u82f1\u5e1d\u56fd\u662f\u597d\u662f\u574f\u8fd9\u4e00\u95ee\u9898\u4ecd\u5b58\u5206\u6b67\uff1f\u662f\u4ec0\u4e48\u4f7f\u8fd9\u4e2a\u95ee\u9898\u5982\u6b64\u96be\u4ee5\u56de\u7b54\uff1f",
              aEn: "The question is difficult because it depends on whose perspective you take. For people in Britain, the empire is associated with national power, pride, and historical identity. For people in countries that were colonised, it is associated with loss of freedom, exploitation, and injustice. The difficulty is also that the empire did produce some genuine changes, but those changes came at a terrible human cost. Historians disagree because they use different criteria \u2014 some weigh economic outcomes, others weigh human rights. The question of whether the empire was 'good' or 'bad' may also be too simple: it was an enormously complex system that produced both harm and change, and judging it requires deciding which outcomes and whose experiences matter most.",
              aZh: "\u8fd9\u4e2a\u95ee\u9898\u5f88\u96be\u56de\u7b54\uff0c\u56e0\u4e3a\u5b83\u53d6\u51b3\u4e8e\u4f60\u4ee5\u8c01\u7684\u89c6\u89d2\u6765\u770b\u3002\u5bf9\u82f1\u56fd\u4eba\u6765\u8bf4\uff0c\u5e1d\u56fd\u4e0e\u6c11\u65cf\u529b\u91cf\u3001\u81ea\u8c6a\u548c\u5386\u53f2\u8eab\u4efd\u76f8\u5173\u8054\u3002\u5bf9\u88ab\u6b96\u6c11\u56fd\u5bb6\u7684\u4eba\u6c11\u6765\u8bf4\uff0c\u5b83\u610f\u5473\u7740\u5931\u53bb\u81ea\u7531\u3001\u88ab\u5265\u524a\u548c\u4e0d\u516c\u6b63\u3002\u5386\u53f2\u5b66\u5bb6\u4e5f\u5b58\u5206\u6b67\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4f7f\u7528\u4e0d\u540c\u6807\u51c6\u3002\u5e1d\u56fd\u662f\u5426\u201c\u597d\u201d\u6216\u201c\u574f\u201d\u8fd9\u4e00\u95ee\u9898\u4e5f\u8bb8\u8fc7\u4e8e\u7b80\u5355\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes why historians still argue about the British Empire today?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5386\u53f2\u5b66\u5bb6\u81f3\u4eca\u4ecd\u5728\u4e89\u8bba\u82f1\u5e1d\u56fd\uff1f",
          opts: [
            { en: "Historians do not have enough evidence to reach a conclusion about the Empire", zh: "\u5386\u53f2\u5b66\u5bb6\u6ca1\u6709\u8db3\u591f\u7684\u8bc1\u636e\u5c31\u5e1d\u56fd\u5f97\u51fa\u7ed3\u8bba" },
            { en: "The Empire affected different people in very different ways, so different perspectives lead to different conclusions", zh: "\u5e1d\u56fd\u4ee5\u975e\u5e38\u4e0d\u540c\u7684\u65b9\u5f0f\u5f71\u54cd\u4e86\u4e0d\u540c\u7684\u4eba\uff0c\u56e0\u6b64\u4e0d\u540c\u89c6\u89d2\u5bfc\u81f4\u4e0d\u540c\u7ed3\u8bba" },
            { en: "All historians agree the Empire was harmful but disagree about how harmful it was", zh: "\u6240\u6709\u5386\u53f2\u5b66\u5bb6\u90fd\u540c\u610f\u5e1d\u56fd\u662f\u6709\u5bb3\u7684\uff0c\u4f46\u5bf9\u5371\u5bb3\u7a0b\u5ea6\u6709\u5206\u6b67" },
            { en: "Politicians in Britain keep changing what historians are allowed to say about the Empire", zh: "\u82f1\u56fd\u653f\u5ba2\u4e0d\u65ad\u6539\u53d8\u5386\u53f2\u5b66\u5bb6\u5bf9\u5e1d\u56fd\u7684\u5141\u8bb8\u8868\u8fbe" },
          ],
          correct: 1,
          explainCorrectEn: "Historians argue about the Empire because it had very different effects on different people. For colonisers, it brought wealth and power. For colonised peoples, it often meant loss of land, freedom, and self-determination. Because historians look at different kinds of evidence and centre different people's experiences, they reach different conclusions. This is not a sign that history is uncertain \u2014 it is a sign that complex events require complex judgements.",
          explainCorrectZh: "\u5386\u53f2\u5b66\u5bb6\u5bf9\u5e1d\u56fd\u5b58\u5206\u6b67\uff0c\u662f\u56e0\u4e3a\u5b83\u5bf9\u4e0d\u540c\u7684\u4eba\u4ea7\u751f\u4e86\u975e\u5e38\u4e0d\u540c\u7684\u5f71\u54cd\u3002\u5bf9\u6b96\u6c11\u8005\u6765\u8bf4\uff0c\u5b83\u5e26\u6765\u4e86\u8d22\u5bcc\u548c\u6743\u529b\u3002\u5bf9\u88ab\u6b96\u6c11\u8005\u6765\u8bf4\uff0c\u5b83\u5f80\u5f80\u610f\u5473\u7740\u5931\u53bb\u571f\u5730\u3001\u81ea\u7531\u548c\u81ea\u51b3\u3002\u8fd9\u4e0d\u8868\u660e\u5386\u53f2\u4e0d\u786e\u5b9a\u2014\u2014\u8fd9\u8868\u660e\u590d\u6742\u7684\u4e8b\u4ef6\u9700\u8981\u590d\u6742\u7684\u5224\u65ad\u3002",
          explainWrongEn: "The correct answer is B. There is actually plenty of historical evidence. The disagreement arises because different historians prioritise different perspectives and different types of impact. It is not about lack of evidence or political restrictions \u2014 it is about the genuine complexity of judging an event that affected millions of people in very different ways.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u8fd9\u4e0d\u662f\u8bc1\u636e\u4e0d\u8db3\u6216\u653f\u6cbb\u9650\u5236\u7684\u95ee\u9898\u2014\u2014\u800c\u662f\u5224\u65ad\u4e00\u4e2a\u4ee5\u975e\u5e38\u4e0d\u540c\u7684\u65b9\u5f0f\u5f71\u54cd\u4e86\u6570\u767e\u4e07\u4eba\u7684\u4e8b\u4ef6\u7684\u771f\u6b63\u590d\u6742\u6027\u3002",
        },
        {
          type: "quiz",
          qEn: "The lesson materials say Britain ruled an empire of around 400 million people. Which of the following best explains how such a small island was able to control so much of the world?",
          qZh: "\u8bfe\u7a0b\u6750\u6599\u8bf4\u82f1\u56fd\u7edf\u6cbb\u4e86\u7ea6\u40004\u4ebf\u4eba\u7684\u5e1d\u56fd\u3002\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u5982\u6b64\u4e00\u4e2a\u5c0f\u5c9b\u56fd\u4e3a\u4f55\u80fd\u63a7\u5236\u5982\u6b64\u5e9e\u5927\u7684\u4e16\u754c\uff1f",
          opts: [
            { en: "Britain had a larger population than any other country in the world at the time", zh: "\u82f1\u56fd\u5f53\u65f6\u62e5\u6709\u6bd4\u4e16\u754c\u4e0a\u4efb\u4f55\u5176\u4ed6\u56fd\u5bb6\u66f4\u591a\u7684\u4eba\u53e3" },
            { en: "Britain used a combination of military power, trade, settlers, and discovery to build and maintain control", zh: "\u82f1\u56fd\u7efc\u5408\u8fd0\u7528\u519b\u4e8b\u529b\u91cf\u3001\u8d38\u6613\u3001\u6b96\u6c11\u548c\u63a2\u7d22\u6765\u5efa\u7acb\u548c\u7ef4\u6301\u63a7\u5236" },
            { en: "The people in colonised countries chose to join the British Empire voluntarily", zh: "\u88ab\u6b96\u6c11\u56fd\u5bb6\u7684\u4eba\u6c11\u81ea\u613f\u52a0\u5165\u82f1\u5e1d\u56fd" },
            { en: "Britain discovered all the lands it controlled before any other country knew they existed", zh: "\u82f1\u56fd\u5728\u4efb\u4f55\u5176\u4ed6\u56fd\u5bb6\u77e5\u665a\u5b83\u4eec\u5b58\u5728\u4e4b\u524d\u5c31\u53d1\u73b0\u4e86\u5b83\u6240\u6709\u7684\u6240\u6709\u571f\u5730" },
          ],
          correct: 1,
          explainCorrectEn: "The lesson materials identify four main methods Britain used to build its empire: war, discovery, settlers, and trade. No single factor explains the empire's size. Military power won territory and defended it. Trade created economic dependency. Settlers extended British population and culture into new lands. Discovery provided legal claims. Britain also had the world's most powerful navy during this period, which allowed it to project power globally in a way other countries could not match.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u6307\u51fa\u4e86\u82f1\u56fd\u5efa\u7acb\u5e1d\u56fd\u7684\u56db\u79cd\u4e3b\u8981\u65b9\u5f0f\uff1a\u6218\u4e89\u3001\u53d1\u73b0\u3001\u6b96\u6c11\u548c\u8d38\u6613\u3002\u5355\u4e00\u56e0\u7d20\u65e0\u6cd5\u89e3\u91ca\u5e1d\u56fd\u7684\u89c4\u6a21\u3002\u519b\u4e8b\u529b\u91cf\u8d62\u5f97\u9886\u571f\u5e76\u5bf9\u5176\u8fdb\u884c\u9632\u536b\u3002\u8d38\u6613\u521b\u9020\u4e86\u7ecf\u6d4e\u4f9d\u8d56\u6027\u3002\u6b96\u6c11\u5c06\u82f1\u56fd\u4eba\u53e3\u548c\u6587\u5316\u5ef6\u4f38\u5230\u65b0\u5730\u3002\u53d1\u73b0\u63d0\u4f9b\u4e86\u6cd5\u5f8b\u4e3b\u5f20\u3002\u82f1\u56fd\u5728\u6b64\u671f\u95f4\u62e5\u6709\u4e16\u754c\u4e0a\u6700\u5f3a\u5927\u7684\u6d77\u519b\u3002",
          explainWrongEn: "The correct answer is B. Britain was not the most populous nation, and colonised people certainly did not choose to join voluntarily \u2014 conquest, economic pressure, and force were central. The lesson materials explain that Britain built its empire through four combined methods, not through one single advantage.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u82f1\u56fd\u5e76\u975e\u4eba\u53e3\u6700\u591a\u7684\u56fd\u5bb6\uff0c\u88ab\u6b96\u6c11\u7684\u4eba\u6c11\u5f53\u7136\u4e5f\u5e76\u975e\u81ea\u613f\u52a0\u5165\u2014\u2014\u5f81\u670d\u3001\u7ecf\u6d4e\u538b\u8feb\u548c\u6b66\u529b\u662f\u6838\u5fc3\u3002\u8bfe\u7a0b\u6750\u6599\u89e3\u91ca\uff0c\u82f1\u56fd\u901a\u8fc7\u56db\u79cd\u7ec4\u5408\u65b9\u6cd5\u5efa\u7acb\u5e1d\u56fd\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5355\u4e00\u4f18\u52bf\u3002",
        },
      ],
    },

    /* ========== Lesson 4: US Civil Rights Movement Review ========== */
    {
      num: 4,
      badge: "E",
      title: "The US Civil Rights Movement \u2014 Review",
      titleZh: "\u7f8e\u56fd\u6c11\u6743\u8fd0\u52a8\u2014\u2014\u5355\u5143\u56de\u987e",
      subtitle: "Test your ability to explain and evaluate the significance of civil rights events.",
      subtitleZh: "\u6d4b\u9a8c\u4f60\u89e3\u91ca\u548c\u8bc4\u4f30\u6c11\u6743\u4e8b\u4ef6\u91cd\u8981\u6027\u7684\u80fd\u529b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain the meaning of Jim Crow, Plessy v. Ferguson, and the NAACP.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6728\u9e21\u6cd5\u3001\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u548c\u5168\u56fd\u6709\u8272\u4eba\u5730\u4f4d\u4fc3\u8fdb\u534f\u4f1a\uff08NAACP\uff09\u7684\u542b\u4e49\u3002",
            },
            {
              en: "I can rank civil rights events by significance and give reasons that compare across events.",
              zh: "\u6211\u80fd\u6309\u91cd\u8981\u6027\u5bf9\u6c11\u6743\u4e8b\u4ef6\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u7ed9\u51fa\u8de8\u4e8b\u4ef6\u6bd4\u8f83\u7684\u7406\u7531\u3002",
            },
            {
              en: "I can explain why legal change alone was not enough to end racial inequality in the United States.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5355\u9760\u6cd5\u5f8b\u53d8\u9769\u8fd8\u4e0d\u8db3\u4ee5\u7ed3\u675f\u7f8e\u56fd\u7684\u79cd\u65cf\u4e0d\u5e73\u7b49\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Montgomery Bus Boycott lasted 381 days and involved 40,000 African Americans walking or carpooling instead of taking buses. Why was economic pressure such an effective tactic for the civil rights movement?",
              qZh: "\u8499\u54e5\u9a6c\u5229\u516c\u8f66\u6297\u8bae\u6301\u7eed\u4e86381\u5929\uff0c\u6d89\u53ca40000\u540d\u975e\u88d4\u7f8e\u56fd\u4eba\u6b65\u884c\u6216\u62fc\u8f66\u4ee3\u66ff\u4e58\u516c\u8f66\u3002\u4e3a\u4ec0\u4e48\u7ecf\u6d4e\u538b\u529b\u662f\u6c11\u6743\u8fd0\u52a8\u5982\u6b64\u6709\u6548\u7684\u6218\u672f\uff1f",
              aEn: "Economic pressure worked because it hit segregationists where it hurt most \u2014 their profits. Montgomery's bus company depended heavily on Black passengers for its revenue. When 40,000 people stopped using the buses for over a year, the company faced serious financial losses. This showed that African Americans had collective economic power they could use to force change, even without the legal right to vote or protest freely. It also demonstrated that nonviolent protest could be more powerful than violence, because it was harder for authorities to justify cracking down on people who were simply refusing to spend their money. This tactic influenced later movements worldwide.",
              aZh: "\u7ecf\u6d4e\u538b\u529b\u4e4b\u6240\u4ee5\u5956\u6548\uff0c\u662f\u56e0\u4e3a\u5b83\u6253\u51fb\u4e86\u79cd\u65cf\u9694\u79bb\u8005\u6700\u5c0f\u5fc3\u7684\u5730\u65b9\u2014\u2014\u5229\u6da6\u3002\u8499\u54e5\u9a6c\u5229\u516c\u8f66\u516c\u53f8\u5f88\u5927\u7a0b\u5ea6\u4e0a\u4f9d\u8d56\u9ed1\u4eba\u4e58\u5ba2\u7684\u6536\u5165\u3002\u5f53\u4e4b\u505c\u6b62\u4e58\u8f66\u8d85\u8fc7\u4e00\u5e74\uff0c\u516c\u53f8\u9762\u4e34\u4e25\u91cd\u7684\u7ecf\u6d4e\u635f\u5931\u3002\u8fd9\u8868\u660e\u975e\u88d4\u7f8e\u56fd\u4eba\u62e5\u6709\u96c6\u4f53\u7ecf\u6d4e\u5b9e\u529b\u53ef\u4ee5\u8feb\u4f7f\u53d8\u9769\u3002\u8fd9\u4e00\u6218\u672f\u5f71\u54cd\u4e86\u5168\u7403\u540e\u6765\u7684\u8fd0\u52a8\u3002",
            },
            {
              qEn: "The Civil Rights Act of 1964 made racial segregation illegal in the United States. Yet slavery had been abolished in 1865, and the Supreme Court had already ruled on racial equality in Brown v. Board in 1954. Why was another major law still needed in 1964?",
              qZh: "1964\u5e74\u7684\u300a\u6c11\u6743\u6cd5\u6848\u300b\u4f7f\u79cd\u65cf\u9694\u79bb\u5728\u7f8e\u56fd\u8fdd\u6cd5\u3002\u7136\u800c\u5974\u96b6\u5236\u5ea6\u5df2\u4e8e1865\u5e74\u88ab\u5e9f\u9664\uff0c\u6700\u9ad8\u6cd5\u9662\u4e5f\u5df2\u4e8e1954\u5e74\u5728\u5e03\u6717\u6848\u4e2d\u88c1\u51b3\u4e86\u79cd\u65cf\u5e73\u7b49\u3002\u4e3a\u4ec0\u4e48\u52301964\u5e74\u8fd8\u9700\u8981\u53e6\u4e00\u9879\u91cd\u8981\u6cd5\u5f8b\uff1f",
              aEn: "This question reveals one of the most important lessons in history: ending a law does not automatically change social reality. Slavery was abolished in 1865, but Jim Crow laws immediately replaced it with legal segregation. Brown v. Board struck down school segregation in 1954, but Southern states refused to comply \u2014 schools remained segregated, enforced by state governments and white supremacist groups. The Civil Rights Act of 1964 was needed because a ruling is only as powerful as the willingness to enforce it. The Act created federal enforcement mechanisms covering all public spaces, not just schools, and gave the federal government tools to override state resistance. This shows that legal change requires both the right law and the political will to enforce it.",
              aZh: "\u8fd9\u4e2a\u95ee\u9898\u63ed\u793a\u4e86\u5386\u53f2\u4e0a\u6700\u91cd\u8981\u7684\u6559\u8bad\u4e4b\u4e00\uff1a\u5e9f\u9664\u4e00\u9879\u6cd5\u5f8b\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6539\u53d8\u793e\u4f1a\u73b0\u5b9e\u3002\u5974\u96b6\u5236\u5ea6\u4e8e1865\u5e74\u88ab\u5e9f\u9664\uff0c\u4f46\u6728\u9e21\u6cd5\u9a6c\u4e0a\u4ee5\u5408\u6cd5\u9694\u79bb\u53d6\u800c\u4ee3\u4e4b\u3002\u5e03\u6717\u6848\u4e8e1954\u5e74\u5e9f\u9664\u4e86\u5b66\u6821\u9694\u79bb\uff0c\u4f46\u5357\u65b9\u5404\u5dde\u5c31\u662f\u62d2\u7edd\u6267\u884c\u3002\u6cd5\u5f8b\u53d8\u9769\u9700\u8981\u6b63\u786e\u7684\u6cd5\u5f8b\u548c\u6267\u884c\u5b83\u7684\u653f\u6cbb\u610f\u613f\u4e24\u8005\u517c\u5907\u3002",
            },
            {
              qEn: "The Greensboro Four were students who staged a sit-in at a segregated lunch counter in 1960. Why do you think student-led, nonviolent direct action became such an important part of the civil rights movement?",
              qZh: "\u683c\u6797\u65af\u4f2f\u7f57\u56db\u4eba\u662f1960\u5e74\u5728\u79cd\u65cf\u9694\u79bb\u7684\u9910\u5385\u67dc\u53f0\u8fdb\u884c\u9759\u5750\u6297\u8bae\u7684\u5b66\u751f\u3002\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u7531\u5b66\u751f\u4e3b\u5bfc\u7684\u975e\u66b4\u529b\u76f4\u63a5\u884c\u52a8\u6210\u4e3a\u6c11\u6743\u8fd0\u52a8\u5982\u6b64\u91cd\u8981\u7684\u7ec4\u6210\u90e8\u5206\uff1f",
              aEn: "Student-led nonviolent direct action was powerful for several reasons. First, it was morally difficult for authorities to justify arresting or attacking students who were simply sitting peacefully at a lunch counter. The contrast between peaceful protesters and violent police responses created powerful images that shaped public opinion. Second, students had relatively less to lose economically than older workers who could be fired for protesting. Third, direct action made the injustice of segregation visible in a concrete way: being refused service at a lunch counter was something ordinary people could understand and feel outraged by. The Greensboro sit-in spread rapidly because it was a tactic others could copy.",
              aZh: "\u5b66\u751f\u4e3b\u5bfc\u7684\u975e\u66b4\u529b\u76f4\u63a5\u884c\u52a8\u4e4b\u6240\u4ee5\u6709\u529b\uff0c\u6709\u51e0\u4e2a\u539f\u56e0\u3002\u9996\u5148\uff0c\u5f53\u5c40\u5f88\u96be\u4e3a\u9006\u6355\u6216\u653b\u51fb\u90a3\u4e9b\u53ea\u662f\u5e73\u9759\u5750\u5728\u9910\u5385\u67dc\u53f0\u65c1\u7684\u5b66\u751f\u63d0\u4f9b\u5408\u7406\u7406\u7531\u3002\u5e73\u9759\u7684\u629a\u8bae\u8005\u4e0e\u66b4\u529b\u7684\u8b66\u5bdf\u56de\u5e94\u4e4b\u95f4\u7684\u5bf9\u6bd4\u521b\u9020\u4e86\u5f71\u54cd\u516c\u4f17\u8206\u8bba\u7684\u5f3a\u5927\u5f62\u8c61\u3002\u5176\u6b21\uff0c\u5b66\u751f\u5728\u7ecf\u6d4e\u4e0a\u76f8\u5bf9\u6765\u8bf4\u76f8\u6bd4\u53ef\u80fd\u56e0\u6297\u8bae\u800c\u5931\u53bb\u5de5\u4f5c\u7684\u6210\u5e74\u5de5\u4eba\u635f\u5931\u8f83\u5c0f\u3002\u7b2c\u4e09\uff0c\u76f4\u63a5\u884c\u52a8\u4ee5\u5177\u4f53\u7684\u65b9\u5f0f\u4f7f\u9694\u79bb\u5236\u5ea6\u7684\u4e0d\u516c\u6b63\u663e\u800c\u6613\u89c1\u3002",
            },
            {
              qEn: "The homework materials mention Malcolm X, Stokely Carmichael, and Black Power as later developments in the civil rights movement. Why do you think some activists moved away from nonviolent protest towards more radical approaches?",
              qZh: "\u4f5c\u4e1a\u6750\u6599\u63d0\u5230\u9a6c\u5c14\u79d1\u59c6\u00b7X\u3001\u65af\u6258\u514b\u5229\u00b7\u5361\u9ea6\u514b\u5c14\u548c\u9ed1\u4eba\u6743\u529b\u4e3a\u6c11\u6743\u8fd0\u52a8\u7684\u540e\u671f\u53d1\u5c55\u3002\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u4e00\u4e9b\u6d3b\u52a8\u4eba\u58eb\u4ece\u975e\u66b4\u529b\u6297\u8bae\u8f6c\u5411\u4e86\u66f4\u6fc0\u8fdb\u7684\u65b9\u6cd5\uff1f",
              aEn: "After years of nonviolent protest, many activists felt that progress was too slow and too limited. The Civil Rights Act of 1964 and the Voting Rights Act of 1965 addressed formal legal discrimination, but they did not address the deep economic inequality, poverty, and daily racism that many Black Americans continued to face in both the South and the North. Nonviolent protest worked when there was media attention and federal willingness to act \u2014 but in many communities, those conditions did not exist. The shift toward Black Power reflected frustration with the pace of change and a desire for African Americans to define their own identity and build their own institutions rather than wait for white-dominated society to grant them rights.",
              aZh: "\u7ecf\u8fc7\u591a\u5e74\u7684\u975e\u66b4\u529b\u6297\u8bae\uff0c\u8bb8\u591a\u6d3b\u52a8\u4eba\u58eb\u611f\u5230\u8fdb\u5c55\u592a\u6162\u4e14\u5c40\u9650\u6027\u592a\u5f3a\u3002\u30001964\u5e74\u6c11\u6743\u6cd5\u6848\u300b\u548c\u30001965\u5e74\u6295\u7968\u6743\u6cd5\u6848\u300b\u89e3\u51b3\u4e86\u6b63\u5f0f\u7684\u6cd5\u5f8b\u6b67\u89c6\uff0c\u4f46\u5e76\u6ca1\u6709\u89e3\u51b3\u8bb8\u591a\u9ed1\u4eba\u5728\u5357\u65b9\u548c\u5317\u65b9\u4ecd\u7136\u9762\u4e34\u7684\u6df1\u5c42\u7ecf\u6d4e\u4e0d\u5e73\u7b49\u3001\u8d2b\u56f0\u548c\u65e5\u5e38\u79cd\u65cf\u4e3b\u4e49\u3002\u8f6c\u5411\u9ed1\u4eba\u6743\u529b\u5cd9\u53cd\u6620\u4e86\u5bf9\u53d8\u9769\u6b65\u4f10\u7684\u6c2e\u6162\uff0c\u4ee5\u53ca\u671f\u671b\u975e\u88d4\u7f8e\u56fd\u4eba\u80fd\u591f\u81ea\u5df1\u5b9a\u4e49\u8eab\u4efd\u5e76\u5efa\u7acb\u81ea\u5df1\u7684\u673a\u6784\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best explains why the March on Washington (1963) is considered the most significant civil rights event?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u534e\u76db\u987f\u6e38\u884c\uff081963\u5e74\uff09\u88ab\u8ba4\u4e3a\u662f\u6700\u91cd\u8981\u7684\u6c11\u6743\u4e8b\u4ef6\uff1f",
          opts: [
            { en: "It was the first time African Americans had ever protested against racial segregation", zh: "\u8fd9\u662f\u975e\u88d4\u7f8e\u56fd\u4eba\u9996\u6b21\u5c31\u79cd\u65cf\u9694\u79bb\u8fdb\u884c\u6297\u8bae" },
            { en: "It drew an estimated 250,000 people, gained massive media attention, and helped pressure Congress to pass the Civil Rights Act of 1964", zh: "\u5438\u5f15\u4e86\u4f30\u8ba125\u4e07\u4eba\u53c2\u52a0\uff0c\u5f15\u53d1\u5a92\u4f53\u5e7f\u6cbb\u5173\u6ce8\uff0c\u5e76\u6709\u52a9\u4e8e\u8fc7\u5e38\u6021\u8bae\u4f1a\u901a\u8fc71964\u5e74\u6c11\u6743\u6cd5\u6848" },
            { en: "It was the only civil rights event that involved violence, which forced the government to act", zh: "\u8fd9\u662f\u5531\u4e00\u4e00\u6d89\u53ca\u66b4\u529b\u7684\u6c11\u6743\u4e8b\u4ef6\uff0c\u8feb\u4f7f\u653f\u5e9c\u91c7\u53d6\u884c\u52a8" },
            { en: "Martin Luther King Jr. gave his first ever public speech at the March on Washington", zh: "\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u5c0f\u5428\u5728\u534e\u76db\u987f\u6e38\u884c\u4e2d\u53d1\u8868\u4e86\u4ed6\u7684\u9996\u6b21\u516c\u5f00\u6f14\u8bb2" },
          ],
          correct: 1,
          explainCorrectEn: "The source materials state that the March on Washington drew an estimated 250,000 to 400,000 people, including a multiracial coalition of all major civil rights organisations. It was televised nationally and King's 'I Have a Dream' speech became iconic. Crucially, it helped directly pressure President Johnson and Congress to pass the Civil Rights Act of 1964. Its combination of scale, media attention, multiracial coalition, and legislative impact made it the most significant event of the civil rights movement.",
          explainCorrectZh: "\u6e90\u6587\u6750\u6599\u8bf4\u660e\uff0c\u534e\u76db\u987f\u6e38\u884c\u5438\u5f15\u4e86\u4f30\u8ba125\u81f340\u4e07\u4eba\u53c2\u52a0\uff0c\u5305\u62ec\u6240\u6709\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\u7684\u591a\u79cd\u65cf\u8054\u76df\u3002\u5b83\u5728\u5168\u56fd\u7535\u89c6\u64ad\u51fa\uff0c\u91d1\u5c0f\u5428\u7684\u6f14\u8bb2\u6210\u4e3a\u6807\u5fd7\u6027\u7b26\u53f7\u3002\u81f3\u5173\u91cd\u8981\u7684\u662f\uff0c\u5b83\u6709\u52a9\u4e8e\u76f4\u63a5\u65bd\u538b\u4e8e\u7ea6\u7ff0\u900a\u603b\u7edf\u548c\u56fd\u4f1a\uff0c\u4fc3\u4f7f\u901a\u8fc7\u4e861964\u5e74\u6c11\u6743\u6cd5\u6848\u3002",
          explainWrongEn: "The correct answer is B. The March was not the first protest, it was not violent, and King had given many speeches before 1963. What made it uniquely significant was its enormous scale, national television coverage, multiracial participation, and direct connection to the Civil Rights Act of 1964.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u534a\u76db\u987f\u6e38\u884c\u5e76\u975e\u7b2c\u4e00\u6b21\u6297\u8bae\uff0c\u5b83\u4e0d\u5305\u542b\u66b4\u529b\uff0c\u91d1\u5c0f\u5428\u572819\u5e74\u5148\u5c31\u66fe\u591a\u6b21\u516c\u5f00\u6f14\u8bb2\u3002\u4f7f\u5176\u5177\u6709\u72ec\u7279\u91cd\u8981\u6027\u7684\u662f\u5176\u5de8\u5927\u89c4\u6a21\u3001\u5168\u56fd\u7535\u89c6\u8986\u76d6\u3001\u591a\u79cd\u65cf\u53c2\u4e0e\u4ee5\u53ca\u4e0e1964\u5e74\u6c11\u6743\u6cd5\u6848\u7684\u76f4\u63a5\u5173\u8054\u3002",
        },
        {
          type: "quiz",
          qEn: "In the homework, students were asked to find out about Jim Crow Laws, Plessy v. Ferguson, and the NAACP. Which of the following correctly describes what 'Plessy v. Ferguson' was?",
          qZh: "\u5728\u4f5c\u4e1a\u4e2d\uff0c\u5b66\u751f\u88ab\u8981\u6c42\u4e86\u89e3\u6728\u9e21\u6cd5\u3001\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u548cNAACP\u3002\u4ee5\u4e0b\u54ea\u9879\u6b63\u786e\u63cf\u8ff0\u4e86\u201c\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u201d\uff1f",
          opts: [
            { en: "A 1954 Supreme Court case that ruled segregated schools were unconstitutional", zh: "1954\u5e74\u7684\u6700\u9ad8\u6cd5\u9662\u6848\u4ef6\uff0c\u88c1\u5b9a\u9694\u79bb\u5b66\u6821\u8fdd\u5baa" },
            { en: "A 1896 Supreme Court case that upheld racial segregation under the 'separate but equal' doctrine", zh: "1896\u5e74\u7684\u6700\u9ad8\u6cd5\u9662\u6848\u4ef6\uff0c\u4ee5\u201c\u5206\u79bb\u4f46\u5e73\u7b49\u201d\u539f\u5219\u652f\u6301\u79cd\u65cf\u9694\u79bb" },
            { en: "A protest by Homer Plessy in 1896 that led to the founding of the NAACP", zh: "\u9170\u9ed8\u00b7\u666e\u83b1\u57281896\u5e74\u7684\u629a\u8bae\uff0c\u5bfc\u81f4\u4e86NAACP\u7684\u5efa\u7acb" },
            { en: "A 1955 Supreme Court case that forced Montgomery to desegregate its buses", zh: "1955\u5e74\u7684\u6700\u9ad8\u6cd5\u9662\u6848\u4ef6\uff0c\u8feb\u4f7f\u8499\u54e5\u9a6c\u5229\u5bf9\u516c\u8f66\u53d6\u6d88\u9694\u79bb" },
          ],
          correct: 1,
          explainCorrectEn: "Plessy v. Ferguson was an 1896 Supreme Court case in which the court ruled that racial segregation was legal as long as the separate facilities were 'equal.' This 'separate but equal' doctrine provided the legal justification for Jim Crow segregation laws across the southern United States for nearly 60 years, until it was overturned by Brown v. Board of Education in 1954.",
          explainCorrectZh: "\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u662f1896\u5e74\u7684\u6700\u9ad8\u6cd5\u9662\u6848\u4ef6\uff0c\u6cd5\u9662\u88c1\u5b9a\uff0c\u53ea\u8981\u5206\u79bb\u8bbe\u65bd\u201c\u5e73\u7b49\u201d\uff0c\u79cd\u65cf\u9694\u79bb\u5c31\u662f\u5408\u6cd5\u7684\u3002\u8fd9\u4e00\u201c\u5206\u79bb\u4f46\u5e73\u7b49\u201d\u539f\u5219\u4e3a\u7f8e\u56fd\u5357\u65b9\u5404\u5dde\u7684\u6728\u9e21\u6cd5\u9694\u79bb\u6cd5\u5f8b\u63d0\u4f9b\u4e86\u6cd5\u5f8b\u4f9d\u636e\uff0c\u76f4\u52301954\u5e74\u88ab\u5e03\u6717\u8bf7\u6559\u80b2\u59d4\u5458\u4f1a\u6848\u63a8\u7ffb\u3002",
          explainWrongEn: "The correct answer is B. Plessy v. Ferguson was in 1896, not 1954 or 1955. The 1954 case was Brown v. Board of Education, which overturned Plessy. The NAACP was not founded as a direct result of Plessy, though racial segregation and injustice were central to the reasons for its founding in 1909.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u57281896\u5e74\uff0c\u800c\u975e1954\u5e74\u62161955\u5e74\u30021954\u5e74\u7684\u6848\u4ef6\u662f\u5e03\u6717\u8bf7\u6559\u80b2\u59d4\u5458\u4f1a\u6848\uff0c\u5b83\u63a8\u7ffbNAACP\u5e76\u975e\u76f4\u63a5\u56e0\u4e3a\u666e\u83b1\u6848\u6210\u7acb\uff0c\u4f46\u79cd\u65cf\u9694\u79bb\u548c\u4e0d\u516c\u6b63\u662f\u5b83\u57281909\u5e74\u6210\u7acb\u7684\u6838\u5fc3\u539f\u56e0\u3002",
        },
      ],
    },
  ],
};
