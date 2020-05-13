import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { fadeInUp } from "react-animations";

import HomeTile from "./HomeTile";
import Modal from "./Modal";
import { ITEMS } from "../data/data";

const fadeInAnimation = keyframes`${fadeInUp}`;
let fadeInAnim = css`animation: 3s ${fadeInAnimation};`;

const CarouContainer = styled.div`
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

const ModalEntry = styled.div`padding: 2vh 0;`;

// Boxes static as image behind slightly moves, panoramic effect (I believe)
// Each home tile needs a click func that triggers the show modal state

export default function Carousel() {
	const [ currentItem, setCurrentItem ] = useState({});
	const [ showModal, setShowModal ] = useState(false);

	const toggleModal = function(item) {
		setCurrentItem(item);
		setShowModal(!showModal);
	};

	const horizontalScroll = function(e) {
		// console.log(e);
		// if (e.deltaY > 0) item.scrollLeft += 100;
		// else item.scrollLeft -= 100;
	};

	return (
		<CarouContainer onWheel={(e) => horizontalScroll(e)}>
			{ITEMS.map((item, idx) => {
				return <HomeTile key={idx} item={item} click={toggleModal} />;
			})}
			<div className="end-of-scroll">E</div>
			{showModal && (
				<Modal close={toggleModal}>
					<ModalEntry>{currentItem.title}</ModalEntry>
					<ModalEntry>{currentItem.text}</ModalEntry>
					<ModalEntry>{currentItem.link}</ModalEntry>
				</Modal>
			)}
		</CarouContainer>
	);
}
