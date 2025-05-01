import { MarketResponse } from "./market-response.model";

export interface BookmakerResponse {
  key: string;
  title: string;
  last_update: string;
  markets: MarketResponse[];
}
