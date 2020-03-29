import React, { Component } from "react";
import Loader from "../common/Loader";
import { getRecipe } from "../utils/Recipe/cuisine";
import { GiFireBowl } from "react-icons/gi";
import "./Recipe.css";
class Recipe extends Component {
  state = {
    cuisine: [],
    loading: true,
    liked: false,
    iconStyle: { color: "inherit" }
  };
  componentDidMount = async () => {
    let cuisine = this.state;
    const id = parseInt(this.props.match.params.id);
    cuisine = await getRecipe(id);

    if (cuisine && cuisine["id"] === id)
      return this.setState({ cuisine, loading: false });
  };
  onClick = () => {
    let { liked } = this.state;
    let { iconStyle } = this.state;
    liked = !liked;
    iconStyle = liked ? { color: "#fdcf58 " } : { color: "inherit" };
    return this.setState({ liked, iconStyle });
  };
  render() {
    const { cuisine, loading, iconStyle } = this.state;
    if (loading) return <Loader />;
    return (
      <div className="recipe__container">
        <div className="recipe__head">
          <h1>{cuisine["name"]}</h1>
          <GiFireBowl style={iconStyle} onClick={this.onClick} />
        </div>
        <div className="recipe__body">
          <div className="recipe__image">
            <img src={cuisine["img_link"]} alt={cuisine["name"]} />
          </div>
          <div className="recipe__ingredients">
            <h2>Ingredients in Recipe:</h2>
            <ul>
              {cuisine["ingredients"] &&
                cuisine["ingredients"].map(ingredient => (
                  <li key={ingredient.name} className="ingredients">
                    {ingredient.phrase}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="recipe__info">
          <p>{"Serving Count :" + cuisine["serving_count"]}</p>
          {cuisine["nutrition"].map(data => (
            <p key={Object.keys(data)[0]}>
              {Object.keys(data) +
                " : " +
                data[Object.keys(data)].value +
                " " +
                data[Object.keys(data)].unit}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Recipe;
