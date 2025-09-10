import React, { useEffect, useState } from 'react';
import { Brain, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Brain, label: "Process", color: "#928466" },
  { icon: MessageSquare, label: "Analyze", color: "#928466" },
  { icon: Sparkles, label: "Optimize", color: "#928466" },
  { icon: CheckCircle2, label: "Execute", color: "#928466" }
];

export default function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-center relative px-4 md:px-0 max-w-[600px] mx-auto">
        {/* Progress Line - Background */}
        <div className="absolute left-[5%] right-[5%] top-5 h-[2px] bg-[#928466]/20" />
        
        {/* Progress Line - Active */}
        <div 
          className="absolute left-[5%] top-5 h-[2px] bg-[#928466] transition-all duration-1000"
          style={{ 
            width: `${(activeStep) * (90 / (steps.length - 1))}%`,
          }}
        />

        {/* Steps */}
        <div className="flex items-center justify-between w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;

            return (
              <div 
                key={index}
                className={`
                  relative z-10 flex flex-col items-center gap-2
                  transition-all duration-500
                  ${isActive ? 'opacity-100' : 'opacity-40'}
                `}
              >
                <div 
                  className={`
                    w-10 h-10 rounded-full bg-black border-2
                    flex items-center justify-center
                    transform transition-all duration-500
                    ${isActive 
                      ? 'border-[#928466] text-[#928466]' 
                      : 'border-[#928466]/20 text-[#928466]/20'
                    }
                    ${isCurrent && 'scale-125 shadow-[0_0_20px_rgba(146,132,102,0.3)]'}
                  `}
                >
                  <Icon size={20} />
                </div>
                <span className={`
                  text-[10px] tracking-wider transition-all duration-500 whitespace-nowrap
                  ${isActive ? 'text-[#928466]' : 'text-[#928466]/20'}
                `}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}