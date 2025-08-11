export interface SportResponse {
  key: string;
  group: string;
  title: string;
  description: string;
  active: boolean;
  has_outrights: boolean;
  groupIcon?: string;
  countryCode?: string;
}
