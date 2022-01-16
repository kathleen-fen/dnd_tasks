import { createSelector } from "reselect";
export const authSelector = createSelector(
  (state) => state.get(`auth`),
  (auth) => auth
);

export const authDataSelector = createSelector(
  (state) => state.get(`authData`).toJS(),
  (authData) => authData
);
