export interface TipsterResponse {
  id: string;
  username: string;
  avatar_url: string | null;
  win_rate: number;
  roi: number;
  rank: number;
  followers_count: number;
  tips_count: number;
  active_tips_count: number;
  status: string;
  created_at: string;
  updated_at: string;
}
