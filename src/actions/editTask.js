import { makeActionCreator } from "../utility";
export const EDIT_TASK = "EDIT_TASK";
export const editTask = makeActionCreator(EDIT_TASK, "newTask");
