import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="container">
			<h1>404 page not found</h1>
			<h4>Oh no! Take me <Link to={"/"}><u>back</u></Link></h4>
		</div>
	);
};

export default NotFound;