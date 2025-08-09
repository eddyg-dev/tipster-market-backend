export interface ScoreResponse {
  id: string; //match id
  sport_key: string;
  sport_title: string;
  commence_time: string;
  completed: boolean;
  home_team: string; //home team name
  away_team: string; //away team name
  scores: {
    name: string;
    score: string;
  }[];
  last_update: string;
}
