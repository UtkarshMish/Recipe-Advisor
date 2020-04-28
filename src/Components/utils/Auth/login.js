import axios from "axios";
export const checkLogin = async (user) => {
  let response = await axios.post(process.env.REACT_APP_LOGIN, user);
  return response.data;
};
