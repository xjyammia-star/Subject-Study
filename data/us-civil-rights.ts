import { Topic } from "./types";

export const usCivilRights: Topic = {
  slug: "us-civil-rights",
  name: "The US Civil Rights Movement",
  nameZh: "\u7f8e\u56fd\u6c11\u6743\u8fd0\u52a8",
  subject: "History",
  subjectZh: "\u5386\u53f2",
  year: "Year 8",
  lessons: [
    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "Segregation and Jim Crow",
      titleZh: "\u79cd\u65cf\u9694\u79bb\u4e0e\u5409\u59c6\u00b7\u514b\u52b3\u6cd5",
      subtitle: "Understanding the system of racial discrimination that the Civil Rights Movement fought to end.",
      subtitleZh: "\u7406\u89e3\u6c11\u6743\u8fd0\u52a8\u8bd5\u56fe\u7ec8\u7ed3\u7684\u79cd\u65cf\u6b67\u89c6\u5236\u5ea6\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain what segregation meant in practice for African Americans.", zh: "\u6211\u80fd\u89e3\u91ca\u9694\u79bb\u5236\u5ea6\u5bf9\u975e\u88d4\u7f8e\u56fd\u4eba\u5728\u5b9e\u9645\u751f\u6d3b\u4e2d\u610f\u5473\u7740\u4ec0\u4e48\u3002" },
            { en: "I can describe what the Jim Crow Laws were and how they worked.", zh: "\u6211\u80fd\u63cf\u8ff0\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u662f\u4ec0\u4e48\u4ee5\u53ca\u5b83\u4eec\u662f\u5982\u4f55\u8fd0\u4f5c\u7684\u3002" },
            { en: "I can explain who the KKK were and how they used terror to maintain white supremacy.", zh: "\u6211\u80fd\u89e3\u91ca\u4e09K\u515a\u662f\u8c01\uff0c\u4ee5\u53ca\u4ed6\u4eec\u5982\u4f55\u4f7f\u7528\u6050\u6016\u624b\u6bb5\u7ef4\u6301\u767d\u4eba\u81f3\u4e0a\u4e3b\u4e49\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "After the American Civil War ended slavery in 1865, African Americans were legally free — but freedom on paper did not mean equality in practice. Especially in the southern states, a system of racial segregation was built that kept Black and white Americans separated in almost every area of daily life.",
              zh: "1865 \u5e74\u7f8e\u56fd\u5185\u6218\u7ed3\u675f\u5e76\u5e9f\u9664\u5976\u96b6\u5236\u5ea6\u540e\uff0c\u975e\u88d4\u7f8e\u56fd\u4eba\u5728\u6cd5\u5f8b\u4e0a\u83b7\u5f97\u4e86\u81ea\u7531\u2014\u2014\u4f46\u5199\u5728\u7eb8\u4e0a\u7684\u81ea\u7531\u5e76\u4e0d\u610f\u5473\u7740\u5b9e\u9645\u7684\u5e73\u7b49\u3002\u5c24\u5176\u5728\u5357\u65b9\u5404\u5dde\uff0c\u4e00\u5957\u79cd\u65cf\u9694\u79bb\u5236\u5ea6\u5efa\u7acb\u8d77\u6765\uff0c\u51e0\u4e4e\u5c06\u9ed1\u767d\u4e24\u79cd\u7f8e\u56fd\u4eba\u5728\u65e5\u5e38\u751f\u6d3b\u7684\u6bcf\u4e2a\u9886\u57df\u5206\u5f00\u3002",
            },
            {
              type: "text",
              en: "The Jim Crow Laws were a set of state and local laws across the South that enforced racial segregation. They required separate schools, separate restaurants, separate buses, separate bathrooms, and separate drinking fountains for Black and white Americans. The term 'separate but equal' was used to justify this system — but in practice, facilities for Black people were almost always far inferior.",
              zh: "\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u662f\u5357\u65b9\u5404\u5dde\u548c\u5730\u65b9\u5f3a\u5236\u79cd\u65cf\u9694\u79bb\u7684\u4e00\u7cfb\u5217\u6cd5\u5f8b\u3002\u8fd9\u4e9b\u6cd5\u5f8b\u8981\u6c42\u9ed1\u767d\u7f8e\u56fd\u4eba\u5206\u5c45\u4e0d\u540c\u7684\u5b66\u6821\u3001\u9910\u5385\u3001\u516c\u4ea4\u8f66\u3001\u536b\u751f\u95f4\u548c\u996e\u6c34\u673a\u3002\u201c\u5206\u5f00\u4f46\u5e73\u7b49\u201d\u88ab\u7528\u6765\u4e3a\u8fd9\u4e00\u5236\u5ea6\u8fa9\u62a4\u2014\u2014\u4f46\u5b9e\u9645\u4e0a\uff0c\u4e3a\u9ed1\u4eba\u63d0\u4f9b\u7684\u8bbe\u65bd\u51e0\u4e4e\u603b\u662f\u8fdc\u8fdc\u5dee\u4e8e\u767d\u4eba\u7684\u8bbe\u65bd\u3002",
            },
            {
              type: "highlight",
              en: "Key facts about segregation: Black Americans were denied the right to vote through poll taxes and literacy tests. African Americans faced severe restrictions on jobs, housing, and education. The Ku Klux Klan used terror — including lynching, bombings, and threats — to keep Black people from asserting their rights. Many African Americans moved north to escape the worst forms of southern segregation.",
              zh: "\u5173\u4e8e\u9694\u79bb\u5236\u5ea6\u7684\u5173\u952e\u4e8b\u5b9e\uff1a\u9ed1\u4eba\u901a\u8fc7\u4eba\u5934\u7a0e\u548c\u8bc6\u5b57\u6d4b\u8bd5\u88ab\u5254\u593a\u6295\u7968\u6743\u3002\u975e\u88d4\u7f8e\u56fd\u4eba\u5728\u5c31\u4e1a\u3001\u4f4f\u623f\u548c\u6559\u80b2\u65b9\u9762\u9762\u4e34\u4e25\u91cd\u9650\u5236\u3002\u4e09K\u515a\u901a\u8fc7\u6050\u6016\u624b\u6bb5\u2014\u2014\u5305\u62ec\u79c1\u523d\u3001\u70b8\u5f39\u548c\u5a01\u80c1\u2014\u2014\u963b\u6b62\u9ed1\u4eba\u4e3b\u5f20\u81ea\u5df1\u7684\u6743\u5229\u3002\u8bb8\u591a\u975e\u88d4\u7f8e\u56fd\u4eba\u8fc1\u5f80\u5317\u65b9\uff0c\u4ee5\u903f\u514d\u5357\u65b9\u6700\u4e25\u9177\u7684\u9694\u79bb\u5f62\u5f0f\u3002",
            },
            {
              type: "example",
              en: "Think about what it would feel like if your school told you that you had to use different doors, sit at different tables, and drink from different water fountains — not because of anything you had done, but simply because of the colour of your skin. Now imagine that the law actually required this, and that anyone who protested could be attacked or arrested. That is what segregation felt like in practice for millions of African Americans.",
              zh: "\u60f3\u8c61\u4e00\u4e0b\uff0c\u5982\u679c\u4f60\u7684\u5b66\u6821\u8981\u6c42\u4f60\u4f7f\u7528\u4e0d\u540c\u7684\u95e8\u3001\u5750\u5728\u4e0d\u540c\u7684\u6842\u5b50\u65c1\u3001\u4f7f\u7528\u4e0d\u540c\u7684\u996e\u6c34\u673a\u2014\u2014\u4e0d\u662f\u56e0\u4e3a\u4f60\u505a\u4e86\u4ec0\u4e48\uff0c\u800c\u662f\u5355\u7eaf\u56e0\u4e3a\u4f60\u7684\u80a4\u8272\u3002\u73b0\u5728\u60f3\u8c61\u6cd5\u5f8b\u771f\u7684\u89c4\u5b9a\u4e86\u8fd9\u4e9b\uff0c\u4efb\u4f55\u62b5\u8b70\u90fd\u53ef\u80fd\u9047\u5230\u88ad\u51fb\u6216\u88ab\u6355\u3002\u8fd9\u5c31\u662f\u9694\u79bb\u5236\u5ea6\u5bf9\u6570\u767e\u4e07\u975e\u88d4\u7f8e\u56fd\u4eba\u7684\u5b9e\u9645\u611f\u53d7\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Segregation", zh: "\u79cd\u65cf\u9694\u79bb", defEn: "The enforced separation of people based on race, keeping Black and white Americans apart in public spaces.", defZh: "\u57fa\u4e8e\u79cd\u65cf\u5f3a\u5236\u5206\u9694\u4eba\u7fa4\uff0c\u5c06\u9ed1\u767d\u7f8e\u56fd\u4eba\u5206\u5f00\u5728\u4e0d\u540c\u7684\u516c\u5171\u573a\u6240\u3002" },
            { en: "Jim Crow Laws", zh: "\u5409\u59c6\u00b7\u514b\u52b3\u6cd5", defEn: "State and local laws in the American South that enforced racial segregation from the 1870s to the 1960s.", defZh: "1870 \u5e74\u4ee3\u81f3 1960 \u5e74\u4ee3\u7f8e\u56fd\u5357\u65b9\u5404\u5dde\u548c\u5730\u65b9\u5f3a\u5236\u5b9e\u884c\u79cd\u65cf\u9694\u79bb\u7684\u6cd5\u5f8b\u3002" },
            { en: "KKK (Ku Klux Klan)", zh: "\u4e09K\u515a", defEn: "A white supremacist organisation that used terror, violence, and intimidation to prevent Black Americans from exercising their rights.", defZh: "\u4e00\u4e2a\u767d\u4eba\u81f3\u4e0a\u4e3b\u4e49\u7ec4\u7ec7\uff0c\u901a\u8fc7\u6050\u6016\u3001\u66b4\u529b\u548c\u5a01\u80c1\u963b\u6b62\u9ed1\u4eba\u884c\u4f7f\u81ea\u5df1\u7684\u6743\u5229\u3002" },
            { en: "NAACP", zh: "\u5168\u56fd\u6709\u8272\u4eba\u5148\u8fdb\u534f\u8fdb\u4f1a", defEn: "The National Association for the Advancement of Colored People — one of the oldest and most influential civil rights organisations in the United States.", defZh: "\u7f8e\u56fd\u5168\u56fd\u6709\u8272\u4eba\u79cd\u5148\u8fdb\u534f\u4f1a\u2014\u2014\u7f8e\u56fd\u5386\u53f2\u6700\u60a0\u4e45\u3001\u6700\u5177\u5f71\u54cd\u529b\u7684\u6c11\u6743\u7ec4\u7ec7\u4e4b\u4e00\u3002" },
          ],
        },
        {
          type: "image",
          caption: "Segregated facilities were a daily reality across the American South — signs like these enforced the separation of Black and white Americans",
          captionZh: "\u9694\u79bb\u8bbe\u65bd\u662f\u7f8e\u56fd\u5357\u65b9\u65e5\u5e38\u751f\u6d3b\u7684\u73b0\u5b9e\u2014\u2014\u7c7b\u4f3c\u8fd9\u6837\u7684\u6807\u724c\u5f3a\u5236\u9694\u79bb\u9ed1\u767d\u7f8e\u56fd\u4eba",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Segregation_1938.jpg",
        },
        {
          type: "source",
          labelEn: "From classroom materials: introducing the Civil Rights Movement",
          labelZh: "\u6765\u81ea\u8bfe\u5802\u6750\u6599\uff1a\u6c11\u6743\u8fd0\u52a8\u5bfc\u8bba",
          en: "Black and white people were separated on buses, in restaurants, and in churches. African Americans faced unequal education and severe restrictions on voting. Many white southerners used racism, intimidation, and violence to preserve power. The KKK used terror, lynching, bombings, and threats to stop Black people asserting their rights. The Civil Rights Movement brought Black and white activists together to fight segregation and racism, aiming to achieve full legal equality.",
          zh: "\u9ed1\u4eba\u548c\u767d\u4eba\u5728\u516c\u4ea4\u8f66\u3001\u9910\u5385\u548c\u6559\u5802\u5185\u88ab\u5206\u9694\u3002\u975e\u88d4\u7f8e\u56fd\u4eba\u9762\u4e34\u4e0d\u5e73\u7b49\u7684\u6559\u80b2\u548c\u4e25\u82db\u7684\u6295\u7968\u9650\u5236\u3002\u8bb8\u591a\u767d\u4eba\u5357\u65b9\u4eba\u5229\u7528\u79cd\u65cf\u4e3b\u4e49\u3001\u5a01\u80c1\u548c\u66b4\u529b\u6765\u7ef4\u62a4\u6743\u529b\u3002\u4e09K\u515a\u901a\u8fc7\u6050\u6016\u3001\u79c1\u523d\u3001\u70b8\u5f39\u548c\u5a01\u80c1\u963b\u6b62\u9ed1\u4eba\u4e3b\u5f20\u81ea\u5df1\u7684\u6743\u5229\u3002\u6c11\u6743\u8fd0\u52a8\u5c06\u9ed1\u4eba\u548c\u767d\u4eba\u6d3b\u52a8\u4eba\u58eb\u805a\u5728\u4e00\u8d77\uff0c\u5171\u540c\u53cd\u5bf9\u9694\u79bb\u548c\u79cd\u65cf\u4e3b\u4e49\uff0c\u76ee\u6807\u662f\u5b9e\u73b0\u5b8c\u5168\u7684\u6cd5\u5f8b\u5e73\u7b49\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Jim Crow Laws were passed by elected state governments. What does this tell us about the limits of democracy in the American South at the time?",
              qZh: "\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u662f\u7531\u6c11\u9009\u5dde\u653f\u5e9c\u901a\u8fc7\u7684\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\uff0c\u5f53\u65f6\u7f8e\u56fd\u5357\u65b9\u7684\u6c11\u4e3b\u5236\u5ea6\u6709\u4ec0\u4e48\u5c40\u9650\u6027\uff1f",
              aEn: "It shows that democracy only works properly when all citizens can participate equally. In the American South, Black Americans were prevented from voting through poll taxes, literacy tests, and outright intimidation. This meant that elected governments could pass laws that harmed a large part of the population — because that population had no political power to stop them. A democracy that excludes some of its citizens is not a true democracy.",
              aZh: "\u8fd9\u8bf4\u660e\uff0c\u6c11\u4e3b\u5236\u5ea6\u53ea\u6709\u5728\u6240\u6709\u516c\u6c11\u80fd\u591f\u5e73\u7b49\u53c2\u4e0e\u7684\u60c5\u51b5\u4e0b\u624d\u80fd\u5c55\u73b0\u5176\u771f\u5b9e\u529f\u80fd\u3002\u5728\u7f8e\u56fd\u5357\u65b9\uff0c\u9ed1\u4eba\u88ab\u4eba\u5934\u7a0e\u3001\u8bc6\u5b57\u6d4b\u8bd5\u548c\u76f4\u63a5\u7684\u5a01\u80c1\u963b\u6b62\u6295\u7968\u3002\u8fd9\u610f\u5473\u7740\u6c11\u9009\u653f\u5e9c\u53ef\u4ee5\u901a\u8fc7\u5bb3\u53ca\u5927\u91cf\u4eba\u53e3\u7684\u6cd5\u5f8b\u2014\u2014\u56e0\u4e3a\u8fd9\u90e8\u5206\u4eba\u53e3\u6ca1\u6709\u4efb\u4f55\u653f\u6cbb\u529b\u91cf\u52a0\u4ee5\u963b\u6b62\u3002\u4e00\u4e2a\u6392\u9664\u90e8\u5206\u516c\u6c11\u7684\u6c11\u4e3b\u5236\u5ea6\u4e0d\u662f\u771f\u6b63\u7684\u6c11\u4e3b\u5236\u5ea6\u3002",
            },
            {
              qEn: "Why do you think many African Americans moved north to escape segregation? What problems might they still have faced even after moving?",
              qZh: "\u4f60\u8ba4\u4e3a\u4e3a\u4ec0\u4e48\u8bb8\u591a\u975e\u88d4\u7f8e\u56fd\u4eba\u8fc1\u5f80\u5317\u65b9\u4ee5\u907f\u514d\u9694\u79bb\uff1f\u5373\u4f7f\u8fc1\u5c45\u540e\uff0c\u4ed6\u4eec\u53ef\u80fd\u4ecd\u9762\u4e34\u54ea\u4e9b\u95ee\u9898\uff1f",
              aEn: "Moving north offered escape from the legal segregation of Jim Crow, which was a law of the southern states. However, even in the north, African Americans faced discrimination in housing, employment, and education — just without the formal legal system enforcing it. Landlords refused to rent to Black families. Employers paid lower wages or refused to hire. This shows that racism was not just a southern problem — it was a national problem that went far beyond written law.",
              aZh: "\u8fc1\u5f80\u5317\u65b9\u53ef\u4ee5\u907f\u514d\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u7684\u6cd5\u5f8b\u9694\u79bb\uff0c\u8fd9\u662f\u5357\u65b9\u5404\u5dde\u7684\u6cd5\u5f8b\u5236\u5ea6\u3002\u7136\u800c\uff0c\u5373\u4f7f\u5728\u5317\u65b9\uff0c\u975e\u88d4\u7f8e\u56fd\u4eba\u4ecd\u5728\u4f4f\u623f\u3001\u5c31\u4e1a\u548c\u6559\u80b2\u65b9\u9762\u9762\u4e34\u6b67\u89c6\u2014\u2014\u53ea\u662f\u6ca1\u6709\u6b63\u5f0f\u6cd5\u5f8b\u5236\u5ea6\u5728\u5f3a\u5236\u6267\u884c\u3002\u623f\u4e1c\u62d2\u7edd\u5c06\u623f\u5b50\u79df\u7ed9\u9ed1\u4eba\u5bb6\u5ead\u3002\u96c7\u4e3b\u652f\u4ed8\u66f4\u4f4e\u5de5\u8d44\u6216\u62d2\u7edd\u96c7\u7528\u3002\u8fd9\u8bf4\u660e\u79cd\u65cf\u4e3b\u4e49\u5e76\u975e\u4ec5\u4ec5\u662f\u5357\u65b9\u7684\u95ee\u9898\u2014\u2014\u5b83\u662f\u4e00\u4e2a\u8fdc\u8d85\u51fa\u6210\u6587\u6cd5\u5f8b\u7684\u5168\u56fd\u6027\u95ee\u9898\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What were the Jim Crow Laws?",
          qZh: "\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "Laws that gave African Americans full voting rights after the Civil War", zh: "\u5185\u6218\u540e\u8d4b\u4e88\u975e\u88d4\u7f8e\u56fd\u4eba\u5b8c\u6574\u6295\u7968\u6743\u7684\u6cd5\u5f8b" },
            { en: "State and local laws that enforced racial segregation across the American South", zh: "\u5728\u7f8e\u56fd\u5357\u65b9\u5f3a\u5236\u5b9e\u884c\u79cd\u65cf\u9694\u79bb\u7684\u5dde\u548c\u5730\u65b9\u6cd5\u5f8b" },
            { en: "Federal laws passed by Congress to end slavery", zh: "\u56fd\u4f1a\u901a\u8fc7\u7684\u7528\u4ee5\u5e9f\u9664\u5976\u96b6\u5236\u5ea6\u7684\u8054\u90a6\u6cd5\u5f8b" },
            { en: "Laws that made it illegal to discriminate against African Americans", zh: "\u4f7f\u5c31\u975e\u88d4\u7f8e\u56fd\u4eba\u5b9e\u884c\u6b67\u89c6\u4e3a\u975e\u6cd5\u7684\u6cd5\u5f8b" },
          ],
          correct: 1,
          explainCorrectEn: "The Jim Crow Laws were state and local laws across the American South that enforced racial segregation — requiring separate schools, restaurants, buses, and other facilities for Black and white Americans. They were in force from roughly the 1870s until the Civil Rights Act of 1964 finally overturned them.",
          explainCorrectZh: "\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u662f\u7f8e\u56fd\u5357\u65b9\u5404\u5dde\u548c\u5730\u65b9\u5f3a\u5236\u5b9e\u884c\u79cd\u65cf\u9694\u79bb\u7684\u6cd5\u5f8b\u2014\u2014\u8981\u6c42\u9ed1\u767d\u7f8e\u56fd\u4eba\u5206\u5c45\u4e0d\u540c\u7684\u5b66\u6821\u3001\u9910\u5385\u3001\u516c\u4ea4\u8f66\u548c\u5176\u4ed6\u8bbe\u65bd\u3002\u5b83\u4eec\u5927\u7ea6\u4ece 1870 \u5e74\u4ee3\u8d77\u751f\u6548\uff0c\u76f4\u5230 1964 \u5e74\u300a\u6c11\u6743\u6cd5\u6848\u300b\u6700\u7ec8\u5c06\u5176\u5e9f\u9664\u3002",
          explainWrongEn: "The correct answer is B. The Jim Crow Laws did the opposite of options A and D — they restricted rights rather than protected them. They were not federal laws passed by Congress (option C), but state and local laws that varied across the South.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u5409\u59c6\u00b7\u514b\u52b3\u6cd5\u7684\u4f5c\u7528\u4e0e\u9009\u9879A\u548cD\u6070\u6070\u76f8\u53cd\u2014\u2014\u5b83\u4eec\u9650\u5236\u6743\u5229\u800c\u975e\u4fdd\u62a4\u6743\u5229\u3002\u5b83\u4eec\u4e0d\u662f\u56fd\u4f1a\u901a\u8fc7\u7684\u8054\u90a6\u6cd5\u5f8b\uff08\u9009\u9879C\uff09\uff0c\u800c\u662f\u5357\u65b9\u5404\u5730\u4e0d\u540c\u7684\u5dde\u548c\u5730\u65b9\u6cd5\u5f8b\u3002",
        },
      ],
    },
    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "Brown v. Board of Education, 1954",
      titleZh: "\u5e03\u6717\u8bc9\u6559\u80b2\u59d4\u5458\u4f1a\u6848\uff0c1954\u5e74",
      subtitle: "How a Supreme Court ruling began the legal attack on segregation.",
      subtitleZh: "\u6700\u9ad8\u6cd5\u9662\u7684\u88c1\u51b3\u5982\u4f55\u5f00\u59cb\u5bf9\u9694\u79bb\u5236\u5ea6\u7684\u6cd5\u5f8b\u8fdb\u653b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain why Oliver Brown took the case to the Supreme Court.", zh: "\u6211\u80fd\u89e3\u91ca\u5965\u5229\u5f17\u00b7\u5e03\u6717\u4e3a\u4ec0\u4e48\u5c06\u6848\u4ef6\u63d0\u5230\u6700\u9ad8\u6cd5\u9662\u3002" },
            { en: "I can describe what the Supreme Court decided and why it mattered.", zh: "\u6211\u80fd\u63cf\u8ff0\u6700\u9ad8\u6cd5\u9662\u7684\u88c1\u51b3\u4ee5\u53ca\u5b83\u4e3a\u4ec0\u4e48\u91cd\u8981\u3002" },
            { en: "I can explain the significance of Brown v. Board as a turning point in the Civil Rights Movement.", zh: "\u6211\u80fd\u89e3\u91ca\u5e03\u6717\u8bc9\u6559\u80b2\u59d4\u5458\u4f1a\u6848\u4f5c\u4e3a\u6c11\u6743\u8fd0\u52a8\u8f6c\u6298\u70b9\u7684\u91cd\u8981\u6027\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "In 1951, Oliver Brown, an African American father in Topeka, Kansas, tried to enrol his daughter Linda in a white elementary school near their home. She was refused — under Kansas state law, Black and white children had to attend separate schools. Brown, supported by the NAACP, decided to take the case all the way to the Supreme Court.",
              zh: "1951 \u5e74\uff0c\u5965\u5229\u5f17\u00b7\u5e03\u6717\uff0c\u5361\u7f57\u6765\u7eb3\u5dde\u6258\u76ae\u5361\u7684\u4e00\u4f4d\u975e\u88d4\u7f8e\u56fd\u7236\u4eb2\uff0c\u8bd5\u56fe\u5c06\u5973\u5150\u6797\u8fbe\u9001\u8fdb\u4ed8\u8fd1\u7684\u4e00\u6240\u767d\u4eba\u5c0f\u5b66\u5c31\u8bfb\u3002\u5979\u88ab\u62d2\u7edd\u5165\u5b66\u2014\u2014\u6839\u636e\u5361\u7f57\u6765\u7eb3\u5dde\u6cd5\u5f8b\uff0c\u9ed1\u767d\u513f\u7ae5\u5fc5\u987b\u5206\u5f00\u5c31\u8bfb\u3002\u5e03\u6717\u5f97\u5230 NAACP \u7684\u652f\u6301\uff0c\u51b3\u5b9a\u5c06\u6848\u4ef6\u4e00\u8def\u63d0\u5230\u6700\u9ad8\u6cd5\u9662\u3002",
            },
            {
              type: "text",
              en: "The NAACP lawyer Thurgood Marshall argued brilliantly that separate schools could never truly be equal — not just in buildings and resources, but in the message they sent to Black children about their own worth. The case reached Chief Justice Earl Warren, who led the Supreme Court to a unanimous verdict in 1954.",
              zh: "NAACP \u5f8b\u5e08\u745f\u826f\u5fb7\u00b7\u9a6c\u6b47\u5c14\u5728\u8fa9\u62a4\u4e2d\u5f15\u4eba\u5165\u80dc\u5730\u8bc1\u660e\uff0c\u5206\u5f00\u7684\u5b66\u6821\u6c38\u8fdc\u65e0\u6cd5\u771f\u6b63\u5e73\u7b49\u2014\u2014\u4e0d\u4ec5\u662f\u5728\u6821\u820d\u548c\u8d44\u6e90\u4e0a\uff0c\u66f4\u5728\u4e8e\u5b83\u4eec\u5411\u9ed1\u4eba\u5c0f\u5b69\u4f20\u9012\u7684\u5173\u4e8e\u81ea\u8eab\u4ef7\u5024\u7684\u4fe1\u606f\u3002\u6848\u4ef6\u4ea4\u7531\u9996\u5e2d\u5927\u6cd5\u5b98\u5384\u5c14\u00b7\u6c83\u4f26\u5904\u7406\uff0c\u5e26\u9886\u6700\u9ad8\u6cd5\u9662\u4e8e 1954 \u5e74\u505a\u51fa\u4e86\u4e00\u81f4\u88c1\u51b3\u3002",
            },
            {
              type: "highlight",
              en: "The Supreme Court's verdict: segregated public schools were unconstitutional. The idea of 'separate but equal' was struck down. This was a massive legal victory — but it did not end segregation overnight. Many southern states refused to comply, and implementation was slow and bitterly contested.",
              zh: "\u6700\u9ad8\u6cd5\u9662\u88c1\u51b3\uff1a\u9694\u79bb\u7684\u516c\u7acb\u5b66\u6821\u5c5e\u4e8e\u8fdd\u5baa\u3002\u201c\u5206\u5f00\u4f46\u5e73\u7b49\u201d\u7684\u89c2\u5ff5\u88ab\u5e9f\u9664\u3002\u8fd9\u662f\u4e00\u6b21\u5de8\u5927\u7684\u6cd5\u5f8b\u80dc\u5229\u2014\u2014\u4f46\u5b83\u5e76\u6ca1\u6709\u4e00\u5920\u7ec8\u7ed3\u9694\u79bb\u5236\u5ea6\u3002\u8bb8\u591a\u5357\u65b9\u5dde\u62d2\u7edd\u670d\u4ece\uff0c\u5b9e\u65bd\u8fc7\u7a0b\u7f13\u6162\u4e14\u5145\u6ee1\u6fc0\u70c8\u4e89\u8bae\u3002",
            },
            {
              type: "example",
              en: "Think of it like winning an argument with a referee — the referee says you are right, but the other team simply refuses to follow the ruling and keeps playing by their own rules. The law said segregated schools were wrong, but changing the reality required years more struggle, protests, and federal intervention. Winning in court was the beginning, not the end.",
              zh: "\u8fd9\u5c31\u50cf\u8d62\u5f97\u4e86\u88c1\u5224\u5458\u7684\u88c1\u5224\u2014\u2014\u88c1\u5224\u5458\u8bf4\u4f60\u662f\u5bf9\u7684\uff0c\u4f46\u5bf9\u65b9\u961f\u4f0d\u5c31\u662f\u4e0d\u6309\u7167\u88c1\u5224\u6267\u884c\uff0c\u4ecd\u6309\u81ea\u5df1\u7684\u89c4\u5219\u6765\u6bd4\u8d5b\u3002\u6cd5\u5f8b\u8bf4\u9694\u79bb\u5b66\u6821\u662f\u9519\u7684\uff0c\u4f46\u6539\u53d8\u73b0\u5b9e\u9700\u8981\u66f4\u591a\u5e74\u7684\u6597\u4e89\u3001\u629a\u9b41\u548c\u8054\u90a6\u5e72\u9884\u3002\u5728\u6cd5\u5f8b\u4e0a\u7684\u80dc\u5229\u662f\u5f00\u59cb\uff0c\u800c\u4e0d\u662f\u7ed3\u675f\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Supreme Court", zh: "\u6700\u9ad8\u6cd5\u9662", defEn: "The highest court in the United States, whose rulings on constitutional law apply to the whole country.", defZh: "\u7f8e\u56fd\u6700\u9ad8\u7ea7\u6cd5\u9662\uff0c\u5176\u5173\u4e8e\u5baa\u6cd5\u6cd5\u5f8b\u7684\u88c1\u51b3\u9002\u7528\u4e8e\u5168\u56fd\u3002" },
            { en: "Unconstitutional", zh: "\u8fdd\u5baa", defEn: "Against the principles or rules set out in the country's constitution — and therefore illegal.", defZh: "\u8fdd\u53cd\u56fd\u5bb6\u5baa\u6cd5\u6240\u8bbe\u5b9a\u7684\u539f\u5219\u6216\u89c4\u5219\u2014\u2014\u56e0\u6b64\u5c5e\u4e8e\u975e\u6cd5\u3002" },
            { en: "Separate but equal", zh: "\u5206\u5f00\u4f46\u5e73\u7b49", defEn: "The legal doctrine used to justify racial segregation — struck down by Brown v. Board in 1954.", defZh: "\u7528\u6765\u4e3a\u79cd\u65cf\u9694\u79bb\u8fa9\u62a4\u7684\u6cd5\u5f8b\u5b66\u8bf4\u2014\u2014\u4e8e 1954 \u5e74\u5e03\u6717\u6848\u88c1\u51b3\u4e2d\u88ab\u5e9f\u9664\u3002" },
            { en: "Unanimous verdict", zh: "\u4e00\u81f4\u88c1\u51b3", defEn: "A decision in which every judge agrees — making it the strongest possible legal ruling.", defZh: "\u6240\u6709\u6cd5\u5b98\u5747\u8d5e\u540c\u7684\u88c1\u51b3\u2014\u2014\u662f\u6cd5\u5f8b\u4e0a\u6700\u5177\u6548\u529b\u7684\u88c1\u51b3\u5f62\u5f0f\u3002" },
          ],
        },
        {
          type: "image",
          caption: "Thurgood Marshall (centre) and NAACP lawyers outside the Supreme Court after the Brown v. Board ruling, 1954",
          captionZh: "\u745f\u826f\u5fb7\u00b7\u9a6c\u6b47\u5c14\uff08\u4e2d\uff09\u548c NAACP \u5f8b\u5e08\u4e8e 1954 \u5e74\u5e03\u6717\u6848\u88c1\u51b3\u540e\u5728\u6700\u9ad8\u6cd5\u9662\u5916\u5090",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thurgoodmarshall1967.jpg",
        },
        {
          type: "source",
          labelEn: "Chief Justice Earl Warren, Supreme Court ruling, 1954",
          labelZh: "\u9996\u5e2d\u5927\u6cd5\u5b98\u5c14\u00b7\u6c83\u4f26\uff0c\u6700\u9ad8\u6cd5\u9662\u88c1\u51b3\uff0c1954 \u5e74",
          en: "The Supreme Court ruled that in the field of public education, the doctrine of 'separate but equal' has no place. Separate educational facilities are inherently unequal. The Court concluded that the segregation of children in public schools solely on the basis of race deprives children of the minority group of equal educational opportunities.",
          zh: "\u6700\u9ad8\u6cd5\u9662\u88c1\u5b9a\uff0c\u5728\u516c\u5171\u6559\u80b2\u9886\u57df\uff0c\u201c\u5206\u5f00\u4f46\u5e73\u7b49\u201d\u7684\u539f\u5219\u6ca1\u6709\u7acb\u8db3\u4e4b\u5730\u3002\u5206\u5f00\u7684\u6559\u80b2\u8bbe\u65bd\u672c\u8d28\u4e0a\u662f\u4e0d\u5e73\u7b49\u7684\u3002\u6cd5\u9662\u7ed3\u8bba\u8ba4\u4e3a\uff0c\u4ec5\u57fa\u4e8e\u79cd\u65cf\u5c31\u5c06\u5152\u7ae5\u9694\u79bb\u5728\u516c\u7acb\u5b66\u6821\u4e2d\u5c31\u8bfb\uff0c\u5258\u593a\u4e86\u5c11\u6570\u65cf\u88d4\u5150\u7ae5\u83b7\u5f97\u5e73\u7b49\u6559\u80b2\u673a\u4f1a\u7684\u6743\u5229\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Supreme Court ruled in 1954 that segregated schools were unconstitutional. But many southern states simply refused to obey. What does this tell us about the limits of law on its own as a tool for changing society?",
              qZh: "1954 \u5e74\u6700\u9ad8\u6cd5\u9662\u88c1\u5b9a\u9694\u79bb\u5b66\u6821\u8fdd\u5baa\u3002\u4f46\u8bb8\u591a\u5357\u65b9\u5dde\u5c31\u662f\u62d2\u7edd\u670d\u4ece\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\uff0c\u5355\u9760\u6cd5\u5f8b\u4f5c\u4e3a\u6539\u53d8\u793e\u4f1a\u7684\u5de5\u5177\u6709\u4ec0\u4e48\u5c40\u9650\u6027\uff1f",
              aEn: "Law alone is not enough to change deeply held attitudes and practices. The Brown ruling showed that a legal victory can be won without immediately changing real life. Southern states found ways to delay, resist, and avoid compliance for years. This is exactly why civil rights activists continued to protest, march, and organise even after the legal ruling — they understood that changing the law was necessary but not sufficient. Real change required public pressure, federal enforcement, and a shift in attitudes.",
              aZh: "\u4ec5\u9760\u6cd5\u5f8b\u8fd8\u4e0d\u8db3\u4ee5\u6539\u53d8\u6839\u6df1\u8482\u56fa\u7684\u6001\u5ea6\u548c\u505a\u6cd5\u3002\u5e03\u6717\u6848\u7684\u88c1\u51b3\u8bf4\u660e\uff0c\u6cd5\u5f8b\u4e0a\u7684\u80dc\u5229\u5e76\u4e0d\u4e00\u5b9a\u80fd\u7acb\u5373\u6539\u53d8\u73b0\u5b9e\u751f\u6d3b\u3002\u5357\u65b9\u5404\u5dde\u60f3\u65b9\u8bbe\u6cd5\u8fdf\u5ef6\u3001\u6297\u62d2\u548c\u9003\u907f\u670d\u4ece\u591a\u5e74\u3002\u8fd9\u6b63\u662f\u6c11\u6743\u6d3b\u52a8\u4eba\u58eb\u5373\u4f7f\u5728\u6cd5\u5f8b\u88c1\u51b3\u540e\u4ecd\u7ee7\u7eed\u629a\u9b41\u3001\u6e38\u884c\u548c\u7ec4\u7ec7\u7684\u539f\u56e0\u2014\u2014\u4ed6\u4eec\u660e\u767d\uff0c\u6539\u53d8\u6cd5\u5f8b\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u8fd8\u4e0d\u591f\u3002\u771f\u6b63\u7684\u6539\u53d8\u9700\u8981\u516c\u4f17\u538b\u529b\u3001\u8054\u90a6\u6267\u6cd5\u548c\u6001\u5ea6\u8f6c\u53d8\u3002",
            },
            {
              qEn: "Why was it important that Thurgood Marshall used legal arguments — rather than protests or marches — to challenge segregation in this case?",
              qZh: "\u4e3a\u4ec0\u4e48\u745f\u826f\u5fb7\u00b7\u9a6c\u6b47\u5c14\u5728\u6b64\u6848\u4e2d\u91c7\u7528\u6cd5\u5f8b\u8bba\u8bc1\u2014\u2014\u800c\u975e\u629a\u9b41\u6216\u6e38\u884c\u2014\u2014\u6765\u6311\u6218\u9694\u79bb\u5236\u5ea6\u5f88\u91cd\u8981\uff1f",
              aEn: "Using legal arguments made the challenge impossible to ignore or dismiss as disorder. By attacking segregation through the courts, Marshall forced the government's own legal system to confront its own contradiction — a country that claimed to believe in equality while enshrining inequality in law. A legal victory in the Supreme Court had a force and legitimacy that protests alone could not achieve. It showed that the Civil Rights Movement was fighting not just for moral justice, but for the law to match its own stated principles.",
              aZh: "\u4f7f\u7528\u6cd5\u5f8b\u8bba\u8bc1\u4f7f\u5f97\u8fd9\u4e00\u6311\u6218\u65e0\u6cd5\u88ab\u5ffd\u89c6\u6216\u80b2\u5b9a\u4e3a\u9a9a\u4e71\u3002\u901a\u8fc7\u5bf9\u6cd5\u5f8b\u7cfb\u7edf\u8fdb\u884c\u6311\u6218\uff0c\u9a6c\u6b47\u5c14\u8feb\u4f7f\u653f\u5e9c\u7684\u6cd5\u5f8b\u5236\u5ea6\u672c\u8eab\u9762\u5bf9\u5176\u5185\u5728\u77db\u76fe\u2014\u2014\u4e00\u4e2a\u5ba3\u79f0\u76f8\u4fe1\u5e73\u7b49\u5374\u5c06\u4e0d\u5e73\u7b49\u5199\u5165\u6cd5\u5f8b\u7684\u56fd\u5bb6\u3002\u6700\u9ad8\u6cd5\u9662\u7684\u6cd5\u5f8b\u80dc\u5229\u5177\u6709\u629a\u9b41\u72ec\u81ea\u65e0\u6cd5\u5b9e\u73b0\u7684\u529b\u91cf\u548c\u5408\u6cd5\u6027\u3002\u8fd9\u8bf4\u660e\u6c11\u6743\u8fd0\u52a8\u4e0d\u4ec5\u662f\u5728\u4e3a\u9053\u5fb7\u6b63\u4e49\u800c\u6218\uff0c\u66f4\u662f\u5728\u8981\u6c42\u6cd5\u5f8b\u4e0e\u5176\u81ea\u8eab\u7684\u5ba3\u79f0\u539f\u5219\u76f8\u7b26\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What was the significance of the Supreme Court's ruling in Brown v. Board of Education?",
          qZh: "\u6700\u9ad8\u6cd5\u9662\u5728\u5e03\u6717\u8bc9\u6559\u80b2\u59d4\u5458\u4f1a\u6848\u4e2d\u88c1\u51b3\u7684\u91cd\u8981\u6027\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "It ended all racial discrimination in the United States immediately", zh: "\u5b83\u7acb\u5373\u7ed3\u675f\u4e86\u7f8e\u56fd\u6240\u6709\u79cd\u65cf\u6b67\u89c6" },
            { en: "It ruled that segregated public schools were unconstitutional, directly challenging the legal basis of segregation", zh: "\u5b83\u88c1\u5b9a\u9694\u79bb\u7684\u516c\u7acb\u5b66\u6821\u8fdd\u5baa\uff0c\u76f4\u63a5\u6311\u6218\u9694\u79bb\u5236\u5ea6\u7684\u6cd5\u5f8b\u57fa\u7840" },
            { en: "It gave African Americans the right to vote for the first time", zh: "\u5b83\u9996\u6b21\u8d4b\u4e88\u975e\u88d4\u7f8e\u56fd\u4eba\u6295\u7968\u6743" },
            { en: "It forced southern states to immediately desegregate all public spaces", zh: "\u5b83\u5f3a\u5236\u5357\u65b9\u5404\u5dde\u7acb\u5373\u53d6\u6d88\u6240\u6709\u516c\u5171\u573a\u6240\u7684\u9694\u79bb\u5236\u5ea6" },
          ],
          correct: 1,
          explainCorrectEn: "Brown v. Board ruled that segregated public schools were unconstitutional — striking down the 'separate but equal' doctrine and giving the Civil Rights Movement a major legal victory. However, it did not immediately end segregation everywhere. Many southern states resisted, and further struggles were needed to enforce the ruling.",
          explainCorrectZh: "\u5e03\u6717\u6848\u88c1\u5b9a\u9694\u79bb\u7684\u516c\u7acb\u5b66\u6821\u8fdd\u5baa\u2014\u2014\u5e9f\u9664\u4e86\u201c\u5206\u5f00\u4f46\u5e73\u7b49\u201d\u539f\u5219\uff0c\u5e76\u4e3a\u6c11\u6743\u8fd0\u52a8\u8d22\u5f97\u4e86\u91cd\u5927\u6cd5\u5f8b\u80dc\u5229\u3002\u7136\u800c\uff0c\u5b83\u5e76\u6ca1\u6709\u7acb\u5373\u7ed3\u675f\u5404\u5730\u7684\u9694\u79bb\u5236\u5ea6\u3002\u8bb8\u591a\u5357\u65b9\u5dde\u62d2\u7edd\u670d\u4ece\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u6597\u4e89\u6765\u6267\u884c\u8be5\u88c1\u51b3\u3002",
          explainWrongEn: "The correct answer is B. Options A and D overstate what the ruling achieved immediately — compliance took years of further struggle. Option C is incorrect; the ruling was about school segregation, not voting rights.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u9009\u9879A\u548cD\u5938\u5927\u4e86\u88c1\u51b3\u7acb\u5373\u53d6\u5f97\u7684\u6210\u679c\u2014\u2014\u670d\u4ece\u8fc7\u7a0b\u9700\u8981\u591a\u5e74\u8fdb\u4e00\u6b65\u7684\u6597\u4e89\u3002\u9009\u9879C\u4e0d\u6b63\u786e\uff0c\u8be5\u88c1\u51b3\u6d89\u53ca\u5b66\u6821\u9694\u79bb\u95ee\u9898\uff0c\u800c\u975e\u6295\u7968\u6743\u3002",
        },
      ],
    },
    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "The Montgomery Bus Boycott, 1955-1956",
      titleZh: "\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u62b5\u5236\u8fd0\u52a8\uff0c1955\u22121956\u5e74",
      subtitle: "How 381 days of non-violent protest proved that organised resistance could succeed.",
      subtitleZh: "381 \u5929\u7684\u975e\u66b4\u529b\u629a\u9b41\u5982\u4f55\u8bc1\u660e\u6709\u7ec4\u7ec7\u7684\u6293\u4e89\u80fd\u591f\u6210\u529f\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain what triggered the Montgomery Bus Boycott.", zh: "\u6211\u80fd\u89e3\u91ca\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u62b5\u5236\u8fd0\u52a8\u7684\u8d77\u56e0\u3002" },
            { en: "I can describe what the boycott involved and why it was successful.", zh: "\u6211\u80fd\u63cf\u8ff0\u629a\u5236\u8fd0\u52a8\u7684\u5177\u4f53\u505a\u6cd5\u4ee5\u53ca\u5b83\u4e3a\u4ec0\u4e48\u80fd\u591f\u6210\u529f\u3002" },
            { en: "I can explain why the boycott was significant for the wider Civil Rights Movement.", zh: "\u6211\u80fd\u89e3\u91ca\u629a\u5236\u8fd0\u52a8\u5bf9\u66f4\u5e7f\u6cdb\u7684\u6c11\u6743\u8fd0\u52a8\u7684\u91cd\u8981\u6027\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "On 1 December 1955, Rosa Parks, a Black seamstress in Montgomery, Alabama, refused to give up her seat on a city bus to a white passenger. She was arrested. Her act of quiet defiance sparked one of the most important protests in American history.",
              zh: "1955 \u5e74 12 \u6708 1 \u65e5\uff0c\u963f\u62c9\u5df4\u9a6c\u5dde\u8499\u54e5\u9a6c\u5229\u7684\u9ed1\u4eba\u88c1\u7f1d\u5e08\u7f57\u838e\u00b7\u5e15\u514b\u65af\u62d2\u7edd\u5c06\u516c\u5171\u6c7d\u8f66\u4e0a\u7684\u5ea7\u4f4d\u8ba9\u7ed9\u4e00\u540d\u767d\u4eba\u4e58\u5ba2\u3002\u5979\u88ab\u9010\u6355\u3002\u5979\u7684\u8fd9\u4e00\u5b89\u9759\u7684\u53cd\u6297\u884c\u4e3a\u5f15\u53d1\u4e86\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u91cd\u8981\u7684\u629a\u9b41\u8fd0\u52a8\u4e4b\u4e00\u3002",
            },
            {
              type: "text",
              en: "Montgomery's Black community, led by a young minister named Martin Luther King Jr., organised a boycott of the city's buses. For 381 days — over a year — around 40,000 African Americans refused to ride the buses. They walked, carpooled, and cycled instead. The bus company lost enormous amounts of money.",
              zh: "\u8499\u54e5\u9a6c\u5229\u7684\u9ed1\u4eba\u793e\u533a\u5728\u4e00\u4f4d\u540d\u53eb\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u7684\u5e74\u8f7b\u7267\u5e08\u7684\u5e26\u9886\u4e0b\uff0c\u7ec4\u7ec7\u4e86\u5bf9\u8fd9\u5ea7\u57ce\u5e02\u516c\u5171\u6c7d\u8f66\u7684\u629a\u5236\u3002\u5728\u957f\u8fbe 381 \u5929\u2014\u2014\u8d85\u8fc7\u4e00\u5e74\u7684\u65f6\u95f4\u91cc\u2014\u2014\u5927\u7ea6 4 \u4e07\u540d\u975e\u88d4\u7f8e\u56fd\u4eba\u62d2\u7edd\u4e58\u8f66\u3002\u4ed6\u4eec\u4ee5\u6b65\u884c\u3001\u62fc\u8f66\u548c\u9a91\u8f66\u4ee3\u66ff\u4e58\u8f66\u3002\u516c\u5171\u6c7d\u8f66\u516c\u53f8\u9057\u53d7\u4e86\u5de8\u5927\u635f\u5931\u3002",
            },
            {
              type: "highlight",
              en: "The result: in November 1956, the Supreme Court ruled that bus segregation in Montgomery was unconstitutional. The boycott ended in victory. Its significance: it proved non-violent mass protest could win; it made MLK nationally famous; and it provided a successful model for future civil rights actions across the South.",
              zh: "\u7ed3\u679c\uff1a1956 \u5e74 11 \u6708\uff0c\u6700\u9ad8\u6cd5\u9662\u88c1\u5b9a\u8499\u54e5\u9a6c\u5229\u7684\u516c\u5171\u6c7d\u8f66\u9694\u79bb\u8fdd\u5baa\u3002\u629a\u5236\u8fd0\u52a8\u4ee5\u80dc\u5229\u544a\u7ec8\u3002\u5176\u91cd\u8981\u6027\uff1a\u5b83\u8bc1\u660e\u4e86\u975e\u66b4\u529b\u7684\u5927\u89c4\u6a21\u629a\u9b41\u80fd\u591f\u53d6\u5f97\u80dc\u5229\uff1b\u4f7f\u91d1\u535a\u58eb\u5728\u5168\u56fd\u58f0\u540d\u5927\u8d77\uff1b\u5e76\u4e3a\u5357\u65b9\u672a\u6765\u7684\u6c11\u6743\u884c\u52a8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6210\u529f\u7684\u8303\u672c\u3002",
            },
            {
              type: "example",
              en: "Think about what it takes to convince 40,000 people to change how they travel to work every day for over a year. There was no social media. People had to be organised through churches, leaflets, and word of mouth. The fact that almost the entire Black community held together for 381 days — despite harassment, bombings of MLK's house, and economic pressure — shows extraordinary collective determination.",
              zh: "\u60f3\u60f3\uff0c\u8981\u8bf4\u670d 4 \u4e07\u4eba\u5728\u8d85\u8fc7\u4e00\u5e74\u7684\u65f6\u95f4\u91cc\u6bcf\u5929\u6539\u53d8\u4e0a\u73ed\u7684\u65b9\u5f0f\uff0c\u9700\u8981\u591a\u5927\u7684\u529b\u91cf\u3002\u5f53\u65f6\u6ca1\u6709\u793e\u4ea4\u5a92\u4f53\u3002\u4eba\u4eec\u5fc5\u987b\u901a\u8fc7\u6559\u5802\u3001\u4f20\u5355\u548c\u53e3\u8033\u76f8\u4f20\u8fdb\u884c\u7ec4\u7ec7\u3002\u5c3d\u7ba1\u906d\u53d7\u9a9a\u6270\u3001\u91d1\u535a\u58eb\u5bb6\u906d\u5230\u7206\u70b8\u548c\u7ecf\u6d4e\u538b\u529b\uff0c\u51e0\u4e4e\u6574\u4e2a\u9ed1\u4eba\u793e\u533a\u5374\u575a\u6301\u4e86 381 \u5929\u2014\u2014\u8fd9\u5c55\u73b0\u4e86\u975e\u51e1\u7684\u96c6\u4f53\u51b3\u5fc3\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Boycott", zh: "\u629a\u5236", defEn: "Refusing to use a service, buy a product, or deal with an organisation as a form of protest.", defZh: "\u4f5c\u4e3a\u629a\u9b41\u7684\u4e00\u79cd\u5f62\u5f0f\uff0c\u62d2\u7edd\u4f7f\u7528\u67d0\u9879\u670d\u52a1\u3001\u8d2d\u4e70\u67d0\u4e2a\u4ea7\u54c1\u6216\u4e0e\u67d0\u4e2a\u7ec4\u7ec7\u6253\u4ea4\u9053\u3002" },
            { en: "Non-violent protest", zh: "\u975e\u66b4\u529b\u629a\u9b41", defEn: "A form of protest that refuses to use physical violence — relying instead on peaceful methods such as marches, boycotts, and sit-ins.", defZh: "\u4e00\u79cd\u62d2\u7edd\u4f7f\u7528\u4f53\u529b\u66b4\u529b\u7684\u629a\u9b41\u5f62\u5f0f\u2014\u2014\u800c\u662f\u4f9d\u9760\u6e38\u884c\u3001\u629a\u5236\u548c\u775c\u5ea7\u7b49\u548c\u5e73\u65b9\u5f0f\u3002" },
            { en: "Civil disobedience", zh: "\u516c\u6c11\u4e0d\u670d\u4ece", defEn: "Deliberately breaking an unjust law or refusing to comply with authority as a form of protest.", defZh: "\u4e3a\u629a\u9b41\u800c\u6545\u610f\u8fdd\u53cd\u4e0d\u516c\u6b63\u7684\u6cd5\u5f8b\u6216\u62d2\u7edd\u670d\u4ece\u5f53\u5c40\u3002" },
            { en: "Martin Luther King Jr.", zh: "\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb", defEn: "The most prominent leader of the American Civil Rights Movement, known for his powerful speeches and commitment to non-violent protest.", defZh: "\u7f8e\u56fd\u6c11\u6743\u8fd0\u52a8\u6700\u91cd\u8981\u7684\u9886\u8896\u4eba\u7269\uff0c\u4ee5\u5176\u6709\u529b\u7684\u6f14\u8bb2\u548c\u5bf9\u975e\u66b4\u529b\u629a\u9b41\u7684\u575a\u5b9a\u4fe1\u5ff5\u800c\u95fb\u540d\u3002" },
          ],
        },
        {
          type: "image",
          caption: "Martin Luther King Jr. and Rosa Parks — two of the most important figures of the Montgomery Bus Boycott",
          captionZh: "\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u4e0e\u7f57\u838e\u00b7\u5e15\u514b\u65af\u2014\u2014\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u629a\u5236\u8fd0\u52a8\u4e2d\u6700\u91cd\u8981\u7684\u4e24\u4e2a\u4eba\u7269",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa_parks_bus.jpg",
        },
        {
          type: "source",
          labelEn: "From classroom materials on the Montgomery Bus Boycott",
          labelZh: "\u6765\u81ea\u8bfe\u5802\u6750\u6599\uff1a\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u629a\u5236\u8fd0\u52a8",
          en: "The boycott lasted 381 days, with near-total participation from the Black community in Montgomery. Around 40,000 African Americans walked or carpooled instead of taking buses. It elevated Martin Luther King Jr. to national prominence. It provided a successful model of non-violent protest and economic pressure that would be used again and again across the civil rights movement.",
          zh: "\u629a\u5236\u8fd0\u52a8\u6301\u7eed\u4e86 381 \u5929\uff0c\u8499\u54e5\u9a6c\u5229\u9ed1\u4eba\u793e\u533a\u51e0\u4e4e\u5168\u5458\u53c2\u4e0e\u3002\u5927\u7ea6 4 \u4e07\u540d\u975e\u88d4\u7f8e\u56fd\u4eba\u9009\u62e9\u6b65\u884c\u6216\u62fc\u8f66\u4e0a\u73ed\uff0c\u800c\u4e0d\u4e58\u516c\u5171\u6c7d\u8f66\u3002\u8fd9\u4f7f\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u5728\u5168\u56fd\u58f0\u540d\u5927\u8d77\u3002\u8fd9\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6210\u529f\u7684\u975e\u66b4\u529b\u629a\u9b41\u548c\u7ecf\u6d4e\u65bd\u538b\u8303\u672c\uff0c\u5c06\u88ab\u6c11\u6743\u8fd0\u52a8\u53cd\u590d\u4e0d\u65ad\u5730\u8fd0\u7528\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The boycott succeeded partly because Black residents provided most of the bus company's customers. What does this show about the relationship between economic power and political change?",
              qZh: "\u629a\u5236\u8fd0\u52a8\u90e8\u5206\u5f97\u76ca\u4e8e\u9ed1\u4eba\u5c45\u6c11\u6784\u6210\u516c\u5171\u6c7d\u8f66\u516c\u53f8\u5927\u591a\u6570\u5ba2\u6237\u8fd9\u4e00\u4e8b\u5b9e\u3002\u8fd9\u8bf4\u660e\u7ecf\u6d4e\u529b\u91cf\u4e0e\u653f\u6cbb\u53d8\u9769\u4e4b\u95f4\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f",
              aEn: "Economic pressure can be a powerful tool for political change — even for groups who have no formal political power. When Black residents withdrew their spending from the bus system, they hit the bus company where it hurt most: its income. This shows that economic leverage can force change even without voting power or legal rights. It also shows that everyday people have more power than they sometimes realise — collective action can create pressure that individual action cannot.",
              aZh: "\u5373\u4f7f\u5bf9\u4e8e\u6ca1\u6709\u6b63\u5f0f\u653f\u6cbb\u529b\u91cf\u7684\u7fa4\u4f53\uff0c\u7ecf\u6d4e\u65bd\u538b\u4e5f\u53ef\u4ee5\u662f\u8ffd\u6c42\u653f\u6cbb\u53d8\u9769\u7684\u5f3a\u5927\u5de5\u5177\u3002\u5f53\u9ed1\u4eba\u5c45\u6c11\u6492\u56de\u5bf9\u516c\u5171\u6c7d\u8f66\u7cfb\u7edf\u7684\u6d88\u8d39\u65f6\uff0c\u4ed6\u4eec\u51fb\u4e2d\u4e86\u516c\u5171\u6c7d\u8f66\u516c\u53f8\u6700\u70f9\u607c\u7684\u5730\u65b9\uff1a\u6536\u5165\u3002\u8fd9\u8bf4\u660e\uff0c\u5373\u4f7f\u6ca1\u6709\u6295\u7968\u6743\u6216\u6cd5\u5f8b\u6743\u5229\uff0c\u7ecf\u6d4e\u6760\u6746\u4e5f\u53ef\u4ee5\u5021\u5bfc\u53d8\u9769\u3002\u8fd9\u4e5f\u8bf4\u660e\u666e\u901a\u4eba\u62e5\u6709\u7684\u529b\u91cf\u5f80\u5f80\u8d85\u8fc7\u81ea\u5df1\u7684\u60f3\u8c61\u2014\u2014\u96c6\u4f53\u884c\u52a8\u80fd\u4ea7\u751f\u4e2a\u4eba\u884c\u52a8\u65e0\u6cd5\u8fbe\u5230\u7684\u538b\u529b\u3002",
            },
            {
              qEn: "Why do you think the boycott made Martin Luther King Jr. nationally famous? What qualities did it take to lead a protest of this scale?",
              qZh: "\u4f60\u8ba4\u4e3a\u629a\u5236\u8fd0\u52a8\u4e3a\u4ec0\u4e48\u4f7f\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u5728\u5168\u56fd\u58f0\u540d\u5927\u8d77\uff1f\u9886\u5bfc\u5982\u6b64\u89c4\u6a21\u7684\u629a\u9b41\u8fd0\u52a8\u9700\u8981\u54ea\u4e9b\u54c1\u8d28\uff1f",
              aEn: "Leading the boycott required King to organise thousands of people across a sustained period, maintain their commitment even when his own home was bombed, speak publicly in ways that inspired both participants and national audiences, and keep the protest non-violent despite intense provocation. These qualities — courage, organisation, powerful communication, and moral discipline — were exactly what made him a nationally recognised leader. The boycott gave him a stage to demonstrate all of them under real pressure.",
              aZh: "\u9886\u5bfc\u629a\u5236\u8fd0\u52a8\u8981\u6c42\u91d1\u535a\u58eb\u5728\u6301\u7eed\u6027\u7684\u65f6\u95f4\u91cc\u7ec4\u7ec7\u6570\u4e07\u4eba\uff0c\u5373\u4f7f\u81ea\u5df1\u7684\u623f\u5c4b\u906d\u5230\u7206\u70b8\u4e5f\u8981\u7ef4\u6301\u4eba\u4eec\u7684\u70ed\u60c5\uff0c\u7528\u80fd\u6fc0\u52b1\u53c2\u4e0e\u8005\u548c\u5168\u56fd\u89c2\u4f17\u7684\u65b9\u5f0f\u516c\u5f00\u6f14\u8bb2\uff0c\u5e76\u5728\u5f3a\u70c8\u6311\u886c\u4e0b\u4fdd\u6301\u629a\u9b41\u7684\u975e\u66b4\u529b\u6027\u8d28\u3002\u8fd9\u4e9b\u54c1\u8d28\u2014\u2014\u52c7\u6c14\u3001\u7ec4\u7ec7\u80fd\u529b\u3001\u5f3a\u5927\u7684\u6c9f\u901a\u548c\u9053\u5fb7\u81ea\u5f8b\u2014\u2014\u6b63\u662f\u4f7f\u4ed6\u6210\u4e3a\u5168\u56fd\u516c\u8ba4\u9886\u8896\u7684\u539f\u56e0\u3002\u629a\u5236\u8fd0\u52a8\u7ed9\u4e86\u4ed6\u4e00\u4e2a\u5c55\u73b0\u8fd9\u4e9b\u54c1\u8d28\u7684\u821e\u53f0\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What was the result of the Montgomery Bus Boycott?",
          qZh: "\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u629a\u5236\u8fd0\u52a8\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "It failed because African Americans could not sustain it long enough", zh: "\u8fd0\u52a8\u5931\u8d25\u4e86\uff0c\u56e0\u4e3a\u975e\u88d4\u7f8e\u56fd\u4eba\u65e0\u6cd5\u5c06\u5176\u7ef4\u6301\u8db3\u591f\u957f\u7684\u65f6\u95f4" },
            { en: "The Supreme Court ruled bus segregation unconstitutional, and the boycott ended in victory", zh: "\u6700\u9ad8\u6cd5\u9662\u88c1\u5b9a\u516c\u5171\u6c7d\u8f66\u9694\u79bb\u8fdd\u5baa\uff0c\u629a\u5236\u8fd0\u52a8\u4ee5\u80dc\u5229\u544a\u7ec8" },
            { en: "The bus company agreed to desegregate voluntarily after one week", zh: "\u516c\u5171\u6c7d\u8f66\u516c\u53f8\u5728\u4e00\u5468\u540e\u81ea\u613f\u53d6\u6d88\u9694\u79bb\u5236\u5ea6" },
            { en: "Rosa Parks was released from prison and the protest ended peacefully", zh: "\u7f57\u838e\u00b7\u5e15\u514b\u65af\u51fa\u72f1\u540e\u629a\u9b41\u8fd0\u52a8\u5e73\u548c\u7ed3\u675f" },
          ],
          correct: 1,
          explainCorrectEn: "After 381 days of boycott, the Supreme Court ruled in November 1956 that segregation on Montgomery's buses was unconstitutional. Black residents returned to the buses — now able to sit wherever they chose. The boycott proved that sustained non-violent protest could succeed, and it elevated Martin Luther King Jr. to national prominence.",
          explainCorrectZh: "\u7ecf\u8fc7 381 \u5929\u7684\u629a\u5236\uff0c\u6700\u9ad8\u6cd5\u9662\u4e8e 1956 \u5e74 11 \u6708\u88c1\u5b9a\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u4e0a\u7684\u9694\u79bb\u5236\u5ea6\u8fdd\u5baa\u3002\u9ed1\u4eba\u5c45\u6c11\u91cd\u65b0\u767b\u4e0a\u516c\u5171\u6c7d\u8f66\u2014\u2014\u73b0\u5728\u53ef\u4ee5\u968f\u5904\u5c31\u5ea7\u3002\u629a\u5236\u8fd0\u52a8\u8bc1\u660e\u4e86\u6301\u7eed\u7684\u975e\u66b4\u529b\u629a\u9b41\u80fd\u591f\u53d6\u5f97\u80dc\u5229\uff0c\u5e76\u4f7f\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u5728\u5168\u56fd\u58f0\u540d\u5927\u8d77\u3002",
          explainWrongEn: "The correct answer is B. The boycott lasted 381 days — far longer than one week (option C). It succeeded, not failed (option A). The ending of the boycott was tied to the Supreme Court ruling, not simply to Rosa Parks's release (option D).",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u629a\u5236\u8fd0\u52a8\u6301\u7eed\u4e86 381 \u5929\u2014\u2014\u8fdc\u8fdc\u8d85\u8fc7\u4e00\u5468\uff08\u9009\u9879C\uff09\u3002\u5b83\u6210\u529f\u4e86\uff0c\u800c\u4e0d\u662f\u5931\u8d25\uff08\u9009\u9879A\uff09\u3002\u629a\u5236\u8fd0\u52a8\u7684\u7ed3\u675f\u4e0e\u6700\u9ad8\u6cd5\u9662\u88c1\u51b3\u76f8\u5173\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u56e0\u4e3a\u7f57\u838e\u00b7\u5e15\u514b\u65af\u51fa\u72f1\uff08\u9009\u9879D\uff09\u3002",
        },
      ],
    },
    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "A",
      title: "From Greensboro to the Freedom Riders",
      titleZh: "\u4ece\u683c\u6797\u65af\u4f2f\u7f57\u5230\u81ea\u7531\u4e58\u8f66\u8005",
      subtitle: "How student-led action and media exposure pushed the movement forward.",
      subtitleZh: "\u5b66\u751f\u4e3b\u5bfc\u7684\u884c\u52a8\u548c\u5a92\u4f53\u66dd\u5149\u5982\u4f55\u63a8\u52a8\u8fd0\u52a8\u524d\u8fdb\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe what happened at the Greensboro sit-in and explain why it spread.", zh: "\u6211\u80fd\u63cf\u8ff0\u683c\u6797\u65af\u4f2f\u7f57\u775c\u5ea7\u629a\u9b41\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u5e76\u89e3\u91ca\u5b83\u4e3a\u4ec0\u4e48\u80fd\u591f\u8fcb\u5ef6\u6269\u5927\u3002" },
            { en: "I can describe what the Freedom Riders did and what happened to them.", zh: "\u6211\u80fd\u63cf\u8ff0\u81ea\u7531\u4e58\u8f66\u8005\u7684\u884c\u52a8\u53ca\u5176\u9047\u5230\u7684\u51b5\u3002" },
            { en: "I can explain how media attention helped the Civil Rights Movement gain national support.", zh: "\u6211\u80fd\u89e3\u91ca\u5a92\u4f53\u5173\u6ce8\u5982\u4f55\u5e2e\u52a9\u6c11\u6743\u8fd0\u52a8\u83b7\u5f97\u5168\u56fd\u652f\u6301\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "On 1 February 1960, four Black university students — the Greensboro Four — sat down at a segregated lunch counter in a Woolworths department store in Greensboro, North Carolina, and politely asked to be served. They were refused. They stayed seated. The next day, more students came. Within weeks, sit-ins spread to dozens of cities across the South.",
              zh: "1960 \u5e74 2 \u6708 1 \u65e5\uff0c\u56db\u540d\u9ed1\u4eba\u5927\u5b66\u751f\u2014\u2014\u683c\u6797\u65af\u4f2f\u7f57\u56db\u4eba\u2014\u2014\u5728\u5317\u5361\u7f57\u6765\u7eb3\u5dde\u683c\u6797\u65af\u4f2f\u7f57\u4e00\u5bb6\u4f0d\u5c14\u6c83\u65af\u767e\u8d27\u516c\u53f8\u7684\u9694\u79bb\u9910\u5385\u67dc\u53f0\u524d\u5750\u4e0b\uff0c\u79ef\u5c40\u8d3c\u8d3c\u5730\u8bf7\u6c42\u670d\u52a1\u3002\u5979\u4eec\u88ab\u62d2\u7edd\u4e86\u3002\u4ed6\u4eec\u7ee7\u7eed\u5750\u7740\u3002\u7b2c\u4e8c\u5929\uff0c\u66f4\u591a\u5b66\u751f\u6765\u4e86\u3002\u5728\u77ed\u77ed\u51e0\u5468\u5185\uff0c\u775c\u5ea7\u629a\u9b41\u8fcb\u5ef6\u81f3\u5357\u65b9\u6570\u5341\u4e2a\u57ce\u5e02\u3002",
            },
            {
              type: "text",
              en: "In 1961, a group of Black and white activists called Freedom Riders boarded interstate buses and rode through the Deep South to challenge segregation in bus terminals. They were met with horrific violence — buses were firebombed in Anniston, Alabama, and riders were beaten in Birmingham and Montgomery. Images of burning buses and bloodied activists were broadcast on national television.",
              zh: "1961 \u5e74\uff0c\u4e00\u7fa4\u540d\u4e3a\u201c\u81ea\u7531\u4e58\u8f66\u8005\u201d\u7684\u9ed1\u767d\u4e24\u65cf\u6d3b\u52a8\u4eba\u58eb\u767b\u4e0a\u5bf9\u5dde\u516c\u5171\u6c7d\u8f66\uff0c\u5c55\u5f00\u7a7f\u8d8a\u6df1\u5357\u5404\u5dde\u7684\u884c\u7a0b\uff0c\u6311\u6218\u8f66\u7ad9\u7684\u9694\u79bb\u5236\u5ea6\u3002\u4ed6\u4eec\u9047\u5230\u4e86\u6781\u5176\u60d5\u4eba\u7684\u66b4\u529b\u2014\u2014\u5728\u963f\u62c9\u5df4\u9a6c\u5dde\u5b89\u5185\u65af\u987f\uff0c\u516c\u5171\u6c7d\u8f66\u9057\u5230\u706b\u70df\u5f39\u8972\u51fb\uff1b\u5728\u4f2f\u660e\u7ff0\u548c\u8499\u54e5\u9a6c\u5229\uff0c\u4e58\u5ba2\u906d\u5230\u6bdc\u6253\u3002\u71c3\u70e7\u7684\u5eba\u8f66\u548c\u6ee1\u8eab\u978f\u4f24\u6d3b\u52a8\u4eba\u58eb\u7684\u753b\u9762\u5728\u5168\u56fd\u7535\u89c6\u4e0a\u64ad\u51fa\u3002",
            },
            {
              type: "highlight",
              en: "Why the Freedom Riders mattered: the brutal violence shown on television created national outrage. Attorney General Robert Kennedy was forced to act. The Interstate Commerce Commission eventually enforced stricter rules desegregating bus terminals. The lesson: media exposure of violence against peaceful protesters turned public opinion in favour of the movement.",
              zh: "\u81ea\u7531\u4e58\u8f66\u8005\u4e3a\u4ec0\u4e48\u91cd\u8981\uff1a\u7535\u89c6\u4e0a\u64ad\u51fa\u7684\u91ce\u84ee\u66b4\u529b\u5f15\u53d1\u4e86\u5168\u56fd\u6027\u7684\u6124\u6012\u3002\u5922\u5c71\u5bdf\u957f\u7f57\u4f2f\u7279\u00b7\u8096\u5c3c\u8fea\u88ab\u8fc2\u4e0d\u5f97\u4e0d\u91c7\u53d6\u884c\u52a8\u3002\u5dde\u9645\u5546\u52a1\u59d4\u5458\u4f1a\u6700\u7ec8\u5f3a\u5236\u6267\u884c\u66f4\u4e25\u683c\u7684\u89c4\u5b9a\uff0c\u53d6\u6d88\u5ba2\u8fd0\u7ad9\u7684\u9694\u79bb\u5236\u5ea6\u3002\u8bfe\u9898\u662f\uff1a\u5a92\u4f53\u66dd\u5149\u5bf9\u548c\u5e73\u629a\u9b41\u8005\u66b4\u529b\u7684\u4f7f\u7528\uff0c\u4f7f\u6c11\u610f\u8f6c\u5411\u652f\u6301\u8fd9\u4e00\u8fd0\u52a8\u3002",
            },
            {
              type: "example",
              en: "Think about why images matter in a way that words alone sometimes don't. When Americans saw photographs and television footage of peaceful students being attacked and buses being burned, it became very hard to claim that the protesters were the troublemakers. The violence of the opposition exposed itself — and that exposure did much of the work of winning public sympathy that speeches alone could not.",
              zh: "\u60f3\u60f3\u4e3a\u4ec0\u4e48\u56fe\u50cf\u6709\u65f6\u80fd\u4ea7\u751f\u8bed\u8a00\u5355\u72ec\u6240\u4e0d\u80fd\u5b9e\u73b0\u7684\u5f71\u54cd\u3002\u5f53\u7f8e\u56fd\u4eba\u770b\u5230\u548c\u5e73\u5b66\u751f\u906d\u5230\u88ad\u51fb\u3001\u5eba\u8f66\u906d\u5230\u706b\u70e7\u7684\u7167\u7247\u548c\u7535\u89c6\u753b\u9762\u65f6\uff0c\u5c31\u5f88\u96be\u518d\u5ba3\u79f0\u629a\u9b41\u8005\u5361\u662f\u95f9\u4e8b\u8005\u3002\u5bf9\u6297\u65b9\u5f39\u7684\u66b4\u529b\u81ea\u6211\u66b4\u9732\u2014\u2014\u800c\u8fd9\u79cd\u66b4\u9732\u5728\u8d62\u5f97\u516c\u4f17\u540c\u60c5\u65b9\u9762\u8d77\u5230\u4e86\u6f14\u8bb2\u5355\u72ec\u65e0\u6cd5\u5b9e\u73b0\u7684\u91cd\u8981\u4f5c\u7528\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Sit-in", zh: "\u775c\u5ea7\u629a\u9b41", defEn: "A protest in which people sit down in a public place and refuse to leave — used to challenge segregation at lunch counters and other facilities.", defZh: "\u4e00\u79cd\u629a\u9b41\u65b9\u5f0f\uff0c\u4eba\u4eec\u5750\u5728\u516c\u5171\u573a\u6240\u5e76\u62d2\u7edd\u79bb\u5f00\u2014\u2014\u7528\u4e8e\u6311\u6218\u9910\u5385\u67dc\u53f0\u548c\u5176\u4ed6\u8bbe\u65bd\u7684\u9694\u79bb\u5236\u5ea6\u3002" },
            { en: "Freedom Riders", zh: "\u81ea\u7531\u4e58\u8f66\u8005", defEn: "Activists who rode interstate buses through the South in 1961 to challenge segregation in bus terminals — and faced violent attacks.", defZh: "1961 \u5e74\u4e58\u5750\u5bf9\u5dde\u516c\u5171\u6c7d\u8f66\u7a7f\u8d8a\u5357\u65b9\u5404\u5dde\u3001\u6311\u6218\u8f66\u7ad9\u9694\u79bb\u5236\u5ea6\u5e76\u9047\u5230\u66b4\u529b\u88ad\u51fb\u7684\u6d3b\u52a8\u4eba\u58eb\u3002" },
            { en: "Direct action", zh: "\u76f4\u63a5\u884c\u52a8", defEn: "Protest that directly confronts an unjust situation — such as sitting at a segregated counter — rather than working through legal or political channels alone.", defZh: "\u76f4\u63a5\u9762\u5bf9\u4e0d\u516c\u6b63\u5c40\u9762\u7684\u629a\u9b41\u2014\u2014\u5982\u5750\u5728\u9694\u79bb\u67dc\u53f0\u524d\u2014\u2014\u800c\u4e0d\u662f\u5355\u7eaf\u4f9d\u8d56\u6cd5\u5f8b\u6216\u653f\u6cbb\u6e20\u9053\u3002" },
            { en: "CORE (Congress of Racial Equality)", zh: "\u79cd\u65cf\u5e73\u7b49\u5927\u4f1a", defEn: "One of the key civil rights organisations that organised the Freedom Rides and other direct action campaigns.", defZh: "\u7ec4\u7ec7\u81ea\u7531\u4e58\u8f66\u8fd0\u52a8\u548c\u5176\u4ed6\u76f4\u63a5\u884c\u52a8\u8fd0\u52a8\u7684\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\u4e4b\u4e00\u3002" },
          ],
        },
        {
          type: "image",
          caption: "A Greyhound bus burned by attackers in Anniston, Alabama, 1961 — images like this turned national opinion against segregation",
          captionZh: "1961 \u5e74\u963f\u62c9\u5df4\u9a6c\u5dde\u5b89\u5185\u65af\u987f\u88ad\u51fb\u8005\u70e7\u6bc1\u7684\u7070\u72d7\u5eba\u8f66\u2014\u2014\u8fd9\u6837\u7684\u56fe\u50cf\u4f7f\u5168\u56fd\u6c11\u610f\u8f6c\u800c\u53cd\u5bf9\u9694\u79bb\u5236\u5ea6",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greensboro_sit-in_counter.jpg",
        },
        {
          type: "source",
          labelEn: "From classroom materials on the Freedom Riders",
          labelZh: "\u6765\u81ea\u8bfe\u5802\u6750\u6599\uff1a\u81ea\u7531\u4e58\u8f66\u8005",
          en: "Images of burning buses in Anniston, Alabama, and beatings in Birmingham and Montgomery were broadcast nationally. News coverage led to increased pressure on the federal government to act. Eventually, the Interstate Commerce Commission, under pressure from Attorney General Robert Kennedy, enforced stricter rules desegregating bus terminals, effective November 1, 1961.",
          zh: "\u963f\u62c9\u5df4\u9a6c\u5dde\u5b89\u5185\u65af\u987f\u706f\u70e7\u7684\u5eba\u8f66\u4ee5\u53ca\u4f2f\u660e\u7ff0\u548c\u8499\u54e5\u9a6c\u5229\u7684\u6bcd\u6253\u753b\u9762\u5728\u5168\u56fd\u5404\u5a92\u4f53\u64ad\u51fa\u3002\u65b0\u95fb\u62a5\u9053\u5bfc\u81f4\u8054\u90a6\u653f\u5e9c\u53d7\u5230\u66f4\u5927\u538b\u529b\u3002\u6700\u7ec8\uff0c\u5728\u53f8\u6cd5\u90e8\u957f\u7f57\u4f2f\u7279\u00b7\u8096\u5c3c\u8fea\u7684\u538b\u529b\u4e0b\uff0c\u5dde\u9645\u5546\u52a1\u59d4\u5458\u4f1a\u5f3a\u5236\u6267\u884c\u66f4\u4e25\u683c\u7684\u89c4\u5b9a\uff0c\u53d6\u6d88\u5ba2\u8fd0\u7ad9\u7684\u9694\u79bb\u5236\u5ea6\uff0c\u4e8e 1961 \u5e74 11 \u6708 1 \u65e5\u751f\u6548\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Freedom Riders deliberately chose to ride through the most dangerous parts of the South, knowing they might be attacked. Why do you think they made that choice?",
              qZh: "\u81ea\u7531\u4e58\u8f66\u8005\u660e\u77e5\u53ef\u80fd\u906d\u5230\u88ad\u51fb\uff0c\u5374\u8499\u4e3a\u6311\u5e95\u5730\u7a7f\u8d8a\u5357\u65b9\u6700\u5371\u9669\u7684\u5730\u5e26\u3002\u4f60\u8ba4\u4e3a\u4ed6\u4eec\u4e3a\u4ec0\u4e48\u8981\u8fd9\u6837\u505a\uff1f",
              aEn: "The Freedom Riders understood that exposing violent opposition to peaceful integration was itself a powerful political strategy. If they were ignored, nothing changed. But if segregationists attacked them — and those attacks were caught on camera — it would show the world the true nature of the system they were fighting. By going to the most dangerous places, they increased the chance of the kind of violent response that would create national outrage and force federal action. This was non-violence used as a deliberate and sophisticated political strategy.",
              aZh: "\u81ea\u7531\u4e58\u8f66\u8005\u660e\u767d\uff0c\u66b4\u9732\u5bf9\u548c\u5e73\u79cd\u65cf\u878d\u5408\u884c\u52a8\u7684\u66b4\u529b\u53cd\u5bf9\u672c\u8eab\u5c31\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u653f\u6cbb\u7b56\u7565\u3002\u5982\u679c\u4ed6\u4eec\u88ab\u5ffd\u89c6\uff0c\u5c31\u6ca1\u6709\u4e00\u4e9b\u4e0d\u4f1a\u6539\u53d8\u3002\u4f46\u5982\u679c\u79cd\u65cf\u9694\u79bb\u8005\u88ad\u51fb\u4ed6\u4eec\u2014\u2014\u4e14\u8fd9\u4e9b\u88ad\u51fb\u88ab\u955c\u5934\u6355\u6349\u2014\u2014\u5c31\u4f1a\u5411\u5168\u4e16\u754c\u5c55\u793a\u4ed6\u4eec\u6240\u6297\u4e89\u7684\u5236\u5ea6\u7684\u771f\u5b9e\u9762\u76ee\u3002\u9053\u8d5a\u6700\u5371\u9669\u7684\u5730\u65b9\uff0c\u4e5f\u5c31\u589e\u52a0\u4e86\u5f15\u53d1\u5c06\u4f7f\u5168\u56fd\u6124\u6012\u3001\u8feb\u4f7f\u8054\u90a6\u884c\u52a8\u7684\u90a3\u79cd\u66b4\u529b\u53cd\u5e94\u7684\u53ef\u80fd\u6027\u3002\u8fd9\u662f\u5c06\u975e\u66b4\u529b\u4f5c\u4e3a\u4e00\u79cd\u8758\u8c0b\u6df1\u8fdc\u7684\u653f\u6cbb\u7b56\u7565\u6765\u8fd0\u7528\u3002",
            },
            {
              qEn: "The Greensboro sit-ins spread to dozens of cities within weeks, even though there was no social media or internet. How do you think ideas and protests spread so quickly in 1960?",
              qZh: "\u683c\u6797\u65af\u4f2f\u7f57\u775c\u5ea7\u629a\u9b41\u5728\u77ed\u77ed\u51e0\u5468\u5185\u8fcb\u5ef6\u81f3\u6570\u5341\u4e2a\u57ce\u5e02\uff0c\u5c3d\u7ba1\u5f53\u65f6\u5e76\u65e0\u793e\u4ea4\u5a92\u4f53\u6216\u4e92\u8054\u7f51\u3002\u4f60\u8ba4\u4e3a 1960 \u5e74\u7684\u601d\u60f3\u548c\u629a\u9b41\u8fd0\u52a8\u662f\u5982\u4f55\u5982\u6b64\u8fc5\u901f\u4f20\u64ad\u7684\uff1f",
              aEn: "In 1960, churches were the main communication network in the Black community — and they were powerful ones. Ministers could address thousands of people simultaneously and pass on information across cities and states. Students had networks through universities and civil rights organisations like SNCC. Newspapers, radio, and news agencies also played a role. But perhaps most importantly, the Greensboro sit-in gave people who were already angry about segregation a clear, simple, effective model to copy. The idea spread because it worked — and because many people were ready and waiting for it.",
              aZh: "1960 \u5e74\uff0c\u6559\u5802\u662f\u9ed1\u4eba\u793e\u533a\u7684\u4e3b\u8981\u4fe1\u606f\u7f51\u7edc\u2014\u2014\u4e14\u8fd9\u4e2a\u7f51\u7edc\u9ad8\u6548\u800c\u5f3a\u5927\u3002\u7267\u5e08\u53ef\u4ee5\u540c\u65f6\u5411\u6570\u5343\u4eba\u8ba1\u8bdd\uff0c\u5e76\u5c06\u4fe1\u606f\u4f20\u9012\u81f3\u5404\u57ce\u5e02\u548c\u5404\u5dde\u3002\u5b66\u751f\u5219\u901a\u8fc7\u5927\u5b66\u548c SNCC \u7b49\u6c11\u6743\u7ec4\u7ec7\u5efa\u7acb\u7f51\u7edc\u3002\u62a5\u7eb8\u3001\u5e7f\u64ad\u548c\u901a\u8baf\u793e\u4e5f\u53d1\u6325\u4e86\u4f5c\u7528\u3002\u4f46\u6700\u91cd\u8981\u7684\u4e5f\u8bb8\u662f\uff0c\u683c\u6797\u65af\u4f2f\u7f57\u775c\u5ea7\u629a\u9b41\u4e3a\u90a3\u4e9b\u65e9\u5df2\u5bf9\u9694\u79bb\u5236\u5ea6\u6124\u6124\u4e0d\u5e73\u7684\u4eba\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6e05\u6670\u3001\u7b80\u5355\u3001\u6709\u6548\u7684\u6a21\u5f0f\u53ef\u4ee5\u6548\u4eff\u3002\u8fd9\u79cd\u601d\u60f3\u4e4b\u6240\u4ee5\u4f20\u64ad\uff0c\u662f\u56e0\u4e3a\u5b83\u5207\u5b9e\u53ef\u884c\u2014\u2014\u4e5f\u662f\u56e0\u4e3a\u5f88\u591a\u4eba\u65e9\u5df2\u8e43\u578b\u4ee5\u5f85\u4e86\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Why did the Freedom Riders' experience help the Civil Rights Movement gain national support?",
          qZh: "\u81ea\u7531\u4e58\u8f66\u8005\u7684\u7ecf\u5386\u4e3a\u4ec0\u4e48\u5e2e\u52a9\u6c11\u6743\u8fd0\u52a8\u83b7\u5f97\u4e86\u5168\u56fd\u652f\u6301\uff1f",
          opts: [
            { en: "Because the Freedom Riders won every court case they brought", zh: "\u56e0\u4e3a\u81ea\u7531\u4e58\u8f66\u8005\u8d62\u5f97\u4e86\u6bcf\u4e00\u4e2a\u6cd5\u5f8b\u6848\u4ef6" },
            { en: "Because television images of peaceful protesters being beaten and buses burned created national outrage", zh: "\u56e0\u4e3a\u548c\u5e73\u629a\u9b41\u8005\u906d\u6bcd\u6253\u3001\u5eba\u8f66\u906d\u70e7\u7684\u7535\u89c6\u753b\u9762\u5f15\u53d1\u4e86\u5168\u56fd\u6027\u7684\u6124\u6012" },
            { en: "Because the Freedom Riders negotiated directly with southern state governors", zh: "\u56e0\u4e3a\u81ea\u7531\u4e58\u8f66\u8005\u76f4\u63a5\u4e0e\u5357\u65b9\u5404\u5dde\u5dde\u957f\u8c08\u5224" },
            { en: "Because they stopped segregation in all southern bus terminals immediately", zh: "\u56e0\u4e3a\u4ed6\u4eec\u7acb\u5373\u53d6\u6d88\u4e86\u5357\u65b9\u6240\u6709\u5ba2\u8fd0\u7ad9\u7684\u9694\u79bb\u5236\u5ea6" },
          ],
          correct: 1,
          explainCorrectEn: "Television coverage of peaceful protesters being violently attacked created national outrage that put enormous pressure on the federal government. Attorney General Robert Kennedy was forced to act, and the Interstate Commerce Commission eventually desegregated bus terminals. It was the media exposure of violence against peaceful activists that converted the public — not legal victories or negotiation.",
          explainCorrectZh: "\u548c\u5e73\u629a\u9b41\u8005\u906d\u5230\u66b4\u529b\u88ad\u51fb\u7684\u7535\u89c6\u62a5\u9053\u5f15\u53d1\u4e86\u5168\u56fd\u6024\u6124\uff0c\u5bf9\u8054\u90a6\u653f\u5e9c\u9020\u6210\u4e86\u5de8\u5927\u538b\u529b\u3002\u53f8\u6cd5\u90e8\u957f\u7f57\u4f2f\u7279\u00b7\u8096\u5c3c\u8fea\u88ab\u8feb\u91c7\u53d6\u884c\u52a8\uff0c\u5dde\u9645\u5546\u52a1\u59d4\u5458\u4f1a\u6700\u7ec8\u53d6\u6d88\u4e86\u5ba2\u8fd0\u7ad9\u7684\u9694\u79bb\u5236\u5ea6\u3002\u6539\u53d8\u516c\u4f17\u7acb\u573a\u7684\u662f\u5a92\u4f53\u5bf9\u548c\u5e73\u6d3b\u52a8\u4eba\u58eb\u906d\u53d7\u66b4\u529b\u7684\u66dd\u5149\u2014\u2014\u800c\u4e0d\u662f\u6cd5\u5f8b\u80dc\u5229\u6216\u8c08\u5224\u3002",
          explainWrongEn: "The correct answer is B. The Freedom Riders did not win specific court cases (option A) or negotiate directly with state governors (option C). The desegregation of bus terminals was not immediate (option D) — it came after months of pressure triggered by the media coverage of violence.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u81ea\u7531\u4e58\u8f66\u8005\u5e76\u672a\u8d62\u5f97\u5177\u4f53\u7684\u6cd5\u5f8b\u6848\u4ef6\uff08\u9009\u9879A\uff09\u6216\u76f4\u63a5\u4e0e\u5dde\u957f\u8c08\u5224\uff08\u9009\u9879C\uff09\u3002\u5ba2\u8fd0\u7ad9\u9694\u79bb\u5236\u5ea6\u7684\u53d6\u6d88\u5e76\u975e\u7acb\u5373\u53d1\u751f\uff08\u9009\u9879D\uff09\u2014\u2014\u5b83\u662f\u5a92\u4f53\u5bf9\u66b4\u529b\u4e8b\u4ef6\u7684\u62a5\u9053\u5f15\u53d1\u6570\u6708\u538b\u529b\u540e\u624d\u5b9e\u73b0\u7684\u3002",
        },
      ],
    },
    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "A",
      title: "The March on Washington, 1963",
      titleZh: "\u534e\u76db\u987f\u6e38\u884c\uff0c1963\u5e74",
      subtitle: "Why the largest civil rights demonstration in US history became the movement's most powerful moment.",
      subtitleZh: "\u4e3a\u4ec0\u4e48\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u5927\u89c4\u6a21\u7684\u6c11\u6743\u793a\u5a01\u6210\u4e3a\u8fd0\u52a8\u6700\u5f3a\u6709\u529b\u7684\u65f6\u523b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe what the March on Washington was and who organised it.", zh: "\u6211\u80fd\u63cf\u8ff0\u534e\u76db\u987f\u6e38\u884c\u662f\u4ec0\u4e48\u4ee5\u53ca\u662f\u8c01\u7ec4\u7ec7\u7684\u3002" },
            { en: "I can explain why it was historically significant.", zh: "\u6211\u80fd\u89e3\u91ca\u5b83\u4e3a\u4ec0\u4e48\u5728\u5386\u53f2\u4e0a\u5177\u6709\u91cd\u8981\u610f\u4e49\u3002" },
            { en: "I can use evidence to argue why the March was or was not the most significant civil rights event.", zh: "\u6211\u80fd\u7528\u8bc1\u636e\u8bba\u8bc1\u6e38\u884c\u662f\u5426\u662f\u6c11\u6743\u8fd0\u52a8\u4e2d\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "On 28 August 1963, between 250,000 and 400,000 people gathered in Washington D.C. for the March on Washington for Jobs and Freedom. It was the largest racially mixed crowd ever to gather in American history. The march was organised by Bayard Rustin and brought together all the major civil rights organisations: the NAACP, SCLC, SNCC, CORE, and the Urban League.",
              zh: "1963 \u5e74 8 \u6708 28 \u65e5\uff0c 25 \u4e07\u81f3 40 \u4e07\u4eba\u805a\u96c6\u534e\u76db\u987f\uff0c\u53c2\u52a0\u4e86\u201c\u4e3a\u5c31\u4e1a\u6743\u548c\u81ea\u7531\u800c\u8fdb\u884c\u7684\u534e\u76db\u987f\u6e38\u884c\u201d\u3002\u8fd9\u662f\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u5927\u89c4\u6a21\u7684\u79cd\u65cf\u6df7\u5408\u811a\u96c6\u4f1a\u3002\u6e38\u884c\u7531\u8d1d\u4e9a\u5f97\u00b7\u9c81\u65af\u4e01\u7ec4\u7ec7\uff0c\u5c06 NAACP\u3001SCLC\u3001SNCC\u3001CORE \u548c\u5c0f\u57ce\u5e02\u8054\u76df\u7b49\u6240\u6709\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\u56e2\u7ed3\u5728\u4e00\u8d77\u3002",
            },
            {
              type: "text",
              en: "The march ended with Martin Luther King Jr. delivering his famous 'I Have a Dream' speech — one of the most powerful and memorable speeches in American history. It was broadcast live on national television. The event helped build enormous pressure on Congress and President Johnson to pass new civil rights legislation.",
              zh: "\u6e38\u884c\u4ee5\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u53d1\u8868\u8457\u540d\u7684\u201c\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\u201d\u6f14\u8bb2\u800c\u5343\u53e4\u3002\u8fd9\u662f\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u6709\u529b\u3001\u6700\u4ee4\u4eba\u96be\u5fd8\u7684\u6f14\u8bb2\u4e4b\u4e00\uff0c\u5b9e\u65f6\u5728\u5168\u56fd\u7535\u89c6\u4e0a\u64ad\u51fa\u3002\u8fd9\u6b21\u6d3b\u52a8\u5efa\u7acb\u4e86\u5de8\u5927\u538b\u529b\uff0c\u4fc3\u4f7f\u56fd\u4f1a\u548c\u8302\u68ee\u603b\u7edf\u901a\u8fc7\u65b0\u7684\u6c11\u6743\u6cd5\u5f8b\u3002",
            },
            {
              type: "highlight",
              en: "Why the March on Washington was significant: it united all the major civil rights groups under one event; it attracted 250,000+ people with roughly 25% white — making civil rights a mainstream national concern; it was televised live, reaching millions; and it directly helped pressure the government toward the Civil Rights Act of 1964.",
              zh: "\u534e\u76db\u987f\u6e38\u884c\u7684\u91cd\u8981\u6027\u5728\u4e8e\uff1a\u5b83\u5c06\u6240\u6709\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\u56e2\u7ed3\u5728\u540c\u4e00\u6d3b\u52a8\u4e2d\uff1b\u5438\u5f15\u4e86\u8d85\u8fc7 25 \u4e07\u4eba\uff0c\u5176\u4e2d\u7ea6 25%\u4e3a\u767d\u4eba\u2014\u2014\u4f7f\u6c11\u6743\u6210\u4e3a\u4e3b\u6d41\u7684\u5168\u56fd\u6027\u5173\u6ce8\uff1b\u5168\u7a0b\u76f4\u64ad\uff0c\u89c6\u9891\u4f20\u5230\u6570\u767e\u4e07\u4e0a\u5343\u4e07\u89c2\u4f17\uff1b\u5e76\u76f4\u63a5\u6709\u52a9\u4e8e\u5411\u653f\u5e9c\u65bd\u538b\uff0c\u4fc3\u6210\u4e86 1964 \u5e74\u300a\u6c11\u6743\u6cd5\u6848\u300b\u7684\u5236\u5b9a\u3002",
            },
            {
              type: "example",
              en: "Think of it like a school assembly where every student — from every year group and every background — shows up to support the same cause. That kind of unity sends a powerful message that cannot easily be dismissed. Now imagine it being filmed and shown on every television in the country. The March on Washington made civil rights impossible to ignore.",
              zh: "\u8fd9\u5c31\u50cf\u4e00\u6b21\u5168\u6821\u96c6\u4f1a\uff0c\u6765\u81ea\u5404\u4e2a\u5e74\u7ea7\u3001\u5404\u79cd\u80cc\u666f\u7684\u6bcf\u4e00\u4e2a\u5b66\u751f\u90fd\u6765\u652f\u6301\u540c\u4e00\u4e2a\u4e8b\u4e1a\u3002\u8fd9\u79cd\u56e2\u7ed3\u53d1\u51fa\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u4fe1\u53f7\uff0c\u8ba9\u4eba\u65e0\u6cd5\u8f7b\u6613\u5ffd\u89c6\u3002\u518d\u60f3\u8c61\u4e00\u4e0b\u8fd9\u4e9b\u753b\u9762\u88ab\u62cd\u6444\u4e0b\u6765\u5e76\u5728\u5168\u56fd\u6bcf\u53f0\u7535\u89c6\u4e0a\u64ad\u51fa\u3002\u534e\u76db\u987f\u6e38\u884c\u4f7f\u6c11\u6743\u95ee\u9898\u53d8\u5f97\u51e0\u4e4e\u4e0d\u53ef\u5ffd\u89c6\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Coalition", zh: "\u8054\u76df", defEn: "A group of different organisations or people working together toward a shared goal.", defZh: "\u4e0d\u540c\u7ec4\u7ec7\u6216\u4e2a\u4eba\u4e3a\u5b9e\u73b0\u5171\u540c\u76ee\u6807\u800c\u5171\u540c\u5f52\u5e76\u7684\u8054\u76df\u3002" },
            { en: "Legislation", zh: "\u7acb\u6cd5", defEn: "Laws made by a government — especially referring to the process of creating new laws.", defZh: "\u653f\u5e9c\u5236\u5b9a\u7684\u6cd5\u5f8b\u2014\u2014\u5c24\u6307\u5236\u5b9a\u65b0\u6cd5\u5f8b\u7684\u8fc7\u7a0b\u3002" },
            { en: "Civil Rights Act 1964", zh: "1964 \u5e74\u300a\u6c11\u6743\u6cd5\u6848\u300b", defEn: "A landmark US law that banned discrimination based on race, colour, religion, sex, or national origin in employment and public facilities.", defZh: "\u7f8e\u56fd\u5177\u6709\u91cc\u7a0b\u7891\u610f\u4e49\u7684\u6cd5\u5f8b\uff0c\u7981\u6b62\u5728\u5c31\u4e1a\u548c\u516c\u5171\u8bbe\u65bd\u4e2d\u57fa\u4e8e\u79cd\u65cf\u3001\u80a4\u8272\u3001\u5b97\u6559\u3001\u6027\u522b\u6216\u5c81\u65cf\u8eab\u4efd\u7684\u6b67\u89c6\u3002" },
            { en: "Federal pressure", zh: "\u8054\u90a6\u538b\u529b", defEn: "Pressure on the national (federal) government — as opposed to state governments — to act on civil rights.", defZh: "\u5bf9\u5168\u56fd\uff08\u8054\u90a6\uff09\u653f\u5e9c\u800c\u975e\u5404\u5dde\u653f\u5e9c\u5728\u6c11\u6743\u95ee\u9898\u4e0a\u91c7\u53d6\u884c\u52a8\u7684\u538b\u529b\u3002" },
          ],
        },
        {
          type: "image",
          caption: "The March on Washington, 28 August 1963 — over 250,000 people gathered at the Lincoln Memorial, where Martin Luther King Jr. delivered 'I Have a Dream'",
          captionZh: "1963 \u5e74 8 \u6708 28 \u65e5\u534e\u76db\u987f\u6e38\u884c\u2014\u2014\u8d85\u8fc7 25 \u4e07\u4eba\u805a\u96c6\u4e8e\u6797\u80af\u7eaa\u5ff5\u5802\uff0c\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u5728\u6b64\u53d1\u8868\u201c\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\u201d\u6f14\u8bb2",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/March_on_washington_Aug_28_1963.jpg",
        },
        {
          type: "source",
          labelEn: "From classroom materials: why the March on Washington was the most significant event",
          labelZh: "\u6765\u81ea\u8bfe\u5802\u6750\u6599\uff1a\u534e\u76db\u987f\u6e38\u884c\u4e3a\u4ec0\u4e48\u662f\u6700\u91cd\u8981\u7684\u4e8b\u4ef6",
          en: "The March on Washington was the most significant civil rights event because it led to significant media attention, involved the cooperation of many civil rights groups and resulted in federal government action, which led to legislative change in a way that no other event had achieved. Drawing over 250,000 participants, including a multiracial coalition, it demonstrated unprecedented national unity. The event was televised live, and King's speech became one of the most iconic in American history, galvanising public opinion and support for the movement.",
          zh: "\u534e\u76db\u987f\u6e38\u884c\u662f\u6700\u91cd\u8981\u7684\u6c11\u6743\u4e8b\u4ef6\uff0c\u56e0\u4e3a\u5b83\u5f15\u53d1\u4e86\u5de8\u5927\u7684\u5a92\u4f53\u5173\u6ce8\uff0c\u6d89\u53ca\u4e86\u591a\u4e2a\u6c11\u6743\u7ec4\u7ec7\u7684\u5408\u4f5c\uff0c\u5e76\u5bfc\u81f4\u8054\u90a6\u653f\u5e9c\u91c7\u53d6\u884c\u52a8\uff0c\u4fc3\u6210\u4e86\u7acb\u6cd5\u53d8\u9769\u2014\u2014\u8fd9\u662f\u4efb\u4f55\u5176\u4ed6\u4e8b\u4ef6\u6240\u6ca1\u6709\u505a\u5230\u7684\u3002\u5438\u5f15\u8d85\u8fc7 25 \u4e07\u4e2a\u591a\u79cd\u65cf\u88d4\u53c2\u4e0e\u8005\u52a0\u5165\uff0c\u5c55\u73b0\u4e86\u7a7a\u524d\u7684\u5168\u56fd\u56e2\u7ed3\u3002\u6e38\u884c\u5168\u7a0b\u76f4\u64ad\uff0c\u91d1\u535a\u58eb\u7684\u6f14\u8bb2\u6210\u4e3a\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u6807\u5fd7\u6027\u7684\u6f14\u8bb2\u4e4b\u4e00\uff0c\u6fc0\u53d1\u4e86\u516c\u4f17\u6b0a\u8bba\u548c\u5bf9\u8fd0\u52a8\u7684\u652f\u6301\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The March on Washington included around 25% white participants. Why was that racial diversity particularly important for the movement's message?",
              qZh: "\u534e\u76db\u987f\u6e38\u884c\u7684\u53c2\u4e0e\u8005\u4e2d\u5927\u7ea6\u6709 25%\u4e3a\u767d\u4eba\u3002\u8fd9\u79cd\u79cd\u65cf\u591a\u6837\u6027\u5bf9\u8fd0\u52a8\u7684\u4fe1\u606f\u4f20\u9012\u4e3a\u4ec0\u4e48\u5c24\u4e3a\u91cd\u8981\uff1f",
              aEn: "Having white participants showed that civil rights was not just a demand from one racial group for its own benefit — it was a moral cause that Americans of all backgrounds could support. This made it much harder for opponents to dismiss the movement as divisive or extremist. It also sent a message to Congress and the President: the demand for civil rights had support across racial lines, making inaction increasingly difficult to justify politically.",
              aZh: "\u767d\u4eba\u53c2\u4e0e\u8005\u7684\u5b58\u5728\u8bf4\u660e\uff0c\u6c11\u6743\u5e76\u975e\u4ec5\u4ec5\u662f\u67d0\u4e00\u79cd\u65cf\u88d4\u4e3a\u81ea\u8eab\u5229\u76ca\u63d0\u51fa\u7684\u8bc9\u6c42\u2014\u2014\u5b83\u662f\u4e00\u4e2a\u5404\u79cd\u80cc\u666f\u7684\u7f8e\u56fd\u4eba\u90fd\u53ef\u4ee5\u652f\u6301\u7684\u9053\u5fb7\u4e8b\u4e1a\u3002\u8fd9\u4e5f\u5bfc\u81f4\u5bf9\u7acb\u4e00\u65b9\u66f4\u96be\u5c06\u8fd0\u52a8\u8bd4\u5e03\u4e3a\u5206\u88c2\u6027\u6216\u6781\u7aef\u7684\u3002\u8fd9\u540c\u65f6\u4e5f\u5411\u56fd\u4f1a\u548c\u603b\u7edf\u4f20\u9012\u4e86\u4e00\u4e2a\u4fe1\u606f\uff1a\u6c11\u6743\u8bc9\u6c42\u5df2\u5f97\u5230\u4e86\u8de8\u79cd\u65cf\u754c\u9650\u7684\u652f\u6301\uff0c\u8fd9\u4f7f\u5f97\u4e0d\u4f5c\u4e3a\u5728\u653f\u6cbb\u4e0a\u8d8a\u6765\u8d8a\u96be\u4ee5\u8fa9\u62a4\u3002",
            },
            {
              qEn: "The classroom materials argue that the March on Washington was the most significant civil rights event. Do you agree, or do you think another event — such as Brown v. Board or the Montgomery Bus Boycott — deserves that title? Use evidence.",
              qZh: "\u8bfe\u5802\u6750\u6599\u8ba4\u4e3a\u534e\u76db\u987f\u6e38\u884c\u662f\u6700\u91cd\u8981\u7684\u6c11\u6743\u4e8b\u4ef6\u3002\u4f60\u8d5e\u540c\u5417\uff1f\u8fd8\u662f\u4f60\u8ba4\u4e3a\u5e03\u6717\u6848\u6216\u8499\u54e5\u9a6c\u5229\u629a\u5236\u8fd0\u52a8\u7b49\u5176\u4ed6\u4e8b\u4ef6\u66f4\u5e94\u83b7\u5f97\u8fd9\u4e2a\u8363\u8a89\uff1f\u8bf7\u7528\u8bc1\u636e\u652f\u6301\u4f60\u7684\u89c2\u70b9\u3002",
              aEn: "A strong case can be made for the March on Washington — it united all groups, attracted the largest crowd, gained the most media attention, and most directly contributed to the Civil Rights Act. However, Brown v. Board was the crucial legal breakthrough that established the constitutional principle against segregation. The Montgomery Boycott proved that non-violent mass protest could succeed and produced the movement's most important leader. A balanced argument might note that the March was the most visible turning point, but it built on earlier events that made it possible.",
              aZh: "\u53ef\u4ee5\u4e3a\u534e\u76db\u987f\u6e38\u884c\u63d0\u51fa\u6709\u529b\u7684\u8bba\u636e\u2014\u2014\u5b83\u56e2\u7ed3\u4e86\u6240\u6709\u7ec4\u7ec7\uff0c\u5438\u5f15\u4e86\u6700\u5927\u7684\u4eba\u7fa4\uff0c\u83b7\u5f97\u4e86\u6700\u591a\u7684\u5a92\u4f53\u5173\u6ce8\uff0c\u4e14\u6700\u76f4\u63a5\u5730\u4e3a\u300a\u6c11\u6743\u6cd5\u6848\u300b\u505a\u51fa\u4e86\u8d21\u732e\u3002\u7136\u800c\uff0c\u5e03\u6717\u6848\u662f\u81f3\u5173\u91cd\u8981\u7684\u6cd5\u5f8b\u7a81\u7834\u53e3\uff0c\u786e\u7acb\u4e86\u53cd\u5bf9\u9694\u79bb\u7684\u5baa\u6cd5\u539f\u5219\u3002\u8499\u54e5\u9a6c\u5229\u629a\u5236\u8fd0\u52a8\u8bc1\u660e\u975e\u66b4\u529b\u5927\u89c4\u6a21\u629a\u9b41\u80fd\u591f\u53d6\u5f97\u6210\u529f\uff0c\u5e76\u57f9\u80b2\u4e86\u8fd0\u52a8\u6700\u91cd\u8981\u7684\u9886\u8896\u4eba\u7269\u3002\u5e73\u8861\u7684\u8bba\u8bc1\u53ef\u8bb2\uff1a\u6e38\u884c\u662f\u6700\u5f15\u4eba\u6ce8\u76ee\u7684\u8f6c\u6298\u70b9\uff0c\u4f46\u5b83\u5efa\u7acb\u5728\u65e9\u671f\u4e8b\u4ef6\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u6b63\u662f\u90a3\u4e9b\u65e9\u671f\u4e8b\u4ef6\u4f7f\u5b83\u6210\u4e3a\u53ef\u80fd\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best explains why the March on Washington (1963) is considered the most significant civil rights event?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u534e\u76db\u987f\u6e38\u884c\uff081963 \u5e74\uff09\u88ab\u8ba4\u4e3a\u662f\u6700\u91cd\u8981\u7684\u6c11\u6743\u4e8b\u4ef6\uff1f",
          opts: [
            { en: "Because it was the first time Black Americans had ever protested together", zh: "\u56e0\u4e3a\u8fd9\u662f\u9ed1\u4eba\u7b2c\u4e00\u6b21\u5171\u540c\u629a\u9b41" },
            { en: "Because it united major civil rights groups, drew massive media coverage, and directly contributed to the Civil Rights Act of 1964", zh: "\u56e0\u4e3a\u5b83\u56e2\u7ed3\u4e86\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\uff0c\u5f15\u53d1\u5de8\u5927\u5a92\u4f53\u5173\u6ce8\uff0c\u5e76\u76f4\u63a5\u4fc3\u6210\u4e861964 \u5e74\u300a\u6c11\u6743\u6cd5\u6848\u300b\u7684\u5236\u5b9a" },
            { en: "Because Martin Luther King Jr. became famous for the first time at the March", zh: "\u56e0\u4e3a\u9a6c\u4e01\u00b7\u8def\u5fb7\u00b7\u91d1\u535a\u58eb\u662f\u5728\u6e38\u884c\u4e2d\u9996\u6b21\u58f0\u540d\u5927\u8d77" },
            { en: "Because it was the only civil rights event that was broadcast on television", zh: "\u56e0\u4e3a\u8fd9\u662f\u552f\u4e00\u4e00\u6b21\u5728\u7535\u89c6\u4e0a\u64ad\u51fa\u7684\u6c11\u6743\u4e8b\u4ef6" },
          ],
          correct: 1,
          explainCorrectEn: "The March on Washington is considered the most significant event because it united all major civil rights organisations, drew the largest multiracial crowd in American history, was broadcast live nationally, and directly contributed to the political pressure that produced the Civil Rights Act of 1964. No other event combined all of these elements.",
          explainCorrectZh: "\u534e\u76db\u987f\u6e38\u884c\u88ab\u8ba4\u4e3a\u662f\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\uff0c\u56e0\u4e3a\u5b83\u56e2\u7ed3\u4e86\u6240\u6709\u4e3b\u8981\u6c11\u6743\u7ec4\u7ec7\uff0c\u5438\u5f15\u4e86\u7f8e\u56fd\u5386\u53f2\u4e0a\u6700\u5927\u89c4\u6a21\u7684\u591a\u79cd\u65cf\u88d4\u4eba\u7fa4\uff0c\u5168\u56fd\u76f4\u64ad\uff0c\u5e76\u76f4\u63a5\u4fc3\u6210\u4e86 1964 \u5e74\u300a\u6c11\u6743\u6cd5\u6848\u300b\u5236\u5b9a\u7684\u653f\u6cbb\u538b\u529b\u3002\u5176\u4ed6\u4e8b\u4ef6\u5747\u672a\u80fd\u5c06\u8fd9\u4e9b\u8981\u7d20\u5168\u90e8\u7ed3\u5408\u5728\u4e00\u8d77\u3002",
          explainWrongEn: "The correct answer is B. Option A is incorrect — earlier protests also brought Black Americans together. Option C is wrong — MLK became nationally famous during the Montgomery Boycott, not the March. Option D is wrong — other events, such as the Freedom Rides, were also covered on television.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u9009\u9879A\u4e0d\u6b63\u786e\u2014\u2014\u5728\u6b64\u4e4b\u524d\u7684\u629a\u9b41\u6d3b\u52a8\u540c\u6837\u5c06\u9ed1\u4eba\u8054\u5408\u5728\u4e00\u8d77\u3002\u9009\u9879C\u9519\u8bef\u2014\u2014\u91d1\u535a\u58eb\u5728\u8499\u54e5\u9a6c\u5229\u629a\u5236\u8fd0\u52a8\u671f\u95f4\u5c31\u5df2\u5728\u5168\u56fd\u58f0\u540d\u5927\u8d77\uff0c\u800c\u975e\u6e38\u884c\u65f6\u3002\u9009\u9879D\u9519\u8bef\u2014\u2014\u5176\u4ed6\u4e8b\u4ef6\uff0c\u5982\u81ea\u7531\u4e58\u8f66\u8fd0\u52a8\uff0c\u4e5f\u66fe\u5728\u7535\u89c6\u4e0a\u64ad\u51fa\u3002",
        },
      ],
    },
    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "E",
      title: "How significant were the civil rights events?",
      titleZh: "\u6c11\u6743\u4e8b\u4ef6\u7684\u91cd\u8981\u6027\u5982\u4f55\u8bc4\u4ef7\uff1f",
      subtitle: "Using significance criteria to compare and rank the key events of the Civil Rights Movement.",
      subtitleZh: "\u8fd0\u7528\u91cd\u8981\u6027\u6807\u51c6\u6bd4\u8f83\u548c\u6392\u5217\u6c11\u6743\u8fd0\u52a8\u7684\u5173\u952e\u4e8b\u4ef6\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can name and apply at least four criteria for judging historical significance.", zh: "\u6211\u80fd\u547d\u540d\u5e76\u8fd0\u7528\u81f3\u5c11\u56db\u4e2a\u8bc4\u5224\u5386\u53f2\u91cd\u8981\u6027\u7684\u6807\u51c6\u3002" },
            { en: "I can rank the civil rights events and justify my ranking using evidence.", zh: "\u6211\u80fd\u5bf9\u6c11\u6743\u4e8b\u4ef6\u8fdb\u884c\u6392\u5217\u5e76\u7528\u8bc1\u636e\u8bf4\u660e\u6211\u7684\u6392\u5217\u7406\u7531\u3002" },
            { en: "I can write a structured argument explaining which event I think was most and least significant.", zh: "\u6211\u80fd\u64b0\u5199\u7ed3\u6784\u6027\u8bba\u8bc1\uff0c\u89e3\u91ca\u6211\u8ba4\u4e3a\u54ea\u4e2a\u4e8b\u4ef6\u6700\u91cd\u8981\u3001\u54ea\u4e2a\u6700\u4e0d\u91cd\u8981\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "In history, not all events are equally important. Historians use the idea of 'historical significance' to judge which events had the biggest impact — on laws, on public attitudes, on future events, and on people's lives. Being able to compare and rank events using clear criteria is one of the most important historical skills.",
              zh: "\u5728\u5386\u53f2\u4e0a\uff0c\u5e76\u975e\u6240\u6709\u4e8b\u4ef6\u90fd\u540c\u7b49\u91cd\u8981\u3002\u5386\u53f2\u5b66\u5bb6\u5229\u7528\u201c\u5386\u53f2\u91cd\u8981\u6027\u201d\u7684\u6982\u5ff5\u6765\u5224\u65ad\u54ea\u4e9b\u4e8b\u4ef6\u5f71\u54cd\u6700\u5927\u2014\u2014\u5bf9\u6cd5\u5f8b\u3001\u516c\u4f17\u6001\u5ea6\u3001\u672a\u6765\u4e8b\u4ef6\u4ee5\u53ca\u4eba\u6c11\u751f\u6d3b\u7684\u5f71\u54cd\u3002\u8fd0\u7528\u660e\u786e\u6807\u51c6\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u6bd4\u8f83\u548c\u6392\u5217\uff0c\u662f\u6700\u91cd\u8981\u7684\u5386\u53f2\u6280\u80fd\u4e4b\u4e00\u3002",
            },
            {
              type: "highlight",
              en: "The eight criteria for judging historical significance: (1) Impact on law and legislation, (2) Media attention, (3) Level of opposition overcome, (4) Public support generated, (5) Influence on other civil rights events, (6) Involvement of different groups, (7) Federal government involvement, (8) Long-term impact.",
              zh: "\u8bc4\u5224\u5386\u53f2\u91cd\u8981\u6027\u7684\u516b\u4e2a\u6807\u51c6\uff1a\uff081\uff09\u5bf9\u6cd5\u5f8b\u548c\u7acb\u6cd5\u7684\u5f71\u54cd\uff1b\uff082\uff09\u5a92\u4f53\u5173\u6ce8\u5ea6\uff1b\uff083\uff09\u514b\u670d\u7684\u5bf9\u7acb\u7a0b\u5ea6\uff1b\uff084\uff09\u4ea7\u751f\u7684\u516c\u4f17\u652f\u6301\uff1b\uff085\uff09\u5bf9\u5176\u4ed6\u6c11\u6743\u4e8b\u4ef6\u7684\u5f71\u54cd\uff1b\uff086\uff09\u6d89\u53ca\u7684\u4e0d\u540c\u7fa4\u4f53\uff1b\uff087\uff09\u8054\u90a6\u653f\u5e9c\u7684\u53c2\u4e0e\uff1b\uff088\uff09\u957f\u671f\u5f71\u54cd\u3002",
            },
            {
              type: "text",
              en: "The eight key events to compare: Brown v. Board of Education (1954), Montgomery Bus Boycott (1955-56), Little Rock Nine (1957), Greensboro Four (1960), Freedom Riders (1961), March on Washington (1963), Civil Rights Act (1964), Voting Rights Act (1965).",
              zh: "\u9700\u8981\u6bd4\u8f83\u7684\u516b\u4e2a\u5173\u952e\u4e8b\u4ef6\uff1a\u5e03\u6717\u8bc9\u6559\u80b2\u59d4\u5458\u4f1a\u6848\uff081954 \u5e74\uff09\u3001\u8499\u54e5\u9a6c\u5229\u516c\u5171\u6c7d\u8f66\u629a\u5236\u8fd0\u52a8\uff081955-56 \u5e74\uff09\u3001\u5c0f\u77f3\u57ce\u4e5d\u4eba\uff081957 \u5e74\uff09\u3001\u683c\u6797\u65af\u4f2f\u7f57\u56db\u4eba\uff081960 \u5e74\uff09\u3001\u81ea\u7531\u4e58\u8f66\u8005\uff081961 \u5e74\uff09\u3001\u534e\u76db\u987f\u6e38\u884c\uff081963 \u5e74\uff09\u3001\u300a\u6c11\u6743\u6cd5\u6848\u300b\uff081964 \u5e74\uff09\u3001\u300a\u6295\u7968\u6743\u5229\u6cd5\u6848\u300b\uff081965 \u5e74\uff09\u3002",
            },
            {
              type: "example",
              en: "Think of significance criteria like judges' scoring cards at a competition. Every event gets marks for different things — legal impact, media attention, inspiring others, getting the government to act. An event that scores highly across many criteria is more significant overall than one that excels in only one area. Your job as a historian is to apply those criteria consistently and justify your scores with evidence.",
              zh: "\u53ef\u4ee5\u5c06\u91cd\u8981\u6027\u6807\u51c6\u60f3\u8c61\u6210\u6bd4\u8d5b\u4e2d\u8bc4\u59d4\u7684\u8bc4\u5206\u8868\u3002\u6bcf\u4e2a\u4e8b\u4ef6\u5728\u4e0d\u540c\u65b9\u9762\u83b7\u5f97\u5206\u6570\u2014\u2014\u6cd5\u5f8b\u5f71\u54cd\u3001\u5a92\u4f53\u5173\u6ce8\u5ea6\u3001\u6fc0\u52b1\u4ed6\u4eba\u7684\u4f5c\u7528\u3001\u4fc3\u4f7f\u653f\u5e9c\u91c7\u53d6\u884c\u52a8\u3002\u5728\u591a\u4e2a\u6807\u51c6\u4e0a\u5f97\u5206\u90fd\u9ad8\u7684\u4e8b\u4ef6\uff0c\u6574\u4f53\u4e0a\u6bd4\u4ec5\u5728\u5c11\u6570\u6837\u5f3a\u7684\u4e8b\u4ef6\u66f4\u91cd\u8981\u3002\u4f5c\u4e3a\u5386\u53f2\u5b66\u5bb6\uff0c\u4f60\u7684\u4efb\u52a1\u662f\u4e00\u8d2f\u5730\u8fd0\u7528\u8fd9\u4e9b\u6807\u51c6\uff0c\u5e76\u7528\u8bc1\u636e\u4e3a\u81ea\u5df1\u7684\u8bc4\u5206\u8fdb\u884c\u8fa9\u62a4\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Historical significance", zh: "\u5386\u53f2\u91cd\u8981\u6027", defEn: "The degree to which a historical event had a major impact on people's lives, laws, attitudes, or future events.", defZh: "\u5386\u53f2\u4e8b\u4ef6\u5bf9\u4eba\u6c11\u751f\u6d3b\u3001\u6cd5\u5f8b\u3001\u6001\u5ea6\u6216\u672a\u6765\u4e8b\u4ef6\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\u7684\u7a0b\u5ea6\u3002" },
            { en: "Criteria", zh: "\u6807\u51c6", defEn: "The specific standards used to measure or judge something — in history, the criteria for significance.", defZh: "\u7528\u4e8e\u8861\u91cf\u6216\u5224\u65ad\u67d0\u4e8b\u7684\u5177\u4f53\u6807\u51c6\u2014\u2014\u5728\u5386\u53f2\u4e0a\uff0c\u5373\u91cd\u8981\u6027\u7684\u6807\u51c6\u3002" },
            { en: "Voting Rights Act 1965", zh: "1965 \u5e74\u300a\u6295\u7968\u6743\u5229\u6cd5\u6848\u300b", defEn: "A US law that protected the voting rights of African Americans by banning discriminatory practices such as literacy tests.", defZh: "\u7f8e\u56fd\u6cd5\u5f8b\uff0c\u901a\u8fc7\u7981\u6b62\u8bc6\u5b57\u6d4b\u8bd5\u7b49\u6b67\u89c6\u6027\u505a\u6cd5\u6765\u4fdd\u62a4\u975e\u88d4\u7f8e\u56fd\u4eba\u7684\u6295\u7968\u6743\u3002" },
            { en: "Counter-argument", zh: "\u53cd\u8bba", defEn: "An argument that challenges or qualifies your main argument — used to show you understand more than one point of view.", defZh: "\u4e00\u4e2a\u6311\u6218\u6216\u4fee\u6b63\u4f60\u4e3b\u8981\u8bba\u8bc1\u7684\u8bba\u70b9\u2014\u2014\u7528\u4e8e\u8868\u660e\u4f60\u7406\u89e3\u591a\u79cd\u89c2\u70b9\u3002" },
          ],
        },
        {
          type: "image",
          caption: "A graph from the classroom showing civil rights events ranked by significance — your task is to judge where each event should sit",
          captionZh: "\u8bfe\u5ba4\u4e2d\u5c55\u793a\u6c11\u6743\u4e8b\u4ef6\u91cd\u8981\u6027\u6392\u540d\u7684\u56fe\u8868\u2014\u2014\u4f60\u7684\u4efb\u52a1\u662f\u5224\u65ad\u6bcf\u4e2a\u4e8b\u4ef6\u5e94\u5904\u4e8e\u54ea\u4e2a\u4f4d\u7f6e",
          source: "Classroom materials (Shrewsbury School, Y8 History)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Luther_King_Jr_NYWTS.jpg",
        },
        {
          type: "source",
          labelEn: "From the classroom assessment: criteria for significance",
          labelZh: "\u6765\u81ea\u8bfe\u5ba4\u8bc4\u4f30\uff1a\u91cd\u8981\u6027\u6807\u51c6",
          en: "The classroom assessment gives these criteria for historical significance: impact on law and legislation; media attention; level of opposition; public support; influence on other civil rights events; involvement of different groups; federal government involvement; long-term impact. Students are asked to rank the events and explain which was most significant, making reference to at least one other event for comparison.",
          zh: "\u8bfe\u5ba4\u8bc4\u4f30\u63d0\u4f9b\u4e86\u8fd9\u4e9b\u5386\u53f2\u91cd\u8981\u6027\u6807\u51c6\uff1a\u5bf9\u6cd5\u5f8b\u548c\u7acb\u6cd5\u7684\u5f71\u54cd\uff1b\u5a92\u4f53\u5173\u6ce8\u5ea6\uff1b\u5bf9\u7acb\u7a0b\u5ea6\uff1b\u516c\u4f17\u652f\u6301\uff1b\u5bf9\u5176\u4ed6\u6c11\u6743\u4e8b\u4ef6\u7684\u5f71\u54cd\uff1b\u6d89\u53ca\u7684\u4e0d\u540c\u7fa4\u4f53\uff1b\u8054\u90a6\u653f\u5e9c\u53c2\u4e0e\uff1b\u957f\u671f\u5f71\u54cd\u3002\u8981\u6c42\u5b66\u751f\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u6392\u5217\uff0c\u5e76\u89e3\u91ca\u54ea\u4e2a\u4e8b\u4ef6\u6700\u91cd\u8981\uff0c\u81f3\u5c11\u5f15\u7528\u53e6\u4e00\u4e2a\u4e8b\u4ef6\u8fdb\u884c\u6bd4\u8f83\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Using the significance criteria, explain why you think the Little Rock Nine (1957) might be argued to be more significant than the Greensboro Four (1960), even though Greensboro is often seen as more dramatic.",
              qZh: "\u8fd0\u7528\u91cd\u8981\u6027\u6807\u51c6\uff0c\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5c0f\u77f3\u57ce\u4e5d\u4eba\uff081957 \u5e74\uff09\u53ef\u80fd\u88ab\u8ba4\u4e3a\u6bd4\u683c\u6797\u65af\u4f2f\u7f57\u56db\u4eba\uff081960 \u5e74\uff09\u66f4\u91cd\u8981\uff0c\u5c3d\u7ba1\u683c\u6797\u65af\u4f2f\u7f57\u901a\u5e38\u88ab\u8ba4\u4e3a\u66f4\u52a8\u4eba\u5fc3\u5f26\u3002",
              aEn: "Little Rock involved direct federal government intervention — President Eisenhower sent 1,200 federal troops to enforce desegregation. This showed that the federal government could and would act to enforce civil rights, setting an important precedent. Greensboro spread the tactic of sit-ins and was highly significant for mobilising student protest — but it did not produce a comparable federal response. Using the criterion of 'federal government involvement', Little Rock may rank higher even if Greensboro produced more visible public action.",
              aZh: "\u5c0f\u77f3\u57ce\u6d89\u53ca\u76f4\u63a5\u7684\u8054\u90a6\u653f\u5e9c\u5e72\u9884\u2014\u2014\u827e\u68ee\u8c6a\u5a01\u5c14\u603b\u7edf\u6d3e\u9063 1200 \u540d\u8054\u90a6\u519b\u961f\u5f3a\u5236\u5b9e\u65bd\u53d6\u6d88\u9694\u79bb\u3002\u8fd9\u8bf4\u660e\u8054\u90a6\u653f\u5e9c\u80fd\u591f\u4e5f\u613f\u610f\u91c7\u53d6\u884c\u52a8\u6267\u884c\u6c11\u6743\uff0c\u8fd9\u4e3a\u65e5\u540e\u811a\u5f00\u4e86\u91cd\u8981\u5148\u4f8b\u3002\u683c\u6797\u65af\u4f2f\u7f57\u4f20\u64ad\u4e86\u775c\u5ea7\u629a\u9b41\u6218\u672f\uff0c\u5bf9\u52a8\u5458\u5b66\u751f\u629a\u9b41\u5177\u6709\u91cd\u8981\u610f\u4e49\u2014\u2014\u4f46\u5b83\u5e76\u6ca1\u6709\u4ea7\u751f\u53ef\u6bd4\u62df\u7684\u8054\u90a6\u53cd\u5e94\u3002\u6309\u5df2\u300c\u8054\u90a6\u653f\u5e9c\u53c2\u4e0e\u300d\u6807\u51c6\uff0c\u5c0f\u77f3\u57ce\u53ef\u80fd\u6392\u540d\u66f4\u9ad8\uff0c\u5373\u4f7f\u683c\u6797\u65af\u4f2f\u7f57\u4ea7\u751f\u4e86\u66f4\u663e\u773c\u7684\u516c\u4f17\u884c\u52a8\u3002",
            },
            {
              qEn: "Which event do you personally think was least significant, and why? Use at least two criteria to support your argument.",
              qZh: "\u4f60\u4e2a\u4eba\u8ba4\u4e3a\u54ea\u4e2a\u4e8b\u4ef6\u6700\u4e0d\u91cd\u8981\uff1f\u4e3a\u4ec0\u4e48\uff1f\u8bf7\u81f3\u5c11\u7528\u4e24\u4e2a\u6807\u51c6\u652f\u6301\u4f60\u7684\u8bba\u8bc1\u3002",
              aEn: "A reasonable case can be made that the Greensboro Four, while important for spreading sit-ins and youth involvement, ranks lower in terms of direct legal impact and federal government involvement. It did not produce an immediate law change (legal impact criterion) and did not directly involve the federal government (federal government criterion). However, its influence on other civil rights events — spreading sit-ins across the South — scores highly, which is why any answer needs to weigh multiple criteria and acknowledge trade-offs.",
              aZh: "\u53ef\u4ee5\u5408\u7406\u5730\u8bba\u8bc1\u8bf4\uff0c\u683c\u6797\u65af\u4f2f\u7f57\u56db\u4eba\u5c3d\u7ba1\u5bf9\u4fc3\u8fdb\u775c\u5ea7\u629a\u9b41\u548c\u9752\u5e74\u53c2\u4e0e\u5177\u6709\u91cd\u8981\u610f\u4e49\uff0c\u4f46\u5728\u76f4\u63a5\u6cd5\u5f8b\u5f71\u54cd\u548c\u8054\u90a6\u653f\u5e9c\u53c2\u4e0e\u65b9\u9762\u6392\u540d\u8f83\u4f4e\u3002\u5b83\u5e76\u6ca1\u6709\u7acb\u5373\u4ea7\u751f\u6cd5\u5f8b\u53d8\u9769\uff08\u6cd5\u5f8b\u5f71\u54cd\u6807\u51c6\uff09\uff0c\u4e5f\u6ca1\u6709\u76f4\u63a5\u8d49\u53ca\u8054\u90a6\u653f\u5e9c\uff08\u8054\u90a6\u653f\u5e9c\u6807\u51c6\uff09\u3002\u7136\u800c\uff0c\u5b83\u5bf9\u5176\u4ed6\u6c11\u6743\u4e8b\u4ef6\u7684\u5f71\u54cd\u2014\u2014\u5c06\u775c\u5ea7\u629a\u9b41\u8fcb\u5ef6\u5230\u5357\u65b9\u5404\u5730\u2014\u2014\u5f97\u5206\u5f88\u9ad8\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u4efb\u4f55\u56de\u7b54\u90fd\u9700\u8981\u6743\u8861\u591a\u4e2a\u6807\u51c6\u5e76\u627f\u8ba4\u5176\u95f4\u53d6\u820d\u5173\u7cfb\u7684\u539f\u56e0\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "A student argues: 'The Civil Rights Act (1964) was the most significant event because it changed the law.' Which of the following is the strongest counter-argument to this claim?",
          qZh: "\u4e00\u4e2a\u5b66\u751f\u8ba4\u4e3a\uff1a\u201c\u300a\u6c11\u6743\u6cd5\u6848\u300b\uff081964 \u5e74\uff09\u662f\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\uff0c\u56e0\u4e3a\u5b83\u6539\u53d8\u4e86\u6cd5\u5f8b\u3002\u201d\u4ee5\u4e0b\u54ea\u9879\u662f\u5bf9\u8fd9\u4e00\u89c2\u70b9\u6700\u5f3a\u6709\u529b\u7684\u53cd\u8bba\uff1f",
          opts: [
            { en: "The Voting Rights Act (1965) also changed the law, so they are equally significant", zh: "\u300a\u6295\u7968\u6743\u5229\u6cd5\u6848\u300b\uff081965 \u5e74\uff09\u4e5f\u6539\u53d8\u4e86\u6cd5\u5f8b\uff0c\u56e0\u6b64\u5b83\u4eec\u540c\u7b49\u91cd\u8981" },
            { en: "The Civil Rights Act would not have been possible without the March on Washington, which created the political pressure that made the law happen", zh: "\u6ca1\u6709\u534e\u76db\u987f\u6e38\u884c\u521b\u9020\u7684\u653f\u6cbb\u538b\u529b\uff0c\u300a\u6c11\u6743\u6cd5\u6848\u300b\u5c31\u4e0d\u53ef\u80fd\u5236\u5b9a" },
            { en: "Changing the law is always less important than changing people's minds", zh: "\u6539\u53d8\u6cd5\u5f8b\u603b\u662f\u6bd4\u6539\u53d8\u4eba\u4eec\u7684\u601d\u60f3\u66f4\u4e0d\u91cd\u8981" },
            { en: "The Civil Rights Act was passed by politicians, not protesters, so it does not count as a civil rights achievement", zh: "\u300a\u6c11\u6743\u6cd5\u6848\u300b\u662f\u7531\u653f\u6cbb\u5bb6\u800c\u975e\u629a\u9b41\u8005\u901a\u8fc7\u7684\uff0c\u56e0\u6b64\u4e0d\u5c5e\u4e8e\u6c11\u6743\u6210\u5c31" },
          ],
          correct: 1,
          explainCorrectEn: "The strongest counter-argument is that the Civil Rights Act did not emerge from nowhere — it was the product of years of pressure from protests, marches, and public outrage. Without the March on Washington, the Montgomery Boycott, and the Freedom Riders building public and political pressure, the Act may never have passed. This shows that the protests themselves were just as significant as the law they helped produce.",
          explainCorrectZh: "\u6700\u5f3a\u6709\u529b\u7684\u53cd\u8bba\u662f\uff0c\u300a\u6c11\u6743\u6cd5\u6848\u300b\u5e76\u975e\u51ed\u7a7a\u800c\u6765\u2014\u2014\u5b83\u662f\u591a\u5e74\u6765\u629a\u9b41\u3001\u6e38\u884c\u548c\u516c\u4f17\u6124\u6012\u5e26\u6765\u7684\u538b\u529b\u7684\u4ea7\u7269\u3002\u5982\u679c\u6ca1\u6709\u534e\u76db\u987f\u6e38\u884c\u3001\u8499\u54e5\u9a6c\u5229\u629a\u5236\u548c\u81ea\u7531\u4e58\u8f66\u8005\u5efa\u7acb\u516c\u4f17\u548c\u653f\u6cbb\u538b\u529b\uff0c\u8fd9\u90e8\u6cd5\u5f8b\u6216\u8bb8\u6c38\u8fdc\u65e0\u6cd5\u901a\u8fc7\u3002\u8fd9\u8bf4\u660e\u629a\u9b41\u672c\u8eab\u4e0e\u5b83\u4eec\u5e2e\u52a9\u5236\u5b9a\u7684\u6cd5\u5f8b\u540c\u7b49\u91cd\u8981\u3002",
          explainWrongEn: "The correct answer is B. Option A only adds another example of law-changing without addressing the original claim. Option C makes an overreaching statement that is hard to defend. Option D is wrong — civil rights laws passed by Congress were directly the goal of the movement.",
          explainWrongZh: "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u9009\u9879A\u53ea\u662f\u6dfb\u52a0\u4e86\u53e6\u4e00\u4e2a\u6cd5\u5f8b\u53d8\u9769\u7684\u4f8b\u5b50\uff0c\u5e76\u6ca1\u6709\u89e3\u51b3\u539f\u6765\u7684\u4e3b\u5f20\u3002\u9009\u9879C\u63d0\u51fa\u4e86\u96be\u4ee5\u5c55\u5f00\u8fa9\u62a4\u7684\u8fc7\u5ea6\u4e3b\u5f20\u3002\u9009\u9879D\u9519\u8bef\u2014\u2014\u56fd\u4f1a\u5236\u5b9a\u7684\u6c11\u6743\u6cd5\u5f8b\u6b63\u662f\u8fd9\u4e00\u8fd0\u52a8\u7684\u76f4\u63a5\u76ee\u6807\u3002",
        },
      ],
    },
  ],
};
