import dotenv from "dotenv";
import { UpdateOddsService } from "../src/services/jobs/update-odds.service";

dotenv.config();

async function main() {
  try {
    const result = await UpdateOddsService.execute();
    process.exit(result.success ? 0 : 1);
  } catch (error) {
    console.error(
      "❌ Erreur:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );
    process.exit(1);
  }
}

main();
