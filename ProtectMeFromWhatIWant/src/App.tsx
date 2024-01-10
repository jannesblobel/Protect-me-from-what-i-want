import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 120 }}>
      <color attach="background" args={["#212121"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
