import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

export const SplashContainer = styled(motion.div)`
	background-color: white;
	color: white;
	min-height: 100vh;
	height: 100vh;
	min-width: 100vw;
	width: 100vw;
	position: absolute;
	z-index: 998;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const PopContainer = styled(motion.div)`
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
`;

export const Title = styled(motion.div)`
    color: black;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	@media (max-width: 1000px) {
		font-size: 10.375em;
	}
	@media (max-width: 768px) {
		font-size: 4.375em;
		line-height: 5;
		${(props) => (props.top ? "margin-top: -17vh" : "margin-top: 26vh")};
		top: 5vh;
		left: 0;
		right: 0;
	}
`;

export const Title1 = styled(motion.div)`
    color: black;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	z-index: 0;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	@media (max-width: 1000px) {
		font-size: 10.375em;
	}
	@media (max-width: 768px) {
		font-size: 4.375em;
		line-height: 5;
		bottom: -15vh;
		left: 0;
		right: 0;
	}
`;

export const TitleContainer = styled(motion.div)`
	min-width: 100%;
	min-height: 100%;
	height: 100%;
	width: 100%;
	position: inherit;
	top: inherit;
	left: inherit;
`;

const styles = {
	background: "black",
	zIndex: 999,
	borderRadius: 30,
	width: 20,
	height: 20,
	margin: "auto",
	display: "flex",
	justifyConetent: "center",
	alignItems: "center"
};

export const Pop = () => (
	<motion.div
		style={styles}
		initial={{ scale: 0 }}
		animate={{ scale: 200 }}
		transition={{ duration: 0.9, yoyo: 1, repeatDelay: 0.1, ease: "easeInOut" }}
	/>
);
