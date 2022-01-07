import { takeEvery, put, select, call } from "redux-saga/effects";

import { UPDATE_COLUMN_ORDER, setColumnOrder, setLoading } from "../actions";
import { columnOrderSelector } from "./../selectors";
import * as Api from "./../api";

function* changeOrder(payload) {
  const { columnOrder } = payload;
  const prevColOrder = yield select(columnOrderSelector);
  yield put(setColumnOrder(columnOrder));
  yield put(setLoading(true));
  try {
    yield call(Api.putColumnOrder, columnOrder);
  } catch (error) {
    yield put(setColumnOrder(prevColOrder));
    console.log("error in put: ", error);
  }
  yield put(setLoading(false));
}

export function* columnOrderSaga() {
  yield takeEvery(UPDATE_COLUMN_ORDER, changeOrder);
}
