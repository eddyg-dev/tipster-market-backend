import dotenv from "dotenv";
import { CheckResultsService } from "../src/services/jobs/check-results.service";

dotenv.config();

async function main() {
  try {
    console.log("Checking results...");
    const result = await CheckResultsService.execute();
    process.exit(1);
    // console.log(result.success ? "✅" : "❌", result.message);
    // process.exit(result.success ? 0 : 1);
  } catch (error) {
    console.error(
      "❌ Erreur:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );
    process.exit(1);
  }
}

main();
