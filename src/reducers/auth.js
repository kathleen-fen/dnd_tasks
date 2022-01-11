import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_AUTH, SET_AUTH_DATA } from "../actions";
export const auth = createReducer(null, {
  [SET_AUTH](state, { auth }) {
    return fromJS(auth);
  },
});

export const authData = createReducer(null, {
  [SET_AUTH_DATA](state, { authData }) {
    return fromJS(authData);
  },
});
