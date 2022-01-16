import { makeActionCreator } from "../utility";
export const UPDATE_COLUMN_ORDER = "UPDATE_COLUMN_ORDER";
export const updateColumnOrder = makeActionCreator(
  UPDATE_COLUMN_ORDER,
  "columnOrder"
);
