import { Router } from "express";
import { JobController } from "../../controllers/admin/job-controller";

const router = Router();

router.post("/execute/:jobName", JobController.execute);

export default router;
