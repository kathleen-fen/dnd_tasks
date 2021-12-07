import { makeActionCreator } from "../utility";
export const SET_COLUMN_ORDER = "SET_COLUMN_ORDER";
export const setColumnOrder = makeActionCreator(
  SET_COLUMN_ORDER,
  "columnOrder"
);
