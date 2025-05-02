import { MatchResponse } from "../../models/match-response.model";

export const englishMatchesMock: MatchResponse[] = [
  {
    id: "51c1058cdc8d99919dcdf8f09c78277d",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-03T11:30:00Z",
    home_team: "Aston Villa",
    away_team: "Fulham",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.8 },
              { name: "Fulham", price: 4.37 },
              { name: "Draw", price: 3.98 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.04, point: -0.75 },
              { name: "Fulham", price: 1.87, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.75 },
              { name: "Under", price: 1.97, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.82 },
              { name: "Fulham", price: 4.47 },
              { name: "Draw", price: 3.94 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 3.0, point: -1.5 },
              { name: "Fulham", price: 1.36, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.76, point: 2.5 },
              { name: "Under", price: 2.19, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.79 },
              { name: "Fulham", price: 4.4 },
              { name: "Draw", price: 3.88 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Aston Villa", price: 1.76 },
              { name: "Fulham", price: 4.3 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Aston Villa", price: 1.78 },
              { name: "Fulham", price: 4.3 },
              { name: "Draw", price: 3.95 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.76 },
              { name: "Fulham", price: 4.2 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.75, point: -0.5 },
              { name: "Fulham", price: 2.01, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.69, point: 2.5 },
              { name: "Under", price: 2.08, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.72 },
              { name: "Fulham", price: 4.5 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 1.81 },
              { name: "Fulham", price: 4.9 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 1.82 },
              { name: "Fulham", price: 5.0 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.8 },
              { name: "Fulham", price: 4.33 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.75 },
              { name: "Fulham", price: 4.2 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.73, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 1.75 },
              { name: "Fulham", price: 4.3 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.71, point: 2.5 },
              { name: "Under", price: 2.16, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.18, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 1.81 },
              { name: "Fulham", price: 4.75 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.12, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.81 },
              { name: "Fulham", price: 4.9 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.83 },
              { name: "Fulham", price: 5.0 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.04, point: -0.75 },
              { name: "Fulham", price: 1.94, point: 0.75 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-02T22:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:29Z",
            outcomes: [
              { name: "Aston Villa", price: 1.75 },
              { name: "Fulham", price: 4.3 },
              { name: "Draw", price: 3.88 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.82 },
              { name: "Fulham", price: 4.31 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.04, point: -0.75 },
              { name: "Fulham", price: 1.83, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.75 },
              { name: "Under", price: 1.92, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.76 },
              { name: "Fulham", price: 4.35 },
              { name: "Draw", price: 3.87 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.73, point: -0.5 },
              { name: "Fulham", price: 2.08, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.09, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Aston Villa", price: 1.8 },
              { name: "Fulham", price: 4.2 },
              { name: "Draw", price: 3.85 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.8 },
              { name: "Fulham", price: 4.6 },
              { name: "Draw", price: 4.05 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.18, point: 3.0 },
              { name: "Under", price: 1.74, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 1.73 },
              { name: "Fulham", price: 4.4 },
              { name: "Draw", price: 3.95 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "73184881751279df90b757cd1a2d8b6a",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-03T14:00:00Z",
    home_team: "Everton",
    away_team: "Ipswich Town",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.52 },
              { name: "Ipswich Town", price: 6.65 },
              { name: "Draw", price: 4.35 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.88, point: -1.0 },
              { name: "Ipswich Town", price: 2.02, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 2.5 },
              { name: "Under", price: 1.94, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.53 },
              { name: "Ipswich Town", price: 7.08 },
              { name: "Draw", price: 4.33 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 2.53, point: -1.5 },
              { name: "Ipswich Town", price: 1.58, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.5 },
              { name: "Ipswich Town", price: 6.95 },
              { name: "Draw", price: 4.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Everton", price: 1.47 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Everton", price: 1.48 },
              { name: "Ipswich Town", price: 6.75 },
              { name: "Draw", price: 4.5 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.49 },
              { name: "Ipswich Town", price: 6.3 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 2.35, point: -1.5 },
              { name: "Ipswich Town", price: 1.55, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 2.5 },
              { name: "Under", price: 1.88, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.47 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.9, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 1.55 },
              { name: "Ipswich Town", price: 7.6 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 1.56 },
              { name: "Ipswich Town", price: 7.8 },
              { name: "Draw", price: 4.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.5 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.44 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 1.51 },
              { name: "Ipswich Town", price: 7.0 },
              { name: "Draw", price: 4.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 1.49 },
              { name: "Ipswich Town", price: 6.7 },
              { name: "Draw", price: 4.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.55 },
              { name: "Ipswich Town", price: 7.6 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.56 },
              { name: "Ipswich Town", price: 7.8 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.94, point: -1.0 },
              { name: "Ipswich Town", price: 2.02, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.52 },
              { name: "Ipswich Town", price: 6.7 },
              { name: "Draw", price: 4.38 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.86, point: -1.0 },
              { name: "Ipswich Town", price: 2.0, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.94, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.47 },
              { name: "Ipswich Town", price: 6.74 },
              { name: "Draw", price: 4.37 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 2.39, point: -1.5 },
              { name: "Ipswich Town", price: 1.57, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 2.5 },
              { name: "Under", price: 1.92, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Everton", price: 1.5 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.33 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-02T22:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:29Z",
            outcomes: [
              { name: "Everton", price: 1.48 },
              { name: "Ipswich Town", price: 6.5 },
              { name: "Draw", price: 4.3 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.52 },
              { name: "Ipswich Town", price: 7.15 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 1.46 },
              { name: "Ipswich Town", price: 6.7 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c479bdd7218f2700d37cb67520c294b3",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-03T14:00:00Z",
    home_team: "Leicester City",
    away_team: "Southampton",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.4 },
              { name: "Southampton", price: 2.89 },
              { name: "Draw", price: 3.71 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.1, point: -0.25 },
              { name: "Southampton", price: 1.83, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 2.75 },
              { name: "Under", price: 1.94, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.38 },
              { name: "Southampton", price: 2.96 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 1.76, point: 0.0 },
              { name: "Southampton", price: 2.18, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.76, point: 2.5 },
              { name: "Under", price: 2.19, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Leicester City", price: 2.35 },
              { name: "Southampton", price: 2.8 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Leicester City", price: 2.4 },
              { name: "Southampton", price: 2.85 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.35 },
              { name: "Southampton", price: 2.78 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.3, point: -0.5 },
              { name: "Southampton", price: 1.57, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.71, point: 2.5 },
              { name: "Under", price: 2.06, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.3 },
              { name: "Southampton", price: 2.95 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 2.5 },
              { name: "Under", price: 2.1, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.33 },
              { name: "Southampton", price: 2.9 },
              { name: "Draw", price: 3.68 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 2.44 },
              { name: "Southampton", price: 3.05 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 2.48 },
              { name: "Southampton", price: 3.1 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.3 },
              { name: "Southampton", price: 2.9 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.3 },
              { name: "Southampton", price: 2.9 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.73, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 2.4 },
              { name: "Southampton", price: 2.82 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.73, point: 2.5 },
              { name: "Under", price: 2.13, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.74, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 2.5 },
              { name: "Southampton", price: 2.9 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.77, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.44 },
              { name: "Southampton", price: 3.05 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.48 },
              { name: "Southampton", price: 3.1 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.12, point: -0.25 },
              { name: "Southampton", price: 1.87, point: 0.25 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.36 },
              { name: "Southampton", price: 2.95 },
              { name: "Draw", price: 3.68 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 2.04, point: -0.25 },
              { name: "Southampton", price: 1.83, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 2.75 },
              { name: "Under", price: 1.9, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.34 },
              { name: "Southampton", price: 2.89 },
              { name: "Draw", price: 3.64 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.3, point: -0.5 },
              { name: "Southampton", price: 1.6, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Leicester City", price: 2.35 },
              { name: "Southampton", price: 2.85 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.4 },
              { name: "Southampton", price: 3.0 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.16, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-02T22:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:29Z",
            outcomes: [
              { name: "Leicester City", price: 2.34 },
              { name: "Southampton", price: 2.84 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 2.3 },
              { name: "Southampton", price: 2.85 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4caea89abebb6b3a875348ba5f086836",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-03T16:30:00Z",
    home_team: "Arsenal",
    away_team: "Bournemouth",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.12 },
              { name: "Bournemouth", price: 3.53 },
              { name: "Draw", price: 3.58 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 1.85, point: -0.25 },
              { name: "Bournemouth", price: 2.07, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.5 },
              { name: "Under", price: 1.98, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.15 },
              { name: "Bournemouth", price: 3.52 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 1.53, point: 0.0 },
              { name: "Bournemouth", price: 2.51, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.99, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.35 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.4 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.28 },
              { name: "Draw", price: 3.48 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.06, point: -0.5 },
              { name: "Bournemouth", price: 1.71, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.05 },
              { name: "Bournemouth", price: 3.4 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.11 },
              { name: "Bournemouth", price: 3.46 },
              { name: "Draw", price: 3.54 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 2.18 },
              { name: "Bournemouth", price: 3.6 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 2.2 },
              { name: "Bournemouth", price: 3.65 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.5 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.05 },
              { name: "Bournemouth", price: 3.4 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.4 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 1.94, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 2.18 },
              { name: "Bournemouth", price: 3.55 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.18 },
              { name: "Bournemouth", price: 3.6 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.2 },
              { name: "Bournemouth", price: 3.65 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 1.9, point: -0.25 },
              { name: "Bournemouth", price: 2.1, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.5 },
              { name: "Under", price: 2.08, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.13 },
              { name: "Bournemouth", price: 3.36 },
              { name: "Draw", price: 3.62 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.05, point: -0.5 },
              { name: "Bournemouth", price: 1.75, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.82, point: 2.5 },
              { name: "Under", price: 1.96, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Arsenal", price: 2.1 },
              { name: "Bournemouth", price: 3.45 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.13 },
              { name: "Bournemouth", price: 3.5 },
              { name: "Draw", price: 3.57 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 1.83, point: -0.25 },
              { name: "Bournemouth", price: 2.04, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 2.04, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.14 },
              { name: "Bournemouth", price: 3.6 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 1.98, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 2.05 },
              { name: "Bournemouth", price: 3.45 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-02T22:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:29Z",
            outcomes: [
              { name: "Arsenal", price: 2.07 },
              { name: "Bournemouth", price: 3.4 },
              { name: "Draw", price: 3.53 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "f8ea618c6761b037b4b06637e6d1c557",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-04T13:00:00Z",
    home_team: "Brentford",
    away_team: "Manchester United",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.71 },
              { name: "Manchester United", price: 4.63 },
              { name: "Draw", price: 4.21 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.92, point: -0.75 },
              { name: "Manchester United", price: 1.99, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.75 },
              { name: "Under", price: 1.96, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.72 },
              { name: "Manchester United", price: 4.88 },
              { name: "Draw", price: 4.17 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 2.74, point: -1.5 },
              { name: "Manchester United", price: 1.42, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.21, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Brentford", price: 1.68 },
              { name: "Manchester United", price: 4.6 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Brentford", price: 1.68 },
              { name: "Manchester United", price: 4.6 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.67 },
              { name: "Manchester United", price: 4.5 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.66, point: -0.5 },
              { name: "Manchester United", price: 2.14, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.13, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.7 },
              { name: "Manchester United", price: 4.4 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.69 },
              { name: "Manchester United", price: 4.8 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.74 },
              { name: "Manchester United", price: 4.9 },
              { name: "Draw", price: 4.3 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.75 },
              { name: "Manchester United", price: 5.0 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.68 },
              { name: "Manchester United", price: 4.7 },
              { name: "Draw", price: 4.05 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.71, point: 2.5 },
              { name: "Under", price: 2.16, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.72 },
              { name: "Manchester United", price: 4.8 },
              { name: "Draw", price: 4.15 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.18, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.74 },
              { name: "Manchester United", price: 4.75 },
              { name: "Draw", price: 4.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.68, point: 2.5 },
              { name: "Under", price: 2.18, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.7 },
              { name: "Manchester United", price: 4.8 },
              { name: "Draw", price: 4.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.67 },
              { name: "Manchester United", price: 4.6 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.1, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Brentford", price: 1.7 },
              { name: "Manchester United", price: 4.6 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.74 },
              { name: "Manchester United", price: 4.9 },
              { name: "Draw", price: 4.3 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.75 },
              { name: "Manchester United", price: 5.0 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.94, point: -0.75 },
              { name: "Manchester United", price: 2.04, point: 0.75 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.74 },
              { name: "Manchester United", price: 4.72 },
              { name: "Draw", price: 4.27 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.15, point: 3.0 },
              { name: "Under", price: 1.75, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.69 },
              { name: "Manchester United", price: 4.7 },
              { name: "Draw", price: 4.05 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.65, point: -0.5 },
              { name: "Manchester United", price: 2.2, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.66, point: 2.5 },
              { name: "Under", price: 2.13, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.64 },
              { name: "Manchester United", price: 4.65 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "betanysports",
        title: "BetAnySports",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.69 },
              { name: "Manchester United", price: 4.6 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.87, point: -0.75 },
              { name: "Manchester United", price: 1.95, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 2.75 },
              { name: "Under", price: 1.95, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.71 },
              { name: "Manchester United", price: 4.79 },
              { name: "Draw", price: 4.15 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.89, point: -0.75 },
              { name: "Manchester United", price: 1.96, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.75 },
              { name: "Under", price: 1.92, point: 2.75 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "daa5fa1e33b5d9b82410ce824dc2fe93",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-04T13:00:00Z",
    home_team: "Brighton and Hove Albion",
    away_team: "Newcastle United",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.79 },
              { name: "Newcastle United", price: 2.42 },
              { name: "Draw", price: 3.83 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.1, point: 0.0 },
              { name: "Newcastle United", price: 1.82, point: -0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 3.0 },
              { name: "Under", price: 2.03, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.81 },
              { name: "Newcastle United", price: 2.38 },
              { name: "Draw", price: 3.99 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.12, point: 0.0 },
              { name: "Newcastle United", price: 1.8, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.35, point: 3.5 },
              { name: "Under", price: 1.67, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.3 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.3 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.76 },
              { name: "Newcastle United", price: 2.29 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 1.6, point: 0.5 },
              { name: "Newcastle United", price: 2.25, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.28, point: 3.5 },
              { name: "Under", price: 1.58, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.35 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.15, point: 3.5 },
              { name: "Under", price: 1.65, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.76 },
              { name: "Newcastle United", price: 2.34 },
              { name: "Draw", price: 3.92 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.9 },
              { name: "Newcastle United", price: 2.48 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.96 },
              { name: "Newcastle United", price: 2.52 },
              { name: "Draw", price: 3.95 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.75 },
              { name: "Newcastle United", price: 2.35 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.4 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.54, point: 2.5 },
              { name: "Under", price: 2.55, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.95 },
              { name: "Newcastle United", price: 2.35 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.43, point: 3.5 },
              { name: "Under", price: 1.56, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.3 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.75 },
              { name: "Newcastle United", price: 2.3 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.53, point: 2.5 },
              { name: "Under", price: 2.4, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.78 },
              { name: "Newcastle United", price: 2.42 },
              { name: "Draw", price: 3.82 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.08, point: 0.0 },
              { name: "Newcastle United", price: 1.81, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 3.0 },
              { name: "Under", price: 2.02, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.75 },
              { name: "Newcastle United", price: 2.35 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.9 },
              { name: "Newcastle United", price: 2.48 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.94 },
              { name: "Newcastle United", price: 2.5 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.14, point: 0.0 },
              { name: "Newcastle United", price: 1.84, point: 0.0 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.88 },
              { name: "Newcastle United", price: 2.42 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 3.0 },
              { name: "Under", price: 2.01, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.84 },
              { name: "Newcastle United", price: 2.33 },
              { name: "Draw", price: 3.73 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 1.62, point: 0.5 },
              { name: "Newcastle United", price: 2.25, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.35, point: 3.5 },
              { name: "Under", price: 1.58, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.8 },
              { name: "Newcastle United", price: 2.25 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "betanysports",
        title: "BetAnySports",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.78 },
              { name: "Newcastle United", price: 2.42 },
              { name: "Draw", price: 3.82 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.04, point: 0.0 },
              { name: "Newcastle United", price: 1.81, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 3.0 },
              { name: "Under", price: 1.98, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-02T22:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:29Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.77 },
              { name: "Newcastle United", price: 2.27 },
              { name: "Draw", price: 3.72 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "7de89041c933018bda0fe636fe2ad7e7",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-04T13:00:00Z",
    home_team: "West Ham United",
    away_team: "Tottenham Hotspur",
    bookmakers: [
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.3 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.24 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 1.74, point: 0.5 },
              { name: "West Ham United", price: 2.02, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.32, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.3 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.4 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.6 },
              { name: "West Ham United", price: 2.14 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.65 },
              { name: "West Ham United", price: 2.18 },
              { name: "Draw", price: 3.95 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.4 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.3 },
              { name: "West Ham United", price: 2.1 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.25 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.53, point: 2.5 },
              { name: "Under", price: 2.4, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.45 },
              { name: "West Ham United", price: 2.12 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.4, point: 3.5 },
              { name: "Under", price: 1.56, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.46 },
              { name: "West Ham United", price: 2.09 },
              { name: "Draw", price: 3.87 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 2.51, point: 0.0 },
              { name: "West Ham United", price: 1.53, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.46, point: 3.5 },
              { name: "Under", price: 1.61, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.4 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.6 },
              { name: "West Ham United", price: 2.14 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.65 },
              { name: "West Ham United", price: 2.16 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 2.12, point: 0.25 },
              { name: "West Ham United", price: 1.87, point: -0.25 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.47 },
              { name: "West Ham United", price: 2.1 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.97, point: 3.0 },
              { name: "Under", price: 1.9, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.45 },
              { name: "West Ham United", price: 2.09 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 1.8, point: 0.5 },
              { name: "West Ham United", price: 2.09, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 3.0 },
              { name: "Under", price: 1.91, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.36 },
              { name: "West Ham United", price: 2.08 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 1.75, point: 0.5 },
              { name: "West Ham United", price: 2.01, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.32, point: 3.5 },
              { name: "Under", price: 1.59, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.4 },
              { name: "West Ham United", price: 2.05 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.5 },
              { name: "West Ham United", price: 2.08 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 1.83, point: 0.5 },
              { name: "West Ham United", price: 2.09, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.97, point: 3.0 },
              { name: "Under", price: 1.92, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.25 },
              { name: "West Ham United", price: 2.1 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.59, point: 2.5 },
              { name: "Under", price: 2.39, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betanysports",
        title: "BetAnySports",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 3.45 },
              { name: "West Ham United", price: 2.09 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Tottenham Hotspur", price: 1.8, point: 0.5 },
              { name: "West Ham United", price: 2.05, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 3.0 },
              { name: "Under", price: 1.91, point: 3.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ec70abc1b197ccf08912f374f2dcaa83",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-04T15:30:00Z",
    home_team: "Chelsea",
    away_team: "Liverpool",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.36 },
              { name: "Draw", price: 3.82 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 1.85, point: -0.25 },
              { name: "Liverpool", price: 2.07, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 3.0 },
              { name: "Under", price: 2.02, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.14 },
              { name: "Liverpool", price: 3.38 },
              { name: "Draw", price: 3.81 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 1.56, point: 0.0 },
              { name: "Liverpool", price: 2.43, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.37, point: 3.5 },
              { name: "Under", price: 1.66, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Chelsea", price: 2.05 },
              { name: "Liverpool", price: 3.3 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.3 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.12 },
              { name: "Liverpool", price: 3.08 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.09, point: -0.5 },
              { name: "Liverpool", price: 1.69, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.32, point: 3.5 },
              { name: "Under", price: 1.56, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.2 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.2, point: 3.5 },
              { name: "Under", price: 1.6, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.18 },
              { name: "Liverpool", price: 3.35 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.2 },
              { name: "Liverpool", price: 3.45 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.32 },
              { name: "Draw", price: 3.74 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.08 },
              { name: "Liverpool", price: 3.2 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.34, point: 3.5 },
              { name: "Under", price: 1.61, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.12 },
              { name: "Liverpool", price: 3.3 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.55, point: 2.5 },
              { name: "Under", price: 2.53, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.23 },
              { name: "Liverpool", price: 3.25 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.56, point: 2.5 },
              { name: "Under", price: 2.4, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.15 },
              { name: "Liverpool", price: 3.2 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.1 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.55, point: 2.5 },
              { name: "Under", price: 2.38, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Chelsea", price: 2.1 },
              { name: "Liverpool", price: 3.3 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.18 },
              { name: "Liverpool", price: 3.35 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.2 },
              { name: "Liverpool", price: 3.45 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 1.9, point: -0.25 },
              { name: "Liverpool", price: 2.08, point: 0.25 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.15 },
              { name: "Liverpool", price: 3.31 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 3.0 },
              { name: "Under", price: 1.99, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.15 },
              { name: "Liverpool", price: 3.32 },
              { name: "Draw", price: 3.72 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 1.86, point: -0.25 },
              { name: "Liverpool", price: 2.0, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 3.0 },
              { name: "Under", price: 1.98, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.13 },
              { name: "Liverpool", price: 3.19 },
              { name: "Draw", price: 3.71 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.08, point: -0.5 },
              { name: "Liverpool", price: 1.75, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.37, point: 3.5 },
              { name: "Under", price: 1.57, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 2.05 },
              { name: "Liverpool", price: 3.15 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "betanysports",
        title: "BetAnySports",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 2.15 },
              { name: "Liverpool", price: 3.32 },
              { name: "Draw", price: 3.72 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 1.86, point: -0.25 },
              { name: "Liverpool", price: 1.96, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 3.0 },
              { name: "Under", price: 1.94, point: 3.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c1ae8aa325f8d290000c18db5e158f94",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-05T19:00:00Z",
    home_team: "Crystal Palace",
    away_team: "Nottingham Forest",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.25 },
              { name: "Nottingham Forest", price: 3.34 },
              { name: "Draw", price: 3.46 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.94, point: -0.25 },
              { name: "Nottingham Forest", price: 1.96, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.88, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.3 },
              { name: "Nottingham Forest", price: 3.35 },
              { name: "Draw", price: 3.42 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.66, point: 0.0 },
              { name: "Nottingham Forest", price: 2.37, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.9, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.25 },
              { name: "Nottingham Forest", price: 3.15 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.25 },
              { name: "Nottingham Forest", price: 3.2 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.26 },
              { name: "Nottingham Forest", price: 3.06 },
              { name: "Draw", price: 3.32 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.22, point: -0.5 },
              { name: "Nottingham Forest", price: 1.62, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.5 },
              { name: "Under", price: 1.81, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.2 },
              { name: "Nottingham Forest", price: 3.3 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.32 },
              { name: "Nottingham Forest", price: 3.45 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.36 },
              { name: "Nottingham Forest", price: 3.55 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.26 },
              { name: "Nottingham Forest", price: 3.28 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.33 },
              { name: "Nottingham Forest", price: 3.25 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.25 },
              { name: "Nottingham Forest", price: 3.2 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.83, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.28 },
              { name: "Nottingham Forest", price: 3.25 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.01, point: 2.5 },
              { name: "Under", price: 1.84, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.3 },
              { name: "Nottingham Forest", price: 3.1 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.3 },
              { name: "Nottingham Forest", price: 3.1 },
              { name: "Draw", price: 3.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 2.5 },
              { name: "Under", price: 1.8, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-02T22:20:01Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:20:01Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.2 },
              { name: "Nottingham Forest", price: 3.2 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.27 },
              { name: "Nottingham Forest", price: 3.45 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.87, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.15 },
              { name: "Nottingham Forest", price: 3.1 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.34 },
              { name: "Nottingham Forest", price: 3.45 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.36 },
              { name: "Nottingham Forest", price: 3.55 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.98, point: -0.25 },
              { name: "Nottingham Forest", price: 1.99, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.06, point: 2.5 },
              { name: "Under", price: 1.9, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.28 },
              { name: "Nottingham Forest", price: 3.16 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.15, point: -0.5 },
              { name: "Nottingham Forest", price: 1.68, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.86, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betanysports",
        title: "BetAnySports",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.3 },
              { name: "Nottingham Forest", price: 3.1 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.98, point: -0.25 },
              { name: "Nottingham Forest", price: 1.85, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.25 },
              { name: "Nottingham Forest", price: 3.33 },
              { name: "Draw", price: 3.44 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.92, point: -0.25 },
              { name: "Nottingham Forest", price: 1.93, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 2.5 },
              { name: "Under", price: 1.88, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "264af78b353e7cce50399cc5bd50e2a0",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-10T14:00:00Z",
    home_team: "Ipswich Town",
    away_team: "Brentford",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.68 },
              { name: "Ipswich Town", price: 4.54 },
              { name: "Draw", price: 4.16 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.88, point: -0.75 },
              { name: "Ipswich Town", price: 1.98, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 3.0 },
              { name: "Under", price: 1.97, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Brentford", price: 1.72 },
              { name: "Ipswich Town", price: 4.3 },
              { name: "Draw", price: 4.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Brentford", price: 1.7 },
              { name: "Ipswich Town", price: 4.1 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.7 },
              { name: "Ipswich Town", price: 4.2 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.68, point: -0.5 },
              { name: "Ipswich Town", price: 2.05, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.54, point: 2.5 },
              { name: "Under", price: 2.32, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.76 },
              { name: "Ipswich Town", price: 4.48 },
              { name: "Draw", price: 4.28 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 2.86, point: -1.5 },
              { name: "Ipswich Town", price: 1.39, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.61, point: 2.5 },
              { name: "Under", price: 2.46, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.73 },
              { name: "Ipswich Town", price: 4.4 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.67 },
              { name: "Ipswich Town", price: 4.6 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.52, point: 2.5 },
              { name: "Under", price: 2.45, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.74 },
              { name: "Ipswich Town", price: 4.1 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.91 },
              { name: "Ipswich Town", price: 5.5 },
              { name: "Draw", price: 4.8 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brentford", price: 1.75 },
              { name: "Ipswich Town", price: 4.2 },
              { name: "Draw", price: 4.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.75 },
              { name: "Ipswich Town", price: 4.0 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.55, point: 2.5 },
              { name: "Under", price: 2.38, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brentford", price: 1.66 },
              { name: "Ipswich Town", price: 4.05 },
              { name: "Draw", price: 3.85 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.68 },
              { name: "Ipswich Town", price: 4.45 },
              { name: "Draw", price: 4.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.39, point: 3.5 },
              { name: "Under", price: 1.59, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brentford", price: 1.79 },
              { name: "Ipswich Town", price: 4.35 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.56, point: 2.5 },
              { name: "Under", price: 2.43, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "99168b814177360ff8e6b01bb53a70de",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-10T14:00:00Z",
    home_team: "Wolverhampton Wanderers",
    away_team: "Brighton and Hove Albion",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.56 },
              { name: "Wolverhampton Wanderers", price: 2.68 },
              { name: "Draw", price: 3.49 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 1.88, point: -0.0 },
              { name: "Wolverhampton Wanderers", price: 1.97, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.75 },
              { name: "Under", price: 1.93, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.55 },
              { name: "Wolverhampton Wanderers", price: 2.6 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.5 },
              { name: "Wolverhampton Wanderers", price: 2.55 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.51 },
              { name: "Wolverhampton Wanderers", price: 2.56 },
              { name: "Draw", price: 3.42 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.44, point: -0.5 },
              { name: "Wolverhampton Wanderers", price: 1.49, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.68, point: 2.5 },
              { name: "Under", price: 2.06, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.66 },
              { name: "Wolverhampton Wanderers", price: 2.68 },
              { name: "Draw", price: 3.61 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 1.95, point: 0.0 },
              { name: "Wolverhampton Wanderers", price: 1.96, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.79, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.61 },
              { name: "Wolverhampton Wanderers", price: 2.63 },
              { name: "Draw", price: 3.54 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.64 },
              { name: "Wolverhampton Wanderers", price: 2.56 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.98 },
              { name: "Wolverhampton Wanderers", price: 2.82 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.5 },
              { name: "Wolverhampton Wanderers", price: 2.65 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.62 },
              { name: "Wolverhampton Wanderers", price: 2.62 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.6 },
              { name: "Wolverhampton Wanderers", price: 2.6 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.45 },
              { name: "Wolverhampton Wanderers", price: 2.5 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.55 },
              { name: "Wolverhampton Wanderers", price: 2.65 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.74, point: 2.5 },
              { name: "Under", price: 2.12, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Brighton and Hove Albion", price: 2.75 },
              { name: "Wolverhampton Wanderers", price: 2.6 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 2.5 },
              { name: "Under", price: 2.17, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d4a9243037a95f52971aee9e2b1056de",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-10T14:00:00Z",
    home_team: "Fulham",
    away_team: "Everton",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 4.13 },
              { name: "Fulham", price: 1.91 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.93, point: 0.5 },
              { name: "Fulham", price: 1.92, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.25 },
              { name: "Under", price: 2.01, point: 2.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Everton", price: 4.1 },
              { name: "Fulham", price: 1.9 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Everton", price: 4.0 },
              { name: "Fulham", price: 1.84 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 4.0 },
              { name: "Fulham", price: 1.86 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 1.87, point: 0.5 },
              { name: "Fulham", price: 1.83, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.02, point: 2.5 },
              { name: "Under", price: 1.71, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 4.23 },
              { name: "Fulham", price: 1.95 },
              { name: "Draw", price: 3.63 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 2.9, point: 0.0 },
              { name: "Fulham", price: 1.37, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.16, point: 2.5 },
              { name: "Under", price: 1.78, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 4.15 },
              { name: "Fulham", price: 1.91 },
              { name: "Draw", price: 3.56 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 4.2 },
              { name: "Fulham", price: 1.87 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.05, point: 2.5 },
              { name: "Under", price: 1.75, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 4.5 },
              { name: "Fulham", price: 1.93 },
              { name: "Draw", price: 3.25 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 5.1 },
              { name: "Fulham", price: 2.14 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Everton", price: 4.0 },
              { name: "Fulham", price: 1.91 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 4.0 },
              { name: "Fulham", price: 1.85 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.75, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Everton", price: 3.9 },
              { name: "Fulham", price: 1.81 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 4.1 },
              { name: "Fulham", price: 1.9 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.09, point: 2.5 },
              { name: "Under", price: 1.76, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Everton", price: 4.5 },
              { name: "Fulham", price: 1.88 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.1, point: 2.5 },
              { name: "Under", price: 1.74, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "55e37afab87c94d66ff8b3aa91b5fe9e",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-10T14:00:00Z",
    home_team: "Southampton",
    away_team: "Manchester City",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.24 },
              { name: "Southampton", price: 9.78 },
              { name: "Draw", price: 6.37 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.88, point: -1.75 },
              { name: "Southampton", price: 1.95, point: 1.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 3.5 },
              { name: "Under", price: 1.84, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Manchester City", price: 1.25 },
              { name: "Southampton", price: 9.5 },
              { name: "Draw", price: 6.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Manchester City", price: 1.23 },
              { name: "Southampton", price: 9.0 },
              { name: "Draw", price: 6.0 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.24 },
              { name: "Southampton", price: 9.2 },
              { name: "Draw", price: 6.1 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.66, point: -1.5 },
              { name: "Southampton", price: 2.1, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 3.5 },
              { name: "Under", price: 1.78, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.28 },
              { name: "Southampton", price: 10.7 },
              { name: "Draw", price: 6.52 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.78, point: -1.5 },
              { name: "Southampton", price: 2.15, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.05, point: 3.5 },
              { name: "Under", price: 1.86, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester City", price: 1.26 },
              { name: "Southampton", price: 10.5 },
              { name: "Draw", price: 6.4 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester City", price: 1.22 },
              { name: "Southampton", price: 10.5 },
              { name: "Draw", price: 6.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 3.5 },
              { name: "Under", price: 1.87, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester City", price: 1.27 },
              { name: "Southampton", price: 11.5 },
              { name: "Draw", price: 7.2 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester City", price: 1.28 },
              { name: "Southampton", price: 13.0 },
              { name: "Draw", price: 8.0 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester City", price: 1.25 },
              { name: "Southampton", price: 10.0 },
              { name: "Draw", price: 6.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester City", price: 1.25 },
              { name: "Southampton", price: 10.0 },
              { name: "Draw", price: 6.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.36, point: 2.5 },
              { name: "Under", price: 2.9, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester City", price: 1.22 },
              { name: "Southampton", price: 8.7 },
              { name: "Draw", price: 5.7 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester City", price: 1.24 },
              { name: "Southampton", price: 10.5 },
              { name: "Draw", price: 6.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.99, point: 3.5 },
              { name: "Under", price: 1.84, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester City", price: 1.25 },
              { name: "Southampton", price: 12.5 },
              { name: "Draw", price: 7.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 3.5 },
              { name: "Under", price: 1.88, point: 3.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "eef18321a5e04c73f81d06c60cd1cde7",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-10T16:30:00Z",
    home_team: "Bournemouth",
    away_team: "Aston Villa",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.65 },
              { name: "Bournemouth", price: 2.52 },
              { name: "Draw", price: 3.62 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.97, point: -0.0 },
              { name: "Bournemouth", price: 1.88, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.75 },
              { name: "Under", price: 1.93, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Aston Villa", price: 2.65 },
              { name: "Bournemouth", price: 2.5 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Aston Villa", price: 2.55 },
              { name: "Bournemouth", price: 2.45 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.59 },
              { name: "Bournemouth", price: 2.45 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 1.51, point: 0.5 },
              { name: "Bournemouth", price: 2.39, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.66, point: 2.5 },
              { name: "Under", price: 2.09, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.85 },
              { name: "Bournemouth", price: 2.5 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.08, point: 0.0 },
              { name: "Bournemouth", price: 1.83, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.21, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 2.79 },
              { name: "Bournemouth", price: 2.45 },
              { name: "Draw", price: 3.58 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 2.46 },
              { name: "Bournemouth", price: 2.46 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 2.92 },
              { name: "Bournemouth", price: 2.94 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 2.65 },
              { name: "Bournemouth", price: 2.5 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.15, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Aston Villa", price: 2.75 },
              { name: "Bournemouth", price: 2.45 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 2.7 },
              { name: "Bournemouth", price: 2.45 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.1, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Aston Villa", price: 2.55 },
              { name: "Bournemouth", price: 2.35 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 2.65 },
              { name: "Bournemouth", price: 2.48 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 2.5 },
              { name: "Under", price: 2.18, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Aston Villa", price: 2.7 },
              { name: "Bournemouth", price: 2.5 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.2, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "b244f8e3584ef0c027ec2d13b4e33aa0",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-11T11:00:00Z",
    home_team: "Newcastle United",
    away_team: "Chelsea",
    bookmakers: [
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Chelsea", price: 3.35 },
              { name: "Newcastle United", price: 2.0 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Chelsea", price: 3.25 },
              { name: "Newcastle United", price: 1.96 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 3.26 },
              { name: "Newcastle United", price: 1.97 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 1.77, point: 0.5 },
              { name: "Newcastle United", price: 1.94, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.14, point: 3.5 },
              { name: "Under", price: 1.63, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 3.16 },
              { name: "Newcastle United", price: 2.16 },
              { name: "Draw", price: 4.05 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 2.32, point: 0.0 },
              { name: "Newcastle United", price: 1.61, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.24, point: 3.5 },
              { name: "Under", price: 1.73, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 3.4 },
              { name: "Newcastle United", price: 2.01 },
              { name: "Draw", price: 3.83 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 1.84, point: 0.5 },
              { name: "Newcastle United", price: 2.02, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 3.25 },
              { name: "Under", price: 1.85, point: 3.25 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 3.1 },
              { name: "Newcastle United", price: 2.12 },
              { name: "Draw", price: 3.98 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 3.5 },
              { name: "Newcastle United", price: 1.95 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 2.1, point: 3.5 },
              { name: "Under", price: 1.67, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 3.35 },
              { name: "Newcastle United", price: 2.04 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 1000.0 },
              { name: "Newcastle United", price: 2.2 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Chelsea", price: 3.3 },
              { name: "Newcastle United", price: 2.05 },
              { name: "Draw", price: 3.8 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 3.25 },
              { name: "Newcastle United", price: 2.05 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.44, point: 2.5 },
              { name: "Under", price: 2.5, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Chelsea", price: 3.15 },
              { name: "Newcastle United", price: 1.91 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 3.25 },
              { name: "Newcastle United", price: 2.02 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 2.23, point: 3.5 },
              { name: "Under", price: 1.67, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Chelsea", price: 3.4 },
              { name: "Newcastle United", price: 2.07 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.45, point: 2.5 },
              { name: "Under", price: 2.75, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "916c3be683eeb058b9f2370f5880971b",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-11T13:15:00Z",
    home_team: "Tottenham Hotspur",
    away_team: "Crystal Palace",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.77 },
              { name: "Tottenham Hotspur", price: 2.43 },
              { name: "Draw", price: 3.62 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.07, point: -0.0 },
              { name: "Tottenham Hotspur", price: 1.81, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.99, point: 3.0 },
              { name: "Under", price: 1.85, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.75 },
              { name: "Tottenham Hotspur", price: 2.4 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.65 },
              { name: "Tottenham Hotspur", price: 2.3 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.69 },
              { name: "Tottenham Hotspur", price: 2.34 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 1.56, point: 0.5 },
              { name: "Tottenham Hotspur", price: 2.29, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.25, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.96 },
              { name: "Tottenham Hotspur", price: 2.39 },
              { name: "Draw", price: 3.71 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.17, point: 0.0 },
              { name: "Tottenham Hotspur", price: 1.77, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.65, point: 2.5 },
              { name: "Under", price: 2.39, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.9 },
              { name: "Tottenham Hotspur", price: 2.35 },
              { name: "Draw", price: 3.64 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.8 },
              { name: "Tottenham Hotspur", price: 2.35 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.68 },
              { name: "Tottenham Hotspur", price: 2.44 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 3.0 },
              { name: "Tottenham Hotspur", price: 2.62 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.8 },
              { name: "Tottenham Hotspur", price: 2.4 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.8 },
              { name: "Tottenham Hotspur", price: 2.38 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.25, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.65 },
              { name: "Tottenham Hotspur", price: 2.25 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.78 },
              { name: "Tottenham Hotspur", price: 2.38 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.61, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Crystal Palace", price: 2.9 },
              { name: "Tottenham Hotspur", price: 2.38 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fbfca9dc18e5d88daa5cdc93cc4bed52",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-11T13:15:00Z",
    home_team: "Nottingham Forest",
    away_team: "Leicester City",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 8.52 },
              { name: "Nottingham Forest", price: 1.32 },
              { name: "Draw", price: 5.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 1.89, point: 1.5 },
              { name: "Nottingham Forest", price: 1.96, point: -1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.75 },
              { name: "Under", price: 2.01, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Leicester City", price: 8.5 },
              { name: "Nottingham Forest", price: 1.33 },
              { name: "Draw", price: 5.3 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Leicester City", price: 8.0 },
              { name: "Nottingham Forest", price: 1.31 },
              { name: "Draw", price: 5.0 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 8.3 },
              { name: "Nottingham Forest", price: 1.31 },
              { name: "Draw", price: 5.1 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 1.82, point: 1.5 },
              { name: "Nottingham Forest", price: 1.88, point: -1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.61, point: 2.5 },
              { name: "Under", price: 2.18, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 9.35 },
              { name: "Nottingham Forest", price: 1.37 },
              { name: "Draw", price: 5.35 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 1.88, point: 1.5 },
              { name: "Nottingham Forest", price: 2.03, point: -1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 2.5 },
              { name: "Under", price: 2.28, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 9.2 },
              { name: "Nottingham Forest", price: 1.34 },
              { name: "Draw", price: 5.25 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 8.5 },
              { name: "Nottingham Forest", price: 1.3 },
              { name: "Draw", price: 5.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.25, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 9.4 },
              { name: "Nottingham Forest", price: 1.32 },
              { name: "Draw", price: 4.9 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 14.0 },
              { name: "Nottingham Forest", price: 1.45 },
              { name: "Draw", price: 6.4 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Leicester City", price: 8.5 },
              { name: "Nottingham Forest", price: 1.33 },
              { name: "Draw", price: 5.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 8.5 },
              { name: "Nottingham Forest", price: 1.33 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.62, point: 2.5 },
              { name: "Under", price: 2.2, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Leicester City", price: 7.9 },
              { name: "Nottingham Forest", price: 1.29 },
              { name: "Draw", price: 4.85 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 9.5 },
              { name: "Nottingham Forest", price: 1.31 },
              { name: "Draw", price: 5.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.23, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Leicester City", price: 10.0 },
              { name: "Nottingham Forest", price: 1.34 },
              { name: "Draw", price: 5.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.61, point: 2.5 },
              { name: "Under", price: 2.32, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bb081961bec18a0f02ea52df58647b6d",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-11T13:15:00Z",
    home_team: "Manchester United",
    away_team: "West Ham United",
    bookmakers: [
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Manchester United", price: 1.88 },
              { name: "West Ham United", price: 3.9 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Manchester United", price: 1.84 },
              { name: "West Ham United", price: 3.75 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.91 },
              { name: "West Ham United", price: 4.05 },
              { name: "Draw", price: 3.92 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.37, point: 0.0 },
              { name: "West Ham United", price: 2.9, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.81, point: 2.5 },
              { name: "Under", price: 2.12, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.85 },
              { name: "West Ham United", price: 3.8 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.83, point: -0.5 },
              { name: "West Ham United", price: 1.88, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.73, point: 2.5 },
              { name: "Under", price: 1.99, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.86 },
              { name: "West Ham United", price: 3.99 },
              { name: "Draw", price: 3.79 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.87, point: -0.5 },
              { name: "West Ham United", price: 1.99, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.97, point: 2.75 },
              { name: "Under", price: 1.87, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester United", price: 1.87 },
              { name: "West Ham United", price: 3.98 },
              { name: "Draw", price: 3.85 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester United", price: 1.83 },
              { name: "West Ham United", price: 4.0 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester United", price: 1.92 },
              { name: "West Ham United", price: 3.75 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester United", price: 2.08 },
              { name: "West Ham United", price: 4.5 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Manchester United", price: 1.91 },
              { name: "West Ham United", price: 3.8 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester United", price: 1.91 },
              { name: "West Ham United", price: 3.75 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Manchester United", price: 1.8 },
              { name: "West Ham United", price: 3.7 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester United", price: 1.85 },
              { name: "West Ham United", price: 3.95 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.76, point: 2.5 },
              { name: "Under", price: 2.09, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Manchester United", price: 1.96 },
              { name: "West Ham United", price: 3.8 },
              { name: "Draw", price: 3.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.08, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d3801e4fe720eaedfd96088545b7ded5",
    sport_key: "soccer_epl",
    sport_title: "EPL",
    commence_time: "2025-05-11T15:30:00Z",
    home_team: "Liverpool",
    away_team: "Arsenal",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 3.58 },
              { name: "Liverpool", price: 2.11 },
              { name: "Draw", price: 3.36 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.04, point: 0.25 },
              { name: "Liverpool", price: 1.82, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 2.01, point: 2.75 },
              { name: "Under", price: 1.83, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-02T22:21:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:20Z",
            outcomes: [
              { name: "Arsenal", price: 3.4 },
              { name: "Liverpool", price: 2.1 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-02T22:21:21Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:21Z",
            outcomes: [
              { name: "Arsenal", price: 3.3 },
              { name: "Liverpool", price: 2.05 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 3.32 },
              { name: "Liverpool", price: 2.08 },
              { name: "Draw", price: 3.36 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 1.69, point: 0.5 },
              { name: "Liverpool", price: 2.04, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.78, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 3.62 },
              { name: "Liverpool", price: 2.16 },
              { name: "Draw", price: 3.48 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 2.54, point: 0.0 },
              { name: "Liverpool", price: 1.52, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 2.06, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 3.55 },
              { name: "Liverpool", price: 2.12 },
              { name: "Draw", price: 3.42 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 3.3 },
              { name: "Liverpool", price: 2.08 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 3.9 },
              { name: "Liverpool", price: 2.38 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 3.5 },
              { name: "Liverpool", price: 2.05 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2025-05-02T22:21:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:16Z",
            outcomes: [
              { name: "Arsenal", price: 3.4 },
              { name: "Liverpool", price: 2.15 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 3.3 },
              { name: "Liverpool", price: 2.15 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-02T22:21:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:18Z",
            outcomes: [
              { name: "Arsenal", price: 3.25 },
              { name: "Liverpool", price: 2.0 },
              { name: "Draw", price: 3.25 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 3.45 },
              { name: "Liverpool", price: 2.12 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 2.04, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-02T22:21:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Arsenal", price: 3.5 },
              { name: "Liverpool", price: 2.14 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-02T22:21:17Z",
            outcomes: [
              { name: "Over", price: 1.82, point: 2.5 },
              { name: "Under", price: 1.97, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
];
export const frenchMatchesMock: MatchResponse[] = [
  {
    id: "3de62d3fb97469a5f6254a829d899698",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-02T18:45:00Z",
    home_team: "Nice",
    away_team: "Stade de Reims",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.42 },
              { name: "Stade de Reims", price: 7.47 },
              { name: "Draw", price: 4.97 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.95, point: -1.25 },
              { name: "Stade de Reims", price: 1.95, point: 1.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 3.0 },
              { name: "Under", price: 1.88, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Nice", price: 1.42 },
              { name: "Stade de Reims", price: 6.75 },
              { name: "Draw", price: 4.9 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Nice", price: 1.43 },
              { name: "Stade de Reims", price: 7.0 },
              { name: "Draw", price: 5.0 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Nice", price: 1.37 },
              { name: "Stade de Reims", price: 7.0 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.3, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.47 },
              { name: "Stade de Reims", price: 7.31 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 2.22, point: -1.5 },
              { name: "Stade de Reims", price: 1.77, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.66, point: 2.5 },
              { name: "Under", price: 2.42, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 1.43 },
              { name: "Stade de Reims", price: 7.1 },
              { name: "Draw", price: 4.85 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 1.44 },
              { name: "Stade de Reims", price: 7.0 },
              { name: "Draw", price: 4.9 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.38, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.44 },
              { name: "Stade de Reims", price: 7.8 },
              { name: "Draw", price: 5.1 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.46 },
              { name: "Stade de Reims", price: 8.4 },
              { name: "Draw", price: 5.4 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 1.43 },
              { name: "Stade de Reims", price: 6.8 },
              { name: "Draw", price: 4.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.36, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 1.44 },
              { name: "Stade de Reims", price: 6.9 },
              { name: "Draw", price: 4.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.4 },
              { name: "Stade de Reims", price: 6.5 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.3, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Nice", price: 1.47 },
              { name: "Stade de Reims", price: 7.3 },
              { name: "Draw", price: 5.2 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Nice", price: 1.46 },
              { name: "Stade de Reims", price: 6.88 },
              { name: "Draw", price: 4.63 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Nice", price: 2.12, point: -1.5 },
              { name: "Stade de Reims", price: 1.71, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.29, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.4 },
              { name: "Stade de Reims", price: 7.0 },
              { name: "Draw", price: 4.75 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-01T05:49:26Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:26Z",
            outcomes: [
              { name: "Nice", price: 1.42 },
              { name: "Stade de Reims", price: 6.8 },
              { name: "Draw", price: 4.85 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.43 },
              { name: "Stade de Reims", price: 7.75 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.99, point: 3.0 },
              { name: "Under", price: 1.86, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.42 },
              { name: "Stade de Reims", price: 7.55 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.91, point: -1.25 },
              { name: "Stade de Reims", price: 1.91, point: 1.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.96, point: 3.0 },
              { name: "Under", price: 1.86, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.4 },
              { name: "Stade de Reims", price: 6.8 },
              { name: "Draw", price: 4.85 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.44 },
              { name: "Stade de Reims", price: 7.8 },
              { name: "Draw", price: 5.0 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.48 },
              { name: "Stade de Reims", price: 8.0 },
              { name: "Draw", price: 5.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.96, point: -1.25 },
              { name: "Stade de Reims", price: 1.95, point: 1.25 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1f126cd20bb5123412fcceb468a407b1",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-03T15:00:00Z",
    home_team: "Strasbourg",
    away_team: "Paris Saint Germain",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.55 },
              { name: "Strasbourg", price: 2.5 },
              { name: "Draw", price: 4.15 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 1.97, point: -0.0 },
              { name: "Strasbourg", price: 1.93, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 3.25 },
              { name: "Under", price: 1.94, point: 3.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.55 },
              { name: "Strasbourg", price: 2.4 },
              { name: "Draw", price: 3.95 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.6 },
              { name: "Strasbourg", price: 2.4 },
              { name: "Draw", price: 4.0 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.5 },
              { name: "Strasbourg", price: 2.45 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 2.05, point: 3.5 },
              { name: "Under", price: 1.7, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.68 },
              { name: "Strasbourg", price: 2.64 },
              { name: "Draw", price: 3.79 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 1.98, point: 0.0 },
              { name: "Strasbourg", price: 1.96, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.2, point: 3.5 },
              { name: "Under", price: 1.78, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.6 },
              { name: "Strasbourg", price: 2.56 },
              { name: "Draw", price: 3.68 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.52 },
              { name: "Strasbourg", price: 2.48 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.15, point: 3.5 },
              { name: "Under", price: 1.7, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.52 },
              { name: "Strasbourg", price: 2.45 },
              { name: "Draw", price: 3.95 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.16, point: 3.5 },
              { name: "Under", price: 1.71, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.55 },
              { name: "Strasbourg", price: 2.5 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.2, point: 3.5 },
              { name: "Under", price: 1.67, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.7 },
              { name: "Strasbourg", price: 2.5 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.74 },
              { name: "Strasbourg", price: 2.54 },
              { name: "Draw", price: 4.3 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.6 },
              { name: "Strasbourg", price: 2.52 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.5 },
              { name: "Strasbourg", price: 2.4 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.44, point: 2.5 },
              { name: "Under", price: 2.62, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.59 },
              { name: "Strasbourg", price: 2.51 },
              { name: "Draw", price: 3.77 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 1.54, point: 0.5 },
              { name: "Strasbourg", price: 2.44, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 2.11, point: 3.5 },
              { name: "Under", price: 1.7, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.45 },
              { name: "Strasbourg", price: 2.35 },
              { name: "Draw", price: 3.85 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-01T05:49:26Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:26Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.49 },
              { name: "Strasbourg", price: 2.39 },
              { name: "Draw", price: 4.17 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.65 },
              { name: "Strasbourg", price: 2.5 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 2.13, point: 3.5 },
              { name: "Under", price: 1.75, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.58 },
              { name: "Strasbourg", price: 2.48 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 1.93, point: 0.0 },
              { name: "Strasbourg", price: 1.88, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 3.25 },
              { name: "Under", price: 1.91, point: 3.25 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.54 },
              { name: "Strasbourg", price: 2.5 },
              { name: "Draw", price: 4.1 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.72 },
              { name: "Strasbourg", price: 2.64 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 1.98, point: 0.0 },
              { name: "Strasbourg", price: 1.92, point: 0.0 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Paris Saint Germain", price: 2.55 },
              { name: "Strasbourg", price: 2.45 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "159179d12ee5cf597f3b932a065f1ecf",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-03T17:00:00Z",
    home_team: "Toulouse",
    away_team: "Rennes",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 3.58 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.47 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 2.06, point: 0.25 },
              { name: "Toulouse", price: 1.85, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.99, point: 2.5 },
              { name: "Under", price: 1.89, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Rennes", price: 3.4 },
              { name: "Toulouse", price: 2.1 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Rennes", price: 3.45 },
              { name: "Toulouse", price: 2.1 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Rennes", price: 3.4 },
              { name: "Toulouse", price: 2.05 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 3.6 },
              { name: "Toulouse", price: 2.19 },
              { name: "Draw", price: 3.56 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 2.5, point: 0.0 },
              { name: "Toulouse", price: 1.53, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.01, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Rennes", price: 3.5 },
              { name: "Toulouse", price: 2.12 },
              { name: "Draw", price: 3.46 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Rennes", price: 3.45 },
              { name: "Toulouse", price: 2.12 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.96, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Rennes", price: 3.4 },
              { name: "Toulouse", price: 2.12 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.97, point: 2.5 },
              { name: "Under", price: 1.86, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Rennes", price: 3.55 },
              { name: "Toulouse", price: 2.14 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.5 },
              { name: "Under", price: 1.87, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.6 },
              { name: "Toulouse", price: 2.16 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.9 },
              { name: "Toulouse", price: 2.26 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.3 },
              { name: "Toulouse", price: 2.05 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Rennes", price: 3.6 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.58 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Rennes", price: 3.46 },
              { name: "Toulouse", price: 2.11 },
              { name: "Draw", price: 3.49 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Rennes", price: 1.75, point: 0.5 },
              { name: "Toulouse", price: 2.05, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.86, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.35 },
              { name: "Toulouse", price: 2.05 },
              { name: "Draw", price: 3.25 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-01T05:49:26Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:26Z",
            outcomes: [
              { name: "Rennes", price: 3.43 },
              { name: "Toulouse", price: 2.08 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.6 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 2.5 },
              { name: "Under", price: 1.9, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 3.6 },
              { name: "Toulouse", price: 2.16 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 3.9 },
              { name: "Toulouse", price: 2.26 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 2.06, point: 0.25 },
              { name: "Toulouse", price: 1.86, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.98, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 3.58 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.43 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Rennes", price: 2.01, point: 0.25 },
              { name: "Toulouse", price: 1.83, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.96, point: 2.5 },
              { name: "Under", price: 1.86, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Rennes", price: 3.45 },
              { name: "Toulouse", price: 2.05 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "a1b21b7a9d6eb863b65f9ac47af8f584",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-03T19:05:00Z",
    home_team: "Saint Etienne",
    away_team: "AS Monaco",
    bookmakers: [
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "AS Monaco", price: 1.44 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 5.4 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 5.3 },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.43 },
              { name: "Draw", price: 5.39 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.88, point: -1.25 },
              { name: "Saint Etienne", price: 2.03, point: 1.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 3.5 },
              { name: "Under", price: 2.02, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "AS Monaco", price: 1.4 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 5.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 3.5 },
              { name: "Under", price: 1.97, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.47 },
              { name: "Saint Etienne", price: 6.49 },
              { name: "Draw", price: 5.46 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 2.13, point: -1.5 },
              { name: "Saint Etienne", price: 1.83, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 3.5 },
              { name: "Under", price: 2.03, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.3 },
              { name: "Draw", price: 5.3 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.41 },
              { name: "Saint Etienne", price: 6.4 },
              { name: "Draw", price: 5.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 3.5 },
              { name: "Under", price: 1.98, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.4 },
              { name: "Saint Etienne", price: 6.3 },
              { name: "Draw", price: 5.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.84, point: 3.5 },
              { name: "Under", price: 1.99, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.4 },
              { name: "Draw", price: 5.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 3.5 },
              { name: "Under", price: 2.0, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.45 },
              { name: "Saint Etienne", price: 6.8 },
              { name: "Draw", price: 5.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.47 },
              { name: "Saint Etienne", price: 7.6 },
              { name: "Draw", price: 5.9 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.4 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 4.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.33, point: 2.5 },
              { name: "Under", price: 3.2, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "AS Monaco", price: 1.46 },
              { name: "Saint Etienne", price: 6.7 },
              { name: "Draw", price: 5.2 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "AS Monaco", price: 1.46 },
              { name: "Saint Etienne", price: 6.21 },
              { name: "Draw", price: 5.07 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "AS Monaco", price: 2.01, point: -1.5 },
              { name: "Saint Etienne", price: 1.72, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 3.5 },
              { name: "Under", price: 1.93, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.4 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 4.75 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-01T05:49:26Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:26Z",
            outcomes: [
              { name: "AS Monaco", price: 1.42 },
              { name: "Saint Etienne", price: 6.0 },
              { name: "Draw", price: 5.3 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.44 },
              { name: "Saint Etienne", price: 6.75 },
              { name: "Draw", price: 5.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 3.5 },
              { name: "Under", price: 1.97, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.8 },
              { name: "Draw", price: 5.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.5 },
              { name: "Saint Etienne", price: 8.0 },
              { name: "Draw", price: 6.2 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.87, point: -1.25 },
              { name: "Saint Etienne", price: 2.04, point: 1.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 3.5 },
              { name: "Under", price: 2.02, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.43 },
              { name: "Saint Etienne", price: 6.5 },
              { name: "Draw", price: 5.44 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.85, point: -1.25 },
              { name: "Saint Etienne", price: 1.98, point: 1.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 3.5 },
              { name: "Under", price: 1.98, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.39 },
              { name: "Saint Etienne", price: 5.9 },
              { name: "Draw", price: 5.2 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d26015b07063c018620f917e59def8fb",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-04T13:00:00Z",
    home_team: "Nantes",
    away_team: "Angers",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 4.59 },
              { name: "Nantes", price: 1.93 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 1.97, point: 0.5 },
              { name: "Nantes", price: 1.93, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.25 },
              { name: "Under", price: 1.97, point: 2.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Angers", price: 4.2 },
              { name: "Nantes", price: 1.94 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Angers", price: 4.2 },
              { name: "Nantes", price: 1.96 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Angers", price: 4.4 },
              { name: "Nantes", price: 1.85 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 2.1, point: 2.5 },
              { name: "Under", price: 1.7, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 4.38 },
              { name: "Nantes", price: 1.95 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 3.04, point: 0.0 },
              { name: "Nantes", price: 1.38, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.2, point: 2.5 },
              { name: "Under", price: 1.78, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 4.3 },
              { name: "Nantes", price: 1.88 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 4.25 },
              { name: "Nantes", price: 1.92 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.15, point: 2.5 },
              { name: "Under", price: 1.72, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 4.2 },
              { name: "Nantes", price: 1.92 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.15, point: 2.5 },
              { name: "Under", price: 1.72, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 4.0 },
              { name: "Nantes", price: 2.02 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.08, point: 2.5 },
              { name: "Under", price: 1.75, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 4.4 },
              { name: "Nantes", price: 1.91 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 5.4 },
              { name: "Nantes", price: 2.08 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 3.8 },
              { name: "Nantes", price: 1.91 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 2.5 },
              { name: "Under", price: 1.75, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Angers", price: 4.3 },
              { name: "Nantes", price: 2.02 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 4.1 },
              { name: "Nantes", price: 1.85 },
              { name: "Draw", price: 3.15 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 4.4 },
              { name: "Nantes", price: 1.99 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 2.18, point: 2.5 },
              { name: "Under", price: 1.72, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2025-05-01T05:49:26Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:26Z",
            outcomes: [
              { name: "Angers", price: 4.0 },
              { name: "Nantes", price: 1.9 },
              { name: "Draw", price: 3.38 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Angers", price: 4.24 },
              { name: "Nantes", price: 1.93 },
              { name: "Draw", price: 3.45 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Angers", price: 1.88, point: 0.5 },
              { name: "Nantes", price: 1.88, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 2.06, point: 2.5 },
              { name: "Under", price: 1.72, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 4.43 },
              { name: "Nantes", price: 1.98 },
              { name: "Draw", price: 3.29 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 1.85, point: 0.5 },
              { name: "Nantes", price: 1.98, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.25 },
              { name: "Under", price: 1.93, point: 2.25 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 4.0 },
              { name: "Nantes", price: 1.86 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 4.5 },
              { name: "Nantes", price: 1.93 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 5.0 },
              { name: "Nantes", price: 2.04 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 1.96, point: 0.5 },
              { name: "Nantes", price: 1.93, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.18, point: 2.5 },
              { name: "Under", price: 1.72, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "052515a347dd805c5fc8da6a99ecfe1e",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-04T15:15:00Z",
    home_team: "Auxerre",
    away_team: "Le Havre",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.09 },
              { name: "Le Havre", price: 3.53 },
              { name: "Draw", price: 3.67 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.1, point: -0.5 },
              { name: "Le Havre", price: 1.83, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.05, point: 2.75 },
              { name: "Under", price: 1.85, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Auxerre", price: 2.05 },
              { name: "Le Havre", price: 3.45 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Auxerre", price: 2.1 },
              { name: "Le Havre", price: 3.45 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Auxerre", price: 1.97 },
              { name: "Le Havre", price: 3.6 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.12 },
              { name: "Le Havre", price: 3.58 },
              { name: "Draw", price: 3.76 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 1.52, point: 0.0 },
              { name: "Le Havre", price: 2.52, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 2.07, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.06 },
              { name: "Le Havre", price: 3.48 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.08 },
              { name: "Le Havre", price: 3.35 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.05 },
              { name: "Le Havre", price: 3.35 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.05 },
              { name: "Le Havre", price: 3.65 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.92, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.12 },
              { name: "Le Havre", price: 3.65 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.18 },
              { name: "Le Havre", price: 3.85 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.0 },
              { name: "Le Havre", price: 3.3 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Auxerre", price: 2.14 },
              { name: "Le Havre", price: 3.55 },
              { name: "Draw", price: 3.67 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.0 },
              { name: "Le Havre", price: 3.3 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.12 },
              { name: "Le Havre", price: 3.6 },
              { name: "Draw", price: 3.6 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 2.02, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.1 },
              { name: "Le Havre", price: 3.55 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.2 },
              { name: "Le Havre", price: 3.9 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 1.81, point: -0.25 },
              { name: "Le Havre", price: 2.08, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.82, point: 2.5 },
              { name: "Under", price: 2.04, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Auxerre", price: 2.06 },
              { name: "Le Havre", price: 3.56 },
              { name: "Draw", price: 3.52 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Auxerre", price: 2.05, point: -0.5 },
              { name: "Le Havre", price: 1.75, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.82, point: 2.5 },
              { name: "Under", price: 1.94, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.09 },
              { name: "Le Havre", price: 3.53 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.09, point: -0.5 },
              { name: "Le Havre", price: 1.78, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.01, point: 2.75 },
              { name: "Under", price: 1.83, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 1.98 },
              { name: "Le Havre", price: 3.45 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9bd55e190d8d91f38ef2b3097726e3e8",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-04T15:15:00Z",
    home_team: "Brest",
    away_team: "Montpellier",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.37 },
              { name: "Montpellier", price: 8.25 },
              { name: "Draw", price: 5.38 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 2.04, point: -1.5 },
              { name: "Montpellier", price: 1.87, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 3.0 },
              { name: "Under", price: 1.93, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Brest", price: 1.37 },
              { name: "Montpellier", price: 7.5 },
              { name: "Draw", price: 5.2 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Brest", price: 1.38 },
              { name: "Montpellier", price: 7.75 },
              { name: "Draw", price: 5.3 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Brest", price: 1.33 },
              { name: "Montpellier", price: 7.8 },
              { name: "Draw", price: 5.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.55, point: 2.5 },
              { name: "Under", price: 2.4, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.4 },
              { name: "Montpellier", price: 8.6 },
              { name: "Draw", price: 5.46 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 2.07, point: -1.5 },
              { name: "Montpellier", price: 1.88, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.63, point: 2.5 },
              { name: "Under", price: 2.49, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 1.36 },
              { name: "Montpellier", price: 8.3 },
              { name: "Draw", price: 5.25 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 1.34 },
              { name: "Montpellier", price: 8.2 },
              { name: "Draw", price: 5.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.55, point: 2.5 },
              { name: "Under", price: 2.45, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 1.34 },
              { name: "Montpellier", price: 8.1 },
              { name: "Draw", price: 5.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.41, point: 3.5 },
              { name: "Under", price: 1.58, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 1.36 },
              { name: "Montpellier", price: 8.0 },
              { name: "Draw", price: 5.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.56, point: 2.5 },
              { name: "Under", price: 2.43, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.39 },
              { name: "Montpellier", price: 8.4 },
              { name: "Draw", price: 5.4 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.42 },
              { name: "Montpellier", price: 9.4 },
              { name: "Draw", price: 5.8 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.36 },
              { name: "Montpellier", price: 7.5 },
              { name: "Draw", price: 4.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.3, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Brest", price: 1.4 },
              { name: "Montpellier", price: 7.7 },
              { name: "Draw", price: 5.6 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.33 },
              { name: "Montpellier", price: 7.25 },
              { name: "Draw", price: 5.0 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.38 },
              { name: "Montpellier", price: 8.75 },
              { name: "Draw", price: 5.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.9, point: 3.0 },
              { name: "Under", price: 1.95, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Brest", price: 1.39 },
              { name: "Montpellier", price: 7.62 },
              { name: "Draw", price: 5.06 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Brest", price: 2.05, point: -1.5 },
              { name: "Montpellier", price: 1.75, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.59, point: 2.5 },
              { name: "Under", price: 2.32, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.37 },
              { name: "Montpellier", price: 8.45 },
              { name: "Draw", price: 5.39 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.99, point: -1.5 },
              { name: "Montpellier", price: 1.84, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 3.0 },
              { name: "Under", price: 1.9, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 1.33 },
              { name: "Montpellier", price: 7.6 },
              { name: "Draw", price: 5.1 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.38 },
              { name: "Montpellier", price: 8.2 },
              { name: "Draw", price: 5.7 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 1.51 },
              { name: "Montpellier", price: 14.5 },
              { name: "Draw", price: 7.6 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 2.04, point: -1.5 },
              { name: "Montpellier", price: 1.86, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.54, point: 2.5 },
              { name: "Under", price: 2.26, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "e6afce83f8054327347fd2d657156f9f",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-04T15:15:00Z",
    home_team: "Lyon",
    away_team: "RC Lens",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.56 },
              { name: "RC Lens", price: 5.57 },
              { name: "Draw", price: 4.64 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.9, point: -1.0 },
              { name: "RC Lens", price: 2.0, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.07, point: 3.25 },
              { name: "Under", price: 1.83, point: 3.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Lyon", price: 1.56 },
              { name: "RC Lens", price: 5.2 },
              { name: "Draw", price: 4.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Lyon", price: 1.58 },
              { name: "RC Lens", price: 5.3 },
              { name: "Draw", price: 4.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Lyon", price: 1.5 },
              { name: "RC Lens", price: 5.2 },
              { name: "Draw", price: 4.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 2.2, point: 3.5 },
              { name: "Under", price: 1.6, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.59 },
              { name: "RC Lens", price: 5.66 },
              { name: "Draw", price: 4.79 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 2.35, point: -1.5 },
              { name: "RC Lens", price: 1.55, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.35, point: 3.5 },
              { name: "Under", price: 1.69, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lyon", price: 1.54 },
              { name: "RC Lens", price: 5.5 },
              { name: "Draw", price: 4.65 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lyon", price: 1.52 },
              { name: "RC Lens", price: 5.4 },
              { name: "Draw", price: 4.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.25, point: 3.5 },
              { name: "Under", price: 1.65, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lyon", price: 1.52 },
              { name: "RC Lens", price: 5.35 },
              { name: "Draw", price: 4.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.26, point: 3.5 },
              { name: "Under", price: 1.65, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lyon", price: 1.57 },
              { name: "RC Lens", price: 5.25 },
              { name: "Draw", price: 4.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.49, point: 2.5 },
              { name: "Under", price: 2.63, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.49 },
              { name: "RC Lens", price: 5.8 },
              { name: "Draw", price: 4.7 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.6 },
              { name: "RC Lens", price: 10.5 },
              { name: "Draw", price: 4.8 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Lyon", price: 1.59 },
              { name: "RC Lens", price: 5.5 },
              { name: "Draw", price: 4.7 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.55 },
              { name: "RC Lens", price: 5.0 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.5, point: 2.5 },
              { name: "Under", price: 2.5, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.5 },
              { name: "RC Lens", price: 5.0 },
              { name: "Draw", price: 4.33 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.57 },
              { name: "RC Lens", price: 5.75 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 3.0 },
              { name: "Under", price: 2.02, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.55 },
              { name: "RC Lens", price: 5.6 },
              { name: "Draw", price: 4.6 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.61 },
              { name: "RC Lens", price: 6.6 },
              { name: "Draw", price: 5.2 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.89, point: -1.0 },
              { name: "RC Lens", price: 2.0, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.3, point: 3.5 },
              { name: "Under", price: 1.65, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Lyon", price: 1.56 },
              { name: "RC Lens", price: 5.43 },
              { name: "Draw", price: 4.42 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Lyon", price: 2.41, point: -1.5 },
              { name: "RC Lens", price: 1.55, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 2.29, point: 3.5 },
              { name: "Under", price: 1.57, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.6 },
              { name: "RC Lens", price: 5.27 },
              { name: "Draw", price: 4.52 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lyon", price: 1.95, point: -1.0 },
              { name: "RC Lens", price: 1.87, point: 1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 3.0 },
              { name: "Under", price: 2.0, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lyon", price: 1.49 },
              { name: "RC Lens", price: 5.3 },
              { name: "Draw", price: 4.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "abf18f705ef48f29aea2ad4b32fadb0b",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-04T18:45:00Z",
    home_team: "Lille",
    away_team: "Marseille",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.43 },
              { name: "Marseille", price: 3.07 },
              { name: "Draw", price: 3.38 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.09, point: -0.25 },
              { name: "Marseille", price: 1.83, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.97, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Lille", price: 2.3 },
              { name: "Marseille", price: 3.05 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Lille", price: 2.35 },
              { name: "Marseille", price: 3.05 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Lille", price: 2.3 },
              { name: "Marseille", price: 3.1 },
              { name: "Draw", price: 3.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.46 },
              { name: "Marseille", price: 3.13 },
              { name: "Draw", price: 3.44 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 1.76, point: 0.0 },
              { name: "Marseille", price: 2.23, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 2.5 },
              { name: "Under", price: 1.99, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lille", price: 2.39 },
              { name: "Marseille", price: 3.04 },
              { name: "Draw", price: 3.34 },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lille", price: 2.32 },
              { name: "Marseille", price: 3.05 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.88, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lille", price: 2.32 },
              { name: "Marseille", price: 3.05 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.5 },
              { name: "Under", price: 1.89, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Lille", price: 2.38 },
              { name: "Marseille", price: 3.0 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.91, point: 2.5 },
              { name: "Under", price: 1.88, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.28 },
              { name: "Marseille", price: 3.1 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.58 },
              { name: "Marseille", price: 3.5 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.3 },
              { name: "Marseille", price: 3.0 },
              { name: "Draw", price: 3.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Lille", price: 2.4 },
              { name: "Marseille", price: 3.18 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.3 },
              { name: "Marseille", price: 2.9 },
              { name: "Draw", price: 3.2 },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.35 },
              { name: "Marseille", price: 3.15 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.97, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.4 },
              { name: "Marseille", price: 3.05 },
              { name: "Draw", price: 3.35 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.52 },
              { name: "Marseille", price: 3.35 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.08, point: -0.25 },
              { name: "Marseille", price: 1.82, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.92, point: 2.5 },
              { name: "Under", price: 1.96, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "gtbets",
        title: "GTbets",
        last_update: "2025-05-01T05:48:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Lille", price: 2.32 },
              { name: "Marseille", price: 3.07 },
              { name: "Draw", price: 3.31 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Lille", price: 2.25, point: -0.5 },
              { name: "Marseille", price: 1.62, point: 0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:48:03Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.89, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.43 },
              { name: "Marseille", price: 3.07 },
              { name: "Draw", price: 3.37 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Lille", price: 2.05, point: -0.25 },
              { name: "Marseille", price: 1.8, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Lille", price: 2.25 },
              { name: "Marseille", price: 3.1 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "6e1225eac1b2a0fcd918f6501c2faa47",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "AS Monaco",
    away_team: "Lyon",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.79 },
              { name: "Lyon", price: 3.9 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 2.01, point: -0.75 },
              { name: "Lyon", price: 1.85, point: 0.75 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 3.25 },
              { name: "Under", price: 1.97, point: 3.25 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "AS Monaco", price: 1.76 },
              { name: "Lyon", price: 3.8 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "AS Monaco", price: 1.74 },
              { name: "Lyon", price: 3.75 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 1.78 },
              { name: "Lyon", price: 4.42 },
              { name: "Draw", price: 4.42 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "AS Monaco", price: 2.73, point: -1.5 },
              { name: "Lyon", price: 1.42, point: 1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.11, point: 3.5 },
              { name: "Under", price: 1.85, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "AS Monaco", price: 1.72 },
              { name: "Lyon", price: 4.0 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.95, point: 3.5 },
              { name: "Under", price: 1.77, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.73 },
              { name: "Lyon", price: 4.3 },
              { name: "Draw", price: 4.3 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.7 },
              { name: "Lyon", price: 3.65 },
              { name: "Draw", price: 4.0 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.78 },
              { name: "Lyon", price: 3.9 },
              { name: "Draw", price: 4.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.1, point: 3.5 },
              { name: "Under", price: 1.75, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "AS Monaco", price: 1.77 },
              { name: "Lyon", price: 4.0 },
              { name: "Draw", price: 4.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 2.08, point: 3.5 },
              { name: "Under", price: 1.75, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.8 },
              { name: "Lyon", price: 1.05 },
              { name: "Draw", price: 1.02 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 980.0 },
              { name: "Lyon", price: 1000.0 },
              { name: "Draw", price: 1000.0 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "AS Monaco", price: 1.86 },
              { name: "Lyon", price: 3.89 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "AS Monaco", price: 1.7 },
              { name: "Lyon", price: 4.0 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.4, point: 2.5 },
              { name: "Under", price: 2.75, point: 2.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3d771d3f0ab057397ee38d44c8e74fea",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Angers",
    away_team: "Strasbourg",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 3.44 },
              { name: "Strasbourg", price: 2.08 },
              { name: "Draw", price: 3.58 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 2.05, point: 0.25 },
              { name: "Strasbourg", price: 1.81, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.99, point: 2.75 },
              { name: "Under", price: 1.85, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Angers", price: 3.2 },
              { name: "Strasbourg", price: 2.0 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Angers", price: 3.25 },
              { name: "Strasbourg", price: 2.05 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 3.65 },
              { name: "Strasbourg", price: 2.08 },
              { name: "Draw", price: 3.83 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Angers", price: 2.61, point: 0.0 },
              { name: "Strasbourg", price: 1.49, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.84, point: 2.5 },
              { name: "Under", price: 2.12, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Angers", price: 3.5 },
              { name: "Strasbourg", price: 2.0 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.72, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 3.54 },
              { name: "Strasbourg", price: 2.02 },
              { name: "Draw", price: 3.72 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 3.15 },
              { name: "Strasbourg", price: 1.98 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 3.45 },
              { name: "Strasbourg", price: 2.08 },
              { name: "Draw", price: 3.55 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.78, point: 2.5 },
              { name: "Under", price: 2.06, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Angers", price: 3.75 },
              { name: "Strasbourg", price: 1.96 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.78, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 1.05 },
              { name: "Strasbourg", price: 1.05 },
              { name: "Draw", price: 1.01 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 980.0 },
              { name: "Strasbourg", price: 1000.0 },
              { name: "Draw", price: 990.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Angers", price: 3.3 },
              { name: "Strasbourg", price: 2.0 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.75, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Angers", price: 3.33 },
              { name: "Strasbourg", price: 2.18 },
              { name: "Draw", price: 3.79 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "693a39a883bb09763ee0fffab28c6a95",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Auxerre",
    away_team: "Nantes",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.39 },
              { name: "Nantes", price: 2.98 },
              { name: "Draw", price: 3.39 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.06, point: -0.25 },
              { name: "Nantes", price: 1.81, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Auxerre", price: 2.3 },
              { name: "Nantes", price: 2.8 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Auxerre", price: 2.3 },
              { name: "Nantes", price: 2.85 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 2.43 },
              { name: "Nantes", price: 3.17 },
              { name: "Draw", price: 3.46 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Auxerre", price: 1.74, point: 0.0 },
              { name: "Nantes", price: 2.26, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Auxerre", price: 2.3 },
              { name: "Nantes", price: 3.0 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.36 },
              { name: "Nantes", price: 3.08 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.25 },
              { name: "Nantes", price: 2.75 },
              { name: "Draw", price: 3.3 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.35 },
              { name: "Nantes", price: 2.95 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Auxerre", price: 2.38 },
              { name: "Nantes", price: 2.95 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.5 },
              { name: "Under", price: 1.92, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 1.05 },
              { name: "Nantes", price: 1.05 },
              { name: "Draw", price: 1.01 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 1000.0 },
              { name: "Nantes", price: 990.0 },
              { name: "Draw", price: 1000.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Auxerre", price: 2.3 },
              { name: "Nantes", price: 2.9 },
              { name: "Draw", price: 3.2 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.85, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Auxerre", price: 2.46 },
              { name: "Nantes", price: 2.93 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "b23b93c6c41e8737465ca762c89470e1",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Brest",
    away_team: "Lille",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 4.25 },
              { name: "Lille", price: 1.81 },
              { name: "Draw", price: 3.77 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 2.05, point: 0.5 },
              { name: "Lille", price: 1.82, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.82, point: 2.5 },
              { name: "Under", price: 2.03, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Brest", price: 4.0 },
              { name: "Lille", price: 1.78 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Brest", price: 4.0 },
              { name: "Lille", price: 1.8 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 4.27 },
              { name: "Lille", price: 1.93 },
              { name: "Draw", price: 3.79 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Brest", price: 3.04, point: 0.0 },
              { name: "Lille", price: 1.38, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 2.05, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Brest", price: 4.3 },
              { name: "Lille", price: 1.77 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 4.15 },
              { name: "Lille", price: 1.88 },
              { name: "Draw", price: 3.68 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 3.9 },
              { name: "Lille", price: 1.74 },
              { name: "Draw", price: 3.55 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 4.1 },
              { name: "Lille", price: 1.85 },
              { name: "Draw", price: 3.65 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.81, point: 2.5 },
              { name: "Under", price: 2.02, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Brest", price: 4.2 },
              { name: "Lille", price: 1.83 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.78, point: 2.5 },
              { name: "Under", price: 2.04, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 4.1 },
              { name: "Lille", price: 1.81 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 5.3 },
              { name: "Lille", price: 1.85 },
              { name: "Draw", price: 4.7 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Brest", price: 4.0 },
              { name: "Lille", price: 1.83 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Brest", price: 4.2 },
              { name: "Lille", price: 1.89 },
              { name: "Draw", price: 3.9 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3d30f9dd89e4a00496876f179a93a576",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Le Havre",
    away_team: "Marseille",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Le Havre", price: 5.54 },
              { name: "Marseille", price: 1.55 },
              { name: "Draw", price: 4.37 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Le Havre", price: 1.95, point: 1.0 },
              { name: "Marseille", price: 1.9, point: -1.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 2.0, point: 3.0 },
              { name: "Under", price: 1.85, point: 3.0 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Le Havre", price: 5.3 },
              { name: "Marseille", price: 1.54 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Le Havre", price: 5.2 },
              { name: "Marseille", price: 1.52 },
              { name: "Draw", price: 4.2 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Le Havre", price: 5.66 },
              { name: "Marseille", price: 1.62 },
              { name: "Draw", price: 4.53 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Le Havre", price: 1.49, point: 1.5 },
              { name: "Marseille", price: 2.5, point: -1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.69, point: 2.5 },
              { name: "Under", price: 2.35, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Le Havre", price: 5.7 },
              { name: "Marseille", price: 1.5 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.3, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Le Havre", price: 5.5 },
              { name: "Marseille", price: 1.57 },
              { name: "Draw", price: 4.4 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Le Havre", price: 5.1 },
              { name: "Marseille", price: 1.5 },
              { name: "Draw", price: 4.1 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Le Havre", price: 5.35 },
              { name: "Marseille", price: 1.55 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.63, point: 2.5 },
              { name: "Under", price: 2.31, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Le Havre", price: 5.75 },
              { name: "Marseille", price: 1.56 },
              { name: "Draw", price: 4.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.6, point: 2.5 },
              { name: "Under", price: 2.33, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Le Havre", price: 2.24 },
              { name: "Marseille", price: 1.05 },
              { name: "Draw", price: 2.24 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Le Havre", price: 990.0 },
              { name: "Marseille", price: 1.8 },
              { name: "Draw", price: 1000.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Le Havre", price: 5.0 },
              { name: "Marseille", price: 1.57 },
              { name: "Draw", price: 4.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.57, point: 2.5 },
              { name: "Under", price: 2.3, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Le Havre", price: 5.6 },
              { name: "Marseille", price: 1.59 },
              { name: "Draw", price: 4.7 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3987d244af96778c30b6cc8995ead424",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Montpellier",
    away_team: "Paris Saint Germain",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Montpellier", price: 10.33 },
              { name: "Paris Saint Germain", price: 1.21 },
              { name: "Draw", price: 7.38 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Montpellier", price: 1.92, point: 2.0 },
              { name: "Paris Saint Germain", price: 1.92, point: -2.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.94, point: 3.75 },
              { name: "Under", price: 1.88, point: 3.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Montpellier", price: 9.5 },
              { name: "Paris Saint Germain", price: 1.2 },
              { name: "Draw", price: 6.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Montpellier", price: 10.0 },
              { name: "Paris Saint Germain", price: 1.21 },
              { name: "Draw", price: 6.75 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Montpellier", price: 11.4 },
              { name: "Paris Saint Germain", price: 1.25 },
              { name: "Draw", price: 7.65 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Montpellier", price: 2.36, point: 1.5 },
              { name: "Paris Saint Germain", price: 1.69, point: -1.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 3.5 },
              { name: "Under", price: 2.1, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Montpellier", price: 11.0 },
              { name: "Paris Saint Germain", price: 1.18 },
              { name: "Draw", price: 7.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.7, point: 3.5 },
              { name: "Under", price: 2.05, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Montpellier", price: 10.75 },
              { name: "Paris Saint Germain", price: 1.23 },
              { name: "Draw", price: 7.2 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Montpellier", price: 9.4 },
              { name: "Paris Saint Germain", price: 1.19 },
              { name: "Draw", price: 6.3 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Montpellier", price: 12.5 },
              { name: "Paris Saint Germain", price: 1.18 },
              { name: "Draw", price: 7.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.78, point: 3.5 },
              { name: "Under", price: 2.06, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Montpellier", price: 10.5 },
              { name: "Paris Saint Germain", price: 1.24 },
              { name: "Draw", price: 7.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.81, point: 3.5 },
              { name: "Under", price: 2.0, point: 3.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Montpellier", price: 2.04 },
              { name: "Paris Saint Germain", price: 1.06 },
              { name: "Draw", price: 2.02 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Montpellier", price: 180.0 },
              { name: "Paris Saint Germain", price: 2.0 },
              { name: "Draw", price: 100.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Montpellier", price: 9.5 },
              { name: "Paris Saint Germain", price: 1.22 },
              { name: "Draw", price: 6.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.29, point: 2.5 },
              { name: "Under", price: 3.5, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Montpellier", price: 11.0 },
              { name: "Paris Saint Germain", price: 1.24 },
              { name: "Draw", price: 7.9 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "544500f7ceef06cfeb6158896c914739",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Rennes",
    away_team: "Nice",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 2.25 },
              { name: "Rennes", price: 3.14 },
              { name: "Draw", price: 3.48 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.95, point: -0.25 },
              { name: "Rennes", price: 1.89, point: 0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.87, point: 2.5 },
              { name: "Under", price: 1.97, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Nice", price: 2.15 },
              { name: "Rennes", price: 3.0 },
              { name: "Draw", price: 3.4 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Nice", price: 2.15 },
              { name: "Rennes", price: 3.05 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 2.26 },
              { name: "Rennes", price: 3.31 },
              { name: "Draw", price: 3.69 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Nice", price: 1.6, point: 0.0 },
              { name: "Rennes", price: 2.33, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.93, point: 2.5 },
              { name: "Under", price: 2.01, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Nice", price: 2.2 },
              { name: "Rennes", price: 3.2 },
              { name: "Draw", price: 3.3 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 2.19 },
              { name: "Rennes", price: 3.22 },
              { name: "Draw", price: 3.58 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 2.1 },
              { name: "Rennes", price: 2.95 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 2.2 },
              { name: "Rennes", price: 3.15 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 1.93, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Nice", price: 2.15 },
              { name: "Rennes", price: 3.25 },
              { name: "Draw", price: 3.8 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 2.02, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 1.05 },
              { name: "Rennes", price: 1.77 },
              { name: "Draw", price: 1.77 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 2.3 },
              { name: "Rennes", price: 1000.0 },
              { name: "Draw", price: 1000.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Nice", price: 2.15 },
              { name: "Rennes", price: 3.0 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.85, point: 2.5 },
              { name: "Under", price: 1.91, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Nice", price: 2.32 },
              { name: "Rennes", price: 3.14 },
              { name: "Draw", price: 3.68 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fedb3fecd801674b3b358481c4eb4495",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Toulouse",
    away_team: "RC Lens",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "RC Lens", price: 3.14 },
              { name: "Toulouse", price: 2.26 },
              { name: "Draw", price: 3.47 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "RC Lens", price: 1.89, point: 0.25 },
              { name: "Toulouse", price: 1.96, point: -0.25 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.83, point: 2.5 },
              { name: "Under", price: 2.01, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "RC Lens", price: 3.0 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "RC Lens", price: 3.0 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.45 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "RC Lens", price: 3.29 },
              { name: "Toulouse", price: 2.25 },
              { name: "Draw", price: 3.75 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "RC Lens", price: 2.33, point: 0.0 },
              { name: "Toulouse", price: 1.6, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.89, point: 2.5 },
              { name: "Under", price: 2.06, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "RC Lens", price: 3.1 },
              { name: "Toulouse", price: 2.2 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.77, point: 2.5 },
              { name: "Under", price: 2.0, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "RC Lens", price: 3.2 },
              { name: "Toulouse", price: 2.18 },
              { name: "Draw", price: 3.64 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "RC Lens", price: 2.95 },
              { name: "Toulouse", price: 2.1 },
              { name: "Draw", price: 3.35 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "RC Lens", price: 3.05 },
              { name: "Toulouse", price: 2.25 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.86, point: 2.5 },
              { name: "Under", price: 1.97, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "RC Lens", price: 3.35 },
              { name: "Toulouse", price: 2.15 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.79, point: 2.5 },
              { name: "Under", price: 2.02, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "RC Lens", price: 3.1 },
              { name: "Toulouse", price: 2.1 },
              { name: "Draw", price: 3.4 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.8, point: 2.5 },
              { name: "Under", price: 1.95, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "RC Lens", price: 3.11 },
              { name: "Toulouse", price: 2.33 },
              { name: "Draw", price: 3.7 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "83b936811c79851e56da8ad81035e037",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2025-05-10T19:00:00Z",
    home_team: "Stade de Reims",
    away_team: "Saint Etienne",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.49 },
              { name: "Stade de Reims", price: 2.03 },
              { name: "Draw", price: 3.67 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Saint Etienne", price: 1.83, point: 0.5 },
              { name: "Stade de Reims", price: 2.04, point: -0.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.88, point: 2.75 },
              { name: "Under", price: 1.95, point: 2.75 },
            ],
          },
        ],
      },
      {
        key: "winamax_fr",
        title: "Winamax (FR)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.25 },
              { name: "Stade de Reims", price: 2.0 },
              { name: "Draw", price: 3.6 },
            ],
          },
        ],
      },
      {
        key: "winamax_de",
        title: "Winamax (DE)",
        last_update: "2025-05-01T05:49:19Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:19Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.25 },
              { name: "Stade de Reims", price: 2.0 },
              { name: "Draw", price: 3.65 },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2025-05-01T05:49:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.58 },
              { name: "Stade de Reims", price: 2.09 },
              { name: "Draw", price: 3.87 },
            ],
          },
          {
            key: "spreads",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Saint Etienne", price: 2.55, point: 0.0 },
              { name: "Stade de Reims", price: 1.51, point: 0.0 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:15Z",
            outcomes: [
              { name: "Over", price: 1.76, point: 2.5 },
              { name: "Under", price: 2.23, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "tipico_de",
        title: "Tipico",
        last_update: "2025-05-01T05:49:18Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.6 },
              { name: "Stade de Reims", price: 1.97 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:18Z",
            outcomes: [
              { name: "Over", price: 1.65, point: 2.5 },
              { name: "Under", price: 2.2, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.48 },
              { name: "Stade de Reims", price: 2.03 },
              { name: "Draw", price: 3.75 },
            ],
          },
        ],
      },
      {
        key: "parionssport_fr",
        title: "Parions Sport (FR)",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.15 },
              { name: "Stade de Reims", price: 1.96 },
              { name: "Draw", price: 3.5 },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.45 },
              { name: "Stade de Reims", price: 2.02 },
              { name: "Draw", price: 3.7 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.71, point: 2.5 },
              { name: "Under", price: 2.16, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2025-05-01T05:49:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.35 },
              { name: "Stade de Reims", price: 2.08 },
              { name: "Draw", price: 3.85 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:16Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.2, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Saint Etienne", price: 1.05 },
              { name: "Stade de Reims", price: 1.05 },
              { name: "Draw", price: 1.01 },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Saint Etienne", price: 990.0 },
              { name: "Stade de Reims", price: 980.0 },
              { name: "Draw", price: 1000.0 },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2025-05-01T05:49:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.3 },
              { name: "Stade de Reims", price: 2.0 },
              { name: "Draw", price: 3.5 },
            ],
          },
          {
            key: "totals",
            last_update: "2025-05-01T05:49:17Z",
            outcomes: [
              { name: "Over", price: 1.67, point: 2.5 },
              { name: "Under", price: 2.1, point: 2.5 },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2025-05-01T05:46:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2025-05-01T05:46:45Z",
            outcomes: [
              { name: "Saint Etienne", price: 3.41 },
              { name: "Stade de Reims", price: 2.13 },
              { name: "Draw", price: 3.87 },
            ],
          },
        ],
      },
    ],
  },
];
