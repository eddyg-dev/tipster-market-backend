import { Request, Response } from "express";
import { supabase } from "../config/supabase";

export class ProfileController {
  static async getProfiles(req: Request, res: Response): Promise<void> {
    const { data, error } = await supabase.from("profiles").select("*");
    res.status(200).json(data);
  }

  static async getProfileById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(data);
    }
  }

  static async saveProfileIntroduction(
    req: Request,
    res: Response
  ): Promise<void> {
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);

    if (
      !req.body ||
      !req.body.username ||
      !req.body.birthDate ||
      !req.body.profileType ||
      !req.body.acceptTerms
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const { username, birthDate, profileType, acceptTerms } = req.body;

    const { data, error } = await supabase.from("profiles").upsert({
      id: req.params.id,
      username: username,
      birth_date: birthDate,
      profile_type: profileType,
      accept_terms: acceptTerms,
      profile_introduction_completed: true,
    });

    if (error) {
      console.error("Erreur Supabase:", error);

      res.status(200).json(data);
    }
  }
}
