import styled, { keyframes, css } from "styled-components";
import { fadeInUp } from "react-animations";

const fadeInAnimation = keyframes`${fadeInUp}`;
let fadeInAnim = css`animation: 3s ${fadeInAnimation};`;

export const CarouContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	height: 90vh;
	box-sizing: border-box;
	padding-bottom: 10vh;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}
	opacity: 0;
	${fadeInAnim} animation-fill-mode: forwards;
	animation-delay: .5s;
`;

export const ModalEntry = styled.div`padding: 2vh 0;`;
