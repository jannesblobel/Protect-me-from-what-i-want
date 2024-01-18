import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Head } from "./Head.tsx";
import Interface from "./Interface";
type experienceProps = {
  pages: number;
};

export default function Experience(props: experienceProps) {
  const { pages } = props;
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, -3, 40], fov: 18, near: 5, far: 90 }} //fov 18
      >
        <ScrollControls pages={pages} damping={0.1}>
          <fog attach="fog" args={["#202020", 1, 120]} />
          <color attach="background" args={["#111"]} />
          {/* <OrbitControls /> */}
          {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
          <ambientLight intensity={0.1} />
          <Head pages={pages - 1} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
