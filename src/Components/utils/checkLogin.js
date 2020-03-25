import { checkAPI } from "./storeToken";

export const isLoggedIn = async () => {
  const auth = await checkAPI();
  return auth;
};
export const loggedOut = () => {
  localStorage.clear();
  sessionStorage.clear();
};
