import React from 'react';
import { Brain, Database, Shield, Zap } from 'lucide-react';
import { Frame } from './common';

const capabilities = [
  {
    icon: Brain,
    title: "We'll Build Your Business Intelligence",
    description: "Let's transform your AI into a true domain expert that speaks your language, follows your processes, and aligns perfectly with your goals.",
    features: [
      "Master your terminology",
      "Implement your business logic",
      "Design your workflows",
      "Express your brand voice"
    ]
  },
  {
    icon: Database,
    title: "We'll Create Your Training Data",
    description: "Together, we'll generate high-quality synthetic datasets that mirror your unique business scenarios while ensuring complete privacy and compliance.",
    features: [
      "Build your scenario library",
      "Protect your data",
      "Perfect your training",
      "Model edge cases"
    ]
  },
  {
    icon: Shield,
    title: "We'll Ensure Your Compliance",
    description: "Our partnership guarantees your AI operates within your industry regulations while delivering precise, contextually appropriate responses.",
    features: [
      "Meet your standards",
      "Secure your data",
      "Track every action",
      "Manage your risk"
    ]
  },
  {
    icon: Zap,
    title: "We'll Optimize Your Operations",
    description: "Let's deploy models that deliver lightning-fast, accurate responses while maximizing your resource efficiency and minimizing costs.",
    features: [
      "Speed up responses",
      "Reduce your costs",
      "Maximize resources",
      "Scale seamlessly"
    ]
  }
];

export default function Capabilities() {
  return (
    <div className="px-6" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <Frame 
          title="ADVANTAGES" 
          description="Let's explore how our partnership will transform your AI capabilities and outperform standard solutions."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={index}
                  className="p-6 border border-[#928466]/20 rounded-lg bg-black/40 backdrop-blur-sm hover:border-[#928466]/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#928466]/10 flex items-center justify-center">
                      <Icon size={24} className="text-[#928466]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#928466] tracking-wider mb-2">{capability.title}</h3>
                      <p className="text-white/60 text-sm">{capability.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/40">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                        {feature}
                      </div>
                    ))}
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