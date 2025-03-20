import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import WhatWeDo from './agents/WhatWeDo';
import HowItWorks from './agents/HowItWorks';
import WhyUs from './agents/WhyUs';
import Examples from './agents/Examples';
import Pricing from './agents/Pricing';
import WorkflowAnimation from './agents/WorkflowAnimation';
import ParticleBackground from './agents/ParticleBackground';
import Footer from './Footer';

// Hero Section
const HeroSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-40">
    <div className="text-center w-full max-w-4xl mx-auto">
      {/* Title Section */}
      <div className="mb-12 relative">
        {/* Particle Background - Expanded for better visibility */}
        <div className="absolute inset-0 -top-60 -bottom-60 -left-60 -right-60 overflow-hidden">
          <ParticleBackground />
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-thin tracking-[0.3em] text-white mb-8">
            AGENTS
          </h1>
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-8" />
          <p className="text-xl md:text-2xl text-[#928466] tracking-wider mb-8">
            Autonomous Digital Employees
          </p>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Experience the future of work with our advanced AI agents. 
            Designed to operate 24/7, learn instantly, and scale infinitely.
          </p>
        </div>
      </div>

      {/* Workflow Animation */}
      <div className="w-full max-w-3xl mx-auto px-4">
        <WorkflowAnimation />
      </div>
    </div>
  </div>
);

export default function Agents() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to Dashboard</span>
          </button>
        </div>
        {/* Progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main content */}
      <div className="relative">
        <HeroSection />
        <div className="space-y-16 pb-16">
          <WhatWeDo />
          <HowItWorks />
          <WhyUs />
          <Examples />
          <Pricing />
        </div>
        <Footer />
      </div>
    </div>
  );
}