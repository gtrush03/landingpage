import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

extend({ Line_: THREE.Line });

export default function CircularTimer() {
  const ringRef = useRef<THREE.Line>(null);
  const glowRef = useRef<THREE.Line>(null);
  const targetDate = new Date('2024-11-25T00:00:00');

  useFrame(({ clock }) => {
    if (!ringRef.current || !glowRef.current) return;

    const now = new Date();
    const totalTime = targetDate.getTime() - new Date('2024-03-19').getTime();
    const remainingTime = targetDate.getTime() - now.getTime();
    const progress = Math.max(0, Math.min(1, remainingTime / totalTime));

    const time = clock.getElapsedTime();
    const pulseScale = Math.sin(time * 2) * 0.05 + 1;

    const points = [];
    const glowPoints = [];
    const segments = 256;
    const radius = 3;
    const glowRadius = radius * pulseScale;

    for (let i = 0; i <= segments * progress; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;
      points.push(new THREE.Vector3(x, y, 0));
      
      const glowX = Math.cos(theta) * glowRadius;
      const glowY = Math.sin(theta) * glowRadius;
      glowPoints.push(new THREE.Vector3(glowX, glowY, 0));
    }

    ringRef.current.geometry.setFromPoints(points);
    glowRef.current.geometry.setFromPoints(glowPoints);
  });

  return (
    <group>
      <line ref={ringRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#928466" transparent opacity={0.6} linewidth={2} />
      </line>
      <line ref={glowRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#928466" transparent opacity={0.2} linewidth={4} />
      </line>
    </group>
  );
}