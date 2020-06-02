import React from "react";

//components
import PageGlobe from "./globe/PageGlobe";

// styles
import { SplashContainer, Title } from "../styles/components/splash";

const props = {
	height: "70vh",
	alignItems: "center",
	bottom: false,
	zIndex: false
};

export default function Splash() {
	return (
		<SplashContainer>
			<Title floatTime={"7s"}>FLOATING</Title>
			<Title floatTime={"7.2s"} reverse={true}>
				WORLD
			</Title>
			<PageGlobe props={props} />
		</SplashContainer>
	);
}
