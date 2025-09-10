import React, { useState, useEffect } from 'react';
import { Brain, Users, GitBranch, Bot } from 'lucide-react';

export default function AutomationFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { icon: Brain, label: "Analysis", desc: "Process business data and market trends" },
    { icon: Users, label: "Review", desc: "Human strategic oversight and validation" },
    { icon: GitBranch, label: "Decision", desc: "AI-assisted strategic planning" },
    { icon: Bot, label: "Action", desc: "Automated execution with monitoring" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-white/70 text-sm leading-relaxed bg-[#928466]/5 p-3 rounded-lg border-l-2 border-[#928466]/30">
        Our autonomous process combines AI-driven analysis with human oversight, ensuring optimal 
        decision-making while maintaining strategic control.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        {steps.map((Step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-500 p-4 rounded-lg ${
              index === currentStep 
                ? 'bg-[#928466]/20 scale-105' 
                : 'bg-black/20 opacity-50'
            }`}
          >
            <Step.icon size={24} className={index === currentStep ? 'text-[#928466]' : 'text-white/30'} />
            <span className={`
              text-xs mt-2 tracking-wider text-center
              ${index === currentStep ? 'text-[#928466]' : 'text-[#928466]/20'}
            `}>
              {Step.label}
            </span>
            <span className="text-[10px] text-white/40 mt-1 text-center">{Step.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}