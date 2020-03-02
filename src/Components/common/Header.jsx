import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="menu__items">
        <Link to="/" className="menu__items-item ">
          Home
        </Link>
        <Link to="/" className="menu__items-item ">
          Browse
        </Link>
        <Link to="/" className="menu__items-item ">
          Guide
        </Link>
        <div className="item-right">
          <Link to="/login" className="menu__items-item m-right ">
            Log in
          </Link>
          <Link to="/" className="menu__items-item m-right">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
