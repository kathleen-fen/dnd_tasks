import axios from "axios";

import { Api_url } from "./../settings";
import { InitialColumnId } from "./../settings";

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

export const addTask = (task) => {
  return axios.post(`${Api_url}/state/tasks.json`, task);
};

export const addTaskIdToColumn = (taskId) => {
  return axios.post(
    `${Api_url}/state/columns/${InitialColumnId}/taskIds.json`,
    `"${taskId}"`
  );
};

export const addColumnOrder = (columnOrder) => {
  console.log("json: ", `"${columnOrder}"`);
  return axios.post(`${Api_url}/state/columnOrder.json`, `"${columnOrder}"`);
};
