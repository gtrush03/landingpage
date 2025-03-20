import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Mail, Phone, Bot, Users } from 'lucide-react';

export default function PaymentSuccessDigitalEmployees() {
  const navigate = useNavigate();

  useEffect(() => {
    // Create confetti effect
    const confetti = Array.from({ length: 50 }).map((_, i) => {
      const div = document.createElement('div');
      div.className = `absolute w-2 h-2 bg-[#928466] rounded-full animate-confetti`;
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${Math.random() * 2}s`;
      div.style.opacity = `${Math.random()}`;
      return div;
    });

    const container = document.getElementById('confetti-container');
    confetti.forEach(div => container?.appendChild(div));

    return () => {
      confetti.forEach(div => div.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
        <div id="confetti-container" className="absolute inset-0 overflow-hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full space-y-8">
          {/* Success Card */}
          <div className="bg-black/40 backdrop-blur-xl border border-[#928466]/30 rounded-2xl p-8 md:p-12">
            {/* Success Icon with Animation */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-[#928466]/20 rounded-full blur-2xl animate-pulse" />
              <div className="w-24 h-24 mx-auto rounded-full bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center">
                <CheckCircle2 size={48} className="text-[#928466] animate-success" />
              </div>
            </div>

            {/* Plan Details */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#928466]/10 border border-[#928466]/30">
                <Bot size={20} className="text-[#928466]" />
                <span className="text-[#928466] font-light">Digital Employees Plan</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-thin tracking-wider text-white">
                Welcome to the Future of Work!
              </h1>
              
              <p className="text-2xl text-[#928466]">Purchase Successful</p>
            </div>

            {/* Response Time Highlight */}
            <div className="bg-[#928466]/10 border border-[#928466]/30 rounded-xl p-6 mb-12">
              <p className="text-center text-white/80">
                A member of our team will contact you within the next
                <span className="text-[#928466] font-medium mx-2">24 hours</span>
                to begin your onboarding process and set up your digital employees.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="bg-black/40 rounded-xl p-6 border border-[#928466]/20 hover:border-[#928466]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={20} className="text-[#928466]" />
                  <span className="text-white/60">Immediate Support</span>
                </div>
                <a href="tel:+420777009354" className="text-xl text-white hover:text-[#928466] transition-colors duration-300">
                  +420 777 009 354
                </a>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 border border-[#928466]/20 hover:border-[#928466]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={20} className="text-[#928466]" />
                  <span className="text-white/60">Email Us</span>
                </div>
                <a href="mailto:george@trusynth.com" className="text-xl text-white hover:text-[#928466] transition-colors duration-300">
                  george@trusynth.com
                </a>
              </div>
            </div>

            {/* Return Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/')}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#928466] to-[#B7A98B] rounded-lg hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                <ArrowLeft size={20} className="text-black relative" />
                <span className="text-black font-medium relative">Return to Dashboard</span>
              </button>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-[#928466]/20">
              <Bot size={24} className="text-[#928466] mx-auto mb-3" />
              <p className="text-white/60">2 AI Employees</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-[#928466]/20">
              <Users size={24} className="text-[#928466] mx-auto mb-3" />
              <p className="text-white/60">24/7 Support</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-[#928466]/20">
              <Bot size={24} className="text-[#928466] mx-auto mb-3" />
              <p className="text-white/60">Full Training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}