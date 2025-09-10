import React from 'react';
import { Shield, Zap, Network, Database, Cpu, Cloud, Settings, Lock, Layers, Code } from 'lucide-react';

export default function SystemArchitecture() {
  const features = [
    { icon: Shield, label: "Security", desc: "Enterprise-grade protection" },
    { icon: Zap, label: "Performance", desc: "Optimized processing" },
    { icon: Network, label: "Scalability", desc: "Distributed systems" },
    { icon: Database, label: "Storage", desc: "Intelligent data management" },
    { icon: Cpu, label: "Processing", desc: "Neural processing units" },
    { icon: Cloud, label: "Cloud", desc: "Global deployment" },
    { icon: Settings, label: "Integration", desc: "Seamless connectivity" },
    { icon: Lock, label: "Access", desc: "Smart permissions" },
    { icon: Layers, label: "Redundancy", desc: "Self-healing systems" },
    { icon: Code, label: "Automation", desc: "Autonomous operations" }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl text-[#928466] tracking-wider mb-4">
          Autonomous Infrastructure
        </h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
          Built on a distributed AI architecture with enterprise-grade security and scalability, 
          SynthOS delivers autonomous business operations across your organization.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {features.map(({ icon: Icon, label, desc }, index) => (
          <div key={index} className="p-4 border border-[#928466]/20 rounded-lg bg-black/20 hover:bg-[#928466]/10 transition-colors duration-300">
            <Icon size={20} className="text-[#928466] mb-2" />
            <h4 className="text-sm font-medium mb-1">{label}</h4>
            <p className="text-xs text-white/40">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}