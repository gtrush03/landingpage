import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      // Fewer particles for a more minimal look
      const particleCount = Math.min(Math.floor(canvas.width / 30), 40);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
      
      particlesRef.current = particles;
    };

    const createParticle = (x?: number, y?: number): Particle => {
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        // Smaller size for minimalism
        size: Math.random() * 1.5 + 0.5,
        // More movement but still elegant
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        // Lower opacity for subtlety
        opacity: Math.random() * 0.3 + 0.1,
        // Subtle color
        color: `rgba(146, 132, 102, ${Math.random() * 0.3 + 0.1})`,
        life: Math.random() * 300 + 300,
        maxLife: Math.random() * 300 + 300
      };
    };

    // Initialize connections
    const initConnections = () => {
      const connections: Connection[] = [];
      // Fewer connections for minimalism
      const connectionCount = Math.floor(particlesRef.current.length / 4);
      
      for (let i = 0; i < connectionCount; i++) {
        connections.push(createConnection());
      }
      
      connectionsRef.current = connections;
    };

    const createConnection = (): Connection => {
      const particles = particlesRef.current;
      const from = Math.floor(Math.random() * particles.length);
      let to = Math.floor(Math.random() * particles.length);
      
      // Ensure we don't connect a particle to itself
      while (to === from && particles.length > 1) {
        to = Math.floor(Math.random() * particles.length);
      }
      
      return {
        from,
        to,
        // Very subtle connections
        opacity: Math.random() * 0.15 + 0.05,
        life: Math.random() * 200 + 200,
        maxLife: Math.random() * 200 + 200
      };
    };

    // Animation loop
    const animate = () => {
      // Clear canvas completely for a cleaner look
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position with more movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Update life more slowly
        particle.life -= 0.3;
        
        // Regenerate particle if it's dead
        if (particle.life <= 0) {
          particlesRef.current[index] = createParticle();
        }
        
        // Draw particle - simple and minimal
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Update and draw connections
      connectionsRef.current = connectionsRef.current.filter(conn => {
        conn.life -= 0.3;
        return conn.life > 0;
      });
      
      // Add new connections occasionally
      if (Math.random() < 0.01 && connectionsRef.current.length < particlesRef.current.length / 2) {
        connectionsRef.current.push(createConnection());
      }
      
      // Draw connections - thin and subtle
      connectionsRef.current.forEach(conn => {
        const fromParticle = particlesRef.current[conn.from];
        const toParticle = particlesRef.current[conn.to];
        
        if (!fromParticle || !toParticle) return;
        
        const distance = Math.sqrt(
          Math.pow(fromParticle.x - toParticle.x, 2) + 
          Math.pow(fromParticle.y - toParticle.y, 2)
        );
        
        // Only connect particles that are relatively close
        if (distance < canvas.width / 5) {
          ctx.beginPath();
          ctx.moveTo(fromParticle.x, fromParticle.y);
          ctx.lineTo(toParticle.x, toParticle.y);
          ctx.strokeStyle = `rgba(146, 132, 102, ${conn.opacity * (conn.life / conn.maxLife)})`;
          ctx.lineWidth = 0.3; // Thinner lines for minimalism
          ctx.stroke();
        }
      });
      
      // Mouse interaction - more subtle
      if (mouseRef.current.active) {
        // Create particles at mouse position occasionally
        if (Math.random() < 0.05) {
          particlesRef.current.push(createParticle(mouseRef.current.x, mouseRef.current.y));
          
          // Keep particle count in check
          if (particlesRef.current.length > 60) {
            particlesRef.current.shift();
          }
        }
        
        // Draw connections from mouse to nearby particles - very subtle
        particlesRef.current.forEach((particle, index) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - mouseRef.current.x, 2) + 
            Math.pow(particle.y - mouseRef.current.y, 2)
          );
          
          if (distance < canvas.width / 6) {
            ctx.beginPath();
            ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.strokeStyle = `rgba(146, 132, 102, ${0.1 * (1 - distance / (canvas.width / 6))})`;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Touch event handlers
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    // Initialize and start animation
    initParticles();
    initConnections();
    animationRef.current = requestAnimationFrame(animate);

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }} // Reduced opacity for subtlety
    />
  );
};

export default ParticleBackground;