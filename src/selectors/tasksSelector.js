import { createSelector } from "reselect";
export const tasksSelector = createSelector(
  (state) => state.get(`tasks`),
  (tasks) => tasks
);
