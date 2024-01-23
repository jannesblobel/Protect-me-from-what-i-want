import { Plane, SpotLight } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./styles/SpotLight.css";

// Function to map one range of numbers to another range
const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
type ControlledSpotLightProps = {
  intensity: number;
  angle: number;
  penumbra: number;
  distance: number;
};

function ControlledSpotLight(props: ControlledSpotLightProps) {
  const { intensity, angle, penumbra, distance } = props;
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const viewport = useThree((state) => state.viewport);
  const vec = new THREE.Vector3();
  useFrame((state) => {
    if (!spotLightRef.current) return;
    spotLightRef.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    spotLightRef.current.target.updateMatrixWorld();
  });

  return (
    <SpotLight
      ref={spotLightRef}
      intensity={intensity}
      angle={angle}
      penumbra={penumbra}
      distance={distance}
      position={[0, 5.5, 0]}
      castShadow
      color="white"
    />
  );
}
function IsometricRoom() {
  const darkMaterial = {
    color: "darkslategray", // Or any dark color you prefer
    side: THREE.DoubleSide, // This will make sure both sides of the plane are rendered
  };

  return (
    <>
      {/* Floor */}
      <Plane
        args={[5, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
      {/* Left Wall */}
      <Plane
        args={[5, 5]}
        rotation={[0, Math.PI / 2, 0]}
        position={[-2.5, 2.5, 0]}
      >
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
      {/* Right Wall */}
      <Plane args={[5, 5]} rotation={[0, 0, 0]} position={[0, 2.5, -2.5]}>
        <meshStandardMaterial attach="material" {...darkMaterial} />
      </Plane>
    </>
  );
}

export default function SpotLightScene() {
  // State for spotlight parameters
  const [intensity, setIntensity] = useState(50);
  const [angle, setAngle] = useState(Math.PI / 8);
  const [penumbra, setPenumbra] = useState(0.1);
  const [distance, setDistance] = useState(7);

  const cameraPosition = new THREE.Vector3(5, 5, 5);
  const cameraZoom = 90; // Increase or decrease this value to adjust the size of the view

  return (
    <div className="spotlight-container">
      <div className="canvas-container">
        <Canvas
          shadows
          orthographic
          camera={{
            position: cameraPosition,
            zoom: cameraZoom,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight
            position={[0, 3.5, 0]}
            intensity={10}
            distance={10}
            decay={2}
          />
          <ControlledSpotLight
            intensity={intensity}
            angle={angle}
            penumbra={penumbra}
            distance={distance}
          />
          <IsometricRoom />
        </Canvas>
      </div>
      {/* Sliders rendered outside of Canvas */}
      <div>
        <div>
          <label>Fokus: </label>
          <input
            type="range"
            min="0.10"
            max={Math.PI / 2 - 0.1}
            step="0.01"
            value={Math.PI / 2 - angle}
            onChange={(e) => {
              setAngle(Math.PI / 2 - Number(e.target.value));
              setIntensity(
                mapRange(
                  Number(e.target.value),
                  0.1,
                  Math.PI / 2 - 0.1,
                  30,
                  500
                )
              );
            }}
          />
        </div>
        <div>
          <label>Streulicht: </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={penumbra}
            onChange={(e) => setPenumbra(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Aufmerksamkeit: </label>
          <input
            type="range"
            min="6"
            max="7"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
