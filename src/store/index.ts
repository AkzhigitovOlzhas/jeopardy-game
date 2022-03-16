import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/rootReducer";
import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

export default store;
