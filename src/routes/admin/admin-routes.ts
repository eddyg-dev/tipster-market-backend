import express from "express";
import { AdminController } from "../../controllers/admin-controller";

const router = express.Router();

router.get("/matches", AdminController.getAllMatchesWithoutScores);

router.post("/update-scores-bulk", AdminController.updateBulkMatchScores);

export default router;
