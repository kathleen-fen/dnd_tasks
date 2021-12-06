import { createSelector } from "reselect";
export const columnOrderSelector = createSelector(
  (state) => state.get(`columnOrder`),
  (columnOrder) => columnOrder
);
