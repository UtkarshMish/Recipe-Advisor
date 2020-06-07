import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
class Header extends Component {
  state = {
    hideMenu: true,
  };
  showMenu = () => {
    const { hideMenu } = this.state;

    return this.setState({ hideMenu: !hideMenu });
  };
  render() {
    const { hideMenu } = this.state;
    const STYLE = hideMenu ? { display: "none" } : { display: "flex" };
    return (
      <div className="header__container">
        <div className="hamburger-menu" onClick={this.showMenu}>
          <IoIosMenu className="icon" />
        </div>
        <div className="menu__items" style={STYLE} onClick={this.showMenu}>
          <Link to="/" className="menu__items-item ">
            Home
          </Link>
          <Link to="/browse" className="menu__items-item ">
            Browse
          </Link>
          <Link to="/guide" className="menu__items-item ">
            Guide
          </Link>
          {this.props.loggedIn ? (
            <div className="item-right">
              <Link to="/dashboard" className="menu__items-item m-right ">
                Dashboard
              </Link>
              <Link to="/logout" className="menu__items-item m-right ">
                Log Out
              </Link>
            </div>
          ) : (
            <div className="item-right">
              <Link to="/login" className="menu__items-item m-right ">
                Log in
              </Link>
              <Link to="/signup" className="menu__items-item m-right">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
