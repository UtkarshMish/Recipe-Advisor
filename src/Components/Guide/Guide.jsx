import React, { Component } from "react";
import "./Guide.css";
import { TiPlus, TiMinus } from "react-icons/ti";
class Guide extends Component {
  state = {
    count: [1],
    ingredients: []
  };
  updateValue = e => {
    const name = parseInt(e.target.name);
    const { ingredients } = this.state;
    ingredients[name - 1] = e.target.value;
    this.setState({ ingredients });
  };
  addInput = () => {
    let { count } = this.state;
    if (isNaN(count[0]) || count.length < 1) {
      count = [1];
    } else {
      if (count.length <= 10) {
        count.push(count[count.length - 1] + 1);
      }
    }
    this.setState({ count });
  };
  removeInput = e => {
    let { count } = this.state;

    let item = parseInt(e.target.value);
    if (isNaN(item)) {
      item = parseInt(e.currentTarget.value);
    }
    if (isNaN(count[0]) || count.length < 2) {
      count = [1];
    } else {
      count = count.filter(ele => ele !== item);
      for (let index = 0; index < count.length; index++) {
        count[index] = index + 1;
      }
    }
    this.setState({ count });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <div className="guide__container">
          <div className="recipe__guess-form">
            <form
              action=""
              onSubmit={e => this.handleSubmit(e)}
              className="input__form"
            >
              <div className="guess-form__header">
                <h3 className="sub-main__title">
                  Add the Ingredients to get recommendations !
                </h3>
              </div>
              <div className="ingredient__container">
                {count.map(num => {
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
                        type="text"
                        className="input__box"
                        name={`${num}`}
                        placeholder={`Add Ingredient ${num}`}
                        onInput={e => this.updateValue(e)}
                      />

                      <button
                        value={num}
                        className="add__link-button"
                        onClick={e => this.removeInput(e)}
                      >
                        <TiMinus />
                      </button>
                    </div>
                  );
                })}
              </div>
              <button className="add__link-button" onClick={this.addInput}>
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
