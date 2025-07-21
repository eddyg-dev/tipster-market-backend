import { SportResponse } from "../data/models/sport-response.model";

const validSports = [
  "Soccer",
  "Basketball",
  "Tennis",
  "Rugby League",
  // "American Football",
  // "Ice Hockey",
  // "Golf",
  // "Cricket",
  // "Baseball",
  // "Boxing",
];

export class SportUtils {
  static filterValidSports(sportsResponse: SportResponse[]) {
    return sportsResponse.filter((sport) => validSports.includes(sport.group));
  }
}
