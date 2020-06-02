//create a theme that hold the main colours for the site
import styled, { css } from "styled-components";
import { fadeOut } from "react-animations";
import { createAnimation } from "../helpers/createAnimation";

let fadeOutAnim = createAnimation(fadeOut, "1.2s");

export const theme = {};

export const SplashContainer = styled.div`
	background-color: black;
	color: white;
	min-height: 100vh;
	height: 100vh;
	min-width: 100vw;
	width: 100vw;
	position: absolute;
	z-index: 998;
	top: 0;
	left: 0;
	${fadeOutAnim};
	animation-delay: ${(props) => props.delay};
`;
