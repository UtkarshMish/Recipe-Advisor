import React from "react";
import { Link } from "react-router-dom";
const RecipeCarousel = ({ item }) => {
  return item.map((recipe) => (
    <div key={recipe.id} className="recipe__liked-list">
      <Link to={`/browse/recipe/${recipe.id}`} className="recipe__button">
        {recipe.name}
      </Link>
      <img className="recipe_image" src={recipe.img_link} alt={recipe.name} />
    </div>
  ));
};

export default RecipeCarousel;
