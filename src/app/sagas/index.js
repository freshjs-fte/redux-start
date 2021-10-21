import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

export const sagaMW = createSagaMiddleware();

export default function* rootSaga() {
  // проверяет все подряд
  yield all([
    // watch sagas
  ]);
}
