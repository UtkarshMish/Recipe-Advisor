import axios from "axios";
export const getCuisine = async pageno => {
  let response = await axios.get(`/api/get-recipe/${pageno}`);
  return response.data;
};
export const getRecipe = async id => {
  let response = await axios.get(`/api/recipe/${id}`);
  return response.data;
};
