import { createSelector } from "reselect";
export const addModeSelector = createSelector(
  (state) => state.get(`addMode`),
  (addMode) => addMode
);
