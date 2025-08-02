import express from "express";
import { SportController } from "../controllers/sport-controller";

const router = express.Router();

router.get("/", SportController.getAllSports);

export default router;
