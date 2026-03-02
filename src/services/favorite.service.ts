import { supabaseAdmin } from "../config/supabase-admin";

/**
 * Retourne le nombre de followers par tipster_id pour les ids donnés.
 * Clé = tipster_id, valeur = nombre de lignes dans favorite_tipsters.
 */
export async function getFollowersCountMap(
  tipsterIds: string[]
): Promise<Record<string, number>> {
  if (tipsterIds.length === 0) return {};

  const { data, error } = await supabaseAdmin
    .from("favorite_tipsters")
    .select("tipster_id")
    .in("tipster_id", tipsterIds);

  if (error) {
    console.error("Erreur getFollowersCountMap:", error);
    return Object.fromEntries(tipsterIds.map((id) => [id, 0]));
  }

  const countByTipsterId: Record<string, number> = {};
  for (const id of tipsterIds) {
    countByTipsterId[id] = 0;
  }
  for (const row of data ?? []) {
    const id = row.tipster_id;
    if (id in countByTipsterId) countByTipsterId[id] += 1;
  }
  return countByTipsterId;
}
