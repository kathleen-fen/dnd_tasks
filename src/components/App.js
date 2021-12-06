import React from "react";
import { Provider } from "react-redux";

import { getStore } from "../getStore";
import { MainContainer } from "./Main";

const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
