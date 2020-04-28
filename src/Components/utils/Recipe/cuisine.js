import axios from "axios";
export const getCuisine = async (PAGE) => {
  let response = await axios.get(`${process.env.REACT_APP_GET_RECIPE}/${PAGE}`);
  return response.data;
};
export const getRecipe = async (id) => {
  let response = await axios.get(`${process.env.REACT_APP_RECIPE}/${id}`);
  return response.data;
};
