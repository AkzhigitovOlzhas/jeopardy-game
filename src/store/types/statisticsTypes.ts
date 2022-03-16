export enum StatisticsActionTypes {
  SET_USER_NAME = "SET_USER_NAME",
  ADD_ANSWERED_QUESTION = "ADD_ANSWERED_QUESTION",
}

export interface StatisticsState {
  userName: string | null;
  countAnsweredQuestions: number;
  countCorrectAnswers: number;
  countWrongAnswers: number;
  totalScore: number;
}

type setUserNameAction = {
  type: StatisticsActionTypes.SET_USER_NAME;
  payload: string;
};

type addAnsweredQuestionAction = {
  type: StatisticsActionTypes.ADD_ANSWERED_QUESTION;
  payload: { isCorrect: boolean; score: number };
};

export type StatisticsAction = setUserNameAction | addAnsweredQuestionAction;
