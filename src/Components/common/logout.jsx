import { loggedOut } from "../utils/Auth/checkLogin";
const Logout = props => {
  loggedOut();
  props.updateUser();
  props.history.push("/login");
  return null;
};

export default Logout;
