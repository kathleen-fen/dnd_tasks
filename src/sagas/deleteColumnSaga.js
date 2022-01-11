import { takeEvery, put, select, call } from "redux-saga/effects";

import {
  DELETE_COLUMN,
  setLoading,
  setColumns,
  setColumnOrder,
  setError,
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
    const storageTaskIds = storageColumn.taskIds
      ? [...storageColumn.taskIds]
      : [];
    const columnTaskIds = column.taskIds ? [...column.taskIds] : [];
    const newStorageColumn = {
      ...storageColumn,
      taskIds: [...storageTaskIds, ...columnTaskIds],
    };
    const newColumnOrder = columnOrder.filter((el) => el !== columnId);

    //delete from columnOrder
    yield call(Api.putColumnOrder, newColumnOrder);
    //edit storage column
    yield call(Api.editColumnTaskIds, InitialColumnId, [
      ...storageTaskIds,
      ...columnTaskIds,
    ]);
    //delete column
    yield call(Api.deleteColumnFromColumns, columnId);

    //delete from state
    const columns = yield select(columnsSelector);
    const newColumns = { ...columns };
    delete newColumns[columnId];
    yield put(
      setColumns({ ...newColumns, [InitialColumnId]: newStorageColumn })
    );
    yield put(setColumnOrder(newColumnOrder));
  } catch (error) {
    yield put(setError(String(error) + "delete saga"));
  }
  yield put(setLoading(false));
}

export function* deleteColumnSaga() {
  yield takeEvery(DELETE_COLUMN, deleteColumn);
}
