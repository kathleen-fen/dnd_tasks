import { takeEvery, put, select } from "redux-saga/effects";

import {
  DELETE_COLUMN,
  setLoading,
  setColumns,
  setColumnOrder,
} from "../actions";
import {
  columnsSelector,
  columnOrderSelector,
  columnSelector,
} from "./../selectors";
import * as Api from "./../api";
import { InitialColumnId } from "./../settings";

function* deleteColumn(payload) {
  try {
    yield put(setLoading(true));
    const { columnId } = payload.column;
    const column = yield select(columnSelector(columnId));
    const storageColumn = yield select(columnSelector(InitialColumnId));
    const columnOrder = yield select(columnOrderSelector);
    console.log("column: ", column);
    console.log("storageColumn: ", storageColumn);
    console.log("columnOrder: ", columnOrder);
    const storageTaskIds = storageColumn.taskIds
      ? [...storageColumn.taskIds]
      : [];
    const columnTaskIds = column.taskIds ? [...column.taskIds] : [];
    const newStorageColumn = {
      ...storageColumn,
      taskIds: [...storageTaskIds, ...columnTaskIds],
    };
    const newColumnOrder = columnOrder.filter((el) => el !== columnId);
    console.log("newStorageColumn: ", newStorageColumn);
    console.log("newColumnOrder: ", newColumnOrder);

    //delete from columnOrder
    yield Api.putColumnOrder(newColumnOrder);
    //edit storage column
    yield Api.editColumnTaskIds(InitialColumnId, [
      ...storageTaskIds,
      ...columnTaskIds,
    ]);
    //delete column
    yield Api.deleteColumnFromColumns(columnId);

    //delete from state
    const columns = yield select(columnsSelector);
    yield put(setColumns({ ...columns, [InitialColumnId]: newStorageColumn }));
    yield put(setColumnOrder(newColumnOrder));
  } catch (error) {
    console.log("error in put: ", error);
  }
  yield put(setLoading(false));
}

export function* deleteColumnSaga() {
  yield takeEvery(DELETE_COLUMN, deleteColumn);
}
