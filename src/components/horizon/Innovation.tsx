import React from 'react';
import { Frame } from './common';
import { Lightbulb, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Active Development",
    description: "Technologies in active development, being refined and perfected daily.",
    points: [
      "Daily iteration",
      "Live testing",
      "Optimization",
      "Expansion"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Evolution",
    description: "Evolving at unprecedented pace, with continuous improvements.",
    points: [
      "Weekly updates",
      "Performance",
      "New features",
      "Stability"
    ]
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Every decision guided by real business needs and opportunities.",
    points: [
      "Market focus",
      "User design",
      "Integration",
      "ROI driven"
    ]
  }
];

export default function Innovation() {
  return (
    <div className="px-4 md:px-6" id="innovation">
      <div className="max-w-5xl mx-auto">
        <Frame 
          title="BUILDING THE FUTURE" 
          description="These aren't just concepts—they're technologies we're actively developing right now."
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl text-[#928466] tracking-wider mb-6">
              Have a Custom Project in Mind?
            </h3>
            <p className="text-white/60 max-w-3xl mx-auto mb-8">
              Our team is actively building these technologies, but we're always open to collaboration. 
              If you have a specific use case or custom project that could benefit from our cutting-edge 
              solutions, we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 border border-[#928466]/20 rounded-lg bg-black/40 backdrop-blur-sm hover:border-[#928466]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#928466]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#928466]" />
                    </div>
                    <h3 className="text-lg text-[#928466] tracking-wider">{feature.title}</h3>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-4">{feature.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {feature.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/40">
                        <div className="h-1 w-1 rounded-full bg-[#928466]/40" />
                        <span className="truncate">{point}</span>
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