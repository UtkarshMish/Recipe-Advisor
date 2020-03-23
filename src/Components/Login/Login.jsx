import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  updateValue = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
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
