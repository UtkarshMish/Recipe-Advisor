import axios from "axios";
export const setUserApi = (user, token) => {
  try {
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("token", token);
    return true;
  } catch (e) {
    return false;
  }
};
export const checkAPI = async (user, token) => {
  try {
    const user = Boolean(sessionStorage.getItem("user")) || false;
    const token = user ? sessionStorage.getItem("token") : false;
    let response = await axios.post("/api/verify-token", { user, token });
    return response.data.value;
  } catch (e) {
    return { error: e };
  }
};
