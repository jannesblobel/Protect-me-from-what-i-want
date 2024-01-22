import { useBox } from "@react-three/cannon";
import { SpotLight, Text, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

const degToRad = (deg: number) => (deg * Math.PI) / 180;
//1.0 * Math.PI/180; // to convert from Deg to Rad
type headProps = {
  pages: number;
  position?: [number, number, number];
};
let groupZPos = 0;
type GLTFResult = GLTF & {
  nodes: {
    head: THREE.Mesh;
    model: THREE.Mesh;
    model_1: THREE.Mesh;
    model_2: THREE.Mesh;
    model_3: THREE.Mesh;
    model_4: THREE.Mesh;
  };
  materials: {
    HeadMat: THREE.MeshStandardMaterial;
    OuterMaterial: THREE.MeshPhysicalMaterial;
    nudge: THREE.MeshPhysicalMaterial;
    Screen: THREE.MeshStandardMaterial;
    ButtonMute: THREE.MeshPhysicalMaterial;
    CamLight: THREE.MeshPhysicalMaterial;
  };
};

type GLTFAppResult = GLTF & {
  nodes: {
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube011_1: THREE.Mesh;
    Cube011_2: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube012_2: THREE.Mesh;
  };
  materials: {
    InstagramFill: THREE.MeshStandardMaterial;
    Instagram: THREE.MeshStandardMaterial;
    TikTok: THREE.MeshStandardMaterial;
    TikTokFill: THREE.MeshStandardMaterial;
    Tinder: THREE.MeshStandardMaterial;
    TinderFill: THREE.MeshStandardMaterial;
    X: THREE.MeshStandardMaterial;
    XFill: THREE.MeshStandardMaterial;
    Snap: THREE.MeshStandardMaterial;
    SnapFill: THREE.MeshStandardMaterial;
    OneSec: THREE.MeshStandardMaterial;
    OneSecFill: THREE.MeshStandardMaterial;
    Youtube: THREE.MeshStandardMaterial;
    YoutubeFill: THREE.MeshStandardMaterial;
  };
};
type Notification = {
  id: number;
  position: [number, number, number];
  velocity: [number, number, number];
};

export function Head(props: headProps) {
  const { pages } = props;
  const { nodes, materials } = useGLTF(
    "models/scenePhoneLila.glb"
  ) as GLTFResult;

  const { nodes: appNodes, materials: appMaterials } = useGLTF(
    "models/AppIcons3.glb"
  ) as GLTFAppResult;

  const scroll = useScroll();
  const head = useRef<THREE.Mesh>(null);
  const phone = useRef<THREE.Group>(null);
  const [phonePlane] = useBox<THREE.Mesh>(() => ({
    mass: 0,
    rotation: [degToRad(-15), degToRad(-12), 0],
    position: [2, -0.8, 4.6],
    type: "Static",
    args: [1.6, 3, 0.2],
  }));

  const group = useRef<THREE.Group>(null);
  const amLight = useRef<THREE.AmbientLight>(null);
  const apps = useRef<THREE.Group>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  let frameCount = 0;
  const addNotificationInterval = 30;

  // Function to remove a notification
  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  useFrame(() => {
    if (
      head.current === null ||
      phone.current === null ||
      group.current === null ||
      amLight.current === null
    )
      return;
    const r1 = scroll.range(0 / pages, 1 / pages);
    const r2 = scroll.range(1 / pages, 1 / pages);
    const r4 = scroll.range(2.1 / pages, 1 / pages);
    group.current.rotation.y = rsqw(r1);
    group.current.position.z = r1 * 9;
    group.current.position.x = r1;
    groupZPos = group.current.position.z;

    phone.current.position.z = 6.591 + r1 * 12;
    amLight.current.intensity = r1;
    //was passiert in unserem Handy
    if (r2 > 0) {
      group.current.rotation.y = rsqw(r1) + rsqw(r2) * 1;
      phone.current.position.z = 6.591 + r1 * 12 - r2 * 13;
      group.current.position.x = r1 - r2 * 2;
      amLight.current.intensity = 1 - r2;
    }
    if (r2 >= 0.975 && apps.current !== null) {
      apps.current.visible = true;
    } else if (apps.current !== null && r2 < 0.975) {
      apps.current.visible = false;
    }
    if (r4 > 0 && apps.current !== null) {
      // console.log(apps.current.position);
      group.current.position.x += r4 * 2;
      apps.current.position.x = r4 * -2;
      apps.current.position.z = r4 * -3;

      group.current.rotation.y += rsqw(r4) * 1;
      apps.current.rotation.y = degToRad(110) * r4;

      amLight.current.intensity = 1 * r4;

      if (frameCount >= addNotificationInterval && r4 !== 1) {
        amLight.current.intensity = 2 * r4;
        if (notifications.length < 10) {
          setNotifications((prev) => {
            return [
              ...prev,
              {
                id: Math.random(), // Unique ID for key prop
                position: [Math.random() * 1 + 1, 7, Math.random() * 4 + 3], // Random position near the top
                velocity: [0, -0.3, 0], // Initial falling velocity
              },
            ];
          });
        }
        frameCount = Math.random() * 50;
      }
      frameCount++;
    }
  });

  return (
    <>
      <group {...props} dispose={null} ref={group}>
        <ambientLight ref={amLight} intensity={0} position={[0, -1, -1]} />
        <mesh
          ref={head}
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials.HeadMat}
          position={[0, -0.148, -0.92]}
        >
          <group position={[0, -0.852, 6.951]} scale={2.176} ref={phone}>
            <PhoneSpotLight x={0} y={0} z={groupZPos} />
            {/* corner lighting */}
            <pointLight
              position={[-1, 0.5, 1]}
              color={"white"}
              intensity={20.0}
              distance={5} // adjust as needed
              decay={2} // adjust for a realistic falloff
            />
            <mesh ref={phonePlane} visible={false} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.model.geometry}
              material={materials.OuterMaterial}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.model_1.geometry}
              material={materials.nudge}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.model_2.geometry}
              material={materials.Screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.model_3.geometry}
              material={materials.ButtonMute}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.model_4.geometry}
              material={materials.CamLight}
            />
          </group>
        </mesh>
      </group>
      <group ref={apps} visible={false}>
        {/* Apps go here */}
        <MovingSpotApp
          targetPos={[12, 0, -1]}
          meshRotation={
            new THREE.Euler(degToRad(0), degToRad(-60), degToRad(10))
          }
          geometry={appNodes.Cube001_2.geometry}
          geometryFill={appNodes.Cube001_1.geometry}
          materialFill={appMaterials.InstagramFill}
          material={appMaterials.Instagram}
          pages={pages}
        />
        <MovingSpotApp
          targetPos={[12, -2.5, 0]}
          meshRotation={new THREE.Euler(degToRad(-20), degToRad(-50), 0)}
          geometry={appNodes.Cube002_1.geometry}
          geometryFill={appNodes.Cube002_2.geometry}
          materialFill={appMaterials.TikTokFill}
          material={appMaterials.TikTok}
          pages={pages}
        />
        <MovingSpotApp
          targetPos={[10, 3.7, 0]}
          meshRotation={new THREE.Euler(degToRad(40), degToRad(-40), 0)}
          geometry={appNodes.Cube004_1.geometry}
          geometryFill={appNodes.Cube004_2.geometry}
          materialFill={appMaterials.TinderFill}
          material={appMaterials.Tinder}
          pages={pages}
        />
        <MovingSpotApp
          targetPos={[11, 1.8, -1]}
          meshRotation={new THREE.Euler(degToRad(30), degToRad(-55), 0)}
          geometry={appNodes.Cube008_1.geometry}
          geometryFill={appNodes.Cube008_2.geometry}
          materialFill={appMaterials.XFill}
          material={appMaterials.X}
          pages={pages}
        />
        <MovingSpotApp
          targetPos={[10, -4.5, -2]}
          meshRotation={new THREE.Euler(degToRad(-40), degToRad(-50), 0)}
          geometry={appNodes.Cube010_1.geometry}
          geometryFill={appNodes.Cube010_2.geometry}
          materialFill={appMaterials.SnapFill}
          material={appMaterials.Snap}
          pages={pages}
        />
        {/* Only Render one Sec if last part of Site is visible */}
        {scroll.range(3.15 / pages, 1 / pages) > 0 && (
          <OneSec
            material={appMaterials.OneSec}
            materialFill={appMaterials.OneSecFill}
            geometry={appNodes.Cube011_1.geometry}
            geometryFill={appNodes.Cube011_2.geometry}
            pages={pages}
          />
        )}
      </group>
      <group>
        {notifications.map((note) => (
          <NotificationIcon
            key={note.id}
            id={note.id}
            position={note.position}
            velocity={note.velocity}
            removeNotification={() => removeNotification(note.id)}
          />
        ))}
      </group>
    </>
  );
}
type PhoneSpotLightProps = {
  x: number;
  y: number;
  z: number;
};
function PhoneSpotLight(spotProps: PhoneSpotLightProps) {
  //remove props
  const lightRef = useRef<THREE.SpotLight>(null);
  const [targetIntensity, setTargetIntensity] = useState(300);
  // const [targetAttenuation, setTargetAttenuation] = useState(10);

  const [attenuation] = useState(8);

  useFrame((state, delta) => {
    lightRef.current?.target.position.set(spotProps.x, spotProps.y, groupZPos);
    // Gradually change the target values at random intervals
    if (Math.random() < 0.5) {
      // 10% chance to change the target
      setTargetIntensity(Math.random() * (100 - 30) + 100); // Range: 200 to 400
      // setTargetAttenuation(Math.random() * (30 - 20)); // Range: 10 to 20
    }

    // Adjust the interpolation speed (make it faster or slower)
    const interpolationSpeed = 30; // Increase this value to make the effect faster
    if (lightRef.current && state) {
      lightRef.current.intensity +=
        (targetIntensity - lightRef.current.intensity) *
        delta *
        interpolationSpeed;

      // attenuation removed for now
      // setAttenuation((prev) => {
      //   return (prev += (targetAttenuation - prev) * delta);
      // });
      //old version:
      // lightRef.current.attenuation +=
      //   (targetAttenuation - lightRef.current.attenuation) *
      //   delta *
      //   interpolationSpeed;
    }
  });

  return (
    <>
      {/* <pointLight position={[0, 0, 0]} intensity={100} /> */}
      <SpotLight
        ref={lightRef}
        position={[0, 0, 0]} // old one {[0, -1, 7]}
        rotation={[0, Math.PI / 2, 0]}
        intensity={200}
        color="#B499FF"
        castShadow
        penumbra={1.0}
        distance={120}
        angle={10}
        attenuation={attenuation}
        anglePower={2}
      />
    </>
  );
}

