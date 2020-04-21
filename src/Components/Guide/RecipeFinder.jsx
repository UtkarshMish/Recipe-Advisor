import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { getPredictions } from "../utils/Recipe/get_predicted";
const RecipeFinder = (props) => {
  const { location, history, match } = props;
  let recipe = location.state;
  const ingredients = match.params.query.split(",");
  // if (!recipe && ingredients.length > 0) {
  //   recipe = await getPredictions(ingredients);
  // }
  return (
    <div className="recipe__container">
      <button onClick={() => history.goBack()} className="goback-button">
        <IoMdArrowBack />
      </button>
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
    </div>
  );
};

export default RecipeFinder;
