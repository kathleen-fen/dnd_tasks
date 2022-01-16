import { makeActionCreator } from "../utility";
export const UPDATE_COLUMNS = "UPDATE_COLUMNS";
export const updateColumns = makeActionCreator(UPDATE_COLUMNS, "columns");
