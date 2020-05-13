import React from 'react';
import { useThree } from 'react-three-fiber';
import Lights from './Lights';
import { Globe } from './Globe';

function Scene() {
	const { camera } = useThree();
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.near = 0.1;
	camera.far = 1000;

	camera.up.set(0, 0, 1);
	camera.position.set(0, 0, 3);

	const pointLightPos = [ [ -5, -12, 20 ], [ 5, -12, 20 ], [ -5, 12, 20 ], [ 5, 12, 20 ] ];

	return (
		<>
			<Lights type="AmbientLight" color={0xffffff} intensity={0.2} position={[ 0, 0, 0 ]} />
			{ pointLightPos.map((pos, idx) => (
				<Lights
					key={idx}
					type="PointLight"
					color={0xffffff}
					intensity={0.4}
					distance={100}
					position={pos}
					castShadow
				/>
			))}
			<React.Suspense fallback={<mesh />}>
				<Globe />
			</React.Suspense>
		</>
	);
}

export default Scene;
