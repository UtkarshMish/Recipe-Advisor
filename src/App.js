import React, { Component } from "react";
import Header from "./Components/common/Header";
import "./App.css";
import Footer from "./Components/common/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Browse from "./Components/Browse/Browse";
import Guide from "./Components/Guide/Guide";
import RecipeFinder from "./Components/Guide/RecipeFinder";
import Dashboard from "./Components/Dashboard/Dashboard";
import Logout from "./Components/common/logout";
import { isLoggedIn } from "./Components/utils/Auth/checkLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/common/Loader";
import Recipe from "./Components/Browse/Recipe";
import { updateLikings } from "./Components/utils/Recipe/user_likings";
import Contact from "./Components/common/Contact";
toast.configure();

class App extends Component {
  state = {
    loggedIn: false,
    isLoading: true,
    error: [],
  };

  async componentDidMount() {
    const auth = await isLoggedIn();
    let { error } = this.state;

    if (auth.error) {
      error = String(auth["error"]).split(10);
      toast.error(error[0], {
        position: toast.POSITION.TOP_CENTER,
      });
      return this.setState({ error, isLoading: false });
    }

    return this.setState({
      loggedIn: auth,
      isLoading: false,
    });
  }
  updateUser = async () => {
    const auth = (await isLoggedIn()) || false;
    return this.setState({ loggedIn: auth });
  };
  updateLikes = async (recommendation) => {
    return await updateLikings(recommendation);
  };

  render() {
    const { loggedIn, isLoading, error } = this.state;

    if (isLoading)
      return (
        <React.Fragment>
          <div className="App">
            {error[0] ? <ToastContainer /> : null}
            <Loader />
          </div>
        </React.Fragment>
      );
    return (
      <React.Fragment>
        <div className="App">
          <Header loggedIn={loggedIn} />

          <React.Fragment>
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={(args) => (
                  <Dashboard
                    {...args}
                    loggedIn={loggedIn}
                    liked={this.updateLikes}
                  />
                )}
                className=" item"
              />
              <Route
                path="/browse/:id?"
                component={Browse}
                className=" item"
                exact
              />

              <Route
                path="/logout"
                component={(args) => (
                  <Logout updateUser={this.updateUser} {...args} />
                )}
                className=" item"
                exact
              />
              <Route
                path="/guide/results/q=:query?"
                component={RecipeFinder}
                className=" item"
                exact
              />

              <Route path="/guide" component={Guide} className=" item" />
              <Route
                path="/login"
                component={(args) => (
                  <Login
                    updateUser={this.updateUser}
                    loggedIn={loggedIn}
                    {...args}
                  />
                )}
                className=" item"
                exact
              />
              <Route
                path="/contact-us"
                component={Contact}
                className=" item"
                exact
              />

              <Route
                path="/signup"
                component={(args) => (
                  <Signup
                    loggedIn={loggedIn}
                    updateUser={this.updateUser}
                    {...args}
                  />
                )}
                className=" item"
                exact
              />
              <Route
                path="/browse/recipe/:id/:tab?"
                className=" item"
                component={Recipe}
              />
              <Route path="/" component={Home} className=" item" />

              <Route component={Home} />
            </Switch>
          </React.Fragment>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
