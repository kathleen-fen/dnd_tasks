import { take, put } from "redux-saga/effects";

import * as Api from "./../api";
import {
  GET_ALL_INFO,
  setColumns,
  setTasks,
  setColumnOrder,
} from "./../actions";

export function* allInfoSaga() {
  yield take(GET_ALL_INFO);
  const response = yield Api.getAllState();
  const { columns, columnOrder, tasks } = response.data;
  Object.keys(columns).forEach((el) => {
    columns[el].id = el;
    const taskIds = columns[el].taskIds;
    const newTaskIds = [];
    if (taskIds && !Array.isArray(taskIds)) {
      Object.keys(taskIds).forEach((item) => {
        newTaskIds.push(taskIds[item]);
      });
      columns[el].taskIds = newTaskIds;
    }
  });
  Object.keys(tasks).forEach((el) => {
    tasks[el].id = el;
  });
  const newColumnOrder = [];
  Object.keys(columnOrder).forEach((el) => {
    newColumnOrder.push(columnOrder[el]);
  });
  console.log("columns: ", columns);
  yield put(setColumnOrder(newColumnOrder));
  yield put(setColumns(columns));
  yield put(setTasks(tasks));
}
