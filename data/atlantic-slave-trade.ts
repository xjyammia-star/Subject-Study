import { Topic } from "./types";

export const atlanticSlaveTrade: Topic = {
  slug: "atlantic-slave-trade",
  name: "The Atlantic Slave Trade",
  nameZh: "大西洋奴隶贸易",
  subject: "History",
  subjectZh: "历史",
  year: "Year 8",
  lessons: [
    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "Africa before the slave trade",
      titleZh: "奴隶贸易前的非洲",
      subtitle:
        "Understanding where enslaved people came from — and what they left behind.",
      subtitleZh: "理解被奴役者来自哪里，以及他们失去了什么。",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe what Africa was like before the Atlantic slave trade began.",
              zh: "我能描述大西洋奴隶贸易开始前非洲的样貌。",
            },
            {
              en: "I can name examples of African kingdoms and trading goods.",
              zh: "我能举出非洲王国和贸易商品的例子。",
            },
            {
              en: "I can explain why it matters that enslaved Africans came from real, established societies.",
              zh: "我能解释为什么被奴役的非洲人来自真实、成熟的社会这一点很重要。",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Africa is a vast continent with many different peoples. Some communities lived simple rural lives, while other places built powerful kingdoms and large empires.",
              zh: "非洲是一个拥有众多不同民族的广阔大陆。一些社区过着简朴的农村生活，而其他地方则建立了强大的王国和庞大的帝国。",
            },
            {
              type: "text",
              en: "West African trade networks already existed before the Atlantic slave trade expanded. African traders dealt in ivory, leather, spices, gold, cloth, pottery, and precious stones.",
              zh: "在大西洋奴隶贸易扩张之前，西非的贸易网络就已经存在。非洲商人交易象牙、皮革、香料、黄金、布料、陶器和宝石。",
            },
            {
              type: "highlight",
              en: "Important places in West and Southern Africa included: Great Zimbabwe, Gao, Timbuktu, Ghana, and Benin. These were not small villages — they were centres of trade, culture, and political power.",
              zh: "西非和南非的重要地方包括：大津巴布韦、加奥、廷巴克图、加纳和贝宁。这些不是小村庄——它们是贸易、文化和政治权力的中心。",
            },
            {
              type: "example",
              en: "Think of it this way: before any of the events of the slave trade happened, the people of West Africa already had markets, rulers, trade routes, and cultural traditions — much like any other part of the world at the same time.",
              zh: "这样想：在奴隶贸易发生之前，西非人民就已经拥有了市场、统治者、贸易路线和文化传统——就像同时期世界其他任何地方一样。",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Empire",
              zh: "帝国",
              defEn:
                "A collection of lands or peoples ruled by one powerful leader or country.",
              defZh: "由一个强大领导人或国家统治的土地或民族的集合。",
            },
            {
              en: "Kingdom",
              zh: "王国",
              defEn:
                "A territory ruled by a king or queen with its own laws and customs.",
              defZh: "由国王或女王统治、拥有自己法律和习俗的领土。",
            },
            {
              en: "Trade network",
              zh: "贸易网络",
              defEn:
                "A system of routes and relationships through which goods are exchanged across different places.",
              defZh: "通过一套路线和关系在不同地方之间交换商品的体系。",
            },
            {
              en: "Ivory",
              zh: "象牙",
              defEn:
                "A valuable material from elephant tusks, widely traded across Africa.",
              defZh: "来自大象牙齿的珍贵材料，在非洲各地广泛交易。",
            },
          ],
        },
        {
          type: "image",
          caption: "Great Zimbabwe — evidence of a major African civilisation",
          captionZh: "大津巴布韦——非洲重要文明的证据",
          source: "Wikimedia Commons",
        },
        {
          type: "source",
          labelEn: "A key historical source",
          labelZh: "一个重要的历史来源",
          en: "Olaudah Equiano is one of the most important sources for this period because much of the surviving evidence was written by white observers. Equiano described village life as peaceful, agricultural, and full of music, dancing, and storytelling. His account helps us understand what was lost when people were captured and taken from their communities.",
          zh: "奥拉达·伊奎亚诺是这一时期最重要的史料来源之一，因为大多数留存的证据都是由白人观察者书写的。伊奎亚诺描述村庄生活是平和的、农业性的，充满了音乐、舞蹈和故事。他的记述帮助我们理解当人们被捕获并从社区中带走时，失去了什么。",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "History courses sometimes begin the story of the slave trade with the ships and the traders. Why might it be more important to start with Africa itself — its kingdoms, its trade, its people?",
              qZh: "历史课程有时从船只和贸易商开始讲述奴隶贸易的故事。为什么从非洲本身——它的王国、贸易和人民——开始可能更重要？",
              aEn: "Starting with Africa before enslavement reminds us that the people who were taken were not from an empty or simple place. They came from established societies with their own history, culture, and identity. Understanding this changes how we think about what slavery actually destroyed — not just freedom, but entire ways of life that had existed for centuries.",
              aZh: "从被奴役之前的非洲开始，提醒我们被带走的人并非来自一个空洞或简单的地方。他们来自拥有自己历史、文化和身份的成熟社会。理解这一点改变了我们对奴隶制真正摧毁了什么的思考——不仅是自由，还有已经存在了几个世纪的完整生活方式。",
            },
            {
              qEn: "Most of the written evidence from this time was produced by Europeans, not Africans. How might this affect what we know — and what we don't know — about life in Africa before the slave trade?",
              qZh: "这一时期的大多数书面证据是由欧洲人而非非洲人产生的。这可能如何影响我们对奴隶贸易前非洲生活的了解——以及我们不了解的部分？",
              aEn: "When most sources come from outsiders, the picture we get may be incomplete or biased. European writers often described Africa through their own assumptions. Accounts like Equiano's are valuable because they offer an insider's perspective, but they are rare. This means there are many aspects of African life — traditions, beliefs, daily experiences — that may never be fully recovered.",
              aZh: "当大多数来源来自外来者时，我们得到的图景可能是不完整或有偏见的。欧洲作家常常通过自己的假设来描述非洲。像伊奎亚诺这样的记述很有价值，因为它们提供了内部人的视角，但这样的记述很稀少。这意味着非洲生活的许多方面——传统、信仰、日常经历——可能永远无法完全恢复。",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes Africa before the Atlantic slave trade began?",
          qZh: "以下哪项最能描述大西洋奴隶贸易开始前的非洲？",
          opts: [
            {
              en: "A continent with no organised kingdoms or trade",
              zh: "一个没有有组织王国或贸易的大陆",
            },
            {
              en: "A vast continent with many different peoples, including powerful kingdoms and established trade networks",
              zh: "一个拥有众多不同民族的广阔大陆，包括强大的王国和成熟的贸易网络",
            },
            {
              en: "A place where people had no contact with the outside world",
              zh: "一个人们与外界没有接触的地方",
            },
            {
              en: "A continent controlled entirely by European traders",
              zh: "一个完全由欧洲贸易商控制的大陆",
            },
          ],
          correct: 1,
          explainCorrectEn:
            "The materials make clear that Africa was not undeveloped or isolated. Places like Great Zimbabwe, Timbuktu, and Benin were part of established civilisations with long-distance trade routes. The slave trade did not begin in an empty place — it disrupted societies that already had their own history and structure.",
          explainCorrectZh:
            "材料清楚表明非洲并不是不发达或孤立的。大津巴布韦、廷巴克图和贝宁等地是拥有长途贸易路线的成熟文明的一部分。奴隶贸易并非在一个空洞的地方开始——它破坏了已经拥有自己历史和结构的社会。",
          explainWrongEn:
            "The correct answer is B. Africa before the slave trade included powerful kingdoms such as Great Zimbabwe, Gao, Timbuktu, Ghana, and Benin, as well as trade networks dealing in gold, ivory, spices, and cloth. The video materials specifically challenge the idea that Africa was simple or undeveloped before European contact.",
          explainWrongZh:
            "正确答案是B。奴隶贸易前的非洲包括大津巴布韦、加奥、廷巴克图、加纳和贝宁等强大王国，以及交易黄金、象牙、香料和布料的贸易网络。视频材料特别挑战了非洲在欧洲人接触之前是简单或不发达的观点。",
        },
      ],
    },

    /* ========== Lesson 2 (placeholder) ========== */
    {
      num: 2,
      badge: "T",
      title: "The triangular trade",
      titleZh: "三角贸易",
      subtitle: "",
      subtitleZh: "",
      sections: [],
    },

    /* ========== Lesson 3 (placeholder) ========== */
    {
      num: 3,
      badge: "T",
      title: "Capture and the journey to the coast",
      titleZh: "捕获与前往海岸的旅程",
      subtitle: "",
      subtitleZh: "",
      sections: [],
    },

    /* ========== Lesson 4 (placeholder) ========== */
    {
      num: 4,
      badge: "A",
      title: "The Middle Passage",
      titleZh: "中间航程",
      subtitle: "",
      subtitleZh: "",
      sections: [],
    },

    /* ========== Lesson 5 (placeholder) ========== */
    {
      num: 5,
      badge: "A",
      title: "Arrival and sale in the Americas",
      titleZh: "抵达与在美洲的贩卖",
      subtitle: "",
      subtitleZh: "",
      sections: [],
    },

    /* ========== Lesson 6 (placeholder) ========== */
    {
      num: 6,
      badge: "E",
      title: "Life on the plantation",
      titleZh: "种植园的生活",
      subtitle: "",
      subtitleZh: "",
      sections: [],
    },
  ],
};
