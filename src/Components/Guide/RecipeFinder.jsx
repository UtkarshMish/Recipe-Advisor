import React from "react";
const RecipeFinder = ({ recipe }) => {
  return (
    <div className="recipe__guide">
      {recipe.map((cuisine) => (
        <div key={cuisine["id"]} className="recipe__container">
          <div className="recipe__head">
            <h1>{cuisine["name"]}</h1>
          </div>
          <div className="recipe__body">
            <div className="recipe__image">
              <img src={cuisine["img_link"]} alt={cuisine["name"]} />
            </div>
            <div className="recipe__ingredients">
              <h2>Ingredients in Recipe:</h2>
              <ul>
                {cuisine["ingredients"] &&
                  cuisine["ingredients"].map((ingredient, index) => (
                    <li key={ingredient.name + index} className="ingredients">
                      {ingredient.phrase}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="recipe__info">
            <p>{"Serving Count :" + cuisine["serving_count"]}</p>
            {cuisine["nutrition"].map((data) => (
              <p key={Object.keys(data)}>
                {Object.keys(data) +
                  " : " +
                  data[Object.keys(data)].value +
                  " " +
                  data[Object.keys(data)].unit}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeFinder;
