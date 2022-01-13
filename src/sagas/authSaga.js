//TODO to add call effect...
import { takeEvery, put } from "redux-saga/effects";

import { setLoading, setError, setAuth, setAuthData, AUTH } from "../actions";
import * as Api from "../api";

function* auth() {
  yield put(setLoading(true));
  try {
    // getting auth data from localStorage
    const token = yield localStorage.getItem("token");
    const expirationData = yield localStorage.getItem("expiration");
    const expiration = new Date(expirationData);
    const user = yield localStorage.getItem("user");
    const refreshToken = yield localStorage.getItem("refreshToken");
    const now = new Date();
    // check token, if expired - refresh
    if (token && expiration > now) {
      yield put(
        setAuthData({
          token,
          expiration,
          user,
          refreshToken,
        })
      );
      yield put(setAuth(true));
    } else if (refreshToken) {
      const { data } = yield Api.refreshToken(refreshToken);
      // set new auth data to the localStorage
      yield localStorage.setItem("token", data.id_token);
      yield localStorage.setItem("refreshToken", data.refresh_token);
      const newExpiration = new Date(+now + data.expires_in * 1000);
      yield localStorage.setItem("expiration", newExpiration);
      //set auth data to the state
      yield put(
        setAuthData({
          token: data.id_token,
          expiration: newExpiration,
          user,
          refreshToken: data.refresh_token,
        })
      );
      yield put(setAuth(true));
    }
  } catch (error) {
    yield put(setError(error));
    yield put(
      setAuthData({
        token: null,
        expiration: null,
        user: null,
        refreshToken: null,
      })
    );
    yield put(setAuth(false));
  }
  yield put(setLoading(false));
}

export function* authSaga() {
  yield takeEvery(AUTH, auth);
}
