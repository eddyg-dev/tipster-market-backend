import { TipStatus } from "@eddyg-dev/shared-models";
import { supabase } from "../config/supabase";
import { StatsService } from "./stats.service";

export class TipsterService {
  /**
   * Construit un objet tipster avec ses détails (stats et tips)
   */
  static async buildTipsterWithDetails(
    profile: any,
    includeTips: boolean = false
  ): Promise<any> {
    const stats = await StatsService.calculateTipsterStats(profile.id);

    const tipsterData: any = {
      id: profile.id,
      username: profile.username,
      avatar_url: profile.avatar_url,
      profile_type: "tipster",
      profile_introduction_completed:
        profile.profile_introduction_completed ?? true,
      stats: {
        win_rate: stats.winRate,
        roi: stats.roi,
        rank: 0, // Sera mis à jour après le tri
        tips_count: stats.totalTips,
        active_tips_count: 0, // À calculer si nécessaire
        points: 0, // À calculer si nécessaire
      },
      status: "active", // Valeur par défaut
      created_at: profile.created_at,
      updated_at: profile.updated_at,
    };

    if (includeTips) {
      const tipsWithMatches = await TipsterService.getTipsWithMatchDetails(
        profile.id
      );
      tipsterData.tips = tipsWithMatches;
      tipsterData.stats.active_tips_count = tipsWithMatches.filter(
        (tip) => tip.status === TipStatus.IN_PROGRESS
      ).length;
    }

    return tipsterData;
  }

  /**
   * Récupère les tips d'un tipster avec les détails des matches
   */
  private static async getTipsWithMatchDetails(
    tipsterId: string
  ): Promise<any[]> {
    const { data: tips, error: tipsError } = await supabase
      .from("tips")
      .select(
        ` 
        id,
        selected_outcomes,
        amount,
        price,
        deadline,
        status,
        result,
        created_at,
        analysis
      `
      )
      .eq("tipster_id", tipsterId)
      .order("created_at", { ascending: false });

    if (tipsError) {
      console.error("Erreur lors de la récupération des tips:", tipsError);
      return [];
    }

    return await Promise.all(
      tips?.map(async (tip) => {
        const selectedOutcomesWithMatches =
          await TipsterService.enrichOutcomesWithMatchDetails(
            tip.selected_outcomes || []
          );

        return {
          ...tip,
          selected_outcomes: selectedOutcomesWithMatches,
          selected_outcomes_count: selectedOutcomesWithMatches.length,
        };
      }) || []
    );
  }

  /**
   * Enrichit les outcomes avec les détails des matches
   */
  private static async enrichOutcomesWithMatchDetails(
    outcomes: any[]
  ): Promise<any[]> {
    return await Promise.all(
      outcomes.map(async (outcome: any) => {
        // Vérifier que matchId existe
        if (!outcome.matchId) {
          console.warn("matchId manquant pour l'outcome:", outcome);
          return outcome;
        }

        const matchDetails = await TipsterService.getMatchDetails(
          outcome.matchId
        );

        // Si pas de détails du match, retourner l'outcome sans les détails
        if (!matchDetails) {
          return outcome;
        }

        console.log("matchDetails", matchDetails);
        return {
          outcome,
          match: matchDetails,
        };
      })
    );
  }

  /**
   * Récupère les détails d'un match
   */
  private static async getMatchDetails(matchId: string): Promise<any> {
    const { data: match, error: matchError } = await supabase
      .from("matches")
      .select("*")
      .eq("id", matchId)
      .single();

    if (matchError) {
      console.error("Erreur lors de la récupération du match:", matchError);
      return null;
    }

    if (!match) {
      console.error("Match non trouvé pour l'ID:", matchId);
      return null;
    }

    return {
      id: match.id,
      sport_key: match.sport_key,
      sport_title: TipsterService.getSportTitle(match.sport_key),
      commence_time: match.date,
      home_team: match.home_team,
      away_team: match.away_team,
    };
  }

  /**
   * Convertit une clé de sport en titre lisible
   */
  private static getSportTitle(sportKey: string): string {
    const sportTitles: { [key: string]: string } = {
      soccer_france_ligue_one: "Ligue 1",
      soccer_england_premier_league: "Premier League",
      soccer_spain_la_liga: "La Liga",
      soccer_germany_bundesliga: "Bundesliga",
      soccer_italy_serie_a: "Serie A",
      soccer_epl: "Premier League",
      basketball_nba: "NBA",
      basketball_euroleague: "Euroleague",
    };

    return sportTitles[sportKey] || sportKey;
  }
}
