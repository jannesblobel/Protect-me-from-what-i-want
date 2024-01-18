import { SpotLight, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type MovingSpotProps = {
  targetPos: number[];
  meshRotation: THREE.Euler;
  geometry: THREE.BufferGeometry;
  geometryFill: THREE.BufferGeometry;
  material: THREE.Material;
  materialFill: THREE.Material;
};
const MovingSpotApp = (props: MovingSpotProps) => {
  const {
    targetPos,
    meshRotation,
    geometry,
    geometryFill,
    material,
    materialFill,
  } = props;
  const spotRef = useRef<THREE.SpotLight>(null);
  const parentRef = useRef<THREE.Group>(null);

  const groupPos = new THREE.Vector3(
    targetPos[0],
    targetPos[1],
    targetPos[2] + 8
  );
  useFrame(() => {
    spotRef.current?.target.position.set(groupPos.x, groupPos.y, groupPos.z);
  });
  return (
    <group
      ref={parentRef}
      position={groupPos}
      rotation={meshRotation}
      scale={rectScale}
    >
      <SpotLight
        ref={spotRef}
        position={[-40, 0, 50]}
        rotation={[0, 0, 0]}
        debug={true}
        intensity={100}
        color="#B499FF"
        castShadow
        penumbra={1.0}
        distance={200}
        angle={10}
        attenuation={70}
        anglePower={2}
      />
      {/* <pointLight intensity={3} position={[0, 0, 8]} /> */}
      <mesh geometry={geometry} material={materialFill} />
      <mesh geometry={geometryFill} material={material} />
    </group>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube006_1: THREE.Mesh;
    Cube006_2: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    Cube009_1: THREE.Mesh;
    Cube009_2: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube011_1: THREE.Mesh;
    Cube011_2: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube012_2: THREE.Mesh;
  };
  materials: {
    InstagramFill: THREE.MeshStandardMaterial;
    Instagram: THREE.MeshStandardMaterial;
  };
};
type AppsProps = {
  isVisible?: boolean;
};
const rectScale = new THREE.Vector3(0.75, 0.75, 0.1);

export function Apps(props: AppsProps) {
  const { nodes, materials } = useGLTF("models/AppIcons.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} rotation={[0, 2, 0]}>
      <MovingSpotApp
        targetPos={[-0.024, 0, 15.661]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[-4.024, 0, 14.497]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        materialFill={materials.InstagramFill}
        geometryFill={nodes.Cube001_2.geometry}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[-4.024, 4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[-0.024, 4, 14.497]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, 4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, 4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, 4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, 0, 14.497]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, 0, 14.497]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[-0.024, -4, 14.497]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[-4.024, -4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
      <MovingSpotApp
        targetPos={[3.976, -4, 13.07]}
        meshRotation={new THREE.Euler(Math.PI, 0, Math.PI)}
        geometry={nodes.Cube001_1.geometry}
        geometryFill={nodes.Cube001_2.geometry}
        materialFill={materials.InstagramFill}
        material={materials.Instagram}
      />
    </group>
  );
}

useGLTF.preload("models/AppIcons.glb");
