import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import "reset-css";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <ToastProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToastProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
