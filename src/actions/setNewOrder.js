import { makeActionCreator } from "../utility";
export const SET_NEW_ORDER = "SET_NEW_ORDER";
export const setNewOrder = makeActionCreator(SET_NEW_ORDER, "result");
