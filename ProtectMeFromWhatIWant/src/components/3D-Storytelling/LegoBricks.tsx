import { Debug, Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Plane, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

export default function LegoBricks() {
  return (
    <Canvas
      shadows
      style={{ width: "600px", height: "800px" }}
      camera={{
        position: [0, 1, 1],
        fov: 100,
        near: 0.1,
        far: 1000,
      }}
    >
      <Physics>
        <Debug scale={1.1} color="black">
          <ambientLight intensity={1} />
          <Ground />
          <LegoBrick4x2 />
          <LegoBrick2x2 />
          <OrbitControls />
        </Debug>
      </Physics>
    </Canvas>
  );
}
const Ground = () => {
  const [groundRef] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const [wallRef] = usePlane<THREE.Mesh>(() => ({
    rotation: [0, 0, 0],
  }));

  return (
    <group>
      <Plane ref={wallRef} args={[10, 10]}>
        <meshStandardMaterial color="red" />
      </Plane>
      <Plane ref={groundRef} args={[10, 10]} />;
    </group>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    group734001978: THREE.Mesh;
  };
  materials: {
    mat5: THREE.MeshStandardMaterial;
  };
};
function LegoBrick4x2() {
  const { nodes, materials } = useGLTF("models/LegoBrick4x2.glb") as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position: [0, 1, 1.2],
    args: [1.175, 0.44, 0.55],
  }));

  return (
    <group dispose={null} position={[0.04, 0.18, 0]}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.group734001978.geometry}
        material={materials.mat5}
      />
    </group>
  );
}

type GLTFResult2 = GLTF & {
  nodes: {
    group1822638002: THREE.Mesh;
  };
  materials: {
    mat12: THREE.MeshStandardMaterial;
  };
};
function LegoBrick2x2() {
  const { nodes, materials } = useGLTF(
    "models/LegoBrick2x2.glb"
  ) as GLTFResult2;
  const [ref] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position: [2, 1, 1.2],
    args: [0.57, 0.48, 0.55],
  }));
  return (
    <group dispose={null} position={[0, 0.18, 0]}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.group1822638002.geometry}
        material={materials.mat12}
      />
    </group>
  );
}
useGLTF.preload("models/LegoBrick2x2.glb");
useGLTF.preload("models/LegoBrick4x2.glb");
