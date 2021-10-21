import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watchTasks } from "./tasks";

export const sagaMW = createSagaMiddleware();

export default function* rootSaga() {
  // проверяет все подряд
  yield all([
    watchTasks(),
    // watch sagas
  ]);
}
