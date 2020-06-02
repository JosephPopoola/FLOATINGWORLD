import React, { useState, useEffect } from "react";
import HorizontalScroll from "react-scroll-horizontal";

import HomeTile from "./HomeTile";
import Modal from "./Modal";
import { ITEMS } from "../data/data";

//hooks
import useWindowSize from "../hooks/useWindowSize";

//styles
import { CarouContainer, ModalEntry } from "../styles/components/carousel";

// Boxes static as image behind slightly moves, panoramic effect (I believe)
// Each home tile needs a click func that triggers the show modal state

export default function Carousel() {
	const [ currentItem, setCurrentItem ] = useState({});
	const [ showModal, setShowModal ] = useState(false);
	const [ isMobile, setIsMobile ] = useState(true);
	const size = useWindowSize();

	const toggleModal = function(item) {
		setCurrentItem(item);
		setShowModal(!showModal);
	};

	useEffect(
		() => {
			if (size.width > 800) {
				setIsMobile(false);
			}
		},
		[ size.width ]
	);

	function Item(props) {
		const isMobile = props.isMobile;
		if (isMobile) {
			return (
				<div className="inherit">
					{ITEMS.map((item, idx) => {
						return <HomeTile tileRef key={idx} item={item} click={toggleModal} />;
					})}
					<div className="end-of-scroll">E</div>
				</div>
			);
		}
		return (
			<HorizontalScroll className="styled-horizontal-scroll">
				{ITEMS.map((item, idx) => {
					return <HomeTile tileRef key={idx} item={item} click={toggleModal} />;
				})}
				<div className="end-of-scroll">E</div>
			</HorizontalScroll>
		);
	}

	return (
		<CarouContainer>
			<Item isMobile={isMobile} />
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
