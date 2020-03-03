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
              <Link className="footer-item">Jobs</Link>
              <Link className="footer-item">Contact Us</Link>
              <Link className="footer-item">Customer Support</Link>
              <Link className="footer-item">Future Plans</Link>
            </div>
          </div>
          <div className="main__footer-column">
            <h4 className="main__footer-heading">Services</h4>
            <div className="main__footer-links">
              <Link className="footer-item">Data Policy</Link>
              <Link className="footer-item">FAQ</Link>
              <Link className="footer-item">How To Access</Link>
              <Link className="footer-item">Advertise</Link>
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
              <li>Mohammed Idrees </li>
              <li>Rahul Deb Barma</li>
              <li>Rohit Kumar Mishra</li>
              <li>Utkarsh Mishra</li>
            </ul>
            <p>All Rights Reserved. &copy;2019-2020</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
