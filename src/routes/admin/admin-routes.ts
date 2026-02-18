import express from "express";
import { AdminController } from "../../controllers/admin-controller";

const router = express.Router();

// Matches
router.get("/matches-with-tips", AdminController.getMatchesWithTips);
router.post("/update-scores-bulk", AdminController.updateBulkMatchScores);
router.post("/cancel-match", AdminController.cancelMatch);

// Users
router.get("/users", AdminController.getUsers);
router.delete("/users/:id", AdminController.deleteUser);

export default router;
