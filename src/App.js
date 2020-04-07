import React, { Component } from "react";
import Header from "./Components/common/Header";
import "./App.css";
import Footer from "./Components/common/Footer";
import video from "./Videos/video.mp4";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Browse from "./Components/Browse/Browse";
import Guide from "./Components/Guide/Guide";
import Dashboard from "./Components/Dashboard/Dashboard";
import Logout from "./Components/common/logout";
import { isLoggedIn } from "./Components/utils/Auth/checkLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/common/Loader";
import Recipe from "./Components/Browse/Recipe";
toast.configure();

class App extends Component {
  state = {
    loggedIn: false,
    isLoading: true,
    error: [],
  };

  componentDidMount = async () => {
    const auth = await isLoggedIn();
    let error = this.state;

    if (auth.error) {
      error = String(auth["error"]).split(10);
      toast.error(error[0], {
        position: toast.POSITION.TOP_CENTER,
      });
      return this.setState({ error, isLoading: false });
    }
    return this.setState({ loggedIn: auth, isLoading: false });
  };
  updateUser = async () => {
    const auth = (await isLoggedIn()) || false;
    return this.setState({ loggedIn: auth });
  };

  render() {
    const { loggedIn, isLoading, error } = this.state;

    const VIDEO = (
      <div className="bg__video">
        <video
          loop
          muted
          autoPlay
          className="fullscreen-bg__video"
          title="./Images/recipe-background.jpeg"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
    if (isLoading)
      return (
        <React.Fragment>
          {VIDEO}
          <div className="App">
            {error[0] ? <ToastContainer /> : null}
            <Loader />
          </div>
        </React.Fragment>
      );
    return (
      <React.Fragment>
        {VIDEO}
        <div className="App">
          <Header loggedIn={loggedIn} />

          <React.Fragment>
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={(args) => (
                  <Dashboard {...args} loggedIn={loggedIn} />
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

              <Route path="/guide" component={Guide} className=" item" exact />
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
