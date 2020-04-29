import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeOut } from 'react-animations';
import { createAnimation } from './helpers/createAnimation';

import Nav from './components/Nav';
import Splash from './components/Splash';

import './App.css';

let fadeOutAnim = createAnimation(fadeOut, '1.2s');

const SplashContainer = styled.div`
	background-color: black;
	color: white;
	min-height: 100vh;
	height: 100vh;
	min-width: 100vw;
	width: 100vw;
	position: absolute;
	z-index: 998;
	top: 0;
	left: 0;
	${fadeOutAnim};
	animation-delay: ${(props) => props.delay};
`;

function App() {
	const [ showSplash, setShowSplash ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowSplash(false);
		}, 5000);
	}, []);

	return (
		<div className="App">
			<header className="App-header">{!showSplash && <Nav />}</header>
			{showSplash && (
				<SplashContainer delay="4s">
					<Splash />
				</SplashContainer>
			)}
		</div>
	);
}

export default App;
