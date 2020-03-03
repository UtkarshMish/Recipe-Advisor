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
            <div className="login__heading">Log In with email</div>
            <p>If you are Existing Recipe Advisor user</p>
          </div>
          <form action="" onSubmit={e => this.handleSubmit(e)}>
            <div className="view__column">
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="input__box email"
                required
              />

              <input
                placeholder="Password"
                type="password"
                name="password"
                className="input__box password"
                required
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
