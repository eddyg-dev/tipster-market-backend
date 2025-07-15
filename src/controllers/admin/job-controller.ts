import { Request, Response } from "express";
import { CheckResultsService, UpdateOddsService } from "../../services/jobs";

export class JobController {
  static async execute(req: Request, res: Response) {
    try {
      const { jobName } = req.params;
      let result;

      switch (jobName) {
        case "update_odds":
          result = await UpdateOddsService.execute();
          break;
        case "check_results":
          result = await CheckResultsService.execute();
          break;
        default:
          res.status(400).json({ success: false, message: "Job inconnu" });
          return;
      }

      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur" });
    }
  }
}
