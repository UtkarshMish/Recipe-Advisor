import React, { Component } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { getPredictions } from "../utils/Recipe/get_predicted";
import Loader from "../common/Loader";
class RecipeFinder extends Component {
  state = { recipe: [], isLoading: true };
  componentDidMount = async () => {
    const { location, match, history } = this.props;
    let recipe = location.state;
    const ingredients = match.params.query ? match.params.query.split(",") : 0;
    if (!recipe && ingredients.length > 0) {
      recipe = await getPredictions(ingredients);
    } else {
      await history.push("/guide");
    }
    return this.setState({ recipe, isLoading: false });
  };
  render() {
    const { recipe, isLoading } = this.state;
    if (isLoading && recipe.length === 0) {
      return <Loader />;
    }
    return (
      <div className="recipe__container">
        <button
          onClick={() => this.props.history.push("/guide")}
          className="goback-button"
        >
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
                        <li
                          key={ingredient.name + index}
                          className="ingredients"
                        >
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
  }
}

export default RecipeFinder;
