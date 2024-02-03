import { Physics } from "@react-three/cannon";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Head } from "./Head.tsx";
import Interface from "./Interface";
type experienceProps = {
  pages: number;
};

export default function Experience(props: experienceProps) {
  const { pages } = props;
  const [fov, setFov] = useState(24);

  useEffect(() => {
    if (pages === 12) {
      setFov(60);
    } else {
      setFov(24);
    }
  }, [pages]);

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, -3, 40], fov: fov, near: 5, far: 90 }} //fov 18
      >
        <ScrollControls pages={pages} damping={0.1}>
          <fog attach="fog" args={["#202020", 1, 120]} />
          <color attach="background" args={["#111"]} />
          <ambientLight intensity={0.1} />
          <Physics>
            <Head pages={5} />
          </Physics>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
