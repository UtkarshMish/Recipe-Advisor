import React from "react";
import { Redirect } from "react-router-dom";
import { loggedOut } from "../utils/checkLogin";
const Logout = props => {
  loggedOut();
  props.updateUser();
  props.history.push("/login");
  return null;
};

export default Logout;
