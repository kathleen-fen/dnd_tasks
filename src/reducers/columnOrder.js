import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_COLUMN_ORDER } from "../actions";
export const columnOrder = createReducer(null, {
  [SET_COLUMN_ORDER](state, { columnOrder }) {
    return fromJS(columnOrder);
  },
});
