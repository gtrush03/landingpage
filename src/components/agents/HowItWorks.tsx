import React from 'react';
import { MessageSquare, Search, Settings, CheckCircle2, Sparkles } from 'lucide-react';
import { Frame } from './common';

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "Free consultation to understand your business",
    marketValue: null,
    value: [
      "Complete business process analysis",
      "AI integration opportunity mapping",
      "ROI projection report",
      "Custom implementation roadmap"
    ]
  },
  {
    icon: Search,
    title: "Strategic Analysis",
    description: "Comprehensive business assessment",
    marketValue: 2500,
    value: [
      "Workflow optimization blueprint",
      "Resource allocation plan",
      "Risk assessment report",
      "Performance metrics definition"
    ]
  },
  {
    icon: Settings,
    title: "Solution Design",
    description: "Custom AI implementation planning",
    marketValue: 5000,
    value: [
      "Tailored AI agent configuration",
      "Integration architecture design",
      "Security protocol development",
      "Scalability framework"
    ]
  },
  {
    icon: CheckCircle2,
    title: "Implementation Plan",
    description: "Enterprise transformation roadmap",
    marketValue: 10000,
    value: [
      "Complete integration strategy",
      "Team transition blueprint",
      "Risk mitigation plan",
      "Success metrics framework"
    ]
  }
];

// Value Widget Component
const ValueWidget = ({ value }) => (
  <div className="relative overflow-hidden w-32 mx-auto">
    {/* Market Value Badge */}
    <div className="absolute -right-8 top-2 w-28 text-center transform rotate-45 bg-[#928466] text-black text-[8px] tracking-wider py-0.5">
      Market Value
    </div>
    
    <div className="flex flex-col items-center px-2 py-1 bg-[#928466]/5 border border-[#928466]/20 rounded-md backdrop-blur-sm">
      <span className="text-xs text-[#928466] tracking-wider font-light line-through opacity-60">
        ${value.toLocaleString()}
      </span>
      <div className="flex items-center gap-1 mt-0.5">
        <span className="text-[10px] text-emerald-800 font-medium tracking-wider">FREE</span>
        <div className="relative w-1 h-1">
          <div className="absolute inset-0 bg-emerald-800 rounded-full animate-ping opacity-75" />
          <div className="absolute inset-0 bg-emerald-800 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <Frame title="PROCESS">
          {/* Value Proposition */}
          <div className="text-center mb-16">
            {/* Question Hook */}
            <h3 className="text-2xl md:text-3xl text-[#928466] font-thin tracking-wider mb-8">
              Still Figuring Out Your AI Strategy?
            </h3>

            {/* Value Badge */}
            <div className="inline-flex flex-col md:flex-row items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#928466]/10 border border-[#928466]/30 rounded-lg backdrop-blur-sm mb-4">
              <span className="text-base md:text-xl text-white/60 font-light tracking-wider">
                Complete Strategy Package
              </span>
              <div className="hidden md:block w-px h-8 bg-[#928466]/30" />
              <div className="md:hidden w-16 h-px bg-[#928466]/30" />
              <span className="text-2xl md:text-xl text-[#928466] tracking-wider font-light">
                $18,000 Value
              </span>
            </div>

            {/* Keep Message */}
            <div className="text-white/40 text-sm md:text-base tracking-wider mb-8">
              Yours to Keep - Whether You Work With Us or Not
            </div>

            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let us help you navigate the AI landscape. We'll analyze your business 
              and create a tailored strategy that maximizes your potential with AI technology.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center group-hover:border-[#928466] transition-colors duration-300">
                      <Icon size={28} className="text-[#928466]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl text-[#928466] tracking-wider mb-2">{step.title}</h3>
                    <p className="text-white/80 font-light mb-4">{step.description}</p>
                    
                    {/* Value Widget */}
                    {step.marketValue && (
                      <div className="mb-6">
                        <ValueWidget value={step.marketValue} />
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      {step.value.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm text-white/40">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a 
              href="https://nd2nkx5y1hc.typeform.com/trusynth-ai"
              target="_self"
              className="
                group relative overflow-hidden w-full md:w-auto
                inline-flex items-center justify-center gap-2 
                px-6 md:px-8 py-3 md:py-4
                bg-gradient-to-r from-[#928466] to-[#B7A98B]
                rounded-lg hover:scale-105 transition-all duration-500
                cursor-pointer
              "
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <Sparkles size={20} className="text-black" />
                <span className="text-black font-medium tracking-wider text-sm md:text-base">
                  Get Your In-Depth AI Strategy
                </span>
              </div>
            </a>
          </div>
        </Frame>
      </div>
    </div>
  );
}