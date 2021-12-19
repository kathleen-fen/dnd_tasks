import axios from "axios";

import { Api_url } from "./../settings";

export const getAllState = () => {
  return axios.get(`${Api_url}/state.json`);
};

export const putColumnOrder = (columnOrder) => {
  axios.put(`${Api_url}/state/columnOrder.json`, columnOrder);
};

export const putColumns = (columns) => {
  axios.put(`${Api_url}/state/columns.json`, columns);
};
