import { takeEvery, put, select, call } from "redux-saga/effects";

import { SIGNIN, setLoading, setError, setAuth, setAuthData } from "../actions";
import {} from "../selectors";
import * as Api from "./../api";

function* signin(payload) {
  yield put(setLoading(true));
  const { login, password } = payload.data;
  try {
    const { data } = yield call(Api.signin, login, password);

    console.log("responce: ", data);
    const now = new Date();
    const expiration = new Date(+now + data.expiresIn * 1000);
    //saving auth data to localStorage
    yield localStorage.setItem("token", data.idToken);
    yield localStorage.setItem("expiration", expiration);
    yield localStorage.setItem("refreshToken", data.refreshToken);
    //put auth data to state
    console.log("setAuth(true): ", setAuth(true));
    yield put(setAuth(true));
    yield put(
      setAuthData({
        token: data.idToken,
        expiration: expiration,
        user: data.email,
      })
    );
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* signinSaga() {
  yield takeEvery(SIGNIN, signin);
}
