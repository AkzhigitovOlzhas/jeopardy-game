import { IQuestion, ICategory, UserAnswer } from "../../types/gameTypes";

export enum gameActionTypes {
  START_GAME = "START_GAME",
  END_GAME = "END_GAME",
  LOAD_CATEGORIES = "LOAD_CATEGORIES",
  LOAD_QUESTIONS = "LOAD_QUESTIONS",
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
  SET_USER_ANSWER = "SET_USER_ANSWER",
  ADD_CURRENT_SCORE = "ADD_CURRENT_SCORE",
}

export type Modal = {
  isOpen: boolean;
  data: IQuestion | null;
};

export interface GameState {
  inGame: boolean;
  isLoading: boolean;
  categories?: ICategory[];
  modal: Modal;
  currentScore: number;
}

type StartGameAction = {
  type: gameActionTypes.START_GAME;
};

type EndGameAction = {
  type: gameActionTypes.END_GAME;
};

type LoadCategoriesAction = {
  type: gameActionTypes.LOAD_CATEGORIES;
  payload: ICategory[];
};

type OpenModalAction = {
  type: gameActionTypes.OPEN_MODAL;
  payload: Modal;
};

type CloseModalAction = {
  type: gameActionTypes.CLOSE_MODAL;
};

type SetUserAnswer = {
  type: gameActionTypes.SET_USER_ANSWER;
  payload: UserAnswer;
};

type addCurrentScoreAction = {
  type: gameActionTypes.ADD_CURRENT_SCORE;
  payload: { isCorrect: boolean; score: number };
};

export type GameAction =
  | StartGameAction
  | EndGameAction
  | LoadCategoriesAction
  | CloseModalAction
  | OpenModalAction
  | SetUserAnswer
  | addCurrentScoreAction;
