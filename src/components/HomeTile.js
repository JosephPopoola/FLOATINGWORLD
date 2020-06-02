import React from "react";

//styles
import { HomeTileContainer, TileTitle } from "../styles/components/homeTile";

export default function HomeTile(props) {
	const { item, click } = props;

	return (
		<HomeTileContainer img={item.img} className="drop-shadow" onClick={() => click(item)}>
			<TileTitle>{item.title}</TileTitle>
		</HomeTileContainer>
	);
}
