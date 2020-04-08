import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { cuisine } = props;
  return (
    <div className="recipe__card">
      <div className="recipe__title">
        <h5 className="recipe__name">{cuisine["name"]}</h5>
        <p className="recipe__rating">
          {parseFloat(cuisine["ratings"]).toFixed(2) + " Stars"}
        </p>
      </div>
      <div className="recipe__content">
        <div className="recipe__image">
          <img src={cuisine["img_link"]} alt={cuisine["name"]} />{" "}
        </div>
        <div className="recipe__category">
          <h5>Categories:</h5>
          {cuisine["breadcrumbs"].map((cus, index) =>
            index < 2 ? <p key={index}>{cus}</p> : null
          )}
        </div>
      </div>
      <Link to={`/browse/recipe/${cuisine["id"]}`} className="recipe__button ">
        Get Recipe !
      </Link>
    </div>
  );
};

export default RecipeCard;
