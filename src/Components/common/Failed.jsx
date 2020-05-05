import React from "react";
import { GiPoisonCloud, GiBackwardTime } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const goBack = (history, backArea, handleClick = undefined) => {
  if (handleClick !== undefined) handleClick();
  return history.push(backArea);
};
const Failed = ({ backArea, handleClick }) => {
  const history = useHistory();
  return (
    <div className="failed__container">
      <button
        onClick={() => goBack(history, backArea, handleClick)}
        className="goback-button"
      >
        <GiBackwardTime />
      </button>
      <div className="failed__body">
        <h2 className="failed__message">Not Found !</h2>
        <GiPoisonCloud className="failed-icon" />
      </div>
    </div>
  );
};

export default Failed;
