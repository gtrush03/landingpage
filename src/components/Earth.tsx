import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!earthRef.current) return;
    
    const time = clock.getElapsedTime();
    earthRef.current.rotation.y = time * 0.1;
    
    if (glowRef.current) {
      glowRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group position={[8, 0, -10]} scale={[2, 2, 2]}>
      {/* Core sphere */}
      <Sphere ref={earthRef} args={[1, 32, 32]}>
        <meshPhongMaterial
          color="#928466"
          emissive="#928466"
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
          wireframe
        />
      </Sphere>

      {/* Glow effect */}
      <Sphere ref={glowRef} args={[1.2, 32, 32]}>
        <meshBasicMaterial
          color="#928466"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#928466" />
      <ambientLight intensity={0.2} />
    </group>
  );
}