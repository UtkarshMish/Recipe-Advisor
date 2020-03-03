import React from "react";
import Header from "./Components/common/Header";
import "./App.css";
import Footer from "./Components/common/Footer";
import video from "./Videos/video.mp4";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
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
        <Header />
        <React.Fragment>
          <Switch>
            <Route path="/recipe/:id?" className=" item" exact />
            <Route path="/login" component={Login} className=" item" exact />
            <Route path="/signup" component={Signup} className=" item" exact />
            <Route path="/recipe/:id/:tab?" className=" item" />
            <Route path="/" component={Home} className=" item" />
          </Switch>
        </React.Fragment>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
