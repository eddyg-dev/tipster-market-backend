import moment from "moment";
import { Match } from "../shared-data";
import { OutcomeResult } from "../shared-data/enums/outcome-result.enum";
import { TipResult } from "../shared-data/enums/tip-result.enum";
import { TipStatus } from "../shared-data/enums/tip-status.enum";
import { Outcome } from "../shared-data/models/outcome.model";
import { Tip } from "../shared-data/models/tip.model";

export class TipService {
  static async enrichTip(
    tip: Tip,
    matchesMap: Map<string, Match>
  ): Promise<Tip> {
    const tipWithOutcomeResults = this.addOutcomeResults(
      tip.selected_outcomes,
      matchesMap
    );
    const tipWithResultAndStatus = this.addTipResultAndStatus(
      tip,
      tipWithOutcomeResults
    );
    return {
      ...tipWithResultAndStatus,
      selected_outcomes: tipWithOutcomeResults,
    };
  }

  private static addTipResultAndStatus(
    tip: Tip,
    selectedOutcomesWithResults: Outcome[]
  ): Tip {
    const isFullChecked = selectedOutcomesWithResults.every(
      (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
    );
    const isWon = selectedOutcomesWithResults.every(
      (outcome: Outcome) => outcome.result === OutcomeResult.Right
    );

    const isDeadlineReached = moment(tip.deadline).isBefore(moment());

    const status =
      isFullChecked || isDeadlineReached
        ? TipStatus.HISTORICAL
        : TipStatus.IN_PROGRESS;
    const result = isFullChecked
      ? isWon
        ? TipResult.WON
        : TipResult.LOST
      : TipResult.INITIAL;
    return {
      ...tip,
      status,
      result,
    };
  }

  private static addOutcomeResults(
    selectedOutcomes: Outcome[],
    matchesMap: Map<string, Match>
  ): Outcome[] {
    const selectedOutcomesWithResults: Outcome[] = [];
    if (Array.isArray(selectedOutcomes)) {
      selectedOutcomes.forEach((outcome) => {
        const match = matchesMap.get(
          outcome.match?.match_id || outcome.match?.id || ""
        );

        if (!match) {
          console.warn("Match not found for outcome:", outcome);
          return;
        }

        // Chercher le résultat dans la nouvelle structure scores.outcome_results
        let outcomeResult = OutcomeResult.Initial;

        if (match.scores?.outcome_results) {
          const outcomeResultData = match.scores.outcome_results.find(
            (or: any) => or.name === outcome.name && or.type === outcome.type
          );
          if (outcomeResultData) {
            outcomeResult = outcomeResultData.result as OutcomeResult;
          }
        } else {
          // Fallback vers l'ancienne structure match.outcomes
          const matchOutcomes = match?.outcomes;
          if (matchOutcomes) {
            const matchOutcome = matchOutcomes.find(
              (mo: any) => mo.name === outcome.name && mo.type === outcome.type
            );
            if (matchOutcome) {
              outcomeResult = matchOutcome.result || OutcomeResult.Initial;
            }
          }
        }

        selectedOutcomesWithResults.push({
          ...outcome,
          result: outcomeResult,
        });
      });
    }
    return selectedOutcomesWithResults;
  }

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
