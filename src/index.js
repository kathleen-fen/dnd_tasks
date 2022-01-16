import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";

import "reset-css";
import App from "./components/App";
import { getStore } from "./getStore";
const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ToastProvider>
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
