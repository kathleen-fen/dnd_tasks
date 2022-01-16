import { createSelector } from "reselect";
export const confirmStatusSelector = createSelector(
  (state) => state.get(`confirmStatus`),
  (confirmStatus) => confirmStatus
);
