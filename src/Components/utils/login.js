import axios from "axios";
export const checkLogin = user => {
  let response = axios.post("./login", user);
  return response.then(res => res.data);
};
