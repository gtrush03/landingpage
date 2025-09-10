import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Frame } from './common';

export default function Future() {
  return (
    <div className="px-6 relative" id="future">
      <div className="max-w-6xl mx-auto relative z-10">
        <Frame 
          title="THE FUTURE OF AI IS YOURS" 
          description="Take control of your AI destiny with custom-tuned models that perfectly match your business needs."
          alwaysExpanded
        >
          <div className="text-center max-w-3xl mx-auto">
            {/* Enhanced text formatting with better spacing and visual hierarchy */}
            <div className="mb-8 md:mb-10 p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-[#928466]/20 rounded-lg transform transition-all duration-700 hover:scale-[1.02]">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Why settle for <span className="text-[#928466]">general</span> when you can have 
                <span className="text-[#928466] font-medium"> specific</span>, 
                <span className="text-[#928466] font-medium"> strategic</span>, and 
                <span className="text-[#928466] font-medium"> powerful</span> AI?
              </p>
              <div className="w-16 h-px mx-auto bg-[#928466]/30 my-4"></div>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                Train general-purpose LLMs into custom business engines that 
                <span className="italic"> redefine how your company operates</span>.
              </p>
            </div>

            {/* Enhanced button with better spacing */}
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  window.location.href = '/tuning-form';
                }}
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B] transition-all duration-500 hover:scale-105"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <span className="text-black font-medium tracking-wider">
                    Enquire About Model Tuning
                  </span>
                  <ChevronRight size={20} className="text-black transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </Frame>
      </div>
    </div>
  );
}