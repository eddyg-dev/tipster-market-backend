import { supabase } from "../config/supabase";

export class ValidationService {
  /**
   * Vérifie qu'un utilisateur existe et est du bon type
   */
  static async validateUserByType(
    userId: string,
    expectedType: "user" | "tipster"
  ): Promise<{ isValid: boolean; user?: any; error?: string }> {
    try {
      const { data: user, error } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", userId)
        .eq("profile_type", expectedType)
        .single();

      if (error || !user) {
        return {
          isValid: false,
          error: `${
            expectedType === "user" ? "Utilisateur" : "Tipster"
          } invalide`,
        };
      }

      return { isValid: true, user };
    } catch (error) {
      return {
        isValid: false,
        error: "Erreur lors de la validation",
      };
    }
  }

  /**
   * Vérifie qu'un tipster existe
   */
  static async validateTipster(
    tipsterId: string
  ): Promise<{ isValid: boolean; tipster?: any; error?: string }> {
    const result = await this.validateUserByType(tipsterId, "tipster");
    return {
      isValid: result.isValid,
      tipster: result.user,
      error: result.error,
    };
  }

  /**
   * Vérifie qu'un utilisateur existe
   */
  static async validateUser(
    userId: string
  ): Promise<{ isValid: boolean; user?: any; error?: string }> {
    return this.validateUserByType(userId, "user");
  }

  /**
   * Vérifie qu'un tip existe et est disponible
   */
  static async validateTip(
    tipId: string
  ): Promise<{ isValid: boolean; tip?: any; error?: string }> {
    try {
      const { data: tip, error } = await supabase
        .from("tips")
        .select("*")
        .eq("id", tipId)
        .single();

      if (error || !tip) {
        return {
          isValid: false,
          error: "Tip non trouvé",
        };
      }

      if (tip.status !== "on_sale") {
        return {
          isValid: false,
          error: "Ce tip n'est plus disponible à l'achat",
        };
      }

      return { isValid: true, tip };
    } catch (error) {
      return {
        isValid: false,
        error: "Erreur lors de la validation du tip",
      };
    }
  }
}
