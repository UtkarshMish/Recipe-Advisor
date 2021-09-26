import axios from "axios";
export const updateLikings = async (recommendation = false, liked = null, recipe_id = null) => {
	const user = sessionStorage.getItem("user") || false;
	const token = user ? sessionStorage.getItem("token") : false;
	if (!token) {
		return false;
	}
	let response = await axios.post(process.env.REACT_APP_USER_LIKED, {
		user,
		token,
		liked,
		recipe_id,
		recommendation,
	});
	return response.data;
};
