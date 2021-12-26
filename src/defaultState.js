import { fromJS } from "immutable";
// TODO... finalize value list
export const defaultState = fromJS({
  tasks: {},
  columns: {},
  columnOrder: [],
  loading: true,
  addColumnMode: false,
});
