import { createSelector } from "reselect";
export const authSelector = createSelector(
  (state) => state.get(`auth`),
  (auth) => auth
);
