export interface MatchDetails {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
}

export interface TipResponse {
  id: string;
  selected_outcomes: {
    match_id: string;
    name: string;
    type: string;
    match?: MatchDetails;
  }[];
  amount: number;
  price: number;
  sale_deadline: string;
  status: string;
  result: string;
  created_at: string;
}
