import React from "react";
import { Link } from "react-router-dom";
import PageNames from "../../configs/PageName";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="main__footer-container">
        <div className="main__footer-row">
          <div className="main__footer-column">
            <h4 className="main__footer-heading">About</h4>
            <div className="main__footer-links">
              <Link to={`/check/${PageNames.JOBS}`} className="footer-item">
                Jobs
              </Link>
              <Link to={`/${PageNames.CONTACT}`} className="footer-item">
                Contact Us
              </Link>
              <Link to={`/check/${PageNames.SUPPORT}`} className="footer-item">
                Customer Support
              </Link>
              <Link to={`/check/${PageNames.FUTURE}`} className="footer-item">
                Future Plans
              </Link>
            </div>
          </div>
          <div className="main__footer-column">
            <h4 className="main__footer-heading">Services</h4>
            <div className="main__footer-links">
              <Link to={`/check/${PageNames.POLICY}`} className="footer-item">
                Data Policy
              </Link>
              <Link to={`/check/${PageNames.FAQ}`} className="footer-item">
                FAQ
              </Link>
              <Link to={`/check/${PageNames.HOWTO}`} className="footer-item">
                How To Access
              </Link>
              <Link
                to={`/check/${PageNames.ADVERTISE}`}
                className="footer-item"
              >
                Advertise
              </Link>
            </div>
          </div>
          <div className="main__footer-column">
            <h4 className="main__footer-heading">@Recipe Advisor</h4>
            <p>
              Project based on IEEE paper -Recommendation of Indian Cuisine
              Recipes based on Ingredients
            </p>

            <p>Project Members - </p>
            <ul>
              <li>Mohammed Idrees - 1KN16IS015 </li>
              <li>Rahul Deb Barma - 1KN16IS025</li>
              <li>Rohit Kumar Mishra - 1KN16IS026</li>
              <li>Utkarsh Mishra - 1KN16IS037</li>
            </ul>
            <p>Under the guidance of - </p>
            <p style={{ fontSize: "1rem", color: "yellow" }}>
              Mr. Kantharaju
              <br />
              Prof. , Dept of ISE
            </p>
            <p>All Rights Reserved. &copy;2020</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
