import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_ERROR } from "../actions";
export const error = createReducer(null, {
  [SET_ERROR](state, { error }) {
    return fromJS(error);
  },
});
