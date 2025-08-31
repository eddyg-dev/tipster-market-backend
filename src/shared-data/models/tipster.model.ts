import { TipsterStats } from "./tipster-stats.model";

export interface Tipster {
  id: string;
  username: string;
  avatar_url: string;
  stats: TipsterStats;
  created_at: string;
  updated_at: string;
}
