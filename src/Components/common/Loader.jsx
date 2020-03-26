import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  return (
    <div className="loading__container">
      <AiOutlineLoading3Quarters className="loader" />
    </div>
  );
};

export default Loader;
