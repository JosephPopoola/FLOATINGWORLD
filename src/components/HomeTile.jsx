import React from "react";
import styled from "styled-components";

const HomeTileContainer = styled.div`
	height: 45vh;
	min-height: 45vh;
	max-height: 45vh;
	width: 45vw;
	max-width: 45vw;
	min-width: 45vw;
	background-color: #333;
	color: white;
	margin: 0 7.5vw;
	display: inline-block;
	&:last-child {
		margin-right: 7.5vw;
	}
	cursor: pointer;
	background-image: url(${(props) => props.img});
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const TileTitle = styled.div`
	font-size: 2em;
	font-weight: 300;
	@media (max-width: 768px) {
		font-size: 1em;
		transform: rotate(-90deg);
		text-align: center;
	}
`;

export default function HomeTile(props) {
	const { item, click } = props;

	return (
		<HomeTileContainer img={item.img} className="drop-shadow" onClick={() => click(item)}>
			<TileTitle>{item.title}</TileTitle>
		</HomeTileContainer>
	);
}
