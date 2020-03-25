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
import { isLoggedIn } from "./Components/utils/checkLogin";
class App extends Component {
  state = {
    loggedIn: false
  };
  UNSAFE_componentWillMount = async () => {
    const auth = await isLoggedIn();
    if (auth) {
      return await this.setState({ loggedIn: true });
    }
  };
  updateUser = async value => {
    let loggedIn = this.state;
    loggedIn = value;
    return await this.setState({ loggedIn });
  };
  render() {
    const { loggedIn } = this.state;
    return (
      <React.Fragment>
        <video
          muted
          autoPlay
          className="fullscreen-bg__video"
          title="./Images/recipe-background.jpeg"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="App">
          <Header loggedIn={loggedIn} />
          <React.Fragment>
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={args => <Dashboard {...args} loggedIn={loggedIn} />}
                className=" item"
              />
              <Route
                path="/browse/:recipe?/:id?"
                component={Browse}
                className=" item"
                exact
              />

              <Route
                path="/logout"
                component={args => (
                  <Logout updateUser={this.updateUser} {...args} />
                )}
                className=" item"
                exact
              />

              <Route path="/guide" component={Guide} className=" item" exact />
              <Route
                path="/login"
                component={args => (
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
                component={args => (
                  <Signup
                    loggedIn={loggedIn}
                    updateUser={this.updateUser}
                    {...args}
                  />
                )}
                className=" item"
                exact
              />
              <Route path="/browse/:recipe?/:id/:tab?" className=" item" />
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
