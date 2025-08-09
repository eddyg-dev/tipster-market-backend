import { ProfileType } from "../enums/profile-type.enum";

export interface Profile {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
  profile_type: ProfileType;
  created_at: string;
  updated_at: string;
  profile_introduction_completed: boolean;
}
