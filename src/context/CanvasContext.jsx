import React from "react";
import { Canvas } from "react-three-fiber";
import { css } from "styled-components";

const CanvasContext = React.createContext();

let cc = css`
	min-width: 100vw;
	width: 100vw;
	min-height: 100vh;
	height: 100vh;
	position: fixed;
	z-index: -1;
`;

function CanvasProvider({ children }) {
	return (
		<CanvasContext.Provider>
			<Canvas className={cc}>{children}</Canvas>
		</CanvasContext.Provider>
	);
}

export { CanvasProvider };
