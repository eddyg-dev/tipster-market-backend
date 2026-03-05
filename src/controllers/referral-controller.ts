import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";

export class ReferralController {
  /**
   * Valide un code de parrainage saisi par un utilisateur.
   * Retourne les informations de base du code (tipster associé, etc.).
   */
  static async validateCode(req: Request, res: Response): Promise<void> {
    try {
      const { code } = req.body as { code?: string };

      if (!code) {
        res.status(400).json({ error: "Code manquant" });
        return;
      }

      const { data, error } = await supabaseAdmin
        .from("referral_codes")
        .select("id, code, tipster_id, is_active, expires_at")
        .eq("code", code)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Erreur lors de la validation du code:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      if (!data || data.is_active === false) {
        res.status(404).json({ valid: false, error: "Code invalide ou inactif" });
        return;
      }

      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        res.status(400).json({ valid: false, error: "Code expiré" });
        return;
      }

      // Enregistrer l'utilisation du code (user_id, tipster_id, referral_code, used_at)
      try {
        const userId = req.user?.id;
        if (userId) {
          await supabaseAdmin.from("referral_usages").insert({
            user_id: userId,
            tipster_id: data.tipster_id,
            referral_code: data.code,
          });
        }
      } catch (usageError: any) {
        // On loggue mais on ne bloque pas la validation du code
        console.error("Erreur lors de l'enregistrement de l'utilisation du code:", usageError);
      }

      res.status(200).json({
        valid: true,
        code: data.code,
        tipsterId: data.tipster_id,
      });
    } catch (error) {
      console.error("Erreur interne lors de la validation du code:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Retourne le dernier code parrainage utilisé par l'utilisateur connecté.
   * Utilisé par la page offres pour pré-remplir le champ et revalider.
   */
  static async getUsedCode(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ error: "Utilisateur non authentifié" });
        return;
      }

      const { data, error } = await supabaseAdmin
        .from("referral_usages")
        .select("referral_code")
        .eq("user_id", userId)
        .order("used_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Erreur lors de la récupération du code utilisé:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ code: data?.referral_code ?? null });
    } catch (error) {
      console.error("Erreur interne getUsedCode:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Supprime l'utilisation d'un code pour l'utilisateur connecté (reset).
   * Permet de "défaire" un code devenu invalide pour pouvoir en saisir un autre.
   */
  static async clearUsedCode(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ error: "Utilisateur non authentifié" });
        return;
      }

      const { code } = req.body as { code?: string };
      if (!code) {
        res.status(400).json({ error: "Code manquant" });
        return;
      }

      const { error } = await supabaseAdmin
        .from("referral_usages")
        .delete()
        .eq("user_id", userId)
        .eq("referral_code", code);

      if (error) {
        console.error("Erreur lors du reset du code utilisé:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erreur interne clearUsedCode:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}

