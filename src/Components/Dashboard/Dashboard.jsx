import React, { Component } from "react";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../common/Loader";
import RecipeCarousel from "./RecipeCarousel";
class Dashboard extends Component {
  state = {
    username: undefined,
    success: false,
    firstLogin: false,
    recipe_data: {
      liked_recipe: [],
      recommendations: [],
    },
  };
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
        await this.setState({ username });
      }
      if ((loggedIn || firstLogin) && username !== undefined) {
        toast.success(`Hello ${username}! let's Get you Started !`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4500,
          hideProgressBar: true,
          closeButton: false,
          className: "greet__user",
        });
      }
      let { recipe_data } = this.state;
      if (username !== undefined) {
        recipe_data = await this.props.liked(true);
      }
      return this.setState({ firstLogin: false, recipe_data });
    }
  }

  render() {
    const { username, recipe_data } = this.state;
    const { liked_recipe, recommendations } = recipe_data;
    if (!Boolean(username)) return <Loader />;
    return (
      <div className="dashboard__container">
        {recommendations && recommendations.length >= 0 ? (
          <React.Fragment>
            <div className="dashboard__heading">
              <h2>Recipe Recommendation based on your choices!</h2>
            </div>
            <div className="dashboard__body--wrapper">
              {recommendations && recommendations.length > 0 ? (
                <div className="dashboard__body">
                  <RecipeCarousel item={recommendations} />
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </React.Fragment>
        ) : null}
        {liked_recipe && liked_recipe.length > 0 ? (
          <React.Fragment>
            <div className="dashboard__heading liked">
              <h2>Recipe liked based on your past history!</h2>
            </div>
            <div className="dashboard__body--wrapper">
              {recommendations && recommendations.length > 0 ? (
                <div className="dashboard__body liked">
                  <RecipeCarousel item={liked_recipe} />
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
