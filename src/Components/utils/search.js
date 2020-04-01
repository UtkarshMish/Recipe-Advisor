import axios from "axios";
export const getCuisine = async pageno => {
  let response = await axios.get(`/api/get-recipe/${pageno}`);
  return response.data;
};
export const searchCuisine = async (query, page) => {
  let response = await axios.post(`/api/search`, {
    query: query,
    page_no: page
  });
  return response.data;
};
