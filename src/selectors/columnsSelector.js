import { createSelector } from "reselect";
export const columnsSelector = createSelector(
  (state) => state.get(`columns`),
  (columns) => columns
);
