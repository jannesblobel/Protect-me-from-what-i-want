import { Physics, useBox, usePlane } from "@react-three/cannon";
import {
  MeshReflectorMaterial,
  Plane,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { Cursor, useDragConstraint } from "./helpers/drag.js";

export default function LegoBricks() {
  return (
    <Canvas
      dpr={[1, 2]}
      className="three-canvas"
      shadows
      camera={{ position: [-20, 20, 20], fov: 25, near: 1, far: 100 }}
    >
      <fog attach="fog" args={["#171720", 60, 90]} />
      <Physics
        allowSleep={false}
        iterations={20}
        gravity={[0, -80, 0]}
        broadphase="SAP"
      >
        <SoftShadows samples={30} size={100} focus={1} />
        {/* <Debug scale={1} color="black"> */}
        <Cursor />
        <ambientLight intensity={1} />
        <pointLight
          intensity={10}
          decay={0.3}
          distance={10}
          position={[0, 8, 0]}
          color="white"
          castShadow
        />
        <Ground />
        <LegoBrick4x2 position={[0, 3, 1]} color="#B3A1FF" />
        <LegoBrick2x2 position={[3, 6, 2]} color="#ffffff" />
        <LegoBrick4x2 position={[-3, 1, 2]} color="#E87686" />
        <LegoBrick2x2 position={[3, 12, -1]} color="#9A5DFF" />
        <LegoBrick4x2 position={[0, 6, -1]} color="#E87686" />
        <LegoBrick4x2 position={[-2, 2, 0]} color="#B3A1FF" />
        <LegoBrick4x2 position={[2, 1, 0]} color="#B3A1FF" />
        <LegoBrick4x2 position={[4, 1, 0]} color="#9A5DFF" />
        <LegoBrick2x2 position={[-5, 10, -2]} color="#B3A1FF" />
        {/* </Debug> */}
      </Physics>
    </Canvas>
  );
}
const Ground = () => {
  const [groundRef] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    type: "Static",
  }));

  return (
    <group>
      {/* //   <Plane ref={wallRef} args={[10, 10]}>
    //     <meshStandardMaterial color="red" />
    //   </Plane> */}
      <Plane ref={groundRef} args={[100, 100]} receiveShadow>
        <MeshReflectorMaterial
          mirror={0.1}
          color="#404040"
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          depthScale={1}
          minDepthThreshold={0.85}
          metalness={0}
          roughness={1}
        />
      </Plane>
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
type LegoBrick4x2Props = {
  position: [number, number, number];
  color: string;
};
function LegoBrick4x2({ position, color }: LegoBrick4x2Props) {
  const { nodes } = useGLTF("models/LegoBrick4x2.glb") as GLTFResult;
  const [ref] = useBox<THREE.Group>(() => ({
    mass: 5,
    position: position,
    args: [1.3, 0.52, 0.62],
    linearDamping: 0.99,
    angularDamping: 0.99,
    material: { friction: 1, restitution: 0 },
  }));
  const bind = useDragConstraint(ref);

  return (
    <group dispose={null} ref={ref} {...bind}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group734001978.geometry}
        position={[0.04, 0.2, 0]}
      >
        <meshPhysicalMaterial
          color={color} // Your LEGO block's color
          roughness={0.3} // Adjust for less shiny surface
          metalness={0} // Plastic is not metallic
          clearcoat={0.7} // Adds a clear coating to the material
          clearcoatRoughness={0.1} // The roughness of the clearcoat layer
          reflectivity={0.5} // Adjust the strength of reflections
        />
      </mesh>
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
type LegoBrick2x2Props = {
  position: [number, number, number];
  color: string;
};
function LegoBrick2x2({ position, color }: LegoBrick2x2Props) {
  const { nodes } = useGLTF("models/LegoBrick2x2.glb") as GLTFResult2;

  const [ref] = useBox<THREE.Group>(() => ({
    mass: 4,
    args: [0.65, 0.5, 0.65],
    position: [position[0], position[1], position[2]],
    linearDamping: 0.99,
    angularDamping: 0.99,
    material: { friction: 1, restitution: 0 },
    sleepSpeedLimit: 1,
  }));
  const bind = useDragConstraint(ref);
  return (
    <group ref={ref} {...bind} dispose={null}>
      <mesh
        name="LegoBrick2x2"
        castShadow
        receiveShadow
        geometry={nodes.group1822638002.geometry}
        position={[0, 0.17, 0]}
      >
        <meshPhysicalMaterial
          color={color} // Your LEGO block's color
          roughness={0.3} // Adjust for less shiny surface
          metalness={0} // Plastic is not metallic
          clearcoat={0.7} // Adds a clear coating to the material
          clearcoatRoughness={0.1} // The roughness of the clearcoat layer
          reflectivity={0.5} // Adjust the strength of reflections
        />
      </mesh>
    </group>
  );
}
useGLTF.preload("models/LegoBrick4x2.glb");
