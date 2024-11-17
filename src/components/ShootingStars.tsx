import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ShootingStars() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 300;

  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  const lifetimes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    resetParticle(i);
  }

  function resetParticle(index: number) {
    positions[index * 3] = (Math.random() - 0.5) * 60;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 60;

    const speed = Math.random() * 0.2 + 0.1;
    const angle = Math.random() * Math.PI * 2;
    velocities[index * 3] = Math.cos(angle) * speed;
    velocities[index * 3 + 1] = Math.sin(angle) * speed;
    velocities[index * 3 + 2] = (Math.random() - 0.5) * speed;

    sizes[index] = Math.random() * 0.2 + 0.1;
    lifetimes[index] = Math.random() * 100 + 50;
  }

  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      lifetimes[i]--;
      
      if (lifetimes[i] <= 0 || 
          Math.abs(positions[i * 3]) > 30 || 
          Math.abs(positions[i * 3 + 1]) > 30 || 
          Math.abs(positions[i * 3 + 2]) > 30) {
        resetParticle(i);
      }

      sizes[i] = Math.sin(lifetimes[i] * 0.1) * 0.1 + 0.1;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#928466"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}