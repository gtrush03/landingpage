import React from 'react';
import { AlertCircle } from 'lucide-react';

interface HUDFrameProps {
  children: React.ReactNode;
  title: string;
  alert?: boolean;
  className?: string;
}

export default function HUDFrame({ children, title, alert = false, className = "" }: HUDFrameProps) {
  return (
    <div className={`
      relative border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg p-4
      opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] hover:border-[#928466]/50 transition-all duration-300
      ${alert ? 'border-red-500/50' : ''}
      ${className}
    `}>
      <div className="absolute -top-3 left-4 bg-black px-2 text-[#928466] text-xs md:text-sm tracking-wider flex items-center gap-2">
        {alert && <AlertCircle size={14} className="text-red-500" />}
        {title}
      </div>
      {children}
    </div>
  );
}