import React from "react";
import { loggedOut } from "../utils/Auth/checkLogin";
import { Redirect } from "react-router-dom";
const Logout = (props) => {
  loggedOut();
  props.updateUser();
  return <Redirect to="/login" />;
};

export default Logout;
