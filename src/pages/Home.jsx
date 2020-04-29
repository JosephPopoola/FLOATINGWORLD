import React from 'react';
import styled from 'styled-components';

import Carousel from '../components/Carousel';
import PageTitle from '../components/PageTitle';

const HomeContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export default function Home() {
	return (
		<HomeContainer>
			<PageTitle>HOME</PageTitle>
			<Carousel />
		</HomeContainer>
	);
}
