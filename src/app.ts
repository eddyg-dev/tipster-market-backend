import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import followerRoutes from "./routes/follower-routes";
import matchRoutes from "./routes/match-routes";
import oddsApiRoutes from "./routes/odds-api-routes";
import profileRoutes from "./routes/profile-routes";
import tipPurchaseRoutes from "./routes/tip-purchase-routes";
import tipRoutes from "./routes/tip-routes";
import tipsterRoutes from "./routes/tipster-routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/matches", matchRoutes);
app.use("/api/tips", tipRoutes);
app.use("/api/tip-purchases", tipPurchaseRoutes);
app.use("/api/followers", followerRoutes);
app.use("/api/odds", oddsApiRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/tipsters", tipsterRoutes);

// Documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
