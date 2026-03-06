import { User } from "@supabase/supabase-js";
import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";
import { getFollowersCountMap } from "../services/favorite.service";
import { StatsService } from "../services/stats.service";
import { ProfileType } from "../shared-data/enums/profile-type.enum";
import { SubscriptionLevel } from "../shared-data/enums/subscription-level.enum";
import { Payment, PaymentPlatform } from "../shared-data/models/payment.model";
import { Profile } from "../shared-data/models/profile.model";
import { Tipster } from "../shared-data/models/tipster.model";

export class ProfileController {
  static async getProfiles(req: Request, res: Response): Promise<void> {
    try {
      const { data, error } = await supabaseAdmin.from("profiles").select("*");

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(200).json(data as Profile[]);
    } catch (error) {
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupère uniquement les tipsters avec leurs statistiques
   */
  static async getTipsters(req: Request, res: Response): Promise<void> {
    try {
      const { data: tipsters, error } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url, created_at, updated_at")
        .eq("profile_type", "tipster")
        .order("username", { ascending: true });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      const tipsterIds = tipsters.map((t) => t.id);
      const followersMap = await getFollowersCountMap(tipsterIds);

      const tipstersWithStats = await Promise.all(
        tipsters.map(async (tipster) => {
          const stats = await StatsService.calculateTipsterStats(tipster.id);
          return {
            ...tipster,
            stats,
            followers_count: followersMap[tipster.id] ?? 0,
          };
        })
      );

      res.status(200).json(tipstersWithStats);
    } catch (error) {
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getProfileById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      let result = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      let { data, error } = result;

      // Profil absent mais requête authentifiée pour ce même id → créer un profil minimal (rattrapage trigger)
      if (error && req.user?.id === id && req.user?.email) {
        const username =
          "user_" + id.replace(/-/g, "").slice(0, 12) + "_" + Date.now().toString(36);
        const { error: insertError } = await supabaseAdmin.from("profiles").insert({
          id,
          username,
          email: req.user.email,
          profile_type: ProfileType.USER,
          subscription_level: SubscriptionLevel.FREE,
        });
        if (!insertError) {
          result = await supabaseAdmin
            .from("profiles")
            .select("*")
            .eq("id", id)
            .single();
          data = result.data;
          error = result.error;
        }
      }

      if (error || !data) {
        res.status(404).json({ error: "Profil non trouvé" });
        return;
      }
      const profileType = data?.profile_type;

      if (profileType === ProfileType.TIPSTER) {
        const [stats, followersMap, referral] = await Promise.all([
          StatsService.calculateTipsterStats(id),
          getFollowersCountMap([id]),
          supabaseAdmin
            .from("referral_codes")
            .select("code")
            .eq("tipster_id", id)
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
        ]);
        const tipsterWithStats: Tipster = {
          ...(data as any),
          stats,
          followers_count: followersMap[id] ?? 0,
          promo_code: referral.data?.code ?? undefined,
        };
        res.status(200).json(tipsterWithStats);
        return;
      } else if (profileType === ProfileType.USER) {
        res.status(200).json(data as User);
        return;
      }

      res.status(200).json(data as Profile);
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTipsterById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        res.status(404).json({ error: "Tipster non trouvé" });
        return;
      }

      // Vérifier que c'est bien un tipster
      if (data.profile_type !== ProfileType.TIPSTER) {
        res.status(400).json({ error: "Le profil n'est pas un tipster" });
        return;
      }

      const [stats, followersMap, referral] = await Promise.all([
        StatsService.calculateTipsterStats(id),
        getFollowersCountMap([id]),
        supabaseAdmin
          .from("referral_codes")
          .select("code")
          .eq("tipster_id", id)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle(),
      ]);
      const tipsterWithStats: Tipster = {
        ...(data as any),
        stats,
        followers_count: followersMap[id] ?? 0,
        promo_code: referral.data?.code ?? undefined,
      };

      res.status(200).json(tipsterWithStats);
    } catch (error) {
      console.error("Erreur lors de la récupération du tipster:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Met à jour le niveau d'abonnement de l'utilisateur connecté.
   * Utilisée après un achat in-app pour marquer l'utilisateur comme premium/elite côté backend.
   */
  static async updateMySubscriptionLevel(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ error: "Utilisateur non authentifié" });
        return;
      }

      const { level } = req.body as { level?: SubscriptionLevel | string };
      if (!level) {
        res.status(400).json({ error: "Niveau d'abonnement manquant" });
        return;
      }

      // Normaliser la valeur reçue (string → enum)
      const normalizedLevel = String(level).toLowerCase() as SubscriptionLevel;
      const allowedLevels = Object.values(SubscriptionLevel);
      if (!allowedLevels.includes(normalizedLevel)) {
        res.status(400).json({ error: "Niveau d'abonnement invalide" });
        return;
      }

      const { data, error } = await supabaseAdmin
        .from("profiles")
        .update({ subscription_level: normalizedLevel })
        .eq("id", userId)
        .select("*")
        .single();

      if (error) {
        console.error("Erreur lors de la mise à jour de l'abonnement:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data as Profile);
    } catch (error) {
      console.error("Erreur interne lors de la mise à jour de l'abonnement:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Enregistre un paiement ou renouvellement d'abonnement (appelé par le front après .approved()).
   * Idempotent : si (user_id, transaction_id) existe déjà, retourne 200 sans doublon.
   */
  static async recordPayment(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ error: "Utilisateur non authentifié" });
        return;
      }

      const body = req.body as {
        transactionId?: string;
        productId?: string;
        platform?: string;
        paidAt?: string;
        subscriptionLevel?: string;
      };
      const { transactionId, productId, platform, paidAt, subscriptionLevel } = body;

      if (!transactionId || !productId || !platform) {
        res.status(400).json({
          error: "Champs requis manquants: transactionId, productId, platform",
        });
        return;
      }

      const normalizedPlatform = String(platform).toLowerCase().replace(/\s+/g, "_");
      const allowedPlatforms: PaymentPlatform[] = ["google_play", "apple_appstore"];
      if (!allowedPlatforms.includes(normalizedPlatform as PaymentPlatform)) {
        res.status(400).json({
          error: "Plateforme invalide. Valeurs acceptées: google_play, apple_appstore",
        });
        return;
      }

      const level =
        subscriptionLevel &&
        Object.values(SubscriptionLevel).includes(subscriptionLevel as SubscriptionLevel)
          ? (subscriptionLevel as SubscriptionLevel)
          : SubscriptionLevel.PREMIUM;

      // Parrain éventuel : dernier code parrainage utilisé par cet utilisateur (pour commission)
      let referralTipsterId: string | null = null;
      const { data: lastReferral } = await supabaseAdmin
        .from("referral_usages")
        .select("tipster_id")
        .eq("user_id", userId)
        .order("used_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (lastReferral?.tipster_id) referralTipsterId = lastReferral.tipster_id;

      const row = {
        user_id: userId,
        transaction_id: transactionId,
        product_id: productId,
        platform: normalizedPlatform,
        subscription_level: level,
        paid_at: paidAt ? new Date(paidAt).toISOString() : new Date().toISOString(),
        ...(referralTipsterId && { referral_tipster_id: referralTipsterId }),
      };

      const { data, error } = await supabaseAdmin
        .from("payments")
        .insert(row)
        .select("*")
        .single();

      if (error) {
        if (error.code === "23505") {
          // Violation d'unicité : distinguer "même user (idempotent)" vs "transaction déjà liée à un autre compte"
          const msg = String(error.message || "");
          if (msg.includes("payments_transaction_id_unique")) {
            res.status(409).json({
              error: "Cet abonnement est déjà lié à un autre compte Prono d'Or.",
              code: "SUBSCRIPTION_ALREADY_LINKED",
            });
            return;
          }
          res.status(200).json({ message: "Paiement déjà enregistré" });
          return;
        }
        console.error("Erreur lors de l'enregistrement du paiement:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json(data as Payment);
    } catch (error) {
      console.error("Erreur interne lors de l'enregistrement du paiement:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async saveProfileIntroduction(
    req: Request,
    res: Response
  ): Promise<void> {
    if (
      !req.body ||
      !req.body.username ||
      !req.body.birthDate ||
      !req.body.profileType ||
      !req.body.acceptTerms ||
      !req.body.avatarUrl
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const { username, birthDate, profileType, acceptTerms, avatarUrl, email, heardFrom, heardFromOther } =
      req.body;
    const userId = req.params.id;

    // Si "Autre" est sélectionné, on enregistre "Autre" + le texte libre s'il y en a un
    const heardFromValue =
      heardFrom === "Autre"
        ? typeof heardFromOther === "string" && heardFromOther.trim()
          ? `Autre - ${heardFromOther.trim()}`
          : "Autre"
        : heardFrom ?? null;

    // Seul l'utilisateur authentifié peut mettre à jour son propre profil
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Non autorisé à modifier ce profil" });
      return;
    }

    try {
      // supabaseAdmin (service_role) contourne RLS : permet INSERT si le profil
      // n'existe pas encore (trigger manqué) ou UPDATE pour compléter l'intro
      const { data, error } = await supabaseAdmin.from("profiles").upsert(
        {
          id: userId,
          username: username,
          birth_date: birthDate,
          profile_type: profileType,
          accept_terms: acceptTerms,
          avatar_url: avatarUrl,
          profile_introduction_completed: true,
          subscription_level: SubscriptionLevel.FREE,
          email: email ?? undefined,
          heard_from: heardFromValue,
        },
        {
          onConflict: "id",
        }
      );

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      // Si le profil est (ou devient) un tipster, générer un code promo unique basé sur le pseudo
      if (profileType === ProfileType.TIPSTER && Array.isArray(data) && data[0]) {
        const createdProfile = data[0] as Profile;
        const base = (createdProfile.username || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-zA-Z0-9]/g, "")
          .toUpperCase()
          .slice(0, 10);
        const suffix = Math.random().toString(36).substring(2, 6).toUpperCase();
        const code = `${base}_${suffix}`;

        try {
          await supabaseAdmin
            .from("referral_codes")
            .insert({
              code,
              tipster_id: createdProfile.id,
            });
        } catch (e) {
          // En cas de conflit (code déjà existant) ou autre, on loggue mais on ne bloque pas la création du profil
          console.error("Erreur lors de la création du code parrainage:", e);
        }
      }

      res.status(200).json(data as Profile | null);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getAllPseudos(req: Request, res: Response): Promise<void> {
    try {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("username")
        .eq("profile_type", "tipster");
      res.status(200).json(data?.map((item) => item.username) as string[]);
    } catch (error) {
      console.error("Erreur lors de la récupération des pseudos:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async deleteMyProfile(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Non autorisé à supprimer ce profil" });
      return;
    }
    try {
      const { data, error } = await supabaseAdmin.from("profiles").delete().eq("id", userId);
      if (error) throw error;
      res.json({ success: true, message: "Profil supprimé avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
