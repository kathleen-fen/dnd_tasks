import { fromJS } from "immutable";
// TODO... finalize value list
export const defaultState = fromJS({
  tasks: {},
  columns: {},
  columnOrder: [],
  loading: true,
  addMode: false,
  error: null,
  confirmStatus: false,
  confirm: {
    message: null,
    act: {},
  },
  auth: false,
  authData: {
    token: null,
    expiration: null,
    user: null,
  },
});
