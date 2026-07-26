import { Topic } from "./types";
import { atlanticSlaveTrade } from "./atlantic-slave-trade";
import { britishEmpire } from "./british-empire";

/** All available topics, keyed by slug */
export const topics: Record<string, Topic> = {
  "atlantic-slave-trade": atlanticSlaveTrade,
  "british-empire": britishEmpire,
};

/** Ordered list for the home page */
export const topicList = [atlanticSlaveTrade, britishEmpire];
