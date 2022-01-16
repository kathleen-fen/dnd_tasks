import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_LOADING } from "../actions";
export const loading = createReducer(null, {
  [SET_LOADING](state, { loading }) {
    return fromJS(loading);
  },
});
