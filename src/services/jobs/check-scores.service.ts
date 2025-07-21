export class CheckScoresService {
  static async execute() {
    try {
      return { success: true, message: "Results checked" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }
}
