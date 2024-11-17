import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-25T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div 
          key={unit} 
          className="glassmorphism p-4"
          style={{
            animationDelay: `${index * 0.1}s`,
            transform: `perspective(1000px) rotateX(${Math.sin(Date.now() * 0.001 + index) * 2}deg)`
          }}
        >
          <div className="text-2xl md:text-4xl font-light text-[#928466]">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}