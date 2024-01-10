import { OrbitControls } from "@react-three/drei";
import { Head } from "./Head.jsx";
export default function Experience() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.75} />
      <Head />
    </>
  );
}
