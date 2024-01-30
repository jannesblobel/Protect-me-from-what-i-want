import {
  Float,
  MeshPortalMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Sparkles,
  Sphere,
  Trail,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
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
      style={{ width: "100%", height: "60vh" }}
      camera={{
        position: [0, 0, 0.9],
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
          <FlyingData color="white" position={new THREE.Vector3(2, 5, -10)} />
          <FlyingData color="#9A5DFF" position={new THREE.Vector3(0, 7, -10)} />
          <FlyingData
            color="#B3A1FF"
            position={new THREE.Vector3(-5, 6, -10)}
          />
          <FlyingData
            color="#9A5DFF"
            position={new THREE.Vector3(-4, 0, -10)}
          />
          <FlyingData
            color="#B3A1FF"
            position={new THREE.Vector3(0, -7, -10)}
          />
          <FlyingData
            color="#9A5DFF"
            position={new THREE.Vector3(3, -5, -10)}
          />
          <FlyingData
            color="#B3A1FF"
            position={new THREE.Vector3(3, -5, -10)}
          />
          <FlyingData color="#B3A1FF" position={new THREE.Vector3(1, 2, -10)} />
          <FlyingData
            color="#B3A1FF"
            position={new THREE.Vector3(-1, -1, -10)}
          />
        </Mirror>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
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

type DataPacketProps = {
  color: string; // Color of the data packet, e.g., 'grey', 'white', 'purple'
  position: THREE.Vector3; // Initial position of the data packet
};

const FlyingData = ({ color, position }: DataPacketProps) => {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <Float
      rotationIntensity={20}
      floatIntensity={30}
      floatingRange={[-1, 3]}
      speed={1.5}
      position={position}
      ref={meshRef}
    >
      <Trail
        width={2}
        length={10}
        color={color}
        decay={1}
        attenuation={(width) => width}
      >
        <Sphere args={[0.2, 32]}>
          <MeshWobbleMaterial
            attach="material"
            color={color}
            speed={3}
            factor={3}
          />
        </Sphere>
      </Trail>
    </Float>
  );
};

useGLTF.preload("models/scenePhoneLila.glb");
export default DigitalMirrorPortal;
