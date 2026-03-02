import express from "express";
import {
  addFavorite,
  getMyFavorites,
  removeFavorite,
} from "../controllers/favorite-controller";
import { ProfileController } from "../controllers/profile-controller";
import { authMiddleware, optionalAuthMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/tipsters", ProfileController.getTipsters);
router.get("/pseudos", ProfileController.getAllPseudos);

// Favoris (avant /:id pour ne pas capturer "favorites" comme id) — auth requise
router.get("/favorites", authMiddleware, getMyFavorites);
router.post("/favorites", authMiddleware, addFavorite);
router.delete("/favorites/:tipsterId", authMiddleware, removeFavorite);

router.post("/:id/introduction", authMiddleware, ProfileController.saveProfileIntroduction);
router.get("/:id", optionalAuthMiddleware, ProfileController.getProfileById);
router.delete("/:id", ProfileController.deleteMyProfile);

export default router;
