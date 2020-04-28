import axios from "axios";
export const signUp = (user) => {
  let response = axios.post(process.env.REACT_APP_SIGNUP, user);
  return response.then((res) => res.data);
};
