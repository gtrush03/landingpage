import React from 'react';
import { Brain, Database, Cpu, Sparkles } from 'lucide-react';
import { Frame } from './common';

const features = [
  {
    icon: Brain,
    title: "Enterprise Intelligence Engineering",
    description: "Our advanced model engineering transforms foundation models into domain-specific enterprise solutions that precisely align with your operational requirements and strategic objectives.",
    details: [
      "Domain-specific knowledge integration",
      "Enterprise process optimization",
      "Workflow automation protocols",
      "Brand voice calibration"
    ]
  },
  {
    icon: Database,
    title: "Synthetic Data Architecture",
    description: "We engineer comprehensive synthetic datasets that accurately represent your enterprise scenarios while maintaining stringent security protocols and regulatory compliance.",
    details: [
      "Enterprise scenario modeling",
      "Data security architecture",
      "Training optimization protocols",
      "Edge case analysis framework"
    ]
  },
  {
    icon: Cpu,
    title: "Regulatory Compliance Framework",
    description: "Our enterprise-grade compliance framework ensures your AI systems operate within industry regulations while maintaining precise operational parameters and data governance standards.",
    details: [
      "Regulatory standard implementation",
      "Data governance protocols",
      "Audit trail architecture",
      "Risk management framework"
    ]
  },
  {
    icon: Sparkles,
    title: "Operational Excellence",
    description: "We implement high-performance model deployment strategies that optimize computational efficiency while ensuring consistent, reliable operation across your enterprise infrastructure.",
    details: [
      "Response time optimization",
      "Resource utilization enhancement",
      "Scalability architecture",
      "Performance monitoring protocols"
    ]
  }
];

export default function Overview() {
  return (
    <div className="px-6" id="overview">
      <div className="max-w-6xl mx-auto">
        <Frame 
          title="CAPABILITIES" 
          description="Our enterprise-grade solutions deliver precise, efficient, and scalable AI implementations tailored to your business requirements."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-14 h-14 rounded-lg bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center group-hover:border-[#928466] transition-colors duration-300">
                        <Icon size={28} className="text-[#928466]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-[#928466] tracking-wider mb-4">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/40">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                            {detail}
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