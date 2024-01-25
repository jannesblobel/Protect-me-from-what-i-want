import {
  CameraControls,
  Float,
  MeshPortalMaterial,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { degToRad } from "three/src/math/MathUtils.js";

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
      style={{ width: "100%", height: "800px" }}
      camera={{
        position: [0, 0, 1],
        fov: 100,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#111"]} />
        <ambientLight intensity={1} />
        <Mirror id="mirror">
          <pointLight intensity={30} position={[0, 4, -3]} decay={2.4} />
          <Sparkles position={[0, 2, -4]} size={0.75} scale={20} speed={3} />
          <Float speed={1}>
            <Model />
          </Float>
        </Mirror>
        <CameraControls
          makeDefault
          minAzimuthAngle={-Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 2.5}
          minPolarAngle={0.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
}
function Model() {
  const { nodes, materials } = useGLTF(
    "models/scenePhoneLila.glb"
  ) as GLTFResult;
  return (
    <group dispose={null} position={[0, 0, -6]} rotation={[0, degToRad(-5), 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.HeadMat}
      ></mesh>
    </group>
  );
}

type MirrorProps = {
  children: React.ReactNode;
  id: string;
};

function Mirror({ children, id }: MirrorProps) {
  return (
    <group rotation={[0, degToRad(-10), 0]}>
      <mesh name={id}>
        <planeGeometry args={[1, 1.61803398875, 1, 1]} />
        <MeshPortalMaterial>{children}</MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]}>
        <planeGeometry args={[1 + 0.05, 1.61803398875 + 0.05, 1, 1]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
    </group>
  );
}

useGLTF.preload("models/scenePhoneLila.glb");
export default DigitalMirrorPortal;
