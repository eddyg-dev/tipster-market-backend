import { OutcomeResponse } from "./outcome-response.model";

export interface MarketResponse {
  key: string;
  last_update: string;
  outcomes: OutcomeResponse[];
}
