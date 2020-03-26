import axios from "axios";
export const getCuisine = async pageno => {
  let response = await axios.get(`/api/get-recipe/${pageno}`);
  return response.data;
};
