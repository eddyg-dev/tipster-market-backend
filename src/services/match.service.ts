import { supabase } from "../config/supabase";
import { MatchResponse } from "../shared-data";

export class MatchService {
  static async getMatchesMap(): Promise<Map<string, MatchResponse>> {
    const { data: matches, error: matchesError } = await supabase
      .from("matches")
      .select("*");

    if (matchesError) {
      throw matchesError;
    }

    const matchesMap = new Map<string, MatchResponse>();
    matches.forEach((match) => {
      if (match.match_id) {
        matchesMap.set(match.match_id, match);
      }
      matchesMap.set(match.id, match);
    });

    return matchesMap;
  }
}
