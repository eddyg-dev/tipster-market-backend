import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { countryCodes } from "../shared-data/constants/country-codes.constant";
import { sportGroupIcons } from "../shared-data/constants/sport-group-icons.constant";
import { SportGroupKey } from "../shared-data/enums/sport-group.key.enum";
import { SportResponse } from "../shared-data/models/odds-api-response/sport-response.model";

export class SportController {
  static async getAllSports(req: Request, res: Response) {
    try {
      const { data: sports, error: sportsError } = await supabase
        .from("sports")
        .select("*");
      if (sportsError) throw sportsError;
      const sportsDict = (sports as SportResponse[]).reduce((acc, sport) => {
        const flag = countryCodes.find((country) =>
          sport.key.includes(country.name)
        );
        acc[sport.key] = {
          ...sport,
          groupIcon: sportGroupIcons[sport.group as SportGroupKey],
          countryCode: flag?.code,
        };
        return acc;
      }, {} as Record<string, SportResponse>);

      res.json(sportsDict);
    } catch (error) {
      console.error("Erreur lors de la récupération des sports:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
