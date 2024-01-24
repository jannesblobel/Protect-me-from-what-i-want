import { Box, MeshWobbleMaterial, Plane, SpotLight } from "@react-three/drei";
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
      angle={0.3}
      penumbra={0.2}
      distance={10}
      position={[0, 5, 0]}
      castShadow
      color="white"
    />
  );
}

export default function Spot() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      shadows
      camera={{
        position: [0, 5, -5],
        fov: 100,
        near: 0.1,
        far: 1000,
      }}
    >
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
  );
}
