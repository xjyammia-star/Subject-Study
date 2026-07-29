import { Topic } from "./types";

export const humanRights: Topic = {
  slug: "human-rights",
  name: "Human Rights and Slavery",
  nameZh: "\u4eba\u6743\u4e0e\u5974\u96b6\u5236\u5ea6",
  subject: "History",
  subjectZh: "\u5386\u53f2",
  year: "Year 8",
  lessons: [
    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "What is Slavery and Why Do We Study It?",
      titleZh: "\u4ec0\u4e48\u662f\u5974\u96b6\u5236\u5ea6\uff0c\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u5b66\u4e60\u5b83\uff1f",
      subtitle: "Understanding what slavery means and why history asks us to face it.",
      subtitleZh: "\u7406\u89e3\u5974\u96b6\u5236\u5ea6\u7684\u542b\u4e49\uff0c\u4ee5\u53ca\u5386\u53f2\u4e3a\u4ec0\u4e48\u8981\u6c42\u6211\u4eec\u6b63\u89c6\u5b83\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain what slavery means as a historical practice.",
              zh: "\u6211\u80fd\u89e3\u91ca\u5974\u96b6\u5236\u5ea6\u4f5c\u4e3a\u4e00\u79cd\u5386\u53f2\u73b0\u8c61\u7684\u542b\u4e49\u3002",
            },
            {
              en: "I can describe how enslaved people were treated and controlled.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u8005\u662f\u5982\u4f55\u88ab\u5bf9\u5f85\u548c\u63a7\u5236\u7684\u3002",
            },
            {
              en: "I can give one reason why historians study slavery today.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u5386\u53f2\u5b66\u5bb6\u81f3\u4eca\u4ecd\u7814\u7a76\u5974\u96b6\u5236\u5ea6\u7684\u4e00\u4e2a\u539f\u56e0\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Slavery is a system in which people are owned by others, forced to work without pay, and denied basic freedoms. Enslaved people could be bought and sold like objects, and they had no legal rights.",
              zh: "\u5974\u96b6\u5236\u5ea6\u662f\u4e00\u79cd\u5236\u5ea6\uff0c\u5728\u8fd9\u79cd\u5236\u5ea6\u4e0b\uff0c\u4eba\u4eec\u88ab\u5176\u4ed6\u4eba\u6240\u62e5\u6709\uff0c\u88ab\u8feb\u65e0\u507f\u52b3\u52a8\uff0c\u5e76\u88ab\u5265\u593a\u57fa\u672c\u81ea\u7531\u3002\u88ab\u5974\u5f79\u8005\u53ef\u4ee5\u50cf\u7269\u54c1\u4e00\u6837\u88ab\u4e70\u5356\uff0c\u5e76\u4e14\u6ca1\u6709\u4efb\u4f55\u6cd5\u5f8b\u6743\u5229\u3002",
            },
            {
              type: "text",
              en: "During the Atlantic slave trade, millions of Africans were captured, transported across the ocean, and forced to work on plantations in the Americas. This happened over several centuries and was driven by profit.",
              zh: "\u5728\u5927\u897f\u6d0b\u5974\u96b6\u8d38\u6613\u671f\u95f4\uff0c\u6570\u767e\u4e07\u975e\u6d32\u4eba\u88ab\u6355\u83b7\uff0c\u8fc7\u6d77\u8fd0\u8f93\uff0c\u88ab\u8feb\u5728\u7f8e\u6d32\u7684\u79cd\u690d\u56ed\u52b3\u52a8\u3002\u8fd9\u4e00\u8fc7\u7a0b\u6301\u7eed\u4e86\u51e0\u4e2a\u4e16\u7eaa\uff0c\u7531\u5229\u76ca\u9a71\u52a8\u3002",
            },
            {
              type: "highlight",
              en: "We study slavery in History because it is one of the greatest injustices ever committed by human beings against other human beings. Understanding how it happened helps explain why human rights protections exist today.",
              zh: "\u6211\u4eec\u5728\u5386\u53f2\u8bfe\u4e2d\u5b66\u4e60\u5974\u96b6\u5236\u5ea6\uff0c\u56e0\u4e3a\u5b83\u662f\u4eba\u7c7b\u5bf9\u540c\u7c7b\u6240\u72af\u4e0b\u7684\u6700\u5927\u4e0d\u516c\u4e4b\u4e00\u3002\u7406\u89e3\u5b83\u662f\u5982\u4f55\u53d1\u751f\u7684\uff0c\u6709\u52a9\u4e8e\u89e3\u91ca\u4eba\u6743\u4fdd\u62a4\u4e3a\u4f55\u5728\u4eca\u5929\u4f9d\u7136\u5b58\u5728\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: when we study a serious injustice from history, we are not just learning about the past. We are also asking: how did people allow this to happen, and what can we do to prevent similar things in the future?",
              zh: "\u8fd9\u6837\u60f3\u5427\uff1a\u5f53\u6211\u4eec\u7814\u7a76\u5386\u53f2\u4e0a\u7684\u4e25\u91cd\u4e0d\u516c\u6b63\u65f6\uff0c\u6211\u4eec\u4e0d\u4ec5\u4ec5\u662f\u5728\u4e86\u89e3\u8fc7\u53bb\u3002\u6211\u4eec\u8fd8\u5728\u8ffd\u95ee\uff1a\u4eba\u4eec\u662f\u5982\u4f55\u5bb9\u8bb8\u8fd9\u4e00\u5207\u53d1\u751f\u7684\uff0c\u6211\u4eec\u80fd\u505a\u4ec0\u4e48\u6765\u9632\u6b62\u7c7b\u4f3c\u7684\u4e8b\u60c5\u518d\u6b21\u53d1\u751f\uff1f",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Slavery",
              zh: "\u5974\u96b6\u5236\u5ea6",
              defEn: "A system where people are owned, controlled, and forced to work without freedom or pay.",
              defZh: "\u4e00\u79cd\u4eba\u4eec\u88ab\u62e5\u6709\u3001\u63a7\u5236\u548c\u88ab\u8feb\u52b3\u52a8\u800c\u6ca1\u6709\u81ea\u7531\u6216\u62a5\u916c\u7684\u5236\u5ea6\u3002",
            },
            {
              en: "Enslaved person",
              zh: "\u88ab\u5974\u5f79\u8005",
              defEn: "A person who is owned by another and forced to work, with no rights or freedom.",
              defZh: "\u88ab\u5176\u4ed6\u4eba\u6240\u62e5\u6709\u5e76\u88ab\u8feb\u52b3\u52a8\u3001\u6ca1\u6709\u6743\u5229\u6216\u81ea\u7531\u7684\u4eba\u3002",
            },
            {
              en: "Injustice",
              zh: "\u4e0d\u516c\u6b63",
              defEn: "A situation where people are treated unfairly or denied rights they deserve.",
              defZh: "\u4eba\u4eec\u88ab\u4e0d\u516c\u5e73\u5bf9\u5f85\u6216\u88ab\u5265\u593a\u5e94\u5f97\u6743\u5229\u7684\u60c5\u51b5\u3002",
            },
            {
              en: "Plantation",
              zh: "\u79cd\u690d\u56ed",
              defEn: "A large farm, often in the Americas, where crops such as sugar, tobacco, or cotton were grown using enslaved labour.",
              defZh: "\u901a\u5e38\u5728\u7f8e\u6d32\u7684\u5927\u578b\u519c\u573a\uff0c\u4f7f\u7528\u5974\u5f79\u52b3\u52a8\u79cd\u690d\u7cd6\u3001\u70df\u8349\u6216\u68c9\u82b1\u7b49\u4f5c\u7269\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "The Slave Trade (1840) by François-Auguste Biard — a painting depicting enslaved Africans being bought and sold on the West African coast",
          captionZh: "\u6cd5\u56fd\u753b\u5bb6\u6bd4\u4e9a\u5c14\u4e8e1840\u5e74\u521b\u4f5c\u7684\u6cb9\u753b\u300a\u5974\u96b6\u8d38\u6613\u300b\u2014\u2014\u63cf\u7ed8\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5728\u897f\u975e\u6d77\u5cb8\u88ab\u4e70\u5356\u7684\u573a\u666f",
          source: "Wikimedia Commons",
          wikimediaFile: "The_Slave_Trade_by_Auguste_Francois_Biard.jpg",
        },
        {
          type: "source",
          labelEn: "A key historical source",
          labelZh: "\u4e00\u4e2a\u91cd\u8981\u7684\u5386\u53f2\u6750\u6599",
          en: "From the lesson materials: 'Slavery means people are controlled, exploited, and denied freedom. The topic is studied in History to understand injustice, suffering, and the consequences of treating people as property.'",
          zh: "\u6765\u81ea\u8bfe\u7a0b\u6750\u6599\uff1a\u201c\u5974\u96b6\u5236\u5ea6\u610f\u5473\u7740\u4eba\u4eec\u88ab\u63a7\u5236\u3001\u5265\u524a\u548c\u5265\u593a\u81ea\u7531\u3002\u8fd9\u4e2a\u4e3b\u9898\u5728\u5386\u53f2\u8bfe\u4e2d\u88ab\u7814\u7a76\uff0c\u662f\u4e3a\u4e86\u7406\u89e3\u4e0d\u516c\u6b63\u3001\u82e6\u96be\u4ee5\u53ca\u5c06\u4eba\u89c6\u4e3a\u8d22\u4ea7\u7684\u540e\u679c\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why do you think historians say it is important to study slavery even though it happened hundreds of years ago?",
              qZh: "\u4f60\u8ba4\u4e3a\u5386\u53f2\u5b66\u5bb6\u4e3a\u4ec0\u4e48\u8bf4\uff0c\u5373\u4f7f\u5974\u96b6\u5236\u5ea6\u53d1\u751f\u5728\u51e0\u767e\u5e74\u524d\uff0c\u7814\u7a76\u5b83\u4ecd\u7136\u5f88\u91cd\u8981\uff1f",
              aEn: "Historians study slavery because it shaped the modern world in lasting ways. The trade routes, economic systems, and racial inequalities that came out of the slave trade still influence society today. Understanding the past helps us recognise and challenge injustice in the present.",
              aZh: "\u5386\u53f2\u5b66\u5bb6\u7814\u7a76\u5974\u96b6\u5236\u5ea6\uff0c\u56e0\u4e3a\u5b83\u4ee5\u6301\u4e45\u7684\u65b9\u5f0f\u5851\u9020\u4e86\u73b0\u4ee3\u4e16\u754c\u3002\u5974\u96b6\u8d38\u6613\u4e2d\u4ea7\u751f\u7684\u8d38\u6613\u8def\u7ebf\u3001\u7ecf\u6d4e\u4f53\u7cfb\u548c\u79cd\u65cf\u4e0d\u5e73\u7b49\uff0c\u81f3\u4eca\u4ecd\u5728\u5f71\u54cd\u793e\u4f1a\u3002\u4e86\u89e3\u8fc7\u53bb\u6709\u52a9\u4e8e\u6211\u4eec\u8bc6\u522b\u5e76\u6311\u6218\u5f53\u4e0b\u7684\u4e0d\u516c\u6b63\u3002",
            },
            {
              qEn: "Slavery treated people as property rather than as human beings. What does this tell us about the values of the people who ran the slave trade?",
              qZh: "\u5974\u96b6\u5236\u5ea6\u5c06\u4eba\u4eec\u89c6\u4e3a\u8d22\u4ea7\u800c\u975e\u4eba\u7c7b\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\u5173\u4e8e\u8fd0\u884c\u5974\u96b6\u8d38\u6613\u7684\u4eba\u4eec\u7684\u4ef7\u503c\u89c2\uff0c\u6709\u4ec0\u4e48\uff1f",
              aEn: "It tells us that those who ran the slave trade placed profit above human dignity. They used racial and religious justifications to tell themselves that enslaved Africans were not equal human beings. This is one reason why understanding slavery is connected to understanding how prejudice and dehumanisation are used to allow injustice.",
              aZh: "\u8fd9\u544a\u8bc9\u6211\u4eec\uff0c\u8fd0\u884c\u5974\u96b6\u8d38\u6613\u7684\u4eba\u5c06\u5229\u76ca\u7f6e\u4e8e\u4eba\u7c7b\u5c0a\u4e25\u4e4b\u4e0a\u3002\u4ed6\u4eec\u5229\u7528\u79cd\u65cf\u548c\u5b97\u6559\u7684\u7406\u7531\u6765\u544a\u8bc9\u81ea\u5df1\uff0c\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5e76\u4e0d\u662f\u5e73\u7b49\u7684\u4eba\u7c7b\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u7406\u89e3\u5974\u96b6\u5236\u5ea6\u4e0e\u7406\u89e3\u504f\u89c1\u548c\u975e\u4eba\u5316\u5982\u4f55\u88ab\u7528\u4e8e\u5bb9\u8bb8\u4e0d\u516c\u6b63\u6709\u5173\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes what slavery is?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u63cf\u8ff0\u5974\u96b6\u5236\u5ea6\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "A system where people choose to work for very low wages", zh: "\u4e00\u79cd\u4eba\u4eec\u9009\u62e9\u4ee5\u975e\u5e38\u4f4e\u5de5\u8d44\u5de5\u4f5c\u7684\u5236\u5ea6" },
            { en: "A system where people are owned, forced to work, and denied basic freedoms", zh: "\u4e00\u79cd\u4eba\u4eec\u88ab\u62e5\u6709\u3001\u88ab\u8feb\u52b3\u52a8\u5e76\u88ab\u5265\u593a\u57fa\u672c\u81ea\u7531\u7684\u5236\u5ea6" },
            { en: "A system where workers are paid fairly but have limited rights", zh: "\u4e00\u79cd\u5de5\u4eba\u88ab\u516c\u5e73\u4ed8\u8d39\u4f46\u6743\u5229\u6709\u9650\u7684\u5236\u5ea6" },
            { en: "A system where people work voluntarily for food and shelter", zh: "\u4e00\u79cd\u4eba\u4eec\u81ea\u613f\u4e3a\u98df\u7269\u548c\u5c45\u6240\u5de5\u4f5c\u7684\u5236\u5ea6" },
          ],
          correct: 1,
          explainCorrectEn: "Slavery is defined as a system in which people are owned by others, forced to work without pay, and denied basic freedoms. Enslaved people had no legal rights and could be bought and sold like property. The key features are ownership, forced labour, and the complete denial of freedom.",
          explainCorrectZh: "\u5974\u96b6\u5236\u5ea6\u88ab\u5b9a\u4e49\u4e3a\u4e00\u79cd\u4eba\u4eec\u88ab\u4ed6\u4eba\u6240\u62e5\u6709\u3001\u88ab\u8feb\u65e0\u507f\u52b3\u52a8\u5e76\u88ab\u5265\u593a\u57fa\u672c\u81ea\u7531\u7684\u5236\u5ea6\u3002\u88ab\u5974\u5f79\u8005\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u53ef\u4ee5\u50cf\u8d22\u4ea7\u4e00\u6837\u88ab\u4e70\u5356\u3002\u5173\u952e\u7279\u5f81\u662f\u62e5\u6709\u3001\u5f3a\u8feb\u52b3\u52a8\u548c\u5bf9\u81ea\u7531\u7684\u5b8c\u5168\u5265\u593a\u3002",
          explainWrongEn: "The correct answer is B. Slavery is not about low wages or voluntary work. It is a system of ownership and total control. Enslaved people had no choice, no pay, and no legal rights.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5974\u96b6\u5236\u5ea6\u4e0d\u662f\u5173\u4e8e\u4f4e\u5de5\u8d44\u6216\u81ea\u613f\u5de5\u4f5c\u7684\u3002\u5b83\u662f\u4e00\u79cd\u6240\u6709\u6743\u548c\u5168\u9762\u63a7\u5236\u7684\u5236\u5ea6\u3002\u88ab\u5974\u5f79\u8005\u6ca1\u6709\u9009\u62e9\uff0c\u6ca1\u6709\u5de5\u8d44\uff0c\u4e5f\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\u3002",
        },
      ],
    },

    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "The Triangular Trade",
      titleZh: "\u4e09\u89d2\u8d38\u6613",
      subtitle: "How Britain, Africa, and the Americas were connected by slavery.",
      subtitleZh: "\u82f1\u56fd\u3001\u975e\u6d32\u548c\u7f8e\u6d32\u662f\u5982\u4f55\u901a\u8fc7\u5974\u96b6\u5236\u5ea6\u8fde\u7ed3\u5728\u4e00\u8d77\u7684\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe the three stages of the triangular trade.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u4e09\u89d2\u8d38\u6613\u7684\u4e09\u4e2a\u9636\u6bb5\u3002",
            },
            {
              en: "I can explain why European merchants became involved in the slave trade.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u6b27\u6d32\u5546\u4eba\u53c2\u4e0e\u5974\u96b6\u8d38\u6613\u3002",
            },
            {
              en: "I can use key dates to trace how Britain became the world's biggest slave-trading nation.",
              zh: "\u6211\u80fd\u7528\u5173\u952e\u65e5\u671f\u8ffd\u6e90\u82f1\u56fd\u662f\u5982\u4f55\u6210\u4e3a\u4e16\u754c\u6700\u5927\u5974\u96b6\u8d38\u6613\u56fd\u7684\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "During the 1500s, Europe had many powerful trading nations. They sold fabrics, alcohol and weapons in exchange for resources that they did not have. At the same time, many European colonists had moved to settle in America but they did not have enough people to complete the work they wanted to do.",
              zh: "16\u4e16\u7eaa\u671f\u95f4\uff0c\u6b27\u6d32\u6709\u8bb8\u591a\u5f3a\u5927\u7684\u8d38\u6613\u56fd\u5bb6\u3002\u5b83\u4eec\u51fa\u552e\u5e03\u6599\u3001\u9152\u7cbe\u548c\u6b66\u5668\uff0c\u4ee5\u6362\u53d6\u5b83\u4eec\u6ca1\u6709\u7684\u8d44\u6e90\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u8bb8\u591a\u6b27\u6d32\u6b96\u6c11\u8fc1\u5c45\u7f8e\u6d32\uff0c\u4f46\u4ed6\u4eec\u6ca1\u6709\u8db3\u591f\u7684\u4eba\u529b\u6765\u5b8c\u6210\u60f3\u505a\u7684\u5de5\u4f5c\u3002",
            },
            {
              type: "text",
              en: "The early settlers tried to force the Native Americans to work for them but it still was not enough. So traders went to other countries like those on the coast of Africa to find new workers. British traders traded their goods to African chiefs who in turn offered them people who they had captured from other tribes.",
              zh: "\u65e9\u671f\u6b96\u6c11\u8bd5\u56fe\u8feb\u4f7f\u7f8e\u6d32\u539f\u4f4f\u6c11\u4e3a\u4ed6\u4eec\u5de5\u4f5c\uff0c\u4f46\u4ecd\u7136\u4e0d\u591f\u3002\u4e8e\u662f\u5546\u4eba\u524d\u5f80\u975e\u6d32\u6d77\u5cb8\u7b49\u5730\u5bfb\u627e\u65b0\u5de5\u4eba\u3002\u82f1\u56fd\u5546\u4eba\u5c06\u5546\u54c1\u6613\u8d38\u7ed9\u975e\u6d32\u9996\u9886\uff0c\u540e\u8005\u5219\u7528\u4ed6\u4eec\u4ece\u5176\u4ed6\u90e8\u843d\u6355\u83b7\u7684\u4eba\u6362\u53d6\u5546\u54c1\u3002",
            },
            {
              type: "highlight",
              en: "The triangular trade had three main voyages: (1) British ships left Britain with manufactured goods — cloth, metal, guns and alcohol — and sailed to West Africa. (2) Enslaved Africans were transported across the Atlantic Ocean to the Americas — this crossing was called the Middle Passage. (3) Ships returned to Britain loaded with sugar, coffee, tobacco, and other goods produced on American plantations.",
              zh: "\u4e09\u89d2\u8d38\u6613\u6709\u4e09\u4e2a\u4e3b\u8981\u822a\u7a0b\uff1a\uff081\uff09\u82f1\u56fd\u8239\u53ea\u6ee1\u8f7d\u5236\u9020\u54c1\uff08\u5e03\u6599\u3001\u91d1\u5c5e\u3001\u67aa\u652f\u548c\u9152\u7cbe\uff09\u9a76\u5411\u897f\u975e\u3002\uff082\uff09\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u8fd0\u8fc7\u5927\u897f\u6d0b\u5230\u7f8e\u6d32\u2014\u2014\u8fd9\u6bb5\u6e21\u6d77\u88ab\u79f0\u4e3a\u201c\u4e2d\u95f4\u822a\u7a0b\u201d\u3002\uff083\uff09\u8239\u53ea\u6ee1\u8f7d\u7efc\u7cd6\u3001\u548b\u554a\u3001\u70df\u8349\u548c\u5176\u4ed6\u7f8e\u6d32\u79cd\u690d\u56ed\u4ea7\u54c1\u8fd4\u56de\u82f1\u56fd\u3002",
            },
            {
              type: "example",
              en: "The trade was called 'triangular' because the three voyages formed a triangle shape on a map — Britain to Africa, Africa to the Americas, and the Americas back to Britain. Each stage made money for British merchants, which is why they continued the trade for over 150 years.",
              zh: "\u8fd9\u79cd\u8d38\u6613\u88ab\u79f0\u4e3a\u201c\u4e09\u89d2\u201d\u8d38\u6613\uff0c\u56e0\u4e3a\u4e09\u6b21\u822a\u884c\u5728\u5730\u56fe\u4e0a\u5f62\u6210\u4e86\u4e00\u4e2a\u4e09\u89d2\u5f62\u2014\u2014\u82f1\u56fd\u5230\u975e\u6d32\uff0c\u975e\u6d32\u5230\u7f8e\u6d32\uff0c\u518d\u4ece\u7f8e\u6d32\u8fd4\u56de\u82f1\u56fd\u3002\u6bcf\u4e2a\u9636\u6bb5\u90fd\u4e3a\u82f1\u56fd\u5546\u4eba\u5e26\u6765\u5229\u6da6\uff0c\u8fd9\u5c31\u662f\u4ed6\u4eec\u5728\u8d85\u8fc7150\u5e74\u95f4\u6301\u7eed\u8fd9\u4e00\u8d38\u6613\u7684\u539f\u56e0\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Triangular trade",
              zh: "\u4e09\u89d2\u8d38\u6613",
              defEn: "A trade system linking Britain, West Africa, and the Americas through three interconnected voyages.",
              defZh: "\u901a\u8fc7\u4e09\u6b21\u76f8\u4e92\u8fde\u63a5\u7684\u822a\u884c\u5c06\u82f1\u56fd\u3001\u897f\u975e\u548c\u7f8e\u6d32\u8054\u7cfb\u8d77\u6765\u7684\u8d38\u6613\u4f53\u7cfb\u3002",
            },
            {
              en: "Colonist",
              zh: "\u6b96\u6c11",
              defEn: "A person who settles in a new territory, often as part of a country taking control of that territory.",
              defZh: "\u5b9a\u5c45\u5728\u65b0\u9886\u571f\u7684\u4eba\uff0c\u901a\u5e38\u662f\u4e00\u4e2a\u56fd\u5bb6\u63a7\u5236\u8be5\u9886\u571f\u7684\u4e00\u90e8\u5206\u3002",
            },
            {
              en: "Middle Passage",
              zh: "\u4e2d\u95f4\u822a\u7a0b",
              defEn: "The sea crossing between West Africa and the Americas during which enslaved Africans were transported.",
              defZh: "\u897f\u975e\u548c\u7f8e\u6d32\u4e4b\u95f4\u7684\u6d77\u4e0a\u8fc7\u5c71\uff0c\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5728\u6b64\u671f\u95f4\u88ab\u8fd0\u8f93\u3002",
            },
            {
              en: "Abolition",
              zh: "\u5e9f\u9664",
              defEn: "The act of officially ending something, such as slavery or the slave trade.",
              defZh: "\u6b63\u5f0f\u7ec8\u6b62\u67d0\u4e8b\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\u5974\u96b6\u5236\u5ea6\u6216\u5974\u96b6\u8d38\u6613\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "A diagram showing the three-stage triangular trade route connecting Britain, West Africa, and the Americas",
          captionZh: "\u4e00\u5f20\u663e\u793a\u4e09\u9636\u6bb5\u4e09\u89d2\u8d38\u6613\u8def\u7ebf\u7684\u56fe\u8868\uff0c\u8fde\u63a5\u82f1\u56fd\u3001\u897f\u975e\u548c\u7f8e\u6d32",
          source: "Wikimedia Commons",
          wikimediaFile: "Triangle_trade2.png",
        },
        {
          type: "source",
          labelEn: "A key historical source",
          labelZh: "\u4e00\u4e2a\u91cd\u8981\u7684\u5386\u53f2\u6750\u6599",
          en: "From the lesson materials: 'An estimated 15 million Africans were transported to the Americas between 1540 and 1850. To maximise their profits slave merchants carried as many slaves as was physically possible on their ships.'",
          zh: "\u6765\u81ea\u8bfe\u7a0b\u6750\u6599\uff1a\u201c1540\u5e74\u81f31850\u5e74\u95f4\uff0c\u4f30\u8ba11500\u4e07\u975e\u6d32\u4eba\u88ab\u8fd0\u9001\u5230\u7f8e\u6d32\u3002\u4e3a\u4e86\u8d5a\u53d6\u6700\u5927\u5229\u76ca\uff0c\u5974\u96b6\u5546\u4eba\u5728\u8239\u4e0a\u88c5\u8f7d\u4e86\u5c3d\u53ef\u80fd\u591a\u7684\u5974\u96b6\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why do you think merchants were willing to be involved in the slave trade, even though it caused so much suffering?",
              qZh: "\u4f60\u8ba4\u4e3a\u5546\u4eba\u4e3a\u4ec0\u4e48\u613f\u610f\u53c2\u4e0e\u5974\u96b6\u8d38\u6613\uff0c\u5373\u4f7f\u5b83\u9020\u6210\u4e86\u5982\u6b64\u591a\u7684\u82e6\u96be\uff1f",
              aEn: "The answer is profit. The triangular trade was extremely profitable. In the 17th century, enslaved people could be purchased in Africa for about $25 and sold in the Americas for about $150. Even with very high death rates, merchants could still make large amounts of money. When profit is the main motivation, people can convince themselves to ignore the human cost of their actions.",
              aZh: "\u7b54\u6848\u662f\u5229\u76ca\u3002\u4e09\u89d2\u8d38\u6613\u5229\u6da6\u5c81\u664b\u3002\u572817\u4e16\u7eaa\uff0c\u88ab\u5974\u5f79\u8005\u5728\u975e\u6d32\u7684\u8d2d\u4e70\u4ef7\u683c\u7ea625\u7f8e\u5143\uff0c\u5728\u7f8e\u6d32\u7684\u552e\u4ef7\u7ea6150\u7f8e\u5143\u3002\u5373\u4f7f\u6b7b\u4ea1\u7387\u975e\u5e38\u9ad8\uff0c\u5546\u4eba\u4ecd\u7136\u80fd\u8d5a\u53d6\u5927\u91cf\u8d44\u91d1\u3002\u5f53\u5229\u6da6\u662f\u4e3b\u8981\u52a8\u673a\u65f6\uff0c\u4eba\u4eec\u53ef\u4ee5\u8bf4\u670d\u81ea\u5df1\u5ffd\u89c6\u5176\u884c\u4e3a\u7684\u4eba\u7c7b\u4ee3\u4ef7\u3002",
            },
            {
              qEn: "The triangular trade was abolished in the British Empire in 1807, but slavery itself was not abolished until 1833. What does this time gap suggest about how change happens in history?",
              qZh: "\u4e09\u89d2\u8d38\u6613\u4e8e1807\u5e74\u5728\u82f1\u5e1d\u56fd\u88ab\u5e9f\u9664\uff0c\u4f46\u5974\u96b6\u5236\u5ea6\u672c\u8eab\u76f4\u52301833\u5e74\u624d\u88ab\u5e9f\u9664\u3002\u8fd9\u4e2a\u65f6\u95f4\u5dee\u8c03\u8868\u660e\u5386\u53f2\u4e0a\u7684\u53d8\u9769\u662f\u5982\u4f55\u53d1\u751f\u7684\uff1f",
              aEn: "It suggests that change in history is often slow and uneven. Ending the trade was one step, but it did not immediately free those already enslaved. It also shows that powerful economic interests resist change even when it is clearly morally necessary. Laws and social practices do not always change at the same speed.",
              aZh: "\u8fd9\u8868\u660e\u5386\u53f2\u4e0a\u7684\u53d8\u9769\u5f80\u5f80\u662f\u7f13\u6162\u800c\u4e0d\u5747\u5300\u7684\u3002\u7ec8\u6b62\u8d38\u6613\u662f\u4e00\u4e2a\u6b65\u9aa4\uff0c\u4f46\u5e76\u6ca1\u6709\u7acb\u5373\u89e3\u653e\u90a3\u4e9b\u5df2\u88ab\u5974\u5f79\u7684\u4eba\u3002\u8fd9\u4e5f\u8bf4\u660e\uff0c\u5373\u4f7f\u5f53\u9053\u5fb7\u5c42\u9762\u663e\u7136\u5fc5\u8981\u65f6\uff0c\u5f3a\u5927\u7684\u7ecf\u6d4e\u5229\u76ca\u4e5f\u4f1a\u6297\u62d2\u53d8\u9769\u3002\u6cd5\u5f8b\u548c\u793e\u4f1a\u4e60\u4fd7\u5e76\u4e0d\u603b\u662f\u4ee5\u540c\u6837\u7684\u901f\u5ea6\u6539\u53d8\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What were the goods taken from Britain to West Africa during the first stage of the triangular trade?",
          qZh: "\u4e09\u89d2\u8d38\u6613\u7b2c\u4e00\u9636\u6bb5\uff0c\u4ece\u82f1\u56fd\u8fd0\u5f80\u897f\u975e\u7684\u5546\u54c1\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "Sugar, coffee, and tobacco", zh: "\u7efc\u7cd6\u3001\u548b\u554a\u548c\u70df\u8349" },
            { en: "Gold, ivory, and spices", zh: "\u9ec4\u91d1\u3001\u8c61\u7259\u548c\u9999\u6599" },
            { en: "Cloth, metal, guns and alcohol", zh: "\u5e03\u6599\u3001\u91d1\u5c5e\u3001\u67aa\u652f\u548c\u9152\u7cbe" },
            { en: "Ships, maps, and navigation tools", zh: "\u8239\u53ea\u3001\u5730\u56fe\u548c\u5bfc\u822a\u5de5\u5177" },
          ],
          correct: 2,
          explainCorrectEn: "The lesson materials state that British traders traded cloth, metal, guns and alcohol to African chiefs in exchange for enslaved people. These manufactured goods were highly valued in West Africa and formed the first stage of the triangular trade.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u8bf4\u660e\uff0c\u82f1\u56fd\u5546\u4eba\u7528\u5e03\u6599\u3001\u91d1\u5c5e\u3001\u67aa\u652f\u548c\u9152\u7cbe\u4e0e\u975e\u6d32\u9996\u9886\u6613\u8d38\uff0c\u6362\u53d6\u88ab\u5974\u5f79\u7684\u4eba\u3002\u8fd9\u4e9b\u5236\u9020\u54c1\u5728\u897f\u975e\u975e\u5e38\u53d7\u91cd\u89c6\uff0c\u6784\u6210\u4e86\u4e09\u89d2\u8d38\u6613\u7684\u7b2c\u4e00\u9636\u6bb5\u3002",
          explainWrongEn: "The correct answer is C. Cloth, metal, guns and alcohol were taken from Britain to Africa. Sugar, coffee, and tobacco were the goods brought back to Britain from the Americas in the third stage.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fC\u3002\u5e03\u6599\u3001\u91d1\u5c5e\u3001\u67aa\u652f\u548c\u9152\u7cbe\u4ece\u82f1\u56fd\u8fd0\u5f80\u975e\u6d32\u3002\u7efc\u7cd6\u3001\u548b\u554a\u548c\u70df\u8349\u662f\u7b2c\u4e09\u9636\u6bb5\u4ece\u7f8e\u6d32\u8fd0\u56de\u82f1\u56fd\u7684\u5546\u54c1\u3002",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Conditions on the Middle Passage",
      titleZh: "\u4e2d\u95f4\u822a\u7a0b\u7684\u72b6\u51b5",
      subtitle: "The brutal reality of the ocean crossing that enslaved Africans were forced to endure.",
      subtitleZh: "\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u8feb\u627f\u53d7\u7684\u8fc7\u6d77\u7684\u6b8b\u9177\u73b0\u5b9e\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe the conditions that enslaved people experienced on slave ships.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u8005\u5728\u5974\u96b6\u8239\u4e0a\u7ecf\u5386\u7684\u72b6\u51b5\u3002",
            },
            {
              en: "I can explain why slave merchants accepted high death rates during the crossing.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5974\u96b6\u5546\u4eba\u63a5\u53d7\u6e21\u6d77\u671f\u95f4\u7684\u9ad8\u6b7b\u4ea1\u7387\u3002",
            },
            {
              en: "I can identify the key features of the Zong case and explain why it is significant.",
              zh: "\u6211\u80fd\u6307\u51fa\u5c0a\u683c\u53f7\u4e8b\u4ef6\u7684\u5173\u952e\u7279\u5f81\uff0c\u5e76\u89e3\u91ca\u5176\u91cd\u8981\u6027\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "An estimated 15 million Africans were transported to the Americas between 1540 and 1850. To maximise their profits, slave merchants carried as many people as was physically possible on their ships. A typical slave ship carried no fewer than 200 and no more than 500 slaves when it departed from West Africa.",
              zh: "1540\u5e74\u81f31850\u5e74\u95f4\uff0c\u4f30\u8ba11500\u4e07\u975e\u6d32\u4eba\u88ab\u8fd0\u5f80\u7f8e\u6d32\u3002\u4e3a\u4e86\u8d5a\u53d6\u6700\u5927\u5229\u6da6\uff0c\u5974\u96b6\u5546\u4eba\u5728\u8239\u4e0a\u88c5\u8f7d\u4e86\u5c3d\u53ef\u80fd\u591a\u7684\u4eba\u3002\u4e00\u8247\u5178\u578b\u7684\u5974\u96b6\u8239\u4ece\u897f\u975e\u51fa\u53d1\u65f6\uff0c\u88c5\u8f7d\u7684\u5974\u96b6\u4e0d\u5c11\u4e8e200\u4eba\uff0c\u4e0d\u591a\u4e8e500\u4eba\u3002",
            },
            {
              type: "text",
              en: "The slave ship provided an average of about seven square feet per slave. By the 17th century, slaves could be purchased in Africa for about $25 and sold in the Americas for about $150. After the slave trade was declared illegal, prices went much higher. Even with a death rate of 50 per cent, merchants could expect to make tremendous profits from the trade.",
              zh: "\u5974\u96b6\u8239\u5e73\u5747\u6bcf\u540d\u5974\u96b6\u7ea67\u5e73\u65b9\u82f1\u5c3a\u7684\u7a7a\u95f4\u3002\u572817\u4e16\u7eaa\uff0c\u5974\u96b6\u5728\u975e\u6d32\u7684\u8d2d\u4e70\u4ef7\u683c\u7ea625\u7f8e\u5143\uff0c\u5728\u7f8e\u6d32\u7684\u552e\u4ef7\u7ea6150\u7f8e\u5143\u3002\u5974\u96b6\u8d38\u6613\u88ab\u5ba3\u5e03\u4e3a\u975e\u6cd5\u540e\uff0c\u4ef7\u683c\u5927\u5e45\u6301\u9ad8\u3002\u5373\u4f7f\u6b7b\u4ea1\u7387\u8fbe50%\uff0c\u5546\u4eba\u4ecd\u53ef\u671b\u8d5a\u53d6\u5de8\u989d\u5229\u6da6\u3002",
            },
            {
              type: "highlight",
              en: "Conditions on the Middle Passage were extremely harsh. Enslaved people faced: disease — smallpox, dysentery, and fever spread quickly in the overcrowded conditions. Tight packing — people were chained together with very little space to move. Poor food and water — many were severely malnourished or dehydrated. Punishment — those who resisted were brutally punished.",
              zh: "\u4e2d\u95f4\u822a\u7a0b\u7684\u72b6\u51b5\u975e\u5e38\u6076\u52a3\u3002\u88ab\u5974\u5f79\u8005\u9762\u4e34\uff1a\u75be\u75c5\u2014\u2014\u5929\u82b1\u3001\u75e2\u75be\u548c\u53d1\u70e7\u5728\u62e5\u6324\u7684\u73af\u5883\u4e2d\u8fc5\u901f\u4f20\u64ad\u3002\u62e5\u6324\u7684\u7a7a\u95f4\u2014\u2014\u4eba\u4eec\u88ab\u9524\u94fe\u5728\u4e00\u8d77\uff0c\u51e0\u4e4e\u6ca1\u6709\u79fb\u52a8\u7684\u7a7a\u95f4\u3002\u98df\u7269\u548c\u6c34\u4e25\u91cd\u7f3a\u4e4f\u2014\u2014\u5f88\u591a\u4eba\u4e25\u91cd\u8425\u517b\u4e0d\u826f\u6216\u8131\u6c34\u3002\u60e9\u7f5a\u2014\u2014\u90a3\u4e9b\u53cd\u6297\u7684\u4eba\u88ab\u6b8b\u9177\u60e9\u7f5a\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: the crossing could take weeks. Imagine being chained in a dark, airless hold with almost no room to move, surrounded by hundreds of others in the same conditions, with no clean water and very little food. The merchants who ran this trade knew these conditions caused death, and continued anyway because they still made money.",
              zh: "\u8fd9\u6837\u60f3\u5427\uff1a\u8fc7\u6d77\u53ef\u80fd\u9700\u8981\u51e0\u5468\u3002\u60f3\u8c61\u4e00\u4e0b\u88ab\u9501\u5728\u9ed1\u6697\u3001\u65e0\u6c14\u7684\u8239\u8231\u8231\u5c42\u4e2d\uff0c\u51e0\u4e4e\u6ca1\u6709\u79fb\u52a8\u7684\u7a7a\u95f4\uff0c\u56f4\u7ed5\u7740\u6570\u767e\u4e2a\u540c\u6837\u5904\u5883\u7684\u4eba\uff0c\u6ca1\u6709\u5e72\u51c0\u7684\u6c34\uff0c\u98df\u7269\u6781\u5c11\u3002\u8fd0\u884c\u8fd9\u4e00\u8d38\u6613\u7684\u5546\u4eba\u77e5\u9053\u8fd9\u4e9b\u72b6\u51b5\u4f1a\u5bfc\u81f4\u6b7b\u4ea1\uff0c\u4f46\u4ecd\u7136\u7ee7\u7eed\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4ecd\u7136\u80fd\u8d5a\u5230\u94b1\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Tight packing",
              zh: "\u5bc6\u96c6\u88c5\u8f7d",
              defEn: "The practice of cramming as many enslaved people as possible into a ship to maximise profit.",
              defZh: "\u5c06\u5c3d\u53ef\u80fd\u591a\u7684\u88ab\u5974\u5f79\u8005\u585e\u8fdb\u8239\u4e2d\u4ee5\u8d5a\u53d6\u6700\u5927\u5229\u6da6\u7684\u505a\u6cd5\u3002",
            },
            {
              en: "Death rate",
              zh: "\u6b7b\u4ea1\u7387",
              defEn: "The proportion of people who die during a given period or journey.",
              defZh: "\u5728\u7ed9\u5b9a\u65f6\u671f\u6216\u65c5\u7a0b\u4e2d\u6b7b\u4ea1\u7684\u4eba\u53e3\u6bd4\u4f8b\u3002",
            },
            {
              en: "Dehumanisation",
              zh: "\u975e\u4eba\u5316",
              defEn: "The process of treating people as though they are not fully human, denying their dignity and rights.",
              defZh: "\u5c06\u4eba\u5f53\u4f5c\u975e\u5b8c\u6574\u4eba\u7c7b\u5bf9\u5f85\u3001\u5265\u593a\u5176\u5c0a\u4e25\u548c\u6743\u5229\u7684\u8fc7\u7a0b\u3002",
            },
            {
              en: "Insurance",
              zh: "\u4fdd\u9669",
              defEn: "An agreement to pay compensation if something is lost or damaged — in the Zong case, enslaved people were treated as insured cargo.",
              defZh: "\u5982\u679c\u67d0\u4e8b\u4e2e\u5931\u6216\u635f\u574f\u5219\u8d54\u507f\u7684\u534f\u8bae\u2014\u2014\u5728\u5c0a\u683c\u53f7\u4e8b\u4ef6\u4e2d\uff0c\u88ab\u5974\u5f79\u8005\u88ab\u5f53\u4f5c\u6295\u4fdd\u8d27\u7269\u5bf9\u5f85\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "A cross-section diagram of the slave ship Brooks, showing how enslaved people were packed into the hold — published in 1789 by abolitionists",
          captionZh: "\u5974\u96b6\u8239\u201c\u5e03\u9c81\u514b\u65af\u201d\u7684\u622a\u9762\u56fe\uff0c\u663e\u793a\u88ab\u5974\u5f79\u8005\u662f\u5982\u4f55\u88ab\u5854\u5165\u8239\u8231\u7684\u2014\u20141789\u5e74\u7531\u5e9f\u5974\u8fd0\u52a8\u8005\u516c\u5e03",
          source: "Wikimedia Commons",
          wikimediaFile: "Slaveshipposter.jpg",
        },
        {
          type: "source",
          labelEn: "The Zong Case, 1781",
          labelZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\uff0c1781\u5e74",
          en: "In 1781, the crew of the British slave ship Zong threw 133 enslaved Africans overboard into the sea. The ship's owners then claimed insurance money for the 'cargo' they had lost. The court case was not about whether killing the enslaved people was wrong — it was about whether the owners could claim insurance. This case exposed how the law treated enslaved people not as human beings but as property.",
          zh: "1781\u5e74\uff0c\u82f1\u56fd\u5974\u96b6\u8239\u5c0a\u683c\u53f7\u7684\u8239\u5458\u5c06133\u540d\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u6295\u5165\u6d77\u4e2d\u3002\u8239\u4e3b\u968f\u5373\u5411\u4fdd\u9669\u516c\u53f8\u7533\u8bf7\u8d54\u507f\u4e2e\u5931\u7684\u201c\u8d27\u7269\u201d\u3002\u6cd5\u5f8b\u6848\u4ef6\u5e76\u4e0d\u662f\u5173\u4e8e\u6740\u6b7b\u88ab\u5974\u5f79\u8005\u662f\u5426\u9519\u8bef\u2014\u2014\u800c\u662f\u5173\u4e8e\u8239\u4e3b\u662f\u5426\u53ef\u4ee5\u7533\u8bf7\u4fdd\u9669\u8d54\u507f\u3002\u8fd9\u4e00\u4e8b\u4ef6\u66b4\u9732\u4e86\u6cd5\u5f8b\u5982\u4f55\u5c06\u88ab\u5974\u5f79\u8005\u89c6\u4e3a\u8d22\u4ea7\u800c\u975e\u4eba\u7c7b\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why is the Zong case important for understanding the slave trade as a whole?",
              qZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\u5bf9\u4e8e\u7406\u89e3\u6574\u4e2a\u5974\u96b6\u8d38\u6613\u4e3a\u4ec0\u4e48\u91cd\u8981\uff1f",
              aEn: "The Zong case shows us that the legal and economic systems of the time treated enslaved people as objects, not humans. The court case was not about whether killing the enslaved people was wrong — it was about whether the ship owners could claim insurance money. This reveals the moral framework that made the slave trade possible: a system that legally defined human beings as property.",
              aZh: "\u5c0a\u683c\u53f7\u4e8b\u4ef6\u544a\u8bc9\u6211\u4eec\uff0c\u5f53\u65f6\u7684\u6cd5\u5f8b\u548c\u7ecf\u6d4e\u4f53\u7cfb\u5c06\u88ab\u5974\u5f79\u8005\u89c6\u4e3a\u7269\u54c1\u800c\u975e\u4eba\u7c7b\u3002\u6cd5\u5f8b\u6848\u4ef6\u5e76\u4e0d\u662f\u5173\u4e8e\u6740\u6b7b\u88ab\u5974\u5f79\u8005\u662f\u5426\u9519\u8bef\u2014\u2014\u800c\u662f\u5173\u4e8e\u8239\u4e3b\u662f\u5426\u53ef\u4ee5\u7533\u8bf7\u4fdd\u9669\u8d54\u507f\u3002\u8fd9\u63ed\u793a\u4e86\u4f7f\u5974\u96b6\u8d38\u6613\u6210\u4e3a\u53ef\u80fd\u7684\u9053\u5fb7\u6846\u67b6\uff1a\u4e00\u4e2a\u5c06\u4eba\u5b9a\u4e49\u4e3a\u8d22\u4ea7\u7684\u6cd5\u5f8b\u4f53\u7cfb\u3002",
            },
            {
              qEn: "Merchants accepted a death rate of up to 50 per cent and still expected to make profits. What does this tell us about how enslaved people were valued?",
              qZh: "\u5546\u4eba\u63a5\u53d7\u9ad8\u8fbe50%\u7684\u6b7b\u4ea1\u7387\uff0c\u4ecd\u7136\u671f\u671b\u76c8\u5229\u3002\u8fd9\u5bf9\u88ab\u5974\u5f79\u8005\u7684\u4ef7\u503c\u5224\u65ad\u548c\u5bf9\u5f85\u544a\u8bc9\u4e86\u6211\u4eec\u4ec0\u4e48\uff1f",
              aEn: "It tells us that enslaved people were valued purely as economic units. Their lives were seen as a cost of doing business, not as human lives with intrinsic worth. This was not just individual cruelty — it was an entire economic system built on the denial of humanity.",
              aZh: "\u8fd9\u544a\u8bc9\u6211\u4eec\uff0c\u88ab\u5974\u5f79\u8005\u7684\u4ef7\u503c\u7eaf\u7cb9\u662f\u4f5c\u4e3a\u7ecf\u6d4e\u5355\u4f4d\u6765\u8861\u91cf\u7684\u3002\u4ed6\u4eec\u7684\u751f\u547d\u88ab\u770b\u4f5c\u662f\u505a\u751f\u610f\u7684\u4e00\u79cd\u6210\u672c\uff0c\u800c\u4e0d\u662f\u5177\u6709\u5185\u5728\u4ef7\u503c\u7684\u4eba\u7c7b\u751f\u547d\u3002\u8fd9\u4e0d\u4ec5\u4ec5\u662f\u4e2a\u4eba\u7684\u6b8b\u5fcd\u2014\u2014\u8fd9\u662f\u4e00\u4e2a\u5efa\u7acb\u5728\u5426\u5b9a\u4eba\u6027\u57fa\u7840\u4e0a\u7684\u6574\u4e2a\u7ecf\u6d4e\u4f53\u7cfb\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Why did slave merchants accept very high death rates on the Middle Passage?",
          qZh: "\u5974\u96b6\u5546\u4eba\u4e3a\u4ec0\u4e48\u63a5\u53d7\u4e2d\u95f4\u822a\u7a0b\u4e2d\u975e\u5e38\u9ad8\u7684\u6b7b\u4ea1\u7387\uff1f",
          opts: [
            { en: "They did not know that conditions on the ships were so deadly", zh: "\u4ed6\u4eec\u4e0d\u77e5\u9053\u8239\u4e0a\u7684\u72b6\u51b5\u5982\u6b64\u81f4\u547d" },
            { en: "Even with high death rates, the trade still made large profits", zh: "\u5373\u4f7f\u6b7b\u4ea1\u7387\u9ad8\uff0c\u8d38\u6613\u4ecd\u7136\u4f7f\u5546\u4eba\u83b7\u5f97\u5de8\u989d\u5229\u6da6" },
            { en: "They were required by law to carry a minimum number of people", zh: "\u6cd5\u5f8b\u8981\u6c42\u4ed6\u4eec\u6700\u5c11\u8fd0\u8f7d\u4e00\u5b9a\u6570\u91cf\u7684\u4eba" },
            { en: "They believed the journey would make enslaved people stronger", zh: "\u4ed6\u4eec\u76f8\u4fe1\u65c5\u7a0b\u4f1a\u8ba9\u88ab\u5974\u5f79\u8005\u53d8\u5f97\u66f4\u5f3a\u58ee" },
          ],
          correct: 1,
          explainCorrectEn: "The materials state that even with a death rate of 50 per cent, merchants could expect to make tremendous profits. In the 17th century, enslaved people could be purchased for about $25 in Africa and sold for about $150 in the Americas. The profit motive overrode any concern for human life.",
          explainCorrectZh: "\u6750\u6599\u8bf4\u660e\uff0c\u5373\u4f7f\u6b7b\u4ea1\u7387\u8fbe50%\uff0c\u5546\u4eba\u4ecd\u53ef\u671b\u8d5a\u53d6\u5de8\u989d\u5229\u6da6\u3002\u572817\u4e16\u7eaa\uff0c\u88ab\u5974\u5f79\u8005\u5728\u975e\u6d32\u7684\u8d2d\u4e70\u4ef7\u683c\u7ea625\u7f8e\u5143\uff0c\u5728\u7f8e\u6d32\u7684\u552e\u4ef7\u7ea6150\u7f8e\u5143\u3002\u5229\u6da6\u52a8\u673a\u51cc\u9a7e\u4e86\u5bf9\u4eba\u7c7b\u751f\u547d\u7684\u4efb\u4f55\u5173\u5fc3\u3002",
          explainWrongEn: "The correct answer is B. Merchants knew the conditions were deadly — the Zong case shows they would even throw people overboard to save money. They continued the trade because it was still enormously profitable even after very large numbers of deaths.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5546\u4eba\u77e5\u9053\u8fd9\u4e9b\u72b6\u51b5\u662f\u81f4\u547d\u7684\u2014\u2014\u5c0a\u683c\u53f7\u4e8b\u4ef6\u8868\u660e\u4ed6\u4eec\u751a\u81f3\u4f1a\u5c06\u4eba\u6295\u5165\u6d77\u4e2d\u4ee5\u8282\u7701\u8d39\u7528\u3002\u4ed6\u4eec\u7ee7\u7eed\u8fd9\u4e00\u8d38\u6613\uff0c\u56e0\u4e3a\u5373\u4f7f\u5927\u91cf\u4eba\u6b7b\u4ea1\uff0c\u5b83\u4ecd\u7136\u9769\u5229\u53ef\u56fe\u3002",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "A",
      title: "Auction, Scramble, and Life on the Plantation",
      titleZh: "\u62cd\u5356\u3001\u4e89\u629a\u4e0e\u79cd\u690d\u56ed\u751f\u6d3b",
      subtitle: "What happened to enslaved people after they arrived in the Americas.",
      subtitleZh: "\u88ab\u5974\u5f79\u8005\u62b5\u8fbe\u7f8e\u6d32\u540e\u7684\u9047\u9047\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe what happened to enslaved people at auction and in the scramble.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u8005\u5728\u62cd\u5356\u548c\u4e89\u629a\u4e2d\u7684\u9047\u9047\u3002",
            },
            {
              en: "I can explain what working and living conditions were like on plantations.",
              zh: "\u6211\u80fd\u89e3\u91ca\u79cd\u690d\u56ed\u7684\u5de5\u4f5c\u548c\u751f\u6d3b\u6761\u4ef6\u662f\u600e\u6837\u7684\u3002",
            },
            {
              en: "I can use first-hand accounts to understand the experiences of enslaved people.",
              zh: "\u6211\u80fd\u5229\u7528\u7b2c\u4e00\u624b\u8d44\u6599\u4e86\u89e3\u88ab\u5974\u5f79\u8005\u7684\u7ecf\u5386\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Once sold at auction the slaves were taken to their new home — the Plantation. The owners branded the slaves with 'estate marks' to show which plantation they belonged to and to make it easier to identify runaway slaves. These same marks were used on cattle, barrels and other goods.",
              zh: "\u4e00\u65e6\u5728\u62cd\u5356\u4f1a\u88ab\u552e\u51fa\uff0c\u88ab\u5974\u5f79\u8005\u5c31\u88ab\u5e26\u5230\u4ed6\u4eec\u7684\u65b0\u5bb6\u2014\u2014\u79cd\u690d\u56ed\u3002\u4e3b\u4eba\u4f1a\u7528\u201c\u5e84\u56ed\u6807\u8bb0\u201d\u6253\u5728\u5974\u96b6\u8eab\u4e0a\uff0c\u8868\u660e\u4ed6\u4eec\u5c5e\u4e8e\u54ea\u4e2a\u79cd\u690d\u56ed\uff0c\u5e76\u4fbf\u4e8e\u8bc6\u522b\u9003\u8dd1\u7684\u5974\u96b6\u3002\u8fd9\u4e9b\u6807\u8bb0\u540c\u6837\u7528\u4e8e\u725b\u3001\u6876\u548c\u5176\u4ed6\u8d27\u7269\u4e0a\u3002",
            },
            {
              type: "text",
              en: "Often, slaves were given new names, although many hated giving up their African names. Roman names, Scots names and names of famous people were popular amongst plantation owners. Africans sold as slaves in the Americas had to rely on their owners providing them with housing or building materials, pots and pans for cooking, food and clothing.",
              zh: "\u5974\u96b6\u5f80\u5f80\u88ab\u8d4b\u4e88\u65b0\u540d\u5b57\uff0c\u5c3d\u7ba1\u8bb8\u591a\u4eba\u9003\u90a3\u653e\u5f03\u81ea\u5df1\u7684\u975e\u6d32\u540d\u5b57\u3002\u7f57\u9a6c\u540d\u3001\u82cf\u683c\u5170\u540d\u548c\u540d\u4eba\u7684\u540d\u5b57\u5728\u79cd\u690d\u56ed\u4e3b\u4e2d\u5f88\u6d41\u884c\u3002\u5728\u7f8e\u6d32\u88ab\u5356\u4e3a\u5974\u96b6\u7684\u975e\u6d32\u4eba\u5fc5\u987b\u4f9d\u9760\u4e3b\u4eba\u63d0\u4f9b\u4f4f\u6240\u6216\u5efa\u7b51\u6750\u6599\u3001\u70f9\u996a\u9505\u5177\u3001\u98df\u7269\u548c\u8863\u7269\u3002",
            },
            {
              type: "highlight",
              en: "Living conditions were cramped with sometimes as many as ten people sharing a hut. They had little furniture and their beds were usually made of straw or old rags. Most slaves had to work from sunrise to sunset. Some owners made their slaves work every day, others allowed slaves one day a month off and some allowed their slaves to have Sundays as a rest-day.",
              zh: "\u751f\u6d3b\u6761\u4ef6\u62e5\u6324\uff0c\u6709\u65f6\u591a\u8fbe\u5341\u4eba\u5171\u7528\u4e00\u95f4\u5c0f\u5c4b\u3002\u4ed6\u4eec\u5bb6\u5177\u5f88\u5c11\uff0c\u5e8a\u901a\u5e38\u7531\u7a3f\u8349\u6216\u65e7\u5e03\u659c\u5236\u6210\u3002\u5927\u591a\u6570\u5974\u96b6\u5fc5\u987b\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\u3002\u6709\u4e9b\u4e3b\u4eba\u8981\u6c42\u5974\u96b6\u6bcf\u5929\u5de5\u4f5c\uff0c\u53e6\u4e00\u4e9b\u5141\u8bb8\u5974\u96b6\u6bcf\u6708\u4f11\u606f\u4e00\u5929\uff0c\u8fd8\u6709\u4e9b\u5141\u8bb8\u5974\u96b6\u5468\u65e5\u4f11\u606f\u3002",
            },
            {
              type: "example",
              en: "Think about what the 'scramble' meant in practice: after ships arrived, a bell would ring and buyers would rush in and grab whichever enslaved people they wanted, fastening a ribbon or rope around them to show ownership. Families who had survived the Middle Passage together could be separated in minutes.",
              zh: "\u601d\u8003\u4e00\u4e0b\u201c\u4e89\u629a\u201d\u5728\u5b9e\u9645\u4e2d\u610f\u5473\u7740\u4ec0\u4e48\uff1a\u8239\u53ea\u6296\u9762\u540e\uff0c\u94c3\u58f0\u54cd\u8d77\uff0c\u4e70\u5bb6\u6d8c\u5165\uff0c\u629a\u629a\u4ed6\u4eec\u60f3\u8981\u7684\u88ab\u5974\u5f79\u8005\uff0c\u5e76\u4e3a\u5176\u7ed1\u4e0a\u4e1d\u5e26\u6216\u7ef3\u5b50\u4ee5\u8868\u793a\u6240\u6709\u6743\u3002\u5e76\u80a9\u5199\u8fc7\u4e2d\u95f4\u822a\u7a0b\u7684\u5bb6\u5ead\uff0c\u5728\u51e0\u5206\u949f\u5185\u5c31\u53ef\u80fd\u88ab\u62c6\u6563\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Auction",
              zh: "\u62cd\u5356",
              defEn: "A public sale where goods or people are sold to the highest bidder.",
              defZh: "\u516c\u5f00\u51fa\u552e\uff0c\u5546\u54c1\u6216\u4eba\u88ab\u5356\u7ed9\u51fa\u4ef7\u6700\u9ad8\u8005\u3002",
            },
            {
              en: "Scramble",
              zh: "\u4e89\u629a",
              defEn: "A type of slave sale where buyers rushed in and grabbed the enslaved people they wanted at a fixed price.",
              defZh: "\u4e00\u79cd\u5974\u96b6\u8d2d\u4e70\u65b9\u5f0f\uff0c\u4e70\u5bb6\u51b2\u5165\u5e76\u4ee5\u56fa\u5b9a\u4ef7\u683c\u629a\u53d6\u4ed6\u4eec\u60f3\u8981\u7684\u88ab\u5974\u5f79\u8005\u3002",
            },
            {
              en: "Estate mark",
              zh: "\u5e84\u56ed\u6807\u8bb0",
              defEn: "A brand burned onto an enslaved person's skin to show which plantation they belonged to.",
              defZh: "\u70d9\u5728\u88ab\u5974\u5f79\u8005\u76ae\u80a4\u4e0a\u7684\u70d9\u5370\uff0c\u8868\u660e\u5176\u5c5e\u4e8e\u54ea\u4e2a\u79cd\u690d\u56ed\u3002",
            },
            {
              en: "First-hand account",
              zh: "\u7b2c\u4e00\u624b\u8d44\u6599",
              defEn: "A description or testimony from someone who directly experienced the events being described.",
              defZh: "\u6765\u81ea\u76f4\u63a5\u7ecf\u5386\u6240\u63cf\u8ff0\u4e8b\u4ef6\u7684\u4eba\u7684\u63cf\u8ff0\u6216\u8bc1\u8bcd\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "An illustration depicting the inspection and sale of enslaved people in the Americas",
          captionZh: "\u4e00\u5e45\u63cf\u7ed8\u88ab\u5974\u5f79\u8005\u5728\u7f8e\u6d32\u62cd\u5356\u4f1a\u4e0a\u88ab\u51fa\u552e\u7684\u63d2\u56fe",
          source: "Wikimedia Commons",
          wikimediaFile: "The_inspection_and_sale_of_a_slave.jpg",
        },
        {
          type: "source",
          labelEn: "A first-hand account from a plantation",
          labelZh: "\u4e00\u4efd\u6765\u81ea\u79cd\u690d\u56ed\u7684\u7b2c\u4e00\u624b\u8d44\u6599",
          en: "From the lesson materials: 'Most did not dare complain for fear of receiving a whipping or worse punishment. Slaves were not allowed to read or write, but some were allowed to go to church.' First-hand accounts from enslaved people were used in class to investigate the kinds of work they were forced to do and the punishments they faced.",
          zh: "\u6765\u81ea\u8bfe\u7a0b\u6750\u6599\uff1a\u201c\u5927\u591a\u6570\u4eba\u4e0d\u656c\u6295\u8bc9\uff0c\u56e0\u4e3a\u6015\u906d\u9e5e\u6253\u6216\u66f4\u4e25\u5cf2\u7684\u60e9\u7f5a\u3002\u5974\u96b6\u4e0d\u5141\u8bb8\u8bfb\u4e66\u6216\u5199\u5b57\uff0c\u4f46\u6709\u4e9b\u5141\u8bb8\u4e0a\u6559\u5802\u3002\u201d\u88ab\u5974\u5f79\u8005\u7684\u7b2c\u4e00\u624b\u8d44\u6599\u5728\u8bfe\u5802\u4e2d\u88ab\u7528\u4e8e\u8c03\u67e5\u4ed6\u4eec\u88ab\u8feb\u4ece\u4e8b\u7684\u52b3\u52a8\u79cd\u7c7b\u548c\u6240\u9762\u4e34\u7684\u60e9\u7f5a\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Enslaved people were given new names, denied literacy, and branded with marks. What do these actions tell us about how plantation owners wanted enslaved people to see themselves?",
              qZh: "\u88ab\u5974\u5f79\u8005\u88ab\u8d4b\u4e88\u65b0\u540d\u5b57\u3001\u88ab\u5265\u593a\u8bfb\u5199\u80fd\u529b\u3001\u88ab\u70d9\u4e0a\u6807\u8bb0\u3002\u8fd9\u4e9b\u884c\u4e3a\u544a\u8bc9\u6211\u4eec\u79cd\u690d\u56ed\u4e3b\u5e0c\u671b\u88ab\u5974\u5f79\u8005\u5982\u4f55\u770b\u5f85\u81ea\u5df1\uff1f",
              aEn: "These actions were designed to destroy identity and break connection to any life before slavery. By removing African names, denying education, and treating people like branded livestock, plantation owners tried to make enslaved people feel that they had no identity separate from their role as property. Control over identity was a tool of control over behaviour.",
              aZh: "\u8fd9\u4e9b\u884c\u4e3a\u65e8\u5728\u6467\u6bc1\u8eab\u4efd\u8ba4\u540c\uff0c\u65ad\u7edd\u4e0e\u5974\u96b6\u4e4b\u524d\u751f\u6d3b\u7684\u8054\u7cfb\u3002\u901a\u8fc7\u5254\u9664\u975e\u6d32\u540d\u5b57\u3001\u5265\u593a\u53d7\u6559\u80b2\u6743\u5229\u3001\u5c06\u4eba\u50cf\u7259\u7275\u4e00\u6837\u70d9\u4e0a\u6807\u8bb0\uff0c\u79cd\u690d\u56ed\u4e3b\u8bd5\u56fe\u8ba9\u88ab\u5974\u5f79\u8005\u611f\u5230\u4ed6\u4eec\u6ca1\u6709\u72ec\u7acb\u4e8e\u8d22\u4ea7\u89d2\u8272\u4e4b\u5916\u7684\u8eab\u4efd\u3002\u5bf9\u8eab\u4efd\u7684\u63a7\u5236\u662f\u5bf9\u884c\u4e3a\u6303\u63a7\u7684\u4e00\u79cd\u5de5\u5177\u3002",
            },
            {
              qEn: "Why is it important that historians use first-hand accounts from enslaved people, rather than just using the records left by slave owners?",
              qZh: "\u4e3a\u4ec0\u4e48\u5386\u53f2\u5b66\u5bb6\u4f7f\u7528\u88ab\u5974\u5f79\u8005\u7684\u7b2c\u4e00\u624b\u8d44\u6599\uff0c\u800c\u4e0d\u4ec5\u4ec5\u4f9d\u9760\u5974\u96b6\u4e3b\u7559\u4e0b\u7684\u8bb0\u5f55\uff0c\u8fd9\u4e00\u70b9\u4e3a\u4ec0\u4e48\u91cd\u8981\uff1f",
              aEn: "Slave owners' records were written to protect their own interests and often ignored or justified the cruelty of slavery. First-hand accounts from enslaved people give us access to the human experience of slavery — the fear, loss, pain, and resilience that official records leave out. History is only complete when we hear from those who were most affected.",
              aZh: "\u5974\u96b6\u4e3b\u7684\u8bb0\u5f55\u662f\u4e3a\u4e86\u4fdd\u62a4\u81ea\u8eab\u5229\u76ca\u800c\u64b0\u5199\u7684\uff0c\u901a\u5e38\u5ffd\u89c6\u6216\u4e3a\u5974\u96b6\u5236\u5ea6\u7684\u6b8b\u9177\u8fdb\u884c\u8fa9\u62a4\u3002\u88ab\u5974\u5f79\u8005\u7684\u7b2c\u4e00\u624b\u8d44\u6599\u8ba9\u6211\u4eec\u80fd\u591f\u63a5\u89e6\u5974\u96b6\u5236\u5ea6\u7684\u4eba\u6027\u7ecf\u5386\u2014\u2014\u81ea\u5b98\u65b9\u8bb0\u5f55\u4e2d\u7d22\u7136\u65e0\u5b58\u7684\u6050\u60e7\u3001\u5931\u53bb\u3001\u75db\u82e6\u548c\u952f\u91cd\u3002\u53ea\u6709\u5026\u542c\u90a3\u4e9b\u53d7\u5f71\u54cd\u6700\u5927\u7684\u4eba\u7684\u58f0\u97f3\uff0c\u5386\u53f2\u624d\u80fd\u5b8c\u6574\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes daily life for enslaved people on plantations?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u63cf\u8ff0\u79cd\u690d\u56ed\u88ab\u5974\u5f79\u8005\u7684\u65e5\u5e38\u751f\u6d3b\uff1f",
          opts: [
            { en: "Long working hours, cramped living conditions, little food, and harsh punishments", zh: "\u6f2b\u957f\u7684\u5de5\u4f5c\u65f6\u95f4\u3001\u62e5\u6324\u7684\u751f\u6d3b\u6761\u4ef6\u3001\u5c11\u91cf\u7684\u98df\u7269\u548c\u4e25\u5cf2\u7684\u60e9\u7f5a" },
            { en: "Regular rest days, fair food, and basic education", zh: "\u5b9a\u671f\u4f11\u606f\u65e5\u3001\u5145\u8db3\u7684\u98df\u7269\u548c\u57fa\u672c\u6559\u80b2" },
            { en: "Hard work but with comfortable housing provided by owners", zh: "\u8f9b\u82e6\u5de5\u4f5c\uff0c\u4f46\u4e3b\u4eba\u63d0\u4f9b\u820d\u9002\u7684\u4f4f\u5c4b" },
            { en: "Dangerous work but with freedom to move between plantations", zh: "\u5371\u9669\u7684\u5de5\u4f5c\uff0c\u4f46\u53ef\u4ee5\u5728\u79cd\u690d\u56ed\u4e4b\u95f4\u81ea\u7531\u6d41\u52a8" },
          ],
          correct: 0,
          explainCorrectEn: "The lesson materials describe plantation life as involving work from sunrise to sunset, cramped living quarters with sometimes ten people to a hut, poor food, very little furniture, and brutal punishments for those who resisted or disobeyed. Enslaved people were also denied the right to read or write.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u63cf\u8ff0\u79cd\u690d\u56ed\u751f\u6d3b\u5305\u62ec\uff1a\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u62e5\u6324\u7684\u751f\u6d3b\u5c45\u6240\uff08\u6709\u65f6\u5341\u4eba\u540c\u4f4f\u4e00\u95f4\u5c0f\u5c4b\uff09\uff0c\u98df\u7269\u5dee\uff0c\u51e0\u4e4e\u6ca1\u6709\u5bb6\u5177\uff0c\u4ee5\u53ca\u5bf9\u53cd\u6297\u6216\u4e0d\u670d\u4ece\u8005\u7684\u6b8b\u9177\u60e9\u7f5a\u3002\u88ab\u5974\u5f79\u8005\u8fd8\u88ab\u5265\u593a\u4e86\u8bfb\u5199\u7684\u6743\u5229\u3002",
          explainWrongEn: "The correct answer is A. Plantation life was defined by extreme hardship, not comfort or fairness. Enslaved people worked from sunrise to sunset, lived in overcrowded conditions, and faced brutal punishments. They had no legal rights and were denied education.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fA\u3002\u79cd\u690d\u56ed\u751f\u6d3b\u7684\u7279\u5f81\u662f\u6781\u5ea6\u7684\u8270\u8f9b\uff0c\u800c\u975e\u8212\u9002\u6216\u516c\u5e73\u3002\u88ab\u5974\u5f79\u8005\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u751f\u6d3b\u5728\u62e5\u6324\u7684\u73af\u5883\u4e2d\uff0c\u5e76\u9762\u4e34\u6b8b\u9177\u7684\u60e9\u7f5a\u3002\u4ed6\u4eec\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u4e14\u88ab\u5265\u593a\u4e86\u63a5\u53d7\u6559\u80b2\u7684\u673a\u4f1a\u3002",
        },
      ],
    },

    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "A",
      title: "What are Human Rights?",
      titleZh: "\u4ec0\u4e48\u662f\u4eba\u6743\uff1f",
      subtitle: "Understanding rights, responsibilities, and why the UN Declaration of Human Rights matters.",
      subtitleZh: "\u7406\u89e3\u6743\u5229\u3001\u8d23\u4efb\u4e0e\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7684\u91cd\u8981\u6027\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain the difference between a right, a responsibility, and a privilege.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6743\u5229\u3001\u8d23\u4efb\u548c\u7279\u6743\u4e4b\u95f4\u7684\u533a\u522b\u3002",
            },
            {
              en: "I can identify why the United Nations was founded and when it adopted the Declaration of Human Rights.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u8054\u5408\u56fd\u6210\u7acb\u7684\u539f\u56e0\u53ca\u5176\u901a\u8fc7\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7684\u5e74\u4efd\u3002",
            },
            {
              en: "I can name at least three articles from the Declaration of Human Rights.",
              zh: "\u6211\u80fd\u5217\u4e3e\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4e2d\u81f3\u5c11\u4e09\u6761\u5185\u5bb9\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "A right is something considered fair or morally acceptable by most people — something all human beings should have. A responsibility is something it is your job or duty to deal with. A privilege is an advantage that only one person or group of people has, usually because of their position or because they are rich.",
              zh: "\u6743\u5229\u662f\u5927\u591a\u6570\u4eba\u8ba4\u4e3a\u516c\u5e73\u6216\u9053\u5fb7\u4e0a\u53ef\u63a5\u53d7\u7684\u4e8b\u7269\u2014\u2014\u6240\u6709\u4eba\u90fd\u5e94\u8be5\u62e5\u6709\u7684\u4e1c\u897f\u3002\u8d23\u4efb\u662f\u4f60\u7684\u5de5\u4f5c\u6216\u4e49\u52a1\u5e94\u5c3d\u7684\u4e8b\u60c5\u3002\u7279\u6743\u662f\u53ea\u6709\u5c11\u6570\u4eba\u62e5\u6709\u7684\u4f18\u52bf\uff0c\u901a\u5e38\u56e0\u4e3a\u4ed6\u4eec\u7684\u5730\u4f4d\u6216\u8d22\u5bcc\u800c\u83b7\u5f97\u3002",
            },
            {
              type: "text",
              en: "The United Nations Organisation (UN) is an international organisation whose stated aims are facilitating cooperation in international law, international security, economic development, social progress, human rights, and the achieving of world peace. The UN was founded in 1945 after World War II to replace the League of Nations, to stop wars between countries, and to provide a platform for dialogue.",
              zh: "\u8054\u5408\u56fd\uff08\u8054\u5408\u56fd\u7ec4\u7ec7\uff09\u662f\u4e00\u4e2a\u56fd\u9645\u7ec4\u7ec7\uff0c\u5176\u5ba3\u8bf4\u76ee\u6807\u662f\u4fc3\u8fdb\u56fd\u9645\u6cd5\u3001\u56fd\u9645\u5b89\u5168\u3001\u7ecf\u6d4e\u53d1\u5c55\u3001\u793e\u4f1a\u8fdb\u6b65\u3001\u4eba\u6743\u65b9\u9762\u7684\u5408\u4f5c\uff0c\u5e76\u5b9e\u73b0\u4e16\u754c\u548c\u5e73\u3002\u8054\u5408\u56fd\u4e8e1945\u5e74\u4e8c\u6218\u540e\u6210\u7acb\uff0c\u4ee5\u53d6\u4ee3\u56fd\u8054\uff0c\u9601\u6b62\u56fd\u5bb6\u95f4\u7684\u6218\u4e89\uff0c\u5e76\u63d0\u4f9b\u5bf9\u8bdd\u5e73\u53f0\u3002",
            },
            {
              type: "highlight",
              en: "In 1948 the UN adopted its Declaration of Human Rights, the aim being to uphold freedom, peace and justice for all human beings. 30 articles make up the United Nations Declaration of Human Rights. Key articles include: Article 1 — all people are born free and equal. Article 4 — no one shall be held in slavery. Article 5 — no one shall be subjected to torture. Article 23 — everyone has the right to work and fair pay.",
              zh: "1948\u5e74\uff0c\u8054\u5408\u56fd\u901a\u8fc7\u4e86\u300a\u4eba\u6743\u5ba3\u8a00\u300b\uff0c\u76ee\u6807\u662f\u4e3a\u6240\u6709\u4eba\u7c7b\u7ef4\u62a4\u81ea\u7531\u3001\u548c\u5e73\u548c\u516c\u6b63\u3002\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u753130\u6761\u6761\u6b3e\u6784\u6210\u3002\u5173\u952e\u6761\u6b3e\u5305\u62ec\uff1a\u7b2c1\u6761\u2014\u2014\u4eba\u4eba\u751f\u800c\u81ea\u7531\u5e73\u7b49\u3002\u7b2c4\u6761\u2014\u2014\u4efb\u4f55\u4eba\u4e0d\u5f97\u88ab\u5974\u5f79\u3002\u7b2c5\u6761\u2014\u2014\u4efb\u4f55\u4eba\u4e0d\u5f97\u906d\u53d7\u9177\u5211\u3002\u7b2c23\u6761\u2014\u2014\u4eba\u4eba\u6709\u6743\u5de5\u4f5c\u5e76\u83b7\u5f97\u516c\u5e73\u5de5\u8d44\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: a right is something everyone gets regardless of who they are — like the right to life, or the right not to be tortured. A privilege is something only some people get — like being able to afford a private education. The UN Declaration tried to make rights, not privileges, the standard for how all governments treat their people.",
              zh: "\u8fd9\u6837\u60f3\u5427\uff1a\u6743\u5229\u662f\u6240\u6709\u4eba\u65e0\u8bba\u8eab\u4efd\u5982\u4f55\u90fd\u80fd\u5f97\u5230\u7684\u2014\u2014\u6bd4\u5982\u751f\u547d\u6743\u548c\u4e0d\u9047\u9177\u5211\u7684\u6743\u5229\u3002\u7279\u6743\u662f\u53ea\u6709\u5c11\u6570\u4eba\u624d\u80fd\u5f97\u5230\u7684\u2014\u2014\u6bd4\u5982\u8d1f\u62c5\u5f97\u8d77\u79c1\u7acb\u6559\u80b2\u3002\u8054\u5408\u56fd\u5ba3\u8a00\u8bd5\u56fe\u5c06\u6743\u5229\u800c\u975e\u7279\u6743\uff0c\u4f5c\u4e3a\u6240\u6709\u653f\u5e9c\u5bf9\u5f85\u4eba\u6c11\u7684\u6807\u51c6\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Right",
              zh: "\u6743\u5229",
              defEn: "Something considered fair or morally acceptable that all people should have.",
              defZh: "\u88ab\u8ba4\u4e3a\u516c\u5e73\u6216\u9053\u5fb7\u4e0a\u53ef\u63a5\u53d7\u7684\u3001\u6240\u6709\u4eba\u5e94\u8be5\u62e5\u6709\u7684\u4e8b\u7269\u3002",
            },
            {
              en: "Responsibility",
              zh: "\u8d23\u4efb",
              defEn: "Something it is your job or duty to deal with.",
              defZh: "\u4f60\u7684\u5de5\u4f5c\u6216\u4e49\u52a1\u5e94\u5c3d\u7684\u4e8b\u60c5\u3002",
            },
            {
              en: "Privilege",
              zh: "\u7279\u6743",
              defEn: "An advantage that only one person or group has, usually because of their position or wealth.",
              defZh: "\u53ea\u6709\u5c11\u6570\u4eba\u62e5\u6709\u7684\u4f18\u52bf\uff0c\u901a\u5e38\u56e0\u5176\u5730\u4f4d\u6216\u8d22\u5bcc\u800c\u5f97\u3002",
            },
            {
              en: "Declaration",
              zh: "\u5ba3\u8a00",
              defEn: "An official announcement or statement, especially one made by an international body.",
              defZh: "\u5b98\u65b9\u516c\u544a\u6216\u58f0\u660e\uff0c\u5c24\u6307\u7531\u56fd\u9645\u673a\u6784\u53d1\u5e03\u7684\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "The United Nations General Assembly, where the Declaration of Human Rights was adopted in 1948",
          captionZh: "\u8054\u5408\u56fd\u5927\u4f1a\uff0c1948\u5e74\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u5728\u6b64\u901a\u8fc7",
          source: "Wikimedia Commons",
          wikimediaFile: "Flag_of_the_United_Nations.svg",
        },
        {
          type: "source",
          labelEn: "From the UN Declaration of Human Rights, 1948",
          labelZh: "\u6458\u81ea\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\uff0c1948\u5e74",
          en: "Article 1: All human beings are born free and equal in dignity and opportunity. Article 4: No one shall be held in slavery; slavery and the slave trade shall be banned in all their forms. Article 5: No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.",
          zh: "\u7b2c1\u6761\uff1a\u4eba\u4eba\u751f\u800c\u81ea\u7531\uff0c\u5728\u5c0a\u4e25\u548c\u673a\u4f1a\u4e0a\u4e00\u5f8b\u5e73\u7b49\u3002\u7b2c4\u6761\uff1a\u4efb\u4f55\u4eba\u4e0d\u5f97\u88ab\u5974\u5f79\uff1b\u4efb\u4f55\u5f62\u5f0f\u7684\u5974\u96b6\u5236\u5ea6\u548c\u5974\u96b6\u8d38\u6613\u5747\u5e94\u88ab\u7981\u6b62\u3002\u7b2c5\u6761\uff1a\u4efb\u4f55\u4eba\u4e0d\u5f97\u906d\u53d7\u9177\u5211\u6216\u6b8b\u5fcd\u3001\u975e\u4eba\u9053\u6216\u4f8e\u8fb1\u6027\u5bf9\u5f85\u6216\u60e9\u7f5a\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The UN Declaration of Human Rights was written in 1948, just after World War II. Why do you think the world felt it was so urgent to create this document at that moment in history?",
              qZh: "\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u5199\u4e8e1948\u5e74\uff0c\u5c31\u5728\u4e8c\u6218\u7ed3\u675f\u4e0d\u4e45\u4e4b\u540e\u3002\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u4e16\u754c\u5728\u90a3\u4e2a\u5386\u53f2\u65f6\u523b\u611f\u5230\u5c0f\u5fc3\u7ffb\u8eab\u8981\u5236\u5b9a\u8fd9\u4e2a\u6587\u4ef6\uff1f",
              aEn: "World War II had shown what happened when governments denied rights to whole groups of people — the Holocaust, mass atrocities, and the destruction of millions of lives. The UN Declaration was a response to this experience: an attempt to establish universal standards that no government could claim did not apply to them, to prevent such horrors from happening again.",
              aZh: "\u4e8c\u6218\u8868\u660e\uff0c\u5f53\u653f\u5e9c\u5265\u593a\u6574\u4e2a\u7fa4\u4f53\u7684\u6743\u5229\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u2014\u2014\u5927\u5c60\u6740\u3001\u5927\u89c4\u6a21\u6666\u884c\u4ee5\u53ca\u6570\u767e\u4e07\u4eba\u751f\u547d\u7684\u6bc1\u706d\u3002\u8054\u5408\u56fd\u5ba3\u8a00\u662f\u5bf9\u8fd9\u4e00\u7ecf\u5386\u7684\u56de\u5e94\uff1a\u8bd5\u56fe\u5efa\u7acb\u666e\u9002\u6807\u51c6\uff0c\u4f7f\u4efb\u4f55\u653f\u5e9c\u90fd\u65e0\u6cd5\u58f0\u79f0\u5176\u4e0d\u9002\u7528\u4e8e\u81ea\u5df1\uff0c\u4ee5\u9632\u6b62\u6b64\u7c7b\u6050\u6016\u7684\u4e8b\u60c5\u518d\u6b21\u53d1\u751f\u3002",
            },
            {
              qEn: "The Declaration says everyone has 'the right to work and fair pay' (Article 23). How does this directly connect to the experience of enslaved people you have studied?",
              qZh: "\u5ba3\u8a00\u8868\u660e\u6bcf\u4e2a\u4eba\u90fd\u6709\u201c\u5de5\u4f5c\u548c\u516c\u5e73\u62a5\u916c\u7684\u6743\u5229\u201d\uff08\u7b2c23\u6761\uff09\u3002\u8fd9\u4e0e\u4f60\u6240\u5b66\u4e60\u7684\u88ab\u5974\u5f79\u8005\u7684\u7ecf\u5386\u6709\u4f55\u76f4\u63a5\u8054\u7cfb\uff1f",
              aEn: "Enslaved people were forced to work all their lives without any pay. Article 23 directly addresses this injustice by stating that fair pay for work is a universal human right. Studying slavery helps us understand that rights like this were not always guaranteed — they had to be fought for and written into law.",
              aZh: "\u88ab\u5974\u5f79\u8005\u88ab\u8feb\u4e00\u751f\u52b3\u52a8\u5374\u6ca1\u6709\u4efb\u4f55\u62a5\u916c\u3002\u7b2c23\u6761\u76f4\u63a5\u9488\u5bf9\u8fd9\u4e00\u4e0d\u516c\u6b63\uff0c\u8bf4\u660e\u516c\u5e73\u7684\u5de5\u4f5c\u62a5\u916c\u662f\u666e\u9002\u7684\u4eba\u6743\u3002\u5b66\u4e60\u5974\u96b6\u5236\u5ea6\u6709\u52a9\u4e8e\u6211\u4eec\u7406\u89e3\uff0c\u8fd9\u4e9b\u6743\u5229\u5e76\u975e\u603b\u662f\u6709\u4fdd\u969c\u7684\u2014\u2014\u5b83\u4eec\u9700\u8981\u88ab\u4e89\u53d6\u5e76\u5199\u5165\u6cd5\u5f8b\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "When did the United Nations adopt the Declaration of Human Rights, and why was it created?",
          qZh: "\u8054\u5408\u56fd\u662f\u4f55\u65f6\u901a\u8fc7\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7684\uff0c\u4e3a\u4ec0\u4e48\u8981\u5236\u5b9a\u5b83\uff1f",
          opts: [
            { en: "1945, to mark the end of World War II", zh: "1945\u5e74\uff0c\u4e3a\u4e86\u6807\u5fd7\u4e8c\u6218\u7ed3\u675f" },
            { en: "1948, to uphold freedom, peace and justice for all human beings", zh: "1948\u5e74\uff0c\u4e3a\u4e86\u7ef4\u62a4\u6240\u6709\u4eba\u7c7b\u7684\u81ea\u7531\u3001\u548c\u5e73\u548c\u516c\u6b63" },
            { en: "1807, to celebrate the abolition of the slave trade in Britain", zh: "1807\u5e74\uff0c\u4e3a\u4e86\u5e86\u795d\u82f1\u56fd\u5e9f\u9664\u5974\u96b6\u8d38\u6613" },
            { en: "1933, to respond to the rise of fascism in Europe", zh: "1933\u5e74\uff0c\u4e3a\u4e86\u5e94\u5bf9\u6cd5\u897f\u65af\u4e3b\u4e49\u5728\u6b27\u6d32\u7684\u5d1b\u8d77" },
          ],
          correct: 1,
          explainCorrectEn: "The lesson materials state that in 1948 the UN adopted its Declaration of Human Rights, with the aim of upholding freedom, peace and justice for all human beings. The UN itself was founded in 1945, but the Declaration came three years later after careful drafting.",
          explainCorrectZh: "\u8bfe\u7a0b\u6750\u6599\u8bf4\u660e\uff0c1948\u5e74\u8054\u5408\u56fd\u901a\u8fc7\u4e86\u300a\u4eba\u6743\u5ba3\u8a00\u300b\uff0c\u76ee\u6807\u662f\u7ef4\u62a4\u6240\u6709\u4eba\u7c7b\u7684\u81ea\u7531\u3001\u548c\u5e73\u548c\u516c\u6b63\u3002\u8054\u5408\u56fd\u672c\u8eab\u4e8e1945\u5e74\u6210\u7acb\uff0c\u4f46\u5ba3\u8a00\u5728\u7ecf\u8fc7\u8c28\u614e\u8d77\u8349\u540e\u4e09\u5e74\u624d\u5f97\u4ee5\u53d1\u5e03\u3002",
          explainWrongEn: "The correct answer is B. The Declaration of Human Rights was adopted in 1948 — three years after the UN was founded in 1945. It was created to establish universal human rights protections for all people, in response to the horrors of World War II.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4e8e1948\u5e74\u901a\u8fc7\u2014\u2014\u5373\u8054\u5042\u56fd\u4e8e1945\u5e74\u6210\u7acb\u540e\u4e09\u5e74\u3002\u5b83\u7684\u5236\u5b9a\u662f\u4e3a\u4e86\u4e3a\u6240\u6709\u4eba\u5efa\u7acb\u666e\u9002\u4eba\u6743\u4fdd\u62a4\uff0c\u4ee5\u56de\u5e94\u4e8c\u6218\u7684\u6050\u6016\u3002",
        },
      ],
    },

    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "E",
      title: "How Did Slavery Violate Human Rights?",
      titleZh: "\u5974\u96b6\u5236\u5ea6\u662f\u5982\u4f55\u4fb5\u72af\u4eba\u6743\u7684\uff1f",
      subtitle: "Connecting the history of slavery to the articles of the UN Declaration of Human Rights.",
      subtitleZh: "\u5c06\u5974\u96b6\u5236\u5ea6\u7684\u5386\u53f2\u4e0e\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7684\u6761\u6b3e\u76f8\u8fde\u7ed3\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can identify which articles of the Declaration of Human Rights were violated by the slave trade.",
              zh: "\u6211\u80fd\u6307\u51fa\u5974\u96b6\u8d38\u6613\u4fb5\u72af\u4e86\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4e2d\u7684\u54ea\u4e9b\u6761\u6b3e\u3002",
            },
            {
              en: "I can use evidence from the topic to support my answers.",
              zh: "\u6211\u80fd\u5229\u7528\u672c\u4e3b\u9898\u7684\u8bc1\u636e\u652f\u6301\u6211\u7684\u56de\u7b54\u3002",
            },
            {
              en: "I can explain why studying slavery helps us understand the importance of human rights today.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5b66\u4e60\u5974\u96b6\u5236\u5ea6\u6709\u52a9\u4e8e\u6211\u4eec\u7406\u89e3\u5f53\u4eca\u4eba\u6743\u7684\u91cd\u8981\u6027\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Slavery violated multiple articles of the UN Declaration of Human Rights directly. Article 1 states that all people are born free and equal — enslaved people were denied this from the moment of capture. Article 3 gives everyone the right to life and liberty without fear of violence — enslaved people lived under constant threat of punishment and death.",
              zh: "\u5974\u96b6\u5236\u5ea6\u76f4\u63a5\u4fb5\u72af\u4e86\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7684\u591a\u4e2a\u6761\u6b3e\u3002\u7b2c1\u6761\u8bf4\u660e\u4eba\u4eba\u751f\u800c\u81ea\u7531\u5e73\u7b49\u2014\u2014\u88ab\u5974\u5f79\u8005\u5728\u88ab\u6355\u83b7\u7684\u90a3\u4e00\u523b\u8d77\u5c31\u88ab\u5265\u593a\u4e86\u8fd9\u4e00\u6743\u5229\u3002\u7b2c3\u6761\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u4e0d\u53d7\u66b4\u529b\u6216\u504f\u89c1\u4fa7\u5bb3\u7684\u751f\u547d\u548c\u81ea\u7531\u6743\u2014\u2014\u88ab\u5974\u5f79\u8005\u65f6\u523b\u9762\u4e34\u60e9\u7f5a\u548c\u6b7b\u4ea1\u7684\u5a01\u80c1\u3002",
            },
            {
              type: "text",
              en: "Article 4 bans slavery in all its forms — the very practice being studied here. Article 5 prohibits cruel or degrading treatment — the conditions on the Middle Passage, the branding of enslaved people, and the punishments on plantations all break this article. Article 23 gives everyone the right to work and fair pay — enslaved people were forced to work their entire lives for nothing.",
              zh: "\u7b2c4\u6761\u7981\u6b62\u4efb\u4f55\u5f62\u5f0f\u7684\u5974\u96b6\u5236\u5ea6\u2014\u2014\u6b63\u662f\u672c\u6587\u6240\u7814\u7a76\u7684\u8fd9\u79cd\u505a\u6cd5\u3002\u7b2c5\u6761\u7981\u6b62\u6b8b\u9177\u6216\u4f8e\u8fb1\u6027\u5bf9\u5f85\u2014\u2014\u4e2d\u95f4\u822a\u7a0b\u7684\u72b6\u51b5\u3001\u5bf9\u88ab\u5974\u5f79\u8005\u7684\u70d9\u5370\uff0c\u4ee5\u53ca\u79cd\u690d\u56ed\u4e0a\u7684\u60e9\u7f5a\u90fd\u8fdd\u53cd\u4e86\u8fd9\u4e00\u6761\u6b3e\u3002\u7b2c23\u6761\u8d4b\u4e88\u6bcf\u4e2a\u4eba\u5de5\u4f5c\u548c\u516c\u5e73\u62a5\u916c\u7684\u6743\u5229\u2014\u2014\u88ab\u5974\u5f79\u8005\u88ab\u8feb\u4e00\u751f\u52b3\u52a8\u5374\u4e00\u65e0\u6240\u83b7\u3002",
            },
            {
              type: "highlight",
              en: "Summary of violations: Article 1 (equality and freedom) — violated from capture. Article 3 (right to life and liberty) — violated by constant violence and control. Article 4 (no slavery) — the slave trade itself breaks this article. Article 5 (no cruel treatment) — broken by conditions on ships and plantations. Article 23 (right to work and fair pay) — violated by forced, unpaid labour. Article 25 (right to adequate food and housing) — violated by poor living conditions.",
              zh: "\u4fb5\u6743\u603b\u7ed3\uff1a\u7b2c1\u6761\uff08\u5e73\u7b49\u4e0e\u81ea\u7531\uff09\u2014\u2014\u4ece\u88ab\u6355\u83b7\u5c31\u5f00\u59cb\u88ab\u4fb5\u72af\u3002\u7b2c3\u6761\uff08\u751f\u547d\u4e0e\u81ea\u7531\u6743\uff09\u2014\u2014\u56e0\u6301\u7eed\u7684\u66b4\u529b\u548c\u63a7\u5236\u800c\u88ab\u4fb5\u72af\u3002\u7b2c4\u6761\uff08\u7981\u6b62\u5974\u96b6\uff09\u2014\u2014\u5974\u96b6\u8d38\u6613\u672c\u8eab\u5c31\u4fb5\u72af\u8fd9\u4e00\u6761\u6b3e\u3002\u7b2c5\u6761\uff08\u7981\u6b62\u6b8b\u9177\u5bf9\u5f85\uff09\u2014\u2014\u8239\u4e0a\u548c\u79cd\u690d\u56ed\u7684\u72b6\u51b5\u5747\u4fb5\u72af\u6b64\u6761\u6b3e\u3002\u7b2c23\u6761\uff08\u5de5\u4f5c\u4e0e\u516c\u5e73\u62a5\u916c\u6743\uff09\u2014\u2014\u56e0\u5f3a\u8feb\u65e0\u507f\u5de5\u4f5c\u800c\u88ab\u4fb5\u72af\u3002\u7b2c25\u6761\uff08\u5145\u8db3\u98df\u7269\u4e0e\u4f4f\u5c4b\u7684\u6743\u5229\uff09\u2014\u2014\u56e0\u6076\u52a3\u7684\u751f\u6d3b\u6761\u4ef6\u800c\u88ab\u4fb5\u72af\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: the UN Declaration was written after the slave trade had already ended. But by going back and applying its principles to the history of slavery, we can see exactly which rights were denied, and why those rights needed to be protected in law. History and human rights are deeply connected.",
              zh: "\u8fd9\u6837\u60f3\u5427\uff1a\u8054\u5408\u56fd\u5ba3\u8a00\u662f\u5728\u5974\u96b6\u8d38\u6613\u5df2\u7ecf\u7ed3\u675f\u4e4b\u540e\u624d\u5236\u5b9a\u7684\u3002\u4f46\u901a\u8fc7\u56de\u9996\u5e76\u5c06\u5176\u539f\u5219\u5e94\u7528\u4e8e\u5974\u96b6\u5236\u5ea6\u7684\u5386\u53f2\uff0c\u6211\u4eec\u53ef\u4ee5\u786e\u5207\u770b\u51fa\u5177\u4f53\u54ea\u4e9b\u6743\u5229\u88ab\u5265\u593a\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u6743\u5229\u9700\u8981\u7528\u6cd5\u5f8b\u4fdd\u62a4\u3002\u5386\u53f2\u4e0e\u4eba\u6743\u5bc6\u4e0d\u53ef\u5206\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Violation",
              zh: "\u4fb5\u72af",
              defEn: "An action that breaks a law, rule, or right.",
              defZh: "\u8fdd\u53cd\u6cd5\u5f8b\u3001\u89c4\u5219\u6216\u6743\u5229\u7684\u884c\u4e3a\u3002",
            },
            {
              en: "Dignity",
              zh: "\u5c0a\u4e25",
              defEn: "The quality of being worthy of respect and honour as a human being.",
              defZh: "\u4f5c\u4e3a\u4eba\u7c7b\u5e94\u5f53\u53d7\u5230\u5c0a\u91cd\u548c\u8363\u8a89\u7684\u54c1\u8d28\u3002",
            },
            {
              en: "Liberty",
              zh: "\u81ea\u7531",
              defEn: "The state of being free from oppression or control; freedom.",
              defZh: "\u514d\u53d7\u538b\u8feb\u6216\u63a7\u5236\u7684\u72b6\u6001\uff1b\u81ea\u7531\u3002",
            },
            {
              en: "Universal",
              zh: "\u666e\u9002",
              defEn: "Applying to all people everywhere, without exception.",
              defZh: "\u9002\u7528\u4e8e\u5404\u5730\u6240\u6709\u4eba\uff0c\u65e0\u4f8b\u5916\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Eleanor Roosevelt holds a copy of the Universal Declaration of Human Rights, 1949",
          captionZh: "\u57c3\u8fea\u4e1d\u00b7\u7f57\u65af\u798f\u6301\u7740\u300a\u4e16\u754c\u4eba\u6743\u5ba3\u8a00\u300b\u526a\u62a5\uff0c1949\u5e74",
          source: "Wikimedia Commons",
          wikimediaFile: "Eleanor_Roosevelt_and_Human_Rights_Declaration.jpg",
        },
        {
          type: "source",
          labelEn: "Linking slavery to the Declaration",
          labelZh: "\u5c06\u5974\u96b6\u5236\u5ea6\u4e0e\u5ba3\u8a00\u76f8\u8fde\u7ed3",
          en: "From the lesson materials: 'Slavery violates Article 1 because enslaved people were not treated as equal in dignity. It violates Article 3 because they were denied liberty and safety. It violates Article 4 because slavery itself is prohibited. It violates Article 5 because enslaved people suffered cruelty and degrading treatment. It violates Article 23 because forced labour is the opposite of fair work.'",
          zh: "\u6765\u81ea\u8bfe\u7a0b\u6750\u6599\uff1a\u201c\u5974\u96b6\u5236\u5ea6\u4fb5\u72af\u4e86\u7b2c1\u6761\uff0c\u56e0\u4e3a\u88ab\u5974\u5f79\u8005\u6ca1\u6709\u88ab\u5e73\u7b49\u5c0a\u91cd\u3002\u5b83\u4fb5\u72af\u4e86\u7b2c3\u6761\uff0c\u56e0\u4e3a\u4ed6\u4eec\u88ab\u5265\u593a\u4e86\u81ea\u7531\u548c\u5b89\u5168\u3002\u5b83\u4fb5\u72af\u4e86\u7b2c4\u6761\uff0c\u56e0\u4e3a\u5974\u96b6\u5236\u5ea6\u672c\u8eab\u5c31\u88ab\u7981\u6b62\u3002\u5b83\u4fb5\u72af\u4e86\u7b2c5\u6761\uff0c\u56e0\u4e3a\u88ab\u5974\u5f79\u8005\u906d\u53d7\u6b8b\u9177\u548c\u4f8e\u8fb1\u6027\u5bf9\u5f85\u3002\u5b83\u4fb5\u72af\u4e86\u7b2c23\u6761\uff0c\u56e0\u4e3a\u5f3a\u8feb\u52b3\u52a8\u4e0e\u516c\u5e73\u5de5\u4f5c\u6070\u6070\u76f8\u53cd\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Which article of the Declaration do you think slavery violated most seriously, and why?",
              qZh: "\u4f60\u8ba4\u4e3a\u5974\u96b6\u5236\u5ea6\u6700\u4e25\u91cd\u5730\u4fb5\u72af\u4e86\u5ba3\u8a00\u4e2d\u7684\u54ea\u4e00\u6761\uff0c\u4e3a\u4ec0\u4e48\uff1f",
              aEn: "Many answers are valid here. Article 4 is the most direct — it explicitly bans slavery. But Article 1, which states all people are born free and equal, could be seen as the most fundamental, since denying this underpins every other violation. Article 3, the right to life and liberty, is also central because enslaved people were denied both from the moment of capture.",
              aZh: "\u8fd9\u91cc\u6709\u8bb8\u591a\u6709\u6548\u7b54\u6848\u3002\u7b2c4\u6761\u662f\u6700\u76f4\u63a5\u7684\u2014\u2014\u5b83\u660e\u786e\u7981\u6b62\u5974\u96b6\u5236\u5ea6\u3002\u4f46\u7b2c1\u6761\uff08\u4eba\u4eba\u751f\u800c\u81ea\u7531\u5e73\u7b49\uff09\u53ef\u88ab\u89c6\u4e3a\u6700\u6839\u672c\u7684\uff0c\u56e0\u4e3a\u5426\u5b9a\u8fd9\u4e00\u70b9\u662f\u6240\u6709\u5176\u4ed6\u4fb5\u72af\u7684\u57fa\u7840\u3002\u7b2c3\u6761\uff08\u751f\u547d\u4e0e\u81ea\u7531\u6743\uff09\u4e5f\u662f\u6838\u5fc3\uff0c\u56e0\u4e3a\u88ab\u5974\u5f79\u8005\u4ece\u88ab\u6355\u83b7\u7684\u90a3\u4e00\u523b\u8d77\u5c31\u88ab\u5265\u593a\u4e86\u8fd9\u4e24\u79cd\u6743\u5229\u3002",
            },
            {
              qEn: "Why is it important that the Declaration of Human Rights was written as a universal document — applying to everyone, everywhere?",
              qZh: "\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4f5c\u4e3a\u4e00\u4e2a\u666e\u9002\u6587\u4ef6\u2014\u2014\u9002\u7528\u4e8e\u4efb\u4f55\u5730\u65b9\u7684\u6240\u6709\u4eba\u2014\u2014\u8fd9\u4e00\u70b9\u4e3a\u4ec0\u4e48\u91cd\u8981\uff1f",
              aEn: "If rights only applied to certain people or certain places, then governments could argue that their citizens did not qualify for protection. The slave trade was justified partly because those running it argued that enslaved Africans were different or inferior. A universal declaration removes any such argument — rights belong to all human beings without exception, regardless of race, nationality, or any other characteristic.",
              aZh: "\u5982\u679c\u6743\u5229\u53ea\u9002\u7528\u4e8e\u7279\u5b9a\u7684\u4eba\u6216\u5730\u65b9\uff0c\u90a3\u4e48\u653f\u5e9c\u5c31\u53ef\u4ee5\u8fa9\u79f0\u5176\u516c\u6c11\u4e0d\u7b26\u5408\u4fdd\u62a4\u6761\u4ef6\u3002\u5974\u96b6\u8d38\u6613\u90e8\u5206\u539f\u56e0\u5728\u4e8e\u5176\u8fd0\u8425\u8005\u8fa9\u79f0\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u4e0d\u540c\u6216\u4f4e\u4e0b\u3002\u666e\u9002\u5ba3\u8a00\u6d88\u9664\u4e86\u8fd9\u4e00\u7c7b\u8fa9\u8bcd\u2014\u2014\u6743\u5229\u5c5e\u4e8e\u6240\u6709\u4eba\u7c7b\uff0c\u65e0\u4f8b\u5916\uff0c\u65e0\u8bba\u79cd\u65cf\u3001\u56fd\u7c4d\u6216\u4efb\u4f55\u5176\u4ed6\u7279\u5f81\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which article of the UN Declaration of Human Rights most directly bans the slave trade itself?",
          qZh: "\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u4e2d\u54ea\u4e00\u6761\u6700\u76f4\u63a5\u7981\u6b62\u5974\u96b6\u8d38\u6613\uff1f",
          opts: [
            { en: "Article 1 — all people are born free and equal", zh: "\u7b2c1\u6761\u2014\u2014\u4eba\u4eba\u751f\u800c\u81ea\u7531\u5e73\u7b49" },
            { en: "Article 4 — no one shall be held in slavery", zh: "\u7b2c4\u6761\u2014\u2014\u4efb\u4f55\u4eba\u4e0d\u5f97\u88ab\u5974\u5f79" },
            { en: "Article 23 — everyone has the right to work and fair pay", zh: "\u7b2c23\u6761\u2014\u2014\u4eba\u4eba\u6709\u6743\u5de5\u4f5c\u5e76\u83b7\u5f97\u516c\u5e73\u62a5\u916c" },
            { en: "Article 26 — everyone has the right to education", zh: "\u7b2c26\u6761\u2014\u2014\u4eba\u4eba\u6709\u63a5\u53d7\u6559\u80b2\u7684\u6743\u5229" },
          ],
          correct: 1,
          explainCorrectEn: "Article 4 of the UN Declaration of Human Rights states that no one shall be held in slavery, and that slavery and the slave trade shall be banned in all their forms. This is the most direct ban on the slave trade within the Declaration.",
          explainCorrectZh: "\u8054\u5408\u56fd\u300a\u4eba\u6743\u5ba3\u8a00\u300b\u7b2c4\u6761\u8bf4\u660e\uff0c\u4efb\u4f55\u4eba\u4e0d\u5f97\u88ab\u5974\u5f79\uff0c\u5e76\u4e14\u4efb\u4f55\u5f62\u5f0f\u7684\u5974\u96b6\u5236\u5ea6\u548c\u5974\u96b6\u8d38\u6613\u5747\u5e94\u88ab\u7981\u6b62\u3002\u8fd9\u662f\u5ba3\u8a00\u4e2d\u5bf9\u5974\u96b6\u8d38\u6613\u6700\u76f4\u63a5\u7684\u7981\u6b62\u3002",
          explainWrongEn: "The correct answer is B — Article 4. Article 1 is about equality and freedom generally, Article 23 is about fair work, and Article 26 is about education. Article 4 is the specific article that bans slavery and the slave trade in all their forms.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u2014\u2014\u7b2c4\u6761\u3002\u7b2c1\u6761\u6d89\u53ca\u4e00\u822c\u610f\u4e49\u4e0a\u7684\u5e73\u7b49\u4e0e\u81ea\u7531\uff0c\u7b2c23\u6761\u6d89\u53ca\u516c\u5e73\u5de5\u4f5c\uff0c\u7b2c26\u6761\u6d89\u53ca\u6559\u80b2\u3002\u7b2c4\u6761\u662f\u7279\u5b9a\u7981\u6b62\u6240\u6709\u5f62\u5f0f\u5974\u96b6\u5236\u5ea6\u548c\u5974\u96b6\u8d38\u6613\u7684\u6761\u6b3e\u3002",
        },
      ],
    },
  ],
};
