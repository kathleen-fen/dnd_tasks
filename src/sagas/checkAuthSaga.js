import { take, put } from "redux-saga/effects";
import { eventChannel } from "@redux-saga/core";
import { auth } from "../actions";

export function* checkAuthSaga() {
  const check = new eventChannel((emit) => {
    const iv = setInterval(() => {
      const expiration = localStorage.getItem("expiration");

      if (expiration) {
        const now = new Date();
        const expirationDate = new Date(new Date(expiration) - 60000);
        if (now >= expirationDate) {
          emit(true);
        } else {
          emit(false);
        }
      }
    }, 1000);
    return () => {
      clearInterval(iv);
    };
  });
  while (true) {
    const refresh = yield take(check);
    if (refresh) {
      yield put(auth());
    }
  }
}
