import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

export const SplashContainer = styled(motion.div)`
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
    color: white
    margin: 20vh 30vw;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	line-height: 1.8;
	z-index: 0;
	@media (max-width: 768px) {
		font-size: 4.375em;
		line-height: 7;
	}
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
		transition={{ duration: 0.9, yoyo: 1, repeatDelay: 0.5, ease: "easeInOut" }}
	/>
);
