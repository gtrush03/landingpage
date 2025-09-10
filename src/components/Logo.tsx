const Logo = () => (
  <div className="metallic-logo group flex flex-col items-center">
    <div className="logo-glow"></div>
    <svg viewBox="0 0 750 750" className="w-[200px] md:w-[250px] relative z-10">
      <defs>
        <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="0%">
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
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path className="logo-outline" fill="none" stroke="url(#metallic)" strokeWidth="5" d="M109 263H29v-62h227v62h-80v193H109V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
      <g className="logo-fill" fill="url(#metallic)" filter="url(#glow)">
        <path d="M109 263H29v-62h227v62h-80v193h-67V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
      </g>
    </svg>
    <span className="text-[#928466]/30 text-xs tracking-[2.5em] md:tracking-[3em] -mt-16 md:-mt-20 pl-[2.5em] md:pl-[3em] text-center">SYNTH</span>
  </div>
);

export default Logo;