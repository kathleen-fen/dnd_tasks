import { createSelector } from "reselect";
export const columnsSelector = createSelector(
  (state) => state.get(`columns`).toJS(),
  (columns) => columns
);

export const columnSelector = (id) => (state) => {
  const columns = columnsSelector(state);
  console.log("colummns from selector: ", columns);
  if (columns[id]) {
    return columns[id];
  } else {
    return null;
  }
};
