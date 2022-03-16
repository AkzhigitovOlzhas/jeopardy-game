import { ICategory, UserAnswer } from "../../types/gameTypes";
import { GameAction, gameActionTypes, Modal } from "../types/gameTypes";

const startGame = (): GameAction => ({ type: gameActionTypes.START_GAME });
const endGame = (): GameAction => ({ type: gameActionTypes.END_GAME });

const loadCategories = (categories: ICategory[]): GameAction => ({
  type: gameActionTypes.LOAD_CATEGORIES,
  payload: categories,
});

const setUserAnswer = (userAnswer: UserAnswer): GameAction => ({
  type: gameActionTypes.SET_USER_ANSWER,
  payload: userAnswer,
});

const openModal = (modalData: Modal): GameAction => ({
  type: gameActionTypes.OPEN_MODAL,
  payload: modalData,
});

const closeModal = (): GameAction => ({
  type: gameActionTypes.CLOSE_MODAL,
});

const addCurrentScore = (isCorrect: boolean, score: number): GameAction => ({
  type: gameActionTypes.ADD_CURRENT_SCORE,
  payload: { isCorrect, score },
});

export {
  startGame,
  endGame,
  setUserAnswer,
  loadCategories,
  openModal,
  closeModal,
  addCurrentScore,
};
