import dotenv from "dotenv";
import { supabaseAdmin } from "../src/config/supabase-admin";

dotenv.config();

async function generateCodeFromUsername(username: string): Promise<string> {
  const base = (username || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 10);
  const suffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${base}_${suffix}`;
}

async function main() {
  try {
    console.log("🔍 Récupération des tipsters existants sans code promo...");

    // Récupérer tous les tipsters
    const { data: tipsters, error: tipstersError } = await supabaseAdmin
      .from("profiles")
      .select("id, username")
      .eq("profile_type", "tipster");

    if (tipstersError) {
      console.error("❌ Erreur lors de la récupération des tipsters:", tipstersError);
      process.exit(1);
    }

    if (!tipsters || tipsters.length === 0) {
      console.log("✅ Aucun tipster trouvé, rien à faire.");
      process.exit(0);
    }

    // Récupérer les tipsters qui ont déjà un code
    const { data: existingCodes, error: codesError } = await supabaseAdmin
      .from("referral_codes")
      .select("tipster_id");

    if (codesError) {
      console.error("❌ Erreur lors de la récupération des codes existants:", codesError);
      process.exit(1);
    }

    const tipstersWithCode = new Set(
      (existingCodes ?? []).map((row: { tipster_id: string }) => row.tipster_id)
    );

    const tipstersWithoutCode = tipsters.filter(
      (t: { id: string; username: string }) => !tipstersWithCode.has(t.id)
    );

    if (tipstersWithoutCode.length === 0) {
      console.log("✅ Tous les tipsters ont déjà un code promo. Rien à générer.");
      process.exit(0);
    }

    console.log(`🧾 ${tipstersWithoutCode.length} tipster(s) sans code promo. Génération en cours...`);

    const rowsToInsert: { tipster_id: string; code: string }[] = [];

    for (const tipster of tipstersWithoutCode) {
      const code = await generateCodeFromUsername(tipster.username);
      rowsToInsert.push({
        tipster_id: tipster.id,
        code,
      });
      console.log(`  ➕ ${tipster.username} → ${code}`);
    }

    const { error: insertError } = await supabaseAdmin
      .from("referral_codes")
      .insert(rowsToInsert);

    if (insertError) {
      console.error("❌ Erreur lors de l'insertion des codes promo:", insertError);
      process.exit(1);
    }

    console.log("✅ Génération des codes promo terminée avec succès.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur inattendue lors de la génération des codes promo:", error);
    process.exit(1);
  }
}

main();

