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
              zh: "\u5f53\u7269\u8d28\u53d1\u751f\u72b6\u6001\u53d8\u5316\u65f6\uff0c\u7c92\u5b50\u672c\u8eab\u5e76\u4e0d\u6539\u53d8\u2014\u2014\u4f46\u5b83\u4eec\u7684\u6392\u5217\u65b9\u5f0f\u548c\u6240\u62e5\u6709\u7684\u80fd\u91cf\u786b\u5b9e\u53d1\u751f\u4e86\u53d8\u5316\u3002\u71b3\u5316\u3001\u6c38\u817e\u3001\u51dd\u7ed3\u548c\u51b0\u7ed3\u90fd\u662f\u72b6\u6001\u53d8\u5316\u3002",
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
              defZh: "\u7269\u8d28\u4ece\u4e00\u79cd\u72b6\u6001\u53d8\u4e3a\u53e6\u4e00\u79cd\u72b6\u6001\uff0c\u4f8b\u5982\u71b3\u5316\uff08\u56fa\u4f53\u53d8\u6db2\u4f53\uff09\u6216\u6c38\u817e\uff08\u6db2\u4f53\u53d8\u6c14\u4f53\uff09\u3002",
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
              qZh: "\u4e00\u4f4d\u540c\u5b66\u8bf4\uff1a\u201c\u6c34\u53d8\u6210\u86f8\u6c14\u65f6\uff0c\u7c92\u5b50\u53d8\u5927\u4e86\u3002\u201d\u8fd9\u662f\u6b63\u786b\u7684\u5417\uff1f\u8bf7\u89e3\u91ca\u4f60\u7684\u7b54\u6848\u3002",
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
          explainCorrectZh: "\u6b63\u786b\u3002\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u4ecd\u7136\u5f7c\u6b64\u9760\u8fd1\u5e76\u76f8\u4e92\u63a5\u89e6\uff0c\u4f46\u53ef\u4ee5\u81ea\u7531\u76f8\u4e92\u6ed1\u52a8\u3002\u8fd9\u4f7f\u6db2\u4f53\u80fd\u591f\u6d41\u52a8\u5e76\u5145\u6ee1\u5bb9\u5668\u7684\u5f62\u72b6\u3002\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u88ab\u56fa\u5b9a\u5728\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u53ea\u80fd\u632f\u52a8\u2014\u2014\u5b83\u4eec\u65e0\u6cd5\u6539\u53d8\u76f8\u5bf9\u4f4d\u7f6e\u3002",
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
          explainCorrectZh: "\u6b63\u786b\u3002\u91d1\u5c5e\u7403\u52a0\u70ed\u65f6\uff0c\u5176\u7c92\u5b50\u632f\u52a8\u52a0\u5feb\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u8ddd\u79bb\u589e\u5927\u3002\u7403\u81a8\u80c0\u53d8\u5f97\u7a0d\u5927\u3002\u7531\u4e8e\u73af\u4fdd\u6301\u5e38\u6e29\u6ca1\u6709\u81a8\u80c0\uff0c\u7403\u5c31\u65e0\u6cd5\u518d\u7a7f\u8fc7\u4e86\u3002",
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
          explainCorrectZh: "\u6b63\u786b\u3002\u6c14\u4f53\u7c92\u5b50\u4e4b\u95f4\u5df2\u7ecf\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5b83\u4eec\u4e4b\u95f4\u6709\u5de8\u5927\u7684\u7a7a\u95f4\u3002\u52a0\u70ed\u65f6\uff0c\u5b83\u4eec\u8fd0\u52a8\u5f97\u66f4\u5feb\uff0c\u5e76\u80fd\u5c55\u5f00\u5230\u8fd9\u4e9b\u7a7a\u95f4\u7684\u66f4\u8fdc\u5904\u3002\u5728\u6db2\u4f53\u4e2d\uff0c\u7c92\u5b50\u5df2\u7ecf\u76f8\u4e92\u63a5\u89e6\uff0c\u51e0\u4e4e\u6ca1\u6709\u81a8\u80c0\u7684\u7a7a\u95f4\uff0c\u6240\u4ee5\u76f8\u540c\u7684\u6e29\u5ea6\u53d8\u5316\u5bfc\u81f4\u7684\u4f53\u79ef\u589e\u5927\u5c0f\u5f97\u591a\u3002",
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
          zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\u3002\u70ed\u80fd\u7684\u5355\u4f4d\u662f\u7126\u8033\u3002\u7269\u4f53\u4e2d\u70ed\u91cf\u7684\u591a\u5c11\u53d6\u51b3\u4e8e\u5176\u6e29\u5ea6\u3001\u6750\u6599\u548c\u8d28\u91cf\u3002\u70ed\u91cf\u548c\u6e29\u5ea6\u4e0d\u662f\u540c\u4e00\u56de\u4e8b\u3002\u201d",
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
          qZh: "\u54ea\u9879\u8bf4\u6cd5\u6b63\u786b\u5730\u89e3\u91ca\u4e86\u70ed\u80fd\u548c\u6e29\u5ea6\u4e4b\u95f4\u7684\u533a\u522b\uff1f",
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
          explainCorrectZh: "\u6b63\u786b\u3002\u6e29\u5ea6\u8861\u91cf\u7c92\u5b50\u8fd0\u52a8\u7684\u5feb\u6162\uff0c\u4ee5\u6444\u6c0f\u5ea6\u8868\u793a\u3002\u70ed\u80fd\uff08\u70ed\u91cf\uff09\u662f\u7269\u8d28\u4e2d\u5b58\u50a8\u7684\u603b\u80fd\u91cf\uff0c\u53d6\u51b3\u4e8e\u6e29\u5ea6\u3001\u7269\u8d28\u7684\u8d28\u91cf\u4ee5\u53ca\u7269\u8d28\u7684\u79cd\u7c7b\u3002\u6e29\u5ea6\u76f8\u540c\u7684\u4e24\u4e2a\u7269\u4f53\uff0c\u5982\u679c\u8d28\u91cf\u6216\u6750\u6599\u4e0d\u540c\uff0c\u53ef\u4ee5\u542b\u6709\u975e\u5e38\u4e0d\u540c\u7684\u70ed\u80fd\u3002",
          explainWrongEn: "Not quite. Temperature is measured in degrees Celsius (°C), not joules. Heat energy is measured in joules (J). They are not the same quantity — temperature tells you about particle speed, while heat energy is the total energy stored, which also depends on mass and material.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6e29\u5ea6\u7528\u6444\u6c0f\u5ea6\uff08\u2103\uff09\u8ba1\u91cf\uff0c\u4e0d\u662f\u7126\u8033\u3002\u70ed\u80fd\u7528\u7126\u8033\uff08J\uff09\u8ba1\u91cf\u3002\u5b83\u4eec\u4e0d\u662f\u540c\u4e00\u79cd\u91cf\u2014\u2014\u6e29\u5ea6\u544a\u8bc9\u4f60\u7c92\u5b50\u7684\u8fd0\u52a8\u5feb\u6162\uff0c\u800c\u70ed\u80fd\u662f\u5b58\u50a8\u7684\u603b\u80fd\u91cf\uff0c\u8fd8\u53d6\u51b3\u4e8e\u8d28\u91cf\u548c\u6750\u6599\u3002",
        },
      ],
    },

    /* ========== Lesson 5 ========== */
    {
      num: 5,
      badge: "T",
      title: "Conduction",
      titleZh: "\u70ed\u4f20\u5bfc",
      subtitle: "How does heat travel through solids?",
      subtitleZh: "\u70ed\u91cf\u662f\u5982\u4f55\u901a\u8fc7\u56fa\u4f53\u4f20\u9012\u7684\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can explain how heat is conducted through a solid using the particle model.", zh: "\u6211\u80fd\u7528\u7c92\u5b50\u6a21\u578b\u89e3\u91ca\u70ed\u91cf\u662f\u5982\u4f55\u5728\u56fa\u4f53\u4e2d\u4f20\u5bfc\u7684\u3002" },
          { en: "I can explain why metals are good conductors and why gases are poor conductors.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u91d1\u5c5e\u662f\u826f\u5bfc\u4f53\uff0c\u4e3a\u4ec0\u4e48\u6c14\u4f53\u662f\u4e0d\u826f\u5bfc\u4f53\u3002" },
          { en: "I can state that heat always moves from a hotter area to a colder area.", zh: "\u6211\u80fd\u8bf4\u51fa\u70ed\u91cf\u603b\u662f\u4ece\u8f83\u70ed\u533a\u57df\u6d41\u5411\u8f83\u51b7\u533a\u57df\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "Conduction is the transfer of heat energy through a material without the material itself moving. It is the main method of heat transfer in solids.", zh: "\u4f20\u5bfc\u662f\u70ed\u80fd\u5728\u7269\u8d28\u4e2d\u7684\u4f20\u9012\uff0c\u7269\u8d28\u672c\u8eab\u5e76\u4e0d\u79fb\u52a8\u3002\u5b83\u662f\u56fa\u4f53\u4e2d\u70ed\u91cf\u4f20\u9012\u7684\u4e3b\u8981\u65b9\u5f0f\u3002" },
          { type: "text", en: "When one end of a solid is heated, the particles at that end gain energy and vibrate faster. They collide with neighbouring particles, passing on energy. Those particles then vibrate faster and collide with their neighbours, and so on. In this way, heat energy is gradually passed along the solid from the hot end to the cold end.", zh: "\u5f53\u56fa\u4f53\u7684\u4e00\u7aef\u88ab\u52a0\u70ed\u65f6\uff0c\u8be5\u7aef\u7684\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u5e76\u632f\u52a8\u5f97\u66f4\u5feb\u3002\u5b83\u4eec\u4e0e\u76f8\u90bb\u7c92\u5b50\u78b0\u649e\uff0c\u4f20\u9012\u80fd\u91cf\u3002\u90a3\u4e9b\u7c92\u5b50\u968f\u540e\u632f\u52a8\u5f97\u66f4\u5feb\u5e76\u4e0e\u5b83\u4eec\u7684\u90bb\u5c45\u78b0\u649e\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u8fd9\u6837\uff0c\u70ed\u80fd\u9010\u6e10\u6cbf\u56fa\u4f53\u4ece\u70ed\u7aef\u4f20\u5bfc\u5230\u51b7\u7aef\u3002" },
          { type: "highlight", en: "Heat always moves from a hotter area to a colder area — never the other way around. This is true for all three methods of heat transfer.", zh: "\u70ed\u91cf\u603b\u662f\u4ece\u8f83\u70ed\u533a\u57df\u6d41\u5411\u8f83\u51b7\u533a\u57df\u2014\u2014\u6c38\u8fdc\u4e0d\u4f1a\u53cd\u5411\u3002\u8fd9\u5bf9\u4e09\u79cd\u70ed\u91cf\u4f20\u9012\u65b9\u5f0f\u90fd\u9002\u7528\u3002" },
          { type: "text", en: "Metals are good conductors of heat because their particles are closely packed and transfer energy efficiently through collisions. Liquids and gases are poor conductors because their particles are further apart, so collisions happen less effectively and energy does not pass along as well.", zh: "\u91d1\u5c5e\u662f\u826f\u597d\u7684\u70ed\u5bfc\u4f53\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c92\u5b50\u5f7c\u6b64\u7d27\u5bc6\u5806\u79ef\uff0c\u80fd\u901a\u8fc7\u78b0\u649e\u6709\u6548\u5730\u4f20\u9012\u80fd\u91cf\u3002\u6db2\u4f53\u548c\u6c14\u4f53\u662f\u4e0d\u826f\u5bfc\u4f53\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c92\u5b50\u76f8\u8ddd\u8f83\u8fdc\uff0c\u78b0\u649e\u6548\u679c\u8f83\u5dee\uff0c\u80fd\u91cf\u4f20\u9012\u6548\u7387\u4e5f\u8f83\u4f4e\u3002" },
          { type: "example", en: "Think of holding a metal spoon in a hot drink — the handle quickly becomes warm as heat conducts from the hot liquid end to your hand. A wooden spoon does not do this because wood is a poor conductor (an insulator). This is why cooking utensils often have wooden or plastic handles.", zh: "\u60f3\u8c61\u5c06\u4e00\u628a\u91d1\u5c5e\u6c64\u5319\u653e\u5165\u70ed\u996e\u6599\u4e2d\u2014\u2014\u624b\u67c4\u5f88\u5feb\u5c31\u4f1a\u53d8\u70ed\uff0c\u56e0\u4e3a\u70ed\u91cf\u4ece\u70ed\u6c64\u7684\u4e00\u7aef\u4f20\u5bfc\u5230\u4f60\u7684\u624b\u3002\u6728\u5c0f\u5320\u5c31\u4e0d\u4f1a\u8fd9\u6837\uff0c\u56e0\u4e3a\u6728\u6750\u662f\u4e0d\u826f\u5bfc\u4f53\uff08\u7edd\u7f18\u4f53\uff09\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u70f9\u996a\u5de5\u5177\u901a\u5e38\u6709\u6728\u8d28\u6216\u5851\u6599\u624b\u67c4\u7684\u539f\u56e0\u3002" },
        ]},
        { type: "vocab", words: [
          { en: "Conduction", zh: "\u4f20\u5bfc", defEn: "The transfer of heat through a material by particle collisions, without the material moving.", defZh: "\u70ed\u91cf\u901a\u8fc7\u7c92\u5b50\u78b0\u649e\u5728\u7269\u8d28\u4e2d\u4f20\u9012\uff0c\u7269\u8d22\u672c\u8eab\u4e0d\u79fb\u52a8\u3002" },
          { en: "Conductor", zh: "\u5bfc\u4f53", defEn: "A material that transfers heat easily, such as a metal.", defZh: "\u80fd\u5bb9\u6613\u4f20\u9012\u70ed\u91cf\u7684\u7269\u8d28\uff0c\u4f8b\u5982\u91d1\u5c5e\u3002" },
          { en: "Insulator", zh: "\u7edd\u7f18\u4f53", defEn: "A material that does not transfer heat well, such as wood, plastic, or air.", defZh: "\u4e0d\u80fd\u826f\u597d\u4f20\u9012\u70ed\u91cf\u7684\u7269\u8d28\uff0c\u4f8b\u5982\u6728\u6750\u3001\u5851\u6599\u6216\u7a7a\u6c14\u3002" },
          { en: "Particle collision", zh: "\u7c92\u5b50\u78b0\u649e", defEn: "When particles bump into each other and transfer energy — the mechanism of conduction.", defZh: "\u7c92\u5b50\u76f8\u4e92\u78b0\u649e\u5e76\u4f20\u9012\u80fd\u91cf\u2014\u2014\u4f20\u5bfc\u7684\u673a\u5236\u3002" },
        ]},
        { type: "image", caption: "Heat conduction along a metal rod — particles vibrate and collide to pass energy along", captionZh: "\u70ed\u91cf\u6cbf\u91d1\u5c5e\u68d2\u4f20\u5bfc\u2014\u2014\u7c92\u5b50\u632f\u52a8\u5e76\u78b0\u649e\u4ee5\u4f20\u9012\u80fd\u91cf", source: "Wikimedia Commons", wikimediaFile: "Heat_conduction_illustration.svg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Conduction mainly happens in solids. Particles near the heat source gain energy and vibrate faster. They collide with neighbouring particles. Energy is passed from particle to particle. Metals are good conductors. Liquids and gases are poor conductors because particles are further apart.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u4f20\u5bfc\u4e3b\u8981\u53d1\u751f\u5728\u56fa\u4f53\u4e2d\u3002\u9760\u8fd1\u70ed\u6e90\u7684\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u5e76\u632f\u52a8\u5f97\u66f4\u5feb\u3002\u5b83\u4eec\u4e0e\u76f8\u90bb\u7c92\u5b50\u78b0\u649e\u3002\u80fd\u91cf\u4ece\u7c92\u5b50\u4f20\u9012\u5230\u7c92\u5b50\u3002\u91d1\u5c5e\u662f\u826f\u5bfc\u4f53\u3002\u6db2\u4f53\u548c\u6c14\u4f53\u662f\u4e0d\u826f\u5bfc\u4f53\uff0c\u56e0\u4e3a\u7c92\u5b50\u76f8\u8ddd\u8f83\u8fdc\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "Explain, using the particle model, how heat travels along a metal rod when one end is heated.", qZh: "\u7528\u7c92\u5b50\u6a21\u578b\u89e3\u91ca\uff0c\u5f53\u91d1\u5c5e\u68d2\u7684\u4e00\u7aef\u88ab\u52a0\u70ed\u65f6\uff0c\u70ed\u91cf\u662f\u5982\u4f55\u6cbf\u68d2\u4f20\u9012\u7684\u3002", aEn: "When one end of the metal rod is heated, the particles at that end gain energy and vibrate faster and more vigorously. These particles collide with neighbouring particles, transferring some of their energy to them. Those neighbours then vibrate faster too, and collide with their neighbours in turn. This process continues along the rod, gradually passing energy from the hot end to the cold end. This is conduction.", aZh: "\u5f53\u91d1\u5c5e\u68d2\u7684\u4e00\u7aef\u88ab\u52a0\u70ed\u65f6\uff0c\u8be5\u7aef\u7684\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u5e76\u632f\u52a8\u5f97\u66f4\u5feb\u3001\u66f4\u5267\u70c8\u3002\u8fd9\u4e9b\u7c92\u5b50\u4e0e\u76f8\u90bb\u7c92\u5b50\u78b0\u649e\uff0c\u5c06\u90e8\u5206\u80fd\u91cf\u4f20\u9012\u7ed9\u5b83\u4eec\u3002\u90a3\u4e9b\u76f8\u90bb\u7c92\u5b50\u968f\u540e\u4e5f\u632f\u52a8\u5f97\u66f4\u5feb\uff0c\u5e76\u4f9d\u6b21\u4e0e\u5b83\u4eec\u7684\u90bb\u5c45\u78b0\u649e\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u6cbf\u68d2\u4e0d\u65ad\u5ef6\u7eed\uff0c\u9010\u6e10\u5c06\u80fd\u91cf\u4ece\u70ed\u7aef\u4f20\u9012\u5230\u51b7\u7aef\u3002\u8fd9\u5c31\u662f\u4f20\u5bfc\u3002" },
          { qEn: "Why are liquids and gases poor conductors of heat compared to solids?", qZh: "\u4e3a\u4ec0\u4e48\u6db2\u4f53\u548c\u6c14\u4f53\u4e0e\u56fa\u4f53\u76f8\u6bd4\u662f\u4e0d\u826f\u7684\u70ed\u5bfc\u4f53\uff1f", aEn: "In liquids and gases, the particles are further apart than in solids. This means that when particles collide, they do so less frequently and less effectively, so energy is not passed along as quickly or efficiently. In a gas especially, the particles are so far apart that very few collisions occur. This is why gases are the poorest conductors of all.", aZh: "\u5728\u6db2\u4f53\u548c\u6c14\u4f53\u4e2d\uff0c\u7c92\u5b50\u4e4b\u95f4\u7684\u8ddd\u79bb\u6bd4\u56fa\u4f53\u4e2d\u8fdc\u5f97\u591a\u3002\u8fd9\u610f\u5473\u7740\u7c92\u5b50\u78b0\u649e\u7684\u9891\u7387\u548c\u6548\u679c\u8f83\u4f4e\uff0c\u80fd\u91cf\u4f20\u9012\u5c31\u4e0d\u5982\u56fa\u4f53\u90a3\u4e48\u5feb\u6216\u9ad8\u6548\u3002\u5c24\u5176\u662f\u6c14\u4f53\uff0c\u7c92\u5b50\u4e4b\u95f4\u8ddd\u79bb\u5982\u6b64\u4e4b\u8fdc\uff0c\u4ee5\u81f3\u51e0\u4e4e\u5f88\u5c11\u53d1\u751f\u78b0\u649e\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6c14\u4f53\u662f\u6240\u6709\u7269\u8d28\u4e2d\u4f20\u5bfc\u6700\u5dee\u7684\u3002" },
        ]},
        { type: "quiz", qEn: "Why are metals good conductors of heat?", qZh: "\u4e3a\u4ec0\u4e48\u91d1\u5c5e\u662f\u826f\u597d\u7684\u70ed\u5bfc\u4f53\uff1f",
          opts: [
            { en: "Metal particles are larger, so they store more heat energy.", zh: "\u91d1\u5c5e\u7c92\u5b50\u8f83\u5927\uff0c\u56e0\u6b64\u80fd\u5b58\u50a8\u66f4\u591a\u70ed\u80fd\u3002" },
            { en: "Metal particles are closely packed, so they collide frequently and pass energy along efficiently.", zh: "\u91d1\u5c5e\u7c92\u5b50\u5f7c\u6b64\u7d27\u5bc6\u5806\u79ef\uff0c\u56e0\u6b64\u78b0\u649e\u9891\u7e41\uff0c\u80fd\u9ad8\u6548\u5730\u4f20\u9012\u80fd\u91cf\u3002" },
            { en: "Metals are hotter than other materials, so heat travels faster.", zh: "\u91d1\u5c5e\u6bd4\u5176\u4ed6\u6750\u6599\u6e29\u5ea6\u66f4\u9ad8\uff0c\u6240\u4ee5\u70ed\u91cf\u4f20\u9012\u5f97\u66f4\u5feb\u3002" },
            { en: "Metal particles move randomly, spreading heat in all directions at once.", zh: "\u91d1\u5c5e\u7c92\u5b50\u968f\u673a\u8fd0\u52a8\uff0c\u540c\u65f6\u5411\u56db\u9762\u516b\u65b9\u4f20\u64ad\u70ed\u91cf\u3002" },
          ],
          correct: 1,
          explainCorrectEn: "Correct. In metals, particles are closely and regularly packed. When one end is heated, the particles vibrate faster and collide with their neighbours quickly and effectively, passing energy along efficiently. This is why metals conduct heat well.",
          explainCorrectZh: "\u6b63\u786b\u3002\u5728\u91d1\u5c5e\u4e2d\uff0c\u7c92\u5b50\u5f7c\u6b64\u7d27\u5bc6\u5e76\u6709\u89c4\u5219\u5730\u5806\u79ef\u3002\u5f53\u4e00\u7aef\u88ab\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u632f\u52a8\u5f97\u66f4\u5feb\u5e76\u8fc5\u901f\u6709\u6548\u5730\u4e0e\u90bb\u5c45\u78b0\u649e\uff0c\u9ad8\u6548\u5730\u4f20\u9012\u80fd\u91cf\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u91d1\u5c5e\u5bfc\u70ed\u6027\u8fd0\u5f97\u5f88\u597d\u3002",
          explainWrongEn: "Not quite. It is not the size of the particles or the temperature of the metal that matters — it is how closely packed the particles are. Closely packed particles collide frequently and efficiently, passing energy along quickly. Liquids and gases conduct poorly because their particles are more spread out.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u51b3\u5b9a\u56e0\u7d20\u4e0d\u662f\u7c92\u5b50\u7684\u5927\u5c0f\u6216\u91d1\u5c5e\u7684\u6e29\u5ea6\uff0c\u800c\u662f\u7c92\u5b50\u5806\u79ef\u7684\u7d27\u5bc6\u7a0b\u5ea6\u3002\u7d27\u5bc6\u5806\u79ef\u7684\u7c92\u5b50\u78b0\u649e\u9891\u7e41\u4e14\u9ad8\u6548\uff0c\u80fd\u5feb\u901f\u4f20\u9012\u80fd\u91cf\u3002\u6db2\u4f53\u548c\u6c14\u4f53\u4f20\u5bfc\u6027\u5dee\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c92\u5b50\u6bd4\u8f83\u5206\u6563\u3002",
        },
      ],
    },

    /* ========== Lesson 6 ========== */
    {
      num: 6,
      badge: "E",
      title: "Conduction — Key Practical",
      titleZh: "\u4f20\u5bfc\u5b9e\u9a8c",
      subtitle: "Which material conducts heat the best?",
      subtitleZh: "\u54ea\u79cd\u6750\u6599\u7684\u5bfc\u70ed\u6027\u6700\u597d\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can identify the independent, dependent, and control variables in a conduction experiment.", zh: "\u6211\u80fd\u8bc6\u522b\u4f20\u5bfc\u5b9e\u9a8c\u4e2d\u7684\u81ea\u53d8\u91cf\u3001\u56e0\u53d8\u91cf\u548c\u63a7\u5236\u53d8\u91cf\u3002" },
          { en: "I can explain why control variables are important for making a test fair.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u63a7\u5236\u53d8\u91cf\u5bf9\u4e8e\u786b\u4fdd\u5b9e\u9a8c\u516c\u5e73\u5f88\u91cd\u8981\u3002" },
          { en: "I can explain why repeat readings improve the precision of results.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u91cd\u590d\u6d4b\u91cf\u80fd\u63d0\u9ad8\u7ed3\u679c\u7684\u7cbe\u786b\u6027\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "In the conduction practical, different materials are tested to find out which conducts heat best. A common version uses metal rods of different materials (such as copper, iron, and brass) coated with wax and a drawing pin or ball bearing attached. When the rods are heated at one end, the wax melts and the pin drops — the faster it drops, the better the conductor.", zh: "\u5728\u4f20\u5bfc\u5b9e\u9a8c\u4e2d\uff0c\u6d4b\u8bd5\u4e0d\u540c\u6750\u6599\u4ee5\u627e\u51fa\u54ea\u79cd\u5bfc\u70ed\u6027\u6700\u597d\u3002\u4e00\u79cd\u5e38\u89c1\u7684\u65b9\u6cd5\u662f\u5c06\u6d82\u6709\u8721\u7684\u4e0d\u540c\u6750\u8d28\u91d1\u5c5e\u68d2\uff08\u5982\u94dc\u3001\u94c1\u548c\u9ec4\u94dc\uff09\u7684\u4e00\u7aef\u52a0\u70ed\uff0c\u8721\u878d\u5316\u540e\u56fe\u9489\u6216\u73e0\u7b46\u5c31\u4f1a\u843d\u4e0b\u2014\u2014\u843d\u5f97\u8d8a\u5feb\uff0c\u5bfc\u70ed\u6027\u8d8a\u597d\u3002" },
          { type: "highlight", en: "Independent variable: the type of material. Dependent variable: the time taken for the wax to melt (or pin to drop). Control variables: the length and diameter of the rod, the distance from the heat source, and the amount of wax used.", zh: "\u81ea\u53d8\u91cf\uff1a\u6750\u6599\u7c7b\u578b\u3002\u56e0\u53d8\u91cf\uff1a\u8721\u878d\u5316\u6240\u9700\u65f6\u95f4\uff08\u6216\u56fe\u9489\u843d\u4e0b\u7684\u65f6\u95f4\uff09\u3002\u63a7\u5236\u53d8\u91cf\uff1a\u68d2\u7684\u957f\u5ea6\u548c\u76f4\u5f84\u3001\u4e0e\u70ed\u6e90\u7684\u8ddd\u79bb\uff0c\u4ee5\u53ca\u8721\u7684\u7528\u91cf\u3002" },
          { type: "text", en: "Control variables are kept the same to make the test fair. If you changed the length of the rod as well as the material, you would not know which factor caused any difference in results.", zh: "\u63a7\u5236\u53d8\u91cf\u4fdd\u6301\u4e0d\u53d8\u662f\u4e3a\u4e86\u4f7f\u5b9e\u9a8c\u516c\u5e73\u3002\u5982\u679c\u4f60\u5728\u6539\u53d8\u6750\u6599\u7684\u540c\u65f6\u8fd8\u6539\u53d8\u68d2\u7684\u957f\u5ea6\uff0c\u4f60\u5c31\u65e0\u6cd5\u786b\u5b9a\u662f\u54ea\u4e2a\u56e0\u7d20\u5bfc\u81f4\u4e86\u7ed3\u679c\u7684\u5dee\u5f02\u3002" },
          { type: "text", en: "Repeat readings are taken to improve precision and to identify anomalies — results that are very different from the others and may have been caused by an error. Taking a mean (average) of repeated results gives a more reliable value.", zh: "\u91cd\u590d\u6d4b\u91cf\u662f\u4e3a\u4e86\u63d0\u9ad8\u7cbe\u786b\u6027\u5e76\u8bc6\u522b\u5f02\u5e38\u503c\u2014\u2014\u90a3\u4e9b\u4e0e\u5176\u4ed6\u7ed3\u679c\u76f8\u5dee\u5f88\u5927\u7684\u6570\u636e\uff0c\u53ef\u80fd\u662f\u7531\u9519\u8bef\u5bfc\u81f4\u7684\u3002\u5bf9\u91cd\u590d\u7ed3\u679c\u53d6\u5e73\u5747\u503c\uff0c\u53ef\u4ee5\u5f97\u5230\u66f4\u53ef\u9760\u7684\u6570\u636e\u3002" },
          { type: "example", en: "A typical conclusion from this practical: 'Copper conducted heat the fastest because the drawing pin dropped first. Wood did not conduct heat at all — the pin never dropped. This is because copper particles are closely packed and pass energy along quickly, while wood is an insulator.'", zh: "\u8be5\u5b9e\u9a8c\u7684\u5178\u578b\u7ed3\u8bba\uff1a\u201c\u94dc\u4f20\u5bfc\u70ed\u91cf\u6700\u5feb\uff0c\u56e0\u4e3a\u56fe\u9489\u6700\u5148\u843d\u4e0b\u3002\u6728\u6750\u6839\u672c\u4e0d\u4f20\u5bfc\u70ed\u91cf\u2014\u2014\u56fe\u9489\u59cb\u7ec8\u6ca1\u6709\u843d\u4e0b\u3002\u8fd9\u662f\u56e0\u4e3a\u94dc\u7c92\u5b50\u5f7c\u6b64\u7d27\u5bc6\u5806\u79ef\uff0c\u80fd\u8fc5\u901f\u4f20\u9012\u80fd\u91cf\uff0c\u800c\u6728\u6750\u662f\u7edd\u7f18\u4f53\u3002\u201d" },
        ]},
        { type: "vocab", words: [
          { en: "Independent variable", zh: "\u81ea\u53d8\u91cf", defEn: "The variable you deliberately change in an experiment.", defZh: "\u5b9e\u9a8c\u4e2d\u4f60\u6545\u610f\u6539\u53d8\u7684\u53d8\u91cf\u3002" },
          { en: "Dependent variable", zh: "\u56e0\u53d8\u91cf", defEn: "The variable you measure in response to the change you made.", defZh: "\u4f60\u6839\u636e\u6240\u505a\u6539\u53d8\u800c\u8fdb\u884c\u6d4b\u91cf\u7684\u53d8\u91cf\u3002" },
          { en: "Control variable", zh: "\u63a7\u5236\u53d8\u91cf", defEn: "A variable kept the same throughout the experiment to make the test fair.", defZh: "\u5b9e\u9a8c\u5168\u7a0b\u4fdd\u6301\u4e0d\u53d8\u7684\u53d8\u91cf\uff0c\u4ee5\u4f7f\u5b9e\u9a8c\u516c\u5e73\u3002" },
          { en: "Anomaly", zh: "\u5f02\u5e38\u503c", defEn: "A result that does not fit the pattern of other results, often caused by an experimental error.", defZh: "\u4e0e\u5176\u4ed6\u7ed3\u679c\u89c4\u5f8b\u4e0d\u7b26\u7684\u6570\u636e\uff0c\u901a\u5e38\u7531\u5b9e\u9a8c\u8bef\u5dee\u5bfc\u81f4\u3002" },
        ]},
        { type: "image", caption: "Metal rods coated with wax used to compare thermal conductivity of different materials", captionZh: "\u6d82\u6709\u8721\u7684\u91d1\u5c5e\u68d2\uff0c\u7528\u4e8e\u6bd4\u8f83\u4e0d\u540c\u6750\u6599\u7684\u5bfc\u70ed\u6027", source: "Wikimedia Commons", wikimediaFile: "Thermal_conductivity_experiment.jpg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Independent variable: type of material. Dependent variable: time taken for heat to conduct. Control variables reduce error and improve precision. Repeat readings help identify anomalies and allow calculation of an average.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u81ea\u53d8\u91cf\uff1a\u6750\u6599\u7c7b\u578b\u3002\u56e0\u53d8\u91cf\uff1a\u70ed\u91cf\u4f20\u5bfc\u6240\u9700\u65f6\u95f4\u3002\u63a7\u5236\u53d8\u91cf\u51cf\u5c11\u8bef\u5dee\u5e76\u63d0\u9ad8\u7cbe\u786b\u6027\u3002\u91cd\u590d\u6d4b\u91cf\u6709\u52a9\u4e8e\u8bc6\u522b\u5f02\u5e38\u503c\u5e76\u8ba1\u7b97\u5e73\u5747\u503c\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "In a conduction experiment using rods, a student changes both the material and the length of the rod. Why is this a problem?", qZh: "\u5728\u4e00\u4e2a\u4f7f\u7528\u68d2\u7684\u4f20\u5bfc\u5b9e\u9a8c\u4e2d\uff0c\u4e00\u540d\u540c\u5b66\u540c\u65f6\u6539\u53d8\u4e86\u6750\u6599\u548c\u68d2\u7684\u957f\u5ea6\u3002\u8fd9\u4e3a\u4ec0\u4e48\u662f\u4e2a\u95ee\u9898\uff1f", aEn: "If the student changes both the material and the length of the rod at the same time, they cannot tell which factor caused any difference in results. It might be the material that made a difference, or it might be the length — there is no way to know. To get valid results, only one variable should be changed at a time. The length of the rod should be kept the same (as a control variable) so that any difference in results can only be due to the material.", aZh: "\u5982\u679c\u540c\u5b66\u540c\u65f6\u6539\u53d8\u4e86\u6750\u6599\u548c\u68d2\u7684\u957f\u5ea6\uff0c\u4ed6\u4eec\u5c31\u65e0\u6cd5\u786b\u5b9a\u662f\u54ea\u4e2a\u56e0\u7d20\u5bfc\u81f4\u4e86\u7ed3\u679c\u7684\u5dee\u5f02\u3002\u53ef\u80fd\u662f\u6750\u6599\u5bfc\u81f4\u4e86\u5dee\u5f02\uff0c\u4e5f\u53ef\u80fd\u662f\u957f\u5ea6\u2014\u2014\u6ca1\u6709\u529e\u6cd5\u5224\u65ad\u3002\u8981\u5f97\u5230\u6709\u6548\u7ed3\u679c\uff0c\u6bcf\u6b21\u53ea\u80fd\u6539\u53d8\u4e00\u4e2a\u53d8\u91cf\u3002\u68d2\u7684\u957f\u5ea6\u5e94\u4fdd\u6301\u4e0d\u53d8\uff08\u4f5c\u4e3a\u63a7\u5236\u53d8\u91cf\uff09\uff0c\u8fd9\u6837\u7ed3\u679c\u7684\u4efb\u4f55\u5dee\u5f02\u5c31\u53ea\u80fd\u5f52\u56e0\u4e8e\u6750\u6599\u4e86\u3002" },
          { qEn: "Why should you take repeat readings in a science experiment?", qZh: "\u4e3a\u4ec0\u4e48\u5e94\u8be5\u5728\u79d1\u5b66\u5b9e\u9a8c\u4e2d\u91cd\u590d\u8bfb\u6570\uff1f", aEn: "Repeat readings improve precision and reliability. If you only take one reading, you cannot tell whether it was accurate or whether something went wrong. By taking several readings, you can spot anomalies — results that are very different from the others — and leave them out when calculating the average. The average of several readings is more reliable than a single reading.", aZh: "\u91cd\u590d\u6d4b\u91cf\u53ef\u4ee5\u63d0\u9ad8\u7cbe\u786b\u6027\u548c\u53ef\u9760\u6027\u3002\u5982\u679c\u53ea\u53d6\u4e00\u6b21\u6d4b\u91cf\uff0c\u4f60\u5c31\u65e0\u6cd5\u5224\u65ad\u5b83\u662f\u5426\u51c6\u786b\uff0c\u6216\u8005\u662f\u5426\u51fa\u4e86\u4ec0\u4e48\u95ee\u9898\u3002\u901a\u8fc7\u591a\u6b21\u6d4b\u91cf\uff0c\u4f60\u53ef\u4ee5\u53d1\u73b0\u5f02\u5e38\u503c\u2014\u2014\u4e0e\u5176\u4ed6\u7ed3\u679c\u76f8\u5dee\u5f88\u5927\u7684\u6570\u636e\u2014\u2014\u5e76\u5728\u8ba1\u7b97\u5e73\u5747\u503c\u65f6\u5c06\u5176\u6392\u9664\u3002\u591a\u6b21\u6d4b\u91cf\u7684\u5e73\u5747\u503c\u6bd4\u5355\u6b21\u6d4b\u91cf\u66f4\u53ef\u9760\u3002" },
        ]},
        { type: "quiz", qEn: "A student tests how quickly heat conducts through copper, iron, and brass rods. What is the dependent variable?", qZh: "\u4e00\u540d\u540c\u5b66\u6d4b\u8bd5\u70ed\u91cf\u901a\u8fc7\u94dc\u3001\u94c1\u548c\u9ec4\u94dc\u68d2\u4f20\u5bfc\u7684\u901f\u5ea6\u3002\u56e0\u53d8\u91cf\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The type of metal rod used.", zh: "\u6240\u7528\u91d1\u5c5e\u68d2\u7684\u7c7b\u578b\u3002" },
            { en: "The length of the metal rod.", zh: "\u91d1\u5c5e\u68d2\u7684\u957f\u5ea6\u3002" },
            { en: "The time taken for the wax to melt or the pin to drop.", zh: "\u8721\u878d\u5316\u6216\u56fe\u9489\u843d\u4e0b\u6240\u9700\u7684\u65f6\u95f4\u3002" },
            { en: "The temperature of the Bunsen burner.", zh: "\u672c\u751f\u706f\u7684\u6e29\u5ea6\u3002" },
          ],
          correct: 2,
          explainCorrectEn: "Correct. The dependent variable is what you measure — in this case, the time taken for the wax to melt or the pin to drop. This is the outcome that changes in response to which material is used.",
          explainCorrectZh: "\u6b63\u786b\u3002\u56e0\u53d8\u91cf\u662f\u4f60\u6d4b\u91cf\u7684\u5185\u5bb9\u2014\u2014\u5728\u8fd9\u91cc\u662f\u8721\u878d\u5316\u6216\u56fe\u9489\u843d\u4e0b\u6240\u9700\u7684\u65f6\u95f4\u3002\u8fd9\u662f\u968f\u6240\u7528\u6750\u6599\u800c\u53d8\u5316\u7684\u7ed3\u679c\u3002",
          explainWrongEn: "Not quite. The type of metal rod is the independent variable — what the student deliberately changes. The length of the rod and the Bunsen burner temperature are control variables — they should be kept the same. The dependent variable is what is measured as a result: the time taken for heat to conduct.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u91d1\u5c5e\u68d2\u7684\u7c7b\u578b\u662f\u81ea\u53d8\u91cf\u2014\u2014\u662f\u540c\u5b66\u6545\u610f\u6539\u53d8\u7684\u5185\u5bb9\u3002\u68d2\u7684\u957f\u5ea6\u548c\u672c\u751f\u706f\u7684\u6e29\u5ea6\u662f\u63a7\u5236\u53d8\u91cf\u2014\u2014\u5e94\u4fdd\u6301\u4e0d\u53d8\u3002\u56e0\u53d8\u91cf\u662f\u6d4b\u91cf\u7684\u7ed3\u679c\uff1a\u70ed\u91cf\u4f20\u5bfc\u6240\u9700\u7684\u65f6\u95f4\u3002",
        },
      ],
    },

    /* ========== Lesson 7 ========== */
    {
      num: 7,
      badge: "T",
      title: "Convection",
      titleZh: "\u5bf9\u6d41",
      subtitle: "How does heat travel through liquids and gases?",
      subtitleZh: "\u70ed\u91cf\u662f\u5982\u4f55\u5728\u6db2\u4f53\u548c\u6c14\u4f53\u4e2d\u4f20\u9012\u7684\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can explain how convection currents are formed in liquids and gases.", zh: "\u6211\u80fd\u89e3\u91ca\u5bf9\u6d41\u7535\u6d41\u5982\u4f55\u5728\u6db2\u4f53\u548c\u6c14\u4f53\u4e2d\u5f62\u6210\u3002" },
          { en: "I can explain why convection cannot happen in solids.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5bf9\u6d41\u4e0d\u80fd\u5728\u56fa\u4f53\u4e2d\u53d1\u751f\u3002" },
          { en: "I can give real-life examples of convection.", zh: "\u6211\u80fd\u4e3e\u51fa\u5bf9\u6d41\u7684\u5b9e\u9645\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "Convection is the transfer of heat through a fluid (liquid or gas) by the movement of the fluid itself. Unlike conduction, it cannot happen in a solid because the particles in a solid cannot move from place to place.", zh: "\u5bf9\u6d41\u662f\u70ed\u91cf\u901a\u8fc7\u6d41\u4f53\uff08\u6db2\u4f53\u6216\u6c14\u4f53\uff09\u81ea\u8eab\u7684\u8fd0\u52a8\u6765\u4f20\u9012\u7684\u3002\u4e0e\u4f20\u5bfc\u4e0d\u540c\uff0c\u5bf9\u6d41\u4e0d\u80fd\u5728\u56fa\u4f53\u4e2d\u53d1\u751f\uff0c\u56e0\u4e3a\u56fa\u4f53\u4e2d\u7684\u7c92\u5b50\u65e0\u6cd5\u4ece\u4e00\u5904\u79fb\u52a8\u5230\u53e6\u4e00\u5904\u3002" },
          { type: "text", en: "When a fluid is heated, its particles gain energy and move faster. The fluid expands, becoming less dense. This less dense, warmer fluid rises. Cooler, denser fluid moves in to take its place at the bottom, where it is then heated too. This creates a continuous circular movement called a convection current.", zh: "\u5f53\u6d41\u4f53\u88ab\u52a0\u70ed\u65f6\uff0c\u5176\u7c92\u5b50\u83b7\u5f97\u80fd\u91cf\u5e76\u8fd0\u52a8\u5f97\u66f4\u5feb\u3002\u6d41\u4f53\u81a8\u80c0\uff0c\u5bc6\u5ea6\u53d8\u5c0f\u3002\u8fd9\u79cd\u5bc6\u5ea6\u8f83\u5c0f\u7684\u6696\u6d41\u4f53\u4e0a\u5347\u3002\u8f83\u51b7\u3001\u5bc6\u5ea6\u8f83\u5927\u7684\u6d41\u4f53\u6d41\u5165\u5e95\u90e8\u586b\u8865\u5176\u4f4d\u7f6e\uff0c\u968f\u540e\u4e5f\u88ab\u52a0\u70ed\u3002\u8fd9\u5c31\u5f62\u6210\u4e86\u4e00\u79cd\u6301\u7eed\u5faa\u73af\u8fd0\u52a8\uff0c\u79f0\u4e3a\u5bf9\u6d41\u7535\u6d41\u3002" },
          { type: "highlight", en: "Key sequence: Fluid is heated → expands → becomes less dense → rises. Cooler fluid sinks → moves to the heat source → is heated → rises. This cycle continues.", zh: "\u5173\u952e\u987a\u5e8f\uff1a\u6d41\u4f53\u88ab\u52a0\u70ed\u2192\u81a8\u80c0\u2192\u5bc6\u5ea6\u51cf\u5c0f\u2192\u4e0a\u5347\u3002\u8f83\u51b7\u7684\u6d41\u4f53\u4e0b\u6c89\u2192\u6d41\u5411\u70ed\u6e90\u2192\u88ab\u52a0\u70ed\u2192\u4e0a\u5347\u3002\u5faa\u73af\u6301\u7eed\u3002" },
          { type: "example", en: "Real-life examples: A hot air balloon rises because the air inside is heated and becomes less dense than the cooler air outside. Electric kettles have the heating element at the bottom so convection currents can form and heat the whole kettle. Air conditioners are placed high on walls because cool air sinks — the cool air from the unit falls and pushes warm air upward to be cooled.", zh: "\u5b9e\u9645\u4f8b\u5b50\uff1a\u70ed\u6c14\u7403\u4e0a\u5347\uff0c\u662f\u56e0\u4e3a\u5185\u90e8\u7a7a\u6c14\u88ab\u52a0\u70ed\u540e\u5bc6\u5ea6\u5c0f\u4e8e\u5916\u90e8\u51b7\u7a7a\u6c14\u3002\u7535\u70ed\u6c34\u58f6\u7684\u52a0\u70ed\u5143\u4ef6\u5728\u5e95\u90e8\uff0c\u8fd9\u6837\u5bf9\u6d41\u7535\u6d41\u53ef\u4ee5\u5f62\u6210\u5e76\u52a0\u70ed\u6574\u58f6\u6c34\u3002\u7a7a\u8c03\u5b89\u88c5\u5728\u9ad8\u5904\uff0c\u662f\u56e0\u4e3a\u51b7\u7a7a\u6c14\u4e0b\u6c89\u2014\u2014\u51fa\u98ce\u53e3\u7684\u51b7\u7a7a\u6c14\u4e0b\u843d\uff0c\u5c06\u6696\u7a7a\u6c14\u5411\u4e0a\u63a8\u5e76\u4f7f\u5176\u5f97\u5230\u51b7\u5374\u3002" },
        ]},
        { type: "vocab", words: [
          { en: "Convection", zh: "\u5bf9\u6d41", defEn: "The transfer of heat through a fluid by the movement of the fluid itself due to density differences.", defZh: "\u70ed\u91cf\u901a\u8fc7\u6d41\u4f53\u81ea\u8eab\u56e0\u5bc6\u5ea6\u5dee\u5f02\u800c\u4ea7\u751f\u7684\u8fd0\u52a8\u6765\u4f20\u9012\u3002" },
          { en: "Convection current", zh: "\u5bf9\u6d41\u7535\u6d41", defEn: "The circular movement of a fluid caused by heating — warm fluid rises and cool fluid sinks.", defZh: "\u52a0\u70ed\u5f15\u8d77\u7684\u6d41\u4f53\u5faa\u73af\u8fd0\u52a8\u2014\u2014\u6696\u6d41\u4f53\u4e0a\u5347\uff0c\u51b7\u6d41\u4f53\u4e0b\u6c89\u3002" },
          { en: "Density", zh: "\u5bc6\u5ea6", defEn: "Mass per unit volume. Heated fluids expand and become less dense, causing them to rise.", defZh: "\u5355\u4f4d\u4f53\u79ef\u7684\u8d28\u91cf\u3002\u52a0\u70ed\u7684\u6d41\u4f53\u81a8\u80c0\uff0c\u5bc6\u5ea6\u51cf\u5c0f\uff0c\u56e0\u6b64\u4e0a\u5347\u3002" },
          { en: "Fluid", zh: "\u6d41\u4f53", defEn: "A substance that can flow — either a liquid or a gas.", defZh: "\u80fd\u591f\u6d41\u52a8\u7684\u7269\u8d28\u2014\u2014\u6db2\u4f53\u6216\u6c14\u4f53\u3002" },
        ]},
        { type: "image", caption: "A convection current forming in a liquid — heated fluid rises and cooler fluid sinks", captionZh: "\u6db2\u4f53\u4e2d\u5f62\u6210\u7684\u5bf9\u6d41\u7535\u6d41\u2014\u2014\u52a0\u70ed\u7684\u6d41\u4f53\u4e0a\u5347\uff0c\u8f83\u51b7\u7684\u6d41\u4f53\u4e0b\u6c89", source: "Wikimedia Commons", wikimediaFile: "Convection_current.svg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Convection happens in liquids and gases. Heating makes a fluid expand and become less dense. It rises. Cooler, denser fluid moves in to replace it. This creates a convection current. Convection cannot happen in a solid.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u5bf9\u6d41\u5728\u6db2\u4f53\u548c\u6c14\u4f53\u4e2d\u53d1\u751f\u3002\u52a0\u70ed\u4f7f\u6d41\u4f53\u81a8\u80c0\u5e76\u5bc6\u5ea6\u51cf\u5c0f\u3002\u5b83\u4e0a\u5347\u3002\u8f83\u51b7\u3001\u5bc6\u5ea6\u8f83\u5927\u7684\u6d41\u4f53\u6d41\u5165\u586b\u8865\u5176\u4f4d\u7f6e\u3002\u8fd9\u5c31\u5f62\u6210\u4e86\u5bf9\u6d41\u7535\u6d41\u3002\u5bf9\u6d41\u4e0d\u80fd\u5728\u56fa\u4f53\u4e2d\u53d1\u751f\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "Explain why convection cannot happen in a solid.", qZh: "\u89e3\u91ca\u4e3a\u4ec0\u4e48\u5bf9\u6d41\u4e0d\u80fd\u5728\u56fa\u4f53\u4e2d\u53d1\u751f\u3002", aEn: "Convection requires the fluid to physically move from one place to another, carrying heat energy with it. In a solid, the particles are locked in fixed positions and can only vibrate — they cannot move from one place to another. Because the particles cannot flow, there is no way for convection currents to form.", aZh: "\u5bf9\u6d41\u9700\u8981\u6d41\u4f53\u5b9e\u4f53\u4ece\u4e00\u5904\u8fc1\u79fb\u5230\u53e6\u4e00\u5904\uff0c\u5e26\u8d70\u70ed\u80fd\u3002\u5728\u56fa\u4f53\u4e2d\uff0c\u7c92\u5b50\u88ab\u9501\u5b9a\u5728\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u53ea\u80fd\u632f\u52a8\u2014\u2014\u5b83\u4eec\u65e0\u6cd5\u4ece\u4e00\u5904\u79fb\u52a8\u5230\u53e6\u4e00\u5904\u3002\u56e0\u4e3a\u7c92\u5b50\u4e0d\u80fd\u6d41\u52a8\uff0c\u5bf9\u6d41\u7535\u6d41\u5c31\u65e0\u6cd5\u5f62\u6210\u3002" },
          { qEn: "Why is the heating element in a kettle placed at the bottom, and why does this heat the water efficiently?", qZh: "\u4e3a\u4ec0\u4e48\u6c34\u58f6\u7684\u52a0\u70ed\u5143\u4ef6\u5728\u5e95\u90e8\uff0c\u8fd9\u4e3a\u4ec0\u4e48\u80fd\u6709\u6548\u5730\u52a0\u70ed\u6c34\uff1f", aEn: "The heating element is at the bottom so that convection currents can form throughout the whole kettle. Water at the bottom is heated first, expands, becomes less dense, and rises. Cooler water from the top sinks to the bottom, where it is then heated and rises in turn. This continuous circulation means all the water in the kettle is heated, not just the water nearest the element.", aZh: "\u52a0\u70ed\u5143\u4ef6\u5728\u5e95\u90e8\uff0c\u662f\u4e3a\u4e86\u5bf9\u6d41\u7535\u6d41\u80fd\u5728\u6574\u4e2a\u58f6\u5185\u5f62\u6210\u3002\u5e95\u90e8\u7684\u6c34\u9996\u5148\u88ab\u52a0\u70ed\uff0c\u81a8\u80c0\uff0c\u5bc6\u5ea6\u51cf\u5c0f\uff0c\u4e0a\u5347\u3002\u9876\u90e8\u7684\u51b7\u6c34\u4e0b\u6c89\u5230\u5e95\u90e8\uff0c\u968f\u540e\u88ab\u52a0\u70ed\u5e76\u4f9d\u6b21\u4e0a\u5347\u3002\u8fd9\u79cd\u6301\u7eed\u5faa\u73af\u610f\u5473\u7740\u58f6\u5185\u6240\u6709\u7684\u6c34\u90fd\u88ab\u52a0\u70ed\uff0c\u800c\u4e0d\u53ea\u662f\u9760\u8fd1\u52a0\u70ed\u5143\u4ef6\u7684\u6c34\u3002" },
        ]},
        { type: "quiz", qEn: "Why does warm air rise during convection?", qZh: "\u5bf9\u6d41\u8fc7\u7a0b\u4e2d\uff0c\u6696\u7a7a\u6c14\u4e3a\u4ec0\u4e48\u4e0a\u5347\uff1f",
          opts: [
            { en: "Warm air contains more particles than cool air.", zh: "\u6696\u7a7a\u6c14\u6bd4\u51b7\u7a7a\u6c14\u542b\u6709\u66f4\u591a\u7c92\u5b50\u3002" },
            { en: "Warm air particles are larger, so they float upwards.", zh: "\u6696\u7a7a\u6c14\u7c92\u5b50\u8f83\u5927\uff0c\u6240\u4ee5\u5411\u4e0a\u6f02\u6d6e\u3002" },
            { en: "Warm air expands and becomes less dense than the cooler air around it, so it rises.", zh: "\u6696\u7a7a\u6c14\u81a8\u80c0\uff0c\u5bc6\u5ea6\u5c0f\u4e8e\u5468\u56f4\u7684\u51b7\u7a7a\u6c14\uff0c\u56e0\u6b64\u4e0a\u5347\u3002" },
            { en: "Warm air is pushed upwards by the heat source below it.", zh: "\u6696\u7a7a\u6c14\u88ab\u5176\u4e0b\u65b9\u7684\u70ed\u6e90\u5411\u4e0a\u63a8\u3002" },
          ],
          correct: 2,
          explainCorrectEn: "Correct. When air is heated it gains energy, expands, and becomes less dense than the cooler air surrounding it. Because it is less dense, it is lighter for its volume and rises. Cooler, denser air then sinks to take its place — this is how a convection current forms.",
          explainCorrectZh: "\u6b63\u786b\u3002\u7a7a\u6c14\u88ab\u52a0\u70ed\u540e\u83b7\u5f97\u80fd\u91cf\uff0c\u81a8\u80c0\uff0c\u5bc6\u5ea6\u5c0f\u4e8e\u5468\u56f4\u7684\u51b7\u7a7a\u6c14\u3002\u7531\u4e8e\u5bc6\u5ea6\u8f83\u5c0f\uff0c\u5b83\u6309\u4f53\u79ef\u6765\u8bf4\u8f83\u8f7b\uff0c\u56e0\u6b64\u4e0a\u5347\u3002\u8f83\u51b7\u3001\u5bc6\u5ea6\u8f83\u5927\u7684\u7a7a\u6c14\u4e0b\u6c89\u586b\u8865\u5176\u4f4d\u7f6e\u2014\u2014\u8fd9\u5c31\u662f\u5bf9\u6d41\u7535\u6d41\u5f62\u6210\u7684\u65b9\u5f0f\u3002",
          explainWrongEn: "Not quite. The number and size of particles do not change when air is heated. What changes is the spacing between particles — heated air expands, so the same number of particles takes up more space, making the air less dense. Less dense air rises because it is lighter than the denser cool air around it.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7a7a\u6c14\u88ab\u52a0\u70ed\u65f6\uff0c\u7c92\u5b50\u7684\u6570\u91cf\u548c\u5927\u5c0f\u5e76\u4e0d\u53d8\u5316\u3002\u53d8\u5316\u7684\u662f\u7c92\u5b50\u4e4b\u95f4\u7684\u95f4\u8ddd\u2014\u2014\u52a0\u70ed\u7684\u7a7a\u6c14\u81a8\u80c0\uff0c\u76f8\u540c\u6570\u91cf\u7684\u7c92\u5b50\u5360\u636e\u4e86\u66f4\u5927\u7684\u7a7a\u95f4\uff0c\u4f7f\u7a7a\u6c14\u5bc6\u5ea6\u51cf\u5c0f\u3002\u5bc6\u5ea6\u8f83\u5c0f\u7684\u7a7a\u6c14\u4e0a\u5347\uff0c\u56e0\u4e3a\u5b83\u6bd4\u5468\u56f4\u5bc6\u5ea6\u8f83\u5927\u7684\u51b7\u7a7a\u6c14\u66f4\u8f7b\u3002",
        },
      ],
    },

    /* ========== Lesson 8 ========== */
    {
      num: 8,
      badge: "T",
      title: "Radiation",
      titleZh: "\u70ed\u8f90\u5c04",
      subtitle: "How does heat travel without particles?",
      subtitleZh: "\u70ed\u91cf\u662f\u5982\u4f55\u4e0d\u9700\u8981\u7c92\u5b50\u5c31\u80fd\u4f20\u9012\u7684\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can explain that radiation transfers heat as waves and does not need particles.", zh: "\u6211\u80fd\u89e3\u91ca\u8f90\u5c04\u4ee5\u6ce2\u7684\u5f62\u5f0f\u4f20\u9012\u70ed\u91cf\uff0c\u4e14\u4e0d\u9700\u8981\u7c92\u5b50\u3002" },
          { en: "I can explain how the colour and surface of an object affects how much radiation it absorbs or emits.", zh: "\u6211\u80fd\u89e3\u91ca\u7269\u4f53\u7684\u989c\u8272\u548c\u8868\u9762\u5982\u4f55\u5f71\u54cd\u5b83\u5438\u6536\u6216\u8f90\u5c04\u70ed\u91cf\u7684\u591a\u5c11\u3002" },
          { en: "I can describe a practical to compare how different surfaces absorb and emit radiation.", zh: "\u6211\u80fd\u63cf\u8ff0\u4e00\u4e2a\u6bd4\u8f83\u4e0d\u540c\u8868\u9762\u5438\u6536\u548c\u8f90\u5c04\u70ed\u91cf\u7684\u5b9e\u9a8c\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "Radiation is the transfer of heat energy as electromagnetic waves — specifically infrared radiation. Unlike conduction and convection, radiation does not need particles. This means it can travel through a vacuum (empty space), which is how heat from the Sun reaches the Earth.", zh: "\u8f90\u5c04\u662f\u70ed\u80fd\u4ee5\u7535\u78c1\u6ce2\u2014\u2014\u5177\u4f53\u6765\u8bf4\u662f\u7ea2\u5916\u8f90\u5c04\u2014\u2014\u7684\u5f62\u5f0f\u4f20\u9012\u3002\u4e0e\u4f20\u5bfc\u548c\u5bf9\u6d41\u4e0d\u540c\uff0c\u8f90\u5c04\u4e0d\u9700\u8981\u7c92\u5b50\u3002\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u5728\u771f\u7a7a\uff08\u7a7a\u6c14\u96be\u4e0b\u5f62\u6210\u7684\u7a7a\u95f4\uff09\u4e2d\u4f20\u64ad\uff0c\u8fd9\u5c31\u662f\u592a\u9633\u70ed\u91cf\u5230\u8fbe\u5730\u7403\u7684\u65b9\u5f0f\u3002" },
          { type: "highlight", en: "Key rule: Dark/black surfaces are the best absorbers AND emitters of radiation. Light/white/shiny surfaces are the worst absorbers AND emitters — they reflect more radiation instead.", zh: "\u5173\u952e\u89c4\u5f8b\uff1a\u6df1\u8272\uff0f\u9ed1\u8272\u8868\u9762\u662f\u6700\u597d\u7684\u8f90\u5c04\u5438\u6536\u4f53\u548c\u8f90\u5c04\u4f53\u3002\u6d45\u8272\uff0f\u767d\u8272\uff0f\u5149\u4eae\u8868\u9762\u662f\u6700\u5dee\u7684\u5438\u6536\u4f53\u548c\u8f90\u5c04\u4f53\u2014\u2014\u5b83\u4eec\u80fd\u53cd\u5c04\u66f4\u591a\u7684\u8f90\u5c04\u3002" },
          { type: "text", en: "All hot objects emit thermal radiation. The hotter an object is, the more radiation it emits. Cooler objects absorb radiation from hotter ones. This is how the Sun warms the Earth and how a radiator warms a room — even without direct contact.", zh: "\u6240\u6709\u70ed\u7269\u4f53\u90fd\u4f1a\u8f90\u5c04\u70ed\u8f90\u5c04\u3002\u7269\u4f53\u8d8a\u70ed\uff0c\u8f90\u5c04\u51fa\u7684\u8f90\u5c04\u91cf\u8d8a\u5927\u3002\u8f83\u51b7\u7684\u7269\u4f53\u4ece\u8f83\u70ed\u7684\u7269\u4f53\u5438\u6536\u8f90\u5c04\u3002\u8fd9\u5c31\u662f\u592a\u9633\u52a0\u70ed\u5730\u7403\u4ee5\u53ca\u6696\u6c14\u7247\u52a0\u70ed\u623f\u95f4\u7684\u65b9\u5f0f\u2014\u2014\u5373\u4f7f\u6ca1\u6709\u76f4\u63a5\u63a5\u89e6\u3002" },
          { type: "example", en: "In the radiation practical, black and white (or silver) boiling tubes or cans are filled with hot water. Temperature is measured over time. The black surface cools faster — it emits more radiation. In the absorption version, black and white cards are placed the same distance from a heat lamp. The thermometer behind the black card rises faster — black absorbs more radiation.", zh: "\u5728\u8f90\u5c04\u5b9e\u9a8c\u4e2d\uff0c\u5c06\u9ed1\u8272\u548c\u767d\u8272\uff08\u6216\u9520\u9762\uff09\u7684\u6c38\u6c38\u7ba1\u6216\u7f50\u5b50\u88c5\u6ee1\u70ed\u6c34\uff0c\u968f\u65f6\u95f4\u6d4b\u91cf\u6e29\u5ea6\u3002\u9ed1\u8272\u8868\u9762\u51b7\u5374\u5f97\u66f4\u5feb\u2014\u2014\u5b83\u8f90\u5c04\u51fa\u66f4\u591a\u7684\u8f90\u5c04\u3002\u5728\u5438\u6536\u5b9e\u9a8c\u4e2d\uff0c\u5c06\u9ed1\u8272\u548c\u767d\u8272\u5361\u7247\u653e\u5728\u79bb\u71ed\u70ed\u706f\u76f8\u540c\u8ddd\u79bb\u5904\u3002\u9ed1\u8272\u5361\u7247\u540e\u9762\u7684\u6e29\u5ea6\u8ba1\u4e0a\u5347\u5f97\u66f4\u5feb\u2014\u2014\u9ed1\u8272\u5438\u6536\u4e86\u66f4\u591a\u8f90\u5c04\u3002" },
        ]},
        { type: "vocab", words: [
          { en: "Radiation", zh: "\u8f90\u5c04", defEn: "The transfer of heat energy as electromagnetic (infrared) waves, which does not need particles.", defZh: "\u70ed\u80fd\u4ee5\u7535\u78c1\uff08\u7ea2\u5916\uff09\u6ce2\u7684\u5f62\u5f0f\u4f20\u9012\uff0c\u4e0d\u9700\u8981\u7c92\u5b50\u3002" },
          { en: "Infrared radiation", zh: "\u7ea2\u5916\u8f90\u5c04", defEn: "The type of electromagnetic wave responsible for thermal (heat) radiation.", defZh: "\u8d1f\u8d23\u70ed\u8f90\u5c04\u7684\u90a3\u79cd\u7535\u78c1\u6ce2\u3002" },
          { en: "Absorb", zh: "\u5438\u6536", defEn: "To take in radiation. Dark surfaces absorb more radiation than light surfaces.", defZh: "\u5438\u6536\u8f90\u5c04\u3002\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u5438\u6536\u66f4\u591a\u8f90\u5c04\u3002" },
          { en: "Emit", zh: "\u8f90\u5c04\uff08\u53d1\u51fa\uff09", defEn: "To give out radiation. Dark surfaces emit more radiation than light surfaces.", defZh: "\u53d1\u51fa\u8f90\u5c04\u3002\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u8f90\u5c04\u51fa\u66f4\u591a\u70ed\u91cf\u3002" },
        ]},
        { type: "image", caption: "Infrared camera image showing heat radiation emitted by a person — warmer areas appear brighter", captionZh: "\u7ea2\u5916\u76f8\u673a\u5c55\u793a\u4eba\u4f53\u8f90\u5c04\u7684\u70ed\u8f90\u5c04\u2014\u2014\u8f83\u6696\u533a\u57df\u663e\u5f97\u66f4\u4eae", source: "Wikimedia Commons", wikimediaFile: "Infrared_dog.jpg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'All hot objects emit thermal radiation. Radiation does not need particles — it can travel through space. Dark/black objects absorb more radiation and emit more radiation. Light/shiny/white objects absorb less radiation and also cool down more slowly.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u6240\u6709\u70ed\u7269\u4f53\u90fd\u8f90\u5c04\u70ed\u8f90\u5c04\u3002\u8f90\u5c04\u4e0d\u9700\u8981\u7c92\u5b50\u2014\u2014\u5b83\u53ef\u4ee5\u5728\u7a7a\u95f4\u4e2d\u4f20\u64ad\u3002\u6df1\u8272\uff0f\u9ed1\u8272\u7269\u4f53\u5438\u6536\u66f4\u591a\u8f90\u5c04\u5e76\u8f90\u5c04\u51fa\u66f4\u591a\u8f90\u5c04\u3002\u6d45\u8272\uff0f\u5149\u4eae\uff0f\u767d\u8272\u7269\u4f53\u5438\u6536\u8f90\u5c04\u8f83\u5c11\uff0c\u51b7\u5374\u4e5f\u8f83\u6162\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "Why can heat from the Sun reach the Earth, even though space is a vacuum with no particles?", qZh: "\u4e3a\u4ec0\u4e48\u592a\u9633\u7684\u70ed\u91cf\u80fd\u5230\u8fbe\u5730\u7403\uff0c\u5c3d\u7ba1\u592a\u7a7a\u662f\u6ca1\u6709\u7c92\u5b50\u7684\u771f\u7a7a\uff1f", aEn: "Heat from the Sun travels to Earth by radiation. Radiation transfers energy as electromagnetic waves — specifically infrared radiation — and does not need particles to travel through. This means it can pass through the vacuum of space where there are no particles at all. Conduction and convection could not do this, as they both require particles.", aZh: "\u592a\u9633\u7684\u70ed\u91cf\u4ee5\u8f90\u5c04\u7684\u65b9\u5f0f\u5230\u8fbe\u5730\u7403\u3002\u8f90\u5c04\u4ee5\u7535\u78c1\u6ce2\u2014\u2014\u5177\u4f53\u662f\u7ea2\u5916\u8f90\u5c04\u2014\u2014\u7684\u5f62\u5f0f\u4f20\u9012\u80fd\u91cf\uff0c\u4e0d\u9700\u8981\u7c92\u5b50\u3002\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u7a7f\u8fc7\u5b8c\u5168\u6ca1\u6709\u7c92\u5b50\u7684\u5b87\u5b99\u771f\u7a7a\u4f20\u64ad\u3002\u4f20\u5bfc\u548c\u5bf9\u6d41\u5c31\u505a\u4e0d\u5230\u8fd9\u4e00\u70b9\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u9700\u8981\u7c92\u5b50\u3002" },
          { qEn: "A student says a black car and a white car parked in the sun will be the same temperature inside. Do you agree? Explain.", qZh: "\u4e00\u4f4d\u540c\u5b66\u8bf4\uff0c\u505c\u5728\u9633\u5149\u4e0b\u7684\u9ed1\u8272\u8f66\u548c\u767d\u8272\u8f66\u5185\u90e8\u6e29\u5ea6\u4f1a\u76f8\u540c\u3002\u4f60\u540c\u610f\u5417\uff1f\u8bf7\u89e3\u91ca\u3002", aEn: "No, I disagree. The black car will be hotter inside. This is because dark surfaces absorb more thermal radiation than light surfaces. The black car's surface absorbs more of the Sun's radiation and converts it into heat, causing the inside to become hotter. The white car reflects more radiation and absorbs less, so it stays cooler.", aZh: "\u4e0d\uff0c\u6211\u4e0d\u540c\u610f\u3002\u9ed1\u8272\u8f66\u5185\u90e8\u4f1a\u66f4\u70ed\u3002\u8fd9\u662f\u56e0\u4e3a\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u5438\u6536\u66f4\u591a\u7684\u70ed\u8f90\u5c04\u3002\u9ed1\u8272\u8f66\u7684\u8868\u9762\u5438\u6536\u4e86\u66f4\u591a\u592a\u9633\u8f90\u5c04\u5e76\u5c06\u5176\u8f6c\u5316\u4e3a\u70ed\u91cf\uff0c\u5bfc\u81f4\u5185\u90e8\u6e29\u5ea6\u66f4\u9ad8\u3002\u767d\u8272\u8f66\u53cd\u5c04\u66f4\u591a\u8f90\u5c04\uff0c\u5438\u6536\u8f83\u5c11\uff0c\u56e0\u6b64\u4fdd\u6301\u8f83\u51b7\u3002" },
        ]},
        { type: "quiz", qEn: "Which surface would cool down the fastest when removed from a heat source?", qZh: "\u4ece\u70ed\u6e90\u79fb\u5f00\u540e\uff0c\u54ea\u79cd\u8868\u9762\u51b7\u5374\u6700\u5feb\uff1f",
          opts: [
            { en: "A shiny silver surface.", zh: "\u5149\u4eae\u7684\u9520\u9762\u3002" },
            { en: "A white painted surface.", zh: "\u767d\u8272\u6d82\u6599\u8868\u9762\u3002" },
            { en: "A black matte surface.", zh: "\u9ed1\u8272\u6b21\u5149\u9762\u8868\u9762\u3002" },
            { en: "A transparent glass surface.", zh: "\u900f\u660e\u73bb\u7483\u8868\u9762\u3002" },
          ],
          correct: 2,
          explainCorrectEn: "Correct. A black matte surface is the best emitter of thermal radiation. When removed from a heat source, it loses heat by radiation the fastest and therefore cools down the quickest. Shiny and white surfaces emit radiation poorly — they cool down more slowly.",
          explainCorrectZh: "\u6b63\u786b\u3002\u9ed1\u8272\u6b21\u5149\u9762\u8868\u9762\u662f\u6700\u597d\u7684\u70ed\u8f90\u5c04\u8f90\u5c04\u4f53\u3002\u4ece\u70ed\u6e90\u79fb\u5f00\u540e\uff0c\u5b83\u901a\u8fc7\u8f90\u5c04\u6563\u5931\u70ed\u91cf\u6700\u5feb\uff0c\u56e0\u6b64\u51b7\u5374\u6700\u5feb\u3002\u5149\u4eae\u548c\u767d\u8272\u8868\u9762\u8f90\u5c04\u6548\u679c\u5dee\u2014\u2014\u5b83\u4eec\u51b7\u5374\u8f83\u6162\u3002",
          explainWrongEn: "Not quite. Shiny and white surfaces are poor emitters of radiation — they reflect most radiation instead of emitting it. This means they cool down slowly, not quickly. The black matte surface is the best emitter and therefore cools the fastest.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u5149\u4eae\u548c\u767d\u8272\u8868\u9762\u662f\u5dee\u7684\u8f90\u5c04\u8f90\u5c04\u4f53\u2014\u2014\u5b83\u4eec\u53cd\u5c04\u5927\u90e8\u5206\u8f90\u5c04\u800c\u4e0d\u662f\u8f90\u5c04\u51fa\u53bb\u3002\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u51b7\u5374\u8f83\u6162\u800c\u4e0d\u662f\u5f88\u5feb\u3002\u9ed1\u8272\u6b21\u5149\u9762\u8868\u9762\u662f\u6700\u597d\u7684\u8f90\u5c04\u4f53\uff0c\u56e0\u6b64\u51b7\u5374\u6700\u5feb\u3002",
        },
      ],
    },

    /* ========== Lesson 9 ========== */
    {
      num: 9,
      badge: "E",
      title: "Radiation — Key Practical",
      titleZh: "\u8f90\u5c04\u5b9e\u9a8c",
      subtitle: "Do dark surfaces absorb and emit more radiation than light ones?",
      subtitleZh: "\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u5438\u6536\u548c\u8f90\u5c04\u66f4\u591a\u70ed\u8f90\u5c04\u5417\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can describe how to investigate whether surface colour affects the rate of heat absorption.", zh: "\u6211\u80fd\u63cf\u8ff0\u5982\u4f55\u7814\u7a76\u8868\u9762\u989c\u8272\u662f\u5426\u5f71\u54cd\u70ed\u91cf\u5438\u6536\u901f\u7387\u3002" },
          { en: "I can explain how surface colour affects the rate of heat emission.", zh: "\u6211\u80fd\u89e3\u91ca\u8868\u9762\u989c\u8272\u5982\u4f55\u5f71\u54cd\u70ed\u91cf\u8f90\u5c04\u901f\u7387\u3002" },
          { en: "I can identify the variables in a radiation experiment and explain how to control them.", zh: "\u6211\u80fd\u8bc6\u522b\u8f90\u5c04\u5b9e\u9a8c\u4e2d\u7684\u53d8\u91cf\u5e76\u89e3\u91ca\u5982\u4f55\u63a7\u5236\u5b83\u4eec\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "There are two versions of the radiation practical. In the absorption experiment, black and white card surfaces are placed at equal distances from a heat lamp, with thermometers behind each. The temperature behind the black card rises faster, showing that black surfaces absorb more radiation.", zh: "\u8f90\u5c04\u5b9e\u9a8c\u6709\u4e24\u79cd\u7248\u672c\u3002\u5728\u5438\u6536\u5b9e\u9a8c\u4e2d\uff0c\u9ed1\u8272\u548c\u767d\u8272\u5361\u7247\u8868\u9762\u653e\u5728\u79bb\u71ed\u70ed\u706f\u76f8\u540c\u8ddd\u79bb\u5904\uff0c\u5404\u81ea\u80cc\u540e\u6709\u6e29\u5ea6\u8ba1\u3002\u9ed1\u8272\u5361\u7247\u80cc\u540e\u7684\u6e29\u5ea6\u4e0a\u5347\u5f97\u66f4\u5feb\uff0c\u8bf4\u660e\u9ed1\u8272\u8868\u9762\u5438\u6536\u66f4\u591a\u8f90\u5c04\u3002" },
          { type: "highlight", en: "Absorption experiment: Independent variable = surface colour. Dependent variable = temperature rise over time. Control variables = distance from lamp, volume of air behind card, starting temperature, time measured.", zh: "\u5438\u6536\u5b9e\u9a8c\uff1a\u81ea\u53d8\u91cf\uff1d\u8868\u9762\u989c\u8272\u3002\u56e0\u53d8\u91cf\uff1d\u968f\u65f6\u95f4\u7684\u6e29\u5ea6\u5347\u9ad8\u3002\u63a7\u5236\u53d8\u91cf\uff1d\u79bb\u706f\u8ddd\u79bb\u3001\u5361\u7247\u80cc\u540e\u7684\u7a7a\u6c14\u4f53\u79ef\u3001\u521d\u59cb\u6e29\u5ea6\u3001\u8ba1\u65f6\u65f6\u95f4\u3002" },
          { type: "text", en: "In the emission experiment, identical boiling tubes or cans filled with hot water are coated in different surfaces — black, white, and sometimes shiny silver. Temperature is measured at regular intervals as they cool. The black surface cools fastest because it emits the most radiation.", zh: "\u5728\u8f90\u5c04\u5b9e\u9a8c\u4e2d\uff0c\u5c06\u88c5\u6ee1\u70ed\u6c34\u7684\u76f8\u540c\u6c38\u6c38\u7ba1\u6216\u7f50\u5b50\u6d82\u4e0a\u4e0d\u540c\u8868\u9762\u2014\u2014\u9ed1\u8272\u3001\u767d\u8272\uff0c\u6709\u65f6\u8fd8\u6709\u5149\u4eae\u9520\u8272\u3002\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u6d4b\u91cf\u4e00\u6b21\u6e29\u5ea6\uff0c\u89c2\u5bdf\u51b7\u5374\u8fc7\u7a0b\u3002\u9ed1\u8272\u8868\u9762\u51b7\u5374\u6700\u5feb\uff0c\u56e0\u4e3a\u5b83\u8f90\u5c04\u51fa\u6700\u591a\u7684\u8f90\u5c04\u3002" },
          { type: "text", en: "Both experiments must control variables carefully. In the emission experiment, the boiling tubes must be the same size, filled with the same volume of hot water at the same starting temperature, and left in the same environment. Only the surface colour is changed.", zh: "\u4e24\u4e2a\u5b9e\u9a8c\u90fd\u5fc5\u987b\u4ed4\u7ec6\u63a7\u5236\u53d8\u91cf\u3002\u5728\u8f90\u5c04\u5b9e\u9a8c\u4e2d\uff0c\u6c38\u6c38\u7ba1\u5fc5\u987b\u5927\u5c0f\u76f8\u540c\uff0c\u88c5\u5165\u76f8\u540c\u4f53\u79ef\u7684\u70ed\u6c34\u4e14\u521d\u59cb\u6e29\u5ea6\u76f8\u540c\uff0c\u5e76\u5728\u76f8\u540c\u73af\u5883\u4e0b\u653e\u7f6e\u3002\u552f\u4e00\u6539\u53d8\u7684\u662f\u8868\u9762\u989c\u8272\u3002" },
          { type: "example", en: "A typical conclusion for the emission experiment: 'The black boiling tube cooled the fastest, losing the most temperature in 5 minutes. The shiny silver tube cooled the slowest. This shows that dark surfaces are better emitters of radiation than light or shiny surfaces.'", zh: "\u8f90\u5c04\u5b9e\u9a8c\u7684\u5178\u578b\u7ed3\u8bba\uff1a\u201c\u9ed1\u8272\u6c38\u6c38\u7ba1\u51b7\u5374\u6700\u5feb\uff0c5\u5206\u949f\u5185\u6e29\u5ea6\u4e0b\u964d\u6700\u591a\u3002\u5149\u4eae\u9520\u8272\u7ba1\u51b7\u5374\u6700\u6162\u3002\u8fd9\u8bf4\u660e\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u6216\u5149\u4eae\u8868\u9762\u66f4\u5584\u4e8e\u8f90\u5c04\u70ed\u91cf\u3002\u201d" },
        ]},
        { type: "vocab", words: [
          { en: "Emission", zh: "\u8f90\u5c04\uff08\u53d1\u51fa\uff09", defEn: "The release of thermal radiation from a surface. Dark surfaces emit more radiation than light ones.", defZh: "\u8868\u9762\u91ca\u653e\u70ed\u8f90\u5c04\u3002\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u8f90\u5c04\u51fa\u66f4\u591a\u70ed\u91cf\u3002" },
          { en: "Absorption", zh: "\u5438\u6536", defEn: "The taking in of radiation by a surface. Dark surfaces absorb more radiation than light ones.", defZh: "\u8868\u9762\u5438\u6536\u8f90\u5c04\u3002\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u8868\u9762\u5438\u6536\u66f4\u591a\u8f90\u5c04\u3002" },
          { en: "Cooling rate", zh: "\u51b7\u5374\u901f\u7387", defEn: "How quickly an object loses heat over time. A faster cooling rate means more heat is lost per minute.", defZh: "\u7269\u4f53\u968f\u65f6\u95f4\u5931\u70ed\u7684\u901f\u5ea6\u3002\u51b7\u5374\u901f\u7387\u8d8a\u5feb\u8868\u793a\u6bcf\u5206\u949f\u5931\u70ed\u8d8a\u591a\u3002" },
          { en: "Fair test", zh: "\u516c\u5e73\u5b9e\u9a8c", defEn: "An experiment where only one variable is changed at a time, so results are valid and comparable.", defZh: "\u6bcf\u6b21\u53ea\u6539\u53d8\u4e00\u4e2a\u53d8\u91cf\u7684\u5b9e\u9a8c\uff0c\u4f7f\u7ed3\u679c\u6709\u6548\u4e14\u5177\u6709\u53ef\u6bd4\u6027\u3002" },
        ]},
        { type: "image", caption: "Boiling tubes with different surface colours used to compare rates of heat emission by radiation", captionZh: "\u8868\u9762\u989c\u8272\u4e0d\u540c\u7684\u6c38\u6c38\u7ba1\uff0c\u7528\u4e8e\u6bd4\u8f83\u8f90\u5c04\u5c04\u51fa\u70ed\u91cf\u7684\u901f\u7387", source: "Wikimedia Commons", wikimediaFile: "Leslie_cube.jpg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Black surfaces absorb more radiation and emit more radiation. White or shiny surfaces absorb less and emit less. In the practical, the black boiling tube cools the fastest. The silver tube cools the slowest.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u9ed1\u8272\u8868\u9762\u5438\u6536\u66f4\u591a\u8f90\u5c04\uff0c\u4e5f\u8f90\u5c04\u51fa\u66f4\u591a\u8f90\u5c04\u3002\u767d\u8272\u6216\u5149\u4eae\u8868\u9762\u5438\u6536\u548c\u8f90\u5c04\u8f83\u5c11\u3002\u5b9e\u9a8c\u4e2d\uff0c\u9ed1\u8272\u6c38\u6c38\u7ba1\u51b7\u5374\u6700\u5feb\u3002\u9520\u8272\u7ba1\u51b7\u5374\u6700\u6162\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "In the emission experiment, why must all the boiling tubes be filled with the same volume of water at the same starting temperature?", qZh: "\u5728\u8f90\u5c04\u5b9e\u9a8c\u4e2d\uff0c\u4e3a\u4ec0\u4e48\u5fc5\u987b\u5c06\u6240\u6709\u6c38\u6c38\u7ba1\u88c5\u5165\u76f8\u540c\u4f53\u79ef\u3001\u76f8\u540c\u521d\u59cb\u6e29\u5ea6\u7684\u6c34\uff1f", aEn: "These are control variables. If the boiling tubes had different volumes of water or different starting temperatures, any difference in cooling rate could be caused by those factors rather than by the surface colour. By keeping volume and starting temperature the same, we ensure that surface colour is the only variable — meaning any difference in cooling rate must be due to the surface colour alone.", aZh: "\u8fd9\u4e9b\u662f\u63a7\u5236\u53d8\u91cf\u3002\u5982\u679c\u6c38\u6c38\u7ba1\u88c5\u6c34\u4f53\u79ef\u4e0d\u540c\u6216\u521d\u59cb\u6e29\u5ea6\u4e0d\u540c\uff0c\u51b7\u5374\u901f\u7387\u7684\u5dee\u5f02\u5c31\u53ef\u80fd\u662f\u7531\u8fd9\u4e9b\u56e0\u7d20\u9020\u6210\u7684\uff0c\u800c\u4e0d\u662f\u8868\u9762\u989c\u8272\u3002\u901a\u8fc7\u4fdd\u6301\u4f53\u79ef\u548c\u521d\u59cb\u6e29\u5ea6\u4e0d\u53d8\uff0c\u6211\u4eec\u786b\u4fdd\u8868\u9762\u989c\u8272\u662f\u552f\u4e00\u7684\u53d8\u91cf\u2014\u2014\u8fd9\u610f\u5473\u7740\u51b7\u5374\u901f\u7387\u7684\u4efb\u4f55\u5dee\u5f02\u5fc5\u5b9a\u662f\u7531\u8868\u9762\u989c\u8272\u5bfc\u81f4\u7684\u3002" },
          { qEn: "A student gets these results: black tube lost 18°C, white tube lost 9°C, silver tube lost 5°C in 5 minutes. What conclusion can they draw?", qZh: "\u4e00\u540d\u540c\u5b66\u5f97\u5230\u8fd9\u4e9b\u7ed3\u679c\uff1a5\u5206\u949f\u5185\u9ed1\u8272\u7ba1\u4e0b\u964d\u4e8618\u2103\uff0c\u767d\u8272\u7ba1\u4e0b\u964d9\u2103\uff0c\u9520\u8272\u7ba1\u4e0b\u964d5\u2103\u3002\u4ed6\u4eec\u80fd\u5f97\u51fa\u4ec0\u4e48\u7ed3\u8bba\uff1f", aEn: "The results show that the black tube lost the most heat and therefore cooled fastest, while the silver tube lost the least and cooled slowest. This supports the conclusion that darker surfaces are better emitters of thermal radiation than lighter or shinier surfaces. The results also show a clear pattern — as the surface gets lighter and shinier, the cooling rate decreases.", aZh: "\u7ed3\u679c\u8868\u660e\uff0c\u9ed1\u8272\u7ba1\u5931\u70ed\u6700\u591a\uff0c\u56e0\u6b64\u51b7\u5374\u6700\u5feb\uff0c\u800c\u9520\u8272\u7ba1\u5931\u70ed\u6700\u5c11\uff0c\u51b7\u5374\u6700\u6162\u3002\u8fd9\u652f\u6301\u4e86\u201c\u6df1\u8272\u8868\u9762\u6bd4\u6d45\u8272\u6216\u5149\u4eae\u8868\u9762\u66f4\u5584\u4e8e\u8f90\u5c04\u70ed\u8f90\u5c04\u201d\u7684\u7ed3\u8bba\u3002\u7ed3\u679c\u8fd8\u663e\u793a\u4e86\u4e00\u4e2a\u6e05\u6670\u7684\u89c4\u5f8b\u2014\u2014\u968f\u7740\u8868\u9762\u989c\u8272\u53d8\u6d45\u548c\u5149\u4eae\uff0c\u51b7\u5374\u901f\u7387\u964d\u4f4e\u3002" },
        ]},
        { type: "quiz", qEn: "In the radiation absorption experiment, a student places black and white cards at equal distances from a heat lamp and measures the temperature behind each card every minute. What is the independent variable?", qZh: "\u5728\u8f90\u5c04\u5438\u6536\u5b9e\u9a8c\u4e2d\uff0c\u4e00\u540d\u540c\u5b66\u5c06\u9ed1\u8272\u548c\u767d\u8272\u5361\u7247\u653e\u5728\u79bb\u71ed\u70ed\u706f\u76f8\u540c\u8ddd\u79bb\u5904\uff0c\u6bcf\u5206\u949f\u6d4b\u91cf\u4e00\u6b21\u5404\u5361\u7247\u80cc\u540e\u7684\u6e29\u5ea6\u3002\u81ea\u53d8\u91cf\u662f\u4ec0\u4e48\uff1f",
          opts: [
            { en: "The temperature recorded behind each card.", zh: "\u6bcf\u5f20\u5361\u7247\u80cc\u540e\u8bb0\u5f55\u7684\u6e29\u5ea6\u3002" },
            { en: "The distance between the card and the heat lamp.", zh: "\u5361\u7247\u4e0e\u71ed\u70ed\u706f\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002" },
            { en: "The colour of the card surface.", zh: "\u5361\u7247\u8868\u9762\u7684\u989c\u8272\u3002" },
            { en: "The time interval between readings.", zh: "\u4e24\u6b21\u8bfb\u6570\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\u3002" },
          ],
          correct: 2,
          explainCorrectEn: "Correct. The independent variable is what the student deliberately changes — in this case, the colour of the card surface (black vs white). The temperature recorded is the dependent variable. The distance from the lamp and the time interval are control variables, kept the same to make the test fair.",
          explainCorrectZh: "\u6b63\u786b\u3002\u81ea\u53d8\u91cf\u662f\u540c\u5b66\u6545\u610f\u6539\u53d8\u7684\u5185\u5bb9\u2014\u2014\u5728\u8fd9\u91cc\u662f\u5361\u7247\u8868\u9762\u7684\u989c\u8272\uff08\u9ed1\u8272\u4e0e\u767d\u8272\uff09\u3002\u8bb0\u5f55\u7684\u6e29\u5ea6\u662f\u56e0\u53d8\u91cf\u3002\u79bb\u706f\u8ddd\u79bb\u548c\u65f6\u95f4\u95f4\u9694\u662f\u63a7\u5236\u53d8\u91cf\uff0c\u4fdd\u6301\u4e0d\u53d8\u4ee5\u4f7f\u5b9e\u9a8c\u516c\u5e73\u3002",
          explainWrongEn: "Not quite. The temperature recorded is the dependent variable — what changes as a result. The distance and time interval are control variables that must be kept constant. The independent variable is the one thing you deliberately change: the colour of the card surface.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u8bb0\u5f55\u7684\u6e29\u5ea6\u662f\u56e0\u53d8\u91cf\u2014\u2014\u662f\u7ed3\u679c\u4e2d\u53d1\u751f\u53d8\u5316\u7684\u5185\u5bb9\u3002\u8ddd\u79bb\u548c\u65f6\u95f4\u95f4\u9694\u662f\u5fc5\u987b\u4fdd\u6301\u4e0d\u53d8\u7684\u63a7\u5236\u53d8\u91cf\u3002\u81ea\u53d8\u91cf\u662f\u4f60\u6545\u610f\u6539\u53d8\u7684\u552f\u4e00\u4e8b\u7269\uff1a\u5361\u7247\u8868\u9762\u7684\u989c\u8272\u3002",
        },
      ],
    },

    /* ========== Lesson 10 ========== */
    {
      num: 10,
      badge: "T",
      title: "Insulation",
      titleZh: "\u7edd\u7f18",
      subtitle: "How do insulators reduce heat transfer?",
      subtitleZh: "\u7edd\u7f18\u4f53\u662f\u5982\u4f55\u51cf\u5c11\u70ed\u91cf\u4f20\u9012\u7684\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can explain what an insulator is and why insulators reduce heat transfer.", zh: "\u6211\u80fd\u89e3\u91ca\u4ec0\u4e48\u662f\u7edd\u7f18\u4f53\uff0c\u4ee5\u53ca\u7edd\u7f18\u4f53\u4e3a\u4ec0\u4e48\u80fd\u51cf\u5c11\u70ed\u91cf\u4f20\u9012\u3002" },
          { en: "I can explain why trapped air makes a good insulator.", zh: "\u6211\u80fd\u89e3\u91ca\u4e3a\u4ec0\u4e48\u56f0\u5b58\u7a7a\u6c14\u80fd\u6210\u4e3a\u826f\u597d\u7684\u7edd\u7f18\u6750\u6599\u3002" },
          { en: "I can describe how insulation is used to reduce heat loss from buildings.", zh: "\u6211\u80fd\u63cf\u8ff0\u5982\u4f55\u7528\u7edd\u7f18\u6765\u51cf\u5c11\u5efa\u7b51\u7269\u7684\u70ed\u91cf\u635f\u5931\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "An insulator is a material that is a poor conductor of heat — it slows down the transfer of heat energy. Insulators do not stop heat transfer completely, but they slow it down significantly. This is useful both for keeping things warm (such as a hot drink in a flask) and for keeping things cool (such as a cold drink in a cool bag).", zh: "\u7edd\u7f18\u4f53\u662f\u4e00\u79cd\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\u2014\u2014\u5b83\u80fd\u964d\u4f4e\u70ed\u80fd\u4f20\u9012\u7684\u901f\u5ea6\u3002\u7edd\u7f18\u4f53\u4e0d\u80fd\u5b8c\u5168\u963b\u6b62\u70ed\u91cf\u4f20\u9012\uff0c\u4f46\u80fd\u663e\u8457\u964d\u4f4e\u4f20\u9012\u901f\u5ea6\u3002\u8fd9\u5bf9\u4fdd\u6e29\uff08\u5982\u5bfc\u74f6\u4e2d\u7684\u70ed\u996e\u6599\uff09\u548c\u4fdd\u51b7\uff08\u5982\u51b7\u85cf\u888b\u4e2d\u7684\u51b7\u996e\u6599\uff09\u90fd\u5f88\u6709\u7528\u3002" },
          { type: "highlight", en: "Why trapped air is such a good insulator: Air is a very poor conductor of heat because its particles are far apart and rarely collide. Materials that trap many small pockets of air — such as wool, feathers, cotton wool, and foam — are therefore excellent insulators.", zh: "\u4e3a\u4ec0\u4e48\u56f0\u5b58\u7a7a\u6c14\u662f\u826f\u597d\u7684\u7edd\u7f18\u6750\u6599\uff1a\u7a7a\u6c14\u662f\u975e\u5e38\u5dee\u7684\u70ed\u5bfc\u4f53\uff0c\u56e0\u4e3a\u5b83\u7684\u7c92\u5b50\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5f88\u5c11\u53d1\u751f\u78b0\u649e\u3002\u56e0\u6b64\uff0c\u80fd\u56f0\u5b58\u8bb8\u591a\u5c0f\u6c14\u6ce1\u7684\u6750\u6599\u2014\u2014\u5982\u7f8a\u6bdb\u3001\u7fbd\u6bdb\u3001\u6a49\u82b1\u548c\u6ce1\u6cab\u2014\u2014\u662f\u4f18\u79c0\u7684\u7edd\u7f18\u4f53\u3002" },
          { type: "text", en: "In buildings, insulation reduces heat loss through three main mechanisms. Roof and wall insulation contains trapped air that reduces conduction. Double-glazed windows have an air gap between two panes of glass that reduces conduction and convection. Thick walls with air spaces also reduce conduction through the wall.", zh: "\u5728\u5efa\u7b51\u7269\u4e2d\uff0c\u7edd\u7f18\u5c42\u901a\u8fc7\u4e09\u79cd\u4e3b\u8981\u673a\u5236\u51cf\u5c11\u70ed\u91cf\u635f\u5931\u3002\u5c4b\u9876\u548c\u5899\u58c1\u4e2d\u7684\u7edd\u7f18\u5c42\u56f0\u5b58\u7a7a\u6c14\uff0c\u51cf\u5c11\u4f20\u5bfc\u3002\u53cc\u5c42\u73bb\u7483\u7a97\u5728\u4e24\u5c42\u73bb\u7483\u4e4b\u95f4\u6709\u7a7a\u6c14\u5c42\uff0c\u51cf\u5c11\u4f20\u5bfc\u548c\u5bf9\u6d41\u3002\u5e26\u6709\u7a7a\u6c14\u5c42\u7684\u539a\u5899\u4e5f\u80fd\u51cf\u5c11\u5899\u4f53\u7684\u4f20\u5bfc\u3002" },
          { type: "example", en: "This topic also links to tropical countries such as Thailand. In hot climates, insulation helps prevent heat from entering the building, reducing the need for air conditioning. Features such as roof overhangs and thick walls with air gaps are used to reduce heat gain by radiation and conduction.", zh: "\u8fd9\u4e2a\u4e3b\u9898\u8fd8\u4e0e\u6cf0\u56fd\u7b49\u70ed\u5e26\u56fd\u5bb6\u76f8\u5173\u3002\u5728\u70ed\u5e26\u6c14\u5019\u4e2d\uff0c\u7edd\u7f18\u6709\u52a9\u4e8e\u9632\u6b62\u70ed\u91cf\u8fdb\u5165\u5efa\u7b51\u7269\uff0c\u51cf\u5c11\u5bf9\u7a7a\u8c03\u7684\u4f9d\u8d56\u3002\u5c4b\u6aaf\u5e94\u6311\u548c\u5e26\u7a7a\u6c14\u5c42\u7684\u539a\u5899\u7b49\u8bbe\u8ba1\u7279\u70b9\u88ab\u7528\u6765\u51cf\u5c11\u8f90\u5c04\u548c\u4f20\u5bfc\u5e26\u6765\u7684\u5f97\u70ed\u3002" },
        ]},
        { type: "vocab", words: [
          { en: "Insulation", zh: "\u7edd\u7f18", defEn: "The use of poor-conducting materials to reduce the rate of heat transfer.", defZh: "\u5229\u7528\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\u6765\u964d\u4f4e\u70ed\u91cf\u4f20\u9012\u7684\u901f\u7387\u3002" },
          { en: "Trapped air", zh: "\u56f0\u5b58\u7a7a\u6c14", defEn: "Air enclosed within a material, which acts as a very effective insulator because air is a poor conductor.", defZh: "\u5c01\u95ed\u5728\u6750\u6599\u5185\u90e8\u7684\u7a7a\u6c14\uff0c\u56e0\u4e3a\u7a7a\u6c14\u662f\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\uff0c\u6240\u4ee5\u56f0\u5b58\u7a7a\u6c14\u662f\u975e\u5e38\u6709\u6548\u7684\u7edd\u7f18\u4f53\u3002" },
          { en: "Double glazing", zh: "\u53cc\u5c42\u73bb\u7483", defEn: "A window with two panes of glass separated by an air gap, which reduces heat loss by conduction and convection.", defZh: "\u7531\u4e24\u5c42\u73bb\u7483\u548c\u5176\u95f4\u7a7a\u6c14\u5c42\u6784\u6210\u7684\u7a97\u6237\uff0c\u80fd\u901a\u8fc7\u51cf\u5c11\u4f20\u5bfc\u548c\u5bf9\u6d41\u6765\u964d\u4f4e\u70ed\u91cf\u635f\u5931\u3002" },
          { en: "Heat loss", zh: "\u70ed\u91cf\u635f\u5931", defEn: "The transfer of heat from a warm object or building to the cooler surroundings.", defZh: "\u70ed\u91cf\u4ece\u6e29\u6696\u7684\u7269\u4f53\u6216\u5efa\u7b51\u7269\u5411\u8f83\u51b7\u73af\u5883\u7684\u4f20\u9012\u3002" },
        ]},
        { type: "image", caption: "A diagram showing methods of insulation in a house — roof insulation, double glazing, and cavity walls", captionZh: "\u663e\u793a\u623f\u5c4b\u7edd\u7f18\u65b9\u6cd5\u7684\u56fe\u8868\u2014\u2014\u5c4b\u9876\u7edd\u7f18\u3001\u53cc\u5c42\u73bb\u7483\u548c\u7a7a\u5fc3\u5899", source: "Wikimedia Commons", wikimediaFile: "House_heat_transfer.svg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Insulators are poor conductors of heat. Many good insulators work because they trap air pockets. Examples include: roof and wall insulation, double-glazed windows, thick walls with an air space. These reduce conduction and convection.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u7edd\u7f18\u4f53\u662f\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\u3002\u8bb8\u591a\u826f\u597d\u7684\u7edd\u7f18\u4f53\u90fd\u662f\u56e0\u4e3a\u80fd\u56f0\u5b58\u7a7a\u6c14\u3002\u4f8b\u5982\uff1a\u5c4b\u9876\u548c\u5899\u58c1\u7edd\u7f18\u5c42\u3001\u53cc\u5c42\u73bb\u7483\u7a97\u3001\u5e26\u7a7a\u6c14\u5c42\u7684\u539a\u5899\u3002\u8fd9\u4e9b\u90fd\u80fd\u51cf\u5c11\u4f20\u5bfc\u548c\u5bf9\u6d41\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "Why does a material with trapped air pockets make a good insulator?", qZh: "\u4e3a\u4ec0\u4e48\u5e26\u6709\u56f0\u5b58\u7a7a\u6c14\u7684\u6750\u6599\u80fd\u6210\u4e3a\u826f\u597d\u7684\u7edd\u7f18\u4f53\uff1f", aEn: "Air is a very poor conductor of heat because the particles in air are far apart and rarely collide with each other to pass on energy. When a material traps many small pockets of air, those air pockets act as barriers to heat flow. The heat cannot conduct through the trapped air easily, so it slows down the rate of heat transfer significantly. This is why materials like wool, feathers, and foam — which all contain trapped air — are effective insulators.", aZh: "\u7a7a\u6c14\u662f\u975e\u5e38\u5dee\u7684\u70ed\u5bfc\u4f53\uff0c\u56e0\u4e3a\u7a7a\u6c14\u4e2d\u7684\u7c92\u5b50\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5f88\u5c11\u76f8\u4e92\u78b0\u649e\u6765\u4f20\u9012\u80fd\u91cf\u3002\u5f53\u4e00\u79cd\u6750\u6599\u56f0\u5b58\u8bb8\u591a\u5c0f\u6c14\u6ce1\u65f6\uff0c\u8fd9\u4e9b\u6c14\u6ce1\u5c31\u6210\u4e3a\u70ed\u91cf\u6d41\u52a8\u7684\u969c\u788d\u3002\u70ed\u91cf\u65e0\u6cd5\u8f7b\u6613\u901a\u8fc7\u56f0\u5b58\u7684\u7a7a\u6c14\u4f20\u5bfc\uff0c\u56e0\u6b64\u663e\u8457\u964d\u4f4e\u4e86\u70ed\u91cf\u4f20\u9012\u7684\u901f\u7387\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u7f8a\u6bdb\u3001\u7fbd\u6bdb\u548c\u6ce1\u6cab\u7b49\u6750\u6599\u2014\u2014\u5b83\u4eec\u90fd\u542b\u6709\u56f0\u5b58\u7a7a\u6c14\u2014\u2014\u662f\u6709\u6548\u7684\u7edd\u7f18\u4f53\u3002" },
          { qEn: "How does double glazing reduce heat loss from a building?", qZh: "\u53cc\u5c42\u73bb\u7483\u662f\u5982\u4f55\u51cf\u5c11\u5efa\u7b51\u7269\u70ed\u91cf\u635f\u5931\u7684\uff1f", aEn: "Double glazing has two panes of glass with a gap between them, usually filled with air or an inert gas. This air gap is a poor conductor of heat, so it reduces heat loss by conduction. The sealed gap also prevents convection currents from forming, which further reduces heat transfer. The result is that much less heat escapes through the window compared to a single pane of glass.", aZh: "\u53cc\u5c42\u73bb\u7483\u6709\u4e24\u5c42\u73bb\u7483\uff0c\u4e2d\u95f4\u6709\u4e00\u4e2a\u95f4\u9699\uff0c\u901a\u5e38\u5145\u6709\u7a7a\u6c14\u6216\u60f0\u6027\u6c14\u4f53\u3002\u8fd9\u4e2a\u7a7a\u6c14\u5c42\u662f\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\uff0c\u56e0\u6b64\u80fd\u901a\u8fc7\u51cf\u5c11\u4f20\u5bfc\u6765\u964d\u4f4e\u70ed\u91cf\u635f\u5931\u3002\u5bc6\u5c01\u7684\u95f4\u9699\u8fd8\u80fd\u9632\u6b62\u5bf9\u6d41\u7535\u6d41\u7684\u5f62\u6210\uff0c\u8fdb\u4e00\u6b65\u51cf\u5c11\u70ed\u91cf\u4f20\u9012\u3002\u7ed3\u679c\u662f\uff0c\u4e0e\u5355\u5c42\u73bb\u7483\u76f8\u6bd4\uff0c\u901a\u8fc7\u7a97\u6237\u6563\u5931\u7684\u70ed\u91cf\u5927\u5927\u51cf\u5c11\u3002" },
        ]},
        { type: "quiz", qEn: "Why is air such a good insulator?", qZh: "\u4e3a\u4ec0\u4e48\u7a7a\u6c14\u662f\u8fd9\u4e48\u826f\u597d\u7684\u7edd\u7f18\u4f53\uff1f",
          opts: [
            { en: "Air particles are large and block heat from passing through.", zh: "\u7a7a\u6c14\u7c92\u5b50\u8f83\u5927\uff0c\u80fd\u963b\u6b62\u70ed\u91cf\u8fdc\u8fc7\u3002" },
            { en: "Air is cold, so it absorbs heat before it can escape.", zh: "\u7a7a\u6c14\u5f88\u51b7\uff0c\u6240\u4ee5\u5728\u70ed\u91cf\u6563\u5931\u524d\u80fd\u5438\u6536\u3002" },
            { en: "Air particles are far apart and rarely collide, so heat energy is not passed along efficiently.", zh: "\u7a7a\u6c14\u7c92\u5b50\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5f88\u5c11\u78b0\u649e\uff0c\u6240\u4ee5\u70ed\u80fd\u4f20\u9012\u6548\u7387\u5f88\u4f4e\u3002" },
            { en: "Air reflects radiation back into the room, preventing heat loss.", zh: "\u7a7a\u6c14\u5c06\u8f90\u5c04\u53cd\u5c04\u56de\u623f\u95f4\uff0c\u9632\u6b62\u70ed\u91cf\u635f\u5931\u3002" },
          ],
          correct: 2,
          explainCorrectEn: "Correct. Air is a poor conductor because its particles are far apart with large gaps between them. This means particles rarely collide, so heat energy cannot be passed along efficiently. Materials that trap air pockets exploit this property to create effective insulation.",
          explainCorrectZh: "\u6b63\u786b\u3002\u7a7a\u6c14\u662f\u5bfc\u70ed\u6027\u5dee\u7684\u6750\u6599\uff0c\u56e0\u4e3a\u5b83\u7684\u7c92\u5b50\u76f8\u8ddd\u5f88\u8fdc\uff0c\u5b58\u5728\u5927\u91cf\u7a7a\u9699\u3002\u8fd9\u610f\u5473\u7740\u7c92\u5b50\u5f88\u5c11\u78b0\u649e\uff0c\u6240\u4ee5\u70ed\u80fd\u65e0\u6cd5\u9ad8\u6548\u4f20\u9012\u3002\u80fd\u56f0\u5b58\u7a7a\u6c14\u7684\u6750\u6599\u5229\u7528\u4e86\u8fd9\u4e00\u7279\u6027\u6765\u521b\u9020\u6709\u6548\u7684\u7edd\u7f18\u5c42\u3002",
          explainWrongEn: "Not quite. The size of air particles is not relevant here. Air insulates because its particles are so far apart that heat cannot conduct through it efficiently — not because particles are large or cold or because air reflects radiation.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u7a7a\u6c14\u7c92\u5b50\u7684\u5927\u5c0f\u5728\u8fd9\u91cc\u5e76\u4e0d\u91cd\u8981\u3002\u7a7a\u6c14\u80fd\u7edd\u7f18\uff0c\u662f\u56e0\u4e3a\u5b83\u7684\u7c92\u5b50\u76f8\u8ddd\u5982\u6b64\u4e4b\u8fdc\uff0c\u4ee5\u81f3\u70ed\u91cf\u65e0\u6cd5\u9ad8\u6548\u901a\u8fc7\u4f20\u5bfc\u2014\u2014\u800c\u4e0d\u662f\u56e0\u4e3a\u7c92\u5b50\u8f83\u5927\u3001\u7a7a\u6c14\u8f83\u51b7\u6216\u7a7a\u6c14\u80fd\u53cd\u5c04\u8f90\u5c04\u3002",
        },
      ],
    },

    /* ========== Lesson 11 ========== */
    {
      num: 11,
      badge: "E",
      title: "Insulation — Key Practical",
      titleZh: "\u7edd\u7f18\u5b9e\u9a8c",
      subtitle: "Which material is the best insulator?",
      subtitleZh: "\u54ea\u79cd\u6750\u6599\u7684\u7edd\u7f18\u6548\u679c\u6700\u597d\uff1f",
      sections: [
        { type: "goals", items: [
          { en: "I can describe the method for a fair test to compare the insulating properties of different materials.", zh: "\u6211\u80fd\u63cf\u8ff0\u6bd4\u8f83\u4e0d\u540c\u6750\u6599\u7edd\u7f18\u6027\u80fd\u7684\u516c\u5e73\u5b9e\u9a8c\u65b9\u6cd5\u3002" },
          { en: "I can identify the variables and explain what must be controlled to make the test valid.", zh: "\u6211\u80fd\u8bc6\u522b\u53d8\u91cf\uff0c\u5e76\u89e3\u91ca\u4e3a\u4f7f\u5b9e\u9a8c\u6709\u6548\u5fc5\u987b\u63a7\u5236\u4ec0\u4e48\u3002" },
          { en: "I can draw a conclusion from insulation results and explain it using scientific ideas.", zh: "\u6211\u80fd\u6839\u636e\u7edd\u7f18\u5b9e\u9a8c\u7ed3\u679c\u5f97\u51fa\u7ed3\u8bba\uff0c\u5e76\u7528\u79d1\u5b66\u601d\u60f3\u8fdb\u884c\u89e3\u91ca\u3002" },
        ]},
        { type: "intro", content: [
          { type: "text", en: "In the insulation practical, different materials are wrapped around beakers or boiling tubes of hot water. The temperature is measured every minute for a set time — usually 5 minutes. The material that results in the smallest temperature drop is the best insulator.", zh: "\u5728\u7edd\u7f18\u5b9e\u9a8c\u4e2d\uff0c\u5c06\u4e0d\u540c\u6750\u6599\u5305\u88f9\u5728\u88c5\u6709\u70ed\u6c34\u7684\u70e7\u6768\u6216\u6c38\u6c38\u7ba1\u5916\u9762\u3002\u6bcf\u9694\u4e00\u5206\u949f\u6d4b\u91cf\u4e00\u6b21\u6e29\u5ea6\uff0c\u6301\u7eed\u4e00\u6bb5\u56fa\u5b9a\u65f6\u95f4\u2014\u2014\u901a\u5e38\u662f5\u5206\u949f\u3002\u5bfc\u81f4\u6e29\u5ea6\u4e0b\u964d\u6700\u5c0f\u7684\u6750\u6599\u5c31\u662f\u6700\u597d\u7684\u7edd\u7f18\u4f53\u3002" },
          { type: "highlight", en: "Independent variable: type of material. Dependent variable: temperature drop over 5 minutes. Control variables: starting temperature, volume of water, size of beaker, thickness of material, time measured.", zh: "\u81ea\u53d8\u91cf\uff1a\u6750\u6599\u7c7b\u578b\u3002\u56e0\u53d8\u91cf\uff1a5\u5206\u949f\u5185\u7684\u6e29\u5ea6\u4e0b\u964d\u3002\u63a7\u5236\u53d8\u91cf\uff1a\u521d\u59cb\u6e29\u5ea6\u3001\u6c34\u7684\u4f53\u79ef\u3001\u70e7\u6768\u5927\u5c0f\u3001\u6750\u6599\u539a\u5ea6\u3001\u8ba1\u65f6\u65f6\u95f4\u3002" },
          { type: "text", en: "To improve accuracy, a digital temperature probe is better than a mercury thermometer because it gives more precise readings and can log data automatically. Stirring the water before taking each reading also helps by ensuring the temperature is even throughout.", zh: "\u4e3a\u4e86\u63d0\u9ad8\u51c6\u786b\u6027\uff0c\u6570\u5b57\u6e29\u5ea6\u63a2\u9488\u6bd4\u6c34\u94f6\u6e29\u5ea6\u8ba1\u66f4\u597d\uff0c\u56e0\u4e3a\u5b83\u8bfb\u6570\u66f4\u7cbe\u786b\uff0c\u5e76\u80fd\u81ea\u52a8\u8bb0\u5f55\u6570\u636e\u3002\u6bcf\u6b21\u8bfb\u6570\u524d\u641e\u62cc\u6c34\u4e5f\u6709\u52a9\u4e8e\u786b\u4fdd\u6e29\u5ea6\u5747\u5300\u3002" },
          { type: "example", en: "Typical conclusion: 'Cotton wool was the best insulator because it caused the smallest temperature drop in 5 minutes. This is because cotton wool contains many small air pockets, and air is a poor conductor of heat. The bubble wrap also performed well for the same reason. The paper was the worst insulator because it contains fewer trapped air pockets.'", zh: "\u5178\u578b\u7ed3\u8bba\uff1a\u201c\u6a49\u82b1\u662f\u6700\u597d\u7684\u7edd\u7f18\u4f53\uff0c\u56e0\u4e3a\u5b83\u5bfc\u81f4\u7684\u6e29\u5ea6\u57285\u5206\u949f\u5185\u4e0b\u964d\u6700\u5c0f\u3002\u8fd9\u662f\u56e0\u4e3a\u6a49\u82b1\u542b\u6709\u8bb8\u591a\u5c0f\u6c14\u6ce1\uff0c\u800c\u7a7a\u6c14\u662f\u4e0d\u826f\u7684\u70ed\u5bfc\u4f53\u3002\u6c14\u6ce1\u818f\u56e0\u540c\u6837\u7684\u539f\u56e0\u6027\u80fd\u4e5f\u5f88\u597d\u3002\u7eb8\u5f20\u7684\u7edd\u7f18\u6548\u679c\u6700\u5dee\uff0c\u56e0\u4e3a\u5b83\u56f0\u5b58\u7684\u7a7a\u6c14\u6c14\u6ce1\u66f4\u5c11\u3002\u201d" },
        ]},
        { type: "vocab", words: [
          { en: "Temperature drop", zh: "\u6e29\u5ea6\u4e0b\u964d", defEn: "The decrease in temperature over a set time. A smaller temperature drop means a better insulator.", defZh: "\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u6e29\u5ea6\u7684\u4e0b\u964d\u3002\u6e29\u5ea6\u4e0b\u964d\u8d8a\u5c0f\u8868\u793a\u7edd\u7f18\u6548\u679c\u8d8a\u597d\u3002" },
          { en: "Digital temperature probe", zh: "\u6570\u5b57\u6e29\u5ea6\u63a2\u9488", defEn: "An electronic sensor that measures temperature more precisely than a traditional thermometer.", defZh: "\u6d4b\u91cf\u6e29\u5ea6\u6bd4\u4f20\u7edf\u6e29\u5ea6\u8ba1\u66f4\u7cbe\u786b\u7684\u7535\u5b50\u4f20\u611f\u5668\u3002" },
          { en: "Precision", zh: "\u7cbe\u786b\u6027", defEn: "How consistent or repeatable the results are. More repeat readings improve precision.", defZh: "\u7ed3\u679c\u7684\u4e00\u81f4\u6027\u6216\u53ef\u91cd\u590d\u6027\u3002\u91cd\u590d\u6d4b\u91cf\u6b21\u6570\u8d8a\u591a\uff0c\u7cbe\u786b\u6027\u8d8a\u9ad8\u3002" },
          { en: "Conclusion", zh: "\u7ed3\u8bba", defEn: "A statement that answers the experimental question, based on the data collected and linked to scientific ideas.", defZh: "\u57fa\u4e8e\u6536\u96c6\u7684\u6570\u636e\u5e76\u4e0e\u79d1\u5b66\u601d\u60f3\u76f8\u8054\u7cfb\uff0c\u56de\u7b54\u5b9e\u9a8c\u95ee\u9898\u7684\u9648\u8ff0\u3002" },
        ]},
        { type: "image", caption: "A beaker of hot water wrapped in different insulating materials to compare heat retention", captionZh: "\u7528\u4e0d\u540c\u7edd\u7f18\u6750\u6599\u5305\u88f9\u70ed\u6c34\u70e7\u6768\uff0c\u6bd4\u8f83\u4fdd\u6e29\u6548\u679c", source: "Wikimedia Commons", wikimediaFile: "Thermal_insulation_experiment.jpg" },
        { type: "source", labelEn: "Key concept", labelZh: "\u6838\u5fc3\u6982\u5ff5", en: "From the revision notes: 'Independent variable: material. Dependent variable: temperature change in 5 minutes. Control variables include mass, starting temperature, volume of water, thickness of material, and time. Cotton wool was the best insulator because it contains many air pockets. Air is an insulator. Heat does not conduct well through gases.'", zh: "\u6765\u81ea\u590d\u4e60\u7b14\u8bb0\uff1a\u201c\u81ea\u53d8\u91cf\uff1a\u6750\u6599\u3002\u56e0\u53d8\u91cf\uff1a5\u5206\u949f\u5185\u7684\u6e29\u5ea6\u53d8\u5316\u3002\u63a7\u5236\u53d8\u91cf\u5305\u62ec\u8d28\u91cf\u3001\u521d\u59cb\u6e29\u5ea6\u3001\u6c34\u7684\u4f53\u79ef\u3001\u6750\u6599\u539a\u5ea6\u548c\u65f6\u95f4\u3002\u6a49\u82b1\u662f\u6700\u597d\u7684\u7edd\u7f18\u4f53\uff0c\u56e0\u4e3a\u5b83\u542b\u6709\u8bb8\u591a\u6c14\u6ce1\u3002\u7a7a\u6c14\u662f\u7edd\u7f18\u4f53\u3002\u70ed\u91cf\u65e0\u6cd5\u5728\u6c14\u4f53\u4e2d\u6709\u6548\u4f20\u5bfc\u3002\u201d" },
        { type: "think", questions: [
          { qEn: "A student finds that cotton wool caused a temperature drop of 4°C, paper caused 12°C, and bubble wrap caused 6°C in 5 minutes. Which was the best insulator, and why?", qZh: "\u4e00\u540d\u540c\u5b66\u53d1\u73b0\uff0c5\u5206\u949f\u5185\u6a49\u82b1\u5bfc\u81f4\u6e29\u5ea6\u4e0b\u964d4\u2103\uff0c\u7eb8\u5f20\u4e0b\u964d12\u2103\uff0c\u6c14\u6ce1\u818f\u4e0b\u964d6\u2103\u3002\u54ea\u79cd\u662f\u6700\u597d\u7684\u7edd\u7f18\u4f53\uff0c\u4e3a\u4ec0\u4e48\uff1f", aEn: "Cotton wool was the best insulator because it caused the smallest temperature drop — only 4°C in 5 minutes. This means the hot water lost the least heat through the cotton wool. The reason is that cotton wool contains many small trapped air pockets. Air is a very poor conductor of heat, so little energy could escape. Paper was the worst insulator, with a drop of 12°C, because it contains fewer trapped air pockets and allows more heat to conduct through.", aZh: "\u6a49\u82b1\u662f\u6700\u597d\u7684\u7edd\u7f18\u4f53\uff0c\u56e0\u4e3a\u5b83\u5bfc\u81f4\u7684\u6e29\u5ea6\u4e0b\u964d\u6700\u5c0f\u2014\u20145\u5206\u949f\u5185\u4ec05\u4e0b\u964d4\u2103\u3002\u8fd9\u610f\u5473\u7740\u70ed\u6c34\u901a\u8fc7\u6a49\u82b1\u635f\u5931\u7684\u70ed\u91cf\u6700\u5c11\u3002\u539f\u56e0\u662f\u6a49\u82b1\u542b\u6709\u8bb8\u591a\u5c0f\u56f0\u5b58\u6c14\u6ce1\u3002\u7a7a\u6c14\u662f\u975e\u5e38\u5dee\u7684\u70ed\u5bfc\u4f53\uff0c\u56e0\u6b64\u51e0\u4e4e\u6ca1\u6709\u80fd\u91cf\u6563\u5931\u3002\u7eb8\u5f20\u662f\u6700\u5dee\u7684\u7edd\u7f18\u4f53\uff0c\u6e29\u5ea6\u4e0b\u964d12\u2103\uff0c\u56e0\u4e3a\u5b83\u56f0\u5b58\u7684\u6c14\u6ce1\u8f83\u5c11\uff0c\u5141\u8bb8\u66f4\u591a\u70ed\u91cf\u901a\u8fc7\u4f20\u5bfc\u6563\u5931\u3002" },
          { qEn: "Why is using a digital temperature probe better than a thermometer in this experiment?", qZh: "\u5728\u8fd9\u4e2a\u5b9e\u9a8c\u4e2d\uff0c\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6570\u5b57\u6e29\u5ea6\u63a2\u9488\u6bd4\u4f7f\u7528\u6e29\u5ea6\u8ba1\u66f4\u597d\uff1f", aEn: "A digital temperature probe gives more precise readings than a traditional mercury thermometer because it can measure to more decimal places and reduces human error when reading a scale. It can also record data automatically at regular intervals, which is more consistent than manually reading a thermometer every minute. This improves the accuracy and precision of the results.", aZh: "\u6570\u5b57\u6e29\u5ea6\u63a2\u9488\u6bd4\u4f20\u7edf\u6c34\u94f6\u6e29\u5ea6\u8ba1\u8bfb\u6570\u66f4\u7cbe\u786b\uff0c\u56e0\u4e3a\u5b83\u80fd\u6d4b\u91cf\u5230\u66f4\u591a\u5c0f\u6570\u4f4d\uff0c\u5e76\u51cf\u5c11\u8bfb\u523b\u5ea6\u65f6\u7684\u4eba\u4e3a\u8bef\u5dee\u3002\u5b83\u8fd8\u80fd\u4ee5\u56fa\u5b9a\u95f4\u9694\u81ea\u52a8\u8bb0\u5f55\u6570\u636e\uff0c\u6bd4\u6bcf\u5206\u949f\u624b\u52a8\u8bfb\u53d6\u6e29\u5ea6\u8ba1\u66f4\u4e00\u81f4\u3002\u8fd9\u63d0\u9ad8\u4e86\u7ed3\u679c\u7684\u51c6\u786b\u6027\u548c\u7cbe\u786b\u6027\u3002" },
        ]},
        { type: "quiz", qEn: "In an insulation experiment, what does a smaller temperature drop over 5 minutes tell you about the material being tested?", qZh: "\u5728\u7edd\u7f18\u5b9e\u9a8c\u4e2d\uff0c5\u5206\u949f\u5185\u6e29\u5ea6\u4e0b\u964d\u8f83\u5c0f\u8bf4\u660e\u88ab\u6d4b\u6750\u6599\u4e0a\u5982\u4f55\uff1f",
          opts: [
            { en: "The material is a good conductor of heat.", zh: "\u8be5\u6750\u6599\u662f\u826f\u597d\u7684\u70ed\u5bfc\u4f53\u3002" },
            { en: "The material is a good insulator — it reduces the rate of heat loss.", zh: "\u8be5\u6750\u6599\u662f\u826f\u597d\u7684\u7edd\u7f18\u4f53\u2014\u2014\u5b83\u80fd\u964d\u4f4e\u70ed\u91cf\u635f\u5931\u7684\u901f\u7387\u3002" },
            { en: "The material absorbs a lot of radiation from the surroundings.", zh: "\u8be5\u6750\u6599\u4ece\u5468\u56f4\u5438\u6536\u4e86\u5927\u91cf\u8f90\u5c04\u3002" },
            { en: "The material has a high temperature itself, slowing the cooling.", zh: "\u8be5\u6750\u6599\u672c\u8eab\u6e29\u5ea6\u5f88\u9ad8\uff0c\u964d\u4f4e\u4e86\u51b7\u5374\u901f\u5ea6\u3002" },
          ],
          correct: 1,
          explainCorrectEn: "Correct. A smaller temperature drop means the hot water inside retained more of its heat — less heat escaped through the material. This shows the material slows down heat transfer effectively, which means it is a good insulator. The best insulator causes the smallest temperature drop.",
          explainCorrectZh: "\u6b63\u786b\u3002\u6e29\u5ea6\u4e0b\u964d\u8f83\u5c0f\u610f\u5473\u7740\u5185\u90e8\u7684\u70ed\u6c34\u4fdd\u6e29\u66f4\u597d\u2014\u2014\u901a\u8fc7\u8be5\u6750\u6599\u6563\u5931\u7684\u70ed\u91cf\u8f83\u5c11\u3002\u8fd9\u8bf4\u660e\u8be5\u6750\u6599\u80fd\u6709\u6548\u5730\u964d\u4f4e\u70ed\u91cf\u4f20\u9012\u901f\u7387\uff0c\u5373\u5b83\u662f\u826f\u597d\u7684\u7edd\u7f18\u4f53\u3002\u6700\u597d\u7684\u7edd\u7f18\u4f53\u5bfc\u81f4\u6e29\u5ea6\u4e0b\u964d\u6700\u5c0f\u3002",
          explainWrongEn: "Not quite. A smaller temperature drop shows the material is a good insulator, not a good conductor. A good conductor would let heat escape quickly, causing a larger temperature drop. The purpose of insulation is to slow down heat transfer, and a small temperature drop is the evidence that it has done so successfully.",
          explainWrongZh: "\u4e0d\u5bf9\u3002\u6e29\u5ea6\u4e0b\u964d\u8f83\u5c0f\u8bf4\u660e\u8be5\u6750\u6599\u662f\u826f\u597d\u7684\u7edd\u7f18\u4f53\uff0c\u800c\u4e0d\u662f\u826f\u597d\u7684\u5bfc\u4f53\u3002\u826f\u597d\u7684\u5bfc\u4f53\u4f1a\u8ba9\u70ed\u91cf\u8fc5\u901f\u6563\u5931\uff0c\u5bfc\u81f4\u6e29\u5ea6\u4e0b\u964d\u66f4\u5927\u3002\u7edd\u7f18\u7684\u76ee\u7684\u662f\u964d\u4f4e\u70ed\u91cf\u4f20\u9012\u901f\u7387\uff0c\u6e29\u5ea6\u4e0b\u964d\u5c0f\u5c31\u662f\u5b83\u6210\u529f\u5b9e\u73b0\u8fd9\u4e00\u76ee\u7684\u7684\u8bc1\u636e\u3002",
        },
      ],
    },

  ],
};
