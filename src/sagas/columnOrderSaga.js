import { takeEvery, put, select } from "redux-saga/effects";

import { UPDATE_COLUMN_ORDER, setColumnOrder } from "../actions";
import { columnOrderSelector } from "./../selectors";
import * as Api from "./../api";

function* changeOrder(payload) {
  const { columnOrder } = payload;
  const prevColOrder = yield select(columnOrderSelector);
  yield put(setColumnOrder(columnOrder));
  try {
    const response = yield Api.putColumnOrder(columnOrder);
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* columnOrderSaga() {
  yield takeEvery(UPDATE_COLUMN_ORDER, changeOrder);
}
