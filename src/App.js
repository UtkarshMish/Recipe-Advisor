import React from "react";
import Header from "./Components/common/Header";
import "./App.css";
import Footer from "./Components/common/Footer";

import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
        <Switch>
          <Route path="/recipe/:id?" className=" item" exact />
          <Route path="/login" component={Login} className=" item" exact />
          <Route path="/recipe/:id/:tab?" className=" item" />
          <Route path="/" component={Home} className=" item" />
        </Switch>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
