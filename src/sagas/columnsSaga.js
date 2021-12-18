import { takeEvery, put, select } from "redux-saga/effects";
import axios from "axios";
import { columnsSelector } from "./../selectors";

import { UPDATE_COLUMNS, setColumns } from "../actions";

function* changeOrder(payload) {
  const { columns } = payload;
  const prevCol = yield select(columnsSelector);
  console.log("prev: ", prevCol);
  try {
    yield put(setColumns(columns));
    const response = yield axios.put(
      "https://tasks-2df6f-default-rtdb.firebaseio.com/state/columns.json",
      columns
    );
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* columnsSaga() {
  yield takeEvery(UPDATE_COLUMNS, changeOrder);
}
