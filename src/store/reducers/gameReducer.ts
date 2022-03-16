import { GameAction, gameActionTypes, GameState } from "./../types/gameTypes";

const defaultState: GameState = {
  inGame: false,
  modal: { isOpen: false, data: null },
  isLoading: false,
  categories: [],
  currentScore: 0,
};

export default function gameReducer(
  state = defaultState,
  action: GameAction
): GameState {
  switch (action.type) {
    case gameActionTypes.START_GAME:
      return { ...state, isLoading: true, inGame: true };
    case gameActionTypes.END_GAME:
      return { ...state, inGame: false, currentScore: 0, categories: [] };
    case gameActionTypes.OPEN_MODAL:
      return { ...state, modal: action.payload };
    case gameActionTypes.CLOSE_MODAL:
      return { ...state, modal: { isOpen: false, data: null } };
    case gameActionTypes.LOAD_CATEGORIES:
      return { ...state, isLoading: false, categories: action.payload };
    case gameActionTypes.SET_USER_ANSWER:
      return {
        ...state,
        categories: state.categories?.map((category) => {
          if (category.id === action.payload.categoryId) {
            const newClue = category.clues?.map((clue) => {
              if (clue.id === action.payload.questionId) {
                return { ...clue, userAnswer: action.payload.answer };
              }
              return clue;
            });
            return { ...category, clues: newClue };
          }
          return category;
        }),
      };
    case gameActionTypes.ADD_CURRENT_SCORE:
      if (action.payload.isCorrect) {
        return {
          ...state,
          currentScore: state.currentScore + action.payload.score,
        };
      }
      return {
        ...state,
        currentScore: state.currentScore - action.payload.score,
      };
    default:
      return state;
  }
}
