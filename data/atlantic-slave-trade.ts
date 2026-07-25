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
          source: "Wikimedia Commons",
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
          caption: "Coastal slave fort in West Africa \u2014 where captives were held before the voyage",
          captionZh: "西非海岸奴隶堡垒\u2014\u2014俘虏在航行前被关押的地方",
          source: "Wikimedia Commons",
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
