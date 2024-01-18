import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { useState } from "react";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
// import ScrollManager from "./components/ScrollManager";

// import React from "react";
// import MediaCompetence from "../pages/digital-reflection";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  // const [section, setSection] = useState(0);
  const pages: number = 5;

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, -3, 40], fov: 18, near: 5, far: 90 }} //fov 16
    >
      <ScrollControls pages={pages} damping={0.1}>
        <fog attach="fog" args={["#202020", 1, 120]} />
        <color attach="background" args={["#111"]} />
        <Experience pages={pages - 1} />
        {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
