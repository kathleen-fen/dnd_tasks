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
  return axios.delete(
    `${Api_url}/state/columns/${columnId}/taskIds/${taskIndex}.json`
  );
};

export const deleteTaskFromTasks = (taskId) => {
  return axios.delete(`${Api_url}/state/tasks/${taskId}.json`);
};

export const editTask = (taskId, newTask) => {
  console.log("url2: ", `${Api_url}/state/tasks/${taskId}/.json`);
  return axios.patch(`${Api_url}/state/tasks/${taskId}/.json`, {
    content: newTask,
  });
};

export const deleteColumnFromColumns = (columnId) => {
  return axios.delete(`${Api_url}/state/columns/${columnId}.json`);
};

export const editColumnTaskIds = (columnId, taskIds) => {
  console.log("url2: ", `${Api_url}/state/columns/${columnId}/taskIds/.json`);
  return axios.patch(`${Api_url}/state/columns/${columnId}/.json`, {
    taskIds: taskIds,
  });
};
