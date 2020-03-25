import { checkAPI } from "./storeToken";

export const isLoggedIn = async () => {
  try {
    const auth = await checkAPI();
    if (auth) {
      return true;
    } else return false;
  } catch (e) {
    return false;
  }
};
export const loggedOut = () => {
  localStorage.clear();
  sessionStorage.clear();
};
