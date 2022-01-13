import { takeEvery, put, select, call } from "redux-saga/effects";

import { DELETE_TASK, setLoading, setColumns, setError } from "../actions";
import { columnsSelector, authDataSelector } from "./../selectors";
import * as Api from "./../api";

function* deleteTask(payload) {
  const { token } = yield select(authDataSelector);
  try {
    yield put(setLoading(true));
    const { columnId, taskIndex, taskId } = payload.task;
    //delete from database
    yield call(Api.deleteTaskFromColumn, columnId, taskIndex, token);
    yield call(Api.deleteTaskFromTasks, taskId, token);
    //delete from state
    const columns = yield select(columnsSelector);
    const newTaskIds = [...columns[columnId].taskIds];
    newTaskIds.splice(taskIndex, 1);
    yield put(
      setColumns({
        ...columns,
        [columnId]: {
          ...columns[columnId],
          taskIds: newTaskIds,
        },
      })
    );
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* deleteTaskSaga() {
  yield takeEvery(DELETE_TASK, deleteTask);
}
