import React from "react";

//components
import Carousel from "../components/Carousel";
import PageTitle from "../components/PageTitle";
import PageGlobe from "../components/globe/PageGlobe";

//styles
import { HomeContainer } from "../styles/pages/home";

const props = {
	alignItems: "center",
	bottom: true,
	zIndex: true
};

export default function Home() {
	return (
		<HomeContainer>
			<PageTitle>HOME</PageTitle>
			<Carousel />
			<PageGlobe props={props} />
		</HomeContainer>
	);
}
