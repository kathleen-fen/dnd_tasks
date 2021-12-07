import { makeActionCreator } from "../utility";
export const SET_TASKS = "SET_TASKS";
export const setTasks = makeActionCreator(SET_TASKS, "tasks");
