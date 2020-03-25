import React, { Component } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { signUp } from "../utils/signup";
import { setUserApi } from "../utils/storeToken";
class Signup extends Component {
  state = {};
  updateValue = e => {
    const name = e.target.name;
    if (e.target.name === "email" && this.state.exist)
      this.setState({ exist: undefined });
    return this.setState({ [name]: e.target.value });
  };
  UNSAFE_componentWillMount = () => {
    if (this.state.loggedIn === true || this.props.loggedIn === true) {
      this.props.history.push("/dashboard");
    }
  };
  handleSubmit = async e => {
    e.preventDefault();
    let response = false;
    response = await signUp(this.state);
    if (response.value === "sucess") {
      this.setState({ exist: false });
    }
    if (response.value === "exist") {
      return this.setState({ exist: true });
    } else if (setUserApi(response.username, response.token)) {
      await this.setState({ loggedIn: true });
      return this.props.updateUser(true);
    }
  };
  render() {
    return (
      <div className="signup__container">
        <div className="signup__box">
          <div className="signup__title">
            <div className="signup__heading">Sign up with email</div>
            <Link to="/login" className="link__item">
              Existing Recipe Advisor user? Log In
            </Link>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="view__column">
              <input
                placeholder="Display Name"
                type="text"
                name="user_name"
                className="input__box user_name"
                onInput={e => this.updateValue(e)}
                required
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="input__box email"
                onInput={e => this.updateValue(e)}
                required
              />
              {this.state.exist ? (
                <p className="alert__box ">Email ID already exists!</p>
              ) : null}

              <input
                placeholder="Password"
                type="password"
                name="password"
                className="input__box password"
                onInput={e => this.updateValue(e)}
                pattern="(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}"
                title="6 character with an uppercase and a special character"
                required
              />
              <p>
                Please provide a password with at least 6 characters. Your
                password must include at least 1 uppercase letter and a special
                character.
              </p>

              <input
                type="submit"
                className="input__box form__submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
