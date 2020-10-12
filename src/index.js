import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/utils/ScrollToTop";
import video from "./Videos/video.mp4";
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
ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      {VIDEO}
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
