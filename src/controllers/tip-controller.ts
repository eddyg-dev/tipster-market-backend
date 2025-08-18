import { Request, Response } from "express";
import moment from "moment";
import { supabase } from "../config/supabase";
import { TipResult } from "../shared-data/enums/tip-result.enum";
import { TipStatus } from "../shared-data/enums/tip-status.enum";
import { Outcome } from "../shared-data/models/outcome.model";
import { Tip } from "../shared-data/models/tip.model";

export class TipController {
  /**
   * Calcule la deadline basée sur la date du premier match
   */
  private static calculateDeadline(selectedOutcomes: Outcome[]): string {
    let earliestMatchDate: moment.Moment | null = null;

    if (selectedOutcomes && selectedOutcomes.length > 0) {
      for (const outcome of selectedOutcomes) {
        if (outcome.match?.commence_time) {
          const matchDate = moment(outcome.match.commence_time);
          if (!earliestMatchDate || matchDate.isBefore(earliestMatchDate)) {
            earliestMatchDate = matchDate;
          }
        }
      }
    }

    return earliestMatchDate
      ? earliestMatchDate.toISOString()
      : moment().add(24, "hours").toISOString();
  }
  /**
   * Crée un nouveau pronostic
   */
  static async createTip(req: Request, res: Response): Promise<void> {
    if (
      !req.body ||
      !req.body.selectedOutcomes ||
      !req.body.amount ||
      !req.body.price
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const tipsterId = req.user?.id;
    if (!tipsterId) {
      res.status(401).json({ error: "Utilisateur non authentifié" });
      return;
    }

    const { selectedOutcomes, amount, price, analysis } = req.body;

    try {
      const deadline = TipController.calculateDeadline(selectedOutcomes);

      const { data, error } = await supabase.from("tips").insert({
        tipster_id: tipsterId,
        selected_outcomes: selectedOutcomes,
        amount,
        price,
        analysis,
        deadline,
        status: TipStatus.IN_PROGRESS,
        result: TipResult.INITIAL,
      });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json(data);
    } catch (error) {
      console.error("Erreur lors de la création du tip:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTips(req: Request, res: Response): Promise<void> {
    // Récupérer d'abord les tips
    const { data: tipsData, error: tipsError } = await supabase
      .from("tips")
      .select(
        "id, tipster_id, selected_outcomes, amount, price, deadline, status, created_at"
      )
      .order("created_at", { ascending: false });

    if (tipsError) {
      res.status(500).json({ error: tipsError.message });
      return;
    }

    // Récupérer les profils des tipsters
    const tipsterIds = tipsData?.map((tip) => tip.tipster_id) || [];
    const { data: profilesData, error: profilesError } = await supabase
      .from("profiles")
      .select("*")
      .in("id", tipsterIds);

    if (profilesError) {
      res.status(500).json({ error: profilesError.message });
      return;
    }

    // Combiner les données
    const transformedData =
      tipsData?.map((tip) => {
        const tipster = profilesData?.find(
          (profile) => profile.id === tip.tipster_id
        );
        return {
          ...tip,
          selected_outcomes_count: Array.isArray(tip.selected_outcomes)
            ? tip.selected_outcomes.length
            : 0,
          selected_outcomes: [],
          tipster,
        };
      }) || [];

    res.status(200).json(transformedData as unknown as Tip[]);
  }

  static async getTip(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    // Récupérer le tip
    const { data: tipData, error: tipError } = await supabase
      .from("tips")
      .select("*")
      .eq("id", id)
      .single();

    if (tipError) {
      res.status(500).json({ error: tipError.message });
      return;
    }

    // Récupérer le profil du tipster
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", tipData.tipster_id)
      .single();

    if (profileError) {
      res.status(500).json({ error: profileError.message });
      return;
    }

    // Combiner les données
    const result = {
      ...tipData,
      tipster: profileData,
    };

    res.status(200).json(result);
  }
}
