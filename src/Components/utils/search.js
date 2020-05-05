import axios from "axios";
export const searchCuisine = async (query, page) => {
  let response = await axios.post(process.env.REACT_APP_SEARCH, {
    query: query,
    page_no: page,
  });
  return response.data;
};
