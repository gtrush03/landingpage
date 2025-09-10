import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Frame: React.FC<FrameProps> = ({ children, title, className = "" }) => (
  <div className="py-12">
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl text-white font-thin tracking-[0.3em] mb-4">
        {title}
      </h2>
      <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent" />
    </div>

    {/* Content Frame */}
    <div className={`
      relative border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg p-8 md:p-12
      opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] hover:border-[#928466]/50 transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  </div>
);