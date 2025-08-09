import { TipResult } from "../enums/tip-result.enum";
import { TipStatus } from "../enums/tip-status.enum";
import { Outcome } from "./outcome.model";
import { Tipster } from "./tipster.model";

export interface MatchDetails {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
}

export interface Tip {
  id: string;
  tipster_id?: string;
  selected_outcomes: Outcome[];
  selected_outcomes_count?: number;
  amount: number;
  price: number;
  deadline: string;
  created_at: string;
  status: TipStatus;
  result: TipResult;
  analysis?: string;
  tipster?: Tipster;
}
