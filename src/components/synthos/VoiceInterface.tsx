import React, { useState, useEffect } from 'react';

export default function VoiceInterface() {
  const [amplitude, setAmplitude] = useState(Array(20).fill(20));

  useEffect(() => {
    const interval = setInterval(() => {
      setAmplitude(prev => prev.map(() => Math.random() * 50 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-20 gap-2">
      <p className="text-[#928466] text-sm tracking-wider">Voice Command Interface Active</p>
      <div className="flex items-center justify-center h-10">
        {amplitude.map((height, i) => (
          <div
            key={i}
            className="w-1 bg-[#928466] rounded-full mx-0.5 transition-all duration-100"
            style={{ 
              height: `${height}%`,
              opacity: 0.3 + (height / 100)
            }}
          />
        ))}
      </div>
    </div>
  );
}