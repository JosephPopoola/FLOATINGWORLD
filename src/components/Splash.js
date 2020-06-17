import React, { useState } from "react";

//components
import PageGlobe from "./globe/PageGlobe";

// styles
import { SplashContainer, Title, Title1, TitleContainer } from "../styles/components/splash";

let globeProps = {
	height: "70vh",
	alignItems: "center",
	bottom: false,
	zIndex: false
};

export default function Splash(props) {
	globeProps.globeClicked = props.globeClicked;

	const [ show, setShow ] = useState(false);

	setTimeout(() => {
		setShow(true);
	}, 3500);

	const transition = { duration: 5, ease: "easeInOut", staggerChildren: 2 };

	const variants = {
		visible: { transition },
		hidden: {  transition }
	};

	const floatingTransition = { duration: 7, ease: "easeInOut", yoyo: Infinity };

	const floatingVariants = {
		visible: { opacity: 1, y: 20 },
		hidden: { opacity: 0, y: -10 }
	}

	const worldVariants = {
		visible: { opacity: 1, y: -20 },
		hidden: { opacity: 0, y: 10 }
	}

	function ShowTitle() {
		if (show) {
			return (
				<TitleContainer         
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={transition}>
					<Title
						className="no-select"
						variants={floatingVariants}
						transition={floatingTransition}
						top={true}
					>
						FLOATING
					</Title>
					<Title1
						className="no-select"
						variants={worldVariants}
						transition={floatingTransition}
						top={false}
					>
						WORLD
					</Title1>
				</TitleContainer>
			);
		}
		return <></>;
	}

	return (
		<SplashContainer>
			<ShowTitle />
			<PageGlobe props={globeProps} />
		</SplashContainer>
	);
}
