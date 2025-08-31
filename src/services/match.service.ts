import { supabase } from "../config/supabase";
import { Match } from "../shared-data/models/match.model";

export class MatchService {
  static async getMatchesMap(): Promise<Map<string, Match>> {
    const { data: matches, error: matchesError } = await supabase
      .from("matches")
      .select("*");

    if (matchesError) {
      throw matchesError;
    }

    const matchesMap = new Map<string, Match>();
    matches.forEach((match) => {
      if (match.match_id) {
        matchesMap.set(match.match_id, match);
      }
      matchesMap.set(match.id, match);
    });

    return matchesMap;
  }
}
