import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import { signin } from "../actions";
import { authSelector } from "../selectors";

export const Login = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = () => {
    dispatch(signin({ login, password }));
  };
  const auth = useSelector(authSelector);
  useEffect(() => {
    if (auth) {
      navigate(from, { replace: true });
    }
  }, [auth, navigate, from]);
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Sign in</button>
      </form>
    </React.Fragment>
  );
};
