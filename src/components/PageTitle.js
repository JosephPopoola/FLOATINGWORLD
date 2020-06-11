import React from "react";

//styles
import { PageTitleContainer, Text } from "../styles/components/pageTitle";

export default function PageTitle(props) {
	return (
		<PageTitleContainer>
			<Text>{props.children}</Text>
		</PageTitleContainer>
	);
}
