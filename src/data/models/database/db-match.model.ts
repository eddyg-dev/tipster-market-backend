import { Outcome } from "@tipster-market/shared-models";

export interface DatabaseMatch {
  id?: string;
  match_id: string;
  home_team: string;
  away_team: string;
  date: string;
  sport_key: string;
  outcomes: Outcome[];
  created_at?: string;
  updated_at?: string;
}
