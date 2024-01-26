import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Plane, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { Cursor, useDragConstraint } from "./helpers/drag.js";

export default function LegoBricks() {
  return (
    <Canvas
      dpr={[1, 2]}
      style={{ width: "600px", height: "800px" }}
      shadows
      camera={{ position: [-20, 20, 20], fov: 25, near: 1, far: 100 }}
    >
      <Physics>
        {/* <Debug scale={1} color="black"> */}
        <Cursor />
        <ambientLight intensity={1} />
        <Ground />
        <LegoBrick4x2 />
        <LegoBrick2x2 />
        {/* <OrbitControls /> */}
        {/* </Debug> */}
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
    position: [0, 0, -2],
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

  const [ref] = useBox<THREE.Group>(() => ({
    mass: 3,
    args: [0.57, 0.8, 0.55],
    position: [0, 3, 2],
    linearDamping: 0.25,
    angularDamping: 0.25,
  }));
  const bind = useDragConstraint(ref);
  console.log(bind);
  return (
    <group ref={ref} {...bind} dispose={null}>
      <mesh
        name="LegoBrick2x2"
        castShadow
        receiveShadow
        geometry={nodes.group1822638002.geometry}
        material={materials.mat12}
      />
    </group>
  );
}
useGLTF.preload("models/LegoBrick4x2.glb");
