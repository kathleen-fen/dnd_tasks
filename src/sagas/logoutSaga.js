import { takeEvery, put, call } from "redux-saga/effects";

import { LOGOUT, setLoading, setError, setAuth, setAuthData } from "../actions";

function* logout() {
  yield put(setLoading(true));
  try {
    //deleting auth data to localStorage
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("expiration");
    yield localStorage.removeItem("refreshToken");
    yield localStorage.removeItem("user");
    //delete auth data from state
    yield put(setAuth(false));
    yield put(
      setAuthData({
        token: null,
        expiration: null,
        user: null,
        refreshToken: null,
      })
    );
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT, logout);
}
