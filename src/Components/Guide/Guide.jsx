import React, { Component } from "react";
import "./Guide.css";
import { TiPlus, TiMinus } from "react-icons/ti";
class Guide extends Component {
  state = {
    count: [1]
  };
  addInput = () => {
    let { count } = this.state;
    if (isNaN(count[0]) || count.length < 1) {
      count = [1];
    } else {
      if (count.length < 10) {
        count.push(count[count.length - 1] + 1);
      }
    }
    this.setState({ count });
  };
  removeInput = e => {
    let { count } = this.state;
    if (isNaN(count[0]) || count.length < 2) {
      count = [1];
    } else {
      const index = count.indexOf(parseInt(e.target.value));
      if (index > -1) count.splice(index, 1);
      else count = [1];
    }
    this.setState({ count });
  };
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <div className="guide__container">
          <div className="recipe__guess-form">
            <div className="guess-form__header">
              <h3 className="sub-main__title">
                Add the Ingredients to get recommendations !
              </h3>
            </div>
            {count.map(num => {
              if (num > 10) {
                return <h5>Can't add more !!! </h5>;
              }
              return (
                <div key={num} className="input__container">
                  <input
                    type="text"
                    className="input__box"
                    placeholder={`Add Ingredient`}
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
            <button className="add__link-button" onClick={this.addInput}>
              <TiPlus />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Guide;
