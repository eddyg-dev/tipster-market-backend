import { Request, Response } from "express";
import moment from "moment";
import { supabase } from "../config/supabase";
import { ActuResponse } from "../shared-data/models/actu-response.model";
import { ScoreResponse } from "../shared-data/models/odds-api-response/score-response.model";

export class AdminController {
  /**
   * Récupère tous les matches depuis Supabase
   */
  static async getAllMatchesWithoutScores(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      // Récupérer les matches qui ont commencé dans le passé (avant maintenant)
      const now = moment().toISOString();

      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        // .lt("commence_time", now)
        .order("commence_time", { ascending: true });

      const matchesWithoutScores =
        matches?.filter((match) => match.scores === null) || [];

      if (matchesError) throw matchesError;

      res.json(matchesWithoutScores);
      return;
    } catch (error) {
      console.error("Erreur lors de la récupération des matches:", error);
      res.status(500).json({ error: "Erreur serveur" });
      return;
    }
  }

  /**
   * Met à jour plusieurs matchs avec leurs scores respectifs
   */
  static async updateBulkMatchScores(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const matchUpdates = req.body as Array<{
        match_id: string;
        scores: ScoreResponse;
      }>;

      if (!Array.isArray(matchUpdates) || matchUpdates.length === 0) {
        res.status(400).json({ error: "Données invalides" });
        return;
      }

      let updatedCount = 0;
      const errors: string[] = [];

      // Mettre à jour chaque match individuellement
      for (const update of matchUpdates) {
        const { data, error } = await supabase
          .from("matches")
          .update({ scores: update.scores })
          .eq("id", update.match_id);

        if (error) {
          console.error(
            `Erreur lors de la mise à jour du match ${update.match_id}:`,
            error
          );
          errors.push(`Match ${update.match_id}: ${error.message}`);
        } else {
          updatedCount++;
          // Les outcomes seront automatiquement mis à jour par le trigger PostgreSQL
        }
      }

      if (errors.length > 0) {
        res.json({
          success: true,
          message: `${updatedCount} match(s) mis à jour avec succès, ${errors.length} erreur(s)`,
          updatedCount,
          errors,
        });
      } else {
        res.json({
          success: true,
          message: `${updatedCount} match(s) mis à jour avec succès`,
          updatedCount,
        });
      }
      return;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des scores des matchs:",
        error
      );
      res.status(500).json({ error: "Erreur serveur" });
      return;
    }
  }

  static async createActu(req: Request, res: Response): Promise<ActuResponse> {
    try {
      const { title, content, image } = req.body;
      const { data, error } = await supabase.from("actus").insert({ title, content, image }).select().single();
      if (error) throw error;
      return data as ActuResponse;
    } catch (error) {
      console.error("Erreur lors de la création de l'actu:", error);
      res.status(500).json({ error: "Erreur serveur" });
      return null as unknown as ActuResponse;
    }
  }


  static async deleteActu(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { data, error } = await supabase.from("actus").delete().eq("id", id);
      if (error) throw error;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
