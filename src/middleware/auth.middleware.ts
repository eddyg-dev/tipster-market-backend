import { NextFunction, Request, Response } from "express";
import { supabase } from "../config/supabase";

// Étendre l'interface Request pour inclure l'utilisateur
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: "Token d'authentification manquant" });
      return;
    }

    const token = authHeader.substring(7); // Enlever "Bearer "

    // Vérifier le token avec Supabase
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      res.status(401).json({ error: "Token invalide" });
      return;
    }

    // Ajouter l'utilisateur à la requête
    req.user = {
      id: user.id,
      email: user.email || "",
    };

    next();
  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    res.status(500).json({ error: "Erreur d'authentification" });
  }
};

/**
 * Middleware d'auth optionnel : attache req.user si un Bearer token valide est présent,
 * sinon laisse passer sans erreur (pour les routes qui peuvent être appelées avec ou sans auth).
 */
export const optionalAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      next();
      return;
    }
    const token = authHeader.substring(7);
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (error || !user) {
      next();
      return;
    }
    req.user = { id: user.id, email: user.email || "" };
    next();
  } catch {
    next();
  }
};
