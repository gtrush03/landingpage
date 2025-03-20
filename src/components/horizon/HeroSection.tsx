import React, { useEffect, useState } from 'react';

const CircularHorizon = () => {
  const [rotation, setRotation] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    setTimeout(() => setTextVisible(true), 500);

    // Initialize particles with random positions and velocities
    const newParticles = Array(30).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);

    // Update particle positions
    const particleInterval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX < 0 || newX > 100) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          if (newY < 0 || newY > 100) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto my-12">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(0deg, transparent 0%, rgba(146,132,102,0.1) 50%, transparent 100%),
              linear-gradient(90deg, transparent 0%, rgba(146,132,102,0.1) 50%, transparent 100%),
              radial-gradient(circle at center, rgba(146,132,102,0.2) 0%, transparent 70%)
            `,
            backgroundSize: '20px 20px, 20px 20px, 100% 100%',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Outer ring with enhanced gradient */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-[#928466]/20"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(146,132,102,0.15))'
        }}
      />

      {/* Rotating inner ring with enhanced gradient */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          background: 'conic-gradient(from 0deg, transparent, rgba(146,132,102,0.4), transparent)'
        }}
      />

      {/* Center content with improved styling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`
            text-center p-8 backdrop-blur-sm rounded-full
            transform transition-all duration-1000
            ${textVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
          <div className="relative">
            <div className="relative mb-2">
              {/* Enhanced glow effect */}
              <div 
                className="absolute -inset-4 rounded-full opacity-50"
                style={{
                  background: 'radial-gradient(circle at center, rgba(146,132,102,0.3), transparent 70%)',
                  filter: 'blur(10px)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
              <p className="text-white font-light tracking-[0.3em] text-3xl md:text-4xl">
                HORIZON
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free-flowing particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#928466]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.05s linear, top 0.05s linear',
            animation: `pulse 3s ease-in-out ${i * 0.1}s infinite`
          }}
        />
      ))}

      {/* Animated rings */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full border border-[#928466]/10"
          style={{
            inset: `${10 + i * 5}%`,
            animation: `pulse ${4 + i}s ease-in-out ${i * 0.5}s infinite`
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-20">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm md:text-base text-[#928466]/80 tracking-[0.2em] mb-4">
          BEYOND OBSERVATION LIES CREATION
        </p>
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-6 md:mb-8" />

        {/* Circular Horizon Widget */}
        <CircularHorizon />

        <p className="text-sm md:text-base text-[#928466] italic tracking-wider mt-8">
          Let us show you what's on the Horizon.
        </p>

        {/* Enhanced horizon line */}
        <div className="relative mt-12 md:mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#928466] to-transparent opacity-50" />
          <div className="absolute -top-px left-1/2 w-32 h-px bg-[#928466]/20 blur-sm transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}