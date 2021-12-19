import { takeEvery, take, put, select } from "redux-saga/effects";

import { ADD_COLUMN, setColumnOrder, setColumns } from "../actions";
import { columnsSelector, columnOrderSelector } from "../selectors";
import * as Api from "./../api";

function* addColumn(payload) {
  try {
    const { newColumn } = payload;
    const { data } = yield Api.addColumn(newColumn);
    console.log("saga res: ", data.name);
    const column = { id: data.name, ...newColumn };
    const columns = yield select(columnsSelector);
    const columnOrder = yield select(columnOrderSelector);
    const newColumns = { ...columns, [data.name]: column };
    const newColumnOrder = [...columnOrder, data.name];
    yield put(setColumns(newColumns));
    yield put(setColumnOrder(newColumnOrder));
  } catch (error) {
    console.log("error in put: ", error);
  }
}

export function* addColumnSaga() {
  yield takeEvery(ADD_COLUMN, addColumn);
  // const res = yield take(ADD_COLUMN);
  // console.log("saga res: ", res);
}
