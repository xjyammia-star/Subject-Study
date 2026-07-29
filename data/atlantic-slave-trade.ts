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
          source: "Wikimedia Commons (CC BY-SA)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great-Zimbabwe-2.jpg",
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
      subtitle:
        "How a three-sided trade route connected Britain, Africa, and the Americas — and who profited.",
      subtitleZh:
        "一条三角贸易路线如何连接了英国、非洲和美洲——以及谁从中获利。",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe the three stages of the triangular trade.",
              zh: "我能描述三角贸易的三个阶段。",
            },
            {
              en: "I can explain why Europeans wanted enslaved labour in the Americas.",
              zh: "我能解释为什么欧洲人需要美洲的奴隶劳动力。",
            },
            {
              en: "I can explain how traders made profit at every stage of the triangle.",
              zh: "我能解释贸易商如何在三角贸易的每个阶段获利。",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "During the 1500s, Europe had many powerful trading nations. They sold fabrics, alcohol, and weapons in exchange for resources that they did not have. At the same time, many European colonists had moved to settle in America but did not have enough people to complete the work they wanted to do.",
              zh: "在1500年代，欧洲有许多强大的贸易国家。他们出售织物、酒精和武器，以换取他们没有的资源。与此同时，许多欧洲殖民者已经迁移到美洲定居，但没有足够的人手来完成他们想做的工作。",
            },
            {
              type: "text",
              en: "The early settlers tried to force the Native Americans to work for them, but it still was not enough. So traders went to countries on the coast of Africa to find new workers. British traders traded their goods to African chiefs, who in turn offered them people captured from other tribes.",
              zh: "早期定居者试图强迫美洲原住民为他们工作，但仍然不够。因此贸易商前往非洲海岸的国家寻找新的劳动力。英国贸易商用他们的商品与非洲首领交易，首领们则提供从其他部落俘获的人。",
            },
            {
              type: "highlight",
              en: "The trade route formed a triangle across the Atlantic. Stage 1: British ships sailed to West Africa carrying manufactured goods — cloth, metal goods, guns, and alcohol. Stage 2 (the Middle Passage): enslaved Africans were shipped across the Atlantic to the Americas and the Caribbean. Stage 3: plantation products such as sugar, tobacco, and coffee were shipped back to Britain.",
              zh: "贸易路线在大西洋上形成了一个三角形。第一阶段：英国船只载着制成品——布料、金属制品、枪支和酒精——驶向西非。第二阶段（中间航程）：被奴役的非洲人被运过大西洋到美洲和加勒比海。第三阶段：种植园产品如糖、烟草和咖啡被运回英国。",
            },
            {
              type: "text",
              en: "Ships did not sail empty at any stage — traders made money on every leg of the journey. Around 80,000 Africans were taken across the Atlantic as slaves every year, and about 40,000 of them were carried in British ships. An estimated 15 million Africans were transported to the Americas between 1540 and 1850.",
              zh: "船只在任何阶段都不会空载航行——贸易商在旅程的每一段都赚钱。每年约有80,000名非洲人被作为奴隶运过大西洋，其中约40,000人由英国船只运载。据估计，在1540年至1850年间，约有1500万非洲人被运往美洲。",
            },
            {
              type: "example",
              en: "Imagine a business where every journey earns money — going out, crossing over, and coming back. That is exactly how the triangular trade worked. No part of the voyage was wasted, and each stage fed into the next.",
              zh: "想象一种每次旅程都能赚钱的生意——出发、渡海和返回。这正是三角贸易的运作方式。旅程的任何部分都不会被浪费，每个阶段都为下一个阶段提供支撑。",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Triangular trade",
              zh: "三角贸易",
              defEn:
                "A three-stage trading route across the Atlantic that connected Europe, Africa, and the Americas.",
              defZh: "一条横跨大西洋的三阶段贸易路线，连接了欧洲、非洲和美洲。",
            },
            {
              en: "Middle Passage",
              zh: "中间航程",
              defEn:
                "The second stage of the triangular trade — the forced voyage of enslaved Africans across the Atlantic.",
              defZh: "三角贸易的第二阶段——被奴役的非洲人被迫横渡大西洋的航程。",
            },
            {
              en: "Plantation system",
              zh: "种植园制度",
              defEn:
                "A system of farming where crops like sugar and tobacco were grown on large estates using enslaved labour.",
              defZh: "一种农业制度，利用奴隶劳动力在大庄园种植糖和烟草等作物。",
            },
            {
              en: "Colonist",
              zh: "殖民者",
              defEn:
                "A person who moves from their home country to settle and live in a new territory.",
              defZh: "从自己的国家搬迁到新领地定居生活的人。",
            },
          ],
        },
        {
          type: "image",
          caption: "Map of the triangular trade route across the Atlantic",
          captionZh: "大西洋三角贸易路线图",
          source: "Wikimedia Commons (CC0)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Triangular_trade.png",
        },
        {
          type: "source",
          labelEn: "A key historical source",
          labelZh: "一个重要的历史来源",
          en: "An estimated 15 million Africans were transported to the Americas between 1540 and 1850. To maximise their profits, slave merchants carried as many slaves as was physically possible on their ships. A typical slave ship carried no fewer than 200 and no more than 500 slaves when it departed from West Africa. The slave ship provided an average of about seven square feet per slave. By the 17th century, slaves could be purchased in Africa for about $25 and sold in the Americas for about $150.",
          zh: "据估计，在1540年至1850年间，约有1500万非洲人被运往美洲。为了最大化利润，奴隶商人在船上装载了尽可能多的奴隶。一艘典型的奴隶船从西非出发时载有不少于200人、不多于500人的奴隶。奴隶船平均为每个奴隶提供约七平方英尺的空间。到17世纪，在非洲购买一个奴隶大约需要25美元，在美洲出售则约为150美元。",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The triangular trade is often described as a 'system'. What makes it a system rather than just a series of individual journeys?",
              qZh: "三角贸易常被描述为一个「体系」。是什么使它成为一个体系，而不仅仅是一系列单独的旅程？",
              aEn: "A system means that each part depends on the others. British factories produced goods for Africa. African captives provided labour for American plantations. Plantation products generated wealth back in Britain, which funded more ships and more trade goods. Remove any one stage and the whole cycle would break down. This is what made the slave trade so difficult to stop — it was not one person or one ship, but a self-reinforcing loop across three continents.",
              aZh: "一个体系意味着每个部分都依赖于其他部分。英国工厂为非洲生产商品。非洲俘虏为美洲种植园提供劳动力。种植园产品在英国创造财富，资助更多船只和更多贸易商品。去掉任何一个阶段，整个循环就会崩溃。这就是奴隶贸易如此难以阻止的原因——它不是一个人或一艘船，而是横跨三个大陆的自我强化循环。",
            },
            {
              qEn: "British sugar consumption was about 5.5 kilos per person per year by around 1800. What does this tell us about the connection between everyday life in Britain and the slave trade?",
              qZh: "到1800年左右，英国人均年糖消费量约为5.5公斤。这告诉我们英国日常生活与奴隶贸易之间有什么联系？",
              aEn: "It shows that the slave trade was not something happening far away that had nothing to do with ordinary people. The sugar in a British family's tea or food was very likely produced by enslaved people on Caribbean plantations. High demand at home directly drove the need for more enslaved labour abroad. Everyday consumption and distant suffering were linked through the same trading system.",
              aZh: "这表明奴隶贸易并不是发生在遥远地方、与普通人无关的事情。英国家庭茶或食物中的糖很可能是加勒比种植园上被奴役的人生产的。国内的高需求直接推动了对海外更多奴隶劳动力的需求。日常消费和遥远的苦难通过同一个贸易体系联系在一起。",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What was carried on each stage of the triangular trade?",
          qZh: "三角贸易的每个阶段分别运载了什么？",
          opts: [
            {
              en: "Stage 1: enslaved Africans → Stage 2: sugar and tobacco → Stage 3: manufactured goods",
              zh: "第一阶段：被奴役的非洲人 → 第二阶段：糖和烟草 → 第三阶段：制成品",
            },
            {
              en: "Stage 1: manufactured goods → Stage 2: enslaved Africans → Stage 3: plantation products",
              zh: "第一阶段：制成品 → 第二阶段：被奴役的非洲人 → 第三阶段：种植园产品",
            },
            {
              en: "Stage 1: gold and ivory → Stage 2: European settlers → Stage 3: weapons",
              zh: "第一阶段：黄金和象牙 → 第二阶段：欧洲定居者 → 第三阶段：武器",
            },
            {
              en: "Stage 1: plantation products → Stage 2: manufactured goods → Stage 3: enslaved Africans",
              zh: "第一阶段：种植园产品 → 第二阶段：制成品 → 第三阶段：被奴役的非洲人",
            },
          ],
          correct: 1,
          explainCorrectEn:
            "Stage 1 carried manufactured goods (cloth, metal, guns, alcohol) from Britain to West Africa. Stage 2 — the Middle Passage — carried enslaved Africans across the Atlantic to the Americas. Stage 3 carried plantation products (sugar, tobacco, coffee) back to Britain. Traders made profit at every stage.",
          explainCorrectZh:
            "第一阶段将制成品（布料、金属、枪支、酒精）从英国运到西非。第二阶段——中间航程——将被奴役的非洲人运过大西洋到美洲。第三阶段将种植园产品（糖、烟草、咖啡）运回英国。贸易商在每个阶段都获利。",
          explainWrongEn:
            "The correct answer is B. The triangular trade started with manufactured goods shipped from Britain to West Africa (Stage 1), then enslaved Africans were forced across the Atlantic on the Middle Passage (Stage 2), and finally plantation products like sugar and tobacco were shipped back to Britain (Stage 3). About 80,000 Africans were taken across the Atlantic each year.",
          explainWrongZh:
            "正确答案是B。三角贸易从英国向西非运送制成品开始（第一阶段），然后被奴役的非洲人在中间航程中被迫横渡大西洋（第二阶段），最后糖和烟草等种植园产品被运回英国（第三阶段）。每年约有80,000名非洲人被运过大西洋。",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Capture and the journey to the coast",
      titleZh: "捕获与前往海岸的旅程",
      subtitle:
        "How people were taken from their homes and what happened before they reached the ships.",
      subtitleZh:
        "人们如何从家中被带走，以及在到达船上之前发生了什么。",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe how people in Africa were captured and taken to the coast.",
              zh: "我能描述非洲人是如何被捕获并被带到海岸的。",
            },
            {
              en: "I can explain the role of both Europeans and some African rulers in the capture process.",
              zh: "我能解释欧洲人和一些非洲统治者在捕获过程中的角色。",
            },
            {
              en: "I can describe conditions in the barracoons at the coast.",
              zh: "我能描述海岸奴隶围栏中的条件。",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Anyone who could be captured might become a slave. Sometimes captives were prisoners of war, but often they were ordinary people who were kidnapped from their daily lives. Europeans usually did not carry out the capture themselves. Instead, they paid Africans to capture others.",
              zh: "任何能被捕获的人都可能成为奴隶。有时俘虏是战俘，但更多时候他们是在日常生活中被绑架的普通人。欧洲人通常不亲自执行捕获行动。相反，他们付钱让非洲人去捕获其他人。",
            },
            {
              type: "highlight",
              en: "Some powerful African rulers sold neighbouring peoples in exchange for wealth, guns, and gunpowder. This arms trade encouraged more conflict between communities, which in turn produced more captives for the slave trade.",
              zh: "一些强大的非洲统治者出卖邻近的民族以换取财富、枪支和火药。这种武器贸易鼓励了社区之间更多的冲突，而冲突反过来又为奴隶贸易产生了更多的俘虏。",
            },
            {
              type: "text",
              en: "After capture, people were forced to march for weeks or even months to reach the coast. When they arrived, they were imprisoned in holding areas called barracoons. Many people were crowded together \u2014 men, women, boys, and girls could all be kept in the same place. They were held there for long periods until merchants inspected them and chose some to board ships.",
              zh: "被捕获后，人们被迫行走数周甚至数月才能到达海岸。到达后，他们被关押在称为奴隶围栏（barracoons）的拘留区。许多人被挤在一起\u2014\u2014男人、女人、男孩和女孩都可能被关在同一个地方。他们在那里被长期关押，直到商人来检查他们并挑选一些人上船。",
            },
            {
              type: "text",
              en: "The materials also describe that enslaved Africans were held in dungeons in coastal forts until a ship was ready to take them to America. British traders traded their goods to African chiefs, who offered them men, women, and children who had been kidnapped by slave traders or bought from other chiefs.",
              zh: "材料还描述了被奴役的非洲人被关在海岸堡垒的地牢中，直到一艘船准备好将他们带到美洲。英国贸易商将他们的商品与非洲酋长交易，酋长们提供被奴隶贩子绑架或从其他酋长那里购买的男人、女人和儿童。",
            },
            {
              type: "example",
              en: "Try to picture being taken from your home with no warning, forced to walk for months through unfamiliar lands, and then locked in a crowded holding area with no idea what would happen next. This was the reality for millions of people before they ever saw a ship.",
              zh: "试着想象一下，毫无预警地从家中被带走，被迫在陌生的土地上行走数月，然后被锁在拥挤的拘留区里，完全不知道接下来会发生什么。这就是数百万人在看到船只之前的真实经历。",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Barracoon",
              zh: "奴隶围栏",
              defEn:
                "A holding area or enclosure at the coast where captured Africans were imprisoned before being loaded onto slave ships.",
              defZh: "海岸上的拘留区或围栏，被捕获的非洲人在被装上奴隶船之前被关押在此。",
            },
            {
              en: "Kidnapping",
              zh: "绑架",
              defEn:
                "Taking a person away by force against their will \u2014 a common method used to capture people for the slave trade.",
              defZh: "违背某人意愿强行将其带走\u2014\u2014这是用来为奴隶贸易捕获人口的常见方法。",
            },
            {
              en: "Coastal fort",
              zh: "海岸堡垒",
              defEn:
                "A fortified building on the African coast where enslaved people were held in dungeons before being shipped across the Atlantic.",
              defZh: "非洲海岸上的防御建筑，被奴役的人在被运过大西洋之前被关在其地牢中。",
            },
            {
              en: "Arms trade",
              zh: "武器贸易",
              defEn:
                "The exchange of guns and gunpowder, which encouraged conflict between African communities and produced more captives.",
              defZh: "枪支和火药的交换，它鼓励了非洲社区之间的冲突并产生了更多俘虏。",
            },
          ],
        },
        {
          type: "image",
          caption: "Elmina Castle, Ghana \u2014 a coastal fort where captives were held before the voyage",
          captionZh: "\u52a0\u7eb3\u57c3\u5c14\u7c73\u7eb3\u57ce\u5821\u2014\u2014\u4ff8\u864f\u5728\u822a\u884c\u524d\u88ab\u5173\u62bc\u7684\u6d77\u5cb8\u5821\u5792",
          source: "Wikimedia Commons (CC BY-SA)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Elmina_Castle_-_Ghana.jpg",
        },
        {
          type: "source",
          labelEn: "A first-person account of capture",
          labelZh: "一段关于被捕获的第一人称叙述",
          en: "The video includes a first-person account describing how a child and a sister were grabbed while the adults of the family were working. They were then forced to move through many unfamiliar lands on a march that lasted months before they finally reached the coast. This testimony helps us understand the fear, confusion, and loss that began long before the ships sailed.",
          zh: "视频中包含一段第一人称叙述，描述了一个孩子和他的姐姐在家人外出工作时被抓走。他们随后被迫穿越许多陌生的土地，进行了持续数月的行军，最终到达海岸。这段证词帮助我们理解在船只起航之前很久就开始的恐惧、困惑和失去。",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Europeans usually did not capture Africans themselves \u2014 they paid others to do it. Does this make Europeans less responsible for what happened? Why or why not?",
              qZh: "欧洲人通常不亲自捕获非洲人\u2014\u2014他们付钱让别人去做。这是否使欧洲人对所发生的事情承担更少的责任？为什么？",
              aEn: "Not capturing people directly does not reduce responsibility. Europeans created the demand and the profit motive that drove the entire system. Without European ships, markets, and money, the large-scale capture would not have happened. Paying someone to commit an act does not remove the moral responsibility of the person who pays for it \u2014 it simply adds another layer to the system.",
              aZh: "不亲自捕获人口并不减少责任。欧洲人创造了驱动整个系统的需求和利润动机。没有欧洲的船只、市场和资金，大规模的捕获就不会发生。付钱让别人做某事并不能免除付钱者的道德责任\u2014\u2014它只是给这个系统增加了另一层。",
            },
            {
              qEn: "The trade in guns and gunpowder encouraged more conflict between African communities. How did this create a cycle that was hard to break?",
              qZh: "枪支和火药的贸易鼓励了非洲社区之间更多的冲突。这如何创造了一个难以打破的循环？",
              aEn: "Communities that received guns became more powerful and could capture more people. But their neighbours then also needed guns to defend themselves \u2014 and to get guns, they had to trade captives. This meant that conflict kept growing, producing more and more enslaved people, which in turn fed the European demand for labour. The cycle was self-reinforcing: more guns meant more war, more war meant more captives, and more captives meant more guns.",
              aZh: "获得枪支的社区变得更加强大，能够捕获更多的人。但他们的邻居也需要枪支来保卫自己\u2014\u2014而要获得枪支，他们不得不用俘虏来交换。这意味着冲突不断增长，产生越来越多的被奴役者，而这反过来又满足了欧洲人对劳动力的需求。这个循环是自我强化的：更多的枪支意味着更多的战争，更多的战争意味着更多的俘虏，更多的俘虏意味着更多的枪支。",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "How were most people captured for the Atlantic slave trade?",
          qZh: "大西洋奴隶贸易中大多数人是如何被捕获的？",
          opts: [
            {
              en: "European soldiers raided African villages directly",
              zh: "欧洲士兵直接袭击非洲村庄",
            },
            {
              en: "Africans volunteered to work on plantations",
              zh: "非洲人自愿去种植园工作",
            },
            {
              en: "Europeans paid Africans to capture others, and some African rulers sold neighbouring peoples for guns and wealth",
              zh: "欧洲人付钱让非洲人捕获其他人，一些非洲统治者为了枪支和财富出卖邻近民族",
            },
            {
              en: "African governments organised the capture and transport themselves",
              zh: "非洲政府自己组织了捕获和运输",
            },
          ],
          correct: 2,
          explainCorrectEn:
            "The source materials make clear that Europeans usually did not carry out the capture themselves. Instead, they traded manufactured goods \u2014 including guns and gunpowder \u2014 to African chiefs and traders, who captured people from neighbouring communities through kidnapping and warfare. This created a cycle where the arms trade encouraged more conflict, which produced more captives for the slave trade.",
          explainCorrectZh:
            "原始资料清楚表明，欧洲人通常不亲自执行捕获行动。相反，他们将制成品\u2014\u2014包括枪支和火药\u2014\u2014与非洲酋长和商人交易，后者通过绑架和战争从邻近社区捕获人口。这创造了一个循环，武器贸易鼓励了更多冲突，冲突又为奴隶贸易产生了更多俘虏。",
          explainWrongEn:
            "The correct answer is C. Europeans usually did not do the capturing themselves. They paid Africans and traded goods such as guns, gunpowder, cloth, and alcohol to African chiefs, who offered them people captured from other communities. The video and classroom materials both describe how ordinary people \u2014 including children \u2014 were kidnapped, then forced to march for months to reach coastal holding areas called barracoons.",
          explainWrongZh:
            "正确答案是C。欧洲人通常不亲自捕获人口。他们向非洲酋长支付报酬并交易枪支、火药、布料和酒精等商品，酋长们则提供从其他社区捕获的人。视频和课堂材料都描述了普通人\u2014\u2014包括儿童\u2014\u2014如何被绑架，然后被迫行军数月到达海岸的奴隶围栏。",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "A",
      title: "The Middle Passage",
      titleZh: "中间航程",
      subtitle:
        "The horrific voyage across the Atlantic \u2014 conditions, resistance, and the Zong case.",
      subtitleZh:
        "\u6a2a\u6e21\u5927\u897f\u6d0b\u7684\u6050\u6016\u822a\u7a0b\u2014\u2014\u6761\u4ef6\u3001\u53cd\u6297\u4e0e\u201c\u68c0\u53f7\u201d\u6848\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe the conditions on board a slave ship during the Middle Passage.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u4e2d\u95f4\u822a\u7a0b\u671f\u95f4\u5974\u96b6\u8239\u4e0a\u7684\u6761\u4ef6\u3002",
            },
            {
              en: "I can use evidence from first-hand accounts to support my understanding.",
              zh: "\u6211\u80fd\u4f7f\u7528\u7b2c\u4e00\u624b\u8d44\u6599\u7684\u8bc1\u636e\u6765\u652f\u6301\u6211\u7684\u7406\u89e3\u3002",
            },
            {
              en: "I can explain why the Zong case is historically significant.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u201c\u68c0\u53f7\u201d\u6848\u5177\u6709\u5386\u53f2\u610f\u4e49\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "The Middle Passage was the name given to the second stage of the triangular trade \u2014 the forced voyage of enslaved Africans across the Atlantic. The journey lasted about 6 to 12 weeks.",
              zh: "\u4e2d\u95f4\u822a\u7a0b\u662f\u4e09\u89d2\u8d38\u6613\u7b2c\u4e8c\u9636\u6bb5\u7684\u540d\u79f0\u2014\u2014\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u8feb\u6a2a\u6e21\u5927\u897f\u6d0b\u7684\u822a\u7a0b\u3002\u822a\u7a0b\u6301\u7eed\u7ea6 6 \u5230 12 \u5468\u3002",
            },
            {
              type: "highlight",
              en: "Conditions below deck were horrific. People were forced into extremely tight spaces \u2014 a typical slave ship provided an average of about seven square feet per person. The air was foul, the space was so crowded that people could barely move, and chains rubbed skin raw. Conditions were filthy, and disease spread easily in the hold.",
              zh: "\u7532\u677f\u4e0b\u7684\u6761\u4ef6\u9a87\u4eba\u542c\u95fb\u3002\u4eba\u4eec\u88ab\u585e\u8fdb\u6781\u5176\u72ed\u5c0f\u7684\u7a7a\u95f4\u2014\u2014\u4e00\u8258\u5178\u578b\u7684\u5974\u96b6\u8239\u5e73\u5747\u4e3a\u6bcf\u4e2a\u4eba\u63d0\u4f9b\u7ea6\u4e03\u5e73\u65b9\u82f1\u5c3a\u7684\u7a7a\u95f4\u3002\u7a7a\u6c14\u6c61\u6d4a\uff0c\u7a7a\u95f4\u62e5\u6324\u5f97\u4eba\u4eec\u51e0\u4e4e\u65e0\u6cd5\u79fb\u52a8\uff0c\u9501\u94fe\u64e6\u4f24\u76ae\u80a4\u3002\u6761\u4ef6\u80ae\u810f\uff0c\u75be\u75c5\u5728\u8239\u8231\u4e2d\u5f88\u5bb9\u6613\u4f20\u64ad\u3002",
            },
            {
              type: "text",
              en: "A typical slave ship carried between 200 and 500 enslaved people. To maximise their profits, slave merchants carried as many people as was physically possible. Food and water were limited. Some captives were force-fed if they refused to eat. Violent punishments were used against those who resisted. Many people died during the voyage from illness, crushing, suffocation, or neglect.",
              zh: "\u4e00\u8258\u5178\u578b\u7684\u5974\u96b6\u8239\u8fd0\u8f7d 200 \u5230 500 \u540d\u88ab\u5974\u5f79\u7684\u4eba\u3002\u4e3a\u4e86\u6700\u5927\u5316\u5229\u6da6\uff0c\u5974\u96b6\u5546\u4eba\u5c3d\u53ef\u80fd\u591a\u5730\u88c5\u8f7d\u4eba\u5458\u3002\u98df\u7269\u548c\u6c34\u6709\u9650\u3002\u4e00\u4e9b\u4ff8\u864f\u5982\u679c\u62d2\u7edd\u8fdb\u98df\u4f1a\u88ab\u5f3a\u8feb\u558a\u98df\u3002\u53cd\u6297\u8005\u4f1a\u53d7\u5230\u66b4\u529b\u60e9\u7f5a\u3002\u8bb8\u591a\u4eba\u5728\u822a\u884c\u4e2d\u6b7b\u4e8e\u75be\u75c5\u3001\u6324\u538b\u3001\u7a92\u606f\u6216\u5ffd\u89c6\u3002",
            },
            {
              type: "text",
              en: "Some captives resisted and fought for freedom. Crews feared revolt and kept people chained. The famous Brookes slave ship diagram, published in 1789 with 700 copies distributed, showed the legal capacity of 454 people \u2014 but one known voyage carried 609. This diagram became a powerful tool in the campaign against the slave trade.",
              zh: "\u4e00\u4e9b\u4ff8\u864f\u8fdb\u884c\u53cd\u6297\u5e76\u4e3a\u81ea\u7531\u800c\u6218\u3002\u8239\u5458\u5bb3\u6015\u53db\u4e71\uff0c\u5c06\u4eba\u4eec\u7528\u94c1\u94fe\u9501\u4f4f\u3002\u8457\u540d\u7684\u5e03\u9c81\u514b\u65af\u53f7\u5974\u96b6\u8239\u56fe\u4e8e 1789 \u5e74\u51fa\u7248\uff0c\u5171\u5206\u53d1\u4e86 700 \u4efd\u526f\u672c\uff0c\u663e\u793a\u5408\u6cd5\u5bb9\u91cf\u4e3a 454 \u4eba\u2014\u2014\u4f46\u5df2\u77e5\u7684\u4e00\u6b21\u822a\u884c\u88c5\u8f7d\u4e86 609 \u4eba\u3002\u8fd9\u5f20\u56fe\u6210\u4e3a\u53cd\u5bf9\u5974\u96b6\u8d38\u6613\u8fd0\u52a8\u7684\u6709\u529b\u5de5\u5177\u3002",
            },
            {
              type: "example",
              en: "Seven square feet is roughly the size of a small cupboard. Now imagine being chained inside that space for weeks, unable to stand, in total darkness, surrounded by hundreds of other people in the same condition. That is what the Middle Passage meant.",
              zh: "\u4e03\u5e73\u65b9\u82f1\u5c3a\u5927\u7ea6\u662f\u4e00\u4e2a\u5c0f\u6a71\u67dc\u7684\u5927\u5c0f\u3002\u73b0\u5728\u60f3\u8c61\u4e00\u4e0b\uff0c\u88ab\u94c1\u94fe\u9501\u5728\u90a3\u4e2a\u7a7a\u95f4\u91cc\u6570\u5468\uff0c\u65e0\u6cd5\u7ad9\u7acb\uff0c\u5728\u5b8c\u5168\u7684\u9ed1\u6697\u4e2d\uff0c\u5468\u56f4\u662f\u6570\u767e\u4e2a\u5904\u4e8e\u540c\u6837\u72b6\u51b5\u7684\u4eba\u3002\u8fd9\u5c31\u662f\u4e2d\u95f4\u822a\u7a0b\u7684\u542b\u4e49\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Middle Passage",
              zh: "\u4e2d\u95f4\u822a\u7a0b",
              defEn:
                "The forced voyage of enslaved Africans across the Atlantic Ocean, lasting about 6 to 12 weeks.",
              defZh: "\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u8feb\u6a2a\u6e21\u5927\u897f\u6d0b\u7684\u822a\u7a0b\uff0c\u6301\u7eed\u7ea6 6 \u5230 12 \u5468\u3002",
            },
            {
              en: "Brookes diagram",
              zh: "\u5e03\u9c81\u514b\u65af\u53f7\u56fe",
              defEn:
                "A famous diagram of the slave ship Brookes published in 1789, showing how tightly enslaved people were packed below deck.",
              defZh: "\u4e00\u5f20\u8457\u540d\u7684\u5e03\u9c81\u514b\u65af\u53f7\u5974\u96b6\u8239\u56fe\uff0c\u4e8e 1789 \u5e74\u51fa\u7248\uff0c\u5c55\u793a\u4e86\u88ab\u5974\u5f79\u7684\u4eba\u5728\u7532\u677f\u4e0b\u88ab\u6324\u5f97\u591a\u4e48\u7d27\u5bc6\u3002",
            },
            {
              en: "Revolt",
              zh: "\u53db\u4e71",
              defEn:
                "An act of violent resistance or rebellion \u2014 some enslaved Africans fought back against the crew during the voyage.",
              defZh: "\u66b4\u529b\u53cd\u6297\u6216\u53db\u4e71\u7684\u884c\u4e3a\u2014\u2014\u4e00\u4e9b\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5728\u822a\u884c\u4e2d\u53cd\u6297\u8239\u5458\u3002",
            },
            {
              en: "The Zong",
              zh: "\u201c\u68c0\u53f7\u201d",
              defEn:
                "A slave ship involved in a notorious case where the treatment of enslaved people as insurable cargo was exposed through an insurance dispute.",
              defZh: "\u4e00\u8258\u5974\u96b6\u8239\uff0c\u56e0\u4e00\u573a\u4fdd\u9669\u7ea0\u7eb7\u800c\u66b4\u9732\u4e86\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u89c6\u4e3a\u53ef\u4fdd\u8d27\u7269\u7684\u60f6\u540d\u6848\u4ef6\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "An 1832 illustration depicting enslaved Africans being thrown overboard from a slave ship during the Middle Passage",
          captionZh: "\u4e00\u5e741832\u5e74\u7684\u63d2\u56fe\uff0c\u63cf\u7ed8\u5728\u4e2d\u95f4\u822a\u7a0b\u4e2d\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u88ab\u629b\u5165\u6d77\u4e2d",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Slaves_being_thrown_overboard_from_an_unidentified_slave_ship.jpg",
        },
        {
          type: "source",
          labelEn: "The Zong case",
          labelZh: "\u201c\u68c0\u53f7\u201d\u6848",
          en: "The Zong case became widely known because of an insurance dispute. It exposed the way enslaved people were treated as property and commercial cargo. One of the most important ideas from the lesson materials is the phrase: they are not people, they are goods. The case helps explain the relationship between profit, empire, and dehumanisation \u2014 the issue was framed commercially rather than morally at first.",
          zh: "\u201c\u68c0\u53f7\u201d\u6848\u56e0\u4e00\u573a\u4fdd\u9669\u7ea0\u7eb7\u800c\u5e7f\u4e3a\u4eba\u77e5\u3002\u5b83\u63ed\u9732\u4e86\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u89c6\u4e3a\u8d22\u4ea7\u548c\u5546\u4e1a\u8d27\u7269\u7684\u65b9\u5f0f\u3002\u8bfe\u5802\u6750\u6599\u4e2d\u6700\u91cd\u8981\u7684\u89c2\u70b9\u4e4b\u4e00\u662f\u8fd9\u53e5\u8bdd\uff1a\u4ed6\u4eec\u4e0d\u662f\u4eba\uff0c\u4ed6\u4eec\u662f\u8d27\u7269\u3002\u8be5\u6848\u4ef6\u6709\u52a9\u4e8e\u89e3\u91ca\u5229\u6da6\u3001\u5e1d\u56fd\u548c\u53bb\u4eba\u6027\u5316\u4e4b\u95f4\u7684\u5173\u7cfb\u2014\u2014\u8fd9\u4e2a\u95ee\u9898\u6700\u521d\u662f\u4ece\u5546\u4e1a\u89d2\u5ea6\u800c\u975e\u9053\u5fb7\u89d2\u5ea6\u63d0\u51fa\u7684\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "The Brookes diagram was published in 1789 and 700 copies were distributed. Why might a simple picture of a ship have been more powerful than words in persuading people that the slave trade was wrong?",
              qZh: "\u5e03\u9c81\u514b\u65af\u53f7\u56fe\u4e8e 1789 \u5e74\u51fa\u7248\uff0c\u5171\u5206\u53d1\u4e86 700 \u4efd\u526f\u672c\u3002\u4e3a\u4ec0\u4e48\u4e00\u5f20\u7b80\u5355\u7684\u8239\u7684\u56fe\u7247\u5728\u8bf4\u670d\u4eba\u4eec\u5974\u96b6\u8d38\u6613\u662f\u9519\u8bef\u7684\u65b9\u9762\u53ef\u80fd\u6bd4\u6587\u5b57\u66f4\u6709\u529b\uff1f",
              aEn: "A picture can show something in a way that is immediate and hard to ignore. The diagram made the suffering visible \u2014 readers could see for themselves how human beings were packed into a ship like objects. Words can be debated or dismissed, but the image was difficult to argue with. It turned an abstract idea into something concrete and shocking, which helped build public support for abolition.",
              aZh: "\u4e00\u5f20\u56fe\u7247\u53ef\u4ee5\u4ee5\u4e00\u79cd\u76f4\u63a5\u4e14\u96be\u4ee5\u5ffd\u89c6\u7684\u65b9\u5f0f\u5c55\u793a\u67d0\u4e9b\u4e1c\u897f\u3002\u8fd9\u5f20\u56fe\u4f7f\u82e6\u96be\u53d8\u5f97\u53ef\u89c1\u2014\u2014\u8bfb\u8005\u53ef\u4ee5\u4eb2\u773c\u770b\u5230\u4eba\u7c7b\u5982\u4f55\u50cf\u7269\u4ef6\u4e00\u6837\u88ab\u585e\u8fdb\u8239\u91cc\u3002\u6587\u5b57\u53ef\u4ee5\u88ab\u8fa9\u8bba\u6216\u5ffd\u89c6\uff0c\u4f46\u8fd9\u5f20\u56fe\u5f88\u96be\u53cd\u9a73\u3002\u5b83\u628a\u4e00\u4e2a\u62bd\u8c61\u7684\u6982\u5ff5\u53d8\u6210\u4e86\u5177\u4f53\u800c\u9707\u60ca\u7684\u4e1c\u897f\uff0c\u8fd9\u6709\u52a9\u4e8e\u5efa\u7acb\u516c\u4f17\u5bf9\u5e9f\u9664\u5974\u96b6\u5236\u7684\u652f\u6301\u3002",
            },
            {
              qEn: "In the Zong case, the issue was first discussed as an insurance dispute rather than a moral question. What does this tell us about how enslaved people were viewed at the time?",
              qZh: "\u5728\u201c\u68c0\u53f7\u201d\u6848\u4e2d\uff0c\u8fd9\u4e2a\u95ee\u9898\u6700\u521d\u662f\u4f5c\u4e3a\u4fdd\u9669\u7ea0\u7eb7\u800c\u4e0d\u662f\u9053\u5fb7\u95ee\u9898\u6765\u8ba8\u8bba\u7684\u3002\u8fd9\u544a\u8bc9\u6211\u4eec\u5f53\u65f6\u88ab\u5974\u5f79\u7684\u4eba\u662f\u5982\u4f55\u88ab\u770b\u5f85\u7684\uff1f",
              aEn: "It tells us that in the legal and commercial systems of the time, enslaved people were classified as cargo, not as human beings with rights. The fact that their deaths were discussed in terms of financial loss \u2014 not human tragedy \u2014 reveals how deeply the dehumanisation of enslaved people was built into the system. The Zong case became significant precisely because it forced people to confront this contradiction.",
              aZh: "\u8fd9\u544a\u8bc9\u6211\u4eec\uff0c\u5728\u5f53\u65f6\u7684\u6cd5\u5f8b\u548c\u5546\u4e1a\u4f53\u7cfb\u4e2d\uff0c\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u5f52\u7c7b\u4e3a\u8d27\u7269\uff0c\u800c\u4e0d\u662f\u6709\u6743\u5229\u7684\u4eba\u3002\u4ed6\u4eec\u7684\u6b7b\u4ea1\u88ab\u4ece\u7ecf\u6d4e\u635f\u5931\u7684\u89d2\u5ea6\u8ba8\u8bba\u2014\u2014\u800c\u4e0d\u662f\u4eba\u7c7b\u60b2\u5267\u2014\u2014\u8fd9\u63ed\u793a\u4e86\u5bf9\u88ab\u5974\u5f79\u8005\u7684\u53bb\u4eba\u6027\u5316\u5728\u5236\u5ea6\u4e2d\u6839\u6df1\u8482\u56fa\u3002\u201c\u68c0\u53f7\u201d\u6848\u4e4b\u6240\u4ee5\u91cd\u8981\uff0c\u6b63\u662f\u56e0\u4e3a\u5b83\u8feb\u4f7f\u4eba\u4eec\u9762\u5bf9\u8fd9\u4e00\u77db\u76fe\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best describes conditions during the Middle Passage?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u63cf\u8ff0\u4e2d\u95f4\u822a\u7a0b\u7684\u6761\u4ef6\uff1f",
          opts: [
            {
              en: "Enslaved people were kept in large, clean cabins with regular meals",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u5173\u5728\u5bbd\u6566\u3001\u5e72\u51c0\u7684\u8239\u8231\u91cc\uff0c\u6709\u5b9a\u671f\u7684\u996e\u98df",
            },
            {
              en: "People were packed into extremely tight spaces, chained, with foul air, disease, limited food, and many died during the voyage",
              zh: "\u4eba\u4eec\u88ab\u585e\u8fdb\u6781\u5176\u72ed\u5c0f\u7684\u7a7a\u95f4\uff0c\u88ab\u94c1\u94fe\u9501\u4f4f\uff0c\u7a7a\u6c14\u6c61\u6d4a\uff0c\u75be\u75c5\u6a2a\u884c\uff0c\u98df\u7269\u6709\u9650\uff0c\u8bb8\u591a\u4eba\u5728\u822a\u884c\u4e2d\u6b7b\u4ea1",
            },
            {
              en: "The journey was short and most people survived without difficulty",
              zh: "\u822a\u7a0b\u5f88\u77ed\uff0c\u5927\u591a\u6570\u4eba\u90fd\u6beb\u65e0\u56f0\u96be\u5730\u5b58\u6d3b\u4e0b\u6765",
            },
            {
              en: "Enslaved people were allowed on deck at all times and could move freely",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u53ef\u4ee5\u968f\u65f6\u4e0a\u7532\u677f\u5e76\u81ea\u7531\u79fb\u52a8",
            },
          ],
          correct: 1,
          explainCorrectEn:
            "The source materials describe extreme overcrowding, with about seven square feet per person. The air was foul, chains rubbed skin raw, disease spread easily, and many people died. The voyage lasted 6 to 12 weeks. Ships carried 200 to 500 people, and merchants packed as many as physically possible to maximise profits.",
          explainCorrectZh:
            "\u6e90\u6750\u6599\u63cf\u8ff0\u4e86\u6781\u5ea6\u62e5\u6324\u7684\u60c5\u51b5\uff0c\u6bcf\u4eba\u7ea6\u4e03\u5e73\u65b9\u82f1\u5c3a\u3002\u7a7a\u6c14\u6c61\u6d4a\uff0c\u9501\u94fe\u64e6\u4f24\u76ae\u80a4\uff0c\u75be\u75c5\u5f88\u5bb9\u6613\u4f20\u64ad\uff0c\u8bb8\u591a\u4eba\u6b7b\u4ea1\u3002\u822a\u7a0b\u6301\u7eed 6 \u5230 12 \u5468\u3002\u8239\u53ea\u8fd0\u8f7d 200 \u5230 500 \u4eba\uff0c\u5546\u4eba\u5c3d\u53ef\u80fd\u591a\u5730\u88c5\u8f7d\u4eba\u5458\u4ee5\u6700\u5927\u5316\u5229\u6da6\u3002",
          explainWrongEn:
            "The correct answer is B. First-hand accounts from Equiano and others describe foul air, extreme overcrowding, chains, disease, limited food, forced feeding, and death. A typical ship provided only about seven square feet per person and could carry 200 to 500 people. The Brookes diagram showed the legal capacity was 454, but one voyage carried 609.",
          explainWrongZh:
            "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u4f0a\u5947\u4e9a\u8bfa\u7b49\u4eba\u7684\u7b2c\u4e00\u624b\u8bb0\u8ff0\u63cf\u8ff0\u4e86\u6c61\u6d4a\u7684\u7a7a\u6c14\u3001\u6781\u5ea6\u62e5\u6324\u3001\u9501\u94fe\u3001\u75be\u75c5\u3001\u6709\u9650\u7684\u98df\u7269\u3001\u5f3a\u8feb\u558a\u98df\u548c\u6b7b\u4ea1\u3002\u4e00\u8258\u5178\u578b\u7684\u8239\u6bcf\u4eba\u53ea\u6709\u7ea6\u4e03\u5e73\u65b9\u82f1\u5c3a\u7684\u7a7a\u95f4\uff0c\u53ef\u8fd0\u8f7d 200 \u5230 500 \u4eba\u3002\u5e03\u9c81\u514b\u65af\u53f7\u56fe\u663e\u793a\u5408\u6cd5\u5bb9\u91cf\u4e3a 454 \u4eba\uff0c\u4f46\u4e00\u6b21\u822a\u884c\u88c5\u8f7d\u4e86 609 \u4eba\u3002",
        },
      ],
    },

    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "A",
      title: "Arrival and sale in the Americas",
      titleZh: "\u62b5\u8fbe\u4e0e\u5728\u7f8e\u6d32\u7684\u8d29\u5356",
      subtitle:
        "What happened when enslaved people reached the Caribbean \u2014 preparation, auction, scramble, and family separation.",
      subtitleZh:
        "\u88ab\u5974\u5f79\u7684\u4eba\u5230\u8fbe\u52a0\u52d2\u6bd4\u6d77\u540e\u53d1\u751f\u4e86\u4ec0\u4e48\u2014\u2014\u51c6\u5907\u3001\u62cd\u5356\u3001\u4e89\u62a2\u548c\u5bb6\u5ead\u5206\u79bb\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe how enslaved people were prepared and sold after arriving in the Americas.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u7684\u4eba\u62b5\u8fbe\u7f8e\u6d32\u540e\u5982\u4f55\u88ab\u51c6\u5907\u548c\u51fa\u552e\u3002",
            },
            {
              en: "I can explain the difference between an auction and a scramble.",
              zh: "\u6211\u80fd\u89e3\u91ca\u62cd\u5356\u548c\u4e89\u62a2\u4e4b\u95f4\u7684\u533a\u522b\u3002",
            },
            {
              en: "I can explain the emotional impact of sale and family separation on enslaved people.",
              zh: "\u6211\u80fd\u89e3\u91ca\u51fa\u552e\u548c\u5bb6\u5ead\u5206\u79bb\u5bf9\u88ab\u5974\u5f79\u8005\u7684\u60c5\u611f\u5f71\u54cd\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Only a small percentage of enslaved Africans went to North America. Most were taken to South America or the Caribbean. Barbados was often the first Caribbean stop because ships reached it first. After arriving, captives saw ships and harbour activity. Traders inspected them \u2014 they were made to jump and were judged physically. Many were terrified because they did not know what would happen next.",
              zh: "\u53ea\u6709\u5c11\u90e8\u5206\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u53bb\u4e86\u5317\u7f8e\u3002\u5927\u591a\u6570\u88ab\u5e26\u5230\u5357\u7f8e\u6216\u52a0\u52d2\u6bd4\u6d77\u3002\u5df4\u5df4\u591a\u65af\u901a\u5e38\u662f\u52a0\u52d2\u6bd4\u6d77\u7684\u7b2c\u4e00\u7ad9\uff0c\u56e0\u4e3a\u8239\u53ea\u6700\u5148\u5230\u8fbe\u90a3\u91cc\u3002\u62b5\u8fbe\u540e\uff0c\u4ff8\u864f\u4eec\u770b\u5230\u8239\u53ea\u548c\u6e2f\u53e3\u6d3b\u52a8\u3002\u8d38\u6613\u5546\u68c0\u67e5\u4ed6\u4eec\u2014\u2014\u4ed6\u4eec\u88ab\u8981\u6c42\u8df3\u8dc3\uff0c\u5e76\u88ab\u4ece\u4f53\u8d28\u4e0a\u8bc4\u5224\u3002\u8bb8\u591a\u4eba\u611f\u5230\u6050\u60e7\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4e0d\u77e5\u9053\u63a5\u4e0b\u6765\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002",
            },
            {
              type: "text",
              en: "Enslaved people were prepared for sale in ways designed to increase profit. They might be washed, oiled, or even have their wounds hidden. Posters advertised the sales and attracted buyers.",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u4ee5\u589e\u52a0\u5229\u6da6\u7684\u65b9\u5f0f\u51c6\u5907\u51fa\u552e\u3002\u4ed6\u4eec\u53ef\u80fd\u88ab\u6d17\u6d57\u3001\u6d82\u6cb9\uff0c\u751a\u81f3\u4f24\u53e3\u88ab\u9690\u85cf\u3002\u6d77\u62a5\u5ba3\u4f20\u9500\u552e\u5e76\u5438\u5f15\u4e70\u5bb6\u3002",
            },
            {
              type: "highlight",
              en: "There were two main methods of sale. In an auction, the highest bidder bought the enslaved person. In a scramble, buyers paid a fixed price, then at a signal they rushed forward and seized the people they wanted. Both methods treated human beings as products to be bought and sold.",
              zh: "\u6709\u4e24\u79cd\u4e3b\u8981\u7684\u9500\u552e\u65b9\u5f0f\u3002\u5728\u62cd\u5356\u4e2d\uff0c\u51fa\u4ef7\u6700\u9ad8\u7684\u4eba\u4e70\u4e0b\u88ab\u5974\u5f79\u7684\u4eba\u3002\u5728\u4e89\u62a2\u4e2d\uff0c\u4e70\u5bb6\u652f\u4ed8\u56fa\u5b9a\u4ef7\u683c\uff0c\u7136\u540e\u5728\u4e00\u4e2a\u4fe1\u53f7\u4e0b\u51b2\u4e0a\u524d\u53bb\u62a2\u62d3\u4ed6\u4eec\u60f3\u8981\u7684\u4eba\u3002\u4e24\u79cd\u65b9\u5f0f\u90fd\u5c06\u4eba\u89c6\u4e3a\u53ef\u4ee5\u4e70\u5356\u7684\u4ea7\u54c1\u3002",
            },
            {
              type: "text",
              en: "Families could be permanently separated during the sale. Mothers were sold away from children, and wives from husbands, with no expectation of reunion. After purchase, enslaved people were often branded with estate marks and given new European names, losing their original identity.",
              zh: "\u5bb6\u5ead\u53ef\u80fd\u5728\u9500\u552e\u8fc7\u7a0b\u4e2d\u88ab\u6c38\u4e45\u5206\u79bb\u3002\u6bcd\u4eb2\u88ab\u4e0e\u5b69\u5b50\u5206\u5f00\u51fa\u552e\uff0c\u59bb\u5b50\u88ab\u4e0e\u4e08\u592b\u5206\u5f00\uff0c\u6ca1\u6709\u91cd\u805a\u7684\u671f\u671b\u3002\u8d2d\u4e70\u540e\uff0c\u88ab\u5974\u5f79\u7684\u4eba\u901a\u5e38\u88ab\u70d9\u4e0a\u5e84\u56ed\u6807\u8bb0\u5e76\u88ab\u8d4b\u4e88\u65b0\u7684\u6b27\u6d32\u540d\u5b57\uff0c\u5931\u53bb\u4e86\u539f\u6765\u7684\u8eab\u4efd\u3002",
            },
            {
              type: "example",
              en: "Imagine standing in a room full of strangers who are examining you, grabbing you, and deciding your future \u2014 and knowing that you may never see your family again. The sale was not just a financial transaction; it was the moment when the last connections to home, family, and identity could be destroyed.",
              zh: "\u60f3\u8c61\u4e00\u4e0b\uff0c\u7ad9\u5728\u4e00\u4e2a\u5145\u6ee1\u964c\u751f\u4eba\u7684\u623f\u95f4\u91cc\uff0c\u4ed6\u4eec\u5728\u5ba1\u89c6\u4f60\u3001\u6293\u4f4f\u4f60\u3001\u51b3\u5b9a\u4f60\u7684\u672a\u6765\u2014\u2014\u5e76\u4e14\u77e5\u9053\u4f60\u53ef\u80fd\u518d\u4e5f\u89c1\u4e0d\u5230\u4f60\u7684\u5bb6\u4eba\u3002\u9500\u552e\u4e0d\u4ec5\u4ec5\u662f\u4e00\u7b14\u91d1\u878d\u4ea4\u6613\uff1b\u5b83\u662f\u4e0e\u5bb6\u4e61\u3001\u5bb6\u4eba\u548c\u8eab\u4efd\u7684\u6700\u540e\u8054\u7cfb\u53ef\u80fd\u88ab\u6467\u6bc1\u7684\u65f6\u523b\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Auction",
              zh: "\u62cd\u5356",
              defEn:
                "A sale where the highest bidder buys the enslaved person.",
              defZh: "\u4e00\u79cd\u9500\u552e\u65b9\u5f0f\uff0c\u51fa\u4ef7\u6700\u9ad8\u7684\u4eba\u4e70\u4e0b\u88ab\u5974\u5f79\u7684\u4eba\u3002",
            },
            {
              en: "Scramble",
              zh: "\u4e89\u62a2",
              defEn:
                "A sale method where buyers paid a fixed price, then rushed forward at a signal to seize the enslaved people they wanted.",
              defZh: "\u4e00\u79cd\u9500\u552e\u65b9\u5f0f\uff0c\u4e70\u5bb6\u652f\u4ed8\u56fa\u5b9a\u4ef7\u683c\uff0c\u7136\u540e\u5728\u4fe1\u53f7\u4e0b\u51b2\u4e0a\u524d\u62a2\u62d3\u4ed6\u4eec\u60f3\u8981\u7684\u88ab\u5974\u5f79\u7684\u4eba\u3002",
            },
            {
              en: "Estate mark",
              zh: "\u5e84\u56ed\u6807\u8bb0",
              defEn:
                "A brand burned into the skin of an enslaved person to show which plantation they belonged to.",
              defZh: "\u70d9\u5370\u5728\u88ab\u5974\u5f79\u8005\u76ae\u80a4\u4e0a\u7684\u6807\u8bb0\uff0c\u8868\u793a\u4ed6\u4eec\u5c5e\u4e8e\u54ea\u4e2a\u79cd\u690d\u56ed\u3002",
            },
            {
              en: "Family separation",
              zh: "\u5bb6\u5ead\u5206\u79bb",
              defEn:
                "The deliberate splitting of families during the sale of enslaved people \u2014 parents from children, husbands from wives.",
              defZh: "\u5728\u51fa\u552e\u88ab\u5974\u5f79\u8005\u65f6\u6545\u610f\u62c6\u6563\u5bb6\u5ead\u2014\u2014\u7236\u6bcd\u4e0e\u5b69\u5b50\u5206\u5f00\uff0c\u4e08\u592b\u4e0e\u59bb\u5b50\u5206\u5f00\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Enslaved Africans arriving by ship \u2014 before being sold in the Americas",
          captionZh: "\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u4e58\u8239\u62b5\u8fbe\u2014\u2014\u5728\u7f8e\u6d32\u88ab\u51fa\u552e\u4e4b\u524d",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Slave_Auction.jpg",
        },
        {
          type: "source",
          labelEn: "Testimony about the sale process",
          labelZh: "\u5173\u4e8e\u9500\u552e\u8fc7\u7a0b\u7684\u8bc1\u8bcd",
          en: "First-person accounts describe how people were pushed into a confined sale space. White buyers stood around the edge. After a signal, buyers rushed in and chose who they wanted. The terror of the scramble was compounded by the knowledge that family members could be taken by different buyers and never seen again.",
          zh: "\u7b2c\u4e00\u4eba\u79f0\u53d9\u8ff0\u63cf\u8ff0\u4e86\u4eba\u4eec\u5982\u4f55\u88ab\u63a8\u8fdb\u4e00\u4e2a\u5c01\u95ed\u7684\u9500\u552e\u7a7a\u95f4\u3002\u767d\u4eba\u4e70\u5bb6\u7ad9\u5728\u56db\u5468\u3002\u4e00\u4e2a\u4fe1\u53f7\u4e4b\u540e\uff0c\u4e70\u5bb6\u51b2\u8fdb\u6765\u6311\u9009\u4ed6\u4eec\u60f3\u8981\u7684\u4eba\u3002\u4e89\u62a2\u7684\u6050\u60e7\u56e0\u77e5\u9053\u5bb6\u4eba\u53ef\u80fd\u88ab\u4e0d\u540c\u7684\u4e70\u5bb6\u5e26\u8d70\u4e14\u518d\u4e5f\u89c1\u4e0d\u5230\u800c\u52a0\u5267\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "After purchase, enslaved people were branded with estate marks and given new European names. Olaudah Equiano, for example, was renamed Gustavus Vassa. Why might renaming be considered another form of violence, even without physical harm?",
              qZh: "\u8d2d\u4e70\u540e\uff0c\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u70d9\u4e0a\u5e84\u56ed\u6807\u8bb0\u5e76\u88ab\u8d4b\u4e88\u65b0\u7684\u6b27\u6d32\u540d\u5b57\u3002\u4f8b\u5982\uff0c\u5965\u62c9\u8fbe\u00b7\u4f0a\u5947\u4e9a\u8bfa\u88ab\u6539\u540d\u4e3a\u53e4\u65af\u5854\u592b\u65af\u00b7\u74e6\u8428\u3002\u4e3a\u4ec0\u4e48\u6539\u540d\u53ef\u80fd\u88ab\u89c6\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u66b4\u529b\uff0c\u5373\u4f7f\u6ca1\u6709\u8eab\u4f53\u4f24\u5bb3\uff1f",
              aEn: "A name is deeply connected to identity, family, and culture. Taking away someone's name and replacing it with one chosen by an owner is a way of erasing who that person is and asserting total control over them. It says: your past, your family, your culture no longer matter \u2014 you are now defined by your owner. This is why Equiano deliberately used his African name when he later wrote his autobiography.",
              aZh: "\u540d\u5b57\u4e0e\u8eab\u4efd\u3001\u5bb6\u5ead\u548c\u6587\u5316\u6df1\u6df1\u76f8\u8fde\u3002\u5265\u593a\u67d0\u4eba\u7684\u540d\u5b57\u5e76\u7528\u4e3b\u4eba\u9009\u62e9\u7684\u540d\u5b57\u66ff\u4ee3\uff0c\u662f\u62b9\u53bb\u90a3\u4e2a\u4eba\u7684\u8eab\u4efd\u5e76\u5bf9\u5176\u65bd\u52a0\u5b8c\u5168\u63a7\u5236\u7684\u4e00\u79cd\u65b9\u5f0f\u3002\u5b83\u8bf4\uff1a\u4f60\u7684\u8fc7\u53bb\u3001\u4f60\u7684\u5bb6\u4eba\u3001\u4f60\u7684\u6587\u5316\u4e0d\u518d\u91cd\u8981\u2014\u2014\u4f60\u73b0\u5728\u7531\u4f60\u7684\u4e3b\u4eba\u5b9a\u4e49\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u4f0a\u5947\u4e9a\u8bfa\u540e\u6765\u5199\u81ea\u4f20\u65f6\u523b\u610f\u4f7f\u7528\u4e86\u4ed6\u7684\u975e\u6d32\u540d\u5b57\u3002",
            },
            {
              qEn: "Barbados was often the first stop for slave ships. Why might the geography of the Caribbean have affected which islands received the most enslaved people?",
              qZh: "\u5df4\u5df4\u591a\u65af\u901a\u5e38\u662f\u5974\u96b6\u8239\u7684\u7b2c\u4e00\u7ad9\u3002\u52a0\u52d2\u6bd4\u6d77\u7684\u5730\u7406\u4f4d\u7f6e\u53ef\u80fd\u5982\u4f55\u5f71\u54cd\u4e86\u54ea\u4e9b\u5c9b\u5c7f\u63a5\u6536\u4e86\u6700\u591a\u7684\u88ab\u5974\u5f79\u8005\uff1f",
              aEn: "Barbados is the easternmost Caribbean island, meaning it was the first landfall for ships crossing the Atlantic from Africa. Ships that had been at sea for weeks would stop at the first possible port to sell their cargo. This geographical fact meant Barbados and other eastern islands received large numbers of enslaved people, which in turn shaped their economies and societies around plantation agriculture.",
              aZh: "\u5df4\u5df4\u591a\u65af\u662f\u52a0\u52d2\u6bd4\u6d77\u6700\u4e1c\u7aef\u7684\u5c9b\u5c7f\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u662f\u4ece\u975e\u6d32\u6a2a\u6e21\u5927\u897f\u6d0b\u7684\u8239\u53ea\u7684\u7b2c\u4e00\u4e2a\u767b\u9646\u70b9\u3002\u5728\u6d77\u4e0a\u822a\u884c\u6570\u5468\u7684\u8239\u53ea\u4f1a\u5728\u7b2c\u4e00\u4e2a\u53ef\u80fd\u7684\u6e2f\u53e3\u505c\u9760\u51fa\u552e\u8d27\u7269\u3002\u8fd9\u4e00\u5730\u7406\u4e8b\u5b9e\u610f\u5473\u7740\u5df4\u5df4\u591a\u65af\u548c\u5176\u4ed6\u4e1c\u90e8\u5c9b\u5c7f\u63a5\u6536\u4e86\u5927\u91cf\u88ab\u5974\u5f79\u7684\u4eba\uff0c\u8fd9\u53cd\u8fc7\u6765\u5851\u9020\u4e86\u4ed6\u4eec\u56f4\u7ed5\u79cd\u690d\u56ed\u519c\u4e1a\u7684\u7ecf\u6d4e\u548c\u793e\u4f1a\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "What were the two main methods used to sell enslaved people in the Americas?",
          qZh: "\u5728\u7f8e\u6d32\u7528\u6765\u51fa\u552e\u88ab\u5974\u5f79\u8005\u7684\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f",
          opts: [
            {
              en: "Lottery and raffle",
              zh: "\u62bd\u5956\u548c\u62bd\u5f69",
            },
            {
              en: "Auction (highest bidder) and scramble (buyers rush to seize people at a fixed price)",
              zh: "\u62cd\u5356\uff08\u6700\u9ad8\u51fa\u4ef7\u8005\uff09\u548c\u4e89\u62a2\uff08\u4e70\u5bb6\u4ee5\u56fa\u5b9a\u4ef7\u683c\u51b2\u4e0a\u524d\u62a2\u4eba\uff09",
            },
            {
              en: "Private negotiation only",
              zh: "\u4ec5\u79c1\u4e0b\u8c08\u5224",
            },
            {
              en: "Free market where enslaved people chose their own buyers",
              zh: "\u88ab\u5974\u5f79\u8005\u81ea\u5df1\u9009\u62e9\u4e70\u5bb6\u7684\u81ea\u7531\u5e02\u573a",
            },
          ],
          correct: 1,
          explainCorrectEn:
            "The lesson materials describe two main methods. In an auction, the highest bidder bought the enslaved person. In a scramble, buyers paid a fixed price, then at a signal they rushed forward and seized the people they wanted. Both methods could separate families permanently.",
          explainCorrectZh:
            "\u8bfe\u5802\u6750\u6599\u63cf\u8ff0\u4e86\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u3002\u5728\u62cd\u5356\u4e2d\uff0c\u51fa\u4ef7\u6700\u9ad8\u7684\u4eba\u4e70\u4e0b\u88ab\u5974\u5f79\u7684\u4eba\u3002\u5728\u4e89\u62a2\u4e2d\uff0c\u4e70\u5bb6\u652f\u4ed8\u56fa\u5b9a\u4ef7\u683c\uff0c\u7136\u540e\u5728\u4fe1\u53f7\u4e0b\u51b2\u4e0a\u524d\u62a2\u62d3\u4ed6\u4eec\u60f3\u8981\u7684\u4eba\u3002\u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u80fd\u6c38\u4e45\u5730\u62c6\u6563\u5bb6\u5ead\u3002",
          explainWrongEn:
            "The correct answer is B. The two sale methods were auction (where the highest bidder wins) and scramble (where buyers paid a fixed price and then rushed to grab the people they wanted). The materials also describe how families were permanently separated \u2014 mothers from children, husbands from wives \u2014 with no expectation of reunion.",
          explainWrongZh:
            "\u6b63\u786e\u7b54\u6848\u662fB\u3002\u4e24\u79cd\u9500\u552e\u65b9\u6cd5\u662f\u62cd\u5356\uff08\u6700\u9ad8\u51fa\u4ef7\u8005\u4e2d\u6807\uff09\u548c\u4e89\u62a2\uff08\u4e70\u5bb6\u652f\u4ed8\u56fa\u5b9a\u4ef7\u683c\u7136\u540e\u51b2\u4e0a\u524d\u62a2\u4eba\uff09\u3002\u6750\u6599\u8fd8\u63cf\u8ff0\u4e86\u5bb6\u5ead\u5982\u4f55\u88ab\u6c38\u4e45\u5206\u79bb\u2014\u2014\u6bcd\u4eb2\u4e0e\u5b69\u5b50\u3001\u4e08\u592b\u4e0e\u59bb\u5b50\u2014\u2014\u6ca1\u6709\u91cd\u805a\u7684\u671f\u671b\u3002",
        },
      ],
    },

    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "E",
      title: "Life on the plantation",
      titleZh: "\u79cd\u690d\u56ed\u7684\u751f\u6d3b",
      subtitle:
        "Daily life, punishment, and the survival of African culture under slavery.",
      subtitleZh:
        "\u65e5\u5e38\u751f\u6d3b\u3001\u60e9\u7f5a\uff0c\u4ee5\u53ca\u5974\u96b6\u5236\u4e0b\u975e\u6d32\u6587\u5316\u7684\u5b58\u7eed\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe the daily conditions of life on a plantation for enslaved people.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u88ab\u5974\u5f79\u8005\u5728\u79cd\u690d\u56ed\u7684\u65e5\u5e38\u751f\u6d3b\u6761\u4ef6\u3002",
            },
            {
              en: "I can explain how control and punishment were used to maintain the system.",
              zh: "\u6211\u80fd\u89e3\u91ca\u63a7\u5236\u548c\u60e9\u7f5a\u5982\u4f55\u88ab\u7528\u6765\u7ef4\u6301\u8fd9\u4e2a\u5236\u5ea6\u3002",
            },
            {
              en: "I can explain how enslaved Africans preserved parts of their culture despite slavery.",
              zh: "\u6211\u80fd\u89e3\u91ca\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5982\u4f55\u5728\u5974\u96b6\u5236\u4e0b\u4fdd\u5b58\u4e86\u4ed6\u4eec\u6587\u5316\u7684\u4e00\u90e8\u5206\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "After sale, enslaved people were taken to plantations. Housing was crowded and basic \u2014 huts could hold up to about 10 people. Beds were made from straw or rags, and cooking equipment was limited and sometimes self-made. Food was basic and cheap, including fatty meat and cornbread. Clothing was rough, badly fitted, and given in minimal amounts.",
              zh: "\u51fa\u552e\u540e\uff0c\u88ab\u5974\u5f79\u7684\u4eba\u88ab\u5e26\u5230\u79cd\u690d\u56ed\u3002\u4f4f\u623f\u62e5\u6324\u800c\u7b80\u964b\u2014\u2014\u5c0f\u5c4b\u53ef\u4ee5\u5bb9\u7eb3\u7ea6 10 \u4eba\u3002\u5e8a\u7531\u7a3b\u8349\u6216\u7834\u5e03\u5236\u6210\uff0c\u7092\u83dc\u8bbe\u5907\u6709\u9650\uff0c\u6709\u65f6\u662f\u81ea\u5236\u7684\u3002\u98df\u7269\u7b80\u5355\u4e14\u5ec9\u4ef7\uff0c\u5305\u62ec\u80a5\u8089\u548c\u7389\u7c73\u9762\u5305\u3002\u8863\u670d\u7c97\u7cd9\u3001\u4e0d\u5408\u8eab\uff0c\u4e14\u53d1\u653e\u91cf\u6781\u5c11\u3002",
            },
            {
              type: "highlight",
              en: "Working days were long, often from sunrise to sunset. During harvest seasons, work could continue into the night. Enslaved people had almost no legal rights and no real control over their daily lives. Food, clothing, tools, and housing were all controlled by the owner. Punishment was harsh and helped keep the system in place.",
              zh: "\u5de5\u4f5c\u65f6\u95f4\u5f88\u957f\uff0c\u901a\u5e38\u4ece\u65e5\u51fa\u5230\u65e5\u843d\u3002\u5728\u6536\u83b7\u5b63\u8282\uff0c\u5de5\u4f5c\u53ef\u80fd\u6301\u7eed\u5230\u6df1\u591c\u3002\u88ab\u5974\u5f79\u7684\u4eba\u51e0\u4e4e\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u5bf9\u65e5\u5e38\u751f\u6d3b\u6ca1\u6709\u771f\u6b63\u7684\u63a7\u5236\u3002\u98df\u7269\u3001\u8863\u670d\u3001\u5de5\u5177\u548c\u4f4f\u623f\u90fd\u7531\u4e3b\u4eba\u63a7\u5236\u3002\u60e9\u7f5a\u5f88\u4e25\u5389\uff0c\u6709\u52a9\u4e8e\u7ef4\u6301\u8fd9\u4e2a\u5236\u5ea6\u3002",
            },
            {
              type: "text",
              en: "Some owners allowed enslaved people small garden plots to grow their own food. Literacy was restricted, though some could attend church. Time off was minimal, and every aspect of life was shaped by the need to keep the plantation system running.",
              zh: "\u4e00\u4e9b\u4e3b\u4eba\u5141\u8bb8\u88ab\u5974\u5f79\u7684\u4eba\u62e5\u6709\u5c0f\u5757\u83dc\u5730\u79cd\u690d\u81ea\u5df1\u7684\u98df\u7269\u3002\u8bc6\u5b57\u53d7\u5230\u9650\u5236\uff0c\u4f46\u6709\u4e9b\u4eba\u53ef\u4ee5\u53c2\u52a0\u6559\u4f1a\u6d3b\u52a8\u3002\u4f11\u606f\u65f6\u95f4\u6781\u5c11\uff0c\u751f\u6d3b\u7684\u6bcf\u4e2a\u65b9\u9762\u90fd\u88ab\u7ef4\u6301\u79cd\u690d\u56ed\u5236\u5ea6\u8fd0\u8f6c\u7684\u9700\u8981\u6240\u5851\u9020\u3002",
            },
            {
              type: "text",
              en: "Despite all of this, enslaved Africans did not arrive empty-handed. They carried memories, languages, stories, religions, music, and skills. These cultural traditions survived through generations, even under the most extreme conditions. When Equiano later wrote his autobiography, he deliberately used his African name \u2014 a powerful act of reclaiming the identity that slavery had tried to destroy.",
              zh: "\u5c3d\u7ba1\u5982\u6b64\uff0c\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5e76\u975e\u7a7a\u624b\u800c\u6765\u3002\u4ed6\u4eec\u643a\u5e26\u7740\u8bb0\u5fc6\u3001\u8bed\u8a00\u3001\u6545\u4e8b\u3001\u5b97\u6559\u3001\u97f3\u4e50\u548c\u6280\u80fd\u3002\u8fd9\u4e9b\u6587\u5316\u4f20\u7edf\u5728\u6700\u6781\u7aef\u7684\u6761\u4ef6\u4e0b\u4ecd\u7136\u5ef6\u7eed\u4e86\u6570\u4ee3\u3002\u5f53\u4f0a\u5947\u4e9a\u8bfa\u540e\u6765\u5199\u81ea\u4f20\u65f6\uff0c\u4ed6\u523b\u610f\u4f7f\u7528\u4e86\u4ed6\u7684\u975e\u6d32\u540d\u5b57\u2014\u2014\u8fd9\u662f\u4e00\u4e2a\u5f3a\u6709\u529b\u7684\u884c\u4e3a\uff0c\u91cd\u65b0\u593a\u56de\u5974\u96b6\u5236\u8bd5\u56fe\u6467\u6bc1\u7684\u8eab\u4efd\u3002",
            },
            {
              type: "example",
              en: "Think about what it would take to keep your language, your songs, and your family stories alive when everything around you is designed to erase who you are. The fact that African culture survived in the Americas is not a small detail \u2014 it is evidence of extraordinary human resilience.",
              zh: "\u60f3\u60f3\u770b\uff0c\u5f53\u4f60\u5468\u56f4\u7684\u4e00\u5207\u90fd\u5728\u8bd5\u56fe\u62b9\u53bb\u4f60\u662f\u8c01\u65f6\uff0c\u4fdd\u6301\u4f60\u7684\u8bed\u8a00\u3001\u6b4c\u66f2\u548c\u5bb6\u5ead\u6545\u4e8b\u9700\u8981\u4ec0\u4e48\u3002\u975e\u6d32\u6587\u5316\u5728\u7f8e\u6d32\u5b58\u7eed\u4e0b\u6765\u4e0d\u662f\u4e00\u4e2a\u5c0f\u7ec6\u8282\u2014\u2014\u5b83\u662f\u975e\u51e1\u4eba\u7c7b\u97e7\u6027\u7684\u8bc1\u636e\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Plantation",
              zh: "\u79cd\u690d\u56ed",
              defEn:
                "A large farm or estate where crops like sugar and tobacco were grown using enslaved labour.",
              defZh: "\u4e00\u4e2a\u5927\u578b\u519c\u573a\u6216\u5e84\u56ed\uff0c\u4f7f\u7528\u5974\u96b6\u52b3\u52a8\u79cd\u690d\u7cd6\u548c\u70df\u8349\u7b49\u4f5c\u7269\u3002",
            },
            {
              en: "Resistance",
              zh: "\u53cd\u6297",
              defEn:
                "Actions taken by enslaved people to push back against the system \u2014 from preserving culture and language to open rebellion.",
              defZh: "\u88ab\u5974\u5f79\u8005\u4e3a\u53cd\u6297\u5236\u5ea6\u800c\u91c7\u53d6\u7684\u884c\u52a8\u2014\u2014\u4ece\u4fdd\u5b58\u6587\u5316\u548c\u8bed\u8a00\u5230\u516c\u5f00\u53db\u4e71\u3002",
            },
            {
              en: "Dehumanisation",
              zh: "\u53bb\u4eba\u6027\u5316",
              defEn:
                "The process of treating people as less than human \u2014 through branding, renaming, punishment, and denying basic rights.",
              defZh: "\u5c06\u4eba\u89c6\u4e3a\u4e0d\u5982\u4eba\u7684\u8fc7\u7a0b\u2014\u2014\u901a\u8fc7\u70d9\u5370\u3001\u6539\u540d\u3001\u60e9\u7f5a\u548c\u5426\u8ba4\u57fa\u672c\u6743\u5229\u3002",
            },
            {
              en: "Cultural survival",
              zh: "\u6587\u5316\u5b58\u7eed",
              defEn:
                "The way enslaved Africans kept their memories, languages, stories, religions, and music alive across generations in the Americas.",
              defZh: "\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5728\u7f8e\u6d32\u5c06\u4ed6\u4eec\u7684\u8bb0\u5fc6\u3001\u8bed\u8a00\u3001\u6545\u4e8b\u3001\u5b97\u6559\u548c\u97f3\u4e50\u4e16\u4ee3\u76f8\u4f20\u7684\u65b9\u5f0f\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Enslaved people cutting sugar cane on a Caribbean plantation, 1823",
          captionZh: "\u88ab\u5974\u5f79\u8005\u5728\u52a0\u52d2\u6bd4\u6d77\u79cd\u690d\u56ed\u7802\u7cd6\u7684\u573a\u666f\uff0c1823\u5e74",
          source: "Wikimedia Commons (Public Domain)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Slaves_cutting_the_sugar_cane_-_Ten_Views_in_the_Island_of_Antigua_(1823),_plate_IV_-_BL.jpg",
        },
        {
          type: "source",
          labelEn: "Evidence about daily plantation life",
          labelZh: "\u5173\u4e8e\u79cd\u690d\u56ed\u65e5\u5e38\u751f\u6d3b\u7684\u8bc1\u636e",
          en: "Classroom materials describe how students read first-hand accounts in pairs and collected evidence about work and punishments on plantations. These accounts show that plantation life was based on labour extraction, surveillance, punishment, and dependency. Enslaved people had no real control over any part of their daily lives, yet they found ways to maintain their identity through stories, music, and shared memory.",
          zh: "\u8bfe\u5802\u6750\u6599\u63cf\u8ff0\u4e86\u5b66\u751f\u5982\u4f55\u4e24\u4eba\u4e00\u7ec4\u9605\u8bfb\u7b2c\u4e00\u624b\u8d44\u6599\u5e76\u6536\u96c6\u5173\u4e8e\u79cd\u690d\u56ed\u5de5\u4f5c\u548c\u60e9\u7f5a\u7684\u8bc1\u636e\u3002\u8fd9\u4e9b\u8bb0\u8ff0\u8868\u660e\uff0c\u79cd\u690d\u56ed\u751f\u6d3b\u5efa\u7acb\u5728\u52b3\u52a8\u638c\u63a7\u3001\u76d1\u89c6\u3001\u60e9\u7f5a\u548c\u4f9d\u8d56\u4e4b\u4e0a\u3002\u88ab\u5974\u5f79\u7684\u4eba\u5bf9\u65e5\u5e38\u751f\u6d3b\u7684\u4efb\u4f55\u90e8\u5206\u90fd\u6ca1\u6709\u771f\u6b63\u7684\u63a7\u5236\uff0c\u4f46\u4ed6\u4eec\u627e\u5230\u4e86\u901a\u8fc7\u6545\u4e8b\u3001\u97f3\u4e50\u548c\u5171\u540c\u8bb0\u5fc6\u6765\u4fdd\u6301\u8eab\u4efd\u7684\u65b9\u6cd5\u3002",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Enslaved people had almost no legal rights and faced harsh punishments. Why do you think some people still resisted, even when the risks were so great?",
              qZh: "\u88ab\u5974\u5f79\u7684\u4eba\u51e0\u4e4e\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u9762\u4e34\u4e25\u5389\u7684\u60e9\u7f5a\u3002\u4e3a\u4ec0\u4e48\u4f60\u8ba4\u4e3a\u6709\u4e9b\u4eba\u4ecd\u7136\u53cd\u6297\uff0c\u5373\u4f7f\u98ce\u9669\u5982\u6b64\u4e4b\u5927\uff1f",
              aEn: "Resistance took many forms \u2014 not just open rebellion, but also preserving language, telling stories, practising religion, and refusing to forget who they were. People resisted because the desire for freedom and dignity is fundamental to being human. Even when the system was designed to crush individuality, many enslaved people found ways to assert their humanity, which shows that no system of oppression can fully succeed in erasing identity.",
              aZh: "\u53cd\u6297\u6709\u8bb8\u591a\u5f62\u5f0f\u2014\u2014\u4e0d\u4ec5\u4ec5\u662f\u516c\u5f00\u53db\u4e71\uff0c\u8fd8\u6709\u4fdd\u5b58\u8bed\u8a00\u3001\u8bb2\u8ff0\u6545\u4e8b\u3001\u4fe1\u4ef0\u5b97\u6559\u4ee5\u53ca\u62d2\u7edd\u5fd8\u8bb0\u81ea\u5df1\u662f\u8c01\u3002\u4eba\u4eec\u53cd\u6297\u662f\u56e0\u4e3a\u5bf9\u81ea\u7531\u548c\u5c0a\u4e25\u7684\u6e34\u671b\u662f\u4eba\u7c7b\u7684\u57fa\u672c\u9700\u6c42\u3002\u5373\u4f7f\u5236\u5ea6\u65e8\u5728\u538b\u788e\u4e2a\u6027\uff0c\u8bb8\u591a\u88ab\u5974\u5f79\u7684\u4eba\u4ecd\u627e\u5230\u4e86\u5f70\u663e\u81ea\u5df1\u4eba\u6027\u7684\u65b9\u6cd5\uff0c\u8fd9\u8868\u660e\u6ca1\u6709\u4efb\u4f55\u538b\u8feb\u5236\u5ea6\u80fd\u5b8c\u5168\u6210\u529f\u5730\u62b9\u53bb\u8eab\u4efd\u3002",
            },
            {
              qEn: "The video says that enslaved Africans carried memories, languages, stories, religions, music, and skills to the Americas. Why is it important for historians to study what survived, not just what was destroyed?",
              qZh: "\u89c6\u9891\u8bf4\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u5c06\u8bb0\u5fc6\u3001\u8bed\u8a00\u3001\u6545\u4e8b\u3001\u5b97\u6559\u3001\u97f3\u4e50\u548c\u6280\u80fd\u5e26\u5230\u4e86\u7f8e\u6d32\u3002\u4e3a\u4ec0\u4e48\u5386\u53f2\u5b66\u5bb6\u7814\u7a76\u5b58\u7eed\u4e0b\u6765\u7684\u4e1c\u897f\u800c\u4e0d\u4ec5\u4ec5\u662f\u88ab\u6467\u6bc1\u7684\u4e1c\u897f\u5f88\u91cd\u8981\uff1f",
              aEn: "Focusing only on destruction can make enslaved people seem like passive victims with no agency. Studying cultural survival shows that enslaved Africans were active, creative human beings who fought to preserve their identity. It also helps us understand the roots of many cultural traditions in the Americas today \u2014 in music, language, food, and religion \u2014 and honours the people who kept those traditions alive under impossible conditions.",
              aZh: "\u53ea\u5173\u6ce8\u6467\u6bc1\u4f1a\u8ba9\u88ab\u5974\u5f79\u7684\u4eba\u770b\u8d77\u6765\u50cf\u662f\u6ca1\u6709\u4e3b\u52a8\u6027\u7684\u88ab\u52a8\u53d7\u5bb3\u8005\u3002\u7814\u7a76\u6587\u5316\u5b58\u7eed\u8868\u660e\u88ab\u5974\u5f79\u7684\u975e\u6d32\u4eba\u662f\u79ef\u6781\u7684\u3001\u6709\u521b\u9020\u529b\u7684\u4eba\uff0c\u4ed6\u4eec\u4e3a\u4fdd\u5b58\u81ea\u5df1\u7684\u8eab\u4efd\u800c\u6218\u6597\u3002\u5b83\u8fd8\u5e2e\u52a9\u6211\u4eec\u7406\u89e3\u4eca\u5929\u7f8e\u6d32\u8bb8\u591a\u6587\u5316\u4f20\u7edf\u7684\u6839\u6e90\u2014\u2014\u5728\u97f3\u4e50\u3001\u8bed\u8a00\u3001\u98df\u7269\u548c\u5b97\u6559\u65b9\u9762\u2014\u2014\u5e76\u5c0a\u91cd\u90a3\u4e9b\u5728\u4e0d\u53ef\u80fd\u7684\u6761\u4ef6\u4e0b\u4fdd\u6301\u8fd9\u4e9b\u4f20\u7edf\u7684\u4eba\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is true about life on a plantation?",
          qZh: "\u5173\u4e8e\u79cd\u690d\u56ed\u751f\u6d3b\uff0c\u4ee5\u4e0b\u54ea\u9879\u662f\u6b63\u786e\u7684\uff1f",
          opts: [
            {
              en: "Enslaved people had comfortable housing and regular time off",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u6709\u8212\u9002\u7684\u4f4f\u623f\u548c\u5b9a\u671f\u7684\u4f11\u606f\u65f6\u95f4",
            },
            {
              en: "Enslaved people could choose their own work and hours",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u7684\u5de5\u4f5c\u548c\u5de5\u65f6",
            },
            {
              en: "Enslaved people lived in crowded huts, worked from sunrise to sunset, faced harsh punishments, and had almost no legal rights",
              zh: "\u88ab\u5974\u5f79\u7684\u4eba\u4f4f\u5728\u62e5\u6324\u7684\u5c0f\u5c4b\u91cc\uff0c\u4ece\u65e5\u51fa\u5de5\u4f5c\u5230\u65e5\u843d\uff0c\u9762\u4e34\u4e25\u5389\u60e9\u7f5a\uff0c\u51e0\u4e4e\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229",
            },
            {
              en: "The plantation system had ended by the 1700s",
              zh: "\u79cd\u690d\u56ed\u5236\u5ea6\u5728 1700 \u5e74\u4ee3\u5c31\u5df2\u7ecf\u7ed3\u675f",
            },
          ],
          correct: 2,
          explainCorrectEn:
            "The materials describe crowded huts holding up to about 10 people, beds made from straw or rags, basic food like fatty meat and cornbread, minimal clothing, and working hours from sunrise to sunset with harvest work extending into the night. Enslaved people had almost no legal rights, and punishment was used to maintain control.",
          explainCorrectZh:
            "\u6750\u6599\u63cf\u8ff0\u4e86\u5bb9\u7eb3\u7ea6 10 \u4eba\u7684\u62e5\u6324\u5c0f\u5c4b\u3001\u7a3b\u8349\u6216\u7834\u5e03\u5236\u6210\u7684\u5e8a\u3001\u80a5\u8089\u548c\u7389\u7c73\u9762\u5305\u7b49\u57fa\u672c\u98df\u7269\u3001\u6781\u5c11\u7684\u8863\u670d\uff0c\u4ee5\u53ca\u4ece\u65e5\u51fa\u5230\u65e5\u843d\u7684\u5de5\u4f5c\u65f6\u95f4\uff0c\u6536\u83b7\u5b63\u8282\u5de5\u4f5c\u5ef6\u4f38\u5230\u665a\u4e0a\u3002\u88ab\u5974\u5f79\u7684\u4eba\u51e0\u4e4e\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\uff0c\u60e9\u7f5a\u88ab\u7528\u6765\u7ef4\u6301\u63a7\u5236\u3002",
          explainWrongEn:
            "The correct answer is C. The source materials clearly describe harsh living conditions: overcrowded huts, straw beds, poor food, rough clothing, sunrise-to-sunset labour, and severe punishment. Enslaved people had almost no legal rights. However, they still preserved their culture through music, stories, language, and religion \u2014 showing extraordinary resilience.",
          explainWrongZh:
            "\u6b63\u786e\u7b54\u6848\u662fC\u3002\u6e90\u6750\u6599\u6e05\u695a\u5730\u63cf\u8ff0\u4e86\u6076\u52a3\u7684\u751f\u6d3b\u6761\u4ef6\uff1a\u62e5\u6324\u7684\u5c0f\u5c4b\u3001\u7a3b\u8349\u5e8a\u3001\u5dee\u52a3\u7684\u98df\u7269\u3001\u7c97\u7cd9\u7684\u8863\u670d\u3001\u4ece\u65e5\u51fa\u5230\u65e5\u843d\u7684\u52b3\u52a8\u548c\u4e25\u5389\u7684\u60e9\u7f5a\u3002\u88ab\u5974\u5f79\u7684\u4eba\u51e0\u4e4e\u6ca1\u6709\u6cd5\u5f8b\u6743\u5229\u3002\u7136\u800c\uff0c\u4ed6\u4eec\u4ecd\u7136\u901a\u8fc7\u97f3\u4e50\u3001\u6545\u4e8b\u3001\u8bed\u8a00\u548c\u5b97\u6559\u4fdd\u5b58\u4e86\u4ed6\u4eec\u7684\u6587\u5316\u2014\u2014\u5c55\u73b0\u4e86\u975e\u51e1\u7684\u97e7\u6027\u3002",
        },
      ],
    },
  ],
};
