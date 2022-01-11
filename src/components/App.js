import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { RouteList } from "./RouteList";
import { setAuth, setAuthData } from "./../actions";
import { errorSelector } from "./../selectors";

const App = () => {
  const errorState = useSelector(errorSelector);
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorState) {
      addToast(String(errorState), { appearance: "error" });
    }
  }, [errorState, addToast]);

  useEffect(() => {}, []);
  return <RouteList />;
};

export default App;
