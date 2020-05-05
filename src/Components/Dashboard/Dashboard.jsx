import React, { Component } from "react";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";
class Dashboard extends Component {
  state = { username: undefined, success: false, firstLogin: false, liked: [] };
  async componentDidMount() {
    if ((await this.props.loggedIn) === false) {
      return this.props.history.push("/login");
    } else {
      let { username, firstLogin } = this.state;
      username = localStorage.getItem("user") || username;
      let loggedIn =
        localStorage.getItem("firstLogin") === "false" ? false : true;
      if (loggedIn && username === undefined) {
        localStorage.setItem("firstLogin", true);
      } else {
        localStorage.setItem("firstLogin", false);
      }
      if ((loggedIn || firstLogin) && username !== undefined) {
        toast.success(`Hello ${username}! let's Get you Started !`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          hideProgressBar: true,
          closeButton: false,
          className: "greet__user",
        });
      }
      let { liked } = this.state;
      if (username !== undefined) liked = await this.props.liked();

      return this.setState({ username, firstLogin: false, liked });
    }
  }

  render() {
    const { username, liked } = this.state;
    if (!Boolean(username)) return <Loader />;
    return (
      <div className="dashboard__container">
        <div className="dashboard__heading">
          <h2>Recipe Recommendation based on your choices!</h2>
        </div>
        <div className="dashboard__body"></div>
        {liked && liked.length > 0 ? (
          <React.Fragment>
            <div className="dashboard__heading liked">
              <h2>Recipe liked based on your past history!</h2>
            </div>
            <div className="dashboard__body--wrapper">
              <div className="dashboard__body liked">
                {liked.map((recipe) => (
                  <div key={recipe.id} className="recipe__liked-list">
                    <Link
                      to={`/browse/recipe/${recipe.id}`}
                      className="recipe__button"
                    >
                      {recipe.name}
                    </Link>
                    <img
                      className="recipe_image"
                      src={recipe.img_link}
                      alt={recipe.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
