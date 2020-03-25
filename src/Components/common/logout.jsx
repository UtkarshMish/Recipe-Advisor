import React from "react";
import { Redirect } from "react-router-dom";
import { loggedOut } from "../utils/checkLogin";
const Logout = props => {
  loggedOut();
  props.updateUser(false);
  return <Redirect to="/login" />;
};

export default Logout;
