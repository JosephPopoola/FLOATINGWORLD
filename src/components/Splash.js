import React, { useEffect, useState } from "react";

//components
import PageGlobe from "./globe/PageGlobe";

// styles
import { SplashContainer, Title, TitleContainer } from "../styles/components/splash";

let globeProps = {
	height: "70vh",
	alignItems: "center",
	bottom: false,
	zIndex: false
};

// animate={{ opacity: 1 }} transition={{ duration: 2, staggerChildren: 0.5 }}>

export default function Splash(props) {
	globeProps.globeClicked = props.globeClicked;

	const [ show, setShow ] = useState(false);

	setTimeout(() => {
		setShow(true);
	}, 3500);

	const transition = { duration: 3, ease: "easeInOut", staggerChildren: 2 };

	const variants = {
		visible: { opacity: 1, transition },
		hidden: { opacity: 0, transition }
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
					<Title
						className="no-select"
						variants={worldVariants}
						transition={floatingTransition}
						top={false}
					>
						WORLD
					</Title>
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
