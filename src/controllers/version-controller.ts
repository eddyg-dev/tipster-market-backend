import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase-admin';

/**
 * Contrôleur pour la gestion des versions de l'application
 */
export class VersionController {
  /**
   * Vérifie la version de l'application
   * GET /api/version?current=1.0.0
   */
  static async checkVersion(req: Request, res: Response): Promise<void> {
    try {
      const currentVersion = req.query.current as string;

      if (!currentVersion) {
        res.status(400).json({
          error: 'Version actuelle requise',
        });
        return;
      }

      // Récupérer la version minimale depuis la BDD
      const { data, error } = await supabaseAdmin
        .from('app_version')
        .select('min_version')
        .single();

      if (error) {
        console.error('❌ Erreur lors de la récupération de la version:', error);
        res.status(500).json({
          error: 'Erreur lors de la récupération de la version',
          details: error.message,
        });
        return;
      }

      // Comparer major et minor : si égaux, pas de mise à jour forcée (patch ignoré)
      const [currentMajor, currentMinor] = currentVersion.split('.').map((v: string) => parseInt(v, 10) || 0);
      const [minMajor, minMinor] = data.min_version.split('.').map((v: string) => parseInt(v, 10) || 0);
      const forceUpdateIsActive = process.env.FORCE_UPDATE === 'true';
      const majorMinorMatch = currentMajor === minMajor && currentMinor === minMinor;
      const forceUpdate = forceUpdateIsActive && !majorMinorMatch;

      res.status(200).json({
        min_version: data.min_version,
        forceUpdate,
      });
    } catch (error) {
      console.error('❌ Erreur inattendue:', error);
      res.status(500).json({
        error: 'Erreur serveur lors de la récupération de la version',
      });
    }
  }

}

