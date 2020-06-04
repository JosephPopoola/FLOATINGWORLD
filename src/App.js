import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import Nav from "./components/Nav";
import Splash from "./components/Splash";

//styles
import { theme, SplashContainer } from "./styles/global";

import "./App.css";

//get the current route and if its not home then dont show splash.
// do this in a use effect

function App() {
	const [ showSplash, setShowSplash ] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setShowSplash(false);
	// 	}, 5000);
	// }, []);

	// function that sets splash state
	// triggers pop animation
	// pop animation happens, delay for 1.5s then yoyo: 1
	// maybe welcome text after click?
	// store a enter state locally so splash doesnt show on every refresh

	// const globeClicked = useCallback(() => {
	// 	console.log("pim");
	// 	setShowSplash(false);
	// }, []);

	const globeClicked = () => {
		console.log("pim");
		setShowSplash(false);
	};

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<header className="App-header">{!showSplash && <Nav />}</header>
				{showSplash && (
					<SplashContainer delay="4s">
						<Splash globeClicked={globeClicked} />
					</SplashContainer>
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;
