export interface ScoreResponse {
  id: string; //match id
  sport_key: string;
  commence_time: string;
  completed: boolean;
  home_team: string;
  away_team: string;
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
  last_update: string;
}
