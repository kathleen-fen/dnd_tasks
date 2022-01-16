import { makeActionCreator } from "../utility";
export const LOGOUT = "LOGOUT";
export const logout = makeActionCreator(LOGOUT, "auth");