type MovingSpotProps = {
  targetPos: number[];
  meshRotation: THREE.Euler;
  geometry: THREE.BufferGeometry;
  geometryFill: THREE.BufferGeometry;
  material: THREE.Material;
  materialFill: THREE.Material;
  pages: number;
};

const rectScale = new THREE.Vector3(0.75, 0.75, 0.1);
function MovingSpotApp(props: MovingSpotProps) {
  const {
    targetPos,
    meshRotation,
    geometry,
    geometryFill,
    material,
    materialFill,
    pages,
  } = props;
  material.transparent = true;
  material.opacity = 0;
  materialFill.transparent = true;
  materialFill.opacity = 0.1;

  const spotRef = useRef<THREE.SpotLight>(null);
  const parentRef = useRef<THREE.Group>(null);
  // Variables for movement
  const speed = 0.0075; // Base speed of movement
  const amplitude = 0.15; // Amplitude of the wave movement
  const frame = useRef(Math.random() * 2000);
  const initialPos = useMemo(
    () => new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2] + 8),
    [targetPos]
  );
  const newPosition = useMemo(() => new THREE.Vector3(), []);

  const [groupPos] = useState(
    new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2] + 8)
  );
  const [spotDistance, setSpotDistance] = useState(1);
  const scroll = useScroll();

  useFrame(() => {
    if (parentRef.current === null || spotRef.current === null) return;
    // Increment the frame
    frame.current += speed;
    // Compute new position
    const newX = initialPos.x + Math.sin(frame.current) * amplitude * 0.3;
    const newY = initialPos.y + Math.sin(frame.current) * amplitude;
    const newZ = initialPos.z + Math.cos(frame.current) * amplitude;
    //compute new rotation
    newPosition.set(newX, newY, newZ);
    // newRotation.set(
    //   meshRotation.x,
    //   meshRotation.y + Math.sin(frame.current) * amplitude * 0.4,
    //   meshRotation.z + Math.sin(frame.current) * amplitude * 0.4
    // );

    parentRef.current.position.copy(newPosition);
    // parentRef.current.rotation.copy(newRotation);

    const r3Visible = scroll.range(1.95 / pages, 0.1 / pages);

    const r4 = scroll.range(2.1 / pages, 1 / pages);

    spotRef.current.target.position.set(newX, newY, newZ);
    if (r3Visible > 0) {
      materialFill.opacity = r3Visible * 0.6;
      material.opacity = r3Visible * 0.75;
      setSpotDistance(r3Visible * 14.0);
      parentRef.current.position.x = initialPos.x + 3 - r3Visible * 3;
    }
    if (r4 > 0) {
      parentRef.current.rotation.y = meshRotation.y + degToRad(-80) * r4;
    }
  });
  return (
    <>
      <SpotLight
        ref={spotRef}
        intensity={0}
        position={[-0.1, -0.55, 0]}
        color="#B499FF"
        distance={spotDistance}
        angle={0.14}
        penumbra={1.0}
        attenuation={spotDistance}
        anglePower={2}
      />
      <group
        ref={parentRef}
        position={groupPos}
        rotation={meshRotation}
        scale={rectScale}
      >
        <pointLight intensity={0.8} position={[0, 0, 7]} decay={3} />
        <mesh geometry={geometryFill} material={materialFill} />
        <mesh geometry={geometry} material={material} />
      </group>
    </>
  );
}

