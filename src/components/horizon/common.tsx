import React from 'react';

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
  return (
    <div className="py-8 md:py-12">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl text-white font-thin tracking-[0.3em] mb-4">
          {title}
        </h2>
        <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-4" />
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Content Frame */}
      <div className={`
        relative border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg p-6 md:p-8
        opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] hover:border-[#928466]/50 transition-all duration-300
        ${className}
      `}>
        {children}
      </div>
    </div>
  );
};