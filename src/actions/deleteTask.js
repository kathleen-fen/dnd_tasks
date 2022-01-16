import { makeActionCreator } from "../utility";
export const DELETE_TASK = "DELETE_TASK";
export const deleteTask = makeActionCreator(DELETE_TASK, "task");
