// data/ks3-symposium.ts
// Topic 7 has its own standalone page at /ks3-symposium
// This file only provides the metadata needed for the Science subject card.
import { Topic } from "./types";

const ks3Symposium: Topic = {
  slug: "ks3-symposium",
  name: "KS3 Science Symposium",
  nameZh: "\u521d\u4e2d\u79d1\u5b66\u7814\u8ba8\u4f1a",
  subject: "Science",
  subjectZh: "\u79d1\u5b66",
  year: "Year 8",
  lessons: [], // No lessons — rendered by app/ks3-symposium/page.tsx instead
};

export default ks3Symposium;
