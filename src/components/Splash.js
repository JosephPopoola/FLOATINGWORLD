import React, { useEffect } from "react";

//components
import PageGlobe from "./globe/PageGlobe";

// styles
import { SplashContainer, Title } from "../styles/components/splash";

let globeProps = {
	height: "70vh",
	alignItems: "center",
	bottom: false,
	zIndex: false
};

export default function Splash(props) {
	globeProps.globeClicked = props.globeClicked;

	return (
		<SplashContainer>
			<Title
				className="no-select"
				initial={{ y: -10 }}
				animate={{ y: 20 }}
				transition={{ duration: 7, ease: "easeInOut", yoyo: Infinity }}
			>
				FLOATING
			</Title>
			<Title
				className="no-select"
				initial={{ y: 10 }}
				animate={{ y: -20 }}
				transition={{ duration: 7.2, ease: "easeInOut", yoyo: Infinity }}
			>
				WORLD
			</Title>
			<PageGlobe props={globeProps} />
		</SplashContainer>
	);
}
