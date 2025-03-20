import React from 'react';
import { Zap, Brain, Users, Target, MessageSquare, Globe } from 'lucide-react';
import { Frame } from './common';

const advantages = [
  {
    icon: Brain,
    title: "Digital Employees Master Computers",
    description: "Digital employees learn and adapt to complex systems 100x faster than humans, mastering databases, APIs, and enterprise software in minutes instead of months.",
    metric: "100x Faster"
  },
  {
    icon: Zap,
    title: "Unified Workflow Automation",
    description: "Stop juggling dozens of SaaS tools. Digital employees coordinate and manage all your business processes through one intelligent system.",
    metric: "90% Less Tools"
  },
  {
    icon: Users,
    title: "Infinite Team Scaling",
    description: "Scale your digital workforce instantly. Add or reduce digital employees on-demand, perfectly matching your business needs without overhead.",
    metric: "Unlimited Growth"
  },
  {
    icon: Target,
    title: "Revenue Recovery",
    description: "Transform inactive leads into revenue. Digital employees intelligently re-engage dormant opportunities, creating new business from your existing database.",
    metric: "+40% Recovery"
  },
  {
    icon: MessageSquare,
    title: "Smart Engagement",
    description: "Digital employees remember every interaction, adapt to preferences, and maintain engaging conversations that nurture relationships 24/7.",
    metric: "85% Engagement"
  },
  {
    icon: Globe,
    title: "Omnichannel Presence",
    description: "Digital employees maintain your presence everywhere. Deliver consistent, personalized experiences across email, SMS, chat, and social platforms.",
    metric: "12+ Channels"
  }
];

export default function WhyUs() {
  return (
    <div className="px-6" id="why-us">
      <div className="max-w-6xl mx-auto">
        <Frame title="THE FUTURE OF WORK">
          {/* Enhanced intro section with value widget style */}
          <div className="text-center mb-12">
            <div className="inline-flex flex-col md:flex-row items-center gap-2 px-3 md:px-6 py-2 bg-[#928466]/10 border border-[#928466]/30 rounded-lg backdrop-blur-sm mb-6">
              <span className="text-sm md:text-base text-white/60 font-light tracking-wider">
                Automate the Boring
              </span>
              <div className="hidden md:block w-px h-6 bg-[#928466]/30" />
              <div className="md:hidden w-12 h-px bg-[#928466]/30" />
              <span className="text-lg md:text-base text-[#928466] tracking-wider font-light">
                Focus on What Matters
              </span>
            </div>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
              Stop wasting human potential on repetitive tasks. Digital employees handle the 
              tedious work, letting your team focus on innovation, strategy, and meaningful 
              customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div 
                  key={index}
                  className="group p-4 md:p-6 bg-[#928466]/5 rounded-lg border border-[#928466]/20 hover:border-[#928466]/40 hover:bg-[#928466]/10 transition-all duration-300"
                >
                  {/* Enhanced header with optimized sizing */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-none">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center group-hover:border-[#928466] transition-colors duration-300">
                        <Icon size={20} className="text-[#928466]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg text-[#928466] tracking-wider mb-0.5">{advantage.title}</h3>
                      <div className="text-xs md:text-sm text-[#928466]/80 font-light tracking-wider">{advantage.metric}</div>
                    </div>
                  </div>
                  
                  {/* Description with optimized text size */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>

          {/* Optimized call-to-action */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center">
              <p className="text-base md:text-lg text-[#928466] tracking-wider mb-1">
                The Digital Employee Revolution is Here
              </p>
              <p className="text-xs md:text-sm text-white/40 tracking-wider">
                Will you lead or follow?
              </p>
            </div>
          </div>
        </Frame>
      </div>
    </div>
  );
}