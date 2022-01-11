import React from "react";
import { Provider } from "react-redux";

import { getStore } from "../getStore";
import { RouteList } from "./RouteList";
const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <RouteList />
    </Provider>
  );
};

export default App;
