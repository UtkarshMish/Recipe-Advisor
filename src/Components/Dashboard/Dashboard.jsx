import React, { Component } from "react";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Dashboard extends Component {
  componentDidMount = () => {
    if (this.props.loggedIn === false) {
      this.props.history.push("/login");
    } else {
      let { username } = this.state;
      username = localStorage.getItem("user") || username;
      toast.success(`Hello ${username}! let's Get you Started !`, {
        position: toast.POSITION.TOP_CENTER,
        className: "greet__user"
      });
      return this.setState({ username });
    }
  };
  state = { username: "USER" };

  render() {
    const { username } = this.state;
    return (
      <div className="dashboard__container">
        <div className="dashboard__heading"></div>
        <div className="dashboard__body"></div>
      </div>
    );
  }
}

export default Dashboard;
