import { Topic } from "./types";

export const heatingCooling: Topic = {
  slug: "heating-cooling",
  name: "Heating and Cooling",
  nameZh: "\u52a0\u70ed\u4e0e\u51b7\u5374",
  subject: "Science",
  subjectZh: "\u79d1\u5b66",
  year: "Year 8",
  lessons: [

    /* ========== Lesson 1 ========== */
    {
      num: 1,
      badge: "T",
      title: "Particle Theory: States of Matter",
      titleZh: "\u7c92\u5b50\u7406\u8bba\uff1a\u7269\u8d28\u7684\u72b6\u6001",
      subtitle: "Using the particle model to explain solids, liquids and gases.",
      subtitleZh: "\u7528\u7c92\u5b50\u6a21\u578b\u89e3\u91ca\u56fa\u4f53\u3001\u6db2\u4f53\u548c\u6c14\u4f53\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can name the three states of matter and describe the arrangement of particles in each.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u7269\u8d28\u7684\u4e09\u79cd\u72b6\u6001\uff0c\u5e76\u63cf\u8ff0\u6bcf\u79cd\u72b6\u6001\u4e2d\u7c92\u5b50\u7684\u6392\u5217\u65b9\u5f0f\u3002",
            },
            {
              en: "I can explain why solids and liquids cannot be compressed but gases can.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u56fa\u4f53\u548c\u6db2\u4f53\u4e0d\u80fd\u88ab\u538b\u7f29\uff0c\u800c\u6c14\u4f53\u53ef\u4ee5\u3002",
            },
            {
              en: "I can describe what happens to particles during changes of state.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u72b6\u6001\u53d8\u5316\u65f6\u7c92\u5b50\u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Everything around us is made of particles. Whether something is a solid, a liquid, or a gas depends on how those particles are arranged and how they move. This is called the particle model of matter.",
              zh: "\u6211\u4eec\u5468\u56f4\u7684\u4e00\u5207\u90fd\u7531\u7c92\u5b50\u6784\u6210\u3002\u67d0\u79cd\u7269\u8d28\u662f\u56fa\u4f53\u3001\u6db2\u4f53\u8fd8\u662f\u6c14\u4f53\uff0c\u53d6\u51b3\u4e8e\u8fd9\u4e9b\u7c92\u5b50\u7684\u6392\u5217\u65b9\u5f0f\u548c\u8fd0\u52a8\u65b9\u5f0f\u3002\u8fd9\u88ab\u79f0\u4e3a\u7269\u8d28\u7684\u7c92\u5b50\u6a21\u578b\u3002",
            },
            {
              type: "text",
              en: "In a solid, particles are packed tightly together in a regular arrangement. They can only vibrate in fixed positions and cannot move past each other. This is why solids have a fixed shape and fixed volume.",
              zh: "\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u4ee5\u89c4\u5219\u7684\u6392\u5217\u65b9\u5f0f\u7d27\u5bc6\u5730\u5835\u5728\u4e00\u8d77\u3002\u5b83\u4eec\u53ea\u80fd\u5728\u56fa\u5b9a\u4f4d\u7f6e\u4e0a\u632f\u52a8\uff0c\u4e0d\u80fd\u76f8\u4e92\u7a7f\u8fc7\u3002\u8fd9\u5c31\u662f\u56fa\u4f53\u5177\u6709\u56fa\u5b9a\u5f62\u72b6\u548c\u56fa\u5b9a\u4f53\u79ef\u7684\u539f\u56e0\u3002",
            },
            {
              type: "text",
              en: "In a liquid, particles are still close together and touching, but they are not in a fixed arrangement. They can slide past each other. This means a liquid has a fixed volume but takes the shape of its container.",
              zh: "\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u4ecd\u7136\u5f7c\u6b64\u7d27\u9760\u5e76\u76f8\u4e92\u63a5\u89e6\uff0c\u4f46\u6392\u5217\u4e0d\u56fa\u5b9a\u3002\u5b83\u4eec\u53ef\u4ee5\u76f8\u4e92\u6ed1\u52a8\u3002\u56e0\u6b64\uff0c\u6db2\u4f53\u4f53\u79ef\u56fa\u5b9a\u4f46\u5f62\u72b6\u968f\u5bb9\u5668\u800c\u53d8\u3002",
            },
            {
              type: "text",
              en: "In a gas, particles are far apart with large gaps between them. They move randomly in all directions and fill whatever space is available. Gases have no fixed shape and no fixed volume.",
              zh: "\u5728\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u4e4b\u95f4\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5b58\u5728\u5927\u91cf\u7a7a\u9699\u3002\u5b83\u4eec\u5411\u5404\u4e2a\u65b9\u5411\u968f\u673a\u8fd0\u52a8\uff0c\u5145\u6ee1\u4efb\u4f55\u53ef\u7528\u7a7a\u95f4\u3002\u6c14\u4f53\u65e0\u56fa\u5b9a\u5f62\u72b6\u4e5f\u65e0\u56fa\u5b9a\u4f53\u79ef\u3002",
            },
            {
              type: "highlight",
              en: "Key distinction: In a liquid, most particles are still touching each other. In a gas, the particles are NOT touching — there are large gaps between them. This is why gases can be compressed easily but liquids cannot.",
              zh: "\u91cd\u8981\u533a\u522b\uff1a\u5728\u6db2\u4f53\u4e2d\uff0c\u5927\u591a\u6570\u7c92\u5b50\u4ecd\u7136\u76f8\u4e92\u63a5\u89e6\u3002\u5728\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u5e76\u4e0d\u63a5\u89e6\u2014\u2014\u5b83\u4eec\u4e4b\u95f4\u6709\u5927\u91cf\u7a7a\u9699\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6c14\u4f53\u5bb9\u6613\u88ab\u538b\u7f29\u800c\u6db2\u4f53\u4e0d\u80fd\u88ab\u538b\u7f29\u7684\u539f\u56e0\u3002",
            },
            {
              type: "text",
              en: "When a substance changes state, its particles do not change — but the way they are arranged and how much energy they have does change. Melting, boiling, condensing, and freezing are all changes of state.",
              zh: "\u5f53\u7269\u8d28\u53d1\u751f\u72b6\u6001\u53d8\u5316\u65f6\uff0c\u7c92\u5b50\u672c\u8eab\u5e76\u4e0d\u6539\u53d8\u2014\u2014\u4f46\u5b83\u4eec\u7684\u6392\u5217\u65b9\u5f0f\u548c\u6240\u62e5\u6709\u7684\u80fd\u91cf\u786e\u5b9e\u53d1\u751f\u4e86\u53d8\u5316\u3002\u71b3\u5316\u3001\u6c38\u6c38\u3001\u51dd\u7ed3\u548c\u51b0\u7ed3\u90fd\u662f\u72b6\u6001\u53d8\u5316\u3002",
            },
            {
              type: "example",
              en: "Think of it this way: ice, liquid water, and steam are all made of exactly the same water particles — but the way those particles are arranged is completely different in each state. The particles themselves haven't changed at all.",
              zh: "\u8fd9\u6837\u60f3\u5427\uff1a\u51b0\u3001\u6db2\u6001\u6c34\u548c\u6c34\u84b8\u6c14\u90fd\u662f\u7531\u5b8c\u5168\u76f8\u540c\u7684\u6c34\u5206\u5b50\u6784\u6210\u7684\u2014\u2014\u4f46\u8fd9\u4e9b\u7c92\u5b50\u5728\u6bcf\u79cd\u72b6\u6001\u4e0b\u7684\u6392\u5217\u65b9\u5f0f\u5374\u5b8c\u5168\u4e0d\u540c\u3002\u7c92\u5b50\u672c\u8eab\u6839\u672c\u6ca1\u6709\u53d8\u5316\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Particle",
              zh: "\u7c92\u5b50",
              defEn: "A tiny piece of matter that makes up all substances.",
              defZh: "\u6784\u6210\u6240\u6709\u7269\u8d28\u7684\u6781\u5c0f\u7269\u8d28\u5355\u4f4d\u3002",
            },
            {
              en: "State of matter",
              zh: "\u7269\u8d28\u72b6\u6001",
              defEn: "The form a substance takes: solid, liquid, or gas.",
              defZh: "\u7269\u8d28\u5448\u73b0\u7684\u5f62\u5f0f\uff1a\u56fa\u4f53\u3001\u6db2\u4f53\u6216\u6c14\u4f53\u3002",
            },
            {
              en: "Vibrate",
              zh: "\u632f\u52a8",
              defEn: "To move back and forth rapidly around a fixed position, as particles do in a solid.",
              defZh: "\u5728\u56fa\u5b9a\u4f4d\u7f6e\u9644\u8fd1\u5feb\u901f\u6765\u56de\u8fd0\u52a8\uff0c\u56fa\u4f53\u4e2d\u7684\u7c92\u5b50\u5373\u662f\u5982\u6b64\u3002",
            },
            {
              en: "Change of state",
              zh: "\u72b6\u6001\u53d8\u5316",
              defEn: "When a substance changes from one state to another, such as melting (solid to liquid) or boiling (liquid to gas).",
              defZh: "\u7269\u8d28\u4ece\u4e00\u79cd\u72b6\u6001\u53d8\u4e3a\u53e6\u4e00\u79cd\u72b6\u6001\uff0c\u4f8b\u5982\u71b3\u5316\uff08\u56fa\u4f53\u53d8\u6db2\u4f53\uff09\u6216\u6c38\u6c38\uff08\u6db2\u4f53\u53d8\u6c14\u4f53\uff09\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "Particle diagrams showing the arrangement of particles in a solid, liquid, and gas",
          captionZh: "\u663e\u793a\u56fa\u4f53\u3001\u6db2\u4f53\u548c\u6c14\u4f53\u4e2d\u7c92\u5b50\u6392\u5217\u65b9\u5f0f\u7684\u7c92\u5b50\u56fe",
          source: "Wikimedia Commons",
          wikimediaFile: "Solid_liquid_gas.svg",
        },
        {
          type: "source",
          labelEn: "Key concept",
          labelZh: "\u6838\u5fc3\u6982\u5ff5",
          en: "From the revision notes: 'Solids have a fixed shape and volume. Liquids have a fixed volume but take the shape of their container. Gases have no fixed shape or volume and fill all available space. The difference is explained by particle arrangement and movement.'",
          zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u56fa\u4f53\u5177\u6709\u56fa\u5b9a\u7684\u5f62\u72b6\u548c\u4f53\u79ef\u3002\u6db2\u4f53\u4f53\u79ef\u56fa\u5b9a\u4f46\u5f62\u72b6\u968f\u5bb9\u5668\u800c\u53d8\u3002\u6c14\u4f53\u65e0\u56fa\u5b9a\u5f62\u72b6\u6216\u4f53\u79ef\uff0c\u5145\u6ee1\u6240\u6709\u53ef\u7528\u7a7a\u95f4\u3002\u8fd9\u4e9b\u5dee\u5f02\u90fd\u53ef\u4ee5\u7528\u7c92\u5b50\u6392\u5217\u548c\u8fd0\u52a8\u65b9\u5f0f\u6765\u89e3\u91ca\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why can a gas be compressed into a smaller space, but a solid cannot?",
              qZh: "\u4e3a\u4ec0\u4e48\u6c14\u4f53\u53ef\u4ee5\u88ab\u538b\u7f29\u5230\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u800c\u56fa\u4f53\u5374\u4e0d\u80fd\uff1f",
              aEn: "In a gas, the particles are far apart with large empty gaps between them. When you compress a gas, you are simply pushing those particles closer together, filling the gaps. In a solid, the particles are already packed tightly with almost no gaps, so there is nowhere for them to move — you cannot compress them further.",
              aZh: "\u5728\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u4e4b\u95f4\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5b58\u5728\u5927\u91cf\u7a7a\u9699\u3002\u538b\u7f29\u6c14\u4f53\u65f6\uff0c\u53ea\u662f\u5c06\u7c92\u5b50\u63a8\u5f97\u66f4\u8fd1\uff0c\u586b\u5145\u7a7a\u9699\u3002\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u5df2\u7ecf\u7d27\u5bc6\u5806\u79ef\uff0c\u51e0\u4e4e\u6ca1\u6709\u7a7a\u9699\uff0c\u56e0\u6b64\u7c92\u5b50\u65e0\u5904\u79fb\u52a8\u2014\u2014\u4e0d\u80fd\u8fdb\u4e00\u6b65\u538b\u7f29\u3002",
            },
            {
              qEn: "When ice melts into water, the particles do not change. What does change?",
              qZh: "\u5f53\u51b0\u878d\u5316\u4e3a\u6c34\u65f6\uff0c\u7c92\u5b50\u672c\u8eab\u6ca1\u6709\u53d8\u5316\u3002\u90a3\u4e48\u5230\u5e95\u4ec0\u4e48\u53d8\u4e86\uff1f",
              aEn: "When ice melts, the particles gain energy from heating. This extra energy breaks down the rigid structure that held particles in fixed positions. The particles can now slide past each other — they are still close together and touching, but they are no longer locked in place. The arrangement changes from fixed and regular to random and mobile.",
              aZh: "\u51b0\u878d\u5316\u65f6\uff0c\u7c92\u5b50\u4ece\u52a0\u70ed\u4e2d\u83b7\u5f97\u80fd\u91cf\u3002\u8fd9\u4e9b\u989d\u5916\u80fd\u91cf\u7834\u574f\u4e86\u5c06\u7c92\u5b50\u9501\u5b9a\u5728\u56fa\u5b9a\u4f4d\u7f6e\u7684\u521a\u6027\u7ed3\u6784\u3002\u7c92\u5b50\u73b0\u5728\u53ef\u4ee5\u76f8\u4e92\u6ed1\u52a8\u2014\u2014\u5b83\u4eec\u4ecd\u7136\u5f7c\u6b64\u9760\u8fd1\u5e76\u76f8\u4e92\u63a5\u89e6\uff0c\u4f46\u4e0d\u518d\u9501\u5b9a\u5728\u539f\u4f4d\u3002\u6392\u5217\u65b9\u5f0f\u4ece\u56fa\u5b9a\u89c4\u5219\u53d8\u4e3a\u968f\u673a\u6d41\u52a8\u3002",
            },
            {
              qEn: "A student says: 'When water turns to steam, the particles get bigger.' Is this correct? Explain your answer.",
              qZh: "\u4e00\u4f4d\u540c\u5b66\u8bf4\uff1a\u201c\u6c34\u53d8\u6210\u86f8\u6c14\u65f6\uff0c\u7c92\u5b50\u53d8\u5927\u4e86\u3002\u201d\u8fd9\u662f\u6b63\u786e\u7684\u5417\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u7b54\u6848\u3002",
              aEn: "No, this is incorrect. The particles themselves do not change size. What changes is the distance between particles. When water becomes steam, the particles gain enough energy to break away from each other and spread far apart. The gaps between particles become much larger, but the particles themselves remain exactly the same size.",
              aZh: "\u4e0d\uff0c\u8fd9\u662f\u9519\u8bef\u7684\u3002\u7c92\u5b50\u672c\u8eab\u7684\u5927\u5c0f\u5e76\u4e0d\u6539\u53d8\u3002\u53d8\u5316\u7684\u662f\u7c92\u5b50\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002\u5f53\u6c34\u53d8\u6210\u86f8\u6c14\u65f6\uff0c\u7c92\u5b50\u83b7\u5f97\u8db3\u591f\u7684\u80fd\u91cf\u5c06\u5f7c\u6b64\u5206\u5f00\u5e76\u5c55\u5f00\u5230\u8ddd\u79bb\u5f88\u8fdc\u3002\u7c92\u5b50\u4e4b\u95f4\u7684\u5de9\u5927\uff0c\u4f46\u7c92\u5b50\u672c\u8eab\u5c31\u5927\u5c0f\u5b8c\u5168\u4e0d\u53d8\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which of the following best explains why a liquid takes the shape of its container but a solid does not?",
          qZh: "\u4ee5\u4e0b\u54ea\u9879\u6700\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u6db2\u4f53\u80fd\u968f\u5bb9\u5668\u6210\u5f62\u800c\u56fa\u4f53\u4e0d\u80fd\uff1f",
          opts: [
            {
              en: "Liquid particles are larger than solid particles.",
              zh: "\u6db2\u4f53\u7c92\u5b50\u6bd4\u56fa\u4f53\u7c92\u5b50\u5927\u3002",
            },
            {
              en: "Liquid particles can slide past each other, while solid particles are locked in fixed positions.",
              zh: "\u6db2\u4f53\u7c92\u5b50\u53ef\u4ee5\u76f8\u4e92\u6ed1\u52a8\uff0c\u800c\u56fa\u4f53\u7c92\u5b50\u9501\u5b9a\u5728\u56fa\u5b9a\u4f4d\u7f6e\u3002",
            },
            {
              en: "Liquid particles have no gaps between them, while solid particles do.",
              zh: "\u6db2\u4f53\u7c92\u5b50\u4e4b\u95f4\u6ca1\u6709\u95f4\u9699\uff0c\u800c\u56fa\u4f53\u7c92\u5b50\u4e4b\u95f4\u6709\u95f4\u9699\u3002",
            },
            {
              en: "Liquid particles move faster than solid particles because they are hotter.",
              zh: "\u6db2\u4f53\u7c92\u5b50\u56e0\u4e3a\u6e29\u5ea6\u66f4\u9ad8\u6240\u4ee5\u8fd0\u52a8\u901f\u5ea6\u6bd4\u56fa\u4f53\u7c92\u5b50\u66f4\u5feb\u3002",
            },
          ],
          correct: 1,
          explainCorrectEn: "Correct. In a liquid, particles are still close together and touching, but they are free to slide past one another. This allows the liquid to flow and fill the shape of its container. In a solid, particles are held in fixed positions and can only vibrate — they cannot change their positions relative to each other.",
          explainCorrectZh: "\u6b63\u786e\u3002\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u4ecd\u7136\u5f7c\u6b64\u9760\u8fd1\u5e76\u76f8\u4e92\u63a5\u89e6\uff0c\u4f46\u53ef\u4ee5\u81ea\u7531\u76f8\u4e92\u6ed1\u52a8\u3002\u8fd9\u4f7f\u6db2\u4f53\u80fd\u591f\u6d41\u52a8\u5e76\u5145\u6ee1\u5bb9\u5668\u7684\u5f62\u72b6\u3002\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u88ab\u56fa\u5b9a\u5728\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u53ea\u80fd\u632f\u52a8\u2014\u2014\u5b83\u4eec\u65e0\u6cd5\u6539\u53d8\u76f8\u5bf9\u4f4d\u7f6e\u3002",
          explainWrongEn: "Not quite. The size of particles does not change between states — the key difference is how particles are arranged and whether they can move past each other. In a liquid, particles can flow freely; in a solid, they are locked in place.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7c92\u5b50\u5927\u5c0f\u5728\u4e0d\u540c\u72b6\u6001\u4e4b\u95f4\u5e76\u4e0d\u6539\u53d8\u2014\u2014\u5173\u952e\u533a\u522b\u5728\u4e8e\u7c92\u5b50\u7684\u6392\u5217\u65b9\u5f0f\u4ee5\u53ca\u5b83\u4eec\u662f\u5426\u80fd\u76f8\u4e92\u7a7f\u8fc7\u3002\u6db2\u4f53\u4e2d\u7c92\u5b50\u53ef\u4ee5\u81ea\u7531\u6d41\u52a8\uff1b\u56fa\u4f53\u4e2d\u7c92\u5b50\u88ab\u9501\u5b9a\u5728\u539f\u4f4d\u3002",
        },
      ],
    },

    /* ========== Lesson 2 ========== */
    {
      num: 2,
      badge: "T",
      title: "Expansion and Contraction of Solids",
      titleZh: "\u56fa\u4f53\u7684\u81a8\u80c0\u4e0e\u6536\u7f29",
      subtitle: "Why do solids change size when heated or cooled?",
      subtitleZh: "\u56fa\u4f53\u52a0\u70ed\u6216\u51b7\u5374\u540e\u4e3a\u4ec0\u4e48\u4f1a\u6539\u53d8\u5927\u5c0f\uff1f",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can describe what happens to the particles in a solid when it is heated.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u56fa\u4f53\u52a0\u70ed\u65f6\u5176\u7c92\u5b50\u53d1\u751f\u7684\u53d8\u5316\u3002",
            },
            {
              en: "I can explain why solids expand when heated and contract when cooled.",
              zh: "\u6211\u80fd\u89e3\u91ca\u56fa\u4f53\u52a0\u70ed\u65f6\u81a8\u80c0\u3001\u51b7\u5374\u65f6\u6536\u7f29\u7684\u539f\u56e0\u3002",
            },
            {
              en: "I can give a real-life example of expansion or contraction in solids.",
              zh: "\u6211\u80fd\u4e3e\u51fa\u56fa\u4f53\u81a8\u80c0\u6216\u6536\u7f29\u7684\u4e00\u4e2a\u5b9e\u9645\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "When a solid is heated, its particles gain energy. This extra energy makes the particles vibrate faster and more vigorously. As the particles vibrate more, the distance between neighbouring particles increases slightly. The result is that the whole solid becomes slightly larger — it expands.",
              zh: "\u5f53\u56fa\u4f53\u88ab\u52a0\u70ed\u65f6\uff0c\u5176\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u3002\u8fd9\u4e9b\u989d\u5916\u80fd\u91cf\u4f7f\u7c92\u5b50\u632f\u52a8\u5f97\u66f4\u5feb\u3001\u66f4\u5267\u70c8\u3002\u968f\u7740\u7c92\u5b50\u632f\u52a8\u52a0\u5267\uff0c\u76f8\u90bb\u7c92\u5b50\u4e4b\u95f4\u7684\u8ddd\u79bb\u5c0f\u5e45\u589e\u5927\u3002\u7ed3\u679c\u5c31\u662f\u6574\u4e2a\u56fa\u4f53\u53d8\u5f97\u7a0d\u5927\u2014\u2014\u5b83\u81a8\u80c0\u4e86\u3002",
            },
            {
              type: "highlight",
              en: "Important: The particles themselves do NOT get bigger when a solid is heated. It is the distance between the particles that increases, because they are vibrating with more energy.",
              zh: "\u91cd\u8981\uff1a\u56fa\u4f53\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u672c\u8eab\u5e76\u4e0d\u53d8\u5927\u3002\u589e\u5927\u7684\u662f\u7c92\u5b50\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u4ee5\u66f4\u5927\u7684\u80fd\u91cf\u632f\u52a8\u3002",
            },
            {
              type: "text",
              en: "When a solid is cooled, the opposite happens. The particles lose energy, vibrate less, and move slightly closer together. The solid contracts — it becomes slightly smaller.",
              zh: "\u5f53\u56fa\u4f53\u88ab\u51b7\u5374\u65f6\uff0c\u60c5\u51b5\u76f8\u53cd\u3002\u7c92\u5b50\u5931\u53bb\u80fd\u91cf\uff0c\u632f\u52a8\u51cf\u5f31\uff0c\u5e76\u5c0f\u5e45\u5f7c\u6b64\u9760\u8fd1\u3002\u56fa\u4f53\u6536\u7f29\u2014\u2014\u53d8\u5f97\u7a0d\u5c0f\u3002",
            },
            {
              type: "text",
              en: "The ball and ring demonstration shows this clearly. A metal ball fits through a metal ring when both are at room temperature. When the ball is heated, it expands and no longer fits through the ring. After cooling, it contracts back to its original size and fits through again.",
              zh: "\u7403\u4e0e\u73af\u5b9e\u9a8c\u6e05\u695a\u5730\u8bf4\u660e\u4e86\u8fd9\u4e00\u70b9\u3002\u5728\u5e38\u6e29\u4e0b\uff0c\u91d1\u5c5e\u7403\u53ef\u4ee5\u7a7f\u8fc7\u91d1\u5c5e\u73af\u3002\u52a0\u70ed\u540e\uff0c\u7403\u81a8\u80c0\u5c31\u65e0\u6cd5\u7a7f\u8fc7\u73af\u4e86\u3002\u51b7\u5374\u540e\uff0c\u5b83\u6536\u7f29\u56de\u539f\u6765\u7684\u5927\u5c0f\uff0c\u53c8\u53ef\u4ee5\u7a7f\u8fc7\u4e86\u3002",
            },
            {
              type: "example",
              en: "Real-life examples: Railway tracks and bridges are built with small expansion gaps between sections of metal. On a hot summer day, the metal expands into these gaps. Without them, the expanding metal would buckle and bend dangerously. Bimetallic strips use the fact that different metals expand at different rates — this makes the strip bend when heated, which is used in thermostats.",
              zh: "\u5b9e\u9645\u4f8b\u5b50\uff1a\u94c1\u8def\u548c\u6865\u68c1\u5728\u91d1\u5c5e\u6bb5\u4e4b\u95f4\u7559\u6709\u5c0f\u7684\u81a8\u80c0\u7f1d\u3002\u5728\u70b9\u70ed\u7684\u590f\u5929\uff0c\u91d1\u5c5e\u7684\u81a8\u80c0\u5c31\u586b\u5145\u8fd9\u4e9b\u7f1d\u9699\u3002\u6ca1\u6709\u8fd9\u4e9b\u7f1d\u9699\uff0c\u81a8\u80c0\u7684\u91d1\u5c5e\u4f1a\u5c48\u6298\u548c\u5f2f\u66f2\uff0c\u5c55\u751f\u5371\u9669\u3002\u53cc\u91d1\u5c5e\u7247\u5229\u7528\u4e86\u4e0d\u540c\u91d1\u5c5e\u81a8\u80c0\u7387\u4e0d\u540c\u7684\u7279\u70b9\u2014\u2014\u8fd9\u4f7f\u5f97\u51fa\u7247\u52a0\u70ed\u540e\u5f2f\u66f2\uff0c\u7528\u4e8e\u6e29\u63a7\u5668\u4e2d\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Expand",
              zh: "\u81a8\u80c0",
              defEn: "To increase in size or volume when heated, because particles vibrate more and take up more space.",
              defZh: "\u52a0\u70ed\u65f6\u4f53\u79ef\u589e\u5927\uff0c\u56e0\u4e3a\u7c92\u5b50\u632f\u52a8\u52a0\u5267\u5e76\u5360\u636e\u66f4\u5927\u7a7a\u95f4\u3002",
            },
            {
              en: "Contract",
              zh: "\u6536\u7f29",
              defEn: "To decrease in size or volume when cooled, because particles vibrate less and move slightly closer together.",
              defZh: "\u51b7\u5374\u65f6\u4f53\u79ef\u51cf\u5c0f\uff0c\u56e0\u4e3a\u7c92\u5b50\u632f\u52a8\u51cf\u5f31\u5e76\u7a0d\u5fae\u9760\u8fd1\u3002",
            },
            {
              en: "Bimetallic strip",
              zh: "\u53cc\u91d1\u5c5e\u7247",
              defEn: "A strip made of two different metals bonded together, which bends when heated because the two metals expand at different rates.",
              defZh: "\u7531\u4e24\u79cd\u4e0d\u540c\u91d1\u5c5e\u7c98\u5408\u5728\u4e00\u8d77\u7684\u7247\u6761\uff0c\u52a0\u70ed\u65f6\u4f1a\u5f2f\u66f2\uff0c\u56e0\u4e3a\u4e24\u79cd\u91d1\u5c5e\u7684\u81a8\u80c0\u7387\u4e0d\u540c\u3002",
            },
            {
              en: "Expansion gap",
              zh: "\u81a8\u80c0\u7f1d",
              defEn: "A deliberate space left between sections of a structure, such as a bridge or railway track, to allow for thermal expansion.",
              defZh: "\u5728\u6865\u68c1\u6216\u94c1\u8def\u7b49\u7ed3\u6784\u7684\u5404\u8282\u4e4b\u95f4\u7279\u610f\u9884\u7559\u7684\u7a7a\u95f4\uff0c\u4ee5\u5bb9\u7eb3\u70ed\u81a8\u80c0\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "A bimetallic strip bending when heated — the two metals expand at different rates, causing the strip to curve",
          captionZh: "\u53cc\u91d1\u5c5e\u7247\u52a0\u70ed\u65f6\u5f2f\u66f2\u2014\u2014\u4e24\u79cd\u91d1\u5c5e\u81a8\u80c0\u7387\u4e0d\u540c\uff0c\u5bfc\u81f4\u7247\u6761\u5f2f\u66f2",
          source: "Wikimedia Commons",
          wikimediaFile: "Bimetal_bending.svg",
        },
        {
          type: "source",
          labelEn: "Key concept",
          labelZh: "\u6838\u5fc3\u6982\u5ff5",
          en: "From the lesson: 'When a solid is heated, particles vibrate faster. The distance between particles increases. The overall solid expands. The particles themselves do NOT get bigger.'",
          zh: "\u6765\u81ea\u8bfe\u7a0b\uff1a\u201c\u56fa\u4f53\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u632f\u52a8\u52a0\u5feb\u3002\u7c92\u5b50\u4e4b\u95f4\u7684\u8ddd\u79bb\u589e\u5927\u3002\u6574\u4e2a\u56fa\u4f53\u81a8\u80c0\u3002\u7c92\u5b50\u672c\u8eab\u5e76\u4e0d\u53d8\u5927\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Use the particle model to explain why a solid expands when it is heated.",
              qZh: "\u7528\u7c92\u5b50\u6a21\u578b\u89e3\u91ca\u56fa\u4f53\u52a0\u70ed\u65f6\u4e3a\u4ec0\u4e48\u81a8\u80c0\u3002",
              aEn: "When a solid is heated, the particles gain energy. This extra energy makes them vibrate faster and more vigorously. As they vibrate more, they push against neighbouring particles and the distance between them increases. This increase in the spacing between all particles means the overall solid takes up more space — it expands. The particles themselves do not get bigger; it is the gaps between them that increase.",
              aZh: "\u56fa\u4f53\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u3002\u8fd9\u4e9b\u989d\u5916\u80fd\u91cf\u4f7f\u5b83\u4eec\u632f\u52a8\u5f97\u66f4\u5feb\u3001\u66f4\u5267\u70c8\u3002\u968f\u7740\u632f\u52a8\u52a0\u5267\uff0c\u7c92\u5b50\u63a8\u538b\u76f8\u90bb\u7c92\u5b50\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u8ddd\u79bb\u589e\u5927\u3002\u6240\u6709\u7c92\u5b50\u4e4b\u95f4\u95f4\u8ddd\u7684\u589e\u5927\u610f\u5473\u7740\u6574\u4e2a\u56fa\u4f53\u5360\u636e\u4e86\u66f4\u591a\u7a7a\u95f4\u2014\u2014\u5b83\u81a8\u80c0\u4e86\u3002\u7c92\u5b50\u672c\u8eab\u5e76\u6ca1\u6709\u53d8\u5927\uff1b\u589e\u5927\u7684\u662f\u5b83\u4eec\u4e4b\u95f4\u7684\u95f4\u9699\u3002",
            },
            {
              qEn: "Why are expansion gaps left in railway tracks and bridges? What would happen without them?",
              qZh: "\u4e3a\u4ec0\u4e48\u94c1\u8def\u548c\u6865\u68c1\u4e2d\u8981\u7559\u81a8\u80c0\u7f1d\uff1f\u6ca1\u6709\u8fd9\u4e9b\u7f1d\u9699\u4f1a\u600e\u5f62\uff1f",
              aEn: "Expansion gaps are left so that the metal has space to expand on hot days without causing damage. Metal expands when heated, so in summer the tracks and bridge sections become slightly longer. The gaps allow this expansion to happen safely. Without them, the expanding metal would have nowhere to go and would push against itself, causing the tracks to buckle and bend. This could lead to dangerous deformations.",
              aZh: "\u7559\u81a8\u80c0\u7f1d\u662f\u4e3a\u4e86\u4f7f\u91d1\u5c5e\u5728\u70b9\u70ed\u7684\u5929\u6c14\u4e2d\u6709\u8db3\u591f\u7684\u7a7a\u95f4\u81a8\u80c0\u800c\u4e0d\u9020\u6210\u635f\u574f\u3002\u91d1\u5c5e\u52a0\u70ed\u65f6\u4f1a\u81a8\u80c0\uff0c\u56e0\u6b64\u590f\u5929\u8f68\u9053\u548c\u6865\u68c1\u6bb5\u4f1a\u53d8\u5f97\u7a0d\u957f\u3002\u8fd9\u4e9b\u7f1d\u9699\u4f7f\u81a8\u80c0\u80fd\u5b89\u5168\u53d1\u751f\u3002\u6ca1\u6709\u5b83\u4eec\uff0c\u81a8\u80c0\u7684\u91d1\u5c5e\u65e0\u5904\u53ef\u53bb\uff0c\u4f1a\u76f8\u4e92\u6324\u538b\uff0c\u5bfc\u81f4\u8f68\u9053\u5c48\u6298\u548c\u5f2f\u66f2\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u5371\u9669\u7684\u53d8\u5f62\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "A metal ball fits through a metal ring at room temperature. The ball is then heated. What will happen, and why?",
          qZh: "\u5e38\u6e29\u4e0b\uff0c\u91d1\u5c5e\u7403\u53ef\u4ee5\u7a7f\u8fc7\u91d1\u5c5e\u73af\u3002\u7136\u540e\u5c06\u7403\u52a0\u70ed\u3002\u4f1a\u53d1\u751f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\uff1f",
          opts: [
            {
              en: "The ball will pass through more easily because heat makes it softer.",
              zh: "\u7403\u4f1a\u66f4\u5bb9\u6613\u7a7f\u8fc7\uff0c\u56e0\u4e3a\u52a0\u70ed\u4f7f\u5b83\u66f4\u8f6f\u3002",
            },
            {
              en: "Nothing will change because metals are too strong to expand.",
              zh: "\u4e0d\u4f1a\u6709\u4efb\u4f55\u53d8\u5316\uff0c\u56e0\u4e3a\u91d1\u5c5e\u592a\u5d9a\u4e86\u65e0\u6cd5\u81a8\u80c0\u3002",
            },
            {
              en: "The ball will no longer fit through the ring because heating causes it to expand.",
              zh: "\u7403\u5c06\u65e0\u6cd5\u518d\u7a7f\u8fc7\u73af\uff0c\u56e0\u4e3a\u52a0\u70ed\u4f7f\u5b83\u81a8\u80c0\u4e86\u3002",
            },
            {
              en: "The ring will expand more than the ball, so the ball will fall through easily.",
              zh: "\u73af\u6bd4\u7403\u81a8\u80c0\u5f97\u66f4\u591a\uff0c\u6240\u4ee5\u7403\u5c06\u8f7b\u6613\u843d\u4e0b\u3002",
            },
          ],
          correct: 2,
          explainCorrectEn: "Correct. When the metal ball is heated, its particles vibrate faster and the distances between them increase. The ball expands and becomes slightly larger than before. Because the ring stays at room temperature and does not expand, the ball can no longer fit through it.",
          explainCorrectZh: "\u6b63\u786e\u3002\u91d1\u5c5e\u7403\u52a0\u70ed\u65f6\uff0c\u5176\u7c92\u5b50\u632f\u52a8\u52a0\u5feb\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u8ddd\u79bb\u589e\u5927\u3002\u7403\u81a8\u80c0\u53d8\u5f97\u7a0d\u5927\u3002\u7531\u4e8e\u73af\u4fdd\u6301\u5e38\u6e29\u6ca1\u6709\u81a8\u80c0\uff0c\u7403\u5c31\u65e0\u6cd5\u518d\u7a7f\u8fc7\u4e86\u3002",
          explainWrongEn: "Not quite. All metals expand when heated — this is a property of all solids, not just some. The ball expands outward because the particles vibrate more and push further apart. The ring, being at room temperature, stays the same size, so the expanded ball no longer fits.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6240\u6709\u91d1\u5c5e\u52a0\u70ed\u65f6\u90fd\u4f1a\u81a8\u80c0\u2014\u2014\u8fd9\u662f\u6240\u6709\u56fa\u4f53\u7684\u5c5e\u6027\uff0c\u4e0d\u4ec5\u4ec5\u662f\u67d0\u4e9b\u91d1\u5c5e\u3002\u7403\u5411\u5916\u81a8\u80c0\uff0c\u56e0\u4e3a\u7c92\u5b50\u632f\u52a8\u52a0\u5267\u5e76\u76f8\u4e92\u63a8\u5f00\u66f4\u8fdc\u3002\u73af\u5904\u4e8e\u5e38\u6e29\uff0c\u5927\u5c0f\u4e0d\u53d8\uff0c\u56e0\u6b64\u81a8\u80c0\u540e\u7684\u7403\u5c31\u65e0\u6cd5\u518d\u7a7f\u8fc7\u4e86\u3002",
        },
      ],
    },

    /* ========== Lesson 3 ========== */
    {
      num: 3,
      badge: "T",
      title: "Expansion of Liquids and Gases",
      titleZh: "\u6db2\u4f53\u548c\u6c14\u4f53\u7684\u81a8\u80c0",
      subtitle: "Why do gases expand far more than liquids when heated?",
      subtitleZh: "\u52a0\u70ed\u65f6\u6c14\u4f53\u4e3a\u4ec0\u4e48\u6bd4\u6db2\u4f53\u81a8\u80c0\u5f97\u591a\u5f97\u591a\uff1f",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain that liquids and gases also expand when heated and contract when cooled.",
              zh: "\u6211\u80fd\u89e3\u91ca\u6db2\u4f53\u548c\u6c14\u4f53\u52a0\u70ed\u65f6\u4e5f\u4f1a\u81a8\u80c0\uff0c\u51b7\u5374\u65f6\u4e5f\u4f1a\u6536\u7f29\u3002",
            },
            {
              en: "I can explain why gases expand much more than liquids or solids for the same temperature change.",
              zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u76f8\u540c\u7684\u6e29\u5ea6\u53d8\u5316\u4e0b\uff0c\u6c14\u4f53\u6bd4\u6db2\u4f53\u6216\u56fa\u4f53\u81a8\u80c0\u5f97\u591a\u5f97\u591a\u3002",
            },
            {
              en: "I can describe the practical evidence for expansion in liquids.",
              zh: "\u6211\u80fd\u63cf\u8ff0\u6db2\u4f53\u81a8\u80c0\u7684\u5b9e\u9a8c\u8bc1\u636e\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "Liquids and gases also expand when heated, just like solids. However, the amount of expansion is very different. For the same rise in temperature, gases expand far more than liquids, and liquids expand more than solids.",
              zh: "\u6db2\u4f53\u548c\u6c14\u4f53\u52a0\u70ed\u65f6\u4e5f\u548c\u56fa\u4f53\u4e00\u6837\u4f1a\u81a8\u80c0\u3002\u4f46\u81a8\u80c0\u7684\u7a0b\u5ea6\u5374\u5927\u76f8\u5f84\u5ead\u3002\u5bf9\u4e8e\u76f8\u540c\u7684\u6e29\u5ea6\u5347\u9ad8\uff0c\u6c14\u4f53\u7684\u81a8\u80c0\u8fdc\u5927\u4e8e\u6db2\u4f53\uff0c\u6db2\u4f53\u7684\u81a8\u80c0\u8fdc\u5927\u4e8e\u56fa\u4f53\u3002",
            },
            {
              type: "highlight",
              en: "The order of expansion: Gases expand and contract the most. Liquids expand and contract more than solids. Solids expand and contract the least.",
              zh: "\u81a8\u80c0\u987a\u5e8f\uff1a\u6c14\u4f53\u81a8\u80c0\u548c\u6536\u7f29\u6700\u591a\u3002\u6db2\u4f53\u6bd4\u56fa\u4f53\u81a8\u80c0\u548c\u6536\u7f29\u5f97\u591a\u3002\u56fa\u4f53\u81a8\u80c0\u548c\u6536\u7f29\u6700\u5c11\u3002",
            },
            {
              type: "text",
              en: "The reason goes back to the particle model. In a gas, the particles are already far apart with large gaps between them. When heated, these particles move even faster and spread out much more — there is plenty of empty space for them to move into. In a liquid, the particles are already close together and touching, so even though they move faster when heated, the expansion is much smaller.",
              zh: "\u539f\u56e0\u8981\u56de\u5230\u7c92\u5b50\u6a21\u578b\u3002\u5728\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u4e4b\u95f4\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u6709\u5927\u91cf\u7a7a\u95f4\u3002\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u8fd0\u52a8\u5f97\u66f4\u5feb\uff0c\u5c55\u5f00\u5f97\u591a\u5f97\u591a\u2014\u2014\u6709\u5927\u91cf\u7a7a\u95f4\u53ef\u4ee5\u5c55\u5f00\u3002\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u5df2\u7ecf\u5f7c\u6b64\u9760\u8fd1\u5e76\u76f8\u4e92\u63a5\u89e6\uff0c\u56e0\u6b64\u5c3d\u7ba1\u52a0\u70ed\u65f6\u8fd0\u52a8\u5f97\u66f4\u5feb\uff0c\u4f46\u81a8\u80c0\u91cf\u5374\u5c0f\u5f97\u591a\u3002",
            },
            {
              type: "text",
              en: "In the classroom practical, red-coloured water is placed in a boiling tube with a thin capillary tube attached. When the boiling tube is placed in hot water, the red liquid level rises up the capillary tube — evidence that the liquid has expanded. When moved to cold water, the level falls as the liquid contracts.",
              zh: "\u5728\u8bfe\u5802\u5b9e\u9a8c\u4e2d\uff0c\u5c06\u7ea2\u8272\u7684\u6c34\u653e\u5165\u4e00\u4e2a\u5e26\u6709\u7ec6\u6bdb\u7ec6\u7ba1\u7684\u6c38\u6c38\u7ba1\u4e2d\u3002\u5c06\u6c38\u6c38\u7ba1\u653e\u5165\u70ed\u6c34\u4e2d\u65f6\uff0c\u6bdb\u7ec6\u7ba1\u4e2d\u7684\u7ea2\u8272\u6db2\u4f53\u6c34\u4f4d\u4e0a\u5347\u2014\u2014\u8fd9\u5c31\u662f\u6db2\u4f53\u81a8\u80c0\u7684\u8bc1\u636e\u3002\u5c06\u5176\u79fb\u5165\u51b7\u6c34\u4e2d\u65f6\uff0c\u968f\u7740\u6db2\u4f53\u6536\u7f29\uff0c\u6c34\u4f4d\u4e0b\u964d\u3002",
            },
            {
              type: "example",
              en: "Think of a hot air balloon: the air inside is heated by a burner. The air particles speed up and spread out, so the same mass of air now takes up more space — the air becomes less dense. This less dense air inside the balloon is lighter than the cooler, denser air outside, so the balloon rises. This is expansion of a gas in real life.",
              zh: "\u60f3\u60f3\u70ed\u6c14\u7403\uff1a\u5185\u90e8\u7684\u7a7a\u6c14\u88ab\u71c3\u70e7\u5668\u52a0\u70ed\u3002\u7a7a\u6c14\u7c92\u5b50\u52a0\u901f\u5e76\u5c55\u5f00\uff0c\u6240\u4ee5\u76f8\u540c\u8d28\u91cf\u7684\u7a7a\u6c14\u73b0\u5728\u5360\u636e\u4e86\u66f4\u5927\u7684\u7a7a\u95f4\u2014\u2014\u7a7a\u6c14\u53d8\u5f97\u5bc6\u5ea6\u66f4\u5c0f\u3002\u5c0f\u5bc6\u5ea6\u7684\u70ed\u7a7a\u6c14\u6bd4\u5916\u9762\u51b7\u800c\u5bc6\u5ea6\u5927\u7684\u7a7a\u6c14\u66f4\u8f7b\uff0c\u56e0\u6b64\u6c14\u7403\u4e0a\u5347\u3002\u8fd9\u5c31\u662f\u73b0\u5b9e\u751f\u6d3b\u4e2d\u6c14\u4f53\u81a8\u80c0\u7684\u4f8b\u5b50\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Expansion",
              zh: "\u81a8\u80c0",
              defEn: "An increase in size or volume caused by heating.",
              defZh: "\u52a0\u70ed\u5bfc\u81f4\u7684\u4f53\u79ef\u589e\u5927\u3002",
            },
            {
              en: "Contraction",
              zh: "\u6536\u7f29",
              defEn: "A decrease in size or volume caused by cooling.",
              defZh: "\u51b7\u5374\u5bfc\u81f4\u7684\u4f53\u79ef\u51cf\u5c0f\u3002",
            },
            {
              en: "Density",
              zh: "\u5bc6\u5ea6",
              defEn: "How much mass is packed into a given volume. Less dense materials are lighter for their size.",
              defZh: "\u5355\u4f4d\u4f53\u79ef\u4e2d\u5305\u542b\u7684\u8d28\u91cf\u3002\u5bc6\u5ea6\u8f83\u5c0f\u7684\u7269\u8d28\u6309\u5176\u4f53\u79ef\u6765\u8bf4\u8f83\u8f7b\u3002",
            },
            {
              en: "Capillary tube",
              zh: "\u6bdb\u7ec6\u7ba1",
              defEn: "A very thin tube used in experiments to show small changes in liquid volume clearly.",
              defZh: "\u5b9e\u9a8c\u4e2d\u7528\u4e8e\u6e05\u6670\u663e\u793a\u6db2\u4f53\u4f53\u79ef\u5c0f\u53d8\u5316\u7684\u6781\u7ec6\u7ba1\u9053\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "A thermometer showing liquid expanding up the capillary tube as temperature rises",
          captionZh: "\u6e29\u5ea6\u8ba1\u663e\u793a\u6e29\u5ea6\u5347\u9ad8\u65f6\u6db2\u4f53\u5728\u6bdb\u7ec6\u7ba1\u4e2d\u81a8\u80c0\u4e0a\u5347",
          source: "Wikimedia Commons",
          wikimediaFile: "Thermometer_CF.svg",
        },
        {
          type: "source",
          labelEn: "Key concept",
          labelZh: "\u6838\u5fc3\u6982\u5ff5",
          en: "From the lesson: 'Gases expand and contract more than liquids. Liquids expand and contract more than solids. Gases expand more because their particles are already far apart and have much more space to spread into when heated.'",
          zh: "\u6765\u81ea\u8bfe\u7a0b\uff1a\u201c\u6c14\u4f53\u6bd4\u6db2\u4f53\u81a8\u80c0\u548c\u6536\u7f29\u5f97\u591a\u3002\u6db2\u4f53\u6bd4\u56fa\u4f53\u81a8\u80c0\u548c\u6536\u7f29\u5f97\u591a\u3002\u6c14\u4f53\u81a8\u80c0\u66f4\u591a\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c92\u5b50\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u52a0\u70ed\u65f6\u6709\u66f4\u591a\u7a7a\u95f4\u53ef\u4ee5\u5c55\u5f00\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "Why do gases expand much more than solids when heated by the same amount?",
              qZh: "\u4e3a\u4ec0\u4e48\u76f8\u540c\u7684\u52a0\u70ed\u91cf\u4e0b\uff0c\u6c14\u4f53\u6bd4\u56fa\u4f53\u81a8\u80c0\u5f97\u591a\u5f97\u591a\uff1f",
              aEn: "In a gas, the particles are already far apart with large empty spaces between them. When the gas is heated, the particles move faster and spread out even further into the available space. Because there is so much empty space to move into, the expansion is very large. In a solid, the particles are tightly packed with almost no gaps. When heated, they can only vibrate slightly more — there is no empty space for them to spread into, so the expansion is very small.",
              aZh: "\u5728\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u4e4b\u95f4\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u6709\u5927\u91cf\u7a7a\u95f4\u3002\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u8fd0\u52a8\u5f97\u66f4\u5feb\uff0c\u5c55\u5f00\u5f97\u66f4\u5e7f\u3002\u7531\u4e8e\u6709\u5982\u6b64\u591a\u7684\u7a7a\u95f4\u53ef\u4ee5\u8fdb\u5165\uff0c\u81a8\u80c0\u5c31\u975e\u5e38\u663e\u8457\u3002\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u7d27\u5bc6\u5806\u79ef\uff0c\u51e0\u4e4e\u6ca1\u6709\u95f4\u9699\u3002\u52a0\u70ed\u65f6\uff0c\u5b83\u4eec\u53ea\u80fd\u632f\u52a8\u5f97\u7a0d\u5fae\u5267\u70c8\u4e00\u4e9b\u2014\u2014\u6ca1\u6709\u7a7a\u95f4\u53ef\u4ee5\u5c55\u5f00\uff0c\u6240\u4ee5\u81a8\u80c0\u975e\u5e38\u5c0f\u3002",
            },
            {
              qEn: "A thermometer uses a liquid inside a thin tube to measure temperature. Explain how it works using your knowledge of expansion.",
              qZh: "\u6e29\u5ea6\u8ba1\u5229\u7528\u7ec6\u7ba1\u4e2d\u7684\u6db2\u4f53\u6d4b\u91cf\u6e29\u5ea6\u3002\u8bf7\u7528\u4f60\u5bf9\u81a8\u80c0\u7684\u77e5\u8bc6\u89e3\u91ca\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u3002",
              aEn: "When the thermometer is placed in a warm environment, the liquid inside gains energy and expands. Because the tube is very thin, even a very small expansion of the liquid pushes it noticeably higher up the tube. The hotter the temperature, the more the liquid expands and the higher it rises. When cooled, the liquid contracts and falls back down. The scale on the side of the thermometer is calibrated so that the height of the liquid column tells you the temperature.",
              aZh: "\u5c06\u6e29\u5ea6\u8ba1\u653e\u5165\u6e29\u6696\u73af\u5883\u65f6\uff0c\u5185\u90e8\u6db2\u4f53\u83b7\u5f97\u80fd\u91cf\u5e76\u81a8\u80c0\u3002\u7531\u4e8e\u7ba1\u9053\u975e\u5e38\u7ec6\uff0c\u5373\u4f7f\u6db2\u4f53\u53d1\u751f\u975e\u5e38\u5c0f\u7684\u81a8\u80c0\uff0c\u4e5f\u4f1a\u5c06\u6db2\u4f53\u638c\u5f97\u660e\u663e\u66f4\u9ad8\u3002\u6e29\u5ea6\u8d8a\u9ad8\uff0c\u6db2\u4f53\u81a8\u80c0\u8d8a\u5927\uff0c\u4e0a\u5347\u8d8a\u9ad8\u3002\u51b7\u5374\u65f6\uff0c\u6db2\u4f53\u6536\u7f29\u5e76\u4e0b\u964d\u3002\u6e29\u5ea6\u8ba1\u4e00\u4fa7\u7684\u523b\u5ea6\u5df2\u8fdb\u884c\u6807\u5b9a\uff0c\u6db2\u4f53\u67f1\u7684\u9ad8\u5ea6\u5c31\u8868\u793a\u6e29\u5ea6\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "When a gas is heated, it expands much more than a liquid heated by the same amount. What is the best explanation for this?",
          qZh: "\u6c14\u4f53\u52a0\u70ed\u540c\u6837\u7684\u6e29\u5ea6\u65f6\uff0c\u81a8\u80c0\u91cf\u8fdc\u5927\u4e8e\u6db2\u4f53\u3002\u6700\u597d\u7684\u89e3\u91ca\u662f\u4ec0\u4e48\uff1f",
          opts: [
            {
              en: "Gas particles are larger than liquid particles, so they push further apart.",
              zh: "\u6c14\u4f53\u7c92\u5b50\u6bd4\u6db2\u4f53\u7c92\u5b50\u5927\uff0c\u6240\u4ee5\u63a8\u5f97\u66f4\u8fdc\u3002",
            },
            {
              en: "Gas particles are already far apart with large gaps, so they have much more space to spread into when heated.",
              zh: "\u6c14\u4f53\u7c92\u5b50\u4e4b\u95f4\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u6709\u5927\u91cf\u7a7a\u95f4\uff0c\u6240\u4ee5\u52a0\u70ed\u65f6\u6709\u66f4\u5927\u7684\u7a7a\u95f4\u53ef\u4ee5\u5c55\u5f00\u3002",
            },
            {
              en: "Gases are hotter than liquids to begin with, so they expand more easily.",
              zh: "\u6c14\u4f53\u4e00\u5f00\u59cb\u6e29\u5ea6\u5c31\u6bd4\u6db2\u4f53\u9ad8\uff0c\u6240\u4ee5\u66f4\u5bb9\u6613\u81a8\u80c0\u3002",
            },
            {
              en: "Gas particles have more mass, so they store more heat energy.",
              zh: "\u6c14\u4f53\u7c92\u5b50\u8d28\u91cf\u66f4\u5927\uff0c\u6240\u4ee5\u80fd\u5b58\u50a8\u66f4\u591a\u70ed\u80fd\u3002",
            },
          ],
          correct: 1,
          explainCorrectEn: "Correct. Gas particles are already far apart, so there are huge empty spaces between them. When heated, they move faster and can spread much further into those spaces. In a liquid, the particles are already touching, leaving very little room to expand, so the same temperature change causes a much smaller increase in volume.",
          explainCorrectZh: "\u6b63\u786e\u3002\u6c14\u4f53\u7c92\u5b50\u4e4b\u95f4\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5b83\u4eec\u4e4b\u95f4\u6709\u5de8\u5927\u7684\u7a7a\u95f4\u3002\u52a0\u70ed\u65f6\uff0c\u5b83\u4eec\u8fd0\u52a8\u5f97\u66f4\u5feb\uff0c\u5e76\u80fd\u5c55\u5f00\u5230\u8fd9\u4e9b\u7a7a\u95f4\u7684\u66f4\u8fdc\u5904\u3002\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u5df2\u7ecf\u76f8\u4e92\u63a5\u89e6\uff0c\u51e0\u4e4e\u6ca1\u6709\u81a8\u80c0\u7684\u7a7a\u95f4\uff0c\u6240\u4ee5\u76f8\u540c\u7684\u6e29\u5ea6\u53d8\u5316\u5bfc\u81f4\u7684\u4f53\u79ef\u589e\u5927\u5c0f\u5f97\u591a\u3002",
          explainWrongEn: "Not quite. The size or mass of particles does not change between states. The key difference is how much empty space already exists between particles. Gas particles have huge gaps between them, so they have far more room to spread out when heated compared to liquid particles, which are already touching.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7c92\u5b50\u7684\u5927\u5c0f\u548c\u8d28\u91cf\u5728\u4e0d\u540c\u72b6\u6001\u4e4b\u95f4\u5e76\u4e0d\u6539\u53d8\u3002\u5173\u952e\u533a\u522b\u5728\u4e8e\u7c92\u5b50\u4e4b\u95f4\u5df2\u6709\u591a\u5c11\u7a7a\u95f4\u3002\u6c14\u4f53\u7c92\u5b50\u4e4b\u95f4\u6709\u5de8\u5927\u7684\u95f4\u9699\uff0c\u52a0\u70ed\u65f6\u5c55\u5f00\u7684\u7a7a\u95f4\u8fdc\u5927\u4e8e\u5df2\u7ecf\u76f8\u4e92\u63a5\u89e6\u7684\u6db2\u4f53\u7c92\u5b50\u3002",
        },
      ],
    },

    /* ========== Lesson 4 ========== */
    {
      num: 4,
      badge: "T",
      title: "Heat vs Temperature",
      titleZh: "\u70ed\u91cf\u4e0e\u6e29\u5ea6",
      subtitle: "Heat and temperature are not the same thing — here is why.",
      subtitleZh: "\u70ed\u91cf\u548c\u6e29\u5ea6\u4e0d\u662f\u540c\u4e00\u56de\u4e8b\u2014\u2014\u8fd9\u91cc\u662f\u539f\u56e0\u3002",
      sections: [
        {
          type: "goals",
          items: [
            {
              en: "I can explain the difference between heat energy and temperature.",
              zh: "\u6211\u80fd\u89e3\u91ca\u70ed\u80fd\u548c\u6e29\u5ea6\u4e4b\u95f4\u7684\u533a\u522b\u3002",
            },
            {
              en: "I can state the units used to measure heat energy and temperature.",
              zh: "\u6211\u80fd\u8bf4\u51fa\u6d4b\u91cf\u70ed\u80fd\u548c\u6e29\u5ea6\u7684\u5355\u4f4d\u3002",
            },
            {
              en: "I can explain what three factors affect the amount of heat energy in an object.",
              zh: "\u6211\u80fd\u89e3\u91ca\u54ea\u4e09\u4e2a\u56e0\u7d20\u5f71\u54cd\u7269\u4f53\u4e2d\u7684\u70ed\u80fd\u91cf\u3002",
            },
          ],
        },
        {
          type: "intro",
          content: [
            {
              type: "text",
              en: "In everyday life, people often use the words 'heat' and 'temperature' as if they mean the same thing. In science, they are different. Understanding the difference is one of the most important ideas in this unit.",
              zh: "\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\uff0c\u4eba\u4eec\u7ecf\u5e38\u628a\u201c\u70ed\u91cf\u201d\u548c\u201c\u6e29\u5ea6\u201d\u5f53\u505a\u540c\u4e00\u56de\u4e8b\u3002\u5728\u79d1\u5b66\u4e2d\uff0c\u5b83\u4eec\u662f\u4e0d\u540c\u7684\u3002\u7406\u89e3\u8fd9\u4e2a\u533a\u522b\u662f\u672c\u5355\u5143\u6700\u91cd\u8981\u7684\u6982\u5ff5\u4e4b\u4e00\u3002",
            },
            {
              type: "highlight",
              en: "Temperature measures how fast the particles in a substance are moving. It is measured in degrees Celsius (°C). Heat energy (also called thermal energy) is the total energy stored in a substance due to the movement of its particles. It is measured in joules (J).",
              zh: "\u6e29\u5ea6\u8861\u91cf\u7684\u662f\u7269\u8d28\u4e2d\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\u7a0b\u5ea6\u3002\u5355\u4f4d\u662f\u6444\u6c0f\u5ea6\uff08\u2103\uff09\u3002\u70ed\u80fd\uff08\u4e5f\u79f0\u70ed\u91cf\uff09\u662f\u7269\u8d28\u4e2d\u7c92\u5b50\u8fd0\u52a8\u5bfc\u81f4\u5b58\u50a8\u7684\u603b\u80fd\u91cf\u3002\u5355\u4f4d\u662f\u7126\u8033\uff08J\uff09\u3002",
            },
            {
              type: "text",
              en: "The amount of heat energy stored in an object depends on three things: its temperature, the material it is made of, and its mass. This means two objects at exactly the same temperature can contain very different amounts of heat energy.",
              zh: "\u7269\u4f53\u4e2d\u5b58\u50a8\u7684\u70ed\u80fd\u53d6\u51b3\u4e8e\u4e09\u4e2a\u56e0\u7d20\uff1a\u6e29\u5ea6\u3001\u6784\u6210\u6750\u6599\u548c\u8d28\u91cf\u3002\u8fd9\u610f\u5473\u7740\u4e24\u4e2a\u6e29\u5ea6\u5b8c\u5168\u76f8\u540c\u7684\u7269\u4f53\u53ef\u4ee5\u5305\u542b\u975e\u5e38\u4e0d\u540c\u7684\u70ed\u80fd\u3002",
            },
            {
              type: "example",
              en: "Imagine a cup of boiling water and a swimming pool of warm water. The boiling water has a much higher temperature — its particles are moving faster. But the swimming pool contains far more heat energy overall because it has an enormously greater mass of water. You could not warm up a cold room by pouring in the cup of boiling water, but you could with the swimming pool.",
              zh: "\u60f3\u8c61\u4e00\u676f\u6c38\u6c38\u7684\u6c34\u548c\u4e00\u4e2a\u6e29\u6c34\u6e38\u6cf3\u6c60\u3002\u6c38\u6c38\u7684\u6c34\u6e29\u5ea6\u8fdc\u9ad8\u2014\u2014\u5176\u7c92\u5b50\u8fd0\u52a8\u5f97\u66f4\u5feb\u3002\u4f46\u6e38\u6cf3\u6c60\u6574\u4f53\u542b\u6709\u8fdc\u591a\u5f97\u591a\u7684\u70ed\u80fd\uff0c\u56e0\u4e3a\u5b83\u7684\u6c34\u7684\u8d28\u91cf\u5de8\u5927\u3002\u5c06\u90a3\u676f\u6c38\u6c38\u7684\u6c34\u5012\u5165\u53ef\u4e0d\u80fd\u52a0\u70ed\u4e00\u95f4\u51b7\u5c4b\uff0c\u4f46\u6e38\u6cf3\u6c60\u5374\u53ef\u4ee5\u3002",
            },
            {
              type: "text",
              en: "One more important point: when a substance is changing state — for example, when ice is melting — heat energy is being added, but the temperature stays the same until the change of state is complete. This proves that heat and temperature are not the same thing.",
              zh: "\u8fd8\u6709\u4e00\u4e2a\u91cd\u8981\u8981\u70b9\uff1a\u5f53\u7269\u8d28\u6b63\u5728\u53d1\u751f\u72b6\u6001\u53d8\u5316\u65f6\u2014\u2014\u4f8b\u5982\u51b0\u5728\u878d\u5316\u2014\u2014\u70ed\u80fd\u5728\u6301\u7eed\u8f93\u5165\uff0c\u4f46\u6e29\u5ea6\u5374\u4fdd\u6301\u4e0d\u53d8\uff0c\u76f4\u5230\u72b6\u6001\u53d8\u5316\u5b8c\u6210\u3002\u8fd9\u8bc1\u660e\u4e86\u70ed\u91cf\u548c\u6e29\u5ea6\u4e0d\u662f\u540c\u4e00\u56de\u4e8b\u3002",
            },
          ],
        },
        {
          type: "vocab",
          words: [
            {
              en: "Temperature",
              zh: "\u6e29\u5ea6",
              defEn: "A measure of how fast the particles in a substance are moving. Measured in degrees Celsius (°C).",
              defZh: "\u8861\u91cf\u7269\u8d28\u4e2d\u7c92\u5b50\u8fd0\u52a8\u5feb\u6162\u7a0b\u5ea6\u7684\u91cf\u3002\u5355\u4f4d\u4e3a\u6444\u6c0f\u5ea6\uff08\u2103\uff09\u3002",
            },
            {
              en: "Heat energy",
              zh: "\u70ed\u80fd",
              defEn: "The total energy stored in a substance due to the movement of its particles. Measured in joules (J).",
              defZh: "\u7269\u8d28\u4e2d\u7c92\u5b50\u8fd0\u52a8\u5bfc\u81f4\u5b58\u50a8\u7684\u603b\u80fd\u91cf\u3002\u5355\u4f4d\u4e3a\u7126\u8033\uff08J\uff09\u3002",
            },
            {
              en: "Joule",
              zh: "\u7126\u8033",
              defEn: "The unit used to measure energy, including heat energy. Symbol: J.",
              defZh: "\u7528\u4e8e\u6d4b\u91cf\u80fd\u91cf\uff08\u5305\u62ec\u70ed\u80fd\uff09\u7684\u5355\u4f4d\u3002\u7b26\u53f7\uff1aJ\u3002",
            },
            {
              en: "Thermal energy",
              zh: "\u70ed\u91cf",
              defEn: "Another name for heat energy — the total energy contained in an object due to particle movement.",
              defZh: "\u70ed\u80fd\u7684\u53e6\u4e00\u540d\u79f0\u2014\u2014\u7531\u4e8e\u7c92\u5b50\u8fd0\u52a8\uff0c\u7269\u4f53\u4e2d\u5305\u542b\u7684\u603b\u80fd\u91cf\u3002",
            },
          ],
        },
        {
          type: "image",
          caption: "A heating curve graph showing temperature staying constant during a change of state, even as heat energy continues to be added",
          captionZh: "\u52a0\u70ed\u66f2\u7ebf\u56fe\uff0c\u663e\u793a\u5373\u4f7f\u6301\u7eed\u8f93\u5165\u70ed\u80fd\uff0c\u72b6\u6001\u53d8\u5316\u671f\u95f4\u6e29\u5ea6\u4fdd\u6301\u4e0d\u53d8",
          source: "Wikimedia Commons",
          wikimediaFile: "Heating_Curve_of_Water.png",
        },
        {
          type: "source",
          labelEn: "Key concept",
          labelZh: "\u6838\u5fc3\u6982\u5ff5",
          en: "From the revision notes: 'Temperature measures how fast particles are moving. Heat energy is measured in joules. The amount of thermal energy in an object depends on its temperature, the material, and its mass. Heat and temperature are NOT the same thing.'",
          zh: "\u6765\u81ea\u590f\u4e60\u7b14\u8bb0\uff1a\u201c\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\u3002\u70ed\u80fd\u7684\u5355\u4f4d\u662f\u7126\u8033\u3002\u7269\u4f53\u4e2d\u70ed\u91cf\u7684\u591a\u5c11\u53d6\u51b3\u4e8e\u5176\u6e29\u5ea6\u3001\u6750\u6599\u548c\u8d28\u91cf\u3002\u70ed\u91cf\u548c\u6e29\u5ea6\u4e0d\u662f\u540c\u4e00\u56de\u4e8b\u3002\u201d",
        },
        {
          type: "think",
          questions: [
            {
              qEn: "A large bucket of water at 30°C and a small cup of water at 30°C have the same temperature. Do they contain the same amount of heat energy? Explain.",
              qZh: "\u4e00\u4e2a30\u2103\u7684\u5927\u6876\u6c34\u548c\u4e00\u4e2a30\u2103\u7684\u5c0f\u676f\u6c34\u6e29\u5ea6\u76f8\u540c\u3002\u5b83\u4eec\u542b\u6709\u76f8\u540c\u7684\u70ed\u80fd\u5417\uff1f\u8bf7\u89e3\u91ca\u3002",
              aEn: "No, they do not contain the same amount of heat energy. Although the temperature is the same — meaning the particles in both are moving at the same average speed — the large bucket has a far greater mass of water. Heat energy depends on both temperature and mass, so the bucket contains much more heat energy overall than the cup. If you poured both into a cold room, the bucket would warm it up much more than the cup.",
              aZh: "\u4e0d\uff0c\u5b83\u4eec\u5305\u542b\u7684\u70ed\u80fd\u4e0d\u540c\u3002\u5c3d\u7ba1\u6e29\u5ea6\u76f8\u540c\u2014\u2014\u610f\u5473\u7740\u4e24\u8005\u4e2d\u7c92\u5b50\u7684\u5e73\u5747\u8fd0\u52a8\u901f\u5ea6\u76f8\u540c\u2014\u2014\u4f46\u5927\u6876\u7684\u6c34\u7684\u8d28\u91cf\u8fdc\u5927\u4e8e\u5c0f\u676f\u3002\u70ed\u80fd\u53d6\u51b3\u4e8e\u6e29\u5ea6\u548c\u8d28\u91cf\uff0c\u56e0\u6b64\u6876\u4e2d\u6574\u4f53\u70ed\u80fd\u8fdc\u5927\u4e8e\u676f\u4e2d\u3002\u5982\u679c\u5c06\u4e24\u8005\u5012\u5165\u51b7\u623f\u5185\uff0c\u6876\u80fd\u52a0\u70ed\u623f\u95f4\u7684\u7a0b\u5ea6\u8fdc\u5927\u4e8e\u676f\u3002",
            },
            {
              qEn: "Ice is being heated steadily. For a while, the temperature stays at 0°C even though heat is still being added. How does this show that heat and temperature are different?",
              qZh: "\u51b0\u5728\u6301\u7eed\u52a0\u70ed\u3002\u6709\u4e00\u6bb5\u65f6\u95f4\uff0c\u5c3d\u7ba1\u4ecd\u5728\u8f93\u5165\u70ed\u91cf\uff0c\u6e29\u5ea6\u5374\u4fdd\u6301\u5728 0\u2103\u3002\u8fd9\u600e\u4e48\u8bf4\u660e\u70ed\u91cf\u548c\u6e29\u5ea6\u662f\u4e0d\u540c\u7684\uff1f",
              aEn: "If heat and temperature were the same thing, then adding heat would always raise the temperature. But during melting, heat energy is being added continuously while the temperature stays at 0°C. The heat energy is being used to break apart the structure of the ice — to change the arrangement of particles from solid to liquid — rather than making the particles move faster. This proves that heat energy and temperature are different: temperature is about particle speed, but heat energy can be used for other purposes, such as changing state.",
              aZh: "\u5982\u679c\u70ed\u91cf\u548c\u6e29\u5ea6\u662f\u540c\u4e00\u56de\u4e8b\uff0c\u90a3\u4e48\u8f93\u5165\u70ed\u91cf\u5e94\u8be5\u603b\u662f\u4f1a\u5347\u9ad8\u6e29\u5ea6\u3002\u4f46\u5728\u878d\u5316\u8fc7\u7a0b\u4e2d\uff0c\u70ed\u80fd\u6301\u7eed\u8f93\u5165\uff0c\u800c\u6e29\u5ea6\u5374\u4fdd\u6301\u5728 0\u2103\u3002\u70ed\u80fd\u88ab\u7528\u6765\u7834\u574f\u51b0\u7684\u7ed3\u6784\u2014\u2014\u5c06\u7c92\u5b50\u7684\u6392\u5217\u65b9\u5f0f\u4ece\u56fa\u4f53\u53d8\u4e3a\u6db2\u4f53\u2014\u2014\u800c\u4e0d\u662f\u4f7f\u7c92\u5b50\u8fd0\u52a8\u5f97\u66f4\u5feb\u3002\u8fd9\u8bc1\u660e\u4e86\u70ed\u80fd\u548c\u6e29\u5ea6\u662f\u4e0d\u540c\u7684\uff1a\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u5feb\u6162\uff0c\u4f46\u70ed\u80fd\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684\uff0c\u4f8b\u5982\u6539\u53d8\u72b6\u6001\u3002",
            },
          ],
        },
        {
          type: "quiz",
          qEn: "Which statement correctly explains the difference between heat energy and temperature?",
          qZh: "\u54ea\u9879\u8bf4\u6cd5\u6b63\u786e\u5730\u89e3\u91ca\u4e86\u70ed\u80fd\u548c\u6e29\u5ea6\u4e4b\u95f4\u7684\u533a\u522b\uff1f",
          opts: [
            {
              en: "Temperature is measured in joules and heat energy is measured in degrees Celsius.",
              zh: "\u6e29\u5ea6\u7528\u7126\u8033\u8ba1\u91cf\uff0c\u70ed\u80fd\u7528\u6444\u6c0f\u5ea6\u8ba1\u91cf\u3002",
            },
            {
              en: "Temperature and heat energy are both measures of how hot something is, just using different units.",
              zh: "\u6e29\u5ea6\u548c\u70ed\u80fd\u90fd\u662f\u8861\u91cf\u7269\u4f53\u6709\u591a\u70ed\u7684\uff0c\u53ea\u662f\u5355\u4f4d\u4e0d\u540c\u3002",
            },
            {
              en: "Temperature measures how fast particles move; heat energy is the total energy in the substance and depends on temperature, material, and mass.",
              zh: "\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\uff1b\u70ed\u80fd\u662f\u7269\u8d28\u4e2d\u7684\u603b\u80fd\u91cf\uff0c\u53d6\u51b3\u4e8e\u6e29\u5ea6\u3001\u6750\u6599\u548c\u8d28\u91cf\u3002",
            },
            {
              en: "Heat energy only depends on temperature, so two objects at the same temperature always have the same heat energy.",
              zh: "\u70ed\u80fd\u4ec5\u53d6\u51b3\u4e8e\u6e29\u5ea6\uff0c\u56e0\u6b64\u6e29\u5ea6\u76f8\u540c\u7684\u4e24\u4e2a\u7269\u4f53\u5fc5\u7136\u542b\u6709\u76f8\u540c\u7684\u70ed\u80fd\u3002",
            },
          ],
          correct: 2,
          explainCorrectEn: "Correct. Temperature is a measure of how fast particles are moving, expressed in degrees Celsius. Heat energy (thermal energy) is the total energy stored in a substance, and it depends not just on temperature, but also on the mass of the substance and what material it is made of. Two objects at the same temperature can have very different amounts of heat energy if they differ in mass or material.",
          explainCorrectZh: "\u6b63\u786e\u3002\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\uff0c\u4ee5\u6444\u6c0f\u5ea6\u8868\u793a\u3002\u70ed\u80fd\uff08\u70ed\u91cf\uff09\u662f\u7269\u8d28\u4e2d\u5b58\u50a8\u7684\u603b\u80fd\u91cf\uff0c\u53d6\u51b3\u4e8e\u6e29\u5ea6\u3001\u7269\u8d28\u7684\u8d28\u91cf\u4ee5\u53ca\u7269\u8d28\u7684\u79cd\u7c7b\u3002\u6e29\u5ea6\u76f8\u540c\u7684\u4e24\u4e2a\u7269\u4f53\uff0c\u5982\u679c\u8d28\u91cf\u6216\u6750\u6599\u4e0d\u540c\uff0c\u53ef\u4ee5\u542b\u6709\u975e\u5e38\u4e0d\u540c\u7684\u70ed\u80fd\u3002",
          explainWrongEn: "Not quite. Temperature is measured in degrees Celsius (°C), not joules. Heat energy is measured in joules (J). They are not the same quantity — temperature tells you about particle speed, while heat energy is the total energy stored, which also depends on mass and material.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6e29\u5ea6\u7528\u6444\u6c0f\u5ea6\uff08\u2103\uff09\u8ba1\u91cf\uff0c\u4e0d\u662f\u7126\u8033\u3002\u70ed\u80fd\u7528\u7126\u8033\uff08J\uff09\u8ba1\u91cf\u3002\u5b83\u4eec\u4e0d\u662f\u540c\u4e00\u79cd\u91cf\u2014\u2014\u6e29\u5ea6\u544a\u8bc9\u4f60\u7c92\u5b50\u7684\u8fd0\u52a8\u5feb\u6162\uff0c\u800c\u70ed\u80fd\u662f\u5b58\u50a8\u7684\u603b\u80fd\u91cf\uff0c\u8fd8\u53d6\u51b3\u4e8e\u8d28\u91cf\u548c\u6750\u6599\u3002",
        },
      ],
    },

  ],
};
