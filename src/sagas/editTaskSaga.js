import { takeEvery, put, select, call } from "redux-saga/effects";

import { EDIT_TASK, setLoading, setTasks } from "../actions";
import { tasksSelector } from "../selectors";
import * as Api from "./../api";

function* editTask(payload) {
  yield put(setLoading(true));
  const { content, id } = payload.newTask;
  const tasks = yield select(tasksSelector);
  const newTasks = { ...tasks, [id]: { ...tasks[id], content: content } };
  yield put(setTasks(newTasks));
  try {
    yield call(Api.editTask, id, content);
  } catch (error) {
    yield put(setTasks(tasks));
    console.log("error in patch: ", error);
  }
  yield put(setLoading(false));
}

export function* editTaskSaga() {
  yield takeEvery(EDIT_TASK, editTask);
}
