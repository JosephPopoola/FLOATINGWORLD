import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

	useEffect(() => {
		setTimeout(() => {
			setShowSplash(false);
		}, 5000);
	}, []);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<header className="App-header">{!showSplash && <Nav />}</header>
				{showSplash && (
					<SplashContainer delay="4s">
						<Splash />
					</SplashContainer>
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;
