import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import actuRoutes from "./routes/actu-routes";
import adminRoutes from "./routes/admin/admin-routes";
import jobRoutes from "./routes/admin/job-routes";
import healthRoutes from "./routes/health-routes";
import matchRoutes from "./routes/match-routes";
import oddsApiRoutes from "./routes/odds-api-routes";
import profileRoutes from "./routes/profile-routes";
import sportRoutes from "./routes/sport-routes";
import statRoutes from "./routes/stat-routes";
import tipRoutes from "./routes/tip-routes";
import versionRoutes from "./routes/version-routes";
import referralRoutes from "./routes/referral-routes";

const app = express();

// Middleware
app.use(cors());
// Route Stripe AVANT express.json()
app.use(express.json());

// Routes publiques
app.use("/health", healthRoutes); // Health check pour monitoring (UptimeRobot, etc.)
app.use("/api/version", versionRoutes); // Route publique (pas d'auth)

// Routes protégées
app.use("/api/matches", matchRoutes);
app.use("/api/tips", tipRoutes);
app.use("/api/odds", oddsApiRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/sports", sportRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/actus", actuRoutes);
app.use("/api/admin/scripts", jobRoutes);
app.use("/api/cron", jobRoutes);
app.use("/api/referrals", referralRoutes);

// Documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
