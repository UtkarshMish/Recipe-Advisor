import React, { Component } from "react";
import Loader from "../common/Loader";
import { getRecipe } from "../utils/Recipe/cuisine";
import { GiFireBowl } from "react-icons/gi";
import "./Recipe.css";
import Failed from "../common/Failed";
import { isLoggedIn } from "../utils/Auth/checkLogin";
import { toast } from "react-toastify";
import { updateLikings } from "../utils/Recipe/user_likings";
class Recipe extends Component {
	state = {
		cuisine: [],
		loading: true,
		liked: false,
		failed: false,
	};
	async componentDidMount() {
		let { cuisine, liked } = this.state;
		const id = this.props.match.params.id;
		cuisine = await getRecipe(id);
		const liking = await updateLikings(false);
		if (liking["liked_recipe"] && liking["liked_recipe"].length > 0 && liking["liked_recipe"].find((elm) => parseInt(elm) === parseInt(id)))
			liked = true;
		if (cuisine && cuisine["id"] === id) return this.setState({ cuisine, loading: false, liked });
		return this.setState({ loading: false, failed: true });
	}
	onClick = async () => {
		let { liked, cuisine } = this.state;
		if (await isLoggedIn()) {
			liked = !liked;
			let response = await updateLikings(false, liked, cuisine["id"]);
			if (response.value === true) return this.setState({ liked });
		} else
			toast.error("Log in required", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 1000,
				hideProgressBar: true,
				closeButton: false,
				className: "login__error",
			});
	};

	render() {
		const { cuisine, loading, liked, failed } = this.state;
		if (loading) return <Loader />;
		if (failed) return <Failed backArea="/browse" />;
		const iconStyle = liked ? { color: "#fdcf58 " } : { color: "inherit" };
		return (
			<div className="recipe__container">
				<div className="recipe__head">
					<h1>{cuisine["name"]}</h1>
					<GiFireBowl style={iconStyle} onClick={this.onClick} />
				</div>
				<div className="recipe__body">
					<div className="recipe__image">
						<img src={cuisine["img_link"]} alt={cuisine["name"]} />
					</div>
					<div className="recipe__ingredients">
						<h2 className="recipe__heading">Ingredients in Recipe:</h2>
						<ul>
							{cuisine["ingredients"] &&
								cuisine["ingredients"].map((ingredient, index) =>
									ingredient !== ingredient.toUpperCase() ? (
										<li key={index} className="ingredients">
											{ingredient}
										</li>
									) : (
										<h5 key={index} className="ingredients-heading">
											{ingredient}
										</h5>
									)
								)}
						</ul>
					</div>
				</div>
				<h2 className="recipe__heading">Nutrition Values</h2>
				<div className="recipe__info">
					<p>{"Serving Count :" + cuisine["serving_count"]}</p>
					{Object.keys(cuisine["nutrition"]).map((item) => (
						<p key={item}>{item + " : " + cuisine["nutrition"][item]}</p>
					))}
				</div>
				<div className="recipe__instructions">
					<h2 className="recipe__heading">Instructions</h2>
					<ul>
						{cuisine["description"] &&
							cuisine["description"].map((steps, index) =>
								!Array.isArray(steps) ? (
									<li key={index} dangerouslySetInnerHTML={{ __html: steps }}></li>
								) : (
									steps.map((item) => (
										<li key={item} className="list-items">
											{" " + item}
										</li>
									))
								)
							)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Recipe;
