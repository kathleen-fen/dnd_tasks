import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_ADD_MODE } from "../actions";
export const addMode = createReducer(null, {
  [SET_ADD_MODE](state, { addMode }) {
    return fromJS(addMode);
  },
});
