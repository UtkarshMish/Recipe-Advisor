import React, { Component } from "react";
import RecipeList from "../common/RecipeList";
import Pagination from "../common/Pagination";
import { getCuisine } from "../utils/Recipe/cuisine";
import Loader from "../common/Loader";
class Browse extends Component {
  state = {
    currentPage: 1,
    cuisines: [],
    isLoading: true,
    pageSize: 1,
    startValue: 1
  };
  componentDidMount = async () => {
    let { cuisines, pageSize, currentPage, startValue } = this.state;
    currentPage =
      this.props.match.params.id || this.props.match.params > 0
        ? this.props.match.params.id
        : currentPage;
    startValue = currentPage;
    cuisines = await getCuisine(currentPage);
    const size = cuisines.pop();
    pageSize = size["totalSize"];
    if (cuisines.length > 0) {
      this.setState({ cuisines, isLoading: false, pageSize, startValue });
    }
  };
  loading = () => [this.setState({ isLoading: true })];
  handlePageChange = async page => {
    let { currentPage, cuisines, pageSize, startValue } = this.state;
    if (page > 0) {
      currentPage = page;
      startValue = page;
      this.loading();
      cuisines = await getCuisine(currentPage);
      const size = cuisines.pop();
      pageSize = size["totalSize"];
      this.setState({
        currentPage: currentPage,
        pageSize,
        cuisines,
        isLoading: false,
        startValue
      });
    }
  };
  render() {
    const {
      cuisines,
      isLoading,
      pageSize,
      currentPage,
      startValue
    } = this.state;
    if (isLoading) return <Loader />;
    else
      return (
        <React.Fragment>
          <div className="recipe__container">
            <div className="recipe__list">
              <RecipeList cuisines={cuisines} />
            </div>
            <div className="pagination">
              <Pagination
                items={cuisines.length}
                onPageChange={this.handlePageChange}
                pageSize={pageSize}
                currentPage={currentPage}
                startValue={startValue}
              />
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default Browse;
