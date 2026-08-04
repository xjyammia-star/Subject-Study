import { Topic } from "./types";
import { humanRights } from "./human-rights";
import { atlanticSlaveTrade } from "./atlantic-slave-trade";
import { britishEmpire } from "./british-empire";
import { usCivilRights } from "./us-civil-rights";
import { learningCheck } from "./learning-check";
import { asia } from "./asia";
import { asiaEconomicBoom } from "./asia-economic-boom";
import { weatherClimate } from "./weather-climate";
import { tourism } from "./tourism";
import { geographyLearningCheck } from "./geography-learning-check";
import { heatingCooling } from "./heating-cooling";

/** All available topics, keyed by slug */
export const topics: Record<string, Topic> = {
  "human-rights": humanRights,
  "atlantic-slave-trade": atlanticSlaveTrade,
  "british-empire": britishEmpire,
  "us-civil-rights": usCivilRights,
  "learning-check": learningCheck,
  "asia": asia,
  "asia-economic-boom": asiaEconomicBoom,
  "weather-climate": weatherClimate,
  "tourism": tourism,
  "geography-learning-check": geographyLearningCheck,
  "heating-cooling": heatingCooling,
};

/** Ordered list for the home page */
export const topicList = [
  humanRights, atlanticSlaveTrade, britishEmpire, usCivilRights, learningCheck,
  asia, asiaEconomicBoom, weatherClimate, tourism, geographyLearningCheck,
  heatingCooling,
];
