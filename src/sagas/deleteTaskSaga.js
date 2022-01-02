import { takeEvery, put, select } from "redux-saga/effects";

import { DELETE_TASK, setLoading, setColumns } from "../actions";
import { columnsSelector } from "./../selectors";
import * as Api from "./../api";

function* deleteTask(payload) {
  try {
    yield put(setLoading(true));
    const { columnId, taskIndex, taskId } = payload.task;
    //delete from database
    yield Api.deleteTaskFromColumn(columnId, taskIndex);
    yield Api.deleteTaskFromTasks(taskId);
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
    console.log("error in put: ", error);
  }
  yield put(setLoading(false));
}

export function* deleteTaskSaga() {
  yield takeEvery(DELETE_TASK, deleteTask);
}
