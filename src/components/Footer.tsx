import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Linkedin, ExternalLink } from 'lucide-react';

// Custom X logo component
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// SVG Logo Component
const SynthLogo = () => (
  <svg viewBox="0 0 750 750" className="w-[150px] md:w-[180px] relative z-10">
    <defs>
      <linearGradient id="footer-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#928466">
          <animate attributeName="stop-color" 
            values="#928466;#ffffff;#928466;#ffffff;#928466" 
            dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stopColor="#ffffff">
          <animate attributeName="stop-color" 
            values="#ffffff;#928466;#ffffff;#928466;#ffffff" 
            dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stopColor="#928466">
          <animate attributeName="stop-color" 
            values="#928466;#ffffff;#928466;#ffffff;#928466" 
            dur="8s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      <filter id="footer-glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path className="logo-outline" fill="none" stroke="url(#footer-metallic)" strokeWidth="5" d="M109 263H29v-62h227v62h-80v193H109V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
    <g className="logo-fill" fill="url(#footer-metallic)" filter="url(#footer-glow)">
      <path d="M109 263H29v-62h227v62h-80v193h-67V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
    </g>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const navLinks = [
    { label: "AGENTS", path: "/agents" },
    { label: "TUNING", path: "/tuning" },
    { label: "SYNTHOS", path: "/synthos" },
    { label: "HORIZON", path: "/horizon" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "#contact" }
  ];
  
  const socialLinks = [
    { icon: <XIcon />, label: "X", url: "https://x.com/trusynth" },
    { icon: <Linkedin size={20} />, label: "LINKEDIN", url: "https://www.linkedin.com/company/tru-synth/?trk" }
  ];

  // Handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    // Check if it's a hash link or a regular route
    if (path.startsWith('#')) {
      if (location.pathname === '/') {
        // If we're already on the home page, just scroll to the section
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with the hash
        navigate('/', { replace: true });
        
        // After navigation, we need to handle the hash
        setTimeout(() => {
          const targetId = path.substring(1);
          if (targetId === 'contact') {
            // Open the overlay
            const menuSelect = (window as any).menuSelectFunction;
            if (typeof menuSelect === 'function') {
              menuSelect(targetId);
            } else {
              // Fallback if the function isn't available
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        }, 100);
      }
    } else {
      // Navigate to the path and scroll to top
      navigate(path);
      // Force scroll to top immediately
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="relative mt-20 z-10">
      {/* Background Effects - Fixed */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>
      
      {/* Card background effect with enhanced styling */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-[#0a0906] rounded-t-[40px] transform transition-all duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.15),transparent_70%)] rounded-t-[40px]"></div>
        {/* Gold outline */}
        <div className="absolute inset-0 rounded-t-[40px] border-t-2 border-l-2 border-r-2 border-[#928466]/30"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="pt-16 pb-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <SynthLogo />
            <span className="text-[#928466]/30 text-xs tracking-[2.5em] md:tracking-[3em] -mt-8 md:-mt-10 pl-[2.5em] md:pl-[3em] text-center">SYNTH</span>
          </div>
          
          {/* Grid Menu Navigation - Matching main page style */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-1 px-2 w-full max-w-[1200px] mx-auto mb-12">
            {navLinks.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className="w-[28vw] h-[28vw] md:w-[16vw] md:h-[16vw] max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] relative group"
                >
                  {/* Dark tinted background with increased blur */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-[8px] border ${isActive ? 'border-[#928466]' : 'border-[#928466]/30'} group-hover:border-[#928466] transition-all duration-300`} />
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-[1px] bg-gradient-to-r from-[#928466]/0 via-[#928466]/10 to-[#928466]/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(146,132,102,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(146,132,102,0.1)] transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] md:text-xs tracking-[0.2em] font-thin text-white/60 group-hover:text-[#928466] transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Social links with enhanced hover effects */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-[8px] border border-[#928466]/30 text-[#928466] hover:text-white transition-all duration-500"
                aria-label={`Follow us on ${link.label}`}
              >
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-[#928466]/0 group-hover:bg-[#928466]/10 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ 
                  boxShadow: '0 0 15px rgba(146,132,102,0.8)',
                  animation: 'pulse 2s infinite'
                }} />
                
                {/* Icon with scale animation */}
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                
                {/* External link indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={10} className="text-[#928466]" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright bar with enhanced styling */}
        <div className="border-t border-[#928466]/20 pt-6 pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/40 text-xs mb-4 md:mb-0 tracking-[0.1em] text-center md:text-left">
            COPYRIGHT © {currentYear} TRU SYNTH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-[#928466] transition-colors duration-300 relative group tracking-[0.1em]">
              PRIVACY POLICY
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#928466] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-[#928466] transition-colors duration-300 relative group tracking-[0.1em]">
              TERMS OF SERVICE
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#928466] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;