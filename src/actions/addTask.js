import { makeActionCreator } from "../utility";
export const ADD_TASK = "ADD_TASK";
export const addTask = makeActionCreator(ADD_TASK, "newTask");
