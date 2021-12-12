import { createSelector } from "reselect";
export const loadingSelector = createSelector(
  (state) => state.get(`loading`),
  (loading) => loading
);
