import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Mail, Phone, MapPin, Linkedin, ChevronDown, ChevronUp, Plus, Minus, Download, ExternalLink, BookOpen, Terminal, ArrowLeft, MessageSquare } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  menuType: string | null;
  onClose: () => void;
}

export const menuContent = {
  contact: {
    title: "CONTACT",
    description: "Get in touch with our team",
    layout: "contact",
    contactInfo: [
      {
        icon: <Mail size={20} />,
        label: "Email",
        value: "hello@trusynth.com",
        link: "mailto:hello@trusynth.com"
      },
      {
        icon: <Linkedin size={20} />,
        label: "LinkedIn",
        value: "TRU SYNTH",
        link: "https://www.linkedin.com/company/tru-synth?trk"
      }
    ]
  }
};

export default function MenuOverlay({ isOpen, menuType, onClose }: MenuOverlayProps) {
  const navigate = useNavigate();

  if (!isOpen || !menuType) return null;

  const content = menuContent[menuType];
  if (!content) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transition-all duration-700 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to Dashboard</span>
          </button>
        </div>
      </nav>

      <div className="h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
            <h2 className="text-3xl font-thin tracking-[0.2em] text-[#928466] mb-4">
              {content.title}
            </h2>
            <p className="text-white/60 tracking-wider">
              {content.description}
            </p>
          </div>

          {/* Contact Layout */}
          <div className="max-w-5xl mx-auto px-4">
            {/* Mobile-optimized layout with stacked sections */}
            <div className="flex flex-col gap-8">
              {/* Contact Info Section */}
              <div className="w-full mx-auto max-w-md opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                <h3 className="text-2xl text-[#928466] tracking-wider mb-6 text-center">
                  Connect With Us
                </h3>
                
                <div className="space-y-4">
                  {content.contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm border border-[#928466]/20 rounded-lg hover:border-[#928466]/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#928466]/10 flex items-center justify-center group-hover:bg-[#928466]/20 transition-colors duration-300">
                        <span className="text-[#928466]">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/40 text-sm tracking-wider mb-1">{item.label}</p>
                        <p className="text-white group-hover:text-[#928466] transition-colors duration-300">{item.value}</p>
                      </div>
                      <ArrowRight 
                        size={16} 
                        className="text-[#928466]/0 group-hover:text-[#928466] transition-all duration-300"
                      />
                    </a>
                  ))}
                </div>
                
                <div className="pt-6 mt-6 border-t border-[#928466]/20 text-center">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Our team is ready to assist you with any questions about our AI solutions. 
                    We're committed to helping businesses transform through intelligent automation.
                  </p>
                </div>
              </div>
              
              {/* Request Button Section */}
              <div className="w-full mx-auto max-w-md opacity-0 animate-[fadeIn_0.5s_ease-out_0.6s_forwards]">
                <div className="bg-black/40 backdrop-blur-xl border border-[#928466]/30 rounded-lg p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#928466]/10 flex items-center justify-center">
                        <MessageSquare size={24} className="text-[#928466]" />
                      </div>
                      <div>
                        <h3 className="text-xl text-[#928466] mb-1">Request a Consultation</h3>
                        <p className="text-white/40 text-sm">Free strategy session</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-white/60 text-sm leading-relaxed text-center">
                        Schedule a personalized consultation with our AI experts to discuss how our solutions can address your specific business challenges.
                      </p>
                      
                      <ul className="space-y-2 max-w-xs mx-auto">
                        <li className="flex items-center gap-2 text-white/60 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#928466] flex-shrink-0"></div>
                          <span>Custom AI strategy development</span>
                        </li>
                        <li className="flex items-center gap-2 text-white/60 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#928466] flex-shrink-0"></div>
                          <span>Technical implementation planning</span>
                        </li>
                        <li className="flex items-center gap-2 text-white/60 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#928466] flex-shrink-0"></div>
                          <span>ROI and performance projections</span>
                        </li>
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => {
                        window.location.href = 'https://nd2nkx5y1hc.typeform.com/to/EhZyapjJ';
                      }}
                      className="
                        w-full group relative overflow-hidden
                        flex items-center justify-center gap-2 px-6 py-4 rounded-lg
                        bg-gradient-to-r from-[#928466] to-[#B7A98B]
                        hover:scale-105 transition-all duration-500
                      "
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative flex items-center gap-2">
                        <span className="text-black font-medium tracking-wider">
                          Request Now
                        </span>
                        <ArrowRight size={18} className="text-black transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}