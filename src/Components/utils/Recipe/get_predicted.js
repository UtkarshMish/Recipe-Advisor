import axios from "axios";
export const getPredictions = async (queryString) => {
  let response = await axios.post(`/api/predict`, {
    queryString,
  });
  return response.data;
};
