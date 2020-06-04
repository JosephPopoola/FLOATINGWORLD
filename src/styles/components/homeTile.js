import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTileContainer = styled(motion.div)`
	height: 45vh;
	min-height: 45vh;
	max-height: 45vh;
	width: 45vw;
	max-width: 45vw;
	min-width: 45vw;
	background-color: #333;
	color: white;
	margin: 0 7.5vw;
	display: inline-block;
	&:last-child {
		margin-right: 7.5vw;
	}
	cursor: pointer;
	background-image: url(${(props) => props.img});
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

export const TileTitle = styled(motion.div)`
	font-size: 2em;
	font-weight: 300;
	@media (max-width: 768px) {
		font-size: 1em;
		transform: rotate(-90deg);
		text-align: center;
	}
`;
