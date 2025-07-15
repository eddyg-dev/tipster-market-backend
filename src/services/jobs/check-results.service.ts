export class CheckResultsService {
  static async execute() {
    try {
      console.log("Cdedez hecking results...");
      console.log(process.env.SUPABASE_URL);
      console.log(process.env.SUPABASE_ANON_KEY);
      return { success: true, message: "Results checked" };
      // const { data: matches } = await supabase
      //   .from("matches")
      //   .select("*")
      //   .eq("status", "finished")
      //   .is("result", null);

      // if (!matches || matches.length === 0) {
      //   return { success: true, message: "Aucun match en attente" };
      // }

      // let updated = 0;
      // for (const match of matches) {
      //   if (match.home_score && match.away_score) {
      //     const result =
      //       match.home_score > match.away_score
      //         ? "home_win"
      //         : match.away_score > match.home_score
      //         ? "away_win"
      //         : "draw";

      //     await supabase.from("matches").update({ result }).eq("id", match.id);
      //     updated++;
      //   }
      // }

      // return { success: true, message: `${updated} matchs mis à jour` };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }
}
