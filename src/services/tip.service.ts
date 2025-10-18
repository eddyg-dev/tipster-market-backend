import moment from "moment";
import { Outcome } from "../shared-data/models/outcome.model";

export class TipService {
  static calculateTipDeadline(selectedOutcomes: Outcome[]): string {
    let earliestMatchDate: moment.Moment | null = null;

    if (selectedOutcomes && selectedOutcomes.length > 0) {
      for (const outcome of selectedOutcomes) {
        if (outcome.match?.commence_time) {
          const matchDate = moment(outcome.match.commence_time);
          if (!earliestMatchDate || matchDate.isBefore(earliestMatchDate)) {
            earliestMatchDate = matchDate;
          }
        }
      }
    }

    return earliestMatchDate
      ? earliestMatchDate.toISOString()
      : moment().add(24, "hours").toISOString();
  }
}
