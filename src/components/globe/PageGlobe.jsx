import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Canvas } from "react-three-fiber";
import { fadeInUp } from "react-animations";

import Scene from "./Scene";

const fadeInAnimation = keyframes`${fadeInUp}`;
let fadeInAnim = css`animation: 3s ${fadeInAnimation};`;

let cc = css`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
`;

const FwContainer = styled.div`
	${(props) => (props.zIndex ? "z-index: -1" : "")};
	width: 100vw;
	height: ${(props) => (props.gHeight ? props.gHeight : "100vh")};
	position: absolute;
	align-items: ${(props) => (props.alignItems ? props.alignItems : "flex-end")};
	${(props) => (props.bottom ? "bottom: -65%" : "")};
	${fadeInAnim};
`;

export default function PageGlobe(props) {
	const { height, bottom, alignItems, zIndex } = props.props;

	return (
		<FwContainer gHeight={height} bottom={bottom} alignItems={alignItems} zIndex={zIndex}>
			<Canvas className={cc}>
				<Scene />
			</Canvas>
		</FwContainer>
	);
}
