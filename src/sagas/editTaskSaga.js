import { takeEvery, put, select, call } from "redux-saga/effects";

import { EDIT_TASK, setLoading, setTasks, setError } from "../actions";
import { tasksSelector, authDataSelector } from "../selectors";
import * as Api from "./../api";

function* editTask(payload) {
  yield put(setLoading(true));
  const { content, id } = payload.newTask;
  const tasks = yield select(tasksSelector);
  const newTasks = { ...tasks, [id]: { ...tasks[id], content: content } };
  yield put(setTasks(newTasks));
  try {
    yield Api.checkAuth();
    const { token } = yield select(authDataSelector);
    yield call(Api.editTask, id, content, token);
  } catch (error) {
    yield put(setTasks(tasks));
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* editTaskSaga() {
  yield takeEvery(EDIT_TASK, editTask);
}
