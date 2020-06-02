import React, { useState, useEffect } from "react";
import HorizontalScroll from "react-scroll-horizontal";

import { SHOWS } from "../data/data";
import PageTitle from "../components/PageTitle";
import PageGlobe from "../components/globe/PageGlobe";
import useWindowSize from "../hooks/useWindowSize";

//styles
import { ShowsContainer, ShowTile } from "../styles/pages/shows";

const wOptions = [ "30vw", "35vw", "45vw", "42vw", "33vw" ];
const hOptions = [ "32vh", "44vh", "51vh", "59vh" ];

const props = {
	alignItems: "center",
	bottom: true,
	zIndex: true
};

export default function Shows() {
	const [ isMobile, setIsMobile ] = useState(true);
	const size = useWindowSize();

	const iframeContainer = function(iframe) {
		return {
			__html: iframe
		};
	};

	useEffect(
		() => {
			if (size.width > 800) {
				setIsMobile(false);
			}
		},
		[ size.width ]
	);

	function Show(props) {
		const isMobile = props.isMobile;
		if (isMobile) {
			return (
				<div className="inherit">
					{SHOWS.map((show, idx) => {
						return (
							<ShowTile
								key={idx}
								className="drop-shadow"
								width={wOptions[Math.floor(Math.random() * wOptions.length)]}
								height={hOptions[Math.floor(Math.random() * hOptions.length)]}
								dangerouslySetInnerHTML={iframeContainer(show)}
							/>
						);
					})}
					<div className="end-of-scroll">E</div>);
				</div>
			);
		}
		return (
			<HorizontalScroll pageLock={true}>
				{SHOWS.map((show, idx) => {
					return (
						<ShowTile
							key={idx}
							className="drop-shadow"
							width={wOptions[Math.floor(Math.random() * wOptions.length)]}
							height={hOptions[Math.floor(Math.random() * hOptions.length)]}
							dangerouslySetInnerHTML={iframeContainer(show)}
						/>
					);
				})}
				<div className="end-of-scroll">E</div>
			</HorizontalScroll>
		);
	}

	return (
		<ShowsContainer className="hScroll">
			<PageTitle>SHOWS</PageTitle>
			<Show isMobile={isMobile} />
			<PageGlobe props={props} />
		</ShowsContainer>
	);
}