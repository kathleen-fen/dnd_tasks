import axios from "axios";

import { Api_url } from "./../settings";

export const getAllState = () => {
  return axios.get(`${Api_url}/state.json`);
};

export const putColumnOrder = (columnOrder) => {
  return axios.put(`${Api_url}/state/columnOrder.json`, columnOrder);
};

export const putColumns = (columns) => {
  return axios.put(`${Api_url}/state/columns.json`, columns);
};

export const addColumn = (column) => {
  return axios.post(`${Api_url}/state/columns.json`, column);
};

export const addColumnOrder = (columnOrder) => {
  return axios.post(`${Api_url}/state/columnOrder.json`, columnOrder);
};
