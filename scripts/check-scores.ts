import dotenv from "dotenv";
import { CheckScoresService } from "../src/services/jobs";

dotenv.config();

async function main() {
  try {
    const result = await CheckScoresService.execute();
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
