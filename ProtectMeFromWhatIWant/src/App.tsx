import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { useState } from "react";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
// import ScrollManager from "./components/ScrollManager";

function App() {
  // const [section, setSection] = useState(0);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [20, -3, 40], fov: 12 }}>
      <color attach="background" args={["#212121"]} />
      <ScrollControls pages={5} damping={0.1}>
        <Experience />
        {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
