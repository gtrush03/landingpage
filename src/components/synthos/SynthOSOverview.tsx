import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Brain, Network } from 'lucide-react';

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-[#928466]/20 rounded-lg overflow-hidden transition-all duration-500 hover:border-[#928466]/40">
      {/* Header with toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <h4 className="text-xl text-[#928466] group-hover:text-white transition-colors duration-300">{title}</h4>
        <div className="w-8 h-8 rounded-full bg-[#928466]/10 flex items-center justify-center group-hover:bg-[#928466]/20 transition-all duration-300">
          {isOpen ? (
            <Minus size={18} className="text-[#928466]" />
          ) : (
            <Plus size={18} className="text-[#928466]" />
          )}
        </div>
      </button>
      
      {/* Collapsible content with smooth animation */}
      <div 
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-5 pt-0 border-t border-[#928466]/10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function SynthOSOverview() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl text-[#928466] tracking-wider mb-4">
          Unified Business Operations
        </h3>
        <p className="text-white/60 leading-relaxed max-w-3xl mx-auto">
          SYNTHOS is a comprehensive operational system that centralizes and automates all aspects 
          of your business functions from a single, intelligent command center.
        </p>
      </div>

      <div className="space-y-4">
        <CollapsibleSection title="Centralized Command">
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              <span className="text-[#928466] font-medium">SYNTHOS</span> serves as the central nervous system of your organization, 
              connecting all departments, processes, and systems through a unified interface.
            </p>
            
            <div className="pl-4 border-l-2 border-[#928466]/30">
              <ul className="space-y-2">
                <li className="text-white/60">
                  <span className="text-[#928466]">•</span> Eliminates operational silos
                </li>
                <li className="text-white/60">
                  <span className="text-[#928466]">•</span> Creates seamless information flow
                </li>
                <li className="text-white/60">
                  <span className="text-[#928466]">•</span> Enables real-time monitoring
                </li>
                <li className="text-white/60">
                  <span className="text-[#928466]">•</span> Optimizes all business processes
                </li>
              </ul>
            </div>
            
            <p className="text-white/60 leading-relaxed">
              By consolidating operations into a single platform, SYNTHOS provides unprecedented visibility
              and control over your business activities.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Autonomous Intelligence">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#928466]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Brain size={20} className="text-[#928466]" />
              </div>
              <div>
                <p className="text-white/70 leading-relaxed">
                  At its core, SYNTHOS is powered by advanced neural networks that continuously learn from 
                  your business data, market conditions, and operational patterns.
                </p>
              </div>
            </div>
            
            <div className="bg-[#928466]/5 p-4 rounded-lg">
              <h5 className="text-[#928466] mb-2 font-medium">Key Intelligence Features:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466]"></div>
                  <span className="text-white/70 text-sm">Informed decision-making</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466]"></div>
                  <span className="text-white/70 text-sm">Outcome prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466]"></div>
                  <span className="text-white/70 text-sm">Proactive problem-solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466]"></div>
                  <span className="text-white/70 text-sm">Adaptive learning</span>
                </div>
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed">
              The system evolves with your business, constantly refining its understanding of your 
              operations and improving its performance over time.
            </p>
          </div>
        </CollapsibleSection>
        
        <CollapsibleSection title="Key Capabilities">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-sm border border-[#928466]/10 rounded-lg p-4 hover:border-[#928466]/30 transition-all duration-300">
              <h4 className="text-lg text-[#928466] mb-3 flex items-center gap-2">
                <span>Operational Efficiency</span>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                SYNTHOS automates routine tasks, optimizes resource allocation, and streamlines workflows 
                to maximize operational efficiency.
              </p>
              <div className="mt-3 pt-3 border-t border-[#928466]/10">
                <p className="text-white/50 text-xs italic">
                  Focus on strategic initiatives rather than administrative overhead
                </p>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-[#928466]/10 rounded-lg p-4 hover:border-[#928466]/30 transition-all duration-300">
              <h4 className="text-lg text-[#928466] mb-3 flex items-center gap-2">
                <span>Strategic Decision-Making</span>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                With comprehensive data analysis and predictive modeling capabilities, SYNTHOS provides 
                actionable insights that inform strategic decision-making.
              </p>
              <div className="mt-3 pt-3 border-t border-[#928466]/10">
                <p className="text-white/50 text-xs italic">
                  Identify opportunities, assess risks, and optimize business actions
                </p>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-[#928466]/10 rounded-lg p-4 hover:border-[#928466]/30 transition-all duration-300">
              <h4 className="text-lg text-[#928466] mb-3 flex items-center gap-2">
                <span>Adaptive Scalability</span>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                As your business grows, SYNTHOS scales seamlessly to accommodate increased complexity 
                and volume with its modular architecture.
              </p>
              <div className="mt-3 pt-3 border-t border-[#928466]/10">
                <p className="text-white/50 text-xs italic">
                  Your operational infrastructure evolves with your business needs
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>
        
        <CollapsibleSection title="The SYNTHOS Difference">
          <div className="bg-[#928466]/10 backdrop-blur-sm border border-[#928466]/20 rounded-lg p-5">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#928466]/20 flex items-center justify-center flex-shrink-0">
                <Network size={28} className="text-[#928466]" />
              </div>
              <div>
                <h5 className="text-xl text-[#928466] mb-3 text-center md:text-left">Integrated Business Ecosystem</h5>
                <p className="text-white/70 leading-relaxed">
                  Unlike traditional business systems that operate in isolation, SYNTHOS integrates all aspects 
                  of your operations into a cohesive, intelligent ecosystem:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#928466]" />
                    <span className="text-white/70 text-sm">Supply chain management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#928466]" />
                    <span className="text-white/70 text-sm">Financial planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#928466]" />
                    <span className="text-white/70 text-sm">Customer engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-[#928466]" />
                    <span className="text-white/70 text-sm">Human resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}