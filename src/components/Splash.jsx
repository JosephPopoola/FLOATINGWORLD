import React from "react";
import styled from "styled-components";
import { fadeIn } from "react-animations";
import { createAnimation } from "../helpers/createAnimation";

import PageGlobe from "../components/globe/PageGlobe";

let fadeInAnim = createAnimation(fadeIn, "3s");

const SplashContainer = styled.div`
	min-height: 100vh;
	height: 100%;
	min-width: 100vw;
	width: 100%;
	z-index: 999;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Title = styled.div`
    color: white
    margin: 20vh 30vw;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	line-height: 1.8;
	${fadeInAnim};
`;

const props = {
	height: "70vh",
	alignItems: "center",
	bottom: false,
	zIndex: false
};

export default function Splash() {
	return (
		<SplashContainer>
			<Title> FLOATING WORLD </Title>
			<PageGlobe props={props} />
		</SplashContainer>
	);
}
