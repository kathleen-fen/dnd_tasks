import { createSelector } from "reselect";
import { columnSelector, columnsSelector } from "./index";
export const tasksSelector = createSelector(
  (state) => state.get(`tasks`).toJS(),
  (tasks) => tasks
);

export const columnTasksSelector = (id) => (state) => {
  const columns = columnsSelector(state);
  const column = columnSelector(id)(state);
  let tasks = [];
  console.log("column from task selector: ", column);
  if (!column) return tasks;
  const tasksObj = tasksSelector(state);

  if (column.taskIds) {
    tasks = column.taskIds.map((taskId) => tasksObj[taskId]);
  }
  return tasks;
};
