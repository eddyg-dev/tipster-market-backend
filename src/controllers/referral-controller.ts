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

}

