import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import EarthClouds from '../../assets/earthcloudmaptrans.jpg';
import urf from '../../assets/URF.jpeg';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, SphereGeometry, MeshPhongMaterial } from 'three';

const sphereSize = 32;

export function Globe(props) {
	const fwMesh = useRef();
	const cloudMesh = useRef();

	// globe geometry & material
	const globeGeo = new SphereGeometry(1.5, sphereSize, sphereSize);
	const fwTexture = useLoader(TextureLoader, urf);
	const globeMatParams = {
		color: 'gray',
		roughness: 0.9,
		metalness: 9,
		bumpScale: 10,
		map: fwTexture
	};
	const globeMat = new MeshPhongMaterial(globeMatParams);

	// atmos geo & material
	const atmosGeo = new SphereGeometry(1.51, sphereSize, sphereSize);
	const atmosTexture = useLoader(TextureLoader, EarthClouds);
	const atmosMatParams = {
		color: 'gray',
		transparent: true,
		opacity: '0.2',
		depthWrite: false,
		map: atmosTexture
	};
	const atmosMat = new MeshPhongMaterial(atmosMatParams);

	useFrame(() => (fwMesh.current.rotation.y += 0.001));
	useFrame(() => (cloudMesh.current.rotation.y = cloudMesh.current.rotation.y += 0.00111));

	return (
		<group position={[ 0, 0.1, 0.1 ]}>
			<mesh {...props} ref={fwMesh} args={[ globeGeo, globeMat ]} />
			<mesh {...props} ref={cloudMesh} args={[ atmosGeo, atmosMat ]} />
		</group>
	);
}
