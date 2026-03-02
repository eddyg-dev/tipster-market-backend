import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";
import { ProfileType } from "../shared-data/enums/profile-type.enum";
import { Tipster } from "../shared-data/models/tipster.model";
import { getFollowersCountMap } from "../services/favorite.service";
import { StatsService } from "../services/stats.service";

/**
 * Mettre un tipster en favori (s'abonner).
 * POST /api/profiles/favorites
 * Body: { tipsterId: string }
 */
export async function addFavorite(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ error: "Non authentifié" });
    return;
  }

  const tipsterId = req.body?.tipsterId ?? req.body?.tipster_id;
  if (!tipsterId || typeof tipsterId !== "string") {
    res.status(400).json({ error: "tipsterId requis" });
    return;
  }

  if (userId === tipsterId) {
    res.status(400).json({ error: "Impossible de s'abonner à soi-même" });
    return;
  }

  try {
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("profile_type")
      .eq("id", tipsterId)
      .single();

    if (!profile || profile.profile_type !== ProfileType.TIPSTER) {
      res.status(400).json({ error: "Le profil n'est pas un tipster" });
      return;
    }

    const { data, error } = await supabaseAdmin
      .from("favorite_tipsters")
      .upsert(
        { user_id: userId, tipster_id: tipsterId },
        { onConflict: "user_id,tipster_id" }
      )
      .select("user_id, tipster_id, created_at")
      .single();

    if (error) {
      if (error.code === "23503") {
        res.status(404).json({ error: "Utilisateur ou tipster introuvable" });
        return;
      }
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(201).json({ success: true, favorite: data });
  } catch (err) {
    console.error("Erreur addFavorite:", err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}

/**
 * Retirer un tipster des favoris (se désabonner).
 * DELETE /api/profiles/favorites/:tipsterId
 */
export async function removeFavorite(
  req: Request,
  res: Response
): Promise<void> {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ error: "Non authentifié" });
    return;
  }

  const { tipsterId } = req.params;
  if (!tipsterId) {
    res.status(400).json({ error: "tipsterId requis" });
    return;
  }

  try {
    const { error } = await supabaseAdmin
      .from("favorite_tipsters")
      .delete()
      .eq("user_id", userId)
      .eq("tipster_id", tipsterId);

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ success: true, message: "Favori retiré" });
  } catch (err) {
    console.error("Erreur removeFavorite:", err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}

/**
 * Liste des tipsters favoris de l'utilisateur connecté (objets Tipster[] avec stats).
 * GET /api/profiles/favorites
 */
export async function getMyFavorites(
  req: Request,
  res: Response
): Promise<void> {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ error: "Non authentifié" });
    return;
  }

  try {
    const { data: rows, error } = await supabaseAdmin
      .from("favorite_tipsters")
      .select("tipster_id, created_at, profiles!tipster_id(id, username, avatar_url, created_at, updated_at)")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    const profileIds = (rows ?? [])
      .map((row) => (row as any).profiles?.id)
      .filter(Boolean) as string[];
    const followersMap = await getFollowersCountMap(profileIds);

    const tipsters: Tipster[] = [];
    for (const row of rows ?? []) {
      const profile = (row as any).profiles;
      if (!profile?.id) continue;
      const stats = await StatsService.calculateTipsterStats(profile.id);
      tipsters.push({
        id: profile.id,
        username: profile.username,
        avatar_url: profile.avatar_url ?? "",
        stats,
        followers_count: followersMap[profile.id] ?? 0,
        created_at: profile.created_at ?? "",
        updated_at: profile.updated_at ?? "",
      });
    }

    res.status(200).json({ tipsters });
  } catch (err) {
    console.error("Erreur getMyFavorites:", err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}
