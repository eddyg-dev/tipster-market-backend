import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import { authMiddleware } from "./middleware/auth.middleware";
import matchRoutes from "./routes/match-routes";
import oddsApiRoutes from "./routes/odds-api-routes";
import profileRoutes from "./routes/profile-routes";
import purchaseRoutes from "./routes/purchase-routes";
import tipRoutes from "./routes/tip-routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/matches", matchRoutes);
app.use("/api/tips", authMiddleware, tipRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/odds", oddsApiRoutes);
app.use("/api/profiles", profileRoutes);

// Documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
