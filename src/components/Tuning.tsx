import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Terminal, Activity } from 'lucide-react';
import Overview from './tuning/Overview';
import Capabilities from './tuning/Capabilities';
import Process from './tuning/Process';
import Impact from './tuning/Impact';
import Future from './tuning/Future';
import SynthesisAnimation from './tuning/SynthesisAnimation';
import Footer from './Footer';

const AnimatedTerminal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dataPoints, setDataPoints] = useState(0);
  const [loadingSpeed, setLoadingSpeed] = useState(0.5);
  const [totalGenerated, setTotalGenerated] = useState(0);

  const steps = [
    {
      command: 'Generating synthetic data...',
      output: (dataPoints, total) => [
        `Creating business scenarios...`,
        `Generated ${dataPoints.toLocaleString()} training examples`,
        `Total scenarios: ${total.toLocaleString()}`,
        'Validating data distribution'
      ]
    },
    {
      command: 'Processing training batches...',
      output: (dataPoints, total) => [
        `Loading batch ${Math.floor(dataPoints/1000)}/${Math.floor(50000/1000)}`,
        `Processing ${dataPoints.toLocaleString()} examples`,
        `Total processed: ${total.toLocaleString()}`,
        'Optimizing for domain coverage'
      ]
    },
    {
      command: 'Fine-tuning model...',
      output: (dataPoints, total) => [
        `Training progress: ${Math.min(100, Math.floor(dataPoints/500))}%`,
        `Loss: ${(1 - Math.min(1, dataPoints/50000)).toFixed(4)}`,
        `Accuracy: ${(Math.min(0.98, 0.5 + dataPoints/50000)).toFixed(4)}`,
        `Iterations: ${total.toLocaleString()}`
      ]
    },
    {
      command: 'Optimizing for business logic...',
      output: (dataPoints, total) => [
        `Implementing business rules`,
        `Processed ${dataPoints.toLocaleString()} rules`,
        `Total optimizations: ${total.toLocaleString()}`,
        'Validating business logic'
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
      setProgress(0);
      setDataPoints(0);
      setLoadingSpeed(0.3 + Math.random() * 0.4);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const increment = 1 * loadingSpeed;
        return Math.min(prev + increment, 100);
      });
      
      setDataPoints(prev => {
        const increment = 500 * loadingSpeed;
        return Math.min(prev + increment, 50000);
      });
      
      setTotalGenerated(prev => prev + Math.floor(Math.random() * 500 * loadingSpeed));
    }, 100);

    return () => clearInterval(progressTimer);
  }, [currentStep, loadingSpeed]);

  const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  useEffect(() => {
    const spinnerTimer = setInterval(() => {
      setSpinnerIndex(prev => (prev + 1) % spinnerChars.length);
    }, 100);

    return () => clearInterval(spinnerTimer);
  }, []);

  return (
    <div className="code-window backdrop-blur-xl h-[400px] md:h-[450px] w-full max-w-3xl mx-auto">
      <div className="code-dots">
        <div className="code-dot"></div>
        <div className="code-dot"></div>
        <div className="code-dot"></div>
      </div>
      <div className="code-content h-full overflow-y-auto p-4 md:p-6">
        {/* Command Line */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={16} className="text-[#928466]" />
          <span className="text-[#928466] font-mono">
            {steps[currentStep].command}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 bg-[#0a1f0a] rounded-full mb-4 overflow-hidden border border-[#1a3f1a]">
          <div 
            className="absolute inset-0 bg-[#143814] opacity-50"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
          
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1a3f1a] to-[#2d5a2d] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
          
          <div 
            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#2d5a2d] to-transparent blur-sm"
            style={{ 
              left: `${progress - 4}%`,
              opacity: progress < 100 ? 0.6 : 0,
              transition: 'left 0.3s ease-out, opacity 0.3s ease-out'
            }}
          />
        </div>

        {/* Output */}
        <div className="min-h-[160px] space-y-2">
          {steps[currentStep].output(dataPoints, totalGenerated).map((line, index) => (
            <div 
              key={index}
              className="code-line text-[#928466]/80 font-mono text-xs md:text-sm"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {progress < 100 && (
          <div className="flex items-center gap-2 mt-4 text-[#928466]/60 font-mono text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-4">{spinnerChars[spinnerIndex]}</span>
              <Activity size={14} className="animate-pulse" />
            </div>
            <span className="animate-pulse">
              {currentStep === 0 ? 'Generating data...' :
               currentStep === 1 ? 'Processing batches...' :
               currentStep === 2 ? 'Training model...' :
               'Optimizing logic...'}
            </span>
            <span className="text-[#928466]/40">
              Speed: {loadingSpeed.toFixed(1)}x
            </span>
          </div>
        )}

        {/* Stats Display */}
        <div className="mt-6 pt-4 border-t border-[#928466]/20">
          <div className="grid grid-cols-3 gap-4 text-xs font-mono">
            <div className="text-[#928466]/60">
              Current: {dataPoints.toLocaleString()}
            </div>
            <div className="text-[#928466]/60">
              Total: {totalGenerated.toLocaleString()}
            </div>
            <div className="text-[#928466]/60">
              Progress: {progress.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero Section styled like Agents page
const HeroSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-40">
    <div className="text-center w-full max-w-4xl mx-auto">
      {/* Title Section with Animation */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 -top-20 -bottom-20 -left-20 -right-20 overflow-hidden">
          <SynthesisAnimation />
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-thin tracking-[0.3em] text-white mb-8">
            TUNING
          </h1>
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-8" />
          <p className="text-xl md:text-2xl text-[#928466] tracking-wider mb-8">
            Synthetic Model Optimization
          </p>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Transform general-purpose LLMs into tailor-made AI solutions that reflect your brand, 
            business logic, and domain expertise with our advanced synthetic tuning process.
          </p>
        </div>
      </div>

      {/* Terminal Animation */}
      <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
        <AnimatedTerminal />
      </div>
    </div>
  </div>
);

export default function Tuning() {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
          <Capabilities />
          <Process />
          <Impact />
          <Future />
        </div>
        <Footer />
      </div>
    </div>
  );
}