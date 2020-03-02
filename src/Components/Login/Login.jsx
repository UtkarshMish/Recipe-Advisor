import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="login__container">
        <div className="login__box">
          <div className="login__title">
            <div className="login__heading">Sign In with email</div>
            <p>If you are Existing Recipe Advisor user</p>
          </div>
          <form action="" onSubmit={e => this.handleSubmit(e)}>
            <div className="view__column">
              <input
                placeholder="UserName"
                type="text"
                name="user_name"
                className="input__box user-name"
              />

              <input
                placeholder="Password"
                type="password"
                name="password"
                className="input__box password"
              />

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
