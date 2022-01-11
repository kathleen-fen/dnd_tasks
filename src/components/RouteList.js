import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainContainer } from "./Main";
import { Login } from "./Login";
import { authSelector } from "../selectors";

export const RouteList = () => {
  const auth = useSelector(authSelector);
  return (
    <Routes>
      <Route
        path="/"
        element={auth ? <MainContainer /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
