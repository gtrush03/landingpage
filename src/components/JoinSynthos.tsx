import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, X, Download, 
  Rocket, Target, Shield, Zap, 
  BarChart3, Users, Brain, Network,
  Check, Coins, Code, Sparkles, Briefcase,
  Workflow, Bot, Share2, GitBranch, Globe
} from 'lucide-react';
import Footer from './Footer';

// Enhanced Terms Modal Component with Success State
const SignTermsModal = ({ isOpen, onClose, onAccept, booklet }) => {
  const [accepted, setAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAccept = () => {
    setShowSuccess(true);
    onAccept();
    // Auto close after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setAccepted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-black/80 border border-[#928466]/30 rounded-lg w-full max-w-md overflow-hidden">
        {/* Success State */}
        {showSuccess ? (
          <div className="p-12 flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <div className="w-16 h-16 rounded-full bg-[#928466] flex items-center justify-center mb-6">
              <Check size={32} className="text-black" />
            </div>
            <h3 className="text-xl tracking-wider text-[#928466] text-center mb-2">
              Thank you for your interest!
            </h3>
            <p className="text-white/60 text-center">
              Redirecting to application form...
            </p>
          </div>
        ) : (
          /* Terms State */
          <div className="p-6">
            <h3 className="text-xl tracking-wider text-[#928466] mb-6">
              Join {booklet.title}
            </h3>
            
            {/* Accept Terms Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div 
                className={`
                  w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300
                  ${accepted 
                    ? 'border-[#928466] bg-[#928466]' 
                    : 'border-[#928466]/30 group-hover:border-[#928466]/60'
                  }
                `}
                onClick={() => setAccepted(!accepted)}
              >
                {accepted && <Check size={16} className="text-black" />}
              </div>
              <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                I accept the terms and conditions
              </span>
            </label>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 text-[#928466] hover:text-white transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                disabled={!accepted}
                className={`
                  px-6 py-2 rounded-lg transition-all duration-300
                  ${accepted
                    ? 'bg-[#928466] text-black hover:bg-[#B7A98B]'
                    : 'bg-[#928466]/20 text-[#928466]/60 cursor-not-allowed'
                  }
                `}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function JoinSynthos() {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  const handleApply = (typeformUrl: string) => {
    window.location.href = typeformUrl;
  };

  const paths = [
    {
      id: "enterprise",
      title: "ENTERPRISE",
      subtitle: "Partner With Us For Full AI Transformation",
      description: "Embark on a transformative journey with SYNTHOS. Our comprehensive AI solutions and autonomous agents will revolutionize your business operations, setting new standards in efficiency and innovation.",
      vision: "Together, we'll architect your business's AI-powered future. Our partnership approach ensures a seamless transformation that aligns with your strategic goals while maximizing operational potential.",
      benefits: [
        {
          icon: Rocket,
          title: "Accelerated Growth",
          description: "10x operational efficiency through AI-driven automation"
        },
        {
          icon: Target,
          title: "Strategic Intelligence",
          description: "Real-time market analysis and predictive insights"
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Proactive risk identification and mitigation"
        },
        {
          icon: Zap,
          title: "Operational Excellence",
          description: "Continuous optimization and performance enhancement"
        }
      ],
      capabilities: [
        {
          icon: BarChart3,
          title: "Performance Analytics",
          points: ["Real-time KPI tracking", "Predictive modeling", "Automated reporting"]
        },
        {
          icon: Brain,
          title: "Autonomous Operations",
          points: ["24/7 process automation", "Intelligent decision-making", "Adaptive learning"]
        },
        {
          icon: Network,
          title: "System Integration",
          points: ["Seamless API connectivity", "Legacy system compatibility", "Secure data exchange"]
        },
        {
          icon: Users,
          title: "Team Empowerment",
          points: ["Reduced manual tasks", "Enhanced productivity", "Strategic focus"]
        }
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      typeformUrl: "/join-form" // Join Form
    },
    {
      id: "investor",
      title: "INVESTOR",
      subtitle: "Shape The Future of Business Intelligence",
      description: "While we're not actively seeking investments at this moment, we're always open to connecting with passionate investors who share our vision for revolutionizing business operations through AI.",
      benefits: [
        {
          icon: Brain,
          title: "Strategic Vision",
          description: "Deep understanding of AI's transformative potential in enterprise"
        },
        {
          icon: Target,
          title: "Long-Term Commitment",
          description: "5+ year investment horizon for sustainable growth"
        },
        {
          icon: Network,
          title: "Industry Network",
          description: "Strong connections in enterprise technology and AI"
        },
        {
          icon: Users,
          title: "Active Partnership",
          description: "Hands-on approach to value creation beyond capital"
        }
      ],
      vision: "We're seeking visionary partners who understand that AI isn't just another technology trend—it's a fundamental shift in how businesses operate. Our ideal investors bring more than capital; they bring expertise, networks, and a shared commitment to transforming enterprise operations.",
      capabilities: [
        {
          icon: Globe,
          title: "What We Need",
          points: ["Strategic guidance", "Industry expertise", "Growth acceleration"]
        },
        {
          icon: Workflow,
          title: "Investment Profile",
          points: ["Series A+", "Strategic focus", "Value-add approach"]
        },
        {
          icon: Bot,
          title: "Partnership Goals",
          points: ["Market expansion", "Product development", "Enterprise scaling"]
        }
      ],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80",
      typeformUrl: "/join-form" // Join Form
    },
    {
      id: "developer",
      title: "DEVELOPER",
      subtitle: "Build The Future of Business",
      description: "Join us in creating the next generation of autonomous business systems. We're looking for passionate developers who want to revolutionize how businesses operate through advanced AI technology.",
      benefits: [
        {
          icon: Brain,
          title: "Cutting-Edge Tech",
          description: "Work with advanced AI and autonomous systems"
        },
        {
          icon: GitBranch,
          title: "Innovation Focus",
          description: "Create new paradigms in business automation"
        },
        {
          icon: Share2,
          title: "Global Impact",
          description: "Transform how businesses operate worldwide"
        },
        {
          icon: Code,
          title: "Career Growth",
          description: "Lead the future of enterprise technology"
        }
      ],
      vision: "As a developer at SYNTHOS, you'll be at the forefront of AI innovation, creating systems that fundamentally change how businesses operate. This isn't just coding – it's architecting the future of work.",
      capabilities: [
        {
          icon: Briefcase,
          title: "Your Role",
          points: ["Design AI systems", "Build autonomous agents", "Create the future"]
        },
        {
          icon: Sparkles,
          title: "Technologies",
          points: ["Advanced AI/ML", "Neural networks", "Autonomous systems"]
        },
        {
          icon: Users,
          title: "Team",
          points: ["Expert mentorship", "Collaborative culture", "Innovation focus"]
        }
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
      typeformUrl: "/join-form" // Join Form
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effect */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => navigate('/synthos')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to SYNTHOS</span>
          </button>
        </div>
      </nav>

      {/* Main content */}
      {!selectedPath ? (
        <div className="relative min-h-screen flex items-center justify-center p-6 pt-24">
          <div className="w-full max-w-xl">
            {/* Title */}
            <h1 className="text-center text-4xl font-thin tracking-[0.3em] text-[#928466] mb-16">
              JOIN SYNTH<span className="font-normal">OS</span>
            </h1>

            {/* Enhanced Buttons */}
            <div className="space-y-6">
              {paths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setSelectedPath(path.id)}
                  className="
                    w-full h-24 relative group overflow-hidden
                    border border-[#928466]/30 bg-black/40 backdrop-blur-xl rounded-lg
                    hover:border-[#928466] transition-all duration-500 hover:scale-105
                  "
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <img 
                      src={path.image} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-between px-6">
                    <span className="text-2xl tracking-[0.2em] text-[#928466] group-hover:text-white transition-colors duration-300">
                      {path.title}
                    </span>
                    <ChevronRight 
                      size={24} 
                      className="text-[#928466] group-hover:translate-x-2 transition-all duration-300"
                    />
                  </div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#928466]/0 via-[#928466]/20 to-[#928466]/0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen">
          {/* Full-screen background */}
          <div className="fixed inset-0 z-0">
            <img 
              src={paths.find(p => p.id === selectedPath)?.image} 
              alt="" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          </div>

          {/* Close button */}
          <button
            onClick={() => setSelectedPath(null)}
            className="fixed top-24 right-6 z-50 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="relative z-10 min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              {paths.map((path) => path.id === selectedPath && (
                <div key={path.id} className="space-y-16">
                  {/* Header Section */}
                  <div className="space-y-6">
                    <h2 className="text-4xl font-thin tracking-[0.3em] text-[#928466]">
                      {path.title}
                    </h2>
                    <p className="text-2xl font-light tracking-wider text-white/80">
                      {path.subtitle}
                    </p>
                    <p className="text-xl text-white/60 leading-relaxed">
                      {path.description}
                    </p>
                    {path.vision && (
                      <p className="text-lg text-[#928466] leading-relaxed border-l-2 border-[#928466] pl-6">
                        {path.vision}
                      </p>
                    )}
                  </div>

                  {/* Benefits Grid */}
                  <div className="space-y-8">
                    <h3 className="text-xl tracking-wider text-[#928466]">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {path.benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                          <div 
                            key={index}
                            className="p-6 border border-[#928466]/30 rounded-lg bg-black/40 backdrop-blur-xl"
                          >
                            <Icon size={24} className="text-[#928466] mb-4" />
                            <h4 className="text-lg text-white mb-2">{benefit.title}</h4>
                            <p className="text-white/60">{benefit.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Capabilities Section */}
                  {path.capabilities && (
                    <div className="space-y-8">
                      <h3 className="text-xl tracking-wider text-[#928466]">Core Capabilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {path.capabilities.map((capability, index) => {
                          const Icon = capability.icon;
                          return (
                            <div 
                              key={index}
                              className="p-6 border border-[#928466]/30 rounded-lg bg-black/40 backdrop-blur-xl"
                            >
                              <Icon size={24} className="text-[#928466] mb-4" />
                              <h4 className="text-lg text-white mb-4">{capability.title}</h4>
                              <ul className="space-y-2">
                                {capability.points.map((point, i) => (
                                  <li key={i} className="flex items-center gap-2 text-white/60">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#928466]" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Updated CTA Button */}
                  <div className="flex justify-center pt-8">
                    <button 
                      onClick={() => handleApply(path.typeformUrl)}
                      className="
                        group relative overflow-hidden inline-flex items-center justify-center 
                        px-8 py-4 rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B]
                        transition-all duration-500 hover:scale-105
                      "
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative flex items-center gap-2">
                        <span className="text-black font-medium tracking-wider">
                          {path.id === 'investor' 
                            ? 'Submit Investment Proposal'
                            : path.id === 'developer'
                            ? 'Apply Now'
                            : 'Start Your Journey'}
                        </span>
                        <ChevronRight size={20} className="text-black transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Modal */}
          <SignTermsModal 
            isOpen={showTerms}
            onClose={() => setShowTerms(false)}
            onAccept={() => handleApply(paths.find(p => p.id === selectedPath)?.typeformUrl)}
            booklet={paths.find(p => p.id === selectedPath)}
          />
        </div>
      )}
    </div>
  );
}