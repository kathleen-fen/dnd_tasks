import { takeEvery, put, select } from "redux-saga/effects";

import { EDIT_COLUMN, setLoading, setColumns } from "../actions";
import { columnSelector, columnsSelector } from "../selectors";
import * as Api from "./../api";

function* editColumn(payload) {
  try {
    yield put(setLoading(true));
    const { columnId, columnTitle } = payload.column;
    const columns = yield select(columnsSelector);
    const column = yield select(columnSelector(columnId));
    const newColumn = { ...column, title: columnTitle };
    //edit in state
    yield put(setColumns({ ...columns, [columnId]: { ...newColumn } }));
    // edit in database
    yield Api.editColumn(columnId, columnTitle);
  } catch (error) {
    console.log("error in patch: ", error);
  }
  yield put(setLoading(false));
}

export function* editColumnSaga() {
  yield takeEvery(EDIT_COLUMN, editColumn);
}
