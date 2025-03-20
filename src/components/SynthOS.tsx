import React, { Suspense, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Home, Brain, GitBranch, MessageSquare, AlertCircle, CheckCircle2, 
  Clock, Users, Bot, Activity, LineChart, BarChart3, TrendingUp, ChevronRight,
  Shield, Zap, Network, Database, Cpu, Cloud, Settings, Lock, Coins, 
  CircuitBoard, Workflow, Boxes, Share2, Target, Sparkles, Layers, Code,
  ChevronDown, Plus, Minus
} from 'lucide-react';
import Footer from './Footer';

// Enhanced HUD Frame Component
const HUDFrame = ({ children, title, alert = false, className = "" }) => (
  <div className={`
    relative border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg p-4
    opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] hover:border-[#928466]/50 transition-all duration-300
    ${alert ? 'border-red-500/50' : ''}
    ${className}
  `}>
    <div className="absolute -top-3 left-4 bg-black px-2 text-[#928466] text-xs md:text-sm tracking-wider flex items-center gap-2">
      {alert && <AlertCircle size={14} className="text-red-500" />}
      {title}
    </div>
    {children}
  </div>
);

// Enhanced Title Section with Mission Statement
const TitleSection = () => (
  <div className="text-center mb-16 md:mb-20">
    <h1 className="text-4xl md:text-6xl font-thin tracking-[0.3em] text-[#928466] mb-6">
      SYNTH<span className="font-normal">OS</span>
    </h1>
    <p className="text-lg md:text-xl text-white/60 tracking-wider max-w-3xl mx-auto mb-8">
      The Future of Autonomous Business Operations
    </p>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-white/40">
      <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Neural Networks</span>
      <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Autonomous Agents</span>
      <span className="px-4 py-2 bg-[#928466]/10 rounded-full">Business Intelligence</span>
    </div>
  </div>
);

// Collapsible Text Section Component
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

