import { Topic } from "./types";
import { atlanticSlaveTrade } from "./atlantic-slave-trade";
import { britishEmpire } from "./british-empire";
import { usCivilRights } from "./us-civil-rights";

/** All available topics, keyed by slug */
export const topics: Record<string, Topic> = {
  "atlantic-slave-trade": atlanticSlaveTrade,
  "british-empire": britishEmpire,
  "us-civil-rights": usCivilRights,
};

/** Ordered list for the home page */
export const topicList = [atlanticSlaveTrade, britishEmpire, usCivilRights];
