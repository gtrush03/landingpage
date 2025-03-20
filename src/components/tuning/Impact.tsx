import React from 'react';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Frame } from './common';

const metrics = [
  {
    icon: TrendingUp,
    label: "Workflow Execution",
    value: "+50%",
    description: "Faster process completion"
  },
  {
    icon: Users,
    label: "Customer Satisfaction",
    value: "+40%",
    description: "Improved response quality"
  },
  {
    icon: DollarSign,
    label: "Operational Costs",
    value: "-30%",
    description: "Reduced AI expenses"
  },
  {
    icon: Clock,
    label: "Brand Alignment",
    value: "100%",
    description: "Perfect voice match"
  }
];

export default function Impact() {
  return (
    <div className="px-6" id="impact">
      <div className="max-w-6xl mx-auto">
        <Frame 
          title="BUSINESS IMPACT" 
          description="See how our fine-tuned AI models deliver measurable improvements to your business operations."
          alwaysExpanded
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl text-[#928466] tracking-wider mb-4">
              Redefine What AI Can Do for Your Business
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Custom business LLMs empower organizations to achieve more with less, 
              creating scalable, intelligent systems that grow with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="p-6 border border-[#928466]/20 rounded-lg bg-black/40 backdrop-blur-sm hover:border-[#928466]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#928466]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#928466]" />
                  </div>
                  <div className="text-3xl text-white font-light mb-2">{metric.value}</div>
                  <div className="text-[#928466] text-sm mb-1">{metric.label}</div>
                  <div className="text-white/40 text-sm">{metric.description}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <h4 className="text-xl text-[#928466] tracking-wider mb-6">
              Create Your AI DNA
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                "It speaks your brand.",
                "It knows your workflows.",
                "It evolves as your business grows."
              ].map((text, index) => (
                <div key={index} className="p-4 bg-[#928466]/10 border border-[#928466]/30 rounded-lg">
                  <span className="text-white/60">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Frame>
      </div>
    </div>
  );
}