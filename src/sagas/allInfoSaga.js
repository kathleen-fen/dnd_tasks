import { take, put, call, select } from "redux-saga/effects";

import * as Api from "./../api";
import {
  GET_ALL_INFO,
  setColumns,
  setTasks,
  setColumnOrder,
  setLoading,
  setError,
} from "./../actions";
import { authDataSelector } from "./../selectors";

export function* allInfoSaga() {
  yield take(GET_ALL_INFO);
  // const { token } = yield select(authDataSelector);
  yield put(setLoading(true));
  try {
    yield Api.checkAuth();
    const { token } = yield select(authDataSelector);
    const response = yield call(Api.getAllState, token);
    let { columns, columnOrder, tasks } = response.data;
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
    tasks
      ? Object.keys(tasks).forEach((el) => {
          tasks[el].id = el;
        })
      : (tasks = {});
    const newColumnOrder = [];
    Object.keys(columnOrder).forEach((el) => {
      newColumnOrder.push(columnOrder[el]);
    });
    yield put(setColumnOrder(newColumnOrder));
    yield put(setColumns(columns));
    yield put(setTasks(tasks));
  } catch (e) {
    yield put(setError(e));
  }
  yield put(setLoading(false));
}
