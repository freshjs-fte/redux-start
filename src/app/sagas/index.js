import { takeLatest, put } from "redux-saga/effects";
import { addTaskAsync } from "../../api";
import ACTION_TYPES from "../actions/actionTypes";

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPES.ADD_TASK_REQUESTED, addTaskSaga);
}

function* addTaskSaga(action) {
  try {
    const result = action.data;
    yield put({
      type: ACTION_TYPES.ADD_TASK_SUCCESSED,
      data: result,
    });
  } catch (error) {
    // TODO error
    yield;
  }
}
