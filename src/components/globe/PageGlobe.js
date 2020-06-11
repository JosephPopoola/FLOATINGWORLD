import React from "react";
import styled, { keyframes, css } from "styled-components";
import { slideInUp } from "react-animations";

import { Canvas } from "react-three-fiber";

import ClickGlobe from "./clickableGlobe";

import Scene from "./Scene";
import { Globe } from "./Globe";

const fadeInAnimation = keyframes`${slideInUp}`;
let fadeInAnim = css`animation: 3.5s ${fadeInAnimation};`;

const FwContainer = styled.div`
	${(props) => (props.zIndex ? "z-index: -1" : "")};
	width: 100vw;
	height: ${(props) => (props.gHeight ? props.gHeight : "100vh")};
	position: absolute;
	align-items: ${(props) => (props.alignItems ? props.alignItems : "flex-end")};
	${(props) => (props.bottom ? "bottom: -65%" : "")};
	display: flex;
	align-items: center;
	justify-content: center;
	${fadeInAnim};
	@media (max-width: 768px) {
		${(props) => (props.bottom ? "bottom: -75%" : "")};
	}
`;

let cc = css`
	min-width: 100vw;
	width: 100vw;
	min-height: 100vh;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
`;

const onPointerUp = (e) => {
	e.stopPropagation();
	e.target.releasePointerCapture(e.pointerId);
};

export default function PageGlobe(props) {
	const { height, bottom, alignItems, zIndex, globeClicked } = props.props;

	return (
		<FwContainer gHeight={height} bottom={bottom} alignItems={alignItems} zIndex={zIndex}>
			<Canvas className={cc}>
				<Scene>
					<Globe />
				</Scene>
			</Canvas>
			<ClickGlobe globeClicked={globeClicked} />
		</FwContainer>
	);
}
