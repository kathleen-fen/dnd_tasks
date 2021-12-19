import { createSelector } from "reselect";
export const addColumnModeSelector = createSelector(
  (state) => state.get(`addColumnMode`),
  (addColumnMode) => addColumnMode
);
