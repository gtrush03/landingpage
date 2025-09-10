import React, { useEffect, useState, useRef } from 'react';

const SynthesisAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);
  const connectionsRef = useRef<any[]>([]);
  const timeRef = useRef<number>(0);

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const particleCount = Math.min(Math.floor(dimensions.width / 30), 30);
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: `rgba(146, 132, 102, ${Math.random() * 0.5 + 0.2})`,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        originalRadius: Math.random() * 2 + 1
      });
    }
    
    particlesRef.current = particles;
    
    // Create some initial connections
    const connections = [];
    for (let i = 0; i < particleCount / 2; i++) {
      const particleA = Math.floor(Math.random() * particleCount);
      const particleB = Math.floor(Math.random() * particleCount);
      if (particleA !== particleB) {
        connections.push({
          a: particleA,
          b: particleB,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50
        });
      }
    }
    
    connectionsRef.current = connections;
  }, [dimensions]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const animate = (timestamp: number) => {
      if (!canvasRef.current) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update time
      timeRef.current = timestamp / 1000;
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.vy *= -1;
        }
        
        // Pulse size
        particle.radius = particle.originalRadius * (1 + 0.3 * Math.sin(timeRef.current * particle.pulseSpeed + particle.pulseOffset));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Update connections
      connectionsRef.current = connectionsRef.current.filter(conn => {
        conn.life -= 0.5;
        return conn.life > 0;
      });
      
      // Randomly create new connections
      if (Math.random() < 0.05 && connectionsRef.current.length < particlesRef.current.length) {
        const particleA = Math.floor(Math.random() * particlesRef.current.length);
        const particleB = Math.floor(Math.random() * particlesRef.current.length);
        if (particleA !== particleB) {
          connectionsRef.current.push({
            a: particleA,
            b: particleB,
            life: Math.random() * 100 + 50,
            maxLife: Math.random() * 100 + 50
          });
        }
      }
      
      // Draw connections
      connectionsRef.current.forEach(conn => {
        const particleA = particlesRef.current[conn.a];
        const particleB = particlesRef.current[conn.b];
        
        const opacity = (conn.life / conn.maxLife) * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(particleA.x, particleA.y);
        ctx.lineTo(particleB.x, particleB.y);
        ctx.strokeStyle = `rgba(146, 132, 102, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SynthesisAnimation;