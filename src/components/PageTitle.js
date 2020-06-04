import React from "react";
import { motion, useViewportScroll, useMotionValue, useTransform } from "framer-motion";

//styles
import { PageTitleContainer, Text } from "../styles/components/pageTitle";

export default function PageTitle(props) {
	// const { scrollXProgress } = useViewportScroll();
	// const x = useMotionValue(0);
	// const input = [ -200, 0, 200 ];
	// const output = [ 0, 1, 0 ];
	// const opacity = useTransform(x, input, output);

	return (
		<PageTitleContainer>
			<Text>{props.children}</Text>
		</PageTitleContainer>
	);
}
