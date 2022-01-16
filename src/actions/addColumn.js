import { makeActionCreator } from "../utility";
export const ADD_COLUMN = "ADD_COLUMN";
export const addColumn = makeActionCreator(ADD_COLUMN, "newColumn");
