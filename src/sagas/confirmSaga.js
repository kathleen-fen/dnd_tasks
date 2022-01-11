import { takeEvery, put, select, call } from "redux-saga/effects";

import { SET_CONFIRM_ACTION, setConfirm } from "../actions";

function* addColumn(payload) {
  try {
    yield put(setLoading(true));
    const { newColumn } = payload;
    const { data } = yield Api.addColumn(newColumn);
    yield call(Api.addColumnOrder, data.name);
    const column = { id: data.name, ...newColumn };
    const columns = yield select(columnsSelector);
    const columnOrder = yield select(columnOrderSelector);
    const newColumns = { ...columns, [data.name]: column };
    const newColumnOrder = [...columnOrder, data.name];
    yield put(setColumns(newColumns));
    yield put(setColumnOrder(newColumnOrder));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* addColumnSaga() {
  yield takeEvery(ADD_COLUMN, addColumn);
}
