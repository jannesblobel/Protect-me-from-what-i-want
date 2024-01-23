import { Plane, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import "./styles/SpotLight.css";

type ControlledSpotLightProps = {
  intensity: number;
  angle: number;
  penumbra: number;
  distance: number;
};

function ControlledSpotLight(props: ControlledSpotLightProps) {
  const { intensity, angle, penumbra, distance } = props;
  return (
    <SpotLight
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
  const [distance, setDistance] = useState(8);

  const cameraPosition = new THREE.Vector3(5, 5, 5);
  const cameraZoom = 1; // Increase or decrease this value to adjust the size of the view

  return (
    <div className="spotlight-container">
      <div className="canvas-container">
        <Canvas
          shadows
          camera={{
            position: cameraPosition,
            zoom: cameraZoom,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
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
          <label>Intensity: </label>
          <input
            type="range"
            min="10"
            max="300"
            step="10"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Angle: </label>
          <input
            type="range"
            min="0.01"
            max={Math.PI / 2}
            step="0.01"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Penumbra: </label>
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
          <label>Distance: </label>
          <input
            type="range"
            min="6"
            max="20"
            step="0.5"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
