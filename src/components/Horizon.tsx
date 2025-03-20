import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Overview from './horizon/Overview';
import Innovation from './horizon/Innovation';
import Future from './horizon/Future';
import HeroSection from './horizon/HeroSection';
import Footer from './Footer';

export default function Horizon() {
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
      {/* Enhanced background with horizon gradient */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1814] to-[#928466]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.2),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
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
          <Overview />
          <Innovation />
          <Future />
        </div>
        <Footer />
      </div>
    </div>
  );
}