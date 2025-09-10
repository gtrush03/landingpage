import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import TitleSection from './synthos/TitleSection';
import HUDFrame from './synthos/HUDFrame';
import SynthOSOverview from './synthos/SynthOSOverview';
import SystemArchitecture from './synthos/SystemArchitecture';
import AutomationFlow from './synthos/AutomationFlow';
import VoiceInterface from './synthos/VoiceInterface';
import BusinessMetrics from './synthos/BusinessMetrics';
import DecisionLog from './synthos/DecisionLog';
import ComputeInvestment from './synthos/ComputeInvestment';
import AutonomousHUD from './synthos/AutonomousHUD';

export default function SynthOS() {
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
      {/* Enhanced background with multiple gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(146,132,102,0.05),transparent_50%)]" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="text-sm tracking-wider">Return to Dashboard</span>
            </button>
          </div>
          
          {/* System Status */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-[#928466]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Online
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Neural Core Active</span>
          </div>
        </div>
        {/* Enhanced progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main content with enhanced structure */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-[1920px] mx-auto px-6">
          <TitleSection />
          
          {/* New SynthOS Overview Section */}
          <div className="mb-16">
            <HUDFrame title="WHAT IS SYNTHOS">
              <SynthOSOverview />
            </HUDFrame>
          </div>
          
          {/* Primary Systems Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <HUDFrame title="NEURAL PROCESSING">
              <AutomationFlow />
            </HUDFrame>
            
            <HUDFrame title="PERFORMANCE ANALYTICS">
              <BusinessMetrics />
            </HUDFrame>
          </div>

          {/* Interface & Communication Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <HUDFrame title="AUTONOMOUS INTERFACE">
              <VoiceInterface />
            </HUDFrame>
            
            <HUDFrame title="EXECUTIVE DECISIONS" className="lg:col-span-2">
              <DecisionLog />
            </HUDFrame>
          </div>

          {/* Infrastructure Section */}
          <div className="mb-8">
            <HUDFrame title="SYSTEM ARCHITECTURE">
              <SystemArchitecture />
            </HUDFrame>
          </div>

          {/* Investment & Operations Section */}
          <div className="grid grid-cols-1 gap-8 mb-8">
            <HUDFrame title="NEURAL INVESTMENT MATRIX">
              <ComputeInvestment />
            </HUDFrame>
          </div>

          {/* Monitoring & Alerts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <HUDFrame title="AUTONOMOUS OPERATIONS" className="lg:col-span-2">
              <AutonomousHUD />
            </HUDFrame>
          </div>

          {/* Enhanced Join SYNTHOS Button */}
          <div className="text-center mb-16">
            <button 
              onClick={() => navigate('/join')}
              className="
                group relative inline-flex items-center justify-center px-8 py-4
                overflow-hidden rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B]
                transition-all duration-500 hover:scale-105
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">
                <span className="text-lg font-light tracking-[0.2em] text-white">
                  JOIN SYNTH<span className="font-normal">OS</span>
                </span>
                <ChevronRight size={20} className="text-white transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}