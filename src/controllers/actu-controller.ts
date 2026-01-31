import { Request, Response } from "express";
import { supabase } from "../config/supabase";

/**
 * Contrôleur pour la gestion des actu
 * Optimisé avec des JOINs Supabase pour éviter les requêtes N+1
 * Utilise la clé étrangère fk_matches_sport_key définie dans init.sql
 */

export class ActuController {
  /**
   * Récupère tous les actu depuis Supabase
   * Utilise un JOIN optimisé pour éviter les requêtes N+1
   */
  static async getAllActus(req: Request, res: Response) {
    try {
      const { data: actus, error: actuError } = await supabase
        .from("actus")
        .select(
          `
          *
        `
        ).order("created_at", { ascending: false });

      if (actuError) throw actuError;

      res.json(actus);
    } catch (error) {
      console.error("Erreur lors de la récupération des actu:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  static async getActuById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { data: actu, error: actuError } = await supabase.from("actus").select("*").eq("id", id).single();
      if (actuError) throw actuError;
      res.json(actu);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'actu:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

}
