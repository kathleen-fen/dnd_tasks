import { makeActionCreator } from "../utility";
export const SET_CONFIRM_STATUS = "SET_CONFIRM_STATUS";
export const setConfirmStatus = makeActionCreator(
  SET_CONFIRM_STATUS,
  "confirmStatus"
);
