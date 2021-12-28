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
  return axios.post(`${Api_url}/state/columnOrder.json`, `"${columnOrder}"`);
};

export const deleteTaskFromColumn = (columnId, taskIndex) => {
  console.log(
    "url1: ",
    `${Api_url}/state/columns/${columnId}/taskIds/${taskIndex}.json`
  );
  return axios.delete(
    `${Api_url}/state/columns/${columnId}/taskIds/${taskIndex}.json`
  );
};

export const deleteTaskFromTasks = (taskId) => {
  console.log("url2: ", `${Api_url}/state/tasks/${taskId}.json`);
  return axios.delete(`${Api_url}/state/tasks/${taskId}.json`);
};
