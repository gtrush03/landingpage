import React from 'react';
import { Frame } from './common';
import { ChevronRight } from 'lucide-react';

export default function Future() {
  return (
    <div className="px-4 md:px-6" id="future">
      <div className="max-w-5xl mx-auto">
        <Frame 
          title="JOIN THE JOURNEY" 
          description="Your vision could help bring these solutions to life."
          alwaysExpanded
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Ready to explore how these emerging technologies could transform your industry? 
              Let's collaborate on bringing your vision to life with our cutting-edge solutions.
            </p>

            <button 
              onClick={() => {
                window.location.href = '/horizon-form';
              }}
              className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B] transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">
                <span className="text-black font-medium tracking-wider">Let's Talk</span>
                <ChevronRight size={16} className="text-black transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </Frame>
      </div>
    </div>
  );
}