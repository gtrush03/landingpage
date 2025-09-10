import React from 'react';

export default function TitleSection() {
  return (
    <div className="text-center mb-16 md:mb-20">
      <h1 className="text-4xl md:text-6xl font-thin tracking-[0.3em] text-[#928466] mb-6">
        SYNTH<span className="font-normal">OS</span>
      </h1>
      <p className="text-lg md:text-xl text-white/60 tracking-wider max-w-3xl mx-auto mb-8">
        The Future of Autonomous Business Operations
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-white/40">
        <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Neural Networks</span>
        <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Autonomous Agents</span>
        <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Business Intelligence</span>
      </div>
    </div>
  );
}