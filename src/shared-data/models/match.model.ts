import { Outcome } from "./outcome.model";

export interface Match {
  id: string;
  match_id?: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers?: any[];
  outcomes?: Outcome[];
  scores: {
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
