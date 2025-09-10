import React, { useState } from 'react';
import { Coins, TrendingUp, Users, CircuitBoard } from 'lucide-react';

export default function ComputeInvestment() {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const agents = [
    {
      name: "Alpha Trader",
      type: "Financial",
      compute: "12.5K",
      returns: "28.4%",
      investors: "1.2K",
      status: "active",
      image: "https://i.imgur.com/aT0MUGQ.png",
      efficiency: "96%",
      uptime: "99.9%"
    },
    {
      name: "Nexus Supply",
      type: "Logistics",
      compute: "8.2K",
      returns: "22.1%",
      investors: "856",
      status: "scaling",
      image: "https://i.imgur.com/FnULOuA.png",
      efficiency: "94%",
      uptime: "99.7%"
    },
    {
      name: "DataSynth",
      type: "Analytics",
      compute: "15.7K",
      returns: "31.2%",
      investors: "2.1K",
      status: "optimizing",
      image: "https://i.imgur.com/ADBszj7.png",
      efficiency: "98%",
      uptime: "99.8%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#928466]/5 p-4 rounded-lg border border-[#928466]/20">
        <h4 className="text-lg text-[#928466] mb-3 flex items-center gap-2">
          <Coins size={20} className="text-[#928466]" />
          <span>Compute Investment Explained</span>
        </h4>
        <p className="text-white/70 text-sm leading-relaxed mb-2">
          Invest your compute resources in high-performing AI agents. By allocating computational power 
          to our autonomous agents, you gain returns based on their performance and efficiency.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Each agent specializes in different business domains, from financial operations to supply chain 
          management, delivering value through intelligent automation and continuous learning.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <div
            key={index}
            onClick={() => setSelectedAgent(index)}
            className={`
              relative overflow-hidden rounded-lg border transition-all duration-500 cursor-pointer
              ${index === selectedAgent 
                ? 'border-[#928466] bg-[#928466]/10 scale-105' 
                : 'border-[#928466]/20 bg-black/20'
              }
            `}
          >
            <div className="absolute inset-0">
              <img 
                src={agent.image} 
                alt={agent.name}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg text-[#928466] font-medium mb-1">{agent.name}</h3>
                  <span className="text-xs text-white/40">{agent.type}</span>
                </div>
                <span className={`
                  px-2 py-1 rounded-full text-xs backdrop-blur-sm
                  ${agent.status === 'active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    agent.status === 'scaling' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'}
                `}>
                  {agent.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-white/40 mb-1">Compute Power</div>
                  <div className="text-sm flex items-center gap-2">
                    <CircuitBoard size={14} className="text-[#928466]" />
                    {agent.compute}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">ROI</div>
                  <div className="text-sm text-green-400 flex items-center gap-1">
                    <TrendingUp size={14} />
                    {agent.returns}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Efficiency</div>
                  <div className="text-sm text-[#928466]">{agent.efficiency}</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Uptime</div>
                  <div className="text-sm text-[#928466]">{agent.uptime}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#928466]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#928466]" />
                    <span className="text-sm text-white/60">{agent.investors} compute providers</span>
                  </div>
                  <button className="px-4 py-1.5 bg-[#928466]/20 hover:bg-[#928466]/30 rounded-full text-xs text-[#928466] hover:text-white transition-all duration-300 border border-[#928466]/30 hover:border-[#928466]/60">
                    Invest Compute
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}