import { SportGroupKey } from "../enums/sport-group.key.enum";

export const sportGroupIcons: Record<SportGroupKey, string> = {
  [SportGroupKey.AmericanFootball]: "sports_football",
  [SportGroupKey.Baseball]: "sports_baseball",
  [SportGroupKey.Basketball]: "sports_basketball",
  [SportGroupKey.Cricket]: "sports_cricket",
  [SportGroupKey.Golf]: "sports_golf",
  [SportGroupKey.IceHockey]: "sports_hockey",
  [SportGroupKey.MMA]: "sports_mma",
  [SportGroupKey.Rugby]: "sports_rugby",
  [SportGroupKey.Soccer]: "sports_soccer",
  [SportGroupKey.Tennis]: "sports_tennis",
};
