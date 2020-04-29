import React from 'react';
import styled from 'styled-components';

const HomeTileContainer = styled.div`
	height: 45vh;
	min-height: 45vh;
	max-height: 45vh;
	width: 45vw;
	max-width: 45vw;
	min-width: 45vw;
	background-color: gray;
	margin: 0 7.5vw;
	display: inline-block;
	&:last-child {
		margin-right: 7.5vw;
	}
	cursor: pointer;
	background-image: url(${(props) => props.img});
`;

export default function HomeTile(props) {
	const { item, click } = props;

	return (
		<HomeTileContainer img={item.img} className="drop-shadow" onClick={() => click(item)}>
			<div>{item.id}</div>
			<div>{item.name}</div>
		</HomeTileContainer>
	);
}
