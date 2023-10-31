import React from "react";
import { Navigate } from "react-router-dom";

let login = () => {
  let token = localStorage.getItem('token');
  return token;
};

const Authent = ({ child }) => {
  if (!login()) {
    return <Navigate to="/login" />;
  }
  return child;
};

export default Authent;
