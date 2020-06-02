import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	min-height: 100vh;
	min-width: 100vw;
	max-height: 100vh;
	max-width: 100vw;
	background-color: black;
	z-index: 99999; !imprortant;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5vh;
	box-sizing: border-box;
	text-align: center;
	max-width: 100%;
`;

export const CloseButton = styled.div`
	color: red;
	cursor: pointer;
	position: fixed;
	top: 5vh;
	margin: 0 auto;
	z-index: 999999;
`;
