import { Topic } from "./types";

export const learningCheck: Topic = {
  slug: "learning-check",
  name: "Learning Check",
  nameZh: "\u5355\u5143\u5c0f\u6d4b",
  subject: "History",
  subjectZh: "\u5386\u53f2",
  year: "Year 8",
  lessons: [
    /* ========== Lesson 1: Human Rights and Slavery Review ========== */
    {
      num: 1,
      badge: "E",
      title: "Human Rights and Slavery — Review",
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
              en: "I can identify which articles of the UN Declaration of Human Rights were violated by slavery.",
              zh: "\u6211\u80fd\u6307\u51fa\u5974\u96b6\u5236\u5ea6\u4fb5\u72af\u4e86\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4e2d\u7684\u54ea\u4e9b\u6761\u6b3e\u3002",
            },
            {
              en: "I can explain why studying slavery helps us understand why human rights protections matter today.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5b66\u4e60\u5974\u96b6\u5236\u5ea6\u6709\u52a9\u4e8e\u6211\u4eec\u7406\u89e3\u4eca\u5929\u4eba\u6743\u4fdd\u62a4\u7684\u91cd\u8981\u6027\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Article 2 of the UN Declaration states that no one shall be treated differently because of their race, colour, sex, language, religion, or where they come from. Give two specific examples from the history of slavery that broke this article.",
              qZh: "\u8054\u5408\u56fd\u5ba3\u8a00\u7b2c2\u6761\u8bf4\u660e\uff0c\u4efb\u4f55\u4eba\u4e0d\u5f97\u56e0\u79cd\u65cf\u3001\u80a4\u8272\u3001\u6027\u522b\u3001\u8bed\u8a00\u3001\u5b97\u6559\u6216\u51fa\u8eab\u5730\u800c\u53d7\u5230\u4e0d\u540c\u5bf9\u5f85\u3002\u8bf7\u4ece\u5974\u96b6\u5236\u5ea6\u5386\u53f2\u4e2d\u5217\u4e3e\u4e24\u4e2a\u5177\u4f53\u4f8b\u5b50\u6765\u8bf4\u660e\u8fd9\u4e00\u6761\u6b3e\u662f\u5982\u4f55\u88ab\u4fb5\u72af\u7684\u3002",
              aEn: "Any two of the following: (1) Enslaved Africans were captured and transported purely because of their race — their skin colour was used to justify treating them as property. (2) Enslaved people were not allowed to read, write, or attend school, while white colonists had access to education. (3) Enslaved people had no legal rights in court, while enslavers could use the courts to claim insurance money (as in the Zong case). (4) Enslaved people were given different — much harsher — living and working conditions based solely on their racial identity. All of these show that race was used to create a two-tier system of humanity, which Article 2 is designed to prevent.",
              aZh: "\u4ee5\u4e0b\u4efb\u610f\u4e24\u9879\u5747\u53ef\uff1a\uff081\uff09\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u4ec5\u56e0\u79cd\u65cf\u800c\u88ab\u6355\u83b7\u548c\u8fd0\u8f93\u2014\u2014\u80a4\u8272\u88ab\u7528\u6765\u4e3a\u5c06\u4ed6\u4eec\u89c6\u4e3a\u8d22\u4ea7\u8fdb\u884c\u8fa9\u62a4\u3002\uff082\uff09\u88ab\u5974\u5f79\u8005\u4e0d\u5141\u8bb8\u8bfb\u4e66\u5199\u5b57\u6216\u4e0a\u5b66\uff0c\u800c\u767d\u4eba\u6b96\u6c11\u5374\u53ef\u4ee5\u63a5\u53d7\u6559\u80b2\u3002\uff083\uff09\u88ab\u5974\u5f79\u8005\u5728\u6cd5\u5ead\u4e0a\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u800c\u5974\u96b6\u4e3b\u5374\u53ef\u4ee5\u5229\u7528\u6cd5\u5ead\u7533\u8bf7\u4fdd\u9669\u8d54\u507f\uff08\u5982\u5c0a\u683c\u53f7\u4e8b\u4ef6\uff09\u3002\uff084\uff09\u88ab\u5974\u5f79\u8005\u4ec5\u56e0\u79cd\u65cf\u8eab\u4efd\u5c31\u88ab\u5b89\u6392\u4e86\u5dee\u5f97\u591a\u3001\u66f4\u4e3a\u6076\u52a3\u7684\u751f\u6d3b\u548c\u5de5\u4f5c\u6761\u4ef6\u3002\u8fd9\u4e9b\u90fd\u8bf4\u660e\u79cd\u65cf\u88ab\u7528\u6765\u5efa\u7acb\u4e24\u7ea7\u4eba\u7c7b\u4f53\u7cfb\uff0c\u800c\u7b2c2\u6761\u6b63\u662f\u4e3a\u4e86\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\u3002",
            },
            {
              qEn: "The UN Declaration of Human Rights was written in 1948 — over 100 years after slavery was abolished in the British Empire. Does this mean the Declaration came too late to matter? Give reasons for your answer.",
              qZh: "\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u5199\u4e8e1948\u5e74\u2014\u2014\u5373\u82f1\u5e1d\u56fd\u5e9f\u9664\u5974\u96b6\u5236\u5ea6\u540e100\u591a\u5e74\u3002\u8fd9\u662f\u5426\u610f\u5473\u7740\u5ba3\u8a00\u51fa\u73b0\u5f97\u592a\u665a\u800c\u6ca1\u6709\u610f\u4e49\uff1f\u8bf7\u8bf4\u660e\u4f60\u7684\u7406\u7531\u3002",
              aEn: "No — the Declaration did not come too late, for several reasons. First, slavery may have ended in the British Empire in 1833, but forms of racial oppression, segregation, and forced labour continued around the world into the 20th century. The Declaration created a legal framework to challenge these. Second, the Declaration was a response to the Holocaust and World War II — events that showed what happens when governments are not bound by any universal standard of human rights. Third, the Declaration is not just about the past: it sets a continuing standard for governments today. The history of slavery shows exactly why such protections were needed and why they continue to matter.",
              aZh: "\u4e0d\u2014\u2014\u5ba3\u8a00\u5e76\u6ca1\u6709\u51fa\u73b0\u5f97\u592a\u665a\uff0c\u539f\u56e0\u5982\u4e0b\u3002\u9996\u5148\uff0c\u5974\u96b6\u5236\u5ea6\u867d\u4e8e1833\u5e74\u5728\u82f1\u5e1d\u56fd\u7ec8\u6b62\uff0c\u4f46\u79cd\u65cf\u538b\u8feb\u3001\u79cd\u65cf\u9694\u79bb\u548c\u5f3a\u5236\u52b3\u52a8\u7684\u5f62\u5f0f\u5374\u572820\u4e16\u7eaa\u4e16\u754c\u5404\u5730\u6301\u7eed\u5b58\u5728\u3002\u5ba3\u8a00\u5efa\u7acb\u4e86\u4e00\u4e2a\u6cd5\u5f8b\u6846\u67b6\u6765\u6311\u6218\u8fd9\u4e9b\u73b0\u8c61\u3002\u5176\u6b21\uff0c\u5ba3\u8a00\u662f\u5bf9\u5927\u5c60\u6740\u548c\u4e8c\u6218\u7684\u56de\u5e94\u2014\u2014\u8fd9\u4e9b\u4e8b\u4ef6\u8868\u660e\uff0c\u5f53\u653f\u5e9c\u4e0d\u53d7\u4efb\u4f55\u666e\u9002\u4eba\u6743\u6807\u51c6\u7ea6\u675f\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002\u7b2c\u4e09\uff0c\u5ba3\u8a00\u4e0d\u4ec5\u5173\u4e4e\u8fc7\u53bb\uff1a\u5b83\u4e3a\u5f53\u4eca\u653f\u5e9c\u8bbe\u7acb\u4e86\u6301\u7eed\u9002\u7528\u7684\u6807\u51c6\u3002\u5974\u96b6\u5236\u5ea6\u7684\u5386\u53f2\u6050\u786e\u8bc1\u660e\u4e86\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e9b\u4fdd\u62a4\uff0c\u4ee5\u53ca\u5b83\u4eec\u4e3a\u4ec0\u4e48\u5bf9\u5f53\u4e0b\u4ecd\u7136\u91cd\u8981\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Article 24 of the UN Declaration states that 'everyone has the right to rest and leisure and no one should work too many hours.' Which aspect of plantation life most directly violated this article?",
          qZh: "\u8054\u5408\u56fd\u5ba3\u8a00\u7b2c24\u6761\u8bf4\u660e\u201c\u4eba\u4eba\u6709\u6743\u4eab\u53d7\u4f11\u606f\u548c\u95f2\u6682\uff0c\u4efb\u4f55\u4eba\u90fd\u4e0d\u5e94\u8fc7\u5ea6\u52b3\u52a8\u201d\u3002\u79cd\u690d\u56ed\u751f\u6d3b\u7684\u54ea\u4e2a\u65b9\u9762\u6700\u76f4\u63a5\u4fb5\u72af\u4e86\u8fd9\u4e00\u6761\u6b3e\uff1f",
          opts: [
            { en: "Enslaved people were given new names and not allowed to keep their African identity", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u8d4b\u4e88\u65b0\u540d\u5b57\uff0c\u4e0d\u5141\u8bb8\u4fdd\u7559\u5176\u975e\u6d32\u8eab\u4efd" },
            { en: "Enslaved people were forced to work from sunrise to sunset with little or no rest days", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u8feb\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u51e0\u4e4e\u6ca1\u6709\u4f11\u606f\u65e5" },
            { en: "Enslaved people were not allowed to go to church or practice their religion", zh: "\u88ab\u5974\u5f79\u8005\u4e0d\u5141\u8bb8\u53bb\u6559\u5802\u6216\u5b9e\u8df5\u5176\u5b97\u6559\u4fe1\u4ef0" },
            { en: "Enslaved people were branded with estate marks to show who owned them", zh: "\u88ab\u5974\u5f79\u8005\u88ab\u70d9\u4e0a\u5e84\u56ed\u6807\u8bb0\uff0c\u8868\u660e\u4ed6\u4eec\u5c5e\u4e8e\u8c01" },
          ],
          correct: 1,
          explainCorrectEn: "The lesson materials state that most slaves had to work from sunrise to sunset, and some owners made their slaves work every day. Article 24 gives everyone the right to rest and reasonable working hours. Forcing people to work all day every day with no choice and no pay is a direct violation of this article.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u8bf4\u660e\uff0c\u5927\u591a\u6570\u5974\u96b6\u5fc5\u987b\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u6709\u4e9b\u4e3b\u4eba\u751a\u81f3\u8981\u6c42\u5974\u96b6\u6bcf\u5929\u5de5\u4f5c\u3002\u7b2c24\u6761\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u4f11\u606f\u548c\u5408\u7406\u5de5\u4f5c\u65f6\u95f4\u7684\u6743\u5229\u3002\u5f3a\u8feb\u4eba\u4eec\u65e5\u590d\u4e00\u65e5\u65e0\u4f11\u6b62\u3001\u65e0\u9009\u62e9\u3001\u65e0\u5de5\u8d44\u5730\u5de5\u4f5c\uff0c\u662f\u5bf9\u8fd9\u4e00\u6761\u6b3e\u7684\u76f4\u63a5\u4fb5\u72af\u3002",
          explainWrongEn: "The correct answer is B. While the other options also describe injustices that break different articles of the Declaration, Article 24 specifically protects the right to rest and limits on working hours. Being forced to work from sunrise to sunset every day directly violates this right.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u867d\u7136\u5176\u4ed6\u9009\u9879\u4e5f\u63cf\u8ff0\u4e86\u4fb5\u72af\u5ba3\u8a00\u5176\u4ed6\u6761\u6b3e\u7684\u4e0d\u516c\u6b63\u884c\u4e3a\uff0c\u4f46\u7b2c24\u6761\u7279\u522b\u4fdd\u62a4\u4f11\u606f\u6743\u548c\u5de5\u4f5c\u65f6\u9650\u3002\u88ab\u8feb\u6bcf\u5929\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\u662f\u5bf9\u8fd9\u4e00\u6743\u5229\u7684\u76f4\u63a5\u4fb5\u72af\u3002",
        },
      ],
    },

    /* ========== Lesson 2: Atlantic Slave Trade Review ========== */
    {
      num: 2,
      badge: "E",
      title: "The Atlantic Slave Trade — Review",
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
              en: "I can evaluate why it took so long to abolish the slave trade despite the evidence of its cruelty.",
              zh: "\u6211\u80fd\u8bc4\u4f30\u4e3a\u4ec0\u4e48\u5c3d\u7ba1\u6709\u5176\u6b8b\u9177\u7684\u8bc1\u636e\uff0c\u5974\u96b6\u8d38\u6613\u7684\u5e9f\u9664\u5374\u5982\u6b64\u8fdf\u7f13\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "African chiefs played a role in the slave trade by selling captured people to European traders. Does this mean that responsibility for the slave trade was shared equally between Africa and Europe? Explain your answer.",
              qZh: "\u975e\u6d32\u9996\u9886\u901a\u8fc7\u5c06\u88ab\u6355\u83b7\u7684\u4eba\u5356\u7ed9\u6b27\u6d32\u5546\u4eba\uff0c\u53c2\u4e0e\u4e86\u5974\u96b6\u8d38\u6613\u3002\u8fd9\u662f\u5426\u610f\u5473\u7740\u975e\u6d32\u4e0e\u6b27\u6d32\u5bf9\u5974\u96b6\u8d38\u6613\u6709\u540c\u7b49\u8d23\u4efb\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u56de\u7b54\u3002",
              aEn: "Responsibility was not shared equally. While some African chiefs did sell captured people to European traders, the demand came from Europe and the Americas — it was European merchants who created the market, supplied the ships, and profited most enormously. The scale was also driven by European colonial plantations that needed labour. Additionally, the legal, financial, and military power that kept the trade going was European. African participation was real but secondary to the system as a whole. Historians also note that African rulers often did not understand the full scale and permanence of what was being done to the people they sold.",
              aZh: "\u8d23\u4efb\u5e76\u4e0d\u5e73\u7b49\u5206\u62c5\u3002\u867d\u7136\u4e00\u4e9b\u975e\u6d32\u9996\u9886\u786e\u5b9e\u5c06\u88ab\u6355\u83b7\u7684\u4eba\u5356\u7ed9\u4e86\u6b27\u6d32\u5546\u4eba\uff0c\u4f46\u9700\u6c42\u6765\u81ea\u6b27\u6d32\u548c\u7f8e\u6d32\u2014\u2014\u662f\u6b27\u6d32\u5546\u4eba\u521b\u9020\u4e86\u5e02\u573a\u3001\u63d0\u4f9b\u4e86\u8239\u53ea\uff0c\u5e76\u4e14\u83b7\u5f97\u4e86\u6700\u5de8\u5927\u7684\u5229\u76ca\u3002\u5176\u89c4\u6a21\u4e5f\u662f\u7531\u6b27\u6d32\u6b96\u6c11\u79cd\u690d\u56ed\u5bf9\u52b3\u52a8\u529b\u7684\u9700\u6c42\u63a8\u52a8\u7684\u3002\u6b64\u5916\uff0c\u7ef4\u6301\u8fd9\u4e00\u8d38\u6613\u7684\u6cd5\u5f8b\u3001\u8d22\u52a1\u548c\u519b\u4e8b\u529b\u91cf\u90fd\u662f\u6b27\u6d32\u7684\u3002\u975e\u6d32\u4eba\u7684\u53c2\u4e0e\u662f\u771f\u5b9e\u7684\uff0c\u4f46\u76f8\u5bf9\u4e8e\u6574\u4e2a\u4f53\u7cfb\u800c\u8a00\u5c5e\u4e8e\u6b21\u8981\u5730\u4f4d\u3002\u5386\u53f2\u5b66\u5bb6\u4e5f\u6307\u51fa\uff0c\u975e\u6d32\u7edf\u6cbb\u8005\u5f80\u5f80\u5e76\u4e0d\u660e\u767d\u5176\u51fa\u5356\u4e4b\u4eba\u6240\u906d\u517d\u7684\u5b8c\u6574\u89c4\u6a21\u548c\u6c38\u4e45\u6027\u3002",
            },
            {
              qEn: "The Zong case of 1781 shocked many people in Britain. Why do you think it helped build support for abolishing the slave trade, even though it did not immediately change the law?",
              qZh: "1781\u5e74\u7684\u5c0a\u683c\u53f7\u4e8b\u4ef6\u4f7f\u82f1\u56fd\u8bb8\u591a\u4eba\u611f\u5230\u9707\u60ca\u3002\u4f60\u8ba4\u4e3a\u5b83\u4e3a\u4ec0\u4e48\u6709\u52a9\u4e8e\u5efa\u7acb\u5e9f\u9664\u5974\u96b6\u8d38\u6613\u7684\u652f\u6301\uff0c\u5373\u4f7f\u5b83\u5e76\u6ca1\u6709\u7acb\u5373\u6539\u53d8\u6cd5\u5f8b\uff1f",
              aEn: "The Zong case made the true nature of the slave trade impossible to ignore. The fact that 133 enslaved people were thrown overboard and the court case was about insurance — not murder — showed ordinary British people that the legal system treated enslaved Africans as cargo, not human beings. This was morally shocking in a way that statistics alone could not achieve. It gave abolitionists a concrete, specific story they could share publicly to show what the trade really meant. Public opinion is often changed by individual cases rather than large numbers, and the Zong case became one of the most powerful pieces of evidence that abolitionist campaigners like Olaudah Equiano and others used in their arguments.",
              aZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\u4f7f\u4eba\u4eec\u65e0\u6cd5\u5ffd\u89c6\u5974\u96b6\u8d38\u6613\u7684\u771f\u5b9e\u672c\u8d28\u3002133\u540d\u88ab\u5974\u5f79\u8005\u88ab\u6295\u5165\u6d77\u4e2d\uff0c\u800c\u5ba1\u5224\u7684\u662f\u4fdd\u9669\u8d54\u507f\u95ee\u9898\u800c\u975e\u8c0b\u6740\u2014\u2014\u8fd9\u8ba9\u666e\u901a\u82f1\u56fd\u4eba\u770b\u5230\uff0c\u6cd5\u5f8b\u4f53\u7cfb\u5c06\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u89c6\u4e3a\u8d27\u7269\u800c\u975e\u4eba\u7c7b\u3002\u8fd9\u5728\u9053\u5fb7\u4e0a\u4ee4\u4eba\u9707\u60ca\uff0c\u662f\u5355\u7eaf\u7684\u6570\u5b57\u65e0\u6cd5\u505a\u5230\u7684\u3002\u5b83\u7ed9\u4e86\u5e9f\u5974\u8fd0\u52a8\u8005\u4e00\u4e2a\u5177\u4f53\u7684\u3001\u53ef\u516c\u5f00\u5206\u4eab\u7684\u6545\u4e8b\uff0c\u5c55\u793a\u8fd9\u4e00\u8d38\u6613\u7684\u771f\u5b9e\u610f\u4e49\u3002\u516c\u4f17\u8206\u8bba\u5f80\u5f80\u662f\u88ab\u4e2a\u522b\u6848\u4f8b\u800c\u975e\u5927\u91cf\u6570\u5b57\u6539\u53d8\u7684\uff0c\u5c0a\u683c\u53f7\u4e8b\u4ef6\u6210\u4e3a\u5e9f\u5974\u8fd0\u52a8\u6d3b\u52a8\u5bb6\u4f7f\u7528\u7684\u6700\u6709\u529b\u7684\u8bc1\u636e\u4e4b\u4e00\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "The slave trade was declared illegal in the British Empire in 1807, but slavery itself was not abolished until 1833. What does this 26-year gap most likely tell us?",
          qZh: "1807\u5e74\u5974\u96b6\u8d38\u6613\u5728\u82f1\u5e1d\u56fd\u88ab\u5ba3\u5e03\u4e3a\u975e\u6cd5\uff0c\u4f46\u5974\u96b6\u5236\u5ea6\u672c\u8eab\u76f4\u52301833\u5e74\u624d\u88ab\u5e9f\u9664\u3002\u8fd926\u5e74\u7684\u5dee\u8ddd\u6700\u53ef\u80fd\u8bf4\u660e\u4e86\u4ec0\u4e48\uff1f",
          opts: [
            { en: "Parliament did not know that enslaved people were still suffering after 1807", zh: "\u8bae\u4f1a\u4e0d\u77e5\u9053\u5974\u96b6\u8005\u52291807\u5e74\u540e\u4ecd\u5728\u906d\u53d7\u82e6\u96be" },
            { en: "Powerful economic interests meant that ending the trade was easier than freeing the enslaved", zh: "\u5f3a\u5927\u7684\u7ecf\u6d4e\u5229\u76ca\u610f\u5473\u7740\u7ec8\u6b62\u8d38\u6613\u6bd4\u89e3\u653e\u88ab\u5974\u5f79\u8005\u66f4\u5bb9\u6613" },
            { en: "Abolitionists stopped campaigning after 1807 and did not push for full emancipation", zh: "\u5e9f\u5974\u8fd0\u52a8\u8005\u52291807\u5e74\u540e\u505c\u6b62\u64cd\u64cd\uff0c\u6ca1\u6709\u7ee7\u7eed\u4e89\u53d6\u5b8c\u5168\u89e3\u653e" },
            { en: "Enslaved people in the Americas were not affected by British law and could not be freed", zh: "\u7f8e\u6d32\u7684\u88ab\u5974\u5f79\u8005\u4e0d\u53d7\u82f1\u56fd\u6cd5\u5f8b\u7ea6\u675f\uff0c\u65e0\u6cd5\u88ab\u89e3\u653e" },
          ],
          correct: 1,
          explainCorrectEn: "The 26-year gap shows that ending the trade (stopping new enslaved people being transported) was politically easier than emancipation (freeing those already enslaved on plantations). Plantation owners had enormous economic and political power and resisted emancipation because it threatened their profits. This shows that moral arguments alone were not enough — economic interests had to be overcome as well.",
          explainCorrectZh: "26\u5e74\u7684\u5dee\u8ddd\u8868\u660e\uff0c\u7ec8\u6b62\u8d38\u6613\uff08\u505c\u6b62\u8fd0\u8f93\u65b0\u7684\u88ab\u5974\u5f79\u8005\uff09\u5728\u653f\u6cbb\u4e0a\u6bd4\u89e3\u653e\uff08\u91ca\u653e\u5df2\u5728\u79cd\u690d\u56ed\u4e2d\u88ab\u5974\u5f79\u7684\u4eba\uff09\u66f4\u5bb9\u6613\u3002\u79cd\u690d\u56ed\u4e3b\u62e5\u6709\u5de8\u5927\u7684\u7ecf\u6d4e\u548c\u653f\u6cbb\u529b\u91cf\uff0c\u4ed6\u4eec\u6297\u62d2\u89e3\u653e\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u5a01\u80c1\u5230\u4ed6\u4eec\u7684\u5229\u6da6\u3002\u8fd9\u8bf4\u660e\u5355\u9760\u9053\u5fb7\u8bba\u8bc1\u662f\u4e0d\u591f\u7684\u2014\u2014\u8fd8\u5fc5\u987b\u514b\u670d\u7ecf\u6d4e\u5229\u76ca\u3002",
          explainWrongEn: "The correct answer is B. Parliament knew about the continued suffering — abolitionists like William Wilberforce continued to campaign. The gap existed because plantation owners had strong economic and political influence and resisted full emancipation. Change came not because the problem was unknown, but because economic power had to be overcome.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u8bae\u4f1a\u77e5\u9053\u82e6\u96be\u4仍\u5728\u7ee7\u7eed\u2014\u2014\u5e9f\u5974\u8fd0\u52a8\u8005\u4e00\u76f4\u5728\u64cd\u64cd\u3002\u8fd9\u4e2a\u5dee\u8ddd\u7684\u5b58\u5728\uff0c\u662f\u56e0\u4e3a\u79cd\u690d\u56ed\u4e3b\u6709\u5f3a\u5927\u7684\u7ecf\u6d4e\u548c\u653f\u6cbb\u5f71\u54cd\u529b\uff0c\u5e76\u6297\u62d2\u5b8c\u5168\u89e3\u653e\u3002\u53d8\u9769\u7684\u5230\u6765\u4e0d\u662f\u56e0\u4e3a\u95ee\u9898\u4e0d\u4e3a\u4eba\u77e5\uff0c\u800c\u662f\u56e0\u4e3a\u7ecf\u6d4e\u529b\u91cf\u5fc5\u987b\u88ab\u514b\u670d\u3002",
        },
      ],
    },

    /* ========== Lesson 3: British Empire Review ========== */
    {
      num: 3,
      badge: "E",
      title: "The British Empire — Review",
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
              en: "I can explain why historians still disagree about whether the British Empire was a good or bad thing.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5386\u53f2\u5b66\u5bb6\u81f3\u4eca\u4ecd\u5bf9\u82f1\u5e1d\u56fd\u662f\u597d\u662f\u574f\u6709\u4e89\u8bae\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Some people argue that the British Empire brought benefits such as railways, roads, and education to the countries it controlled. Others argue that these so-called benefits were used to serve British interests, not local people. Which view do you find more convincing, and why?",
              qZh: "\u4e00\u4e9b\u4eba\u8ba4\u4e3a\u82f1\u5e1d\u56fd\u7ed9\u5176\u63a7\u5236\u7684\u56fd\u5bb6\u5e26\u6765\u4e86\u9993\u8def\u3001\u516c\u8def\u548c\u6559\u80b2\u7b49\u76ca\u5904\u3002\u53e6\u4e00\u4e9b\u4eba\u5219\u8ba4\u4e3a\u8fd9\u4e9b\u6240\u8c13\u76ca\u5904\u662f\u4e3a\u82f1\u56fd\u5229\u76ca\u670d\u52a1\u7684\uff0c\u800c\u975e\u9762\u5411\u5f53\u5730\u4eba\u6c11\u3002\u4f60\u8ba4\u4e3a\u54ea\u79cd\u89c2\u70b9\u66f4\u5177\u8bf4\u670d\u529b\uff0c\u4e3a\u4ec0\u4e48\uff1f",
              aEn: "Both views have merit and the honest answer is that both were true to some extent. Railways were built, but they were primarily built to move goods and troops — to extract resources and maintain control. Education was introduced, but it often taught people to accept British authority rather than question it. The 'benefits' argument tends to look at outcomes in isolation; the 'exploitation' argument looks at motive and effect on local people. Most historians today agree that even where genuine improvements occurred, they were a by-product of exploitation rather than the main aim. A fully rounded answer would acknowledge both sides while explaining why motive matters as much as outcome.",
              aZh: "\u4e24\u79cd\u89c2\u70b9\u90fd\u6709\u5176\u4ef7\u503c\uff0c\u8bda\u5b9e\u7684\u56de\u7b54\u662f\u4e24\u8005\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u90fd\u662f\u771f\u5b9e\u7684\u3002\u9493\u8def\u786e\u5b9e\u5efa\u9020\u4e86\uff0c\u4f46\u4e3b\u8981\u662f\u4e3a\u4e86\u8fd0\u8f93\u8d27\u7269\u548c\u519b\u961f\u2014\u2014\u5373\u63d0\u53d6\u8d44\u6e90\u548c\u7ef4\u62a4\u63a7\u5236\u3002\u6559\u80b2\u88ab\u5f15\u5165\uff0c\u4f46\u5b83\u5f80\u5f80\u662f\u6559\u4eba\u4eec\u63a5\u53d7\u82f1\u56fd\u6743\u5a01\u800c\u975e\u8d28\u7591\u5b83\u3002\u201c\u76ca\u5904\u201d\u8bba\u70b9\u5f80\u5f80\u5b64\u7acb\u5730\u770b\u5f85\u7ed3\u679c\uff1b\u201c\u5265\u524a\u201d\u8bba\u70b9\u5219\u5173\u6ce8\u52a8\u673a\u548c\u5bf9\u5f53\u5730\u4eba\u7684\u5f71\u54cd\u3002\u5927\u591a\u6570\u5f53\u4ee3\u5386\u53f2\u5b66\u5bb6\u8ba4\u4e3a\uff0c\u5373\u4f7f\u5728\u771f\u6b63\u6539\u5584\u53d1\u751f\u7684\u5730\u65b9\uff0c\u90a3\u4e5f\u662f\u5265\u524a\u7684\u526f\u4ea7\u54c1\u800c\u975e\u4e3b\u8981\u76ee\u6807\u3002\u4e00\u4e2a\u5168\u9762\u5e73\u8861\u7684\u56de\u7b54\u5e94\u8ba4\u53ef\u4e24\u79cd\u89c2\u70b9\uff0c\u540c\u65f6\u89e3\u91ca\u4e3a\u4ec0\u4e48\u52a8\u673a\u548c\u7ed3\u679c\u540c\u7b49\u91cd\u8981\u3002",
            },
            {
              qEn: "Why do you think people in Britain today still disagree about whether the British Empire was a good or a bad thing? What makes this question so difficult to answer?",
              qZh: "\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u5f53\u4eca\u82f1\u56fd\u4eba\u5bf9\u82f1\u5e1d\u56fd\u662f\u597d\u662f\u574f\u8fd9\u4e00\u95ee\u9898\u4ecd\u5b58\u5206\u6b67\uff1f\u662f\u4ec0\u4e48\u4f7f\u8fd9\u4e2a\u95ee\u9898\u5982\u6b64\u96be\u4ee5\u56de\u7b54\uff1f",
              aEn: "The question is difficult because it depends on whose perspective you take. For people in Britain, the empire is associated with national power, pride, and historical identity. For people in countries that were colonised, it is associated with loss of freedom, exploitation, and injustice. The difficulty is also that the empire did produce some genuine changes, but many of those changes came at a terrible human cost. Historians also disagree because they use different criteria — some weigh economic outcomes, others weigh human rights. The question of whether the empire was 'good' or 'bad' may also be too simple: it was an enormously complex system that produced both harm and change, and judging it requires deciding which outcomes and whose experiences matter most.",
              aZh: "\u8fd9\u4e2a\u95ee\u9898\u5f88\u96be\u56de\u7b54\uff0c\u56e0\u4e3a\u5b83\u53d6\u51b3\u4e8e\u4f60\u4ee5\u8c01\u7684\u89c6\u89d2\u6765\u770b\u3002\u5bf9\u82f1\u56fd\u4eba\u6765\u8bf4\uff0c\u5e1d\u56fd\u4e0e\u6c11\u65cf\u529b\u91cf\u3001\u81ea\u8c6a\u548c\u5386\u53f2\u8eab\u4efd\u76f8\u5173\u8054\u3002\u5bf9\u88ab\u6b96\u6c11\u56fd\u5bb6\u7684\u4eba\u6c11\u6765\u8bf4\uff0c\u5b83\u610f\u5473\u7740\u5931\u53bb\u81ea\u7531\u3001\u88ab\u5265\u524a\u548c\u4e0d\u516c\u6b63\u3002\u8fd9\u4e2a\u95ee\u9898\u8fd8\u5f88\u96be\u56de\u7b54\uff0c\u56e0\u4e3a\u5e1d\u56fd\u786e\u5b9e\u5e26\u6765\u4e86\u4e00\u4e9b\u771f\u5b9e\u7684\u53d8\u5316\uff0c\u4f46\u5f88\u591a\u53d8\u5316\u4ef3\u4ee5\u6050\u6016\u7684\u4eba\u7c7b\u4ee3\u4ef7\u3002\u5386\u53f2\u5b66\u5bb6\u4e5f\u5b58\u5206\u6b67\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4f7f\u7528\u4e0d\u540c\u6807\u51c6\u2014\u2014\u6709\u4eba\u8861\u91cf\u7ecf\u6d4e\u7ed3\u679c\uff0c\u5176\u4ed6\u4eba\u8861\u91cf\u4eba\u6743\u3002\u5e1d\u56fd\u662f\u5426\u201c\u597d\u201d\u6216\u201c\u574f\u201d\u8fd9\u4e00\u95ee\u9898\u4e5f\u8bb8\u8fc7\u4e8e\u7b80\u5355\uff1a\u5b83\u662f\u4e00\u4e2a\u6781\u5176\u590d\u6742\u7684\u4f53\u7cfb\uff0c\u65e2\u5e26\u6765\u4e86\u5371\u5bb3\u4e5f\u63a8\u52a8\u4e86\u53d8\u9769\uff0c\u5bf9\u5b83\u7684\u5224\u65ad\u9700\u8981\u51b3\u5b9a\u54ea\u4e9b\u7ed3\u679c\u548c\u8c01\u7684\u7ecf\u5386\u6700\u4e3a\u91cd\u8981\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes why historians still argue about the British Empire today?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5386\u53f2\u5b66\u5bb6\u81f3\u4eca\u4ecd\u5728\u4e89\u8bba\u82f1\u5e1d\u56fd\uff1f",
          opts: [
            { en: "Historians do not have enough evidence to reach a conclusion about the Empire", zh: "\u5386\u53f2\u5b66\u5bb6\u6ca1\u6709\u8db3\u591f\u7684\u8bc1\u636e\u5c31\u5e1d\u56fd\u5f97\u51fa\u7ed3\u8bba" },
            { en: "The Empire affected different people in different ways, so different perspectives lead to different conclusions", zh: "\u5e1d\u56fd\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5f71\u54cd\u4e86\u4e0d\u540c\u7684\u4eba\uff0c\u56e0\u6b64\u4e0d\u540c\u89c6\u89d2\u5bfc\u81f4\u4e0d\u540c\u7ed3\u8bba" },
            { en: "All historians agree the Empire was harmful but disagree about how harmful it was", zh: "\u6240\u6709\u5386\u53f2\u5b66\u5bb6\u90fd\u540c\u610f\u5e1d\u56fd\u662f\u6709\u5bb3\u7684\uff0c\u4f46\u5bf9\u5371\u5bb3\u7a0b\u5ea6\u6709\u5206\u6b67" },
            { en: "Politicians in Britain keep changing what historians are allowed to say about the Empire", zh: "\u82f1\u56fd\u653f\u5ba2\u4e0d\u65ad\u6539\u53d8\u5386\u53f2\u5b66\u5bb6\u5bf9\u5e1d\u56fd\u7684\u5141\u8bb8\u8868\u8fbe" },
          ],
          correct: 1,
          explainCorrectEn: "Historians argue about the Empire because it had very different effects on different people. For colonisers, it brought wealth and power. For colonised peoples, it often meant loss of land, freedom, and self-determination. Because historians look at different kinds of evidence and centre different people's experiences, they reach different conclusions. This is not a sign that history is uncertain — it is a sign that complex events require complex judgements.",
          explainCorrectZh: "\u5386\u53f2\u5b66\u5bb6\u5bf9\u5e1d\u56fd\u5b58\u5206\u6b67\uff0c\u662f\u56e0\u4e3a\u5b83\u5bf9\u4e0d\u540c\u7684\u4eba\u4ea7\u751f\u4e86\u975e\u5e38\u4e0d\u540c\u7684\u5f71\u54cd\u3002\u5bf9\u6b96\u6c11\u8005\u6765\u8bf4\uff0c\u5b83\u5e26\u6765\u4e86\u8d22\u5bcc\u548c\u6743\u529b\u3002\u5bf9\u88ab\u6b96\u6c11\u8005\u6765\u8bf4\uff0c\u5b83\u5f80\u5f80\u610f\u5473\u7740\u5931\u53bb\u571f\u5730\u3001\u81ea\u7531\u548c\u81ea\u51b3\u3002\u56e0\u4e3a\u5386\u53f2\u5b66\u5bb6\u5ba1\u89c6\u4e0d\u540c\u7c7b\u578b\u7684\u8bc1\u636e\u5e76\u4ee5\u4e0d\u540c\u4eba\u7684\u7ecf\u5386\u4e3a\u4e2d\u5fc3\uff0c\u4ed6\u4eec\u5f97\u51fa\u4e86\u4e0d\u540c\u7684\u7ed3\u8bba\u3002\u8fd9\u5e76\u4e0d\u8868\u660e\u5386\u53f2\u4e0d\u786e\u5b9a\u2014\u2014\u8fd9\u8868\u660e\u590d\u6742\u7684\u4e8b\u4ef6\u9700\u8981\u590d\u6742\u7684\u5224\u65ad\u3002",
          explainWrongEn: "The correct answer is B. There is actually plenty of historical evidence. The disagreement arises because different historians prioritise different perspectives and different types of impact. It is not about lack of evidence or political restrictions — it is about the genuine complexity of judging an event that affected millions of people in very different ways.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5b9e\u9645\u4e0a\u6709\u5927\u91cf\u5386\u53f2\u8bc1\u636e\u3002\u5206\u6b67\u7684\u4ea7\u751f\u662f\u56e0\u4e3a\u4e0d\u540c\u5386\u53f2\u5b66\u5bb6\u4f18\u5148\u8003\u8651\u4e0d\u540c\u89c6\u89d2\u548c\u4e0d\u540c\u7c7b\u578b\u7684\u5f71\u54cd\u3002\u8fd9\u4e0d\u662f\u8bc1\u636e\u4e0d\u8db3\u6216\u653f\u6cbb\u9650\u5236\u7684\u95ee\u9898\u2014\u2014\u800c\u662f\u5224\u65ad\u4e00\u4e2a\u4ee5\u975e\u5e38\u4e0d\u540c\u7684\u65b9\u5f0f\u5f71\u54cd\u4e86\u6570\u767e\u4e07\u4eba\u7684\u4e8b\u4ef6\u7684\u771f\u6b63\u590d\u6742\u6027\u3002",
        },
      ],
    },

    /* ========== Lesson 4: US Civil Rights Movement Review ========== */
    {
      num: 4,
      badge: "E",
      title: "The US Civil Rights Movement — Review",
      titleZh: "\u7f8e\u56fd\u6c11\u6743\u8fd0\u52a8\u2014\u2014\u5355\u5143\u56de\u987e",
      subtitle: "Test your ability to explain and evaluate the significance of civil rights events.",
      subtitleZh: "\u6d4b\u9a8c\u4f60\u89e3\u91ca\u548c\u8bc4\u4f30\u6c11\u6743\u4e8b\u4ef6\u91cd\u8981\u6027\u7684\u80fd\u529b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain the meaning of Jim Crow, Plessy v. Ferguson, and the NAACP.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6728\u9e21\u6cd5\u3001\u666e\u83b1\u8bc9\u8d39\u683c\u68ee\u6848\u548c\u5168\u56fd\u6709\u8272\u4eba\u5730\u4f4d\u5촉\u8fdb\u534f\u4f1a\uff08NAACP\uff09\u7684\u542b\u4e49\u3002",
            },
            {
              en: "I can rank at least three civil rights events by significance and give reasons for my ranking.",
              zh: "\u6211\u80fd\u6309\u91cd\u8981\u6027\u5bf9\u81f3\u5c11\u4e09\u4e2a\u6c11\u6743\u4e8b\u4ef6\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u8bf4\u660e\u6392\u5e8f\u7406\u7531\u3002",
            },
            {
              en: "I can explain what made the March on Washington significant compared to earlier civil rights events.",
              zh: "\u6211\u80fd\u89e3\u91ca\u534e\u76db\u987f\u6e38\u884c\u4e0e\u5148\u524d\u6c11\u6743\u4e8b\u4ef6\u76f8\u6bd4\u6709\u4f55\u91cd\u8981\u6027\u3002",
            },
          ],
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Montgomery Bus Boycott lasted 381 days and involved 40,000 African Americans walking or carpooling instead of taking buses. Why was economic pressure such an effective tactic for the civil rights movement?",
              qZh: "\u8499\u54e5\u9a6c\u5229\u516c\u8f66\u6297\u8bae\u6301\u7eed\u4e86381\u5929\uff0c\u6d89\u53ca4\u4e074\u4e07\u540d\u975e\u88d4\u7f8e\u56fd\u4eba\u6b65\u884c\u6216\u62fc\u8f66\u4ee3\u66ff\u4e58\u516c\u8f66\u3002\u4e3a\u4ec0\u4e48\u7ecf\u6d4e\u538b\u529b\u662f\u6c11\u6743\u8fd0\u52a8\u5982\u6b64\u6709\u6548\u7684\u6218\u672f\uff1f",
              aEn: "Economic pressure worked because it hit segregationists where it hurt most — their profits. Montgomery's bus company depended heavily on Black passengers for its revenue. When 40,000 people stopped using the buses for over a year, the company faced serious financial losses. This showed that African Americans had collective economic power that they could use to force change, even without the legal right to vote or protest freely. It also demonstrated that nonviolent protest could be more powerful than violence, because it was harder for authorities to justify cracking down on people who were simply refusing to spend their money. This tactic influenced later movements worldwide.",
              aZh: "\u7ecf\u6d4e\u538b\u529b\u4e4b\u6240\u4ee5\u5956\u6548\uff0c\u662f\u56e0\u4e3a\u5b83\u6253\u51fb\u4e86\u79cd\u65cf\u9694\u79bb\u8005\u6700\u5c0f\u5fc3\u7684\u5730\u65b9\u2014\u2014\u5229\u6da6\u3002\u8499\u54e5\u9a6c\u5229\u516c\u8f66\u516c\u53f8\u5f88\u5927\u7a0b\u5ea6\u4e0a\u4f9d\u8d56\u9ed1\u4eba\u4e58\u5ba2\u7684\u6536\u5165\u3002\u5f53\u40000\u4eba\u505c\u6b62\u4e58\u8f66\u8d85\u8fc7\u4e00\u5e74\uff0c\u516c\u53f8\u9762\u4e34\u4e25\u91cd\u7684\u7ecf\u6d4e\u635f\u5931\u3002\u8fd9\u8868\u660e\uff0c\u5373\u4f7f\u6ca1\u6709\u6295\u7968\u6743\u6216\u81ea\u7531\u6297\u8bae\u7684\u6743\u5229\uff0c\u975e\u88d4\u7f8e\u56fd\u4eba\u4e5f\u62e5\u6709\u96c6\u4f53\u7ecf\u6d4e\u5b9e\u529b\u53ef\u4ee5\u8feb\u4f7f\u53d8\u9769\u3002\u5b83\u8fd8\u8bc1\u660e\uff0c\u975e\u66b4\u529b\u6297\u8bae\u80fd\u6bd4\u66b4\u529b\u66f4\u52a0\u6709\u529b\uff0c\u56e0\u4e3a\u5f53\u5c40\u5f88\u96be\u4e3a\u9547\u538b\u90a3\u4e9b\u53ea\u662f\u62d2\u7edd\u6d88\u8d39\u7684\u4eba\u5bfb\u627e\u7406\u7531\u3002\u8fd9\u4e00\u6218\u672f\u5f71\u54cd\u4e86\u5168\u7403\u540e\u6765\u7684\u8fd0\u52a8\u3002",
            },
            {
              qEn: "The Civil Rights Act of 1964 made racial segregation illegal in the United States. If slavery had already been abolished in 1865 and the Supreme Court had already ruled on racial equality in Brown v. Board in 1954, why was another major law still needed in 1964?",
              qZh: "1964\u5e74\u7684\u300a\u6c11\u6743\u6cd5\u6848\u300b\u4f7f\u79cd\u65cf\u9694\u79bb\u5728\u7f8e\u56fd\u8fdd\u6cd5\u3002\u5982\u679c\u5974\u96b6\u5236\u5ea6\u5df2\u4e8e1865\u5e74\u88ab\u5e9f\u9664\uff0c\u6700\u9ad8\u6cd5\u9662\u4e5f\u5df2\u4e8e1954\u5e741954\u5e74\u5728\u5e03\u6717\u8bc9\u6559\u80b2\u59d4\u5458\u4f1a\u6848\u4e2d\u88c1\u51b3\u4e86\u79cd\u65cf\u5e73\u7b49\uff0c\u4e3a\u4ec0\u4e48\u52301964\u5e74\u8fd8\u9700\u8981\u53e6\u4e00\u9879\u91cd\u8981\u6cd5\u5f8b\uff1f",
              aEn: "This question reveals one of the most important lessons in history: ending a law does not automatically change social reality. Slavery was abolished in 1865, but Jim Crow laws immediately began replacing it with legal segregation. Brown v. Board struck down school segregation in 1954, but Southern states simply refused to comply — schools remained segregated, enforced by state governments and white supremacist groups. The Civil Rights Act of 1964 was needed because a ruling is only as powerful as the willingness to enforce it. The Act created federal enforcement mechanisms that made it illegal to discriminate in all public spaces, not just schools, and gave the federal government tools to override state resistance. This shows that legal change requires both the right law and the political will to enforce it.",
              aZh: "\u8fd9\u4e2a\u95ee\u9898\u63ed\u793a\u4e86\u5386\u53f2\u4e0a\u6700\u91cd\u8981\u7684\u6559\u8bad\u4e4b\u4e00\uff1a\u5e9f\u9664\u4e00\u9879\u6cd5\u5f8b\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6539\u53d8\u793e\u4f1a\u73b0\u5b9e\u3002\u5974\u96b6\u5236\u5ea6\u4e8e1865\u5e74\u88ab\u5e9f\u9664\uff0c\u4f46\u6728\u9e21\u6cd5\u9a6c\u4e0a\u5f00\u59cb\u4ee5\u5408\u6cd5\u9694\u79bb\u53d6\u800c\u4ee3\u4e4b\u3002\u5e03\u6717\u6848\u4e8e1954\u5e74\u5e9f\u9664\u4e86\u5b66\u6821\u9694\u79bb\uff0c\u4f46\u5357\u65b9\u5404\u5dde\u5c31\u662f\u62d2\u7edd\u6267\u884c\u2014\u2014\u5b66\u6821\u5728\u5dde\u653f\u5e9c\u548c\u767d\u4eba\u81f3\u4e0a\u4e3b\u4e49\u7ec4\u7ec7\u7684\u6267\u884c\u4e0b\u4ecd\u7136\u79cd\u65cf\u9694\u79bb\u3002\u300a1964\u5e74\u6c11\u6743\u6cd5\u6848\u300b\u7684\u9700\u8981\u6027\u5728\u4e8e\uff0c\u88c1\u51b3\u53ea\u6709\u5728\u6709\u610f\u613f\u6267\u884c\u65f6\u624d\u6709\u6548\u529b\u3002\u8be5\u6cd5\u6848\u5efa\u7acb\u4e86\u8054\u90a6\u6267\u884c\u673a\u5236\uff0c\u4f7f\u5728\u6240\u6709\u516c\u5171\u573a\u6240\u800c\u975e\u4ec5\u5b66\u6821\u8fdb\u884c\u6b67\u89c6\u6210\u4e3a\u975e\u6cd5\uff0c\u5e76\u8d4b\u4e88\u8054\u90a6\u653f\u5e9c\u5de5\u5177\u6765\u5c4a\u9986\u5dde\u7ea7\u9700\u62b5\u5236\u3002\u8fd9\u8868\u660e\uff0c\u6cd5\u5f8b\u53d8\u9769\u9700\u8981\u6b63\u786e\u7684\u6cd5\u5f8b\u548c\u6267\u884c\u5b83\u7684\u653f\u6cbb\u610f\u613f\u4e24\u8005\u517c\u5907\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best explains why the March on Washington (1963) is considered the most significant civil rights event?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u534e\u76db\u987f\u6e38\u884c\uff081963\u5e74\uff09\u88ab\u8ba4\u4e3a\u662f\u6700\u91cd\u8981\u7684\u6c11\u6743\u4e8b\u4ef6\uff1f",
          opts: [
            { en: "It was the first time African Americans had ever protested against racial segregation", zh: "\u8fd9\u662f\u975e\u88d4\u7f8e\u56fd\u4eba\u9996\u6b21\u5c31\u79cd\u65cf\u9694\u79bb\u8fdb\u884c\u6297\u8bae" },
            { en: "It drew 250,000 people, gained massive media attention, and helped pressure Congress to pass the Civil Rights Act of 1964", zh: "\u5438\u5f15\u4e8625\u4e07\u4eba\u53c2\u52a0\uff0c\u5f15\u53d1\u5a92\u4f53\u5e7f\u6cdb\u5173\u6ce8\uff0c\u5e76\u6709\u52a9\u4e8e\u8fc7\u5e38\u6021\u8bae\u4f1a\u901a\u8fc71964\u5e74\u6c11\u6743\u6cd5\u6848" },
            { en: "It was the only civil rights event that involved violence, which forced the government to act", zh: "\u8fd9\u662f\u5531\u4e00\u4e00\u6d89\u53ca\u66b4\u529b\u7684\u6c11\u6743\u4e8b\u4ef6\uff0c\u8feb\u4f7f\u653f\u5e9c\u91c7\u53d6\u884c\u52a8" },
            { en: "Martin Luther King Jr. gave his first ever public speech at the March on Washington", zh: "\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u5c0f\u5428\u5728\u534e\u76db\u987f\u6e38\u884c\u4e2d\u53d1\u8868\u4e86\u4ed6\u7684\u9996\u6b21\u516c\u5f00\u6f14\u8bb2" },
          ],
          correct: 1,
          explainCorrectEn: "The lesson materials and source documents state that the March on Washington drew an estimated 250,000 people — roughly 75% Black and 25% white — making it the largest civil rights demonstration in US history at that time. It was televised nationally and King's 'I Have a Dream' speech became iconic. Crucially, it helped directly pressure President Johnson and Congress to pass the Civil Rights Act of 1964, which legally dismantled segregation. Its combination of scale, media attention, multiracial coalition, and legislative impact made it the most significant event.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u548c\u539f\u59cb\u6587\u4ef6\u8bf4\u660e\uff0c\u534e\u76db\u987f\u6e38\u884c\u5438\u5f15\u4e86\u4f30\u8ba125\u4e07\u4eba\u53c2\u52a0\u2014\u2014\u7ea675%\u4e3a\u9ed1\u4eba\uff0c25%\u4e3a\u767d\u4eba\u2014\u2014\u6210\u4e3a\u5f53\u65f6\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u5927\u7684\u6c11\u6743\u793a\u5a01\u3002\u5b83\u5728\u5168\u56fd\u7535\u89c6\u64ad\u51fa\uff0c\u91d1\u5c0f\u5428\u7684\u201c\u6211\u6709\u4e2a\u68a6\u60f3\u201d\u6f14\u8bb2\u6210\u4e3a\u6807\u5fd7\u6027\u7b26\u53f7\u3002\u81f3\u5173\u91cd\u8981\u7684\u662f\uff0c\u5b83\u6709\u52a9\u4e8e\u76f4\u63a5\u65bd\u538b\u4e8e\u7ea6\u7ff0\u900a\u603b\u7edf\u548c\u56fd\u4f1a\uff0c\u4fc3\u4f7f\u901a\u8fc7\u4e861964\u5e74\u6c11\u6743\u6cd5\u6848\uff0c\u4ece\u6cd5\u5f8b\u4e0a\u62c6\u9664\u4e86\u9694\u79bb\u5236\u5ea6\u3002\u5176\u89c4\u6a21\u3001\u5a92\u4f53\u5173\u6ce8\u5ea6\u3001\u591a\u79cd\u65cf\u8054\u76df\u548c\u7acb\u6cd5\u5f71\u54cd\u7684\u7ed3\u5408\u4f7f\u5176\u6210\u4e3a\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\u3002",
          explainWrongEn: "The correct answer is B. The March was not the first protest — African Americans had been resisting segregation for decades. It was not violent — it was a peaceful march. And King had given many public speeches before 1963. What made it uniquely significant was its enormous scale, national television coverage, multiracial participation, and direct connection to the Civil Rights Act of 1964.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u534a\u76db\u987f\u6e38\u884c\u5e76\u975e\u7b2c\u4e00\u6b21\u6297\u8bae\u2014\u2014\u975e\u88d4\u7f8e\u56fd\u4eba\u6297\u62d2\u9694\u79bb\u5236\u5ea6\u5df2\u5386\u5341\u5e74\u3002\u5b83\u4e0d\u5305\u542b\u66b4\u529b\u2014\u2014\u8fd9\u662f\u4e00\u6b21\u548c\u5e73\u6e38\u884c\u3002\u91d1\u5c0f\u5428\u572819\u5e74\u5148\u5c31\u66fe\u591a\u6b21\u516c\u5f00\u6f14\u8bb2\u3002\u4f7f\u5176\u5177\u6709\u72ec\u7279\u91cd\u8981\u6027\u7684\u662f\u5176\u5de8\u5927\u89c4\u6a21\u3001\u5168\u56fd\u7535\u89c6\u8986\u76d6\u3001\u591a\u79cd\u65cf\u53c2\u4e0e\u4ee5\u53ca\u4e0e1964\u5e74\u6c11\u6743\u6cd5\u6848\u7684\u76f4\u63a5\u5173\u8054\u3002",
        },
      ],
    },
  ],
};
