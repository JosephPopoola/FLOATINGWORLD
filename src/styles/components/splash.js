import styled from "styled-components";
import { motion } from "framer-motion";

export const SplashContainer = styled(motion.div)`
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
	position: relative;
`;

export const Title = styled(motion.div)`
    color: white
    margin: 20vh 30vw;
    font-size: 14.375em;
    display: flex;
    align-items: center;
    justify-content: center;
	line-height: 1.8;
	@media (max-width: 768px) {
		font-size: 4.375em;
		line-height: 7;
	}
`;
