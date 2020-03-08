import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = () => {
  return (
    <div className="recipe__card">
      <div className="recipe__title">
        <h5 className="recipe__name">This is name</h5>
        <p className="recipe__rating">This is rating</p>
      </div>
      <div className="recipe__content">
        <div className="recipe__image">Here will be image</div>
        <div className="recipe__category">This displays category</div>
      </div>
      <Link to="/browse/recipe" className="recipe__button ">
        Get Recipe !
      </Link>
    </div>
  );
};

export default RecipeCard;
