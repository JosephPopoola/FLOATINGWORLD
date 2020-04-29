import React, { useRef } from 'react';
// import styled from "styled-components";
import { useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import EarthClouds from '../assets/earthcloudmaptrans.jpg';
import urf from '../assets/URF.jpeg';

import { useLoader } from 'react-three-fiber';

import {
	TextureLoader,
	RepeatWrapping,
	Shape,
	SphereGeometry,
	MeshPhongMaterial,
	BoxGeometry,
	MeshStandardMaterial,
	CylinderGeometry,
	MeshBasicMaterial,
	Object3D
} from 'three';

// export function Globex() {
//     var geometry   = new THREE.SphereGeometry(0.5, 32, 32);
//     var material  = new THREE.MeshPhongMaterial();
//     var earthMesh = new THREE.Mesh(geometry, material);
//     scene.add(earthMesh);

//     var geometry   = new THREE.SphereGeometry(0.51, 32, 32)
//     var material2  = new THREE.MeshPhongMaterial({
//         map     : new THREE.Texture(canvasCloud),
//         side        : THREE.DoubleSide,
//         opacity     : 0.8,
//         transparent : true,
//         depthWrite  : false,
//     })
//     var cloudMesh = new THREE.Mesh(geometry, material2);
//     earthMesh.add(cloudMesh);

//     onRenderFcts.push(function(delta, now){
//     earthMesh.rotation.y  += 1/32 * delta
//     });

//     onRenderFcts.push(function(delta, now){
//         cloudMesh.rotation.y  += 1/16 * delta
//     });

//     return (
//         <div></div>
//     );
// };

export function Globe(props) {
	const earthMesh = useRef();
	const cloudMesh = useRef();

	const texture = new THREE.Texture(EarthClouds);
	// const urfTexure = new THREE.Texture(urf);

	const { camera } = useThree();

	camera.fov = 45;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.near = 0.1;
	camera.far = 1000;

	camera.up.set(0, 0, 1);
	camera.position.set(-5, 7, 5);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (earthMesh.current.rotation.y += 0.0001));
	useFrame(() => (cloudMesh.current.rotation.y = +0.00001));

	// globe geometry & material
	const globeGeo = new SphereGeometry(2, 32, 32);
	const fwTexture = useLoader(TextureLoader, urf);
	const globeMatParams = {
		color: 0xfff1ef,
		roughness: 0.4,
		metalness: 0,
		bumpScale: 1,
		map: fwTexture
	};
	const globeMat = new MeshPhongMaterial(globeMatParams);

	// atmos geo & material
	const atmosGeo = new SphereGeometry(2.01, 32, 32);
	const atmosTexture = useLoader(TextureLoader, EarthClouds);
	const atmosMatParams = {
		color: 'white',
		transparent: true,
		opacity: '0.8',
		depthWrite: false,
		map: atmosTexture
	};
	const atmosMat = new MeshPhongMaterial(atmosMatParams);

	return (
		<object3D position={[ 0, 0.1, 0.1 ]}>
			<mesh {...props} ref={earthMesh} scale={[ 1, 1, 1 ]}>
				<sphereGeometry attach="geometry" args={[ 2, 32, 32 ]} />
				<meshPhongMaterial
					attach="material"
					// map={urfTexure}
					color={0xfff1ef}
				/>
			</mesh>
			<mesh {...props} ref={cloudMesh}>
				<sphereGeometry attach="geometry" args={[ 2.01, 32, 32 ]} />
				<meshBasicMaterial
					attach="material"
					map={texture}
					transparent
					opacity="0.8"
					depthWrite={false}
					color="white"
				/>
			</mesh>
		</object3D>
	);
}

//   meshPhongMaterial
