import { takeEvery, put, select, call } from "redux-saga/effects";

import {
  ADD_COLUMN,
  setColumnOrder,
  setColumns,
  setLoading,
  setError,
} from "../actions";
import {
  columnsSelector,
  columnOrderSelector,
  authDataSelector,
} from "../selectors";
import * as Api from "./../api";

function* addColumn(payload) {
  const { token } = yield select(authDataSelector);
  try {
    yield put(setLoading(true));
    const { newColumn } = payload;
    const { data } = yield Api.addColumn(newColumn, token);
    yield call(Api.addColumnOrder, data.name, token);
    const column = { id: data.name, ...newColumn };
    const columns = yield select(columnsSelector);
    const columnOrder = yield select(columnOrderSelector);
    const newColumns = { ...columns, [data.name]: column };
    const newColumnOrder = [...columnOrder, data.name];
    yield put(setColumns(newColumns));
    yield put(setColumnOrder(newColumnOrder));
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* addColumnSaga() {
  yield takeEvery(ADD_COLUMN, addColumn);
}
