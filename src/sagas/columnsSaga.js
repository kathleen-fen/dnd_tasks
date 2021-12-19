import { takeEvery, put, select } from "redux-saga/effects";
import { columnsSelector } from "./../selectors";

import { UPDATE_COLUMNS, setColumns } from "../actions";
import * as Api from "./../api";

function* changeOrder(payload) {
  const { columns } = payload;
  const prevCol = yield select(columnsSelector);
  console.log("prev: ", prevCol);
  try {
    yield put(setColumns(columns));
    const response = yield Api.putColumns(columns);
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* columnsSaga() {
  yield takeEvery(UPDATE_COLUMNS, changeOrder);
}
