import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import statisticsReducer from "./statisticReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
