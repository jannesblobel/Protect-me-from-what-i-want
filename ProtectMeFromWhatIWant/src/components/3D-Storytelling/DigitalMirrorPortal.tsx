import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    head: THREE.Mesh;
    model: THREE.Mesh;
    model_1: THREE.Mesh;
    model_2: THREE.Mesh;
    model_3: THREE.Mesh;
    model_4: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    HeadMat: THREE.MeshStandardMaterial;
    OuterMaterial: THREE.MeshPhysicalMaterial;
    nudge: THREE.MeshPhysicalMaterial;
    Screen: THREE.MeshStandardMaterial;
    ButtonMute: THREE.MeshPhysicalMaterial;
    CamLight: THREE.MeshPhysicalMaterial;
    VolumetricMat: THREE.MeshStandardMaterial;
  };
};

function DigitalMirrorPortal() {
  return (
    <Canvas
      shadows
      style={{ width: "600px", height: "800px" }}
      camera={{
        position: [0, 0, 10],
        fov: 100,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#111"]} />
        <ambientLight intensity={1} />
        <Model />
        {/* <InteractiveMirror />
        <Effects /> */}
      </Suspense>
    </Canvas>
  );
}
function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/scenePhoneLila.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.HeadMat}
        position={[0, 0, 0]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("models/scenePhoneLila.glb");
export default DigitalMirrorPortal;
