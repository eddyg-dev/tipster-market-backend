import { OutcomeResult } from "../enums/outcome-result.enum";
import { OutcomeType } from "../enums/outcome-type.enum";
import { MatchDetails } from "./tip.model";

export interface Outcome {
  name: string;
  price: number;
  type: OutcomeType;
  point?: number;
  last_update?: string;
  selected?: boolean;
  match?: MatchDetails;
  result: OutcomeResult;
}
