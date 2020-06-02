import styled from "styled-components";
import { fadeIn } from "react-animations";
import { createAnimation } from "../../helpers/createAnimation";
let fadeInAnim = createAnimation(fadeIn, "3s");

export const SplashContainer = styled.div`
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

export const Title = styled.div`
    color: white
    margin: 20vh 30vw;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	line-height: 1.8;
	${fadeInAnim};
	@media (max-width: 768px) {
		font-size: 4.375em;
		line-height: 7;
	}
	animation: float ${(props) => props.floatTime} ease-in-out infinite ${(props) => (props.reverse ? "reverse" : "")};
`;
