import { all } from "redux-saga/effects";
import { startGameWathcer } from "./gameSaga";

export function* rootWatcher() {
  yield all([startGameWathcer()]);
}
