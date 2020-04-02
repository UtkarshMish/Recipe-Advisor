import React, { Component } from "react";
import RecipeList from "./RecipeList";
import Pagination from "../common/Pagination";
import { getCuisine } from "../utils/Recipe/cuisine";
import Loader from "../common/Loader";
import { searchCuisine } from "../utils/search";
import Failed from "../common/Failed";
class Browse extends Component {
  state = {
    currentPage: 1,
    cuisines: [],
    isLoading: true,
    pageSize: 1,
    startValue: 1,
    searchQuery: "",
    failed: false
  };
  componentDidMount = async () => {
    let { cuisines, pageSize, currentPage, startValue } = this.state;
    currentPage =
      this.props.match.params.id && this.props.match.params.id > 0
        ? parseInt(this.props.match.params.id)
        : currentPage;
    startValue = currentPage;
    cuisines = await getCuisine(currentPage);
    const size = cuisines.pop();
    pageSize = size["totalSize"];
    if (pageSize > 0 && cuisines.length !== 0) {
      return this.setState({
        cuisines,
        isLoading: false,
        pageSize,
        startValue,
        currentPage,
        failed: false
      });
    }
    return this.setState({ isLoading: false, failed: true });
  };
  loading = () => [this.setState({ isLoading: true })];
  handlePageChange = async page => {
    let {
      currentPage,
      cuisines,
      pageSize,
      startValue,
      searchQuery
    } = this.state;
    if (page > 0) {
      currentPage = page;
      startValue = page;
      this.loading();
      if (searchQuery.length > 0) {
        cuisines = await searchCuisine(searchQuery, currentPage);
      } else {
        cuisines = await getCuisine(currentPage);
      }
      if (cuisines.length > 0) {
        const size = cuisines.pop();
        pageSize = size["totalSize"];
        return this.setState({
          currentPage: currentPage,
          pageSize,
          cuisines,
          isLoading: false,
          startValue,
          failed: false
        });
      } else {
        return this.setState({
          isLoading: false,
          failed: true
        });
      }
    }
  };
  handleSearch = async e => {
    let { searchQuery } = this.state;
    searchQuery = e.target.value;
    await this.setState({ searchQuery });
    return await this.searchRecipe();
  };
  searchRecipe = async () => {
    let { searchQuery, cuisines, pageSize, startValue } = this.state;
    startValue = 1;
    cuisines = await searchCuisine(searchQuery, startValue);
    const size = cuisines.pop();
    pageSize = size["totalSize"];
    this.setState({
      cuisines,
      isLoading: false,
      pageSize,
      startValue,
      currentPage: 1,
      failed: false
    });
    if (pageSize === 0) {
      return this.setState({
        isLoading: false,
        startValue,
        currentPage: 1,
        failed: true
      });
    }
  };
  render() {
    const {
      cuisines,
      isLoading,
      pageSize,
      currentPage,
      startValue,
      searchQuery,
      failed
    } = this.state;
    if (isLoading) return <Loader />;
    else
      return (
        <React.Fragment>
          <div className="search__list">
            <input
              type="text"
              onChange={e => this.handleSearch(e)}
              className="input__box"
              name="search"
              value={searchQuery}
              placeholder="Search Cuisine!"
            />
          </div>
          {failed ? (
            <Failed />
          ) : (
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
          )}
        </React.Fragment>
      );
  }
}

export default Browse;
