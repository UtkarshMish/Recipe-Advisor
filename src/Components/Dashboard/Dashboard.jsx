import React, { Component } from "react";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Dashboard extends Component {
  state = { username: "USER", success: false, firstLogin: false };
  componentDidMount = async () => {
    if (this.props.loggedIn === false) {
      this.props.history.push("/login");
    } else {
      let { username, firstLogin } = this.state;
      username = localStorage.getItem("user") || username;
      let loggedIn =
        localStorage.getItem("firstLogin") == "false" ? false : true;
      if (loggedIn && username === "USER") {
        localStorage.setItem("firstLogin", true);
      } else {
        localStorage.setItem("firstLogin", false);
      }
      console.log(loggedIn, username);
      if ((loggedIn || firstLogin) && username !== "USER") {
        toast.success(`Hello ${username}! let's Get you Started !`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500,
          hideProgressBar: true,
          closeButton: false,
          className: "greet__user",
        });
      }

      return await this.setState({ username, firstLogin: false });
    }
  };

  render() {
    return (
      <div className="dashboard__container">
        <div className="dashboard__heading">
          <h2>Recipe Recommendation based on your choices!</h2>
        </div>
        <div className="dashboard__body"></div>
      </div>
    );
  }
}

export default Dashboard;
