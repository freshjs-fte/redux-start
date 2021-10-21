import { takeEvery, put } from "redux-saga/effects";
import { addTaskAsync, getTasksAsync } from "../../api";
import ACTION_TYPES from "../actions/actionTypes";

/* 
rootSaga = root reducer
watcherSaga = slice reducer
workSaga = case operations

takeEvery/takeLatest = case
put = dispatch
*/

// watcher saga
export function* watchTasks() {
  yield takeEvery(ACTION_TYPES.ADD_TASK_REQUESTED, addTaskRequest);
  yield takeEvery(ACTION_TYPES.GET_TASKS_REQUESTED, getTasksRequest);
}

// worker saga
function* addTaskRequest(action) {
  try {

    const data = yield addTaskAsync(action.payload);
    yield put({
        type: ACTION_TYPES.ADD_TASK_SUCCESSED,
        payload: { list: data },
      });

  } catch (error) {
    yield put({ type: ACTION_TYPES.ADD_TASK_ERROR, payload: { error } });
  }
}

function* getTasksRequest(action) {
  try {

    const data = yield getTasksAsync(action.payload);
    yield put({
      type: ACTION_TYPES.GET_TASKS_SUCCESSED,
      payload: { list: data },
    });

  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_TASKS_ERROR, payload: { error } });
  }
}
