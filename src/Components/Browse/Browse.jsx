import React, { Component } from "react";
import RecipeList from "../common/RecipeList";
import Pagination from "../common/Pagination";
class Browse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="recipe__container">
          <div className="recipe__list">
            <RecipeList />
          </div>
          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
