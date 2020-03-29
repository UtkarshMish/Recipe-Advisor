import axios from "axios";
export const signUp = user => {
  let response = axios.post("/api/signup", user);
  return response.then(res => res.data);
};
