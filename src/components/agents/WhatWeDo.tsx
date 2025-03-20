import React from 'react';
import { Bot, Brain, Network, Shield, FileText, Download, ChevronDown, Zap, GraduationCap } from 'lucide-react';
import { Frame } from './common';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Self-managing digital employees that operate independently 24/7, handling complex tasks with precision and adaptability.",
    details: [
      "Natural language processing",
      "Contextual decision making",
      "Adaptive learning",
      "Multi-task coordination"
    ]
  },
  {
    icon: Brain,
    title: "Cognitive Systems",
    description: "Advanced neural networks enabling human-like understanding and complex problem-solving capabilities across various domains.",
    details: [
      "Pattern recognition",
      "Predictive analytics",
      "Semantic understanding",
      "Knowledge synthesis"
    ]
  },
  {
    icon: Network,
    title: "Process Automation",
    description: "End-to-end workflow automation that streamlines operations and eliminates repetitive tasks while ensuring accuracy.",
    details: [
      "Workflow optimization",
      "System integration",
      "Error handling",
      "Performance monitoring"
    ]
  },
  {
    icon: GraduationCap,
    title: "Staff Training",
    description: "Comprehensive AI-powered training programs that empower your team to excel in the digital age while ensuring continuous growth.",
    details: [
      "Personalized learning paths",
      "Real-time skill assessment",
      "Interactive workshops",
      "Progress tracking"
    ]
  }
];

// Simplified PDF Report Button Component without Animation
const PdfReportButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full mb-16">
      {/* Documentation Divider */}
      <div className="w-full flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#928466]/30 to-transparent" />
        <div className="text-[#928466] text-xs tracking-[0.3em] font-light">DOCUMENTATION</div>
        <div className="flex-1 h-px bg-gradient-to-r from-[#928466]/30 via-[#928466]/30 to-transparent" />
      </div>

      {/* Chrome Title */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-8 chrome-text">
        THE WHOLE PICTURE
      </h2>

      {/* Mobile CTA Animation */}
      <div className="flex flex-col items-center gap-2 mb-6 md:mb-8 animate-[fadeIn_0.5s_ease-out]">
        <ChevronDown size={24} className="text-[#928466] animate-bounce" />
        <p className="text-[#928466] text-xs md:text-sm tracking-wider text-center px-4">
          Download Your Complete AI Agents Guide
        </p>
      </div>

      {/* Button Container */}
      <div className="w-full max-w-[90vw] md:max-w-[600px] px-4">
        <div 
          onClick={() => navigate('/agents/pdf')}
          className="group relative overflow-hidden cursor-pointer"
        >
          {/* Main button */}
          <div className="
            relative flex items-center justify-center gap-3 px-4 md:px-8 py-4
            bg-[#928466]/10 border border-[#928466]/30 rounded-full backdrop-blur-sm
            transition-all duration-300
            md:hover:border-[#928466] md:hover:bg-[#928466]/20
          ">
            {/* Icon container with animation */}
            <div className="relative flex-shrink-0">
              <FileText 
                size={20} 
                className="text-white transform md:group-hover:scale-0 transition-transform duration-300" 
              />
              <Download 
                size={20} 
                className="text-white absolute inset-0 transform scale-0 md:group-hover:scale-100 transition-transform duration-300"
              />
            </div>
            
            {/* Text container */}
            <span className="text-[9px] md:text-sm tracking-wider whitespace-nowrap">
              <span className="text-white">PDF</span>
              <span className="text-[#928466]"> - DESIGNING SYSTEMS THAT THINK & ACT</span>
            </span>
          </div>

          {/* Simple hover border */}
          <div className="absolute -inset-[1px] rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-full border border-[#928466]" />
          </div>
        </div>

        {/* No signup text */}
        <div className="text-center mt-2">
          <span className="text-[10px] text-white/30 tracking-wider">No sign up required</span>
        </div>
      </div>
    </div>
  );
};

export default function WhatWeDo() {
  return (
    <div className="px-6" id="what-we-do">
      <div className="max-w-6xl mx-auto">
        {/* PDF Report Button positioned before the Frame component */}
        <PdfReportButton />
        
        {/* Section Divider */}
        <div className="w-full flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#928466]/30 to-transparent" />
          <div className="text-[#928466] text-xs tracking-[0.3em] font-light">OUR SOLUTIONS</div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#928466]/30 via-[#928466]/30 to-transparent" />
        </div>

        {/* Business Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Statement Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { text: "We cut inefficiencies", icon: <Zap size={24} /> },
              { text: "We upgrade your tech stack", icon: <Network size={24} /> },
              { text: "We automate what slows you down", icon: <Bot size={24} /> },
              { text: "We integrate AI-driven workflows", icon: <Brain size={24} /> }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden p-8 rounded-lg border border-[#928466]/20 bg-black/20 backdrop-blur-sm hover:border-[#928466]/40 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#928466]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#928466]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#928466]">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-xl text-white/80 font-light tracking-wide text-center">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Final Statement */}
          <div className="relative px-12 py-8 rounded-lg border border-[#928466]/30 bg-[#928466]/5 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-[#928466]/10 to-transparent opacity-50" />
            <p className="relative text-2xl md:text-3xl text-white font-light tracking-wide leading-relaxed">
              We make your business operate like it's supposed to—
              <br />
              <span className="text-[#928466] font-normal">fast, smart, and scalable.</span>
            </p>
          </div>
        </div>
        
        <Frame title="CAPABILITIES">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-14 h-14 rounded-lg bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center group-hover:border-[#928466] transition-colors duration-300">
                        <Icon size={28} className="text-[#928466]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-[#928466] tracking-wider mb-4">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/40">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
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