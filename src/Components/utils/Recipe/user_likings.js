import axios from "axios";
export const getLikings = async () => {};
export const updateLikings = async (liked = null, recipe_id = null) => {
  const user = sessionStorage.getItem("user") || false;
  const token = user ? sessionStorage.getItem("token") : false;
  let response = await axios.post("/api/userLikings", {
    user,
    token,
    liked,
    recipe_id,
  });
  return response.data;
};
