import React, { Component } from "react";
import "./Guide.css";
import { TiPlus, TiMinus } from "react-icons/ti";

class Guide extends Component {
  state = {
    ingredients: [""],
  };
  updateValue = async (e) => {
    const name = parseInt(e.target.name);
    const { ingredients } = this.state;
    ingredients[name] = e.target.value;
    return this.setState({ ingredients });
  };
  addInput = () => {
    let { ingredients } = this.state;
    if (ingredients.length < 1) {
      ingredients = [""];
    } else {
      if (ingredients.length <= 10) {
        ingredients.push("");
      }
    }
    this.setState({ ingredients });
  };
  removeInput = (e) => {
    let { ingredients } = this.state;
    let item = parseInt(e.target.name);
    if (isNaN(item)) {
      ingredients = [""];
    } else {
      ingredients = ingredients.filter((ele, i) => (i !== item ? ele : null));
    }
    return this.setState({ ingredients });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { ingredients } = this.state;
    if (ingredients.length > 0) {
      return this.props.history.push(`/guide/results/q=${ingredients}`);
    }
  };
  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <div className="guide__container">
          <div className="recipe__guess-form">
            <form
              action=""
              onSubmit={(e) => this.handleSubmit(e)}
              className="input__form"
            >
              <div className="guess-form__header">
                <h3 className="sub-main__title">
                  Add the Ingredients to get recommendations !
                </h3>
              </div>
              <div className="ingredient__container">
                {ingredients.map((value, num) => {
                  if (num > 10) {
                    return (
                      <h2 key={num} className="input__box">
                        Ingredients Limit Exceeded !
                      </h2>
                    );
                  }

                  return (
                    <div key={num} className="input__container">
                      <input
                        key={num}
                        type="text"
                        className="input__box"
                        name={num}
                        placeholder={`Add Ingredient ${num + 1}`}
                        onChange={(e) => this.updateValue(e)}
                        value={value}
                        required
                      />

                      <button
                        type="button"
                        name={num}
                        className="add__link-button"
                        onClick={(e) => this.removeInput(e)}
                      >
                        <TiMinus />
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className="add__link-button"
                onClick={this.addInput}
              >
                <TiPlus />
              </button>
              <div className="submit__container">
                <input
                  type="submit"
                  value="Get Recipe !"
                  className="input__box form__submit"
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Guide;
