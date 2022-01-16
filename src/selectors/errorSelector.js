import { createSelector } from "reselect";
export const errorSelector = createSelector(
  (state) => state.get(`error`),
  (error) => error
);
