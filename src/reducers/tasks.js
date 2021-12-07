import { createReducer } from "../utility";
import { fromJS } from "immutable";
import { SET_TASKS } from "../actions";
export const tasks = createReducer(null, {
  [SET_TASKS](state, { tasks }) {
    return fromJS(tasks);
  },
});
