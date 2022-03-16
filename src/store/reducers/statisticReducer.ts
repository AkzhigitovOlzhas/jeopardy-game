import {
  StatisticsAction,
  StatisticsActionTypes,
  StatisticsState,
} from "../types/statisticsTypes";

function initState(): StatisticsState {
  if (localStorage.getItem("statistics")) {
    const stats = JSON.parse(localStorage.getItem("statistics")!);
    return { userName: localStorage.getItem("userName") || null, ...stats };
  }
  return {
    userName: localStorage.getItem("userName") || null,
    countAnsweredQuestions: 0,
    countCorrectAnswers: 0,
    countWrongAnswers: 0,
    totalScore: 0,
  };
}

export default function statisticsReducer(
  state = initState(),
  action: StatisticsAction
): StatisticsState {
  switch (action.type) {
    case StatisticsActionTypes.SET_USER_NAME:
      return { ...state, userName: action.payload };
    case StatisticsActionTypes.ADD_ANSWERED_QUESTION:
      let newState;
      if (action.payload.isCorrect) {
        newState = {
          ...state,
          countAnsweredQuestions: state.countAnsweredQuestions + 1,
          countCorrectAnswers: state.countCorrectAnswers + 1,
          totalScore: state.totalScore + action.payload.score,
        };
        localStorage.setItem("statistics", JSON.stringify(newState));
        return newState;
      }
      newState = {
        ...state,
        countAnsweredQuestions: state.countAnsweredQuestions + 1,
        countWrongAnswers: state.countWrongAnswers + 1,
        totalScore: state.totalScore - action.payload.score,
      };
      localStorage.setItem("statistics", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}
