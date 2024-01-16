import {
  SpotLight,
  useDepthBuffer,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import React from "react";
import { useRef, useState } from "react";
import useRefs from "react-use-refs";
import * as THREE from "three";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

//1.0 * Math.PI/180; // to convert from Deg to Rad
export function Head(props) {
  const { nodes, materials } = useGLTF("models/scenePhone.glb");
  const scroll = useScroll();
  const [head, phone, group, amLight] = useRefs();

  const depthBuffer = useDepthBuffer(1);
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 5, 1 / 5);
    const r2 = scroll.range(1 / 5, 1 / 5);
    // const r3 = scroll.visible(4 / 5, 1 / 5);
    group.current.rotation.y = rsqw(r1);
    head.current.rotation.y = -Math.PI * (rsqw(r2) * 0.15);
    // phone.current.rotation.y = (-Math.PI / 2) * (rsqw(r2) * 0.1);
    group.current.position.z = r1 * 9;
    group.current.position.x = r1 * 1;

    if (r2 > 0) {
      phone.current.position.z = r2 * -10;
      phone.current.position.x = r2 * 10;
      phone.current.rotation.y = -Math.PI * (rsqw(r2) * 0.1);
      amLight.current.intensity = r2;
    }
    // console.log(phone.current.rotation, r2);
    // console.log(group.current.position.z);
  });

  //emmisive screen
  // Create an emissive material
  const emissiveMaterial = new THREE.MeshStandardMaterial({
    color: "white", // base color of the material
    emissive: new THREE.Color(0xffffff), // emissive color
    emissiveIntensity: 100.0, // emissive intensity
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group name="Scene">
        <ambientLight ref={amLight} intensity={0} position={[0, 1, 1]} />
        <mesh
          ref={head}
          name="head"
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials.Material}
        />
        <group
          name="1327_iPhone"
          ref={phone}
          position={[0, 0, -1]}
          rotation={[0, 0, 0]}
          scale={1}
        >
          <mesh
            name="1327_iPhone001"
            receiveShadow
            geometry={nodes["1327_iPhone001"].geometry}
            material={materials.PhoneMat}
          />
          <mesh
            name="1327_iPhone001_1"
            castShadow
            receiveShadow
            geometry={nodes["1327_iPhone001_1"].geometry}
            // material={materials.Screen}
            material={emissiveMaterial}
          />
          {/* corner lighting */}
          <pointLight
            position={[-1, 0.5, 9]}
            color={"white"}
            intensity={10.0}
            distance={20} // adjust as needed
            decay={2} // adjust for a realistic falloff
          />
          {/* screen fake */}
          <pointLight
            position={[0, -1, 6]}
            color={"white"}
            intensity={100.0}
            distance={20} // adjust as needed
            decay={20} // adjust for a realistic falloff
          />
          <PhoneSpotLight depthBuffer={depthBuffer} />
        </group>
      </group>
    </group>
  );
}

const PhoneSpotLight = (r1, r2, r3, ...props) => {
  const lightRef = useRef(0);
  const [targetIntensity, setTargetIntensity] = useState(300);
  const [targetAttenuation, setTargetAttenuation] = useState(10);

  useFrame((state, delta) => {
    // Gradually change the target values at random intervals
    if (Math.random() < 0.5) {
      // 10% chance to change the target
      setTargetIntensity(Math.random() * (200 - 100) + 100); // Range: 200 to 400
      setTargetAttenuation(Math.random() * (20 - 10) + 10); // Range: 10 to 20
    }

    // Adjust the interpolation speed (make it faster or slower)
    const interpolationSpeed = 100; // Increase this value to make the effect faster
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
    <SpotLight
      ref={lightRef}
      position={[0, -1, 7]} // old one {[0, -1, 7]}
      intensity={200}
      color="#B499FF"
      castShadow
      penumbra={1.0}
      distance={120}
      angle={7}
      attenuation={10}
      anglePower={2}
      {...props}
    />
  );
};
