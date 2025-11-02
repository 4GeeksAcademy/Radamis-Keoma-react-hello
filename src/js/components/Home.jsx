import React from "react";

//include images into your bundle
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="p-3">
			<Card />
		</div>
	);
};

export default Home;