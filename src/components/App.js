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

  useEffect(() => {
    console.log("useEffect");
    const token = localStorage.getItem("token");
    const expiration = new Date(localStorage.getItem("expiration"));
    const user = localStorage.getItem("user");
    console.log("data: ", { token, expiration, user });
    const now = new Date();
    if (token && expiration > now) {
      dispatch(
        setAuthData({
          token,
          expiration,
          user,
        })
      );
      dispatch(setAuth(true));
    }
  }, [dispatch]);
  return <RouteList />;
};

export default App;
