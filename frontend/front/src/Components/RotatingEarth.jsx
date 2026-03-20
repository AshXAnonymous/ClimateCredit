import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const meshRef = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
  );

  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
<meshStandardMaterial
  map={texture}
  color="#aaffaa"   // boosts green tint
  roughness={0.8}
  metalness={0.05}
/>
    </mesh>
  );
}

export default function RotatingEarth() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />
      <Earth />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}