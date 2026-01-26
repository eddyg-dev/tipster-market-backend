import express from "express";
import { ActuController } from "../controllers/actu-controller";

const router = express.Router();

router.get("/", ActuController.getAllActus);


export default router;
