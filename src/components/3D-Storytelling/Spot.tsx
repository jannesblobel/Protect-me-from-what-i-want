import {
  MeshReflectorMaterial,
  Plane,
  SoftShadows,
  SpotLight,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { degToRad } from "three/src/math/MathUtils.js";
import "../../scss/PageLayout.scss";

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
      intensity={100}
      angle={0.4}
      penumbra={0.2}
      distance={30}
      position={[0, 7, 0]}
      castShadow
      color="white"
    />
  );
}

export default function Spot() {
  return (
    <Canvas
      shadows
      className="three-canvas"
      camera={{
        position: [4, 4, -4],
        fov: 100,
        near: 0.1,
        far: 1000,
      }}
    >
      {/* <pointLight position={[3, 7, 0]} intensity={10} /> */}
      {/* <fog attach="fog" args={["#171720", 60, 90]} /> */}
      <ambientLight intensity={0.1} />
      <SoftShadows samples={30} size={100} focus={1} />
      <ControlledSpotLight />
      {/* A spinning box */}
      <Model />
      <Ground />
      {/* <group>
          <FlyingData color="#E87686" position={new THREE.Vector3(0, 2, 0)} />
          <FlyingData color="#fff" position={new THREE.Vector3(4, 2, 0)} />
          <FlyingData color="#E87686" position={new THREE.Vector3(-2, 2, 0)} />
          <FlyingData color="#B3A1FF" position={new THREE.Vector3(-4, 3, 0)} />
          <FlyingData color="#9A5DFF" position={new THREE.Vector3(-2, 2, 1)} />
          <FlyingData color="#B3A1FF" position={new THREE.Vector3(6, 2, -6)} />
          <FlyingData color="#9A5DFF" position={new THREE.Vector3(3, 2, -8)} />
          <FlyingData color="#B3A1FF" position={new THREE.Vector3(-2, 2, 3)} />
        </group> */}
    </Canvas>
  );
}

const Ground = () => {
  return (
    <Plane
      args={[50, 50]} // Width and Height of the plane
      rotation={[-Math.PI / 2, 0, 0]} // Rotate the plane to be horizontal
      position={[0, 0, 0]} // Position of the plane in [x, y, z] format
      receiveShadow
      castShadow
    >
      <MeshReflectorMaterial
        mirror={0.4}
        color="#404040"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={0}
        mixStrength={20}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </Plane>
  );
};

// type DataPacketProps = {
//   color: string; // Color of the data packet, e.g., 'grey', 'white', 'purple'
//   position: THREE.Vector3; // Initial position of the data packet
// };
// const FlyingData = ({ color, position }: DataPacketProps) => {
//   const meshRef = useRef<THREE.Mesh>(null);

//   // Use the useFrame hook to update the position of the data packet every frame
//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       //  Move the data packet around by modifying its position over time
//       meshRef.current.position.x +=
//         Math.sin(state.clock.getElapsedTime()) * delta;
//       meshRef.current.position.y +=
//         Math.cos(state.clock.getElapsedTime()) * delta;
//       meshRef.current.rotation.x += delta;
//       meshRef.current.rotation.y += delta;
//     }
//   });

//   return (
//     <Float
//       rotationIntensity={1}
//       floatIntensity={1}
//       speed={1.5}
//       floatingRange={[0.1, 3]}
//       position={position}
//     >
//       <Box ref={meshRef} args={[0.2, 0.2, 0.2]}>
//         {/* <pointLight position={[0, 3, 0]} intensity={1} /> */}
//         <MeshWobbleMaterial
//           attach="material"
//           color={color}
//           speed={1}
//           factor={0.5}
//         />
//       </Box>
//     </Float>
//   );
// };

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

function Model() {
  const { nodes, materials } = useGLTF(
    "models/scenePhoneLila.glb"
  ) as GLTFResult;
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  return (
    <group
      dispose={null}
      scale={[0.4, 0.4, 0.4]}
      position={[0, 2, 0]}
      rotation={[0, degToRad(100), 0]}
    >
      <mesh
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.HeadMat}
      >
        <meshPhysicalMaterial
          envMap={texture}
          color="#FFFFFF" // Base color of the material
          metalness={0.9} // Increase for stronger reflection
          roughness={0.5} // Lower for sharper reflections
          transmission={0.5} // Determines the transparency; 0 is opaque, 1 is fully transparent
          transparent={true} // Must be true to apply transmission
          reflectivity={0.9} // Adjust the reflectivity of the material
          thickness={0.1} // Control the depth for the transmission, if needed
          clearcoat={1} // Optional: adds a clear coat layer for additional shininess
        />
      </mesh>
    </group>
  );
}
useGLTF.preload("models/scenePhoneLila.glb");
