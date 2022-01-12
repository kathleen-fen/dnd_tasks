import { takeEvery, put, select, call } from "redux-saga/effects";
import { columnsSelector, authDataSelector } from "./../selectors";

import { UPDATE_COLUMNS, setColumns, setLoading, setError } from "../actions";
import * as Api from "./../api";

function* changeOrder(payload) {
  const { token } = yield select(authDataSelector);
  const { columns } = payload;
  const prevCol = yield select(columnsSelector);
  yield put(setLoading(true));
  yield put(setColumns(columns));
  try {
    yield call(Api.putColumns, columns, token);
  } catch (error) {
    yield put(setError(error));
    yield put(setColumns(prevCol));
  }
  yield put(setLoading(false));
}

export function* columnsSaga() {
  yield takeEvery(UPDATE_COLUMNS, changeOrder);
}
