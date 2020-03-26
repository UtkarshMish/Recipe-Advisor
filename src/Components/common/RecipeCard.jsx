import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = props => {
  const { cuisine } = props;
  return (
    <div className="recipe__card">
      <div className="recipe__title">
        <h5 className="recipe__name">{cuisine["name"]}</h5>
        <p className="recipe__rating">{cuisine["ratings"]}</p>
      </div>
      <div className="recipe__content">
        <div className="recipe__image">
          <img src={cuisine["img_link"]} alt={cuisine["name"]} />{" "}
        </div>
        <div className="recipe__category">
          {cuisine["breadcrumbs"].map(cus => cus + " ")}
        </div>
      </div>
      <Link to="/browse/recipe" className="recipe__button ">
        Get Recipe !
      </Link>
    </div>
  );
};

export default RecipeCard;
