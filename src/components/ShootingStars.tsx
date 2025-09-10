import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ShootingStars() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000; // Increased for denser effect
  
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  const lifetimes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    resetParticle(i);
  }

  function resetParticle(index: number) {
    // Create a more focused, centered burst effect
    const radius = Math.random() * 30;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);

    // Slower movement for a more subtle effect
    const speed = Math.random() * 0.02 + 0.01;
    velocities[index * 3] = positions[index * 3] * speed / radius;
    velocities[index * 3 + 1] = positions[index * 3 + 1] * speed / radius;
    velocities[index * 3 + 2] = positions[index * 3 + 2] * speed / radius;

    sizes[index] = Math.random() * 0.1 + 0.05;
    lifetimes[index] = Math.random() * 300 + 200; // Longer lifetimes for smoother effect
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
          Math.abs(positions[i * 3]) > 40 || 
          Math.abs(positions[i * 3 + 1]) > 40 || 
          Math.abs(positions[i * 3 + 2]) > 40) {
        resetParticle(i);
      }

      // Slower pulsing effect
      sizes[i] = Math.sin(lifetimes[i] * 0.02) * 0.05 + 0.05;
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
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}