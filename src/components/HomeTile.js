import React from "react";

//styles
import { HomeTileContainer, TileTitle } from "../styles/components/homeTile";

const transition = { duration: 0.5, ease: [ 0.43, 0.13, 0.23, 0.96 ] };
const imageVariants = {
	hover: { scale: 1.1 }
};

export default function HomeTile(props) {
	const { item, click } = props;

	return (
		<HomeTileContainer
			img={item.img}
			variants={imageVariants}
			transition={transition}
			className="drop-shadow"
			onClick={() => click(item)}
		>
			<TileTitle>{item.title}</TileTitle>
		</HomeTileContainer>
	);
}
