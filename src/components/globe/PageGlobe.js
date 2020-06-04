import React from "react";
import styled, { keyframes, css } from "styled-components";
import { slideInUp } from "react-animations";

import { CanvasProvider } from "../../context/CanvasContext";

import Scene from "./Scene";
import { Globe } from "./Globe";

const fadeInAnimation = keyframes`${slideInUp}`;
let fadeInAnim = css`animation: 4s ${fadeInAnimation};`;

const FwContainer = styled.div`
	${(props) => (props.zIndex ? "z-index: -1" : "")};
	width: 100vw;
	height: ${(props) => (props.gHeight ? props.gHeight : "100vh")};
	position: absolute;
	align-items: ${(props) => (props.alignItems ? props.alignItems : "flex-end")};
	${(props) => (props.bottom ? "bottom: -65%" : "")};
	${fadeInAnim};
	@media (max-width: 768px) {
		${(props) => (props.bottom ? "bottom: -75%" : "")};
	}
`;

export default function PageGlobe(props) {
	const { height, bottom, alignItems, zIndex, globeClicked } = props.props;

	return (
		<FwContainer gHeight={height} bottom={bottom} alignItems={alignItems} zIndex={zIndex}>
			<CanvasProvider>
				<Scene>
					<Globe onClick={(e) => globeClicked()} />
				</Scene>
			</CanvasProvider>
		</FwContainer>
	);
}
