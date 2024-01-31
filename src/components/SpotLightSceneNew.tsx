import { Float, Plane, SpotLight, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { degToRad } from "three/src/math/MathUtils.js";
import "./styles/SpotLight.css";

type ControlledSpotLightProps = {
  intensity: number;
  angle: number;
  penumbra: number;
  distance: number;
};

function ControlledSpotLight(props: ControlledSpotLightProps) {
  const { intensity, angle, penumbra, distance } = props;
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const { camera, raycaster, scene } = useThree();

  useFrame((state) => {
    if (!spotLightRef.current) return;

    raycaster.setFromCamera(state.pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersection = intersects[0];
      spotLightRef.current.target.position.lerp(intersection.point, 0.1);
    }
  });

  return (
    <SpotLight
      ref={spotLightRef}
      intensity={intensity}
      angle={angle}
      penumbra={penumbra}
      distance={distance}
      position={[0, 5.5, 0]}
      castShadow
      color="white"
    />
  );
}
function IsometricRoom() {
  const darkMaterial = {
    color: "darkslategray", // Or any dark color you prefer
    side: THREE.DoubleSide, // This will make sure both sides of the plane are rendered
  };

  return (
    <>
      {/* Floor */}
      <Plane
        args={[5, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
      {/* Left Wall */}
      <Plane
        args={[5, 5]}
        rotation={[0, Math.PI / 2, 0]}
        position={[-2.5, 2.5, 0]}
      >
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
      {/* Right Wall */}
      <Plane args={[5, 5]} rotation={[0, 0, 0]} position={[0, 2.5, -2.5]}>
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
    </>
  );
}

type SpotLightSceneProps = {
  intensity: number;
  angle: number;
  penumbra: number;
  distance: number;
  rot: number;
};
export default function SpotLightScene(props: SpotLightSceneProps) {
  const { intensity, angle, penumbra, distance, rot } = props;

  const cameraPosition = new THREE.Vector3(8, 8, 8);
  const cameraZoom = 55; // Increase or decrease this value to adjust the size of the view

  return (
    <>
      <Canvas
        shadows
        orthographic
        style={{ height: "90vh" }}
        camera={{
          position: cameraPosition,
          zoom: cameraZoom,
          fov: 10,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight
          position={[0, 3.5, 0]}
          intensity={10}
          distance={10}
          decay={2}
        />
        <ControlledSpotLight
          intensity={intensity}
          angle={angle}
          penumbra={penumbra}
          distance={distance}
        />
        <IsometricRoom />
        <Float
          floatIntensity={1 - rot}
          rotationIntensity={1 - rot}
          speed={rot > 0.7 ? 0 : 2}
        >
          <ImpossibleTetris
            scale={[1.5, 1.5, 1.5]}
            position={[0, 1, 0]}
            rotation={[degToRad(0), degToRad(-90) * rot, degToRad(0)]}
          />
        </Float>
      </Canvas>
    </>
  );
}

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
  };
  materials: {
    blue: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    orange: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
  };
};

function ImpossibleTetris(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/ImpossibleTetris.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.105}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.5, 0, 0]} scale={[0.5, 4, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.blue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.yellow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ImpossibleTetris.glb");
