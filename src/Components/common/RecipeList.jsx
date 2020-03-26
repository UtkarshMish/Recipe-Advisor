import React from "react";
import RecipeCard from "./RecipeCard";
const RecipeList = props => {
  const { cuisines } = props;
  return (
    <div className="recipe__row">
      {cuisines.map(cuisine => (
        <RecipeCard key={cuisine["id"]} cuisine={cuisine} />
      ))}
    </div>
  );
};

export default RecipeList;
