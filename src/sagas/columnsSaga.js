import { takeEvery, put, select, call } from "redux-saga/effects";
import { columnsSelector } from "./../selectors";

import { UPDATE_COLUMNS, setColumns, setLoading } from "../actions";
import * as Api from "./../api";

function* changeOrder(payload) {
  const { columns } = payload;
  const prevCol = yield select(columnsSelector);
  yield put(setLoading(true));
  yield put(setColumns(columns));
  try {
    yield call(Api.putColumns, columns);
  } catch (error) {
    yield put(setColumns(prevCol));
    console.log("error in put: ", error);
  }
  yield put(setLoading(false));
}

export function* columnsSaga() {
  yield takeEvery(UPDATE_COLUMNS, changeOrder);
}
