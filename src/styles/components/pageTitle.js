import styled, { keyframes, css } from "styled-components";

const fadeInAnimation = keyframes`
from { 
    opacity: 0;
    -webkit-transform: translateY(50%);
    -moz-transform: translateY(50%);
    -ms-transform: translateY(50%);
    -o-transform: translateY(50%);
    transform: translateY(50%);
 }
to   { 
    opacity: 0.5; 
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}
`;

let fadeInAnim = css`animation: 3s ${fadeInAnimation};`;

export const PageTitleContainer = styled.div`
	position: fixed;
	${fadeInAnim};
	opacity: 0.5;
	left: 50vw;
	z-index: -1;
	height: 90vh;
	top: 10vh;
	box-sizing: border-box;
	padding-bottom: 10vh;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const Text = styled.span`
	position: relative;
	font-size: 14.375em;
	@media (max-width: 768px) {
		font-size: 10.375em;
	}
`;
