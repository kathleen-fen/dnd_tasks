import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { initSagas } from "./initSagas";
import { defaultState } from "./defaultState";
import { reducer } from "./combineReducers";

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  const composables = [applyMiddleware(...middleWares)];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(...composables);
  const store = createStore(reducer, defaultState, enhancer);
  console.log("Saga middleware implemented!");
  initSagas(sagaMiddleware);
  return store;
};
