import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import blueBrain from "./blue-brain-icon.svg";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="br2 shadow-2 tilt-bg"
				style={{
					height: "150px",
					width: "150px",
				}}
				tiltMaxAngleX="40"
			>
				<img src={blueBrain} alt="blue brain logo" />
				{/* Image by <a href="https://pixabay.com/users/sinisamaric1-3044277/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1710293">Sinisa Maric</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1710293">Pixabay</a> */}
			</Tilt>
		</div>
	);
};

export default Logo;
