import { Request, Response } from "express";
import { StatsService } from "../services/stats.service";

/**
 * GET /api/stats/highlights
 * Renvoie la meilleure octé réussie, le tip ayant remporté le plus de points
 * et le tipster en feu (max de succès consécutifs sur les derniers pronos terminés).
 */
export async function getHighlights(req: Request, res: Response): Promise<void> {
  try {
    const [bestOdd, topTipByPoints, tipsterFuego] = await Promise.all([
      StatsService.getBestOdd(),
      StatsService.getTipWithMostPoints(),
      StatsService.getTipsterFuego(),
    ]);

    res.status(200).json({
      bestOdd: bestOdd ?? null,
      topTipByPoints: topTipByPoints ?? null,
      tipsterFuego: tipsterFuego ?? null,
    });
  } catch (err) {
    console.error("Erreur getHighlights:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
