import { Tip } from "./tip.model";

export interface Tipster {
  id: string;
  username: string;
  avatar_url: string;
  stats: {
    win_rate: number;
    roi: number;
    rank: number;
    tips_count: number;
    active_tips_count: number;
    points: number;
  };
  created_at: string;
  updated_at: string;
  tips?: Tip[];
}
