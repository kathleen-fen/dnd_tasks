import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_COLUMNS } from "../actions";
export const columns = createReducer(null, {
  [SET_COLUMNS](state, { columns }) {
    return fromJS(columns);
  },
});
