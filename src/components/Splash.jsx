import React from 'react';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import { slideInUp, fadeIn } from 'react-animations';
import { createAnimation } from '../helpers/createAnimation';

import Scene from './globe/Scene';

let fadeInUpAnim = createAnimation(slideInUp, '4s');
let fadeInAnim = createAnimation(fadeIn, '3s');

const SplashContainer = styled.div`
	min-height: 100vh;
	height: 100%;
	min-width: 100vw;
	width: 100%;
	z-index: 999;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Title = styled.div`
    color: white
    margin: 20vh 30vw;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	line-height: 1.8;
	${fadeInAnim};
`;

const FwContainer = styled.div`
	width: 100%;
	height: 70%;
	position: absolute;
	align-items: center;
	${fadeInUpAnim};
`;

export default function Splash() {
	return (
		<SplashContainer>
			<Title> FLOATING WORLD </Title>
			<FwContainer>
				<Canvas>
					<Scene />
				</Canvas>
			</FwContainer>
		</SplashContainer>
	);
}
