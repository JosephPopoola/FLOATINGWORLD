import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import Nav from "./components/Nav";
import Splash from "./components/Splash";

//styles
import { theme } from "./styles/global";
import { PopContainer, Pop } from "./styles/components/splash";

import "./App.css";

//get the current route and if its not home then dont show splash.
// do this in a use effect

function App() {
	const [ showSplash, setShowSplash ] = useState(true);
	const [ showPop, setShowPop ] = useState(false);

	// function that sets splash state
	// triggers pop animation
	// pop animation happens, delay for 1.5s then yoyo: 1
	// maybe welcome text after click?
	// store a enter state locally so splash doesnt show on every refresh

	const globeClicked = useCallback((e) => {
		if (e) {
			e.stopPropagation();
			e.target.setPointerCapture(e.pointerId);
		}
		setShowPop(true);

		setTimeout(() => {
			setShowSplash(false);
		}, 1000);
	}, []);

	return (
		<div className="App" touch-action="none">
			<ThemeProvider theme={theme}>
				<header className="App-header">{!showSplash && <Nav />}</header>
				{showSplash && <Splash globeClicked={globeClicked} />}
				{showPop && (
					<PopContainer>
						<Pop />
					</PopContainer>
				)}
			</ThemeProvider>
		</div>
	);
}

export default App;
