import { createReducer } from "./../utility";
import { fromJS } from "immutable";
import { SET_COLUMNS } from "../actions";
export const setColumns = createReducer(null, {
  [SET_COLUMNS](state, { columns }) {
    return fromJS(columns);
  },
});
