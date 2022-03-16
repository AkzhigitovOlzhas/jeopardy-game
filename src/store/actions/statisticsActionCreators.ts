import {
  StatisticsAction,
  StatisticsActionTypes,
} from "../types/statisticsTypes";

export const setName = (name: string): StatisticsAction => ({
  type: StatisticsActionTypes.SET_USER_NAME,
  payload: name,
});

export const addAnsweredQuestion = (
  isCorrect: boolean,
  score: number
): StatisticsAction => ({
  type: StatisticsActionTypes.ADD_ANSWERED_QUESTION,
  payload: { isCorrect, score },
});
