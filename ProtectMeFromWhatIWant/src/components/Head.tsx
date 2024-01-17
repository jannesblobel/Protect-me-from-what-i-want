import { SpotLight, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { Apps } from "./Apps";

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

//1.0 * Math.PI/180; // to convert from Deg to Rad
type headProps = {
  pages: number;
  position?: [number, number, number];
};
let groupZPos = 0;
type GLTFResult = GLTF & {
  nodes: {
    head: THREE.Mesh;
    model: THREE.Mesh;
    model_1: THREE.Mesh;
    model_2: THREE.Mesh;
    model_3: THREE.Mesh;
    model_4: THREE.Mesh;
  };
  materials: {
    HeadMat: THREE.MeshStandardMaterial;
    OuterMaterial: THREE.MeshPhysicalMaterial;
    nudge: THREE.MeshPhysicalMaterial;
    Screen: THREE.MeshStandardMaterial;
    ButtonMute: THREE.MeshPhysicalMaterial;
    CamLight: THREE.MeshPhysicalMaterial;
  };
};

export function Head(props: headProps) {
  const { pages } = props;
  const { nodes, materials } = useGLTF("models/Head_Phone1.glb") as GLTFResult;
  const scroll = useScroll();
  const head = useRef<THREE.Mesh>(null);
  const phone = useRef<THREE.Group>(null);
  const group = useRef<THREE.Group>(null);
  const amLight = useRef<THREE.AmbientLight>(null);
  const apps = useRef<THREE.Group>(null);

  useFrame(() => {
    if (
      head.current === null ||
      phone.current === null ||
      group.current === null ||
      amLight.current === null
    )
      return;
    const r1 = scroll.range(0 / pages, 1.2 / pages);
    const r2 = scroll.range(1.2 / pages, 1.8 / pages);
    const r3Visible = scroll.visible(1.5 / pages, 3 / pages);
    group.current.rotation.y = rsqw(r1);
    // console.log(rsqw(r1));
    group.current.position.z = r1 * 9;
    group.current.position.x = r1;
    groupZPos = group.current.position.z;

    phone.current.position.z = 6.591 + r1 * 12;
    amLight.current.intensity = r1;
    //was passiert in unserem Handy
    if (r2 > 0) {
      group.current.rotation.y = rsqw(r1) + rsqw(r2) * 1;
      phone.current.position.z = 6.591 + r1 * 12 - r2 * 13;
      group.current.position.x = r1 - r2 * 2;
      amLight.current.intensity = 0;
    }
    if (r3Visible && apps.current !== null) {
      apps.current.visible = true;
    } else if (apps.current !== null && !r3Visible) {
      apps.current.visible = false;
    }
  });

  //emmisive screen
  // Create an emissive material
  // const emissiveMaterial = new THREE.MeshStandardMaterial({
  //   color: "white", // base color of the material
  //   emissive: new THREE.Color(0xffffff), // emissive color
  //   emissiveIntensity: 100.0, // emissive intensity
  // });

  return (
    <group {...props} dispose={null} ref={group}>
      <ambientLight ref={amLight} intensity={0} position={[0, 1, 1]} />
      <mesh
        ref={head}
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.HeadMat}
        position={[0, -0.148, -0.92]}
      >
        <group position={[0, -0.852, 6.951]} scale={2.176} ref={phone}>
          <PhoneSpotLight x={0} y={0} z={groupZPos} />
          {/* corner lighting */}
          <pointLight
            position={[-1, 0.5, 1]}
            color={"white"}
            intensity={20.0}
            distance={5} // adjust as needed
            decay={2} // adjust for a realistic falloff
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model.geometry}
            material={materials.OuterMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model_1.geometry}
            material={materials.nudge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model_2.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model_3.geometry}
            material={materials.ButtonMute}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model_4.geometry}
            material={materials.CamLight}
          />
        </group>
      </mesh>
      <group ref={apps} visible={false}>
        <Apps isVisible={false} />
      </group>
    </group>
  );
}
type PhoneSpotLightProps = {
  x: number;
  y: number;
  z: number;
};
function PhoneSpotLight(spotProps: PhoneSpotLightProps) {
  //remove props
  const lightRef = useRef<THREE.SpotLight>(null);
  const [targetIntensity, setTargetIntensity] = useState(300);
  const [targetAttenuation, setTargetAttenuation] = useState(10);

  useFrame((state, delta) => {
    lightRef.current?.target.position.set(spotProps.x, spotProps.y, groupZPos);
    // Gradually change the target values at random intervals
    if (Math.random() < 0.5) {
      // 10% chance to change the target
      setTargetIntensity(Math.random() * (70 - 30) + 20); // Range: 200 to 400
      setTargetAttenuation(Math.random() * (20 - 2) + 10); // Range: 10 to 20
    }

    // Adjust the interpolation speed (make it faster or slower)
    const interpolationSpeed = 30; // Increase this value to make the effect faster
    if (lightRef.current) {
      lightRef.current.intensity +=
        (targetIntensity - lightRef.current.intensity) *
        delta *
        interpolationSpeed;
      lightRef.current.attenuation +=
        (targetAttenuation - lightRef.current.attenuation) *
        delta *
        interpolationSpeed;
    }
  });

  return (
    <>
      <pointLight position={[0, 0, 0]} intensity={100} />
      <SpotLight
        ref={lightRef}
        position={[0, 0, 0]} // old one {[0, -1, 7]}
        rotation={[0, Math.PI / 2, 0]}
        intensity={200}
        color="#4D00F1"
        castShadow
        penumbra={1.0}
        distance={120}
        angle={10}
        attenuation={10}
        anglePower={2}
      />
    </>
  );
}
