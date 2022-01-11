import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getStore } from "../getStore";
import { MainContainer } from "./Main";

const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </Provider>
  );
};

export default App;
