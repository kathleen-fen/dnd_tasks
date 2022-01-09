import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";

import "reset-css";
import App from "./components/App";

ReactDOM.render(
  <ToastProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToastProvider>,
  document.getElementById("root")
);
