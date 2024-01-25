import {
  Box,
  MeshWobbleMaterial,
  Plane,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ControlledSpotLight() {
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const { camera, raycaster, scene } = useThree();
  const sceneRoot = new THREE.Vector3(0, 0, 0);

  useFrame((state) => {
    if (!spotLightRef.current) return;

    raycaster.setFromCamera(state.pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersection = intersects[0];
      spotLightRef.current.target.position.lerp(intersection.point, 0.1);
    }
    if (intersects.length === 0) {
      spotLightRef.current.target.position.lerp(sceneRoot, 0.025);
    }
  });

  return (
    <SpotLight
      ref={spotLightRef}
      intensity={40}
      angle={0.4}
      penumbra={0.8}
      distance={8}
      position={[0, 4, 0]}
      castShadow
      color="white"
    />
  );
}

export default function Spot() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <div>
      <Canvas
        shadows
        style={{ width: "600px", height: "700px" }}
        camera={{
          position: [0, 2.5, -2.5],
          fov: 100,
          near: 0.1,
          far: 1000,
        }}
      >
        <SoftShadows samples={30} size={100} focus={1} />
        <ControlledSpotLight />
        {/* A spinning box */}
        <Box
          ref={meshRef}
          args={[1, 1, 1]} // Width, Height and Depth of the box
          position={[0, 1, 0]} // Position of the box in [x, y, z] format
          castShadow
        >
          <MeshWobbleMaterial
            attach="material"
            color="#f3f3f3"
            speed={1}
            factor={2}
          />
        </Box>
        {/* A plane to receive shadows */}
        <Plane
          args={[10, 8]} // Width and Height of the plane
          rotation={[-Math.PI / 2, 0, 0]} // Rotate the plane to be horizontal
          position={[0, 0, 0]} // Position of the plane in [x, y, z] format
          receiveShadow
          castShadow
        >
          <meshStandardMaterial attach="material" color="#404040" />
        </Plane>
      </Canvas>
    </div>
  );
}
