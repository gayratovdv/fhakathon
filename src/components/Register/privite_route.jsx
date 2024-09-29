import React from "react";
import { Navigate } from "react-router-dom";

const Privite_route = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default Privite_route;
