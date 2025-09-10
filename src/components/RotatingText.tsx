import React, { useEffect, useState } from 'react';

const phrases = [
  "AUTOMATE OPERATIONS",
  "DEPLOY AI WORKFLOWS",
  "ANALYZE DATA",
  "OPTIMIZE DECISIONS",
  "STREAMLINE PROCESSES",
  "DISCOVER OPPORTUNITIES"
];

export default function RotatingText() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 75); // Faster typing speed
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait time at full text
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Speed of erasing
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentPhraseIndex, isTyping]);

  return (
    <div className="h-12 relative flex items-center justify-center">
      {/* Blurred Background that follows text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: `radial-gradient(circle at center, rgba(146,132,102,0.15) 0%, transparent 70%)`,
          filter: 'blur(10px)',
          transform: `translate(-50%, -50%) scaleX(${displayText.length / 20})`, // Scale based on text length
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Text Container */}
      <div className="relative px-4 py-2">
        {/* Text with Glow */}
        <span 
          className="text-[#928466] text-sm md:text-base tracking-[0.3em] font-thin inline-block min-w-[280px] text-center"
          style={{
            textShadow: `
              0 0 10px rgba(146,132,102,0.8),
              0 0 20px rgba(146,132,102,0.4),
              0 0 30px rgba(146,132,102,0.2)
            `,
          }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </span>

        {/* Underline */}
        <div 
          className="absolute bottom-0 left-1/2 h-[1px] w-full transform -translate-x-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent, #928466 20%, #928466 80%, transparent)',
            boxShadow: '0 0 10px rgba(146,132,102,0.5)',
          }}
        />
      </div>
    </div>
  );
}