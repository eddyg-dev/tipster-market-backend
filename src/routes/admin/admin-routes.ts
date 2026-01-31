import express from "express";
import { AdminController } from "../../controllers/admin-controller";

const router = express.Router();



router.post("/update-scores-bulk", AdminController.updateBulkMatchScores);
router.post("/cancel-match", AdminController.cancelMatch);
router.get("/users", AdminController.getUsers);
router.delete("/users/:id", AdminController.deleteUser);
export default router;
