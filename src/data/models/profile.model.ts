export interface Profile {
  id: string;
  username: string;
  birth_date: string | null;
  profile_type: "tipster" | "user";
  accept_terms: boolean;
  profile_introduction_completed: boolean;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfileIntroduction {
  username: string;
  birthDate: string;
  profileType: "tipster" | "user";
  acceptTerms: boolean;
}

export interface ProfileResponse extends Profile {}

// Interface pour les stats calculées des tipsters
export interface TipsterStats {
  win_rate: number;
  roi: number;
  rank: number;
  tips_count: number;
  active_tips_count: number;
  status: string;
}

// Interface complète pour un tipster avec stats
export interface TipsterWithStats extends Profile, TipsterStats {
  profile_type: "tipster";
}
