import { makeActionCreator } from "../utility";
export const SET_AUTH = "SET_AUTH";
export const setAuth = makeActionCreator(SET_AUTH, "auth");

export const SET_AUTH_DATA = "SET_AUTH_DATA";
export const setAuthData = makeActionCreator(SET_AUTH_DATA, "authData");
