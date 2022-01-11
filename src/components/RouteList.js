import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainContainer } from "./Main";
import { Login } from "./Login";
import { authSelector } from "../selectors";

export const RouteList = () => {
  const auth = useSelector(authSelector);
  let location = useLocation();
  return (
    <Routes>
      <Route
        path="/"
        element={
          auth ? (
            <MainContainer />
          ) : (
            <Navigate to="/login" state={{ from: location }} replace />
          )
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
