import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function DigitalMirrorPortal() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* <InteractiveMirror />
        <Effects /> */}
      </Suspense>
    </Canvas>
  );
}

export default DigitalMirrorPortal;
