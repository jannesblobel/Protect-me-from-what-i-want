import { Apps } from "./Apps.tsx";
import { Head } from "./Head.tsx";
type experienceProps = {
  pages: number;
};

export default function Experience(props: experienceProps) {
  const { pages } = props;
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
      <ambientLight intensity={0.1} />
      <Head pages={pages} />
      {/* <Apps /> */}
    </>
  );
}
