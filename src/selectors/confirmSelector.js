import { createSelector } from "reselect";
export const confirmSelector = createSelector(
  (state) => state.get(`confirm`).toJS(),
  (confirm) => confirm
);
