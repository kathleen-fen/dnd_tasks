import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, Input, InputLabel, FormHelperText } from "@mui/material";

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
      <Box
        sx={{
          width: 300,
          height: 300,
          mx: "auto",
          pt: 6,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormControl
            sx={{
              py: 3,
            }}
          >
            <InputLabel htmlFor="email-input">Email address</InputLabel>
            <Input
              id="email-input"
              aria-describedby="email-helper-text"
              value={login}
              type="email"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              py: 3,
            }}
          >
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              aria-describedby="password-helper-text"
              value={password}
              type="password"
              minlength="6"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormHelperText id="password-helper-text">
              Enter your password.
            </FormHelperText>
          </FormControl>

          <Button variant="contained" onClick={submitHandler}>
            Sign in
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};
