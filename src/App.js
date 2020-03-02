import React from "react";
import Header from "./Components/common/Header";
import "./App.css";
import Footer from "./Components/common/Footer";

import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
        <Switch>
          <Route path="/recipe/:id?" className=" item" exact />
          <Route path="/recipe/:id/:tab?" className=" item" />
          <Route path="/" component={Home} className=" item" />
        </Switch>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
