import { takeEvery, put, select } from "redux-saga/effects";

import { DELETE_TASK } from "../actions";
import * as Api from "./../api";

function* deleteTask(payload) {
  try {
    console.log("delete payload: ", payload);
    const { columnId, taskIndex, taskId } = payload.task;
    yield Api.deleteTaskFromColumn(columnId, taskIndex);
    yield Api.deleteTaskFromTasks(taskId);
    console.log("delete payload: ", payload);
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* deleteTaskSaga() {
  yield takeEvery(DELETE_TASK, deleteTask);
}
