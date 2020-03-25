import React, { Component } from "react";
import "./Dashboard.css";
class Dashboard extends Component {
  UNSAFE_componentWillMount = async () => {
    if (this.props.loggedIn === false) {
      this.props.history.push("/login");
    } else return this.setState({ username: localStorage.getItem("user") });
  };
  state = {};

  render() {
    return (
      <div className="dashboard__container">
        <div className="dashboard__heading">
          <p className="greet__user">
            Hello {this.state.username ? this.state.username : "USER"}! let's
            Get you Started !
          </p>
        </div>
        <div className="dashboard__body"></div>
      </div>
    );
  }
}

export default Dashboard;
