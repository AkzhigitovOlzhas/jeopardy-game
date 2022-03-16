import { call, put, takeEvery } from "redux-saga/effects";
import { gameService } from "../../api/GameService";
import { loadCategories } from "../actions/gameActionCreators";
import { gameActionTypes } from "../types/gameTypes";

function* startGameWorker() {
  const categoriesArray = yield call(gameService.getCategories, 5);
  const categorieswithQuestions = [];

  for (let i = 0; i < categoriesArray.length; i++) {
    const categoryWithQuestion = yield call(
      gameService.getQuestions,
      categoriesArray[i].id
    );
    categorieswithQuestions.push(categoryWithQuestion);
  }
  yield put(loadCategories(categorieswithQuestions));
}

export function* startGameWathcer() {
  yield takeEvery(gameActionTypes.START_GAME, startGameWorker);
}
