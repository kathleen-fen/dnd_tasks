import { makeActionCreator } from "../utility";
export const EDIT_COLUMN = "EDIT_COLUMN";
export const editColumn = makeActionCreator(EDIT_COLUMN, "column");
