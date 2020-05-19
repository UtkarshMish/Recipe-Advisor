import axios from "axios";
export const submitQuery = async (contact) => {
  let response = await axios.post(process.env.REACT_APP_SUBMIT_QUERY, contact);
  return response.data;
};
