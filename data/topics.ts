import { Topic } from "./types";
import { atlanticSlaveTrade } from "./atlantic-slave-trade";

/** All available topics, keyed by slug */
export const topics: Record<string, Topic> = {
  "atlantic-slave-trade": atlanticSlaveTrade,
};

/** Ordered list for the home page */
export const topicList = [atlanticSlaveTrade];
