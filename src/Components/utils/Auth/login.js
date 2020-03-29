import axios from "axios";
export const checkLogin = async user => {
  let response = await axios.post("/api/login", user);
  return response.data;
};
