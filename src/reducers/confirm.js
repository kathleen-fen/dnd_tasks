import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_CONFIRM, SET_CONFIRM_STATUS } from "../actions";
export const confirm = createReducer(null, {
  [SET_CONFIRM](state, { confirm }) {
    return fromJS(confirm);
  },
});
export const confirmStatus = createReducer(null, {
  [SET_CONFIRM_STATUS](state, { confirmStatus }) {
    return fromJS(confirmStatus);
  },
});
