import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_ADD_COLUMN_MODE } from "../actions";
export const addColumnMode = createReducer(null, {
  [SET_ADD_COLUMN_MODE](state, { addColumnMode }) {
    return fromJS(addColumnMode);
  },
});
