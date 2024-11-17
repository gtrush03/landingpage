import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { viewport, camera } = useThree();
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const initialZoom = useRef(true);

  // Create particles for the mystical aura
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 2 + Math.random() * 0.5;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * radius;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
    scales[i] = Math.random();
  }

  useEffect(() => {
    camera.position.z = 1.5;
    camera.fov = 90;
    camera.updateProjectionMatrix();

    const timer = setTimeout(() => {
      initialZoom.current = false;
    }, 2500);

    return () => clearTimeout(timer);
  }, [camera]);

  useFrame(({ mouse, clock }) => {
    if (!earthRef.current || !linesRef.current || !particlesRef.current) return;

    if (!initialZoom.current && !isZoomedOut) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6, 0.003);
      if (Math.abs(camera.position.z - 6) < 0.1) {
        setIsZoomedOut(true);
      }
      camera.updateProjectionMatrix();
    }

    const time = clock.getElapsedTime();
    
    // Mystical particle animation
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const scales = particlesRef.current.geometry.attributes.scale.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const angle = time * 0.2 + (i / particleCount) * Math.PI * 2;
      const radius = 2 + Math.sin(time * 0.5 + i) * 0.1;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 2] = Math.sin(angle) * radius;
      scales[i] = Math.sin(time + i) * 0.3 + 0.7;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.scale.needsUpdate = true;

    // Earth rotation
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    
    earthRef.current.rotation.x = THREE.MathUtils.lerp(
      earthRef.current.rotation.x,
      y * 0.1,
      0.1
    );
    earthRef.current.rotation.y = THREE.MathUtils.lerp(
      earthRef.current.rotation.y,
      x * 0.1 + time * 0.05,
      0.1
    );

    linesRef.current.rotation.copy(earthRef.current.rotation);
  });

  // Enhanced glow shader
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color('#928466') },
      glowColor: { value: new THREE.Color('#ffffff') },
      time: { value: 0 },
      pulseSpeed: { value: 2.0 },
      glowIntensity: { value: 1.5 },
    },
    vertexShader: `
      varying vec3 vPosition;
      attribute float scale;
      varying float vScale;
      void main() {
        vPosition = position;
        vScale = scale;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform vec3 glowColor;
      uniform float time;
      uniform float pulseSpeed;
      uniform float glowIntensity;
      varying vec3 vPosition;
      varying float vScale;
      
      void main() {
        float pulse = sin(time * pulseSpeed) * 0.5 + 0.5;
        float glow = pulse * glowIntensity;
        vec3 finalColor = mix(color, glowColor, glow * 0.5);
        gl_FragColor = vec4(finalColor, 0.8 * vScale);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  useFrame(({ clock }) => {
    glowMaterial.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={isZoomedOut}
        rotateSpeed={0.5}
      />
      
      <group>
        {/* Core sphere */}
        <Sphere args={[2, 64, 64]} ref={earthRef}>
          <meshPhongMaterial
            color="#928466"
            emissive="#928466"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
            wireframe
          />
        </Sphere>

        {/* Mystical particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-scale"
              count={particleCount}
              array={scales}
              itemSize={1}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color="#928466"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>

        {/* Enhanced grid lines */}
        <group ref={linesRef}>
          {[...Array(32)].map((_, i) => (
            <mesh key={i} rotation={[0, (Math.PI * 2 * i) / 32, 0]}>
              <torusGeometry args={[2.2, 0.005, 16, 100]} />
              <primitive object={glowMaterial.clone()} />
            </mesh>
          ))}
        </group>

        {/* Dynamic lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#928466" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ffffff" />
      </group>
    </>
  );
}