// New Component: SynthOS Overview
const SynthOSOverview = () => (
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
              <Zap size={18} className="text-[#928466]" />
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
              <Target size={18} className="text-[#928466]" />
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
              <Layers size={18} className="text-[#928466]" />
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
                  <ChevronRight size={16} className="text-[#928466]" />
                  <span className="text-white/70 text-sm">Supply chain management</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#928466]" />
                  <span className="text-white/70 text-sm">Financial planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#928466]" />
                  <span className="text-white/70 text-sm">Customer engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#928466]" />
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

// Enhanced System Architecture Component
const SystemArchitecture = () => {
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
};

// Enhanced AutomationFlow with more detailed steps
const AutomationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { icon: Brain, label: "Analysis", desc: "Process business data and market trends" },
    { icon: Users, label: "Review", desc: "Human strategic oversight and validation" },
    { icon: GitBranch, label: "Decision", desc: "AI-assisted strategic planning" },
    { icon: Bot, label: "Action", desc: "Automated execution with monitoring" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-white/70 text-sm leading-relaxed bg-[#928466]/5 p-3 rounded-lg border-l-2 border-[#928466]/30">
        Our autonomous process combines AI-driven analysis with human oversight, ensuring optimal 
        decision-making while maintaining strategic control.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        {steps.map((Step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-500 p-4 rounded-lg ${
              index === currentStep 
                ? 'bg-[#928466]/20 scale-105' 
                : 'bg-black/20 opacity-50'
            }`}
          >
            <Step.icon size={24} className={index === currentStep ? 'text-[#928466]' : 'text-white/30'} />
            <span className={`
              text-xs mt-2 tracking-wider text-center
              ${index === currentStep ? 'text-[#928466]' : 'text-[#928466]/20'}
            `}>
              {Step.label}
            </span>
            <span className="text-[10px] text-white/40 mt-1 text-center">{Step.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Voice Interface
const VoiceInterface = () => {
  const [amplitude, setAmplitude] = useState(Array(20).fill(20));

  useEffect(() => {
    const interval = setInterval(() => {
      setAmplitude(prev => prev.map(() => Math.random() * 50 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-20 gap-2">
      <p className="text-[#928466] text-sm tracking-wider">Voice Command Interface Active</p>
      <div className="flex items-center justify-center h-10">
        {amplitude.map((height, i) => (
          <div
            key={i}
            className="w-1 bg-[#928466] rounded-full mx-0.5 transition-all duration-100"
            style={{ 
              height: `${height}%`,
              opacity: 0.3 + (height / 100)
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Business Metrics with Real-time Updates
const BusinessMetrics = () => {
  const [metrics, setMetrics] = useState([
    { 
      label: "Revenue", 
      value: "$1.2M", 
      change: "+15%", 
      trend: [45, 52, 49, 55, 58, 53, 57],
      icon: LineChart,
      color: "#10B981" // green
    },
    { 
      label: "Users", 
      value: "45.8K", 
      change: "+8%", 
      trend: [32, 35, 34, 38, 37, 40, 41],
      icon: Activity,
      color: "#3B82F6" // blue
    },
    { 
      label: "Efficiency", 
      value: "92%", 
      change: "+5%", 
      trend: [88, 89, 90, 89, 91, 92, 92],
      icon: TrendingUp,
      color: "#928466" // gold
    },
    { 
      label: "Operations", 
      value: "2.4K", 
      change: "+12%", 
      trend: [28, 32, 30, 35, 34, 38, 40],
      icon: BarChart3,
      color: "#8B5CF6" // purple
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const newValue = parseFloat(metric.change) + (Math.random() * 2 - 1);
        const newTrend = [...metric.trend.slice(1), metric.trend[6] + (Math.random() * 4 - 2)];
        return {
          ...metric,
          change: `${newValue > 0 ? '+' : ''}${newValue.toFixed(1)}%`,
          trend: newTrend
        };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Sparkline = ({ data, color }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const points = data
      .map((value, i) => `${(i * 100) / (data.length - 1)},${100 - ((value - min) * 100) / range}`)
      .join(' ');

    return (
      <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#928466]/5 p-4 rounded-lg border-l-2 border-[#928466]/30">
        <p className="text-white/70 text-sm leading-relaxed">
          <span className="text-[#928466] font-medium">Advanced AI-powered analytics</span> provide real-time insights 
          into your business performance. Our autonomous agents continuously monitor and optimize key 
          performance indicators across all operational domains.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="p-4 border border-[#928466]/20 rounded-lg bg-black/20 backdrop-blur-sm hover:border-[#928466]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <Icon size={16} style={{ color: metric.color }} />
                <span className="text-[#928466]/60 text-xs">{metric.label}</span>
              </div>
              <div className="text-lg font-light tracking-wider mb-2">{metric.value}</div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${parseFloat(metric.change) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
                <Sparkline data={metric.trend} color={metric.color} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Decision Log
const DecisionLog = () => {
  const [logs] = useState([
    { type: 'success', message: 'Supply chain optimization complete', time: 'Now' },
    { type: 'info', message: 'Market analysis report generated', time: '2m ago' },
    { type: 'alert', message: 'Review needed: New market opportunity', time: '5m ago' }
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle2 size={16} className="text-green-500" />;
      case 'alert': return <AlertCircle size={16} className="text-[#928466]" />;
      case 'info': return <MessageSquare size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-3">
      {logs.map((log, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors duration-300">
          {getIcon(log.type)}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/80 truncate">{log.message}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={12} className="text-[#928466]/50" />
              <span className="text-xs text-[#928466]/50">{log.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Enhanced Compute Investment Component
const ComputeInvestment = () => {
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
};

// Enhanced Autonomous Operations HUD
const AutonomousHUD = () => {
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
};

export default function SynthOS() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced background with multiple gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(146,132,102,0.05),transparent_50%)]" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="text-sm tracking-wider">Return to Dashboard</span>
            </button>
          </div>
          
          {/* System Status */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-[#928466]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Online
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Neural Core Active</span>
          </div>
        </div>
        {/* Enhanced progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main content with enhanced structure */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-[1920px] mx-auto px-6">
          <TitleSection />
          
          {/* New SynthOS Overview Section */}
          <div className="mb-16">
            <HUDFrame title="WHAT IS SYNTHOS">
              <SynthOSOverview />
            </HUDFrame>
          </div>
          
          {/* Primary Systems Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <HUDFrame title="NEURAL PROCESSING">
              <AutomationFlow />
            </HUDFrame>
            
            <HUDFrame title="PERFORMANCE ANALYTICS">
              <BusinessMetrics />
            </HUDFrame>
          </div>

          {/* Interface & Communication Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <HUDFrame title="AUTONOMOUS INTERFACE">
              <VoiceInterface />
            </HUDFrame>
            
            <HUDFrame title="EXECUTIVE DECISIONS" className="lg:col-span-2">
              <DecisionLog />
            </HUDFrame>
          </div>

          {/* Infrastructure Section */}
          <div className="mb-8">
            <HUDFrame title="SYSTEM ARCHITECTURE">
              <SystemArchitecture />
            </HUDFrame>
          </div>

          {/* Investment & Operations Section */}
          <div className="grid grid-cols-1 gap-8 mb-8">
            <HUDFrame title="NEURAL INVESTMENT MATRIX">
              <ComputeInvestment />
            </HUDFrame>
          </div>

          {/* Monitoring & Alerts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <HUDFrame title="AUTONOMOUS OPERATIONS" className="lg:col-span-2">
              <AutonomousHUD />
            </HUDFrame>
          </div>

          {/* Enhanced Join SYNTHOS Button */}
          <div className="text-center mb-16">
            <button 
              onClick={() => navigate('/join')}
              className="
                group relative inline-flex items-center justify-center px-8 py-4
                overflow-hidden rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B]
                transition-all duration-500 hover:scale-105
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">
                <span className="text-lg font-light tracking-[0.2em] text-white">
                  JOIN SYNTH<span className="font-normal">OS</span>
                </span>
                <ChevronRight size={20} className="text-white transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}