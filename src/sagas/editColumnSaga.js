import { takeEvery, put, select, call } from "redux-saga/effects";

import { EDIT_COLUMN, setLoading, setColumns, setError } from "../actions";
import {
  columnSelector,
  columnsSelector,
  authDataSelector,
} from "../selectors";
import * as Api from "./../api";

function* editColumn(payload) {
  const columns = yield select(columnsSelector);

  try {
    yield put(setLoading(true));
    const { columnId, columnTitle } = payload.column;

    const column = yield select(columnSelector(columnId));
    const newColumn = { ...column, title: columnTitle };
    //edit in state
    yield put(setColumns({ ...columns, [columnId]: { ...newColumn } }));
    // edit in database
    yield Api.checkAuth();
    const { token } = yield select(authDataSelector);
    yield call(Api.editColumn, columnId, columnTitle, token);
  } catch (error) {
    yield put(setError(error));
    yield put(setColumns({ ...columns }));
  }
  yield put(setLoading(false));
}

export function* editColumnSaga() {
  yield takeEvery(EDIT_COLUMN, editColumn);
}
