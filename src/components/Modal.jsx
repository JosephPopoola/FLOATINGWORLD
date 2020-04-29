import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	min-height: 100vh;
	min-width: 100vw;
	background-color: black;
	z-index: 99999;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export default function Modal(props) {
	const { close } = props;

	return (
		<ModalContainer>
			<div onClick={close}>X</div>
			{props.children}
		</ModalContainer>
	);
}
