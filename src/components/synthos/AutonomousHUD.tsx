import React, { useState, useEffect } from 'react';
import { Workflow, Brain, Boxes, Share2, Target, Sparkles, Bot } from 'lucide-react';

export default function AutonomousHUD() {
  const [activeSystem, setActiveSystem] = useState(0);
  const [systems] = useState([
    { icon: Workflow, label: "Process Automation", status: "98.2%", health: "optimal" },
    { icon: Brain, label: "Neural Networks", status: "Active", health: "learning" },
    { icon: Boxes, label: "Resource Management", status: "92.5%", health: "optimal" },
    { icon: Share2, label: "Data Sync", status: "4.2ms", health: "optimal" },
    { icon: Target, label: "Decision Engine", status: "Active", health: "analyzing" },
    { icon: Sparkles, label: "Optimization", status: "96.8%", health: "optimal" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSystem((prev) => (prev + 1) % systems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [systems.length]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#928466]/10 flex items-center justify-center">
          <Bot size={20} className="text-[#928466]" />
        </div>
        <div>
          <h4 className="text-lg text-[#928466]">System Status Monitor</h4>
          <p className="text-white/60 text-sm">Real-time monitoring of autonomous system components</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {systems.map((system, index) => {
          const Icon = system.icon;
          const isActive = index === activeSystem;
          
          return (
            <div 
              key={index} 
              className={`
                relative border rounded-lg p-4 bg-black/40 backdrop-blur-xl overflow-hidden
                transition-all duration-500
                ${isActive 
                  ? 'border-[#928466] shadow-[0_0_15px_rgba(146,132,102,0.3)]' 
                  : 'border-[#928466]/20'
                }
              `}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <Icon 
                    size={20} 
                    className={`
                      transition-all duration-500
                      ${isActive ? 'text-white scale-110' : 'text-[#928466]/60'}
                    `}
                  />
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs border transition-all duration-500
                    ${system.health === 'optimal' 
                      ? 'bg-green-500/10 text-green-400/60 border-green-500/20' 
                      : system.health === 'learning'
                      ? 'bg-blue-500/10 text-blue-400/60 border-blue-500/20'
                      : 'bg-purple-500/10 text-purple-400/60 border-purple-500/20'
                    }
                    ${isActive ? 'opacity-100' : 'opacity-50'}
                  `}>
                    {system.health}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className={`
                    text-sm transition-all duration-500
                    ${isActive ? 'text-white' : 'text-white/40'}
                  `}>
                    {system.label}
                  </div>
                  <div className={`
                    text-lg transition-all duration-500
                    ${isActive ? 'text-[#928466]' : 'text-[#928466]/40'}
                  `}>
                    {system.status}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}