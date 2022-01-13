import axios from "axios";
import { put, select, call } from "redux-saga/effects";

import { authDataSelector, authSelector } from "./../selectors";
import { auth } from "./../actions";

import { Api_url } from "./../settings";
import { InitialColumnId, API_KEY } from "./../settings";

export function* checkAuth() {
  const { expiration } = yield select(authDataSelector);
  const now = new Date();
  if (now >= expiration) {
    yield put(auth());
  }
}

export const getAllState = (token) => {
  return axios.get(`${Api_url}/state.json?auth=${token}`);
};

export const putColumnOrder = (columnOrder, token) => {
  return axios.put(
    `${Api_url}/state/columnOrder.json?auth=${token}`,
    columnOrder
  );
};

export const putColumns = (columns, token) => {
  return axios.put(`${Api_url}/state/columns.json?auth=${token}`, columns);
};

export const putTaskIds = (columnId, taskIds, token) => {
  return axios.put(
    `${Api_url}/state/columns/${columnId}/taskIds.json?auth=${token}`,
    taskIds
  );
};

export const addColumn = (column, token) => {
  return axios.post(`${Api_url}/state/columns.json?auth=${token}`, column);
};

export const addTask = (task, token) => {
  return axios.post(`${Api_url}/state/tasks.json?auth=${token}`, task);
};

export const addTaskIdToColumn = (taskId, token) => {
  return axios.post(
    `${Api_url}/state/columns/${InitialColumnId}/taskIds.json?auth=${token}`,
    `"${taskId}"`
  );
};

export const addColumnOrder = (columnOrder, token) => {
  return axios.post(
    `${Api_url}/state/columnOrder.json?auth=${token}`,
    `"${columnOrder}"`
  );
};

export const deleteTaskFromColumn = (columnId, taskIndex, token) => {
  return axios.delete(
    `${Api_url}/state/columns/${columnId}/taskIds/${taskIndex}.json?auth=${token}`
  );
};

export const deleteTaskFromTasks = (taskId, token) => {
  return axios.delete(`${Api_url}/state/tasks/${taskId}.json?auth=${token}`);
};

export const editTask = (taskId, newTask, token) => {
  return axios.patch(`${Api_url}/state/tasks/${taskId}/.json?auth=${token}`, {
    content: newTask,
  });
};

export const deleteColumnFromColumns = (columnId, token) => {
  return axios.delete(
    `${Api_url}/state/columns/${columnId}.json?auth=${token}`
  );
};

export const editColumnTaskIds = (columnId, taskIds, token) => {
  return axios.patch(
    `${Api_url}/state/columns/${columnId}/.json?auth=${token}`,
    {
      taskIds: taskIds,
    }
  );
};

export const editColumn = (columnId, columnTitle, token) => {
  return axios.patch(
    `${Api_url}/state/columns/${columnId}/.json?auth=${token}`,
    {
      title: columnTitle,
    }
  );
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

export const refreshToken = (refreshToken) => {
  return axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
    {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }
  );
};
