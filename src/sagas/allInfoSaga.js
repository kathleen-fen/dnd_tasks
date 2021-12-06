import { take, call, put, apply } from "redux-saga/effects";
import axios from "axios";

import { GET_ALL_INFO, setColumns } from "./../actions";
export function* allInfoSaga() {
  yield take(GET_ALL_INFO);
  const response = yield axios.get(
    "https://tasks-2df6f-default-rtdb.firebaseio.com/state.json"
  );
  console.log("saga response: ", response.data);
  //  const data = yield apply(response, response.json)
  //  yield put(setCurrentUser(data))
}
