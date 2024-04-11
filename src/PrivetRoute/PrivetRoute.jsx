import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
