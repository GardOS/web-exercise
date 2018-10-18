import React from "react";
import { Link } from "react-router-dom";

export const FruitHub = () => {
	return (
		<div className="container">
			<h1>This is the fruit hub</h1>
			<h4>Take me <Link to={"/"}><u>back</u></Link></h4>
		</div>
	);
};

export default FruitHub;