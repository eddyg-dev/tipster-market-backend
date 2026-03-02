import express from "express";
import { getHighlights } from "../controllers/stat-controller";

const router = express.Router();

router.get("/highlights", getHighlights);

export default router;
