import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import useRefs from "react-use-refs";
const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export function Head(props) {
  const { nodes, materials } = useGLTF("models/scenePhone.glb");
  const scroll = useScroll();
  const [head, phone, group] = useRefs();

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 5, 1 / 5);
    const r2 = scroll.range(1 / 5, 1 / 5);
    const r3 = scroll.visible(4 / 5, 1 / 5);
    group.current.rotation.y = rsqw(r1);
    head.current.rotation.y = -Math.PI * (rsqw(r2) * 0.15);
    group.current.position.z = r1 * 10;
    group.current.position.x = r1 * 5;
    phone.current.position.y = -1.596 + r2 * -10;

    console.log(phone.current.position.y);
    // console.log(group.current.position.z);
    //_Vector3 {x: 0, y: 0, z: -6.083}
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene" ref={group}>
        <mesh
          ref={head}
          name="head"
          castShadow
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials.Material}
          position={[0, 0, -6.083]}
        />
        <group
          ref={phone}
          name="1327_iPhone"
          position={[0, -1.569, 1.222]}
          rotation={[0.368, 0, -Math.PI / 2]}
          scale={0.07}
        >
          <mesh
            name="1327_iPhone001"
            castShadow
            receiveShadow
            geometry={nodes["1327_iPhone001"].geometry}
            material={materials.Mat}
          />
          <mesh
            name="1327_iPhone001_1"
            castShadow
            receiveShadow
            geometry={nodes["1327_iPhone001_1"].geometry}
            material={materials.Screen}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/scenePhone.glb");
