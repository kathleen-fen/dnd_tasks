import { makeActionCreator } from "../utility";
export const SET_ADD_COLUMN_MODE = "SET_ADD_COLUMN_MODE";
export const setAddColumnMode = makeActionCreator(
  SET_ADD_COLUMN_MODE,
  "addColumnMode"
);
