import axios from "axios";

import { Api_url } from "./../settings";
import { InitialColumnId, API_KEY } from "./../settings";

export const getAllState = (token) => {
  return axios.get(`${Api_url}/state.json?auth=${token}`);
};

export const putColumnOrder = (columnOrder) => {
  return axios.put(`${Api_url}/state/columnOrder.json`, columnOrder);
};

export const putColumns = (columns) => {
  return axios.put(`${Api_url}/state/columns.json`, columns);
};

export const putTaskIds = (columnId, taskIds) => {
  return axios.put(
    `${Api_url}/state/columns/${columnId}/taskIds.json`,
    taskIds
  );
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
  return axios.patch(`${Api_url}/state/tasks/${taskId}/.json`, {
    content: newTask,
  });
};

export const deleteColumnFromColumns = (columnId) => {
  return axios.delete(`${Api_url}/state/columns/${columnId}.json`);
};

export const editColumnTaskIds = (columnId, taskIds) => {
  return axios.patch(`${Api_url}/state/columns/${columnId}/.json`, {
    taskIds: taskIds,
  });
};

export const editColumn = (columnId, columnTitle) => {
  return axios.patch(`${Api_url}/state/columns/${columnId}/.json`, {
    title: columnTitle,
  });
};

export const signin = (login, password) => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email: login,
      password: password,
      returnSecureToken: true,
    }
  );
};
