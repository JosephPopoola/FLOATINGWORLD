import React from "react";
import PageTitle from "../components/PageTitle";
import PageGlobe from "../components/globe/PageGlobe";

const props = {
	alignItems: "center",
	bottom: true,
	zIndex: true
};

export default function Joinus() {
	return (
		<div>
			<PageTitle>JOIN US</PageTitle>
			<PageGlobe props={props} />
		</div>
	);
}
