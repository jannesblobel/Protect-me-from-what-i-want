import { Center, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

type BillboardTextProps = {
  useBloom: boolean;
};

export default function BillboardText(props: BillboardTextProps) {
  const { useBloom } = props;
  const { pointer } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      //   const xRotation = degToRad(pointer.y * 5); // Vertical mouse position affects X rotation
      const yRotation = degToRad(pointer.x * 20) + degToRad(40); // Horizontal mouse position affects Y rotation
      //   const xRotation = degToRad(pointer.x * -20); // Horizontal mouse position affects Y rotation

      //use lerping to smooth out the rotation
      groupRef.current.rotation.y +=
        (yRotation - groupRef.current.rotation.y) * 0.2;
    }
  });

  return (
    <Center
      position={[4, 0, 0]}
      rotation={[degToRad(0), degToRad(0), degToRad(0)]}
      ref={groupRef}
    >
      <Text3D font="/FontPXBold.json" size={0.75} height={0.4}>
        {`PROTECT ME\nFROM WHAT\n    I WANT`}
        <meshStandardMaterial
          attach="material"
          emissive="#B3A1FF" // Choose a color that closely matches the billboard
          emissiveIntensity={2.5}
        />
      </Text3D>
      {useBloom ? (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.85}
            luminanceSmoothing={0.025}
            height={800}
            mipmapBlur={true}
          />
        </EffectComposer>
      ) : (
        <EffectComposer>
          <Bloom
            luminanceThreshold={1.5}
            luminanceSmoothing={0.25}
            height={600}
            mipmapBlur={false}
          />
        </EffectComposer>
      )}
    </Center>
  );
}
