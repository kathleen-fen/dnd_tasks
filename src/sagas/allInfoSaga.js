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
  yield put(setColumnOrder(columnOrder));
  yield put(setColumns(columns));
  yield put(setTasks(tasks));
}