type oneSecProps = {
  material: THREE.Material;
  materialFill: THREE.Material;
  geometry: THREE.BufferGeometry;
  geometryFill: THREE.BufferGeometry;
  pages: number;
};
function OneSec(props: oneSecProps) {
  const { material, materialFill, pages, geometry, geometryFill } = props;
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  const [pointLightIntensity, setPointLightIntensity] = useState(1);
  const [opacity, setOpacity] = useState(0);

  //different material will fix the problem
  material.transparent = true;
  material.opacity = 0;
  materialFill.transparent = true;
  materialFill.opacity = 0;
  useFrame(() => {
    const r5 = scroll.range(3.15 / pages, 1 / pages);
    if (r5 > 0 && group.current !== null) {
      materialFill.opacity = r5 * 0.6;
      material.opacity = r5 * 0.75;
      group.current.position.z = 3 * r5;
      group.current.rotation.y = degToRad(-50) + degToRad(-80) * r5;
      setPointLightIntensity(1 + r5 * 2);
      setOpacity(r5 * 0.8);
    }
  });
  return (
    <>
      <group
        ref={group}
        position={[0, 0, 0]}
        scale={[1, 1, 0.1]}
        rotation={[degToRad(0), degToRad(0), degToRad(0)]}
      >
        <pointLight
          intensity={pointLightIntensity}
          position={[0, 0, 5]}
          decay={0.3}
        />
        <mesh position={[0, 0, -7]}>
          <circleGeometry args={[8, 32]} />
          <meshStandardMaterial
            color="#202020"
            side={THREE.FrontSide}
            transparent
            opacity={opacity}
          />
        </mesh>
        <mesh geometry={geometryFill} material={materialFill} />
        <mesh geometry={geometry} material={material} />
      </group>
    </>
  );
}
type NotificationIconProps = {
  id: number;
  position: [number, number, number];
  velocity: [number, number, number];
  removeNotification: (id: number) => void;
};

function NotificationIcon(props: NotificationIconProps) {
  const { id, position, velocity, removeNotification } = props;
  const [ref, api] = useBox(() => ({
    mass: 0.01,
    position: position,
    velocity: velocity,
    rotation: [0, degToRad(110), degToRad(90)],
  }));
  // Cast the ref to the correct type
  const meshRef = ref as React.MutableRefObject<THREE.Mesh>;
  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => {
      if (pos[1] < -11) {
        removeNotification(id);
      }
    });

    return () => unsubscribe();
  }, [api.position, removeNotification, id]);
  const randomNum = useMemo(() => Math.floor(Math.random() * 10), []); // Generates a random number between 0 and 9

  return (
    <mesh ref={meshRef} castShadow>
      <cylinderGeometry args={[0.3, 0.3, 0.12, 32]} />
      <meshStandardMaterial color="#FF0000" side={THREE.DoubleSide} />
      <mesh rotation={[-Math.PI / 2, 0, degToRad(-90)]}>
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {randomNum}
        </Text>
      </mesh>
    </mesh>
  );
}

useGLTF.preload("models/AppIcons3.glb");
