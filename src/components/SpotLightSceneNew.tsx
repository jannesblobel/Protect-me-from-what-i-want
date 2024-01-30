import { Plane, SpotLight } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { camera, raycaster, scene } = useThree();

  useFrame((state) => {
    if (!spotLightRef.current) return;

    raycaster.setFromCamera(state.pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersection = intersects[0];
      spotLightRef.current.target.position.lerp(intersection.point, 0.1);
    }
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

type SpotLightSceneProps = {
  intensity: number;
  angle: number;
  penumbra: number;
  distance: number;
};
export default function SpotLightScene(props: SpotLightSceneProps) {
  const { intensity, angle, penumbra, distance } = props;
  // State for spotlight parameters

  const cameraPosition = new THREE.Vector3(8, 8, 8);
  const cameraZoom = 55; // Increase or decrease this value to adjust the size of the view

  return (
    <>
      <Canvas
        shadows
        orthographic
        style={{ height: "90vh" }}
        camera={{
          position: cameraPosition,
          zoom: cameraZoom,
          fov: 10,
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
      {/* Sliders rendered outside of Canvas */}
      {/* <div className="slider-section">
        <div className="slider-block">
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
          <label>{t("focus")}</label>
          <div className="label-improvement">{t("concentration")}</div>
        </div>
        <div className="slider-block">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={penumbra}
            onChange={(e) => setPenumbra(Number(e.target.value))}
          />
          <label>{t("light")}</label>
          <div className="label-improvement">{t("self-management")}</div>
        </div>
        <div className="slider-block">
          <input
            type="range"
            min="6"
            max="7"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
          <label>{t("clearness")}</label>
          <div className="label-improvement">{t("attention")}</div>
        </div>
      </div> */}
    </>
  );
}
