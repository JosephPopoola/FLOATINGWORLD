import React, { useRef, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import EarthClouds from "../../assets/URF4.jpeg";
import urf from "../../assets/URF4.jpeg";
import { useLoader } from "react-three-fiber";
import { TextureLoader, SphereGeometry, MeshPhongMaterial, LinearFilter } from "three";

const sphereSize = 32;

export function Globe(props) {
	const fwMesh = useRef();
	const cloudMesh = useRef();

	//	roughness: 0.9,
	//	metalness: 9,

	// globe geometry & material
	const globeGeo = useMemo(() => new SphereGeometry(1.5, sphereSize, sphereSize), []);
	globeGeo.computeBoundingBox();
	const fwTexture = useLoader(TextureLoader, urf);
	fwTexture.minFilter = LinearFilter;
	const globeMatParams = {
		color: "gray",
		bumpScale: 10,
		map: fwTexture
	};
	const globeMat = useMemo(() => new MeshPhongMaterial(globeMatParams), [ globeMatParams ]);

	// atmos geo & material
	const atmosGeo = useMemo(() => new SphereGeometry(1.51, sphereSize, sphereSize), []);
	atmosGeo.computeBoundingBox();
	const atmosTexture = useLoader(TextureLoader, EarthClouds);
	atmosTexture.minFilter = LinearFilter;
	const atmosMatParams = {
		color: "gray",
		transparent: true,
		opacity: "0.2",
		depthWrite: false,
		map: atmosTexture
	};
	const atmosMat = useMemo(() => new MeshPhongMaterial(atmosMatParams), [ atmosMatParams ]);

	useFrame(() => (fwMesh.current.rotation.y += 0.0001));
	useFrame(() => (cloudMesh.current.rotation.y = cloudMesh.current.rotation.y += 0.000111));

	const loggy = (e) => {
		console.log(e);
		console.log(props.globeClicked);
		// e.stopPropagation();
	};

	// const handleClick = props.globeClicked;
	// console.log(handleClick);

	// onClick={(e) => console.log("testt")}
	// onPointerOver={(e) => console.log("testt")}

	// onPointerOver={(e) => loggy(e)} onPointerDown={(e) => props.globeClicked()}

	return (
		<group position={[ 0, 0.1, 0.1 ]}>
			<mesh {...props} ref={fwMesh} args={[ globeGeo, globeMat ]} />
			<mesh {...props} ref={cloudMesh} args={[ atmosGeo, atmosMat ]} />
		</group>
	);
}
