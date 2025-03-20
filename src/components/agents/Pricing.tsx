import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Check, ChevronRight, Sparkles, Users, Bot, Zap, Clock, MessageSquare, Database, Shield } from 'lucide-react';
import { Frame } from './common';

const plans = [
  {
    title: "Digital Employees",
    basePrice: 1997,
    features: [
      "2 AI Employees (Built & Trained)",
      "1,000 AI Voice Minutes",
      "Weekly Group Zoom Sessions",
      "Monthly 1:1 Support Call",
      "M-F Chat Support",
      "All-in-One CRM Access",
      "24/7 Live Zoom CRM Support"
    ],
    addons: [
      "KPI-based performance terms",
      "Custom success metrics",
      "Agreed upon contract terms"
    ],
    setupFee: 5500,
    commitment: "3 months min.",
    buttonText: "Sign Up Now",
    crossedOutFeature: "Multiple AI agent projects simultaneously",
    successPath: "/payment-success/digital-employees"
  },
  {
    title: "AI Digital Team",
    basePrice: 2997,
    features: [
      "4 AI Employees (Built, Trained & Optimized)",
      "3,000 AI Voice Minutes",
      "Weekly Group Zoom Sessions",
      "Bi-Weekly 1:1 Support Call",
      "M-F Chat Support",
      "All-in-One CRM Access",
      "24/7 Live Zoom CRM Support"
    ],
    addons: [
      "KPI-based performance terms",
      "Custom success metrics",
      "Agreed upon contract terms"
    ],
    setupFee: 10000,
    commitment: "3 months min.",
    buttonText: "Sign Up Now",
    crossedOutFeature: "Multiple AI agent projects simultaneously",
    successPath: "/payment-success/digital-team"
  },
  {
    title: "SYNTH<strong>OS</strong>",
    basePrice: null,
    priceLabel: "CUSTOM",
    features: [
      "Unlimited AI Employees",
      "Full Sales Team Integration",
      "Managed AI Campaigns",
      "Daily AI Optimization",
      "Bi-Weekly Growth Sessions",
      "Custom CRM Access",
      "Dedicated M-F Chat Support",
      "Customizable Usage Limits"
    ],
    addons: [
      "Custom performance terms",
      "Strategic partnership metrics",
      "Revenue share agreement"
    ],
    requirements: [
      "Must have 10+ sales reps or high daily call volume",
      "12 month minimum commitment",
      "Monthly retainer + revenue share",
      "We become your AI partner"
    ],
    setupFee: null,
    setupLabel: "To Be Determined",
    commitment: "12 months min.",
    buttonText: "Learn More",
    route: "/synthos"
  }
];

const PricingCard = ({ plan, navigate }) => {
  return (
    <div className="relative group">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#928466]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg" />
      
      {/* Content */}
      <div className="relative p-8 border border-[#928466]/30 rounded-lg backdrop-blur-xl group-hover:border-[#928466] transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 
            className="text-2xl text-[#928466] tracking-wider mb-2"
            dangerouslySetInnerHTML={{ __html: plan.title }}
          />
          <div className="text-white/40 text-sm tracking-wider mb-6">Hybrid Pricing</div>
          
          {/* Price */}
          <div className="mb-4">
            {plan.basePrice ? (
              <>
                <div className="text-3xl text-white mb-1">
                  <span className="text-lg">$</span>
                  {plan.basePrice.toLocaleString()}
                  <span className="text-lg">/mo</span>
                </div>
                <div className="text-white/40 text-sm">Base Price</div>
              </>
            ) : (
              <>
                <div className="text-xl text-[#928466] mb-1">{plan.priceLabel}</div>
                <div className="text-white/40 text-sm">Enterprise Solution</div>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check size={16} className="text-[#928466] flex-shrink-0 mt-1" />
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          ))}
          {plan.crossedOutFeature && (
            <div className="flex items-start gap-3 opacity-50">
              <Check size={16} className="text-[#928466] flex-shrink-0 mt-1" />
              <span className="text-white/80 text-sm line-through">{plan.crossedOutFeature}</span>
            </div>
          )}
        </div>

        {/* Add-ons */}
        {plan.addons && (
          <div className="border-t border-[#928466]/20 pt-6 mb-8">
            <div className="text-sm text-white/40 uppercase tracking-wider mb-4">
              Outcome-Based Add-ons
            </div>
            <div className="space-y-3">
              {plan.addons.map((addon, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#928466] text-lg leading-none">➕</span>
                  <span className="text-white/80 text-sm">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Requirements or Setup Fee */}
        <div className="border-t border-[#928466]/20 pt-6 mb-8">
          {plan.requirements ? (
            <div className="space-y-4">
              <div className="text-sm text-white/40 uppercase tracking-wider">
                Requirements
              </div>
              {plan.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466] mt-2" />
                  <span className="text-white/80 text-sm">{req}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/40">Setup Fee</span>
                <span className="text-white/80">${plan.setupFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-white/40">Commitment</span>
                <span className="text-white/80">{plan.commitment}</span>
              </div>
            </>
          )}
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => {
            if (plan.route) {
              window.scrollTo(0, 0);
              navigate(plan.route);
            } else if (plan.successPath) {
              navigate(plan.successPath);
            } else {
              window.location.href = 'https://nd2nkx5y1hc.typeform.com/to/EhZyapjJ';
            }
          }}
          className="w-full group relative overflow-hidden px-6 py-3 rounded-lg bg-[#928466]/20 hover:bg-[#928466]/30 border border-[#928466]/30 hover:border-[#928466] transition-all duration-500"
        >
          <span className="relative flex items-center justify-center gap-2 text-[#928466] group-hover:text-white transition-colors duration-300">
            {plan.buttonText}
            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <Frame title="HYBRID PRICING">
          {/* Intro */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl text-[#928466] tracking-wider mb-6">
              Flexible Pricing for Maximum ROI
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Our hybrid pricing model combines predictable base costs with 
              performance-based pricing, ensuring our success is tied to yours.
            </p>
            <p className="text-sm text-white/40">
              Schedule a consultation and we'll help you choose the perfect plan
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} navigate={navigate} />
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="text-center">
            <button 
              onClick={() => {
                window.location.href = 'https://nd2nkx5y1hc.typeform.com/to/EhZyapjJ';
              }}
              className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B] transition-all duration-500 hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <Calendar size={20} className="text-black" />
                <span className="text-black font-medium tracking-wider">Schedule Your Consultation</span>
              </div>
            </button>
          </div>
        </Frame>
      </div>
    </div>
  );
}