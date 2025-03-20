import React from 'react';
import { Search, Database, Settings, Bot, RefreshCcw, ArrowRight } from 'lucide-react';
import { Frame } from './common';

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    subtitle: "Strategic Assessment",
    description: "Our comprehensive discovery phase begins with a deep analysis of your business operations, technology stack, and strategic objectives to create a tailored implementation roadmap.",
    highlights: [
      "Comprehensive business process analysis",
      "Technology stack evaluation",
      "Strategic opportunity mapping",
      "Implementation roadmap development"
    ]
  },
  {
    icon: Database,
    title: "Data Architecture",
    subtitle: "Foundation Development",
    description: "We architect and develop a robust data foundation that encapsulates your business domain knowledge, ensuring comprehensive coverage of your operational scenarios.",
    highlights: [
      "Domain-specific data architecture",
      "Enterprise-grade security protocols",
      "Regulatory compliance framework",
      "Quality assurance methodology"
    ]
  },
  {
    icon: Settings,
    title: "Model Engineering",
    subtitle: "Advanced Customization",
    description: "Our expert team implements sophisticated model tuning protocols, optimizing performance across your specific use cases while maintaining enterprise-grade reliability.",
    highlights: [
      "Domain-specific optimization",
      "Performance benchmarking",
      "Accuracy enhancement protocols",
      "Validation framework implementation"
    ]
  },
  {
    icon: Bot,
    title: "System Integration",
    subtitle: "Enterprise Implementation",
    description: "We execute a seamless integration of your customized AI capabilities into your existing enterprise infrastructure, ensuring optimal performance and reliability.",
    highlights: [
      "Enterprise system integration",
      "Operational workflow optimization",
      "Performance monitoring setup",
      "Security protocol implementation"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Continuous Optimization",
    subtitle: "Ongoing Enhancement",
    description: "Our dedicated team provides continuous monitoring and optimization services, ensuring your AI systems evolve alongside your business requirements.",
    highlights: [
      "Performance analytics monitoring",
      "Strategic insight generation",
      "Continuous system optimization",
      "Capability expansion protocols"
    ]
  }
];

export default function Process() {
  return (
    <div className="px-6" id="process">
      <div className="max-w-6xl mx-auto">
        <Frame 
          title="IMPLEMENTATION METHODOLOGY" 
          description="Our systematic approach ensures successful integration of custom-tuned AI solutions into your enterprise infrastructure."
        >
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  {/* Timeline connector */}
                  {index > 0 && (
                    <div className="hidden md:block w-1 h-12 bg-gradient-to-b from-[#928466]/30 to-transparent mx-auto -mb-6" />
                  )}
                  
                  {/* Content card */}
                  <div className="bg-black/20 border border-[#928466]/20 rounded-lg overflow-hidden group-hover:border-[#928466]/40 transition-all duration-300">
                    {/* Header */}
                    <div className="bg-[#928466]/10 border-b border-[#928466]/20 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center">
                          <Icon size={24} className="text-[#928466]" />
                        </div>
                        <div>
                          <div className="text-[#928466]/60 text-sm tracking-wider mb-1">Phase {index + 1}</div>
                          <h3 className="text-xl text-[#928466] tracking-wider">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-white/80 text-lg mb-4">{step.subtitle}</h4>
                      <p className="text-white/60 leading-relaxed mb-6">{step.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-white/60">
                            <ArrowRight size={16} className="text-[#928466]" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Frame>
      </div>
    </div>
  );
}