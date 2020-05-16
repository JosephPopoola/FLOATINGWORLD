import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fadeInUp } from "react-animations";
import { createAnimation } from "../helpers/createAnimation";
import HorizontalScroll from "react-scroll-horizontal";

import { SHOWS } from "../data/data";
import PageTitle from "../components/PageTitle";
import PageGlobe from "../components/globe/PageGlobe";
import useWindowSize from "../hooks/useWindowSize";

let fadeInAnim = createAnimation(fadeInUp, "3s");

const ShowsContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 70vh;
	margin: 15vh 0;
	align-self: center;
	overflow-x: scroll;
	overflow-y: hidden;
	z-index: 0;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 768px) {
		height: 80vh;
		margin: 10vh 0;
		padding-top: 0vh;
	}
`;

const ShowTile = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width};
	min-width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.height};
	margin: 10vw;
	box-sizing: border-box;
	// justify-content: center;
	align-self: flex-start;
	alight-content: flex-start;
	&:nth-child(2n-7) {
		align-self: center;
		alight-content: center;
	}
	&:nth-child(3n) {
		align-self: flex-end;
		alight-content: flex-end;
	}
	opacity: 0;
	${fadeInAnim} animation-fill-mode: forwards;
	animation-delay: 1.5s;
`;

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

	useEffect(() => {
		if (size.width > 800) {
			setIsMobile(false);
		}
	});

	function Show(props) {
		const isMobile = props.isMobile;
		if (isMobile) {
			return (
				<span>
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
				</span>
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
