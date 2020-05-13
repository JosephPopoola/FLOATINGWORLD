import React from "react";
import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";

import Carousel from "../components/Carousel";
import PageTitle from "../components/PageTitle";
import PageGlobe from "../components/globe/PageGlobe";

const fadeInAnimation = keyframes`${fadeIn}`;
let fadeInAnim = css`animation: 4s ${fadeInAnimation};`;

const HomeContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	${fadeInAnim};
`;

const props = {
	alignItems: "center",
	bottom: true,
	zIndex: true
};

export default function Home() {
	return (
		<HomeContainer>
			<PageTitle>HOME</PageTitle>
			<Carousel />
			<PageGlobe props={props} />
		</HomeContainer>
	);
}
