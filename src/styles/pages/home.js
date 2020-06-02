import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
let fadeInAnim = css`animation: 4s ${fadeInAnimation};`;

export const HomeContainer = styled.div`
	position: absolute;
	z-index: 0;
	top: 10vh;
	box-sizing: border-box;
	padding-bottom: 10vh;
	height: 90vh;
	width: 100%;
	left: 0;
	display: flex;
	flex-direction: column;
	${fadeInAnim};
`;
