import axios from "axios";
export const getPredictions = async (queryString) => {
  let response = await axios.post(process.env.REACT_APP_PREDICT, {
    queryString,
  });
  return response.data;
};
