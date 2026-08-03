import { Topic } from "./types";

export const weatherClimate: Topic = {
  slug: "weather-climate",
  name: "Why Do Different Places Have Different Weather Patterns?",
  nameZh: "\u4e3a\u4ec0\u4e48\u4e0d\u540c\u5730\u65b9\u7684\u5929\u6c14\u6a21\u5f0f\u5404\u4e0d\u76f8\u540c\uff1f",
  subject: "Geography",
  subjectZh: "\u5730\u7406",
  year: "Year 8",
  lessons: [

    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "What is the difference between weather and climate?",
      titleZh: "\u5929\u6c14\u548c\u6c14\u5019\u6709\u4ec0\u4e48\u533a\u522b\uff1f",
      subtitle: "Weather changes day to day \u2014 climate is the long-term pattern. Both matter for understanding our world.",
      subtitleZh: "\u5929\u6c14\u6bcf\u5929\u90fd\u5728\u53d8\u5316\u2014\u2014\u6c14\u5019\u662f\u957f\u671f\u89c4\u5f8b\u3002\u4e8c\u8005\u5bf9\u4e8e\u7406\u89e3\u6211\u4eec\u7684\u4e16\u754c\u540c\u6837\u91cd\u8981\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain how weather and climate are different.", zh: "\u6211\u80fd\u89e3\u91ca\u5929\u6c14\u548c\u6c14\u5019\u7684\u533a\u522b\u3002" },
            { en: "I can explain why it is important to understand weather and climate.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u7406\u89e3\u5929\u6c14\u548c\u6c14\u5019\u5f88\u91cd\u8981\u3002" },
            { en: "I can identify ways in which weather and climate data are collected.", zh: "\u6211\u80fd\u8bc6\u522b\u6536\u96c6\u5929\u6c14\u548c\u6c14\u5019\u6570\u636e\u7684\u65b9\u6cd5\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Weather is the day-to-day description of atmospheric conditions. It includes temperature, rainfall, wind speed, and cloud cover on any given day. Climate is the average long-term conditions of the atmosphere, measured over a long period \u2014 typically 30 years. While weather tells you what to wear today, climate tells you what to expect in a region across seasons and years.", zh: "\u5929\u6c14\u662f\u5bf9\u5927\u6c14\u72b6\u6001\u7684\u6bcf\u65e5\u63cf\u8ff0\u3002\u5b83\u5305\u62ec\u67d0\u4e00\u5929\u7684\u6c14\u6e29\u3001\u964d\u96e8\u91cf\u3001\u98ce\u901f\u548c\u4e91\u91cf\u3002\u6c14\u5019\u662f\u5927\u6c14\u7684\u957f\u671f\u5e73\u5747\u72b6\u51b5\uff0c\u901a\u5e38\u8861\u91cf\u5468\u671f\u4e3a30\u5e74\u3002\u5929\u6c14\u544a\u8bc9\u4f60\u4eca\u5929\u7a7f\u4ec0\u4e48\uff0c\u6c14\u5019\u5219\u544a\u8bc9\u4f60\u4e00\u4e2a\u5730\u533a\u5168\u5e74\u7684\u9884\u671f\u72b6\u51b5\u3002" },
            { type: "highlight", en: "Why understanding weather and climate matters: global warming is changing long-term climate patterns; weather data provides evidence of change over time; climate knowledge helps forecast extreme weather events such as hurricanes, droughts, and floods. Governments, farmers, and city planners all rely on climate data.", zh: "\u4e3a\u4ec0\u4e48\u7406\u89e3\u5929\u6c14\u548c\u6c14\u5019\u5f88\u91cd\u8981\uff1a\u5168\u7403\u53d8\u6696\u6b63\u5728\u6539\u53d8\u957f\u671f\u6c14\u5019\u683c\u5c40\uff1b\u5929\u6c14\u6570\u636e\u4e3a\u968f\u65f6\u95f4\u53d1\u751f\u7684\u53d8\u5316\u63d0\u4f9b\u8bc1\u636e\uff1b\u6c14\u5019\u77e5\u8bc6\u6709\u52a9\u4e8e\u9884\u6d4b\u98d9\u98ce\u3001\u5e72\u65f1\u548c\u6d2a\u6db3\u7b49\u6781\u7aef\u5929\u6c14\u4e8b\u4ef6\u3002\u5404\u56fd\u653f\u5e9c\u3001\u519c\u6c11\u548c\u57ce\u5e02\u89c4\u5212\u8005\u90fd\u4f9d\u8d56\u6c14\u5019\u6570\u636e\u3002" },
            { type: "text", en: "Geographers collect weather and climate data using several instruments. A barometer measures air pressure. An anemometer measures wind speed. A thermometer or sensor measures temperature and humidity. Rain gauges record precipitation. Comparing data collected over many years helps identify climate patterns and detect anomalies \u2014 readings that do not fit the general trend.", zh: "\u5730\u7406\u5b66\u5bb6\u4f7f\u7528\u591a\u79cd\u4ed8\u5668\u6536\u96c6\u5929\u6c14\u548c\u6c14\u5019\u6570\u636e\u3002\u6c14\u538b\u8ba1\u6d4b\u91cf\u5927\u6c14\u538b\u529b\u3002\u98ce\u901f\u8ba1\u6d4b\u91cf\u98ce\u901f\u3002\u6e29\u5ea6\u8ba1\u6216\u4f20\u611f\u5668\u6d4b\u91cf\u6c14\u6e29\u548c\u6e7f\u5ea6\u3002\u96e8\u91cf\u8ba1\u8bb0\u5f55\u964d\u6c34\u91cf\u3002\u5c06\u591a\u5e74\u6536\u96c6\u7684\u6570\u636e\u8fdb\u884c\u6bd4\u8f83\uff0c\u6709\u52a9\u4e8e\u8bc6\u522b\u6c14\u5019\u89c4\u5f8b\u5e76\u53d1\u73b0\u5f02\u5e38\u503c\u2014\u2014\u5373\u4e0d\u7b26\u5408\u603b\u4f53\u8d8b\u52bf\u7684\u8bfb\u6570\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Weather", zh: "\u5929\u6c14", defEn: "The day-to-day description of atmospheric conditions such as temperature, rainfall, and wind.", defZh: "\u5bf9\u5927\u6c14\u72b6\u6001\uff08\u5982\u6c14\u6e29\u3001\u964d\u96e8\u548c\u98ce\u529b\uff09\u7684\u6bcf\u65e5\u63cf\u8ff0\u3002" },
            { en: "Climate", zh: "\u6c14\u5019", defEn: "The average long-term atmospheric conditions of a place, measured over 30 years.", defZh: "\u4e00\u4e2a\u5730\u65b9\u7684\u957f\u671f\u5e73\u5747\u5927\u6c14\u72b6\u51b5\uff0c\u5468\u671f\u8bad\u91cf\u4e3a30\u5e74\u3002" },
            { en: "Barometer", zh: "\u6c14\u538b\u8ba1", defEn: "An instrument used to measure atmospheric (air) pressure.", defZh: "\u7528\u4e8e\u6d4b\u91cf\u5927\u6c14\u538b\u529b\u7684\u4ed4\u5668\u3002" },
            { en: "Anomaly", zh: "\u5f02\u5e38\u503c", defEn: "A data reading or pattern that does not fit the general trend.", defZh: "\u4e0d\u7b26\u5408\u603b\u4f53\u8d8b\u52bf\u7684\u6570\u636e\u8bfb\u6570\u6216\u89c4\u5f8b\u3002" },
          ],
        },
        { type: "image", caption: "An anemometer \u2014 one of the key instruments used to measure weather, recording wind speed at a weather station.", captionZh: "\u98ce\u901f\u8ba1\u2014\u2014\u6d4b\u91cf\u5929\u6c14\u7684\u5173\u952e\u4ed4\u5668\u4e4b\u4e00\uff0c\u7528\u4e8e\u8bb0\u5f55\u6c14\u8c61\u7ad9\u7684\u98ce\u901f\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anemometer.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Geographical Definitions", labelZh: "\u91cd\u8981\u5730\u7406\u5b66\u5b9a\u4e49", en: "Weather is the day-to-day description of atmospheric conditions. Climate is the average long-term conditions of the atmosphere over 30 years. Understanding both is essential for responding to global warming and predicting extreme events.", zh: "\u5929\u6c14\u662f\u5bf9\u5927\u6c14\u72b6\u6001\u7684\u6bcf\u65e5\u63cf\u8ff0\u3002\u6c14\u5019\u662f30\u5e74\u5185\u5927\u6c14\u7684\u957f\u671f\u5e73\u5747\u72b6\u51b5\u3002\u7406\u89e3\u8fd9\u4e24\u8005\u662f\u5e94\u5bf9\u5168\u7403\u53d8\u6696\u548c\u9884\u6d4b\u6781\u7aef\u4e8b\u4ef6\u7684\u5fc5\u8981\u524d\u63d0\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain the difference between weather and climate in your own words.", qZh: "\u7528\u81ea\u5df1\u7684\u8bdd\u89e3\u91ca\u5929\u6c14\u548c\u6c14\u5019\u7684\u533a\u522b\u3002", aEn: "Weather is what the atmosphere is doing on a specific day \u2014 for example, whether it is raining or sunny. Climate is the average of weather conditions measured over a long period, typically 30 years. Weather changes constantly; climate changes slowly over decades.", aZh: "\u5929\u6c14\u662f\u5927\u6c14\u5728\u67d0\u4e00\u5929\u7684\u5177\u4f53\u72b6\u6001\u2014\u2014\u4f8b\u5982\u662f\u5426\u4e0b\u96e8\u6216\u662f\u5426\u6674\u5929\u3002\u6c14\u5019\u662f\u957f\u671f\uff08\u901a\u5e38\u4e3a30\u5e74\uff09\u5929\u6c14\u72b6\u51b5\u7684\u5e73\u5747\u503c\u3002\u5929\u6c14\u65f6\u523b\u5728\u53d8\u5316\uff0c\u6c14\u5019\u5219\u5728\u6570\u5341\u5e74\u95f4\u7f13\u6162\u6f14\u53d8\u3002" },
            { qEn: "Give two reasons why it is important for governments and scientists to collect long-term climate data.", qZh: "\u5404\u5217\u4e00\u4e2a\u539f\u56e0\uff0c\u8bf4\u660e\u4e3a\u4ec0\u4e48\u5404\u56fd\u653f\u5e9c\u548c\u79d1\u5b66\u5bb6\u6536\u96c6\u957f\u671f\u6c14\u5019\u6570\u636e\u5f88\u91cd\u8981\u3002", aEn: "First, long-term data helps scientists detect whether the climate is changing over time, for example whether global temperatures are rising due to global warming. Second, it helps governments and planners prepare for extreme weather events such as hurricanes and droughts by knowing which areas are at risk.", aZh: "\u7b2c\u4e00\uff0c\u957f\u671f\u6570\u636e\u5e2e\u52a9\u79d1\u5b66\u5bb6\u68c0\u6d4b\u6c14\u5019\u662f\u5426\u968f\u65f6\u95f4\u53d1\u751f\u53d8\u5316\uff0c\u4f8b\u5982\u5168\u7403\u6c14\u6e29\u662f\u5426\u56e0\u5168\u7403\u53d8\u6696\u800c\u4e0a\u5347\u3002\u7b2c\u4e8c\uff0c\u5b83\u5e2e\u52a9\u653f\u5e9c\u548c\u89c4\u5212\u8005\u901a\u8fc7\u4e86\u89e3\u54ea\u4e9b\u5730\u533a\u5b58\u5728\u98d9\u98ce\u3001\u5e72\u65f1\u7b49\u6781\u7aef\u5929\u6c14\u98ce\u9669\uff0c\u63d0\u524d\u505a\u597d\u5e94\u5bf9\u51c6\u5907\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which instrument is used to measure wind speed?",
          qZh: "\u54ea\u79cd\u4ed4\u5668\u7528\u4e8e\u6d4b\u91cf\u98ce\u901f\uff1f",
          opts: [
            { en: "Barometer", zh: "\u6c14\u538b\u8ba1" },
            { en: "Thermometer", zh: "\u6e29\u5ea6\u8ba1" },
            { en: "Anemometer", zh: "\u98ce\u901f\u8ba1" },
            { en: "Rain gauge", zh: "\u96e8\u91cf\u8ba1" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! An anemometer measures wind speed. It typically has rotating cups that spin faster as the wind gets stronger.",
          explainCorrectZh: "\u6b63\u786e\uff01\u98ce\u901f\u8ba1\u7528\u4e8e\u6d4b\u91cf\u98ce\u901f\u3002\u5b83\u901a\u5e38\u6709\u65cb\u8f6c\u6760\u9500\uff0c\u98ce\u5047\u8d8a\u5927\u65cb\u8f6c\u8d8a\u5feb\u3002",
          explainWrongEn: "Not quite. A barometer measures air pressure; a thermometer measures temperature; a rain gauge measures precipitation. The correct answer is an anemometer.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6c14\u538b\u8ba1\u6d4b\u91cf\u6c14\u538b\uff0c\u6e29\u5ea6\u8ba1\u6d4b\u91cf\u6c14\u6e29\uff0c\u96e8\u91cf\u8ba1\u6d4b\u91cf\u964d\u6c34\u91cf\u3002\u6b63\u786e\u7b54\u6848\u662f\u98ce\u901f\u8ba1\u3002",
        },
      ],
    },

    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "Why is Thailand a hot country?",
      titleZh: "\u6cf0\u56fd\u4e3a\u4ec0\u4e48\u662f\u4e00\u4e2a\u70ed\u5e26\u56fd\u5bb6\uff1f",
      subtitle: "Thailand\u2019s position near the equator means it receives intense solar radiation throughout the year \u2014 but climate is not the same everywhere.",
      subtitleZh: "\u6cf0\u56fd\u9760\u8fd1\u8d64\u9053\u7684\u4f4d\u7f6e\u610f\u5473\u7740\u5b83\u5168\u5e74\u63a5\u53d7\u5f3a\u70c8\u7684\u592a\u9633\u8f90\u5c04\u2014\u2014\u4f46\u5e76\u975e\u5404\u5730\u6c14\u5019\u5b8c\u5168\u76f8\u540c\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe Thailand\u2019s climate using temperature data.", zh: "\u6211\u80fd\u7528\u6c14\u6e29\u6570\u636e\u63cf\u8ff0\u6cf0\u56fd\u7684\u6c14\u5019\u3002" },
            { en: "I can explain why countries near the equator are generally hotter than countries near the poles.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u9760\u8fd1\u8d62\u9053\u7684\u56fd\u5bb6\u901a\u5e38\u6bd4\u9760\u8fd1\u4e24\u6781\u7684\u56fd\u5bb6\u66f4\u70ed\u3002" },
            { en: "I can identify an anomaly in temperature data and suggest a reason for it.", zh: "\u6211\u80fd\u8bc6\u522b\u6c14\u6e29\u6570\u636e\u4e2d\u7684\u5f02\u5e38\u503c\u5e76\u5c1d\u8bd5\u89e3\u91ca\u5176\u539f\u56e0\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Thailand is located in South-East Asia, close to the equator. The average daily temperature in Bangkok varies from roughly 26\u00b0C to 30\u00b0C across the year. This consistently high temperature is explained by Thailand\u2019s latitude: countries closer to the equator receive more concentrated solar energy.", zh: "\u6cf0\u56fd\u4f4d\u4e8e\u4e1c\u5357\u4e9a\uff0c\u9760\u8fd1\u8d62\u9053\u3002\u66fc\u8c37\u5168\u5e74\u65e5\u5747\u6c14\u6e29\u5927\u7ea626\u00b0C\u81f330\u00b0C\u3002\u8fd9\u79cd\u59cb\u7ec8\u5982\u4e00\u7684\u9ad8\u6e29\u7531\u6cf0\u56fd\u7684\u7eac\u5ea6\u4f4d\u7f6e\u5186\u6790\uff1a\u8d8a\u9760\u8fd1\u8d62\u9053\u7684\u56fd\u5bb6\u83b7\u5f97\u7684\u592a\u9633\u8f90\u5c04\u8d8a\u5bc6\u96c6\u3002" },
            { type: "highlight", en: "Why latitude affects temperature: the Sun releases the same amount of radiation in all directions. Near the equator, solar energy hits a smaller surface area, so it is more concentrated and intense. Near the poles, the same amount of energy is spread over a much larger area because of the angle of the Earth, so it is less intense. This is called differential heating.", zh: "\u7eac\u5ea6\u4e3a\u4ec0\u4e48\u5f71\u54cd\u6c14\u6e29\uff1a\u592a\u9633\u5411\u5404\u4e2a\u65b9\u5411\u91ca\u653e\u7b49\u91cf\u8f90\u5c04\u3002\u5728\u8d62\u9053\u9644\u8fd1\uff0c\u592a\u9633\u80fd\u91cf\u7167\u5c04\u7684\u5730\u8868\u9762\u79ef\u8f83\u5c0f\uff0c\u56e0\u6b64\u8f83\u4e3a\u96c6\u4e2d\u548c\u5f3a\u70c8\u3002\u5728\u4e24\u6781\u9644\u8fd1\uff0c\u7531\u4e8e\u5730\u7403\u60f3\u5012\u89d2\u5ea6\uff0c\u540c\u91cf\u7684\u80fd\u91cf\u5206\u5e03\u5728\u66f4\u5927\u7684\u9762\u79ef\u4e0a\uff0c\u56e0\u6b64\u5f3a\u5ea6\u8f83\u5f31\u3002\u8fd9\u79f0\u4e3a\u5dee\u5f02\u52a0\u70ed\u3002" },
            { type: "text", en: "Climate data also contains anomalies \u2014 readings that do not fit the general pattern. For example, temperatures south of Bangkok may be slightly lower than expected, due to coastal winds or local geography. Geographers identify these anomalies and investigate why they occur, rather than ignoring data that does not fit.", zh: "\u6c14\u5019\u6570\u636e\u4e5f\u5305\u542b\u5f02\u5e38\u503c\u2014\u2014\u4e0d\u7b26\u5408\u603b\u4f53\u89c4\u5f8b\u7684\u8bfb\u6570\u3002\u4f8b\u5982\uff0c\u66fc\u8c37\u4ee5\u5357\u5730\u533a\u7684\u6c14\u6e29\u53ef\u80fd\u7565\u4f4e\u4e8e\u9884\u671f\uff0c\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\u6cbf\u6d77\u98ce\u6216\u5f53\u5730\u5730\u5f62\u7684\u5f71\u54cd\u3002\u5730\u7406\u5b66\u5bb6\u4e0d\u4f1a\u5ffd\u89c6\u4e0d\u7b26\u5408\u89c4\u5f8b\u7684\u6570\u636e\uff0c\u800c\u662f\u4e3b\u52a8\u8bc6\u522b\u8fd9\u4e9b\u5f02\u5e38\u503c\u5e76\u8c03\u67e5\u5176\u6210\u56e0\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Latitude", zh: "\u7eac\u5ea6", defEn: "The distance north or south of the equator, measured in degrees.", defZh: "\u8d62\u9053\u4ee5\u5317\u6216\u4ee5\u5357\u7684\u8ddd\u79bb\uff0c\u4ee5\u5ea6\u6570\u8868\u793a\u3002" },
            { en: "Differential heating", zh: "\u5dee\u5f02\u52a0\u70ed", defEn: "The process by which the equator receives more concentrated solar energy than the poles, due to the angle at which sunlight strikes the Earth.", defZh: "\u8d62\u9053\u6bd4\u4e24\u6781\u83b7\u5f97\u66f4\u5bc6\u96c6\u7684\u592a\u9633\u80fd\u91cf\u7684\u8fc7\u7a0b\uff0c\u8fd9\u662f\u7531\u9633\u5149\u5c04\u5165\u5730\u7403\u7684\u89d2\u5ea6\u51b3\u5b9a\u7684\u3002" },
            { en: "Solar radiation", zh: "\u592a\u9633\u8f90\u5c04", defEn: "Energy from the Sun that travels to Earth as light and heat.", defZh: "\u592a\u9633\u4ee5\u5149\u548c\u70ed\u7684\u5f62\u5f0f\u4f20\u8fbe\u5230\u5730\u7403\u7684\u80fd\u91cf\u3002" },
            { en: "Climate zone", zh: "\u6c14\u5019\u5e26", defEn: "A large area with similar average temperature and precipitation patterns.", defZh: "\u5177\u6709\u76f8\u4f3c\u5e73\u5747\u6c14\u6e29\u548c\u964d\u6c34\u89c4\u5f8b\u7684\u5927\u578b\u5730\u5e26\u3002" },
          ],
        },
        { type: "image", caption: "A fierce rainstorm over Bangkok, Thailand \u2014 intense solar heating near the equator drives the convectional rainfall that shapes tropical climates.", captionZh: "\u6cf0\u56fd\u66fc\u8c37\u7684\u731b\u70c8\u66b4\u96e8\u2014\u2014\u8d62\u9053\u9644\u8fd1\u5f3a\u70c8\u7684\u592a\u9633\u52a0\u70ed\u9a71\u52a8\u5bf9\u6d41\u964d\u96e8\uff0c\u5851\u9020\u4e86\u70ed\u5e26\u6c14\u5019\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fierce_Rain_Storm_over_Bangkok_-_panoramio.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Climate Data: Bangkok", labelZh: "\u6c14\u5019\u6570\u636e\uff1a\u66fc\u8c37", en: "Bangkok\u2019s average daily temperature ranges from roughly 26\u00b0C to 30\u00b0C throughout the year. Temperatures are consistently high because Bangkok is near the equator, where solar radiation strikes the Earth\u2019s surface at a more direct angle.", zh: "\u66fc\u8c37\u5168\u5e74\u65e5\u5747\u6c14\u6e29\u5927\u7ea626\u00b0C\u81f330\u00b0C\u3002\u6c14\u6e29\u59cb\u7ec8\u8f83\u9ad8\uff0c\u56e0\u4e3a\u66fc\u8c37\u9760\u8fd1\u8d62\u9053\uff0c\u8be5\u5730\u592a\u9633\u8f90\u5c04\u4ee5\u66f4\u76f4\u63a5\u7684\u89d2\u5ea6\u5c04\u5165\u5730\u8868\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Use the idea of differential heating to explain why Bangkok is hotter than London.", qZh: "\u7528\u5dee\u5f02\u52a0\u70ed\u7684\u6982\u5ff5\u89e3\u91ca\u4e3a\u4ec0\u4e48\u66fc\u8c37\u6bd4\u4f26\u6566\u66f4\u70ed\u3002", aEn: "Bangkok is closer to the equator than London. Near the equator, solar energy strikes the Earth at a more direct angle and is spread over a smaller surface area, making it more intense. Near London, at a higher latitude, the same amount of solar energy is spread over a much larger area because of the Earth\u2019s curvature, so it is less intense and temperatures are lower.", aZh: "\u66fc\u8c37\u6bd4\u4f26\u6566\u66f4\u9760\u8fd1\u8d62\u9053\u3002\u5728\u8d62\u9053\u9644\u8fd1\uff0c\u592a\u9633\u80fd\u91cf\u4ee5\u66f4\u76f4\u63a5\u7684\u89d2\u5ea6\u5c04\u5411\u5730\u8868\uff0c\u5206\u5e03\u5728\u8f83\u5c0f\u7684\u9762\u79ef\u4e0a\uff0c\u56e0\u6b64\u5f3a\u5ea6\u66f4\u5f3a\u3002\u5728\u9ad8\u7eac\u5ea6\u7684\u4f26\u6566\u9644\u8fd1\uff0c\u7531\u4e8e\u5730\u7403\u66f2\u7387\uff0c\u540c\u91cf\u7684\u592a\u9633\u80fd\u91cf\u5206\u5e03\u5728\u5927\u5f97\u591a\u7684\u9762\u79ef\u4e0a\uff0c\u56e0\u6b64\u5f3a\u5ea6\u8f83\u5f31\uff0c\u6c14\u6e29\u4e5f\u8f83\u4f4e\u3002" },
            { qEn: "What is an anomaly in climate data? Give an example from Thailand\u2019s temperature pattern.", qZh: "\u6c14\u5019\u6570\u636e\u4e2d\u7684\u5f02\u5e38\u503c\u662f\u4ec0\u4e48\uff1f\u4ece\u6cf0\u56fd\u7684\u6c14\u6e29\u89c4\u5f8b\u4e2d\u4e3e\u4f8b\u8bf4\u660e\u3002", aEn: "An anomaly is a data reading that does not fit the general pattern. In Thailand, the general pattern is that temperatures are high because of low latitude. An anomaly would be an area south of Bangkok where temperatures are slightly lower than expected, perhaps due to coastal winds or local topography.", aZh: "\u5f02\u5e38\u503c\u662f\u4e0d\u7b26\u5408\u603b\u4f53\u89c4\u5f8b\u7684\u6570\u636e\u8bfb\u6570\u3002\u5728\u6cf0\u56fd\uff0c\u603b\u4f53\u89c4\u5f8b\u662f\u56e0\u4f4e\u7eac\u5ea6\u800c\u6c14\u6e29\u8f83\u9ad8\u3002\u5f02\u5e38\u503c\u5c31\u662f\u66f2\u8c37\u4ee5\u5357\u5730\u533a\u6c14\u6e29\u7565\u4f4e\u4e8e\u9884\u671f\u7684\u5730\u65b9\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u6cbf\u6d77\u98ce\u6216\u5f53\u5730\u5730\u5f62\u7684\u5f71\u54cd\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Why is Bangkok generally hotter than cities at higher latitudes?",
          qZh: "\u4e3a\u4ec0\u4e48\u66fc\u8c37\u901a\u5e38\u6bd4\u9ad8\u7eac\u5ea6\u57ce\u5e02\u66f4\u70ed\uff1f",
          opts: [
            { en: "Bangkok has more factories producing heat", zh: "\u66fc\u8c37\u5de5\u5382\u8f83\u591a\uff0c\u4ea7\u751f\u70ed\u91cf\u8f83\u5927" },
            { en: "Bangkok is closer to the equator, so solar energy is more concentrated", zh: "\u66fc\u8c37\u66f4\u9760\u8fd1\u8d62\u9053\uff0c\u592a\u9633\u80fd\u91cf\u66f4\u5bc6\u96c6" },
            { en: "Bangkok receives more rainfall which warms the land", zh: "\u66fc\u8c37\u964d\u96e8\u66f4\u591a\uff0c\u4f7f\u5730\u9762\u52a0\u70ed" },
            { en: "Bangkok is at a higher altitude than other cities", zh: "\u66fc\u8c37\u6d77\u62d4\u9ad8\u4e8e\u5176\u4ed6\u57ce\u5e02" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Bangkok is near the equator. At lower latitudes, solar energy strikes the Earth at a more direct angle and is concentrated over a smaller area, making temperatures higher.",
          explainCorrectZh: "\u6b63\u786e\uff01\u66fc\u8c37\u9760\u8fd1\u8d62\u9053\u3002\u5728\u8f83\u4f4e\u7eac\u5ea6\uff0c\u592a\u9633\u80fd\u91cf\u4ee5\u66f4\u76f4\u63a5\u7684\u89d2\u5ea6\u5c04\u5411\u5730\u8868\u5e76\u96c6\u4e2d\u5728\u8f83\u5c0f\u7684\u9762\u79ef\u4e0a\uff0c\u4f7f\u6c14\u6e29\u66f4\u9ad8\u3002",
          explainWrongEn: "Not quite. Factories, rainfall, and altitude do not explain Bangkok\u2019s consistently high temperatures. The key reason is its low latitude near the equator, which means more concentrated solar energy.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5de5\u5382\u3001\u964d\u96e8\u548c\u6d77\u62d4\u5e76\u4e0d\u80fd\u89e3\u91ca\u66f2\u8c37\u6301\u7eed\u9ad8\u6e29\u7684\u539f\u56e0\u3002\u5173\u952e\u539f\u56e0\u5728\u4e8e\u5b83\u9760\u8fd1\u8d62\u9053\u7684\u4f4e\u7eac\u5ea6\uff0c\u610f\u5473\u7740\u65e0\u592a\u9633\u80fd\u91cf\u66f4\u5bc6\u96c6\u3002",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Why does Thailand have a wet and dry season?",
      titleZh: "\u6cf0\u56fd\u4e3a\u4ec0\u4e48\u6709\u96e8\u5b63\u548c\u65f1\u5b63\uff1f",
      subtitle: "Thailand\u2019s rainfall is not spread evenly across the year \u2014 convectional rainfall and air masses explain the pattern.",
      subtitleZh: "\u6cf0\u56fd\u7684\u964d\u96e8\u5e76\u975e\u5747\u5300\u5206\u5e03\u5728\u5168\u5e74\u2014\u2014\u5bf9\u6d41\u964d\u96e8\u548c\u6c14\u56e2\u89e3\u91ca\u4e86\u8fd9\u4e00\u89c4\u5f8b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe Thailand\u2019s wet and dry seasons using climate data.", zh: "\u6211\u80fd\u7528\u6c14\u5019\u6570\u636e\u63cf\u8ff0\u6cf0\u56fd\u7684\u96e8\u5b63\u548c\u65f1\u5b63\u3002" },
            { en: "I can explain the process of convectional rainfall step by step.", zh: "\u6211\u80fd\u9010\u6b65\u89e3\u91ca\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\u3002" },
            { en: "I can explain how air masses influence Thailand\u2019s dry season.", zh: "\u6211\u80fd\u89e3\u91ca\u6c14\u56e2\u5982\u4f55\u5f71\u54cd\u6cf0\u56fd\u7684\u65f1\u5b63\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Bangkok\u2019s climate graph shows two distinct seasons: a rainy season and a dry season. The rainy season typically runs from May to October, while the dry season runs from November to April. This seasonal pattern is explained by two processes: convectional rainfall and the movement of air masses.", zh: "\u66f2\u8c37\u7684\u6c14\u5019\u56fe\u663e\u793a\u51fa\u4e24\u4e2a\u660e\u663e\u7684\u5b63\u8282\uff1a\u96e8\u5b63\u548c\u65f1\u5b63\u3002\u96e8\u5b63\u901a\u5e38\u81ea5\u6708\u5ef6\u7eed\u521310\u6708\uff0c\u65f1\u5b63\u81ea11\u6708\u5ef6\u7eed\u52304\u6708\u3002\u8fd9\u79cd\u5b63\u8282\u6027\u89c4\u5f8b\u7531\u4e24\u4e2a\u8fc7\u7a0b\u89e3\u91ca\uff1a\u5bf9\u6d41\u964d\u96e8\u548c\u6c14\u56e2\u7684\u79fb\u52a8\u3002" },
            { type: "highlight", en: "How convectional rainfall forms: (1) The Sun heats the Earth\u2019s surface. (2) The ground heats the air above it, making it less dense. (3) Warm, less dense air rises, creating a low pressure system. (4) As the air rises it cools. (5) Water vapour in the cooling air condenses. (6) Condensation forms cumulonimbus clouds and heavy rain falls.", zh: "\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\uff1a\uff081\uff09\u592a\u9633\u52a0\u70ed\u5730\u8868\u3002\uff082\uff09\u5730\u9762\u52a0\u70ed\u5176\u4e0a\u65b9\u7684\u7a7a\u6c14\uff0c\u4f7f\u7a7a\u6c14\u5bc6\u5ea6\u964d\u4f4e\u3002\uff083\uff09\u6e29\u6696\u3001\u5bc6\u5ea6\u8f83\u5c0f\u7684\u7a7a\u6c14\u4e0a\u5347\uff0c\u5f62\u6210\u4f4e\u6c14\u538b\u7cfb\u7edf\u3002\uff084\uff09\u7a7a\u6c14\u4e0a\u5347\u540e\u51b7\u5374\u3002\uff085\uff09\u51b7\u5374\u7a7a\u6c14\u4e2d\u7684\u6c34\u84b8\u6c14\u51dd\u7ed3\u3002\uff086\uff09\u51dd\u7ed3\u5f62\u6210\u79ef\u96e8\u4e91\uff0c\u964d\u4e0b\u5927\u96e8\u3002" },
            { type: "text", en: "During the dry season, continental air masses bring dry air from inland land areas. Continental air masses form over land and contain little moisture, so they do not produce significant rainfall. When these air masses dominate Thailand, precipitation drops sharply. This explains why Bangkok has a clear dry season from November to April.", zh: "\u65f1\u5b63\u671f\u95f4\uff0c\u5927\u9646\u6c14\u56e2\u4ece\u5185\u9646\u5e26\u6765\u5e72\u71e5\u7684\u7a7a\u6c14\u3002\u5927\u9646\u6c14\u56e2\u5728\u9646\u5730\u4e0a\u5f62\u6210\uff0c\u6c34\u5206\u542b\u91cf\u5f88\u5c11\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4ea7\u751f\u660e\u663e\u964d\u96e8\u3002\u5f53\u8fd9\u4e9b\u6c14\u56e2\u63a7\u5236\u6cf0\u56fd\u65f6\uff0c\u964d\u6c34\u91cf\u5c31\u4f1a\u6025\u5267\u4e0b\u964d\u3002\u8fd9\u89e3\u91ca\u4e86\u66f2\u8c37\u4e3a\u4ec0\u4e4811\u6708\u81f34\u6708\u4f1a\u51fa\u73b0\u660e\u663e\u65f1\u5b63\u7684\u539f\u56e0\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Convectional rainfall", zh: "\u5bf9\u6d41\u964d\u96e8", defEn: "Rainfall formed when the sun heats the ground, causing air to rise, cool, and condense into clouds and rain.", defZh: "\u592a\u9633\u52a0\u70ed\u5730\u8868\uff0c\u5bfc\u81f4\u7a7a\u6c14\u4e0a\u5347\u3001\u51b7\u5374\u5e76\u51dd\u7ed3\u6210\u4e91\u548c\u96e8\u6c34\u800c\u5f62\u6210\u7684\u964d\u96e8\u3002" },
            { en: "Air mass", zh: "\u6c14\u56e2", defEn: "A large body of air with similar temperature and humidity throughout, named after where it forms.", defZh: "\u4e00\u5927\u56e2\u6e29\u5ea6\u548c\u6e7f\u5ea6\u5747\u5300\u7684\u7a7a\u6c14\uff0c\u6839\u636e\u5176\u5f62\u6210\u5730\u70b9\u547d\u540d\u3002" },
            { en: "Low pressure", zh: "\u4f4e\u6c14\u538b", defEn: "An area where air pressure is lower than surrounding areas, often associated with rising air and rainfall.", defZh: "\u6c14\u538b\u4f4e\u4e8e\u5468\u56f4\u5730\u533a\u7684\u5730\u65b9\uff0c\u901a\u5e38\u4e0e\u4e0a\u5347\u7a7a\u6c14\u548c\u964d\u96e8\u76f8\u5173\u8054\u3002" },
            { en: "Condensation", zh: "\u51dd\u7ed3", defEn: "The process by which water vapour cools and turns into liquid water droplets, forming clouds.", defZh: "\u6c34\u84b8\u6c14\u51b7\u5374\u5e76\u8f6c\u5316\u4e3a\u5c0f\u6c34\u6ef4\u3001\u5f62\u6210\u4e91\u7684\u8fc7\u7a0b\u3002" },
          ],
        },
        { type: "image", caption: "Khao Sok tropical rainforest in southern Thailand \u2014 sustained by convectional rainfall, where intense solar heating causes daily cycles of rising air, cloud formation, and heavy rain.", captionZh: "\u6cf0\u56fd\u5357\u90e8\u8301\u7d22\u70ed\u5e26\u96e8\u6797\u2014\u2014\u7531\u5bf9\u6d41\u964d\u96e8\u7ef4\u6301\uff0c\u5f3a\u70c8\u7684\u592a\u9633\u52a0\u70ed\u5bfc\u81f4\u6c14\u6d41\u6bcf\u65e5\u5faa\u73af\u4e0a\u5347\u3001\u4e91\u5f62\u6210\u548c\u5927\u96e8\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Khao_Sok_primary_tropical_rainforest,_southern_Thailand.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Process: Convectional Rainfall", labelZh: "\u5173\u952e\u8fc7\u7a0b\uff1a\u5bf9\u6d41\u964d\u96e8", en: "Convectional rainfall forms when the Sun heats the ground, which heats the air above it. The less dense warm air rises, creating low pressure. As the air rises it cools, water vapour condenses, cumulonimbus clouds form, and heavy rain falls. This process drives Thailand\u2019s rainy season.", zh: "\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\u662f\uff1a\u592a\u9633\u52a0\u70ed\u5730\u9762\uff0c\u5730\u9762\u518d\u52a0\u70ed\u4e0a\u65b9\u7a7a\u6c14\u3002\u5bc6\u5ea6\u8f83\u5c0f\u7684\u6696\u6c14\u4e0a\u5347\uff0c\u5f62\u6210\u4f4e\u6c14\u538b\u3002\u7a7a\u6c14\u4e0a\u5347\u540e\u51b7\u5374\uff0c\u6c34\u84b8\u6c14\u51dd\u7ed3\uff0c\u5f62\u6210\u79ef\u96e8\u4e91\uff0c\u964d\u4e0b\u5927\u96e8\u3002\u8fd9\u4e00\u8fc7\u7a0b\u63a8\u52a8\u4e86\u6cf0\u56fd\u7684\u96e8\u5b63\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Describe the process of convectional rainfall in the correct order.", qZh: "\u6309\u6b63\u786e\u9014\u5e8f\u63cf\u8ff0\u5bf9\u6d41\u964d\u96e8\u7684\u5f62\u6210\u8fc7\u7a0b\u3002", aEn: "1. The Sun heats the Earth\u2019s surface. 2. The ground heats the air above it, making it less dense. 3. The warm, less dense air rises, creating a low pressure system. 4. As the air rises it cools. 5. Water vapour condenses as the air cools. 6. Cumulonimbus clouds form and heavy rain falls.", aZh: "1.\u592a\u9633\u52a0\u70ed\u5730\u8868\u3002\n2.\u5730\u9762\u52a0\u70ed\u4e0a\u65b9\u7a7a\u6c14\uff0c\u4f7f\u5176\u5bc6\u5ea6\u964d\u4f4e\u3002\n3.\u6696\u6696\u7684\u3001\u5bc6\u5ea6\u8f83\u5c0f\u7684\u7a7a\u6c14\u4e0a\u5347\uff0c\u5f62\u6210\u4f4e\u6c14\u538b\u7cfb\u7edf\u3002\n4.\u7a7a\u6c14\u4e0a\u5347\u540e\u51b7\u5374\u3002\n5.\u7a7a\u6c14\u51b7\u5374\u540e\u6c34\u84b8\u6c14\u51dd\u7ed3\u3002\n6.\u5f62\u6210\u79ef\u96e8\u4e91\uff0c\u964d\u4e0b\u5927\u96e8\u3002" },
            { qEn: "Why does Thailand have a dry season from November to April?", qZh: "\u6cf0\u56fd\u4e3a\u4ec0\u4e4811\u6708\u81f34\u6708\u4f1a\u6709\u65f1\u5b63\uff1f", aEn: "During this period, continental air masses move over Thailand. Continental air masses form over land and contain little moisture, so they do not produce significant rainfall. With less solar heating in the cooler months, convectional rainfall also decreases, resulting in a dry season.", aZh: "\u5728\u6b64\u671f\u95f4\uff0c\u5927\u9646\u6c14\u56e2\u5411\u6cf0\u56fd\u79fb\u52a8\u3002\u5927\u9646\u6c14\u56e2\u5728\u9646\u5730\u4e0a\u5f62\u6210\uff0c\u6c34\u5206\u542b\u91cf\u5f88\u5c11\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4ea7\u751f\u660e\u663e\u964d\u96e8\u3002\u5728\u8f83\u51f7\u7684\u6708\u4efd\uff0c\u592a\u9633\u52a0\u70ed\u51cf\u5f31\uff0c\u5bf9\u6d41\u964d\u96e8\u4e5f\u968f\u4e4b\u51cf\u5c11\uff0c\u5bfc\u81f4\u65f1\u5b63\u7684\u5f62\u6210\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "At which stage of convectional rainfall does water vapour turn into water droplets?",
          qZh: "\u5728\u5bf9\u6d41\u964d\u96e8\u7684\u54ea\u4e2a\u9636\u6bb5\uff0c\u6c34\u84b8\u6c14\u4f1a\u8f6c\u5316\u4e3a\u6c34\u6ef4\uff1f",
          opts: [
            { en: "When the Sun heats the ground", zh: "\u592a\u9633\u52a0\u70ed\u5730\u9762\u65f6" },
            { en: "When warm air rises", zh: "\u6696\u7a7a\u6c14\u4e0a\u5347\u65f6" },
            { en: "When rising air cools and condensation occurs", zh: "\u4e0a\u5347\u7a7a\u6c14\u51b7\u5374\u51dd\u7ed3\u65f6" },
            { en: "When low pressure forms at the surface", zh: "\u5730\u9762\u4f4e\u6c14\u538b\u5f62\u6210\u65f6" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! As rising air cools, its capacity to hold water vapour decreases. The water vapour condenses into water droplets, forming clouds. When enough droplets form, rain falls.",
          explainCorrectZh: "\u6b63\u786e\uff01\u7a7a\u6c14\u4e0a\u5347\u51b7\u5374\u540e\uff0c\u5176\u6301\u6c34\u84b8\u6c14\u7684\u80fd\u529b\u4e0b\u964d\u3002\u6c34\u84b8\u6c14\u51dd\u7ed3\u6210\u5c0f\u6c34\u6ef4\uff0c\u5f62\u6210\u4e91\u3002\u5f53\u8db3\u591f\u591a\u7684\u6c34\u6ef4\u5f62\u6210\u540e\uff0c\u5c31\u4f1a\u964d\u96e8\u3002",
          explainWrongEn: "Not quite. Condensation happens after the air has risen and cooled, not when the ground is heated or when low pressure forms. The correct answer is when rising air cools and condensation occurs.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u51dd\u7ed3\u53d1\u751f\u5728\u7a7a\u6c14\u4e0a\u5347\u5e76\u51b7\u5374\u4e4b\u540e\uff0c\u800c\u4e0d\u662f\u52a0\u70ed\u5730\u9762\u6216\u5f62\u6210\u4f4e\u6c14\u538b\u65f6\u3002\u6b63\u786e\u7b54\u6848\u662f\u4e0a\u5347\u7a7a\u6c14\u51b7\u5374\u51dd\u7ed3\u65f6\u3002",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "T",
      title: "Analysing weather data",
      titleZh: "\u5206\u6790\u5929\u6c14\u6570\u636e",
      subtitle: "Reading graphs, spotting trends, and identifying anomalies are essential geographical skills.",
      subtitleZh: "\u8bfb\u56fe\u3001\u53d1\u73b0\u89c4\u5f8b\u548c\u8bc6\u522b\u5f02\u5e38\u503c\u662f\u57fa\u672c\u7684\u5730\u7406\u5b66\u6280\u80fd\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can plot and read weather data on a climate graph.", zh: "\u6211\u80fd\u5728\u6c14\u5019\u56fe\u4e0a\u7ed8\u5236\u5e76\u8bfb\u53d6\u5929\u6c14\u6570\u636e\u3002" },
            { en: "I can describe trends in weather data using the TEA method.", zh: "\u6211\u80fd\u7528TEA\u6cd5\uff08\u8d8b\u52bf\u3001\u8bc1\u636e\u3001\u5f02\u5e38\uff09\u63cf\u8ff0\u5929\u6c14\u6570\u636e\u7684\u89c4\u5f8b\u3002" },
            { en: "I can identify anomalies in a data set and suggest possible explanations.", zh: "\u6211\u80fd\u8bc6\u522b\u6570\u636e\u4e2d\u7684\u5f02\u5e38\u503c\u5e76\u5c1d\u8bd5\u63d0\u51fa\u53ef\u80fd\u7684\u89e3\u91ca\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A climate graph shows both temperature and precipitation for a location across the months of the year. Temperature is usually shown as a line graph, while precipitation is shown as bar charts. Reading these graphs carefully helps geographers identify seasonal patterns, compare locations, and spot anomalies.", zh: "\u6c14\u5019\u56fe\u5c55\u793a\u4e86\u4e00\u4e2a\u5730\u70b9\u5168\u5e74\u6bcf\u4e2a\u6708\u7684\u6c14\u6e29\u548c\u964d\u6c34\u91cf\u3002\u6c14\u6e29\u901a\u5e38\u7528\u6298\u7ebf\u56fe\u8868\u793a\uff0c\u964d\u6c34\u91cf\u5219\u7528\u67f1\u72b6\u56fe\u8868\u793a\u3002\u4ed4\u7ec6\u9605\u8bfb\u8fd9\u4e9b\u56fe\u8868\u6709\u52a9\u4e8e\u5730\u7406\u5b66\u5bb6\u8bc6\u522b\u5b63\u8282\u6027\u89c4\u5f8b\u3001\u6bd4\u8f83\u5730\u70b9\u548c\u53d1\u73b0\u5f02\u5e38\u503c\u3002" },
            { type: "highlight", en: "The TEA method for describing data: Trend \u2014 what is the overall pattern? (e.g. \u2018Rainfall is generally higher from May to October\u2019). Evidence \u2014 specific data to support the trend (e.g. \u2018July has 160 mm of rainfall\u2019). Anomaly \u2014 something that does not fit the general trend (e.g. \u2018March has slightly higher rainfall than February despite both being in the dry season\u2019).", zh: "TEA\u6cd5\u63cf\u8ff0\u6570\u636e\uff1a\u8d8b\u52bf\u2014\u2014\u603b\u4f53\u89c4\u5f8b\u662f\u4ec0\u4e48\uff1f\uff08\u4f8b\uff1a\u201c5\u6708\u81f310\u6708\u964d\u96e8\u91cf\u901a\u5e38\u8f83\u9ad8\u201d\uff09\u3002\u8bc1\u636e\u2014\u2014\u652f\u6301\u89c4\u5f8b\u7684\u5177\u4f53\u6570\u636e\uff08\u4f8b\uff1a\u20197\u6708\u964d\u96e8\u91cf\u4e3a160\u6beb\u7c73\u201d\uff09\u3002\u5f02\u5e38\u503c\u2014\u2014\u4e0d\u7b26\u5408\u603b\u4f53\u89c4\u5f8b\u7684\u73b0\u8c61\uff08\u4f8b\uff1a\u20193\u6708\u7684\u964d\u96e8\u91cf\u7565\u9ad8\u4e8e2\u6708\uff0c\u5c3d\u7ba1\u4e24\u8005\u5747\u5904\u4e8e\u65f1\u5b63\u201d\uff09\u3002" },
            { type: "text", en: "When collecting weather data it is important to record multiple variables each day: maximum temperature, rainfall, wind speed, wind direction, and other observations. This creates a comparable data set that can reveal patterns and support or challenge hypotheses. Geographers must also be careful to collect data consistently \u2014 at the same time and place each day \u2014 to make comparisons fair.", zh: "\u6536\u96c6\u5929\u6c14\u6570\u636e\u65f6\uff0c\u6bcf\u5929\u8bb0\u5f55\u591a\u4e2a\u53d8\u91cf\u5f88\u91cd\u8981\uff1a\u6700\u9ad8\u6c14\u6e29\u3001\u964d\u96e8\u91cf\u3001\u98ce\u901f\u3001\u98ce\u5411\u548c\u5176\u4ed6\u89c2\u6d4b\u3002\u8fd9\u6837\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u53ef\u6bd4\u8f83\u7684\u6570\u636e\u96c6\uff0c\u6709\u52a9\u4e8e\u63ed\u793a\u89c4\u5f8b\u5e76\u652f\u6301\u6216\u6311\u6218\u5047\u8bbe\u3002\u5730\u7406\u5b66\u5bb6\u8fd8\u5fc5\u987b\u6ce8\u610f\u59cb\u7ec8\u5728\u540c\u4e00\u65f6\u95f4\u548c\u5730\u70b9\u6536\u96c6\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u6bd4\u8f83\u7684\u516c\u5e73\u6027\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Climate graph", zh: "\u6c14\u5019\u56fe", defEn: "A graph showing both average monthly temperature and precipitation for a location.", defZh: "\u5c55\u793a\u4e00\u4e2a\u5730\u70b9\u6708\u5747\u6c14\u6e29\u548c\u964d\u6c34\u91cf\u7684\u56fe\u8868\u3002" },
            { en: "Trend", zh: "\u8d8b\u52bf", defEn: "The overall pattern in a set of data, such as an increase or decrease over time.", defZh: "\u6570\u636e\u96c6\u4e2d\u7684\u603b\u4f53\u89c4\u5f8b\uff0c\u5982\u968f\u65f6\u95f4\u589e\u52a0\u6216\u51cf\u5c11\u7684\u8d8b\u52bf\u3002" },
            { en: "Precipitation", zh: "\u964d\u6c34\u91cf", defEn: "Water that falls from the atmosphere as rain, snow, sleet, or hail.", defZh: "\u4ee5\u96e8\u3001\u96ea\u3001\u51bb\u96e8\u6216\u51b0\u96f9\u5f62\u5f0f\u4ece\u5927\u6c14\u4e2d\u964d\u843d\u7684\u6c34\u3002" },
            { en: "Variable", zh: "\u53d8\u91cf", defEn: "Something that can be measured and may change, such as temperature, rainfall, or wind speed.", defZh: "\u53ef\u4ee5\u8861\u91cf\u4e14\u53ef\u80fd\u53d1\u751f\u53d8\u5316\u7684\u4e8b\u7269\uff0c\u5982\u6c14\u6e29\u3001\u964d\u96e8\u91cf\u6216\u98ce\u901f\u3002" },
          ],
        },
        { type: "image", caption: "Aerial view of Bangkok, Thailand \u2014 the city at the centre of this topic\u2019s climate data, experiencing a tropical climate with distinct wet and dry seasons.", captionZh: "\u6cf0\u56fd\u66fc\u8c37\u9e1f\u77b0\u56fe\u2014\u2014\u672c\u8bfe\u6c14\u5019\u6570\u636e\u7684\u4e2d\u5fc3\u57ce\u5e02\uff0c\u5177\u6709\u660e\u663e\u5e72\u6e7f\u5b63\u7684\u70ed\u5e26\u6c14\u5019\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bangkok,_Thailand,_Aerial_view.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Skill: Reading Climate Graphs", labelZh: "\u5730\u7406\u5b66\u6280\u80fd\uff1a\u8bfb\u53d6\u6c14\u5019\u56fe", en: "Climate graphs show temperature as a line and precipitation as bars. The TEA method \u2014 Trend, Evidence, Anomaly \u2014 helps describe and analyse patterns. Data should be collected consistently to allow fair comparison.", zh: "\u6c14\u5019\u56fe\u7528\u6298\u7ebf\u8868\u793a\u6c14\u6e29\uff0c\u7528\u67f1\u72b6\u56fe\u8868\u793a\u964d\u6c34\u91cf\u3002TEA\u6cd5\u2014\u2014\u8d8b\u52bf\u3001\u8bc1\u636e\u3001\u5f02\u5e38\u503c\u2014\u2014\u6709\u52a9\u4e8e\u63cf\u8ff0\u548c\u5206\u6790\u89c4\u5f8b\u3002\u6570\u636e\u5e94\u59cb\u7ec8\u4e00\u81f4\u5730\u6536\u96c6\uff0c\u4ee5\u4fbf\u8fdb\u884c\u516c\u5e73\u6bd4\u8f83\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Use the TEA method to describe the rainfall pattern in Bangkok across the year.", qZh: "\u8fd0\u7528TEA\u6cd5\u63cf\u8ff0\u66f2\u8c37\u5168\u5e74\u7684\u964d\u96e8\u89c4\u5f8b\u3002", aEn: "Trend: Bangkok\u2019s rainfall is much higher from May to October than from November to April. Evidence: July typically has around 150\u2013160 mm of rainfall, while January may have less than 10 mm. Anomaly: October can sometimes have higher rainfall than expected as the rainy season ends, possibly due to tropical storms.", aZh: "\u8d8b\u52bf\uff1a\u66f2\u8c375\u6708\u81f310\u6708\u7684\u964d\u96e8\u91cf\u8fdc\u9ad8\u4e8e11\u6708\u81f34\u6708\u3002\u8bc1\u636e\uff1a7\u6708\u7684\u964d\u96e8\u91cf\u901a\u5e38\u5927\u7ea6\u4e3a150\u2013160\u6beb\u7c73\uff0c\u800c1\u6708\u53ef\u80fd\u4e0d\u8db310\u6beb\u7c73\u3002\u5f02\u5e38\u503c\uff1a10\u6708\u6709\u65f6\u964d\u96e8\u91cf\u4f1a\u9ad8\u4e8e\u9884\u671f\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u96e8\u5b63\u7ed3\u675f\u65f6\u9047\u5230\u7194\u5e26\u98ce\u66b4\u3002" },
            { qEn: "Why is it important to collect weather data at the same time and place each day?", qZh: "\u4e3a\u4ec0\u4e48\u6bcf\u5929\u5728\u540c\u4e00\u65f6\u95f4\u548c\u5730\u70b9\u6536\u96c6\u5929\u6c14\u6570\u636e\u5f88\u91cd\u8981\uff1f", aEn: "Collecting data at the same time and place ensures that comparisons between days are fair. If data were collected at different times \u2014 for example, temperature at 7 am one day and 3 pm the next \u2014 the differences could reflect the time of day rather than real changes in weather. Consistency makes the data reliable and comparable.", aZh: "\u6bcf\u5929\u5728\u540c\u4e00\u65f6\u95f4\u548c\u5730\u70b9\u6536\u96c6\u6570\u636e\uff0c\u53ef\u4ee5\u786e\u4fdd\u5404\u5929\u4e4b\u95f4\u7684\u6bd4\u8f83\u662f\u516c\u5e73\u7684\u3002\u5982\u679c\u6570\u636e\u5728\u4e0d\u540c\u65f6\u95f4\u6536\u96c6\u2014\u2014\u4f8b\u5982\uff0c\u67d0\u5929\u65e9\u4e0a7\u70b9\u6d4b\u6c14\u6e29\uff0c\u7b2c\u4e8c\u5929\u4e0b\u53483\u70b9\u6d4b\u6c14\u6e29\u2014\u2014\u5dee\u5f02\u53ef\u80fd\u53cd\u6620\u7684\u662f\u4e00\u5929\u4e2d\u4e0d\u540c\u65f6\u6bb5\u7684\u5dee\u5f02\uff0c\u800c\u975e\u5929\u6c14\u7684\u771f\u5b9e\u53d8\u5316\u3002\u4e00\u81f4\u6027\u4f7f\u6570\u636e\u66f4\u53ef\u9760\u3001\u66f4\u53ef\u6bd4\u8f83\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "On a climate graph, how is precipitation usually shown?",
          qZh: "\u5728\u6c14\u5019\u56fe\u4e0a\uff0c\u964d\u6c34\u91cf\u901a\u5e38\u7528\u4ec0\u4e48\u65b9\u5f0f\u8868\u793a\uff1f",
          opts: [
            { en: "A line graph", zh: "\u6298\u7ebf\u56fe" },
            { en: "A pie chart", zh: "\u9970\u5716" },
            { en: "Bar charts", zh: "\u67f1\u72b6\u56fe" },
            { en: "A scatter graph", zh: "\u6563\u70b9\u56fe" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! On a climate graph, precipitation is shown as bars and temperature is shown as a line. This combination makes it easy to compare both variables across the year.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5728\u6c14\u5019\u56fe\u4e0a\uff0c\u964d\u6c34\u91cf\u7528\u67f1\u72b6\u56fe\u8868\u793a\uff0c\u6c14\u6e29\u7528\u6298\u7ebf\u8868\u793a\u3002\u8fd9\u79cd\u7ec4\u5408\u65b9\u5f0f\u4fbf\u4e8e\u5168\u5e74\u6bd4\u8f83\u4e24\u4e2a\u53d8\u91cf\u3002",
          explainWrongEn: "Not quite. Line graphs show temperature on a climate graph. Pie charts and scatter graphs are used for different purposes. Precipitation is shown as bars.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6298\u7ebf\u56fe\u5728\u6c14\u5019\u56fe\u4e0a\u8868\u793a\u6c14\u6e29\u3002\u9970\u5716\u548c\u6563\u70b9\u56fe\u7528\u4e8e\u4e0d\u540c\u7684\u76ee\u7684\u3002\u964d\u6c34\u91cf\u7528\u67f1\u72b6\u56fe\u8868\u793a\u3002",
        },
      ],
    },

    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "T",
      title: "How do we use weather data to understand climate?",
      titleZh: "\u6211\u4eec\u5982\u4f55\u7528\u5929\u6c14\u6570\u636e\u6765\u7406\u89e3\u6c14\u5019\uff1f",
      subtitle: "GIS and long-term data allow geographers to compare weather records and build up a picture of climate patterns.",
      subtitleZh: "\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u548c\u957f\u671f\u6570\u636e\u4f7f\u5730\u7406\u5b66\u5bb6\u80fd\u591f\u6bd4\u8f83\u5929\u6c14\u8bb0\u5f55\u5e76\u6784\u5efa\u6c14\u5019\u89c4\u5f8b\u7684\u56fe\u5c40\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain the difference between weather data and climate data.", zh: "\u6211\u80fd\u89e3\u91ca\u5929\u6c14\u6570\u636e\u548c\u6c14\u5019\u6570\u636e\u7684\u533a\u522b\u3002" },
            { en: "I can explain how GIS is used to access and compare weather information.", zh: "\u6211\u80fd\u89e3\u91ca\u5982\u4f55\u7528\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u6765\u83b7\u53d6\u548c\u6bd4\u8f83\u5929\u6c14\u4fe1\u606f\u3002" },
            { en: "I can explain how climate is understood by comparing weather records over time.", zh: "\u6211\u80fd\u89e3\u91ca\u5982\u4f55\u901a\u8fc7\u5bf9\u6bd4\u957f\u671f\u5929\u6c14\u8bb0\u5f55\u6765\u7406\u89e3\u6c14\u5019\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A single day\u2019s weather data is not enough to understand climate. Climate is built up by collecting weather data over many years and calculating averages. Geographers compare weather records over time to detect patterns, identify trends, and spot anomalies. This process requires comparable data \u2014 collected consistently using the same methods and instruments.", zh: "\u4ec5\u51ed\u4e00\u5929\u7684\u5929\u6c14\u6570\u636e\u65e0\u6cd5\u4e86\u89e3\u6c14\u5019\u3002\u6c14\u5019\u662f\u901a\u8fc7\u6536\u96c6\u591a\u5e74\u7684\u5929\u6c14\u6570\u636e\u5e76\u8ba1\u7b97\u5e73\u5747\u503c\u5efa\u7acb\u8d77\u6765\u7684\u3002\u5730\u7406\u5b66\u5bb6\u901a\u8fc7\u6bd4\u8f83\u957f\u671f\u5929\u6c14\u8bb0\u5f55\u6765\u68c0\u6d4b\u89c4\u5f8b\u3001\u8bc6\u522b\u8d8b\u52bf\u548c\u53d1\u73b0\u5f02\u5e38\u503c\u3002\u8fd9\u4e00\u8fc7\u7a0b\u9700\u8981\u53ef\u6bd4\u8f83\u7684\u6570\u636e\u2014\u2014\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\u548c\u4ed4\u5668\u59cb\u7ec8\u5982\u4e00\u5730\u6536\u96c6\u3002" },
            { type: "highlight", en: "GIS (Geographic Information System) is a key tool for accessing and comparing weather data. GIS allows geographers to: view weather data on maps; compare rainfall or temperature across different locations; overlay different data sets; and spot spatial patterns in climate across a region or country.", zh: "\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08GIS\uff09\u662f\u83b7\u53d6\u548c\u6bd4\u8f83\u5929\u6c14\u6570\u636e\u7684\u5173\u952e\u5de5\u5177\u3002GIS\u4f7f\u5730\u7406\u5b66\u5bb6\u80fd\u591f\uff1a\u5728\u5730\u56fe\u4e0a\u67e5\u770b\u5929\u6c14\u6570\u636e\uff1b\u6bd4\u8f83\u4e0d\u540c\u5730\u70b9\u7684\u964d\u96e8\u91cf\u6216\u6c14\u6e29\uff1b\u53e0\u52a0\u4e0d\u540c\u7684\u6570\u636e\u96c6\uff1b\u5728\u4e00\u4e2a\u5730\u533a\u6216\u56fd\u5bb6\u7684\u6c14\u5019\u4e2d\u53d1\u73b0\u7a7a\u95f4\u89c4\u5f8b\u3002" },
            { type: "example", en: "Example: a geographer might use GIS to compare rainfall data across Thailand. By mapping rainfall levels in different regions, they could identify areas with consistent tropical rainfall, areas with longer dry seasons, and anomalies \u2014 areas where local geography such as mountains causes more or less rainfall than expected for the latitude.", zh: "\u793a\u4f8b\uff1a\u5730\u7406\u5b66\u5bb6\u53ef\u4ee5\u7528GIS\u6bd4\u8f83\u6cf0\u56fd\u5404\u5730\u7684\u964d\u96e8\u91cf\u6570\u636e\u3002\u901a\u8fc7\u5c06\u4e0d\u540c\u5730\u533a\u7684\u964d\u96e8\u91cf\u7ed8\u5236\u5728\u5730\u56fe\u4e0a\uff0c\u4ed6\u4eec\u53ef\u4ee5\u8bc6\u522b\u51fa\u6301\u7eed\u70ed\u5e26\u964d\u96e8\u7684\u5730\u533a\u3001\u65f1\u5b63\u8f83\u957f\u7684\u5730\u533a\uff0c\u4ee5\u53ca\u5f02\u5e38\u503c\u2014\u2014\u56e0\u5c71\u5730\u7b49\u5f53\u5730\u5730\u5f62\u800c\u5bfc\u81f4\u964d\u96e8\u91cf\u591a\u4e8e\u6216\u5c11\u4e8e\u9884\u671f\u7eac\u5ea6\u6c34\u5e73\u7684\u5730\u5e26\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "GIS", zh: "\u5730\u7406\u4fe1\u606f\u7cfb\u7edf", defEn: "Geographic Information System \u2014 a computer system used to store, analyse, and display geographical data on maps.", defZh: "\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\u2014\u2014\u7528\u4e8e\u5b58\u50a8\u3001\u5206\u6790\u548c\u5728\u5730\u56fe\u4e0a\u5c55\u793a\u5730\u7406\u6570\u636e\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u3002" },
            { en: "Average", zh: "\u5e73\u5747\u5024", defEn: "A value calculated by adding all the data and dividing by the number of readings.", defZh: "\u5c06\u6240\u6709\u6570\u636e\u76f8\u52a0\u5e76\u9664\u4ee5\u8bfb\u6570\u6570\u91cf\u5f97\u5230\u7684\u5024\u3002" },
            { en: "Spatial pattern", zh: "\u7a7a\u95f4\u89c4\u5f8b", defEn: "A pattern in data that is linked to location or geography, such as rainfall increasing nearer the coast.", defZh: "\u4e0e\u5730\u70b9\u6216\u5730\u7406\u76f8\u5173\u7684\u6570\u636e\u89c4\u5f8b\uff0c\u4f8b\u5982\u964d\u96e8\u91cf\u9760\u8fd1\u6d77\u5cb8\u65f6\u589e\u52a0\u3002" },
            { en: "Comparable data", zh: "\u53ef\u6bd4\u8f83\u6570\u636e", defEn: "Data collected using the same methods and at the same times, making fair comparison possible.", defZh: "\u4f7f\u7528\u76f8\u540c\u65b9\u6cd5\u548c\u5728\u76f8\u540c\u65f6\u95f4\u6536\u96c6\u7684\u6570\u636e\uff0c\u4f7f\u516c\u5e73\u6bd4\u8f83\u6210\u4e3a\u53ef\u80fd\u3002" },
          ],
        },
        { type: "image", caption: "Green rice fields during the monsoon season \u2014 the seasonal pattern of rainfall across South-East Asia shapes agriculture and livelihoods.", captionZh: "\u5b63\u98ce\u5b63\u8282\u7684\u7eff\u8272\u7a3b\u7530\u2014\u2014\u4e1c\u5357\u4e9a\u5404\u5730\u964d\u96e8\u7684\u5b63\u8282\u89c4\u5f8b\u5851\u9020\u4e86\u519c\u4e1a\u548c\u751f\u8ba1\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_rice_field_during_the_monsoon.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Geographical Skill: GIS", labelZh: "\u5173\u952e\u5730\u7406\u5b66\u6280\u80fd\uff1aGIS", en: "GIS allows geographers to access, map, and compare weather data across different locations. By overlaying data on maps, spatial patterns in climate can be identified \u2014 showing which areas are wetter, drier, hotter, or cooler, and revealing anomalies caused by local geography.", zh: "GIS\u5141\u8bb8\u5730\u7406\u5b66\u5bb6\u83b7\u53d6\u3001\u7ed8\u5236\u548c\u6bd4\u8f83\u4e0d\u540c\u5730\u70b9\u7684\u5929\u6c14\u6570\u636e\u3002\u5c06\u6570\u636e\u53e0\u52a0\u5728\u5730\u56fe\u4e0a\uff0c\u53ef\u4ee5\u8bc6\u522b\u6c14\u5019\u7a7a\u95f4\u89c4\u5f8b\u2014\u2014\u663e\u793a\u54ea\u4e9b\u5730\u533a\u8f83\u6e7f\u6da6\u3001\u5e72\u71e5\u3001\u70b9\u70ed\u6216\u51c9\u723d\uff0c\u5e76\u63ed\u793a\u5f53\u5730\u5730\u7406\u9020\u6210\u7684\u5f02\u5e38\u503c\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain the difference between weather data and climate data.", qZh: "\u89e3\u91ca\u5929\u6c14\u6570\u636e\u548c\u6c14\u5019\u6570\u636e\u7684\u533a\u522b\u3002", aEn: "Weather data records what the atmosphere is doing on a specific day \u2014 for example, today\u2019s rainfall or temperature. Climate data is calculated by averaging weather records over a long period, typically 30 years, for a specific location. One day\u2019s weather data is not representative; climate data reveals the long-term pattern.", aZh: "\u5929\u6c14\u6570\u636e\u8bb0\u5f55\u5927\u6c14\u5728\u67d0\u4e00\u5929\u7684\u5177\u4f53\u72b6\u6001\u2014\u2014\u4f8b\u5982\u4eca\u5929\u7684\u964d\u96e8\u91cf\u6216\u6c14\u6e29\u3002\u6c14\u5019\u6570\u636e\u662f\u901a\u8fc7\u5c06\u67d0\u4e00\u5730\u70b9\u957f\u671f\uff08\u901a\u5e38\u4e3a30\u5e74\uff09\u7684\u5929\u6c14\u8bb0\u5f55\u53d6\u5e73\u5747\u5f97\u5230\u7684\u3002\u67d0\u4e00\u5929\u7684\u5929\u6c14\u6570\u636e\u4e0d\u5177\u6709\u4ee3\u8868\u6027\uff0c\u6c14\u5019\u6570\u636e\u624d\u80fd\u63ed\u793a\u957f\u671f\u89c4\u5f8b\u3002" },
            { qEn: "Give two ways in which GIS is useful for understanding climate patterns.", qZh: "\u5217\u51fa\u4e24\u79cd GIS\u6709\u52a9\u4e8e\u7406\u89e3\u6c14\u5019\u89c4\u5f8b\u7684\u65b9\u5f0f\u3002", aEn: "First, GIS allows geographers to map weather data across a region, making it easy to see spatial patterns such as which areas receive more rainfall. Second, GIS allows different data sets \u2014 for example temperature and rainfall \u2014 to be displayed together on the same map, helping to identify relationships between variables.", aZh: "\u7b2c\u4e00\uff0cGIS\u5141\u8bb8\u5730\u7406\u5b66\u5bb6\u5c06\u4e00\u4e2a\u5730\u533a\u7684\u5929\u6c14\u6570\u636e\u7ed8\u5236\u5728\u5730\u56fe\u4e0a\uff0c\u4fbf\u4e8e\u67e5\u770b\u54ea\u4e9b\u5730\u533a\u964d\u96e8\u91cf\u8f83\u591a\u7b49\u7a7a\u95f4\u89c4\u5f8b\u3002\u7b2c\u4e8c\uff0cGIS\u5141\u8bb8\u5c06\u4e0d\u540c\u6570\u636e\u96c6\u2014\u2014\u4f8b\u5982\u6c14\u6e29\u548c\u964d\u96e8\u91cf\u2014\u2014\u5c55\u793a\u5728\u540c\u4e00\u5730\u56fe\u4e0a\uff0c\u6709\u52a9\u4e8e\u8bc6\u522b\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What does GIS stand for?",
          qZh: "GIS\u662f\u4ec0\u4e48\u7684\u7f29\u5199\uff1f",
          opts: [
            { en: "Global Information System", zh: "\u5168\u7403\u4fe1\u606f\u7cfb\u7edf" },
            { en: "Geographic Information System", zh: "\u5730\u7406\u4fe1\u606f\u7cfb\u7edf" },
            { en: "Geographical Investigation Survey", zh: "\u5730\u7406\u8c03\u67e5\u9879\u76ee" },
            { en: "General Incident Statistics", zh: "\u4e00\u822c\u4e8b\u4ef6\u7edf\u8ba1" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! GIS stands for Geographic Information System \u2014 a computer system used to store, analyse, and display geographical data, including weather and climate information.",
          explainCorrectZh: "\u6b63\u786e\uff01GIS\u662f\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\u7684\u7f29\u5199\u2014\u2014\u4e00\u79cd\u7528\u4e8e\u5b58\u50a8\u3001\u5206\u6790\u548c\u5c55\u793a\u5730\u7406\u6570\u636e\uff08\u5305\u62ec\u5929\u6c14\u548c\u6c14\u5019\u4fe1\u606f\uff09\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u3002",
          explainWrongEn: "Not quite. GIS stands for Geographic Information System. The other options are not correct expansions of the abbreviation.",
          explainWrongZh: "\u4e0d\u5bf9\u3002GIS\u662f\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\u7684\u7f29\u5199\u3002\u5176\u4ed6\u9009\u9879\u5747\u4e0d\u662f\u6b63\u786e\u7684\u5c55\u5f00\u5f0f\u3002",
        },
      ],
    },


    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "T",
      title: "What causes a microclimate?",
      titleZh: "\u5c0f\u6c14\u5019\u662f\u5982\u4f55\u5f62\u6210\u7684\uff1f",
      subtitle: "A microclimate is a small area where local conditions create weather that differs from the surrounding area.",
      subtitleZh: "\u5c0f\u6c14\u5019\u662f\u4e00\u4e2a\u5c0f\u533a\u57df\uff0c\u5f53\u5730\u6761\u4ef6\u5bfc\u81f4\u5929\u6c14\u4e0e\u5468\u56f4\u5730\u533a\u4e0d\u540c\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can define what a microclimate is.", zh: "\u6211\u80fd\u5b9a\u4e49\u5c0f\u6c14\u5019\u3002" },
            { en: "I can describe the factors that cause a microclimate, including surface, shelter, and wind.", zh: "\u6211\u80fd\u63cf\u8ff0\u5bfc\u81f4\u5c0f\u6c14\u5019\u5f62\u6210\u7684\u56e0\u7d20\uff0c\u5305\u62ec\u5730\u9762\u7c7b\u578b\u3001\u906e\u853d\u7269\u548c\u98ce\u3002" },
            { en: "I can explain the difference between large-scale climate controls and small-scale microclimate factors.", zh: "\u6211\u80fd\u89e3\u91ca\u5927\u89c4\u6a21\u6c14\u5019\u63a7\u5236\u56e0\u7d20\u4e0e\u5c0f\u89c4\u6a21\u5c0f\u6c14\u5019\u56e0\u7d20\u4e4b\u95f4\u7684\u533a\u522b\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A microclimate is a local set of atmospheric conditions that differ from those of the surrounding area. Microclimates exist at a small scale \u2014 for example within a single school campus, a park, or a city block. They are caused by local factors rather than the broad climate controls that affect a whole country or region.", zh: "\u5c0f\u6c14\u5019\u662f\u4e00\u79cd\u5c40\u90e8\u5927\u6c14\u72b6\u6001\uff0c\u4e0e\u5468\u56f4\u5730\u533a\u4e0d\u540c\u3002\u5c0f\u6c14\u5019\u5b58\u5728\u4e8e\u5c0f\u89c4\u6a21\u5c42\u9762\u2014\u2014\u4f8b\u5982\u4e00\u6240\u5b66\u6821\u5185\u90e8\u3001\u4e00\u4e2a\u516c\u56ed\u6216\u4e00\u4e2a\u57ce\u533a\u3002\u5b83\u4eec\u662f\u7531\u5c40\u90e8\u56e0\u7d20\u800c\u975e\u5f71\u54cd\u6574\u4e2a\u56fd\u5bb6\u6216\u5730\u533a\u7684\u5e7f\u4e49\u6c14\u5019\u63a7\u5236\u56e0\u7d20\u5bfc\u81f4\u7684\u3002" },
            { type: "highlight", en: "Key factors that cause a microclimate: Surface \u2014 different surfaces absorb and reflect heat differently. Dark tarmac absorbs more heat than grass, making paved areas warmer. Shelter \u2014 buildings, walls, and trees can block wind and trap warmth, creating sheltered spots that are warmer and less windy. Wind \u2014 exposed areas with more wind feel colder because wind removes heat from surfaces and people.", zh: "\u5bfc\u81f4\u5c0f\u6c14\u5019\u7684\u5173\u952e\u56e0\u7d20\uff1a\u5730\u9762\u7c7b\u578b\u2014\u2014\u4e0d\u540c\u5730\u9762\u5bf9\u70ed\u91cf\u7684\u5438\u6536\u548c\u53cd\u5c04\u4e0d\u540c\u3002\u6df1\u8272\u6c25\u9752\u6c41\u6d82\u8def\u6bd4\u8349\u5730\u5438\u6536\u66f4\u591a\u70ed\u91cf\uff0c\u4f7f\u786b\u5316\u533a\u57df\u6e29\u5ea6\u8f83\u9ad8\u3002\u906e\u853d\u7269\u2014\u2014\u5efa\u7b51\u7269\u3001\u5899\u58c1\u548c\u6811\u6728\u53ef\u4ee5\u6321\u6321\u98ce\u5e76\u7699\u7559\u6696\u610f\uff0c\u5f62\u6210\u66f4\u6696\u548c\u98ce\u529b\u66f4\u5c0f\u7684\u906e\u853d\u5730\u5e26\u3002\u98ce\u529b\u2014\u2014\u98ce\u5f39\u66f4\u5f3a\u7684\u66b4\u9732\u5730\u5e26\u611f\u89c9\u66f4\u51b7\uff0c\u56e0\u4e3a\u98ce\u4f1a\u5e26\u8d70\u5730\u9762\u548c\u4eba\u4f53\u7684\u70ed\u91cf\u3002" },
            { type: "text", en: "It is important to distinguish between large-scale climate controls and small-scale microclimate factors. Latitude and altitude explain why Thailand as a whole is hot and why mountain tops are cooler. They do not explain why one corner of a school is warmer than another. Shelter, surface type, and wind explain those small-scale differences.", zh: "\u533a\u5206\u5927\u89c4\u6a21\u6c14\u5019\u63a7\u5236\u56e0\u7d20\u4e0e\u5c0f\u89c4\u6a21\u5c0f\u6c14\u5019\u56e0\u7d20\u5f88\u91cd\u8981\u3002\u7eac\u5ea6\u548c\u6d77\u62d4\u89e3\u91ca\u4e86\u6cf0\u56fd\u6574\u4f53\u4e3a\u4f55\u70bd\u70ed\uff0c\u4ee5\u53ca\u5c71\u9876\u4e3a\u4f55\u51b3\u51b7\u3002\u4f46\u5b83\u4eec\u65e0\u6cd5\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4e00\u6240\u5b66\u6821\u7684\u67d0\u4e2a\u89d2\u843d\u4f1a\u6bd4\u53e6\u4e00\u4e2a\u89d2\u843d\u66f4\u6696\u3002\u906e\u853d\u7269\u3001\u5730\u9762\u7c7b\u578b\u548c\u98ce\u529b\u624d\u80fd\u89e3\u91ca\u8fd9\u4e9b\u5c0f\u89c4\u6a21\u7684\u5dee\u5f02\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Microclimate", zh: "\u5c0f\u6c14\u5019", defEn: "A local set of atmospheric conditions that differ from those of the surrounding area, caused by local factors such as surface, shelter, and wind.", defZh: "\u4e00\u79cd\u5c40\u90e8\u5927\u6c14\u72b6\u6001\uff0c\u4e0e\u5468\u56f4\u5730\u533a\u4e0d\u540c\uff0c\u7531\u5730\u9762\u7c7b\u578b\u3001\u906e\u853d\u7269\u548c\u98ce\u529b\u7b49\u5c40\u90e8\u56e0\u7d20\u9020\u6210\u3002" },
            { en: "Surface", zh: "\u5730\u9762\u7c7b\u578b", defEn: "The material covering the ground, such as grass, tarmac, or concrete, which affects how much heat is absorbed or reflected.", defZh: "\u8986\u76d6\u5730\u9762\u7684\u6750\u6599\uff0c\u5982\u8349\u5730\u3001\u6c25\u9752\u6c41\u6d82\u8def\u6216\u6df7\u51dd\u571f\uff0c\u5f71\u54cd\u70ed\u91cf\u7684\u5438\u6536\u6216\u53cd\u5c04\u7a0b\u5ea6\u3002" },
            { en: "Shelter", zh: "\u906e\u853d\u7269", defEn: "A physical barrier such as a wall, building, or trees that blocks wind and can trap warmth.", defZh: "\u5899\u58c1\u3001\u5efa\u7b51\u7269\u6216\u6811\u6728\u7b49\u7269\u7406\u969c\u788d\u7269\uff0c\u80fd\u591f\u6321\u6321\u98ce\u5e76\u7669\u7559\u6696\u6c14\u3002" },
            { en: "Exposed", zh: "\u66b4\u9732\u5730\u5e26", defEn: "An area with little shelter from the wind, which tends to feel colder as a result.", defZh: "\u7f3a\u5c11\u98ce\u7684\u906e\u853d\u3001\u56e0\u6b64\u611f\u89c9\u8f83\u51b7\u7684\u5730\u5e26\u3002" },
          ],
        },
        { type: "image", caption: "A weather station rain gauge \u2014 the type of instrument used to record rainfall data when investigating microclimates at a school site.", captionZh: "\u6c14\u8c61\u7ad9\u96e8\u91cf\u8ba1\u2014\u2014\u5728\u5b66\u6821\u5c0f\u6c14\u5019\u8c03\u67e5\u4e2d\u7528\u4e8e\u8bb0\u5f55\u964d\u96e8\u6570\u636e\u7684\u4ed3\u5668\u7c7b\u578b\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weather_station_rain_gauge.JPG", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Key Geographical Concept: Microclimate", labelZh: "\u5173\u952e\u5730\u7406\u5b66\u6982\u5ff5\uff1a\u5c0f\u6c14\u5019", en: "A microclimate is caused by local factors: surface type affects heat absorption; shelter from buildings and trees traps warmth and blocks wind; exposed areas feel colder because wind removes heat. Latitude and altitude explain large-scale climate differences, not microclimates.", zh: "\u5c0f\u6c14\u5019\u7531\u5c40\u90e8\u56e0\u7d20\u5bfc\u81f4\uff1a\u5730\u9762\u7c7b\u578b\u5f71\u54cd\u70ed\u91cf\u5438\u6536\uff1b\u5efa\u7b51\u7269\u548c\u6811\u6728\u7684\u906e\u853d\u7069\u7559\u6696\u610f\u5e76\u6321\u6321\u98ce\uff1b\u66b4\u9732\u5730\u5e26\u56e0\u98ce\u5e26\u8d70\u70ed\u91cf\u800c\u611f\u89c9\u66f4\u51b7\u3002\u7eac\u5ea6\u548c\u6d77\u62d4\u89e3\u91ca\u5927\u89c4\u6a21\u6c14\u5019\u5dee\u5f02\uff0c\u800c\u975e\u5c0f\u6c14\u5019\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Explain why a paved area is likely to be warmer than a grassy area nearby.", qZh: "\u89e3\u91ca\u4e3a\u4ec0\u4e48\u786c\u5316\u5730\u9762\u901a\u5e38\u6bd4\u9644\u8fd1\u7684\u8349\u5730\u66f4\u6696\u3002", aEn: "Dark tarmac absorbs more solar radiation than grass because it has a lower albedo \u2014 it reflects less energy back. Grass also loses heat through transpiration, keeping it cooler. The result is that paved areas absorb more heat during the day and release it slowly, making them warmer.", aZh: "\u6df1\u8272\u6c25\u9752\u6c41\u6d82\u8def\u6bd4\u8349\u5730\u5438\u6536\u66f4\u591a\u7684\u592a\u9633\u8f90\u5c04\uff0c\u56e0\u4e3a\u5b83\u7684\u53cd\u5c04\u7387\u8f83\u4f4e\u2014\u2014\u5c06\u66f4\u5c11\u7684\u80fd\u91cf\u53cd\u5c04\u56de\u53bb\u3002\u8349\u5730\u8fd8\u4f1a\u901a\u8fc7\u852d\u817e\u4f5c\u7528\u6563\u5931\u70ed\u91cf\uff0c\u4e0d\u65ad\u964d\u6e29\u3002\u56e0\u6b64\uff0c\u786c\u5316\u5730\u9762\u767d\u5929\u5438\u6536\u66f4\u591a\u70ed\u91cf\u5e76\u7f13\u6162\u91ca\u653e\uff0c\u4f7f\u5176\u6e29\u5ea6\u66f4\u9ad8\u3002" },
            { qEn: "Why are latitude and altitude not useful for explaining why one part of a school is warmer than another?", qZh: "\u4e3a\u4ec0\u4e48\u7eac\u5ea6\u548c\u6d77\u62d4\u65e0\u6cd5\u89e3\u91ca\u5b66\u6821\u67d0\u4e00\u533a\u57df\u6bd4\u53e6\u4e00\u533a\u57df\u66f4\u6696\u7684\u73b0\u8c61\uff1f", aEn: "Latitude and altitude affect climate at the scale of countries and regions. All parts of a school campus share the same latitude and are at essentially the same altitude, so those factors cannot explain differences within such a small area. Small-scale differences are explained by local factors such as surface type, shelter from buildings, and wind exposure.", aZh: "\u7eac\u5ea6\u548c\u6d77\u62d4\u5f71\u54cd\u56fd\u5bb6\u548c\u5730\u533a\u7ea7\u522b\u7684\u6c14\u5019\u3002\u4e00\u6240\u5b66\u6821\u6821\u56ed\u5185\u7684\u6240\u6709\u5730\u65b9\u5177\u6709\u76f8\u540c\u7684\u7eac\u5ea6\uff0c\u6d77\u62d4\u4e5f\u57fa\u672c\u76f8\u540c\uff0c\u56e0\u6b64\u8fd9\u4e9b\u56e0\u7d20\u65e0\u6cd5\u89e3\u91ca\u5982\u6b64\u5c0f\u8303\u56f4\u5185\u7684\u5dee\u5f02\u3002\u5c0f\u89c4\u6a21\u5dee\u5f02\u7531\u5c40\u90e8\u56e0\u7d20\u89e3\u91ca\uff0c\u5982\u5730\u9762\u7c7b\u578b\u3001\u5efa\u7b51\u7269\u7684\u906e\u853d\u548c\u98ce\u529b\u66b4\u9732\u7a0b\u5ea6\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following is a cause of a microclimate?",
          qZh: "\u4ee5\u4e0b\u54ea\u4e2a\u662f\u5c0f\u6c14\u5019\u5f62\u6210\u7684\u539f\u56e0\uff1f",
          opts: [
            { en: "The distance of a country from the equator", zh: "\u4e00\u4e2a\u56fd\u5bb6\u4e0e\u8d62\u9053\u7684\u8ddd\u79bb" },
            { en: "The height of a mountain range", zh: "\u5c71\u8109\u7684\u9ad8\u5ea6" },
            { en: "Shelter from a wall blocking the wind", zh: "\u5899\u58c1\u6321\u6321\u98ce\u63d0\u4f9b\u7684\u906e\u853d" },
            { en: "The amount of solar energy reaching a continent", zh: "\u5230\u8fbe\u4e00\u4e2a\u5927\u6d32\u7684\u592a\u9633\u80fd\u91cf" },
          ],
          correct: 2,
          explainCorrectEn: "Correct! Shelter from a wall blocks wind and traps warmth, creating a warmer microclimate on the sheltered side. This is a local, small-scale factor.",
          explainCorrectZh: "\u6b63\u786e\uff01\u5899\u58c1\u7684\u906e\u853d\u6321\u6321\u4e86\u98ce\u5e76\u7ec8\u7a7c\u4e86\u6696\u610f\uff0c\u5728\u906e\u853d\u4e00\u4fa7\u5f62\u6210\u66f4\u6696\u548c\u7684\u5c0f\u6c14\u5019\u3002\u8fd9\u662f\u4e00\u79cd\u5c45\u90e8\u5c0f\u89c4\u6a21\u56e0\u7d20\u3002",
          explainWrongEn: "Not quite. Distance from the equator (latitude), mountain height (altitude), and continental solar energy are all large-scale climate controls, not microclimate factors. The correct answer is shelter from a wall.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u4e0e\u8d62\u9053\u7684\u8ddd\u79bb\uff08\u7eac\u5ea6\uff09\u3001\u5c71\u8109\u9ad8\u5ea6\uff08\u6d77\u62d4\uff09\u548c\u5927\u6d32\u592a\u9633\u80fd\u91cf\u90fd\u662f\u5927\u89c4\u6a21\u6c14\u5019\u63a7\u5236\u56e0\u7d20\uff0c\u800c\u975e\u5c0f\u6c14\u5019\u56e0\u7d20\u3002\u6b63\u786e\u7b54\u6848\u662f\u5899\u58c1\u7684\u906e\u853d\u3002",
        },
      ],
    },

    /* ========== Lesson 7 ========== */
    {
      num: 7,
      badge: "A",
      title: "Does SHR have a microclimate?",
      titleZh: "SHR\u5b66\u6821\u662f\u5426\u5b58\u5728\u5c0f\u6c14\u5019\uff1f",
      subtitle: "Planning a geographical investigation requires choosing a method, deciding how to sample, and applying earlier knowledge.",
      subtitleZh: "\u89c4\u5212\u4e00\u9879\u5730\u7406\u5b66\u8c03\u67e5\u9700\u8981\u9009\u62e9\u65b9\u6cd5\u3001\u51b3\u5b9a\u62bd\u6837\u65b9\u5f0f\u5e76\u5e94\u7528\u65e9\u5148\u5b66\u5230\u7684\u77e5\u8bc6\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can plan an investigation to find out whether a school has a microclimate.", zh: "\u6211\u80fd\u89c4\u5212\u4e00\u9879\u8c03\u67e5\uff0c\u4ee5\u786e\u5b9a\u4e00\u6240\u5b66\u6821\u662f\u5426\u5b58\u5728\u5c0f\u6c14\u5019\u3002" },
            { en: "I can decide on a suitable method of sampling.", zh: "\u6211\u80fd\u51b3\u5b9a\u5408\u9002\u7684\u62bd\u6837\u65b9\u6cd5\u3002" },
            { en: "I can connect earlier knowledge about latitude, altitude, and air masses to a fieldwork investigation.", zh: "\u6211\u80fd\u5c06\u5173\u4e8e\u7eac\u5ea6\u3001\u6d77\u62d4\u548c\u6c14\u56e2\u7684\u65e9\u5148\u77e5\u8bc6\u4e0e\u91ce\u5916\u8c03\u67e5\u76f8\u8054\u7cfb\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A geographical investigation starts with a question, then requires a plan. For the question \u2018Does SHR have a microclimate?\u2019, students need to: decide what to measure (temperature, wind speed, humidity); choose where to measure it across the school; decide how often to measure; and think about how to record data consistently so that comparisons are fair.", zh: "\u5730\u7406\u5b66\u8c03\u67e5\u4ece\u4e00\u4e2a\u95ee\u9898\u5f00\u59cb\uff0c\u7136\u540e\u9700\u8981\u4e00\u4e2a\u8ba1\u5212\u3002\u9488\u5bf9\u201cSHR\u5b66\u6821\u662f\u5426\u5b58\u5728\u5c0f\u6c14\u5019\uff1f\u201d\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b66\u751f\u9700\u8981\uff1a\u51b3\u5b9a\u6d4b\u91cf\u4ec0\u4e48\uff08\u6c14\u6e29\u3001\u98ce\u901f\u3001\u6e7f\u5ea6\uff09\uff1b\u9009\u62e9\u5728\u5b66\u6821\u5185\u7684\u54ea\u4e9b\u5730\u70b9\u6d4b\u91cf\uff1b\u51b3\u5b9a\u591a\u9891\u7e41\u6d4b\u91cf\uff1b\u4ee5\u53ca\u601d\u8003\u5982\u4f55\u59cb\u7ec8\u5982\u4e00\u5730\u8bb0\u5f55\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u6bd4\u8f83\u7684\u516c\u5e73\u6027\u3002" },
            { type: "highlight", en: "Sampling methods: Random sampling \u2014 locations are chosen randomly, reducing bias. Systematic sampling \u2014 measurements are taken at regular intervals, such as every 10 metres across the school grounds. Stratified sampling \u2014 the area is divided into zones (e.g. paved, grassy, sheltered) and measurements are taken in each zone. The method chosen should match the investigation question.", zh: "\u62bd\u6837\u65b9\u6cd5\uff1a\u968f\u673a\u62bd\u6837\u2014\u2014\u5730\u70b9\u968f\u673a\u9009\u53d6\uff0c\u51cf\u5c11\u504f\u5dee\u3002\u7cfb\u7edf\u62bd\u6837\u2014\u2014\u4ee5\u56fa\u5b9a\u95f4\u9694\u8fdb\u884c\u6d4b\u91cf\uff0c\u4f8b\u5982\u5728\u5b66\u6821\u64cd\u573a\u6bcf\u9694 10 \u7c73\u6d4b\u91cf\u4e00\u6b21\u3002\u5206\u5c42\u62bd\u6837\u2014\u2014\u5c06\u5730\u533a\u5212\u5206\u4e3a\u4e0d\u540c\u5730\u5e26\uff08\u5982\u786c\u5316\u5730\u9762\u3001\u8349\u5730\u3001\u906e\u853d\u5730\u5e26\uff09\uff0c\u5e76\u5728\u6bcf\u4e2a\u5730\u5e26\u8fdb\u884c\u6d4b\u91cf\u3002\u6240\u9009\u65b9\u6cd5\u5e94\u4e0e\u8c03\u67e5\u95ee\u9898\u76f8\u5339\u914d\u3002" },
            { type: "example", en: "Applying earlier knowledge: Before planning the fieldwork, students should connect earlier topic knowledge. Altitude and latitude explain why Thailand is hot and why temperatures fall on high ground \u2014 but these do not change within a school. Air masses explain Thailand\u2019s wet and dry seasons \u2014 but again, air masses affect the whole region equally. Within the school, differences in temperature and wind are explained by surface, shelter, and exposure \u2014 the microclimate factors from Lesson 6.", zh: "\u5e94\u7528\u65e9\u5148\u77e5\u8bc6\uff1a\u5728\u89c4\u5212\u91ce\u5916\u8c03\u67e5\u4e4b\u524d\uff0c\u5b66\u751f\u5e94\u5c06\u4e4b\u524d\u5b66\u5230\u7684\u77e5\u8bc6\u8fdb\u884c\u8054\u7cfb\u3002\u6d77\u62d4\u548c\u7eac\u5ea6\u89e3\u91ca\u4e86\u6cf0\u56fd\u4e3a\u4ec0\u4e48\u70bd\u70ed\u4ee5\u53ca\u9ad8\u5730\u4e3a\u4ec0\u4e48\u6c14\u6e29\u66f4\u4f4e\u2014\u2014\u4f46\u8fd9\u4e9b\u5728\u5b66\u6821\u5185\u90e8\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u6c14\u56e2\u89e3\u91ca\u4e86\u6cf0\u56fd\u7684\u96e8\u5b63\u548c\u65f1\u5b63\u2014\u2014\u4f46\u6c14\u56e2\u5e7f\u6cdb\u5f71\u54cd\u6574\u4e2a\u5730\u533a\u3002\u5b66\u6821\u5185\u90e8\u7684\u6c14\u6e29\u548c\u98ce\u529b\u5dee\u5f02\u7531\u5730\u9762\u7c7b\u578b\u3001\u906e\u853d\u7269\u548c\u66b4\u9732\u7a0b\u5ea6\u6765\u89e3\u91ca\u2014\u2014\u5373\u7b2c6\u8bfe\u4e2d\u7684\u5c0f\u6c14\u5019\u56e0\u7d20\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Hypothesis", zh: "\u5047\u8bbe", defEn: "A testable prediction or statement that an investigation is designed to support or disprove.", defZh: "\u4e00\u79cd\u53ef\u68c0\u9a8c\u7684\u9884\u6d4b\u6216\u8bf4\u6cd5\uff0c\u8c03\u67e5\u65e8\u5728\u652f\u6301\u6216\u63a8\u7ffb\u8be5\u9884\u6d4b\u3002" },
            { en: "Systematic sampling", zh: "\u7cfb\u7edf\u62bd\u6837", defEn: "Collecting data at regular, evenly spaced intervals across a study area.", defZh: "\u5728\u7814\u7a76\u5730\u533a\u5185\u4ee5\u5b9a\u671f\u3001\u5747\u5300\u95f4\u9694\u6536\u96c6\u6570\u636e\u3002" },
            { en: "Risk assessment", zh: "\u98ce\u9669\u8bc4\u4f30", defEn: "An identification of potential hazards in a fieldwork area and steps taken to reduce risk.", defZh: "\u8bc6\u522b\u91ce\u5916\u8c03\u67e5\u5730\u533a\u7684\u6f5c\u5728\u5371\u9669\u5e76\u91c7\u53d6\u964d\u4f4e\u98ce\u9669\u7684\u65b9\u6cd5\u3002" },
            { en: "Fieldwork", zh: "\u91ce\u5916\u8c03\u67e5", defEn: "Data collection carried out in a real-world environment outside the classroom.", defZh: "\u5728\u8bfe\u5ba4\u4ee5\u5916\u7684\u771f\u5b9e\u73af\u5883\u4e2d\u8fdb\u884c\u7684\u6570\u636e\u6536\u96c6\u3002" },
          ],
        },
        { type: "image", caption: "Aerial view of Shrewsbury International School Bangkok Riverside Campus \u2014 the different surfaces (grass, hard courts, buildings, trees) across the campus create distinct microclimates for investigation.", captionZh: "\u5e03\u83b1\u514b\u518c\u5bcc\u5c14\u56fd\u9645\u5b66\u6821\u66fc\u8c37Riverside\u6821\u533a\u9e1f\u77b0\u56fe\u2014\u2014\u6821\u56ed\u5185\u4e0d\u540c\u5730\u8868\uff08\u8349\u5730\u3001\u786c\u5730\u3001\u5efa\u7b51\u3001\u6811\u6728\uff09\u5f62\u6210\u4e86\u4e0d\u540c\u7684\u5c0f\u6c14\u5019\uff0c\u662f\u7406\u60f3\u7684\u8c03\u67e5\u573a\u5730\u3002", url: "https://9qxe6ewmytfv2dmx.public.blob.vercel-storage.com/shr.png", source: "Shrewsbury International School Bangkok" },
        { type: "source", labelEn: "Investigation Planning", labelZh: "\u8c03\u67e5\u89c4\u5212", en: "To investigate whether a school has a microclimate, students should choose locations that vary in surface type, shelter, and wind exposure. Data must be collected consistently at the same times to allow fair comparison. Sampling method should match the investigation question.", zh: "\u4e3a\u4e86\u8c03\u67e5\u5b66\u6821\u662f\u5426\u5b58\u5728\u5c0f\u6c14\u5019\uff0c\u5b66\u751f\u5e94\u9009\u62e9\u5730\u9762\u7c7b\u578b\u3001\u906e\u853d\u7269\u548c\u98ce\u529b\u66b4\u9732\u7a0b\u5ea6\u5404\u4e0d\u76f8\u540c\u7684\u5730\u70b9\u3002\u5fc5\u987b\u5728\u76f8\u540c\u65f6\u95f4\u59cb\u7ec8\u5982\u4e00\u5730\u6536\u96c6\u6570\u636e\uff0c\u4ee5\u4fbf\u8fdb\u884c\u516c\u5e73\u6bd4\u8f83\u3002\u62bd\u6837\u65b9\u6cd5\u5e94\u4e0e\u8c03\u67e5\u95ee\u9898\u76f8\u5339\u914d\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Write a hypothesis for the investigation \u2018Does SHR have a microclimate?\u2019", qZh: "\u4e3a\u201cSHR\u5b66\u6821\u662f\u5426\u5b58\u5728\u5c0f\u6c14\u5019\uff1f\u201d\u8fd9\u4e2a\u8c03\u67e5\u5199\u4e00\u4e2a\u5047\u8bbe\u3002", aEn: "A suitable hypothesis: \u2018The sheltered south-facing side of the school buildings will have higher temperatures and lower wind speeds than the exposed north-facing side.\u2019 A good hypothesis is specific, testable, and based on geographical reasoning about microclimate factors.", aZh: "\u4e00\u4e2a\u5408\u9002\u7684\u5047\u8bbe\uff1a\u201c\u5b66\u6821\u5efa\u7b51\u7269\u671d\u5357\u7684\u906e\u853d\u4e00\u4fa7\u6c14\u6e29\u5c06\u9ad8\u4e8e\u66b4\u9732\u7684\u671d\u5317\u4e00\u4fa7\uff0c\u98ce\u901f\u5c06\u4f4e\u4e8e\u671d\u5317\u4e00\u4fa7\u3002\u201d\u4e00\u4e2a\u597d\u7684\u5047\u8bbe\u5e94\u5177\u4f53\u3001\u53ef\u68c0\u9a8c\uff0c\u5e76\u57fa\u4e8e\u5c0f\u6c14\u5019\u56e0\u7d20\u7684\u5730\u7406\u5b66\u63a8\u7406\u3002" },
            { qEn: "Why is it important to collect data at the same time across all measurement points in the school?", qZh: "\u4e3a\u4ec0\u4e48\u5728\u5b66\u6821\u6240\u6709\u6d4b\u91cf\u70b9\u4e0a\u5728\u540c\u4e00\u65f6\u95f4\u6536\u96c6\u6570\u636e\u5f88\u91cd\u8981\uff1f", aEn: "If data is collected at different times across different locations, the differences recorded could reflect the time of day rather than real differences in microclimate. For example, temperature rises during the morning and is higher in the afternoon. Collecting data simultaneously at all points ensures that any differences are caused by location, not by when the measurement was taken.", aZh: "\u5982\u679c\u5728\u4e0d\u540c\u5730\u70b9\u5728\u4e0d\u540c\u65f6\u95f4\u6536\u96c6\u6570\u636e\uff0c\u8bb0\u5f55\u5230\u7684\u5dee\u5f02\u53ef\u80fd\u53cd\u6620\u7684\u662f\u4e00\u5929\u4e2d\u4e0d\u540c\u65f6\u6bb5\u7684\u5dee\u5f02\uff0c\u800c\u975e\u5c0f\u6c14\u5019\u7684\u771f\u5b9e\u5dee\u5f02\u3002\u4f8b\u5982\uff0c\u6c14\u6e29\u5728\u4e0a\u5348\u4e0d\u65ad\u4e0a\u5347\uff0c\u4e0b\u5348\u8f83\u9ad8\u3002\u5728\u6240\u6709\u70b9\u4e0a\u540c\u65f6\u6536\u96c6\u6570\u636e\uff0c\u53ef\u4ee5\u786e\u4fdd\u4efb\u4f55\u5dee\u5f02\u90fd\u662f\u7531\u5730\u70b9\u800c\u975e\u6d4b\u91cf\u65f6\u95f4\u5bfc\u81f4\u7684\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What is systematic sampling?",
          qZh: "\u4ec0\u4e48\u662f\u7cfb\u7edf\u62bd\u6837\uff1f",
          opts: [
            { en: "Choosing locations randomly with no set pattern", zh: "\u6ca1\u6709\u56fa\u5b9a\u89c4\u5f8b\u5730\u968f\u673a\u9009\u62e9\u5730\u70b9" },
            { en: "Collecting data at regular, evenly spaced intervals", zh: "\u4ee5\u5b9a\u671f\u3001\u5747\u5300\u95f4\u9694\u6536\u96c6\u6570\u636e" },
            { en: "Dividing the area into zones and sampling each zone", zh: "\u5c06\u5730\u533a\u5206\u4e3a\u5730\u5e26\u5e76\u5728\u6bcf\u4e2a\u5730\u5e26\u5185\u62bd\u6837" },
            { en: "Only collecting data in areas that look interesting", zh: "\u53ea\u5728\u770b\u8d77\u6765\u6709\u8da3\u7684\u5730\u65b9\u6536\u96c6\u6570\u636e" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Systematic sampling means collecting data at regular, evenly spaced intervals \u2014 for example every 10 metres across the school grounds. This reduces bias and gives good coverage of the study area.",
          explainCorrectZh: "\u6b63\u786e\uff01\u7cfb\u7edf\u62bd\u6837\u662f\u6307\u4ee5\u5b9a\u671f\u3001\u5747\u5300\u95f4\u9694\u6536\u96c6\u6570\u636e\u2014\u2014\u4f8b\u5982\u5728\u5b66\u6821\u5185\u6bcf\u9694 10 \u7c73\u6d4b\u91cf\u4e00\u6b21\u3002\u8fd9\u6709\u52a9\u4e8e\u51cf\u5c11\u504f\u5dee\uff0c\u5e76\u5bf9\u7814\u7a76\u5730\u533a\u5f62\u6210\u826f\u597d\u7684\u8986\u76d6\u3002",
          explainWrongEn: "Not quite. Random sampling uses no set pattern; stratified sampling divides into zones; and only collecting in interesting areas introduces bias. The correct answer is collecting data at regular, evenly spaced intervals.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u968f\u673a\u62bd\u6837\u6ca1\u6709\u56fa\u5b9a\u89c4\u5f8b\uff1b\u5206\u5c42\u62bd\u6837\u5c06\u5730\u533a\u5212\u5206\u4e3a\u5730\u5e26\uff1b\u53ea\u5728\u6709\u8da3\u5730\u65b9\u6536\u96c6\u6570\u636e\u4f1a\u5f15\u5165\u504f\u5dee\u3002\u6b63\u786e\u7b54\u6848\u662f\u4ee5\u5b9a\u671f\u3001\u5747\u5300\u95f4\u9694\u6536\u96c6\u6570\u636e\u3002",
        },
      ],
    },

    /* ========== Lesson 8 ========== */
    {
      num: 8,
      badge: "A",
      title: "Collecting primary data",
      titleZh: "\u6536\u96c6\u539f\u59cb\u6570\u636e",
      subtitle: "Fieldwork involves carrying out a plan carefully \u2014 following the method, managing risk, and recording data consistently.",
      subtitleZh: "\u91ce\u5916\u8c03\u67e5\u9700\u8981\u8c28\u614e\u6267\u884c\u8ba1\u5212\u2014\u2014\u9075\u5b88\u65b9\u6cd5\u3001\u7ba1\u63a7\u98ce\u9669\u5e76\u59cb\u7ec8\u5982\u4e00\u5730\u8bb0\u5f55\u6570\u636e\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can explain what primary data is and why it is important in geographical investigation.", zh: "\u6211\u80fd\u89e3\u91ca\u539f\u59cb\u6570\u636e\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5b83\u5728\u5730\u7406\u5b66\u8c03\u67e5\u4e2d\u4e3a\u4ec0\u4e48\u91cd\u8981\u3002" },
            { en: "I can describe the steps involved in collecting weather data in the field.", zh: "\u6211\u80fd\u63cf\u8ff0\u5728\u91ce\u5916\u6536\u96c6\u5929\u6c14\u6570\u636e\u7684\u6b65\u9aa4\u3002" },
            { en: "I can explain why reliability and consistency matter in fieldwork.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u53ef\u9760\u6027\u548c\u4e00\u81f4\u6027\u5728\u91ce\u5916\u8c03\u67e5\u4e2d\u5f88\u91cd\u8981\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Primary data is data that you collect yourself, directly from the real world. In fieldwork, this means going out to a location and measuring things like temperature, wind speed, and humidity using instruments. Primary data is valuable because it is specific to your investigation question and collected under controlled conditions.", zh: "\u539f\u59cb\u6570\u636e\u662f\u4f60\u81ea\u5df1\u76f4\u63a5\u4ece\u73b0\u5b9e\u4e16\u754c\u6536\u96c6\u7684\u6570\u636e\u3002\u5728\u91ce\u5916\u8c03\u67e5\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u524d\u5f80\u4e00\u4e2a\u5730\u70b9\u5e76\u7528\u4ed4\u5668\u6d4b\u91cf\u6c14\u6e29\u3001\u98ce\u901f\u548c\u6e7f\u5ea6\u7b49\u6307\u6807\u3002\u539f\u59cb\u6570\u636e\u5f88\u6709\u4ef7\u5024\uff0c\u56e0\u4e3a\u5b83\u9488\u5bf9\u60a8\u7684\u8c03\u67e5\u95ee\u9898\uff0c\u5e76\u5728\u53d7\u63a7\u6761\u4ef6\u4e0b\u6536\u96c6\u3002" },
            { type: "highlight", en: "Key steps in collecting fieldwork data: Choose your measurement locations based on your sampling method. Carry out a risk assessment \u2014 identify hazards and how to stay safe. Use instruments correctly and record readings immediately. Measure at the same time across all locations. Record all data in a clear table, including date, time, location, and conditions.", zh: "\u6536\u96c6\u91ce\u5916\u8c03\u67e5\u6570\u636e\u7684\u5173\u952e\u6b65\u9aa4\uff1a\u6839\u636e\u62bd\u6837\u65b9\u6cd5\u9009\u62e9\u6d4b\u91cf\u5730\u70b9\u3002\u8fdb\u884c\u98ce\u9669\u8bc4\u4f30\u2014\u2014\u8bc6\u522b\u5371\u9669\u5e76\u4e86\u89e3\u5982\u4f55\u4fdd\u8bc1\u5b89\u5168\u3002\u6b63\u786e\u4f7f\u7528\u4ed4\u5668\u5e76\u7acb\u5373\u8bb0\u5f55\u8bfb\u6570\u3002\u5728\u6240\u6709\u5730\u70b9\u5728\u76f8\u540c\u65f6\u95f4\u6d4b\u91cf\u3002\u5c06\u6240\u6709\u6570\u636e\u6e05\u6670\u5730\u8bb0\u5f55\u5728\u8868\u683c\u4e2d\uff0c\u5305\u62ec\u65e5\u671f\u3001\u65f6\u95f4\u3001\u5730\u70b9\u548c\u6761\u4ef6\u3002" },
            { type: "text", en: "Reliability means the data would give the same result if the investigation were repeated under the same conditions. Consistency means following the same method each time data is collected. Both are important because inconsistent or unreliable data makes it impossible to draw valid conclusions. If measurements are taken at different times, in different ways, the data cannot be fairly compared.", zh: "\u53ef\u9760\u6027\u662f\u6307\u5728\u76f8\u540c\u6761\u4ef6\u4e0b\u91cd\u590d\u8c03\u67e5\u65f6\uff0c\u6570\u636e\u4f1a\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\u3002\u4e00\u81f4\u6027\u662f\u6307\u6bcf\u6b21\u6536\u96c6\u6570\u636e\u65f6\u9075\u5b88\u76f8\u540c\u7684\u65b9\u6cd5\u3002\u4e24\u8005\u90fd\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u4e0d\u4e00\u81f4\u6216\u4e0d\u53ef\u9760\u7684\u6570\u636e\u5c06\u65e0\u6cd5\u5f97\u51fa\u6709\u6548\u7684\u7ed3\u8bba\u3002\u5982\u679c\u6d4b\u91cf\u65f6\u95f4\u4e0d\u540c\u3001\u65b9\u5f0f\u4e0d\u540c\uff0c\u6570\u636e\u5c31\u65e0\u6cd5\u516c\u5e73\u6bd4\u8f83\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Primary data", zh: "\u539f\u59cb\u6570\u636e", defEn: "Data collected directly by the researcher from the real world, such as measurements taken during fieldwork.", defZh: "\u7814\u7a76\u8005\u76f4\u63a5\u4ece\u73b0\u5b9e\u4e16\u754c\u6536\u96c6\u7684\u6570\u636e\uff0c\u4f8b\u5982\u91ce\u5916\u8c03\u67e5\u671f\u95f4\u8fdb\u884c\u7684\u6d4b\u91cf\u3002" },
            { en: "Secondary data", zh: "\u4e8c\u624b\u6570\u636e", defEn: "Data collected by someone else, such as government statistics, published maps, or online weather records.", defZh: "\u7531\u4ed6\u4eba\u6536\u96c6\u7684\u6570\u636e\uff0c\u5982\u653f\u5e9c\u7edf\u8ba1\u6570\u636e\u3001\u516c\u5f00\u5730\u56fe\u6216\u7f51\u7edc\u5929\u6c14\u8bb0\u5f55\u3002" },
            { en: "Reliability", zh: "\u53ef\u9760\u6027", defEn: "The degree to which a measurement or method would give the same result if repeated.", defZh: "\u91cd\u590d\u6d4b\u91cf\u6216\u65b9\u6cd5\u5f97\u5230\u76f8\u540c\u7ed3\u679c\u7684\u7a0b\u5ea6\u3002" },
            { en: "Validity", zh: "\u6709\u6548\u6027", defEn: "The degree to which data actually measures what it is supposed to measure.", defZh: "\u6570\u636e\u5b9e\u9645\u6d4b\u91cf\u5230\u5b83\u5e94\u8be5\u6d4b\u91cf\u7684\u5185\u5bb9\u7684\u7a0b\u5ea6\u3002" },
          ],
        },
        { type: "image", caption: "A weather station in the field \u2014 showing the kind of systematic data collection setup used when conducting a geographical investigation into microclimates.", captionZh: "\u91ce\u5916\u6c14\u8c61\u7ad9\u2014\u2014\u5c55\u793a\u8fdb\u884c\u5c0f\u6c14\u5019\u5730\u7406\u8c03\u67e5\u65f6\u6240\u7528\u7684\u7cfb\u7edf\u6027\u6570\u636e\u6536\u96c6\u8bbe\u7f6e\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/WeatherStation2.JPG", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Fieldwork Principle", labelZh: "\u91ce\u5916\u8c03\u67e5\u539f\u5219", en: "Primary data collected during fieldwork must be consistent and reliable to be useful. Risk assessments protect safety. Measurements should be taken at the same time and using the same method across all locations so that the data can be fairly compared.", zh: "\u91ce\u5916\u8c03\u67e5\u6536\u96c6\u7684\u539f\u59cb\u6570\u636e\u5fc5\u987b\u4e00\u81f4\u4e14\u53ef\u9760\uff0c\u624d\u80fd\u53d1\u6325\u4f5c\u7528\u3002\u98ce\u9669\u8bc4\u4f30\u4fdd\u969c\u5b89\u5168\u3002\u5e94\u5728\u6240\u6709\u5730\u70b9\u5728\u76f8\u540c\u65f6\u95f4\u5e76\u4f7f\u7528\u76f8\u540c\u65b9\u6cd5\u8fdb\u884c\u6d4b\u91cf\uff0c\u4ee5\u4fbf\u5bf9\u6570\u636e\u8fdb\u884c\u516c\u5e73\u6bd4\u8f83\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Give two reasons why it is important to carry out a risk assessment before fieldwork.", qZh: "\u5404\u5217\u4e24\u4e2a\u539f\u56e0\uff0c\u8bf4\u660e\u4e3a\u4ec0\u4e48\u91ce\u5916\u8c03\u67e5\u524d\u8fdb\u884c\u98ce\u9669\u8bc4\u4f30\u5f88\u91cd\u8981\u3002", aEn: "First, a risk assessment identifies hazards before the investigation begins, such as uneven ground, traffic, or weather conditions, so that students can take precautions. Second, it helps teachers and students make decisions about equipment, supervision, and what to do if something goes wrong, making the fieldwork safer for everyone.", aZh: "\u7b2c\u4e00\uff0c\u98ce\u9669\u8bc4\u4f30\u5728\u8c03\u67e5\u5f00\u59cb\u524d\u8bc6\u522b\u5371\u9669\uff0c\u5982\u4e0d\u5e73\u5766\u7684\u5730\u9762\u3001\u8f66\u6d41\u6216\u5929\u6c14\u72b6\u51b5\uff0c\u4e8e\u662f\u5b66\u751f\u53ef\u4ee5\u63a1\u53d6\u9884\u9632\u63aa\u65bd\u3002\u7b2c\u4e8c\uff0c\u5b83\u5e2e\u52a9\u5e08\u751f\u5c31\u8bbe\u5907\u3001\u76d1\u7763\u548c\u5e94\u5bf9\u7d27\u6025\u60c5\u51b5\u505a\u51fa\u51b3\u7b56\uff0c\u4f7f\u91ce\u5916\u8c03\u67e5\u5bf9\u6240\u6709\u4eba\u6765\u8bf4\u66f4\u52a0\u5b89\u5168\u3002" },
            { qEn: "What is the difference between primary and secondary data? Give one example of each.", qZh: "\u539f\u59cb\u6570\u636e\u548c\u4e8c\u624b\u6570\u636e\u6709\u4ec0\u4e48\u533a\u522b\uff1f\u5404\u4e3e\u4e00\u4e2a\u4f8b\u5b50\u3002", aEn: "Primary data is collected directly by the researcher \u2014 for example, temperature readings taken at different points around the school during fieldwork. Secondary data is collected by someone else \u2014 for example, historical rainfall records from the Met Office or weather data downloaded from an online GIS tool.", aZh: "\u539f\u59cb\u6570\u636e\u7531\u7814\u7a76\u8005\u76f4\u63a5\u6536\u96c6\u2014\u2014\u4f8b\u5982\u91ce\u5916\u8c03\u67e5\u671f\u95f4\u5728\u5b66\u6821\u4e0d\u540c\u5730\u70b9\u8bb0\u5f55\u7684\u6c14\u6e29\u8bfb\u6570\u3002\u4e8c\u624b\u6570\u636e\u7531\u4ed6\u4eba\u6536\u96c6\u2014\u2014\u4f8b\u5982\u6c14\u8c61\u5c40\u7684\u5386\u53f2\u964d\u96e8\u91cf\u8bb0\u5f55\u6216\u4ece\u7f51\u7edcGIS\u5de5\u5177\u4e0b\u8f7d\u7684\u5929\u6c14\u6570\u636e\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What is primary data?",
          qZh: "\u4ec0\u4e48\u662f\u539f\u59cb\u6570\u636e\uff1f",
          opts: [
            { en: "Data downloaded from a government website", zh: "\u4ece\u653f\u5e9c\u7f51\u7ad9\u4e0b\u8f7d\u7684\u6570\u636e" },
            { en: "Data collected directly by the researcher during fieldwork", zh: "\u7814\u7a76\u8005\u5728\u91ce\u5916\u8c03\u67e5\u671f\u95f4\u76f4\u63a5\u6536\u96c6\u7684\u6570\u636e" },
            { en: "Data taken from a published textbook", zh: "\u6765\u81ea\u5df2\u51fa\u7248\u6559\u79d1\u4e66\u7684\u6570\u636e" },
            { en: "Data collected by a weather station last year", zh: "\u6c14\u8c61\u7ad9\u53bb\u5e74\u6536\u96c6\u7684\u6570\u636e" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! Primary data is collected directly by the researcher \u2014 in this case, during fieldwork at the school. It is specific to the investigation and collected under controlled conditions.",
          explainCorrectZh: "\u6b63\u786e\uff01\u539f\u59cb\u6570\u636e\u7531\u7814\u7a76\u8005\u76f4\u63a5\u6536\u96c6\u2014\u2014\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u662f\u5728\u5b66\u6821\u91ce\u5916\u8c03\u67e5\u671f\u95f4\u3002\u5b83\u9488\u5bf9\u8c03\u67e5\u95ee\u9898\uff0c\u5e76\u5728\u53d7\u63a7\u6761\u4ef6\u4e0b\u6536\u96c6\u3002",
          explainWrongEn: "Not quite. Data from websites, textbooks, or other weather stations are all secondary data \u2014 collected by someone else. Primary data means you collect it yourself during the investigation.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6765\u81ea\u7f51\u7ad9\u3001\u6559\u79d1\u4e66\u6216\u5176\u4ed6\u6c14\u8c61\u7ad9\u7684\u6570\u636e\u90fd\u662f\u4e8c\u624b\u6570\u636e\u2014\u2014\u7531\u4ed6\u4eba\u6536\u96c6\u3002\u539f\u59cb\u6570\u636e\u662f\u6307\u4f60\u5728\u8c03\u67e5\u671f\u95f4\u4eb2\u81ea\u6536\u96c6\u7684\u6570\u636e\u3002",
        },
      ],
    },

    /* ========== Lesson 9 ========== */
    {
      num: 9,
      badge: "A",
      title: "Data Analysis",
      titleZh: "\u6570\u636e\u5206\u6790",
      subtitle: "Geographers use graphs, wind roses, and scatter graphs to reveal patterns hidden in raw data.",
      subtitleZh: "\u5730\u7406\u5b66\u5bb6\u7528\u56fe\u8868\u3001\u98ce\u73ab\u548c\u6563\u70b9\u56fe\u6765\u63ed\u793a\u539f\u59cb\u6570\u636e\u4e2d\u9690\u85cf\u7684\u89c4\u5f8b\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can describe how different graph types are used to analyse weather data.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e0d\u540c\u56fe\u8868\u7c7b\u578b\u5982\u4f55\u7528\u4e8e\u5206\u6790\u5929\u6c14\u6570\u636e\u3002" },
            { en: "I can read a wind rose and describe wind patterns.", zh: "\u6211\u80fd\u8bfb\u53d6\u98ce\u73ab\u5e76\u63cf\u8ff0\u98ce\u5411\u89c4\u5f8b\u3002" },
            { en: "I can use a scatter graph to identify relationships between variables.", zh: "\u6211\u80fd\u7528\u6563\u70b9\u56fe\u8bc6\u522b\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "Once fieldwork data has been collected, geographers analyse it using a range of graphs and visual tools. Each type of graph is suited to a different purpose. Bar graphs compare values across different locations. Scatter graphs show whether two variables are related. Wind roses show the frequency and direction of wind. Word clouds can summarise qualitative data.", zh: "\u91ce\u5916\u8c03\u67e5\u6570\u636e\u6536\u96c6\u5b8c\u6210\u540e\uff0c\u5730\u7406\u5b66\u5bb6\u7528\u5404\u79cd\u56fe\u8868\u548c\u53ef\u89c6\u5316\u5de5\u5177\u8fdb\u884c\u5206\u6790\u3002\u6bcf\u79cd\u56fe\u8868\u7c7b\u578b\u9002\u5408\u4e0d\u540c\u7684\u76ee\u7684\u3002\u67f1\u72b6\u56fe\u6bd4\u8f83\u4e0d\u540c\u5730\u70b9\u7684\u6570\u636e\u3002\u6563\u70b9\u56fe\u663e\u793a\u4e24\u4e2a\u53d8\u91cf\u662f\u5426\u76f8\u5173\u3002\u98ce\u73ab\u663e\u793a\u98ce\u7684\u9891\u7387\u548c\u65b9\u5411\u3002\u8bcd\u4e91\u53ef\u4ee5\u6c47\u603b\u5b9a\u6027\u6570\u636e\u3002" },
            { type: "highlight", en: "Reading a wind rose: A wind rose shows the direction wind comes from and how often wind blows from each direction. Longer arms on the wind rose indicate that wind blows from that direction more frequently. A wind rose can reveal whether a site is dominated by winds from one direction, which helps explain microclimate differences between exposed and sheltered sites.", zh: "\u8bfb\u53d6\u98ce\u73ab\uff1a\u98ce\u73ab\u663e\u793a\u98ce\u7684\u6765\u5411\u548c\u5404\u65b9\u5411\u98ce\u7684\u9891\u7387\u3002\u98ce\u73ab\u4e0a\u8f83\u957f\u7684\u81c2\u8868\u793a\u98ce\u4ece\u8be5\u65b9\u5411\u5439\u6765\u7684\u9891\u7387\u8f83\u9ad8\u3002\u98ce\u73ab\u53ef\u4ee5\u663e\u793a\u4e00\u4e2a\u5730\u70b9\u662f\u5426\u4ee5\u67d0\u4e00\u65b9\u5411\u7684\u98ce\u4e3a\u4e3b\uff0c\u8fd9\u6709\u52a9\u4e8e\u89e3\u91ca\u66b4\u9732\u548c\u906e\u853d\u5730\u70b9\u4e4b\u95f4\u7684\u5c0f\u6c14\u5019\u5dee\u5f02\u3002" },
            { type: "text", en: "A scatter graph plots two variables against each other to see whether there is a relationship. For example, plotting wind speed against temperature across different school locations might reveal that windier spots are colder. If the points on a scatter graph form a clear line or curve, this suggests a correlation between the two variables.", zh: "\u6563\u70b9\u56fe\u5c06\u4e24\u4e2a\u53d8\u91cf\u76f8\u4e92\u5bf9\u6bd4\uff0c\u4ee5\u67e5\u770b\u5b83\u4eec\u4e4b\u95f4\u662f\u5426\u5b58\u5728\u5173\u7cfb\u3002\u4f8b\u5982\uff0c\u5c06\u5b66\u6821\u4e0d\u540c\u5730\u70b9\u7684\u98ce\u901f\u4e0e\u6c14\u6e29\u7ed8\u5236\u5728\u6563\u70b9\u56fe\u4e0a\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u98ce\u5ea6\u8f83\u5927\u7684\u5730\u70b9\u6e29\u5ea6\u8f83\u4f4e\u3002\u5982\u679c\u6563\u70b9\u56fe\u4e0a\u7684\u70b9\u5f62\u6210\u4e00\u6761\u6e05\u6670\u7684\u76f4\u7ebf\u6216\u66f2\u7ebf\uff0c\u8fd9\u8bf4\u660e\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u5b58\u5728\u76f8\u5173\u6027\u3002" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Wind rose", zh: "\u98ce\u73ab", defEn: "A diagram showing the frequency and direction of wind at a location.", defZh: "\u663e\u793a\u4e00\u4e2a\u5730\u70b9\u98ce\u7684\u9891\u7387\u548c\u65b9\u5411\u7684\u56fe\u8868\u3002" },
            { en: "Scatter graph", zh: "\u6563\u70b9\u56fe", defEn: "A graph that plots two variables against each other to show whether they are related.", defZh: "\u5c06\u4e24\u4e2a\u53d8\u91cf\u76f8\u4e92\u5bf9\u6bd4\u4ee5\u663e\u793a\u5b83\u4eec\u662f\u5426\u76f8\u5173\u7684\u56fe\u8868\u3002" },
            { en: "Correlation", zh: "\u76f8\u5173\u6027", defEn: "A relationship between two variables where one tends to change when the other changes.", defZh: "\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u5176\u4e2d\u4e00\u4e2a\u53d8\u91cf\u53d1\u751f\u53d8\u5316\u65f6\u53e6\u4e00\u4e2a\u53d8\u91cf\u4e5f\u5c31\u53d1\u751f\u53d8\u5316\u3002" },
            { en: "Bar graph", zh: "\u67f1\u72b6\u56fe", defEn: "A graph using bars of different heights to compare values between categories or locations.", defZh: "\u4f7f\u7528\u4e0d\u540c\u9ad8\u5ea6\u7684\u67f1\u5f62\u6bd4\u8f83\u4e0d\u540c\u7c7b\u522b\u6216\u5730\u70b9\u6570\u636e\u7684\u56fe\u8868\u3002" },
          ],
        },
        { type: "image", caption: "A wind rose diagram \u2014 used by geographers to display the frequency and direction of winds at a location, a key output of a microclimate investigation.", captionZh: "\u98ce\u73ab\u56fe\u2014\u2014\u5730\u7406\u5b66\u5bb6\u7528\u4e8e\u5c55\u793a\u67d0\u5730\u70b9\u98ce\u5411\u548c\u98ce\u9891\u7684\u56fe\u8868\uff0c\u662f\u5c0f\u6c14\u5019\u8c03\u67e5\u7684\u91cd\u8981\u7ed3\u679c\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wind_rose.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Geographical Skill: Graph Analysis", labelZh: "\u5730\u7406\u5b66\u6280\u80fd\uff1a\u56fe\u8868\u5206\u6790", en: "Bar graphs compare values across locations. Scatter graphs reveal relationships between two variables. Wind roses show frequency and direction of wind. Each graph type serves a different analytical purpose \u2014 choosing the right one depends on the question being answered.", zh: "\u67f1\u72b6\u56fe\u6bd4\u8f83\u5404\u5730\u70b9\u7684\u6570\u636e\u3002\u6563\u70b9\u56fe\u63ed\u793a\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u98ce\u73ab\u663e\u793a\u98ce\u7684\u9891\u7387\u548c\u65b9\u5411\u3002\u6bcf\u79cd\u56fe\u8868\u7c7b\u578b\u670d\u52a1\u4e8e\u4e0d\u540c\u7684\u5206\u6790\u76ee\u7684\u2014\u2014\u9009\u62e9\u54ea\u79cd\u56fe\u8868\u53d6\u51b3\u4e8e\u6240\u8981\u56de\u7b54\u7684\u95ee\u9898\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Why would a scatter graph be useful for investigating whether windier locations in a school are colder?", qZh: "\u4e3a\u4ec0\u4e48\u6563\u70b9\u56fe\u6709\u52a9\u4e8e\u8c03\u67e5\u5b66\u6821\u4e2d\u98ce\u9053\u8f83\u5f3a\u7684\u5730\u70b9\u662f\u5426\u6e29\u5ea6\u8f83\u4f4e\uff1f", aEn: "A scatter graph plots wind speed against temperature for each location. If windier sites consistently have lower temperatures, the points on the graph will form a pattern showing a negative correlation \u2014 as wind speed increases, temperature decreases. This would provide evidence that wind is a factor in causing temperature differences across the school.", aZh: "\u6563\u70b9\u56fe\u5c06\u6bcf\u4e2a\u5730\u70b9\u7684\u98ce\u901f\u4e0e\u6c14\u6e29\u5bf9\u6bd4\u3002\u5982\u679c\u98ce\u5ea2\u8f83\u5927\u7684\u5730\u70b9\u6301\u7eed\u5e73\u5e72\u6c14\u6e29\u8f83\u4f4e\uff0c\u56fe\u4e0a\u7684\u70b9\u5c06\u5f62\u6210\u4e00\u79cd\u8d1f\u76f8\u5173\u7684\u89c4\u5f8b\u2014\u2014\u98ce\u901f\u589e\u52a0\uff0c\u6c14\u6e29\u4e0b\u964d\u3002\u8fd9\u5c06\u63d0\u4f9b\u8bc1\u636e\uff0c\u8bc1\u660e\u98ce\u662f\u9020\u6210\u5b66\u6821\u5185\u6c14\u6e29\u5dee\u5f02\u7684\u56e0\u7d20\u3002" },
            { qEn: "What does a longer arm on a wind rose tell you?", qZh: "\u98ce\u73ab\u4e0a\u8f83\u957f\u7684\u81c2\u544a\u8bc9\u4f60\u4ec0\u4e48\u4fe1\u606f\uff1f", aEn: "A longer arm on a wind rose shows that wind blows from that direction more frequently. For example, if the west arm is longest, wind most often comes from the west. This is useful because it shows the prevailing wind direction, which helps explain which sides of the school will be most exposed and which will be most sheltered.", aZh: "\u98ce\u73ab\u4e0a\u8f83\u957f\u7684\u81c2\u8868\u660e\u98ce\u4ece\u8be5\u65b9\u5411\u5439\u6765\u7684\u9891\u7387\u66f4\u9ad8\u3002\u4f8b\u5982\uff0c\u5982\u679c\u897f\u4fa7\u7684\u81c2\u6700\u957f\uff0c\u8bf4\u660e\u98ce\u6700\u5e38\u4ece\u897f\u65b9\u5439\u6765\u3002\u8fd9\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5b83\u663e\u793a\u4e86\u76db\u884c\u98ce\u65b9\uff0c\u6709\u52a9\u4e8e\u89e3\u91ca\u5b66\u6821\u54ea\u4e9b\u4e00\u4fa7\u66b4\u9732\u7a0b\u5ea6\u6700\u5f3a\u3001\u54ea\u4e9b\u4e00\u4fa7\u906e\u853d\u6548\u679c\u6700\u597d\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "What does a scatter graph show?",
          qZh: "\u6563\u70b9\u56fe\u663e\u793a\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The frequency of wind from each direction", zh: "\u98ce\u4ece\u5404\u65b9\u5411\u5439\u6765\u7684\u9891\u7387" },
            { en: "The relationship between two variables", zh: "\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb" },
            { en: "Monthly rainfall totals for a location", zh: "\u4e00\u4e2a\u5730\u70b9\u7684\u6708\u964d\u96e8\u91cf\u603b\u91cf" },
            { en: "The proportion of time spent in different weather conditions", zh: "\u5728\u4e0d\u540c\u5929\u6c14\u72b6\u51b5\u4e0b\u82b1\u8d39\u65f6\u95f4\u7684\u6bd4\u4f8b" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! A scatter graph plots two variables against each other to show whether they are related. A clear pattern of points suggests a correlation.",
          explainCorrectZh: "\u6b63\u786e\uff01\u6563\u70b9\u56fe\u5c06\u4e24\u4e2a\u53d8\u91cf\u76f8\u4e92\u5bf9\u6bd4\uff0c\u4ee5\u663e\u793a\u5b83\u4eec\u662f\u5426\u76f8\u5173\u3002\u70b9\u7684\u6e05\u6670\u89c4\u5f8b\u8868\u660e\u5b58\u5728\u76f8\u5173\u6027\u3002",
          explainWrongEn: "Not quite. Wind direction frequency is shown on a wind rose. Monthly rainfall uses a bar graph. Proportions use a pie chart. The correct answer is the relationship between two variables.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u98ce\u5411\u9891\u7387\u7528\u98ce\u73ab\u663e\u793a\u3002\u6708\u964d\u96e8\u91cf\u7528\u67f1\u72b6\u56fe\u3002\u6bd4\u4f8b\u7528\u9970\u5207\u56fe\u3002\u6b63\u786e\u7b54\u6848\u662f\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u3002",
        },
      ],
    },

    /* ========== Lesson 10 ========== */
    {
      num: 10,
      badge: "E",
      title: "Concluding our investigation",
      titleZh: "\u603b\u7ed3\u6211\u4eec\u7684\u8c03\u67e5",
      subtitle: "A good geographical conclusion links results to the original question, evaluates the method, and suggests improvements.",
      subtitleZh: "\u4e00\u4e2a\u597d\u7684\u5730\u7406\u5b66\u7ed3\u8bba\u9700\u5c06\u7ed3\u679c\u4e0e\u539f\u59cb\u95ee\u9898\u76f8\u8054\u7cfb\uff0c\u8bc4\u4f30\u65b9\u6cd5\u5e76\u63d0\u51fa\u6539\u8fdb\u5efa\u8bae\u3002",
      sections: [
        {
          type: "goals",
          items: [
            { en: "I can write a conclusion that links evidence to the investigation question.", zh: "\u6211\u80fd\u64b0\u5199\u4e00\u4e2a\u5c06\u8bc1\u636e\u4e0e\u8c03\u67e5\u95ee\u9898\u76f8\u8054\u7cfb\u7684\u7ed3\u8bba\u3002" },
            { en: "I can evaluate the reliability and validity of fieldwork data.", zh: "\u6211\u80fd\u8bc4\u4f30\u91ce\u5916\u8c03\u67e5\u6570\u636e\u7684\u53ef\u9760\u6027\u548c\u6709\u6548\u6027\u3002" },
            { en: "I can suggest improvements to the investigation method.", zh: "\u6211\u80fd\u5c31\u8c03\u67e5\u65b9\u6cd5\u63d0\u51fa\u6539\u8fdb\u5efa\u8bae\u3002" },
          ],
        },
        {
          type: "intro",
          content: [
            { type: "text", en: "A geographical conclusion does three things: it answers the original question using evidence from the data; it evaluates whether the data is reliable and valid; and it suggests how the investigation could be improved. A strong conclusion does not just summarise \u2014 it analyses and reflects.", zh: "\u4e00\u4e2a\u5730\u7406\u5b66\u7ed3\u8bba\u9700\u5b8c\u6210\u4e09\u4e2a\u4efb\u52a1\uff1a\u7528\u6570\u636e\u8bc1\u636e\u56de\u7b54\u539f\u59cb\u95ee\u9898\uff1b\u8bc4\u4f30\u6570\u636e\u662f\u5426\u53ef\u9760\u548c\u6709\u6548\uff1b\u5e76\u5c31\u5982\u4f55\u6539\u8fdb\u8c03\u67e5\u63d0\u51fa\u5efa\u8bae\u3002\u4e00\u4e2a\u6709\u529b\u7684\u7ed3\u8bba\u4e0d\u4ec5\u4ec5\u662f\u5c0f\u7ed3\u2014\u2014\u5b83\u9700\u8981\u5206\u6790\u548c\u53cd\u601d\u3002" },
            { type: "highlight", en: "How to write a conclusion: 1. Answer: state whether the data supports the hypothesis. Use specific evidence. 2. Evaluate: consider whether the data is reliable (would it give the same results if repeated?) and valid (does it actually measure what we wanted to measure?). 3. Improve: suggest one or two specific changes to the method that would make future results more reliable.", zh: "\u5982\u4f55\u64b0\u5199\u7ed3\u8bba\uff1a\n1.\u56de\u7b54\uff1a\u8bf4\u660e\u6570\u636e\u662f\u5426\u652f\u6301\u5047\u8bbe\u3002\u4f7f\u7528\u5177\u4f53\u8bc1\u636e\u3002\n2.\u8bc4\u4f30\uff1a\u8003\u8651\u6570\u636e\u662f\u5426\u53ef\u9760\uff08\u91cd\u590d\u8c03\u67e5\u662f\u5426\u4f1a\u5f97\u5230\u76f8\u540c\u7ed3\u679c\uff1f\uff09\u548c\u6709\u6548\uff08\u5b83\u5b9e\u9645\u4e0a\u6d4b\u91cf\u4e86\u6211\u4eec\u60f3\u8981\u6d4b\u91cf\u7684\u5185\u5bb9\u5417\uff1f\uff09\u3002\n3.\u6539\u8fdb\uff1a\u63d0\u51fa\u4e00\u4e24\u4e2a\u5177\u4f53\u7684\u65b9\u6cd5\u6539\u8fdb\u5efa\u8bae\uff0c\u4f7f\u672a\u6765\u7ed3\u679c\u66f4\u52a0\u53ef\u9760\u3002" },
            { type: "example", en: "Example conclusion structure: \u2018The data supports the hypothesis that the south-facing sheltered side of the school has higher temperatures than the exposed north-facing side (Answer). However, data was only collected on one day, which means it may not be representative of all weather conditions (Evaluate). In future, data should be collected on several different days to improve reliability (Improve).\u2019", zh: "\u7ed3\u8bba\u7ed3\u6784\u793a\u4f8b\uff1a\u201c\u6570\u636e\u652f\u6301\u5047\u8bbe\uff0c\u5373\u5b66\u6821\u5efa\u7b51\u7269\u671d\u5357\u7684\u906e\u853d\u4e00\u4fa7\u6c14\u6e29\u9ad8\u4e8e\u66b4\u9732\u7684\u671d\u5317\u4e00\u4fa7\uff08\u56de\u7b54\uff09\u3002\u7136\u800c\uff0c\u6570\u636e\u4ec5\u5728\u4e00\u5929\u5185\u6536\u96c6\uff0c\u53ef\u80fd\u65e0\u6cd5\u4ee3\u8868\u6240\u6709\u5929\u6c14\u72b6\u51b5\uff08\u8bc4\u4f30\uff09\u3002\u672a\u6765\u5e94\u5728\u591a\u4e2a\u4e0d\u540c\u5929\u6536\u96c6\u6570\u636e\u4ee5\u63d0\u9ad8\u53ef\u9760\u6027\uff08\u6539\u8fdb\uff09\u3002\u201d" },
          ],
        },
        {
          type: "vocab",
          words: [
            { en: "Conclusion", zh: "\u7ed3\u8bba", defEn: "A statement that answers the investigation question using evidence from the data.", defZh: "\u7528\u6570\u636e\u8bc1\u636e\u56de\u7b54\u8c03\u67e5\u95ee\u9898\u7684\u9648\u8ff0\u3002" },
            { en: "Evaluation", zh: "\u8bc4\u4f30", defEn: "A judgement about the quality of data or methods, including their strengths and limitations.", defZh: "\u5bf9\u6570\u636e\u6216\u65b9\u6cd5\u7684\u8d28\u91cf\u4f5c\u51fa\u5224\u65ad\uff0c\u5305\u62ec\u5176\u4f18\u52bf\u548c\u5c40\u9650\u6027\u3002" },
            { en: "Limitation", zh: "\u5c40\u9650\u6027", defEn: "A weakness or problem with a method or data set that may have affected the results.", defZh: "\u65b9\u6cd5\u6216\u6570\u636e\u96c6\u7684\u5f31\u70b9\u6216\u95ee\u9898\uff0c\u53ef\u80fd\u5f71\u54cd\u4e86\u7ed3\u679c\u3002" },
            { en: "Improvement", zh: "\u6539\u8fdb", defEn: "A specific change to the method that would make future data more reliable or valid.", defZh: "\u5bf9\u65b9\u6cd5\u7684\u5177\u4f53\u6539\u52a8\uff0c\u4f7f\u672a\u6765\u6570\u636e\u66f4\u53ef\u9760\u6216\u66f4\u6709\u6548\u3002" },
          ],
        },
        { type: "image", caption: "A wind rose plot \u2014 an example of the data presentation technique used to communicate findings from a geographical weather investigation.", captionZh: "\u98ce\u73ab\u6570\u636e\u56fe\u2014\u2014\u5c55\u793a\u5929\u6c14\u5730\u7406\u8c03\u67e5\u7ed3\u679c\u65f6\u6240\u7528\u6570\u636e\u5c55\u793a\u6280\u672f\u7684\u8303\u4f8b\u3002", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wind_rose_plot.jpg", source: "Wikimedia Commons" },
        { type: "source", labelEn: "Investigation Conclusion Framework", labelZh: "\u8c03\u67e5\u7ed3\u8bba\u6846\u67b6", en: "A strong conclusion answers the question with evidence, evaluates the reliability and validity of the data, and suggests specific improvements. It should refer back to the original hypothesis and use geographical vocabulary.", zh: "\u4e00\u4e2a\u6709\u529b\u7684\u7ed3\u8bba\u9700\u7528\u8bc1\u636e\u56de\u7b54\u95ee\u9898\uff0c\u8bc4\u4f30\u6570\u636e\u7684\u53ef\u9760\u6027\u548c\u6709\u6548\u6027\uff0c\u5e76\u63d0\u51fa\u5177\u4f53\u7684\u6539\u8fdb\u5efa\u8bae\u3002\u5e94\u56de\u5e94\u539f\u59cb\u5047\u8bbe\u5e76\u4f7f\u7528\u5730\u7406\u5b66\u8bcd\u6c47\u3002" },
        {
          type: "think",
          questions: [
            { qEn: "Write a brief conclusion for the microclimate investigation using the structure: Answer, Evaluate, Improve.", qZh: "\u6309\u7167\u201c\u56de\u7b54\u3001\u8bc4\u4f30\u3001\u6539\u8fdb\u201d\u7684\u7ed3\u6784\uff0c\u4e3a\u5c0f\u6c14\u5019\u8c03\u67e5\u64b0\u5199\u4e00\u4e2a\u7b80\u77ed\u7ed3\u8bba\u3002", aEn: "Answer: The data suggests that SHR does have a microclimate \u2014 sheltered locations near buildings were warmer and less windy than exposed open areas, supporting the hypothesis. Evaluate: However, data was only collected on one occasion, so it may not be representative of all days. Wind conditions on the day of collection may not reflect typical patterns. Improve: Collecting data on multiple days across different weather conditions would improve the reliability of the results.", aZh: "\u56de\u7b54\uff1a\u6570\u636e\u663e\u793aSHR\u5b66\u6821\u786e\u5b9e\u5b58\u5728\u5c0f\u6c14\u5019\u2014\u2014\u9760\u8fd1\u5efa\u7b51\u7269\u7684\u906e\u853d\u5730\u70b9\u6bd4\u66b4\u9732\u7684\u5f00\u9614\u5730\u5e26\u6c14\u6e29\u66f4\u9ad8\u3001\u98ce\u529b\u66f4\u5c0f\uff0c\u652f\u6301\u4e86\u5047\u8bbe\u3002\u8bc4\u4f30\uff1a\u7136\u800c\uff0c\u6570\u636e\u4ec5\u6536\u96c6\u4e86\u4e00\u6b21\uff0c\u53ef\u80fd\u65e0\u6cd5\u4ee3\u8868\u6240\u6709\u5929\u5019\u60c5\u51b5\u3002\u5f53\u5929\u7684\u98ce\u529b\u72b6\u51b5\u53ef\u80fd\u4e0d\u80fd\u53cd\u6620\u5178\u578b\u89c4\u5f8b\u3002\u6539\u8fdb\uff1a\u5728\u591a\u4e2a\u4e0d\u540c\u5929\u6c14\u72b6\u51b5\u4e0b\u6536\u96c6\u6570\u636e\u5c06\u63d0\u9ad8\u7ed3\u679c\u7684\u53ef\u9760\u6027\u3002" },
            { qEn: "Suggest one limitation of collecting weather data on only one day and explain how it affects the validity of the conclusion.", qZh: "\u6307\u51fa\u4ec5\u5728\u4e00\u5929\u5185\u6536\u96c6\u5929\u6c14\u6570\u636e\u7684\u4e00\u4e2a\u5c40\u9650\u6027\uff0c\u5e76\u89e3\u91ca\u5b83\u5982\u4f55\u5f71\u54cd\u7ed3\u8bba\u7684\u6709\u6548\u6027\u3002", aEn: "Collecting data on only one day is a limitation because the weather conditions on that day may be unusual. For example, a particularly calm day may show smaller differences in wind speed between locations than on a typical windy day. This means the conclusion may not apply to the school\u2019s microclimate under all weather conditions, reducing the validity of the findings.", aZh: "\u4ec5\u5728\u4e00\u5929\u5185\u6536\u96c6\u6570\u636e\u662f\u4e00\u4e2a\u5c40\u9650\u6027\uff0c\u56e0\u4e3a\u5f53\u5929\u7684\u5929\u6c14\u72b6\u51b5\u53ef\u80fd\u662f\u5f02\u5e38\u7684\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u7279\u522b\u5e73\u9759\u7684\u5929\u53ef\u80fd\u663e\u793a\u5404\u5730\u70b9\u95f4\u98ce\u901f\u5dee\u5f02\u6bd4\u5178\u578b\u5927\u98ce\u5929\u5c0f\u3002\u8fd9\u610f\u5473\u7740\u7ed3\u8bba\u53ef\u80fd\u65e0\u6cd5\u9002\u7528\u4e8e\u6240\u6709\u5929\u6c14\u72b6\u51b5\u4e0b\u7684\u5b66\u6821\u5c0f\u6c14\u5019\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u7814\u7a76\u7ed3\u679c\u7684\u6709\u6548\u6027\u3002" },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following should a good geographical conclusion include?",
          qZh: "\u4e00\u4e2a\u597d\u7684\u5730\u7406\u5b66\u7ed3\u8bba\u5e94\u5305\u62ec\u4ee5\u4e0b\u54ea\u4e9b\u5185\u5bb9\uff1f",
          opts: [
            { en: "A list of all the equipment used during fieldwork", zh: "\u91ce\u5916\u8c03\u67e5\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u8bbe\u5907\u7684\u6e05\u5355" },
            { en: "An answer using evidence, an evaluation, and suggested improvements", zh: "\u7528\u8bc1\u636e\u4f5c\u51fa\u56de\u7b54\u3001\u8bc4\u4f30\u548c\u6539\u8fdb\u5efa\u8bae" },
            { en: "A copy of the raw data table", zh: "\u539f\u59cb\u6570\u636e\u8868\u7684\u526f\u672c" },
            { en: "A description of what the weather was like during fieldwork", zh: "\u91ce\u5916\u8c03\u67e5\u671f\u95f4\u5929\u6c14\u72b6\u51b5\u7684\u63cf\u8ff0" },
          ],
          correct: 1,
          explainCorrectEn: "Correct! A strong conclusion answers the question with evidence, evaluates the data, and suggests improvements. Equipment lists and raw data belong in the method and results sections, not the conclusion.",
          explainCorrectZh: "\u6b63\u786e\uff01\u4e00\u4e2a\u6709\u529b\u7684\u7ed3\u8bba\u9700\u7528\u8bc1\u636e\u56de\u7b54\u95ee\u9898\u3001\u8bc4\u4f30\u6570\u636e\u5e76\u63d0\u51fa\u6539\u8fdb\u5efa\u8bae\u3002\u8bbe\u5907\u6e05\u5355\u548c\u539f\u59cb\u6570\u636e\u5c5e\u4e8e\u65b9\u6cd5\u548c\u7ed3\u679c\u90e8\u5206\uff0c\u4e0d\u5c5e\u4e8e\u7ed3\u8bba\u3002",
          explainWrongEn: "Not quite. Equipment lists belong in the method section; raw data in results; weather descriptions are background. The conclusion should focus on answering the question with evidence, evaluating, and suggesting improvements.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u8bbe\u5907\u6e05\u5355\u5c5e\u4e8e\u65b9\u6cd5\u90e8\u5206\uff0c\u539f\u59cb\u6570\u636e\u5c5e\u4e8e\u7ed3\u679c\u90e8\u5206\uff0c\u5929\u6c14\u63cf\u8ff0\u5c5e\u4e8e\u80cc\u666f\u4ecb\u7ecd\u3002\u7ed3\u8bba\u5e94\u4e13\u6ce8\u4e8e\u7528\u8bc1\u636e\u56de\u7b54\u95ee\u9898\u3001\u8bc4\u4f30\u548c\u63d0\u51fa\u6539\u8fdb\u5efa\u8bae\u3002",
        },
      ],
    },

  ],
};

export default weatherClimate;
