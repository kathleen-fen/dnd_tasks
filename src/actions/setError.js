import { makeActionCreator } from "../utility";
export const SET_ERROR = "SET_ERROR";
export const setError = makeActionCreator(SET_ERROR, "error");
