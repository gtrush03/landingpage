import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface FrameProps {
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  alwaysExpanded?: boolean;
}

export const Frame: React.FC<FrameProps> = ({ 
  children, 
  title, 
  description, 
  className = "",
  alwaysExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonTexts = {
    "CAPABILITIES": "Explore Our Solutions",
    "ADVANTAGES": "Discover Your Benefits",
    "YOUR AI JOURNEY": "See Your Path Forward",
    "THE FUTURE OF AI IS YOURS": "Start Your Journey"
  };

  return (
    <div className="py-4 md:py-10">
      {/* Section Title - Desktop */}
      <div className="hidden md:block text-center mb-8">
        <h2 className="text-3xl text-white font-thin tracking-[0.3em] mb-4">
          {title}
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#928466] to-transparent mx-auto mb-4" />
        <p className="text-white/60 max-w-2xl mx-auto text-base px-4">
          {description}
        </p>
      </div>

      {/* Mobile Expandable Box */}
      <div className="md:hidden mb-3">
        <button
          onClick={() => !alwaysExpanded && setIsExpanded(!isExpanded)}
          className={`
            w-full p-5 rounded-lg transition-all duration-300 text-left
            ${isExpanded || alwaysExpanded 
              ? 'bg-[#928466]/20 border-[#928466]' 
              : 'bg-black/40 border-[#928466]/30'
            }
            border backdrop-blur-xl
          `}
        >
          <div className="flex justify-center items-center">
            <h2 className="text-xl text-white font-thin tracking-[0.2em] text-center">
              {title}
            </h2>
            {!alwaysExpanded && (
              <div className="transition-transform duration-300 transform ml-2">
                {isExpanded 
                  ? <ChevronDown size={20} className="text-[#928466]" />
                  : <ChevronRight size={20} className="text-[#928466]" />
                }
              </div>
            )}
          </div>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#928466]/50 to-transparent my-3 mx-auto" />
          
          <p className="text-white/60 text-sm text-center">
            {description}
          </p>
          
          {!isExpanded && !alwaysExpanded && (
            <div className="mt-3 flex justify-center">
              <span className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#928466]/10 rounded-lg text-[#928466] text-xs">
                {buttonTexts[title] || `Tap to expand`}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Content Frame */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${alwaysExpanded ? 'max-h-[5000px] opacity-100' : 
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
      `}>
        <div className={`
          relative border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg p-6 md:p-8
          transition-all duration-500 ease-in-out
          ${isExpanded ? 'animate-[fadeIn_0.4s_ease-out_forwards]' : 'animate-[fadeIn_0.5s_ease-out_forwards]'}
          hover:border-[#928466]/50
          ${className}
        `}>
          {children}
        </div>
      </div>
    </div>
  );
}