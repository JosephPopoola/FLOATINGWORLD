import React from "react";
import { Parallax } from "react-scroll-parallax";

//styles
import { PageTitleContainer, Text } from "../styles/components/pageTitle";

export default function PageTitle(props) {
	return (
		<PageTitleContainer>
			<Parallax x={[ -50, 50 ]}>
				<Text>{props.children}</Text>
			</Parallax>
		</PageTitleContainer>
	);
}
