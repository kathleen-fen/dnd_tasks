import { takeEvery, put, select, call } from "redux-saga/effects";

import {
  ADD_TASK,
  setTasks,
  setColumns,
  setLoading,
  setError,
} from "../actions";
import { tasksSelector, columnsSelector, authDataSelector } from "../selectors";
import * as Api from "./../api";
import { InitialColumnId } from "./../settings";

function* addTask(payload) {
  try {
    yield put(setLoading(true));
    const { newTask } = payload;
    yield Api.checkAuth();
    const { token } = yield select(authDataSelector);
    const { data } = yield call(Api.addTask, newTask, token);
    const task = { id: data.name, ...newTask };
    const tasks = yield select(tasksSelector);
    const newTasks = { ...tasks, [data.name]: task };

    const columns = yield select(columnsSelector);

    const newColumns = {
      ...columns,
      [InitialColumnId]: {
        ...columns[InitialColumnId],
        taskIds: columns[InitialColumnId].taskIds
          ? [...columns[InitialColumnId].taskIds, data.name]
          : [data.name],
      },
    };
    yield call(
      Api.putTaskIds,
      InitialColumnId,
      columns[InitialColumnId].taskIds
        ? [...columns[InitialColumnId].taskIds, data.name]
        : [data.name],
      token
    );

    yield put(setTasks(newTasks));
    yield put(setColumns(newColumns));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* addTaskSaga() {
  yield takeEvery(ADD_TASK, addTask);
}
