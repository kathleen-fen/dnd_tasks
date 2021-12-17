import { take, put } from "redux-saga/effects";
import axios from "axios";

import { SET_NEW_ORDER } from "./../actions";
export function* newOrderSaga() {
  const res = yield take(SET_NEW_ORDER);
  console.log("order saga res: ", res);
  /* yield take(GET_ALL_INFO);
  const response = yield axios.get(
    "https://tasks-2df6f-default-rtdb.firebaseio.com/state.json"
  );
  const { columns, columnOrder, tasks } = response.data;
  console.log("saga response columns: ", columns);
  console.log("saga response columnOrder: ", columnOrder);
  console.log("saga response tasks: ", tasks);

  yield put(setColumnOrder(columnOrder));
  yield put(setColumns(columns));
  yield put(setTasks(tasks)); */

  //  const data = yield apply(response, response.json)
  //  yield put(setCurrentUser(data))
}
