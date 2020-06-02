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
			<Title initial={{ y: -10 }} animate={{ y: 20 }} transition={{ duration: 7, ease: "easeInOut", yoyo: Infinity }}>
				FLOATING
			</Title>
			<Title initial={{ y: 10 }} animate={{ y: -20 }} transition={{ duration: 7.2, ease: "easeInOut", yoyo: Infinity }}>
				WORLD
			</Title>
			<PageGlobe props={props} />
		</SplashContainer>
	);
}
