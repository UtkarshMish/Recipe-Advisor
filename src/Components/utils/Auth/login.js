import axios from "axios";
export const checkLogin = async user => {
  let response = await axios.post("/login", user);
  return response.data;
};
