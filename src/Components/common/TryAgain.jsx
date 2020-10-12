import React from "react";
import { useParams } from "react-router-dom";
const TryAgain = () => {
  const { name } = useParams();
  return (
    <div className="tryAgain__container">
      <div className="tryAgain__body">
        <h2 className="tryAgain__message">
          No Page for {String(name).replace(/-/g, " ")} ! Come Back Later ?
        </h2>
      </div>
    </div>
  );
};

export default TryAgain;
