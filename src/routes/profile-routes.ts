import express from "express";
import { ProfileController } from "../controllers/profile-controller";

const router = express.Router();

router.get("/tipsters", ProfileController.getTipsters);
router.post("/:id/introduction", ProfileController.saveProfileIntroduction);
router.get("/:id", ProfileController.getProfileById);

export default router;
