import { makeActionCreator } from "../utility";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const deleteColumn = makeActionCreator(DELETE_COLUMN, "column");
