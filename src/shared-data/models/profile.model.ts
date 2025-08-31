import { ProfileType, SubscriptionLevel } from "../enums";
import { TipsterStats } from "./tipster-stats.model";

export interface Profile {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
  profile_type: ProfileType;
  created_at: string;
  updated_at: string;
  profile_introduction_completed: boolean;
  subscription_level: SubscriptionLevel;
  stats?: TipsterStats;
}
