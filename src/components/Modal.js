import React from "react";

//styles
import { ModalContainer, CloseButton } from "../styles/components/modal";

export default function Modal(props) {
	const { close } = props;

	return (
		<ModalContainer>
			<CloseButton onClick={close}>X</CloseButton>
			{props.children}
		</ModalContainer>
	);
}
