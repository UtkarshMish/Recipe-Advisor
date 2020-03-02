import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="main__container">
      <h1 className="main__title">
        Recipe Advisor <IoMdRestaurant className="icon" />
      </h1>
      <h3 className="sub-main__title">
        Make whatever you want whenever you want to.
      </h3>
      <Link to="/" className="main__button">
        Get Started
        <FaArrowRight className="icon" />
      </Link>
    </div>
  );
};

export default Home;
