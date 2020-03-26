import React, { Component } from "react";

import "./Login.css";
import { checkLogin } from "../utils/Auth/login";
import { setUserApi } from "../utils/Auth/storeToken";

class Login extends Component {
  state = {
    users: { email: "", password: "" },
    fail: undefined
  };

  handleSubmit = async e => {
    e.preventDefault();
    let response = false;
    const { users } = this.state;
    response = await checkLogin(users);
    if (response.value === "true") {
      if (setUserApi(response.username, response.token)) {
        await this.setState({ loggedIn: true });
        return this.props.updateUser();
      }
    }
    if (response.value === "false") {
      return this.setState({ fail: true });
    }
  };
  UNSAFE_componentWillMount = () => {
    if (this.state.loggedIn === true || this.props.loggedIn === true) {
      this.props.history.push("/dashboard");
    }
  };
  updateValue = e => {
    const name = e.target.name;
    const { users } = this.state;
    users[name] = e.target.value;
    this.setState({ fail: undefined, users });
  };
  render() {
    return (
      <div className="login__container">
        <div className="login__box">
          <div className="login__title">
            <div className="login__heading">Log In with email</div>
            <p>If you are Existing Recipe Advisor user</p>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="view__column">
              <input
                placeholder="Email"
                type="email"
                name="email"
                onInput={e => this.updateValue(e)}
                className="input__box email"
                required
              />

              <input
                placeholder="Password"
                type="password"
                name="password"
                onInput={e => this.updateValue(e)}
                className="input__box password"
                required
                autoComplete={"true"}
              />
              {this.state.fail ? (
                <p className="alert__box">
                  Invalid Email or Password !! Try Again!
                </p>
              ) : null}

              <input
                type="submit"
                className="input__box form__submit"
                value="Sign In"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
