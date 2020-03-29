import React, { Component } from "react";
import Loader from "../common/Loader";
import { getRecipe } from "../utils/Recipe/cuisine";
import "./Recipe.css";
class Recipe extends Component {
  state = { cuisine: [], loading: true };
  componentDidMount = async () => {
    let cuisine = this.state;
    const id = parseInt(this.props.match.params.id);
    cuisine = await getRecipe(id);

    if (cuisine && cuisine["id"] === id)
      return this.setState({ cuisine, loading: false });
  };
  render() {
    const { cuisine, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <div className="recipe__container">
        <div className="recipe__head">
          <h1>{cuisine["name"]}</h1>
        </div>
        <div className="recipe__body">
          <div className="recipe__image">
            <img src={cuisine['img_link']} alt={cuisine['name']} />
          </div>
          <div className="recipe__ingredients">
            <h2>Ingredients in Recipe:</h2>
            <ul>
            {cuisine["ingredients"] && cuisine["ingredients"].map(ingredient=><li key={ingredient.name} className="ingredients">{ingredient.phrase}</li>)}
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
