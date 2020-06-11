import styled from "styled-components";
import { fadeInUp } from "react-animations";
import { createAnimation } from "../../helpers/createAnimation";
import { motion } from "framer-motion";

let fadeInAnim = createAnimation(fadeInUp, "3s");

export const ShowsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 70vh;
	margin: 15vh 0;
	align-self: center;
	overflow-x: scroll;
	overflow-y: hidden;
	z-index: 0;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 768px) {
		margin: 10vh 0;
		padding-top: 0vh;
	}
`;

export const ShowTile = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width};
	min-width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.height};
	margin: 10vw;
	box-sizing: border-box;
	align-self: flex-start;
	alight-content: flex-start;
	&:nth-child(2n-7) {
		align-self: center;
		alight-content: center;
	}
	&:nth-child(3n) {
		align-self: flex-end;
		alight-content: flex-end;
	}
	opacity: 0;
	${fadeInAnim} animation-fill-mode: forwards;
	animation-delay: 1.5s;
`;

export const ShowText = styled(motion.div)`
	position: relative;
	color: black;
	margin-top: -10vh;
	font-weight: 600;
	font-size: 2em;
	width: 100%;
    padding-left: 20vw;
	opacity: 0;
	${fadeInAnim} animation-fill-mode: forwards;
	animation-delay: 2.5s;
	@media (max-width: 768px) {
		margin-top: -5vh;
	}
`;

export const TileContainer = styled.div`
	// padding-top: 5vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-start;
	x: flex-start;
	&:nth-child(2n-7) {
		align-self: center;
		alight-content: center;
	}
	&:nth-child(3n) {
		align-self: flex-end;
		alight-content: flex-end;
	}
`;
