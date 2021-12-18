import { takeEvery, put, select } from "redux-saga/effects";
import axios from "axios";

import { UPDATE_COLUMN_ORDER, setColumnOrder } from "../actions";
import { columnOrderSelector } from "./../selectors";

function* changeOrder(payload) {
  const { columnOrder } = payload;
  const prevColOrder = yield select(columnOrderSelector);
  yield put(setColumnOrder(columnOrder));
  try {
    const response = yield axios.put(
      "https://tasks-2df6f-default-rtdb.firebaseio.com/state/columnOrder.json",
      columnOrder
    );
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* columnOrderSaga() {
  yield takeEvery(UPDATE_COLUMN_ORDER, changeOrder);
}
