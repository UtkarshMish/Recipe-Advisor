import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="main__footer-container">
        <div className="main__footer-row">
          <div className="main__footer-column">
            <h4 className="main__footer-heading">About</h4>
            <div className="main__footer-links">
              <Link className="footer-item">Sitemap</Link>
              <Link className="footer-item">Contact Us</Link>
              <Link className="footer-item">Religious Ceremonies</Link>
              <Link className="footer-item">Gazebo Plans</Link>
            </div>
          </div>
          <div className="main__footer-column">
            <h4 className="main__footer-heading">Services</h4>
            <div className="main__footer-links">
              <Link className="footer-item">Banana Pre-Order</Link>
              <Link className="footer-item">DNA FAQ</Link>
              <Link className="footer-item">How To Access</Link>
              <Link className="footer-item">Favorite X-Men</Link>
            </div>
          </div>
          <div className="main__footer-column">
            <h4 className="main__footer-heading">Footer Header</h4>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
