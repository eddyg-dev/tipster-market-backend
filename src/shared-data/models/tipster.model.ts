import { TipsterStats } from "./tipster-stats.model";

export interface Tipster {
  id: string;
  username: string;
  avatar_url: string;
  stats: TipsterStats;
  followers_count: number;
  created_at: string;
  updated_at: string;
  promo_code?: string;
}
