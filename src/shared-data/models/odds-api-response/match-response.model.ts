import { Outcome } from "../outcome.model";
import { BookmakerResponse } from "./bookmaker-response.model";
import { SportResponse } from "./sport-response.model";

export interface MatchResponse {
  id: string;
  sport_key: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: BookmakerResponse[];
  sport?: SportResponse;
  outcomes?: Outcome[];
  scores?: {
    scores: {
      name: string;
      score: string;
    }[];
    outcome_results?: {
      outcome_id: string;
      type: string;
      name: string;
      result: "right" | "wrong" | "initial";
    }[];
  };
}
