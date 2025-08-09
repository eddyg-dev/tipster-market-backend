import { SubscriptionLevel } from "../enums/subscription-level.enum";
import { Profile } from "./profile.model";

export interface User extends Profile {
  subscription_level: SubscriptionLevel;
}
