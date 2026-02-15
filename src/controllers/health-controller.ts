import { Request, Response } from 'express';

export class HealthController {
  /**
   * Endpoint de health check pour garder le serveur actif
   * Utilisé par UptimeRobot ou autres services de monitoring
   */
  static healthCheck(req: Request, res: Response): void {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }
}
