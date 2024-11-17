import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Send, Linkedin, FileText, Mail } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import Earth from './components/Earth';
import ShootingStars from './components/ShootingStars';
import CircularTimer from './components/CircularTimer';
import CountdownTimer from './components/CountdownTimer';
import Grain from './components/Grain';
import SuccessAnimation from './components/SuccessAnimation';
import { subscribeToNewsletter } from './lib/api';

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Logo = () => (
  <div className="metallic-logo group">
    <div className="logo-glow"></div>
    <svg viewBox="0 0 750 750" className="w-[300px] h-auto relative z-10">
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
      <g className="logo-fill" fill="url(#metallic)" filter="url(#glow)">
        <path d="M109 263H29v-62h227v62h-80v193H109V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
      </g>
      <path className="logo-outline" fill="none" stroke="url(#metallic)" strokeWidth="5" d="M109 263H29v-62h227v62h-80v193H109V263zm137-62h127c16 0 30 2 42 7s23 11 32 19 16 18 21 28 7 23 7 35c0 10-1 18-4 26s-6 15-11 21-10 12-16 17l-20 13 53 89h-73l-45-76h-46v76h-67V201zm125 116c11 0 20-2 26-8s9-12 9-19-3-14-9-19-15-8-26-8h-58v54h58zm217 146c-18 0-34-3-48-8s-26-13-36-22-17-21-23-35-8-28-8-45V201h67v151c0 16 4 28 13 36s20 13 35 13 26-4 34-13 13-21 13-36V201h67v153c0 16-3 31-8 45s-13 24-23 34-22 17-36 22-30 8-48 8z"/>
      <g className="logo-fill" fill="url(#metallic)" filter="url(#glow)">
        <path d="M84 574c0 3 1 6 4 8s6 3 11 3 8-1 11-2 4-4 4-7c0-2-1-3-2-5s-4-2-9-4l-12-2c-7-2-12-4-15-7s-4-7-4-13c0-6 2-11 7-15s11-6 20-6 15 2 20 7 7 10 7 16h-14c0-4-2-6-4-8s-6-3-10-3c-4 0-7 1-9 2s-3 4-3 6c0 2 0 3 1 4s3 2 5 3l18 4c7 2 11 4 14 7s4 7 4 11c0 8-3 13-8 17s-12 6-19 6-17-2-22-6-7-10-7-17zm152 21h-15v-26l-24-43h17l14 30 14-31h16l-23 43zm140-69h14v69h-15l-28-49h-0v49h-14v-69h15l27 48h0zm124 69h-14v-57h-21v-12h56v12h-21zm152-69v69h-14v-31h-27v31h-14v-69h14v26h27v-26z"/>
      </g>
      <path className="logo-outline" fill="none" stroke="url(#metallic)" strokeWidth="2" d="M84 574c0 3 1 6 4 8s6 3 11 3 8-1 11-2 4-4 4-7c0-2-1-3-2-5s-4-2-9-4l-12-2c-7-2-12-4-15-7s-4-7-4-13c0-6 2-11 7-15s11-6 20-6 15 2 20 7 7 10 7 16h-14c0-4-2-6-4-8s-6-3-10-3c-4 0-7 1-9 2s-3 4-3 6c0 2 0 3 1 4s3 2 5 3l18 4c7 2 11 4 14 7s4 7 4 11c0 8-3 13-8 17s-12 6-19 6-17-2-22-6-7-10-7-17zm152 21h-15v-26l-24-43h17l14 30 14-31h16l-23 43zm140-69h14v69h-15l-28-49h-0v49h-14v-69h15l27 48h0zm124 69h-14v-57h-21v-12h56v12h-21zm152-69v69h-14v-31h-27v31h-14v-69h14v26h27v-26z"/>
    </svg>
  </div>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !consent || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await subscribeToNewsletter({ email });
      setShowSuccess(true);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white">
      <Toaster position="top-center" />
      
      <Grain />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
            <Suspense fallback={null}>
              <ShootingStars />
              <Earth />
              <CircularTimer />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="relative z-10">
        <section className="h-[100dvh] relative flex flex-col items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1)_0%,rgba(0,0,0,0.5)_100%)]" />
          
          <h1 className="flex flex-col items-center transform hover:scale-105 transition-transform duration-700">
            <Logo />
          </h1>
        </section>

        <section className="min-h-[100dvh] relative">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col items-center gap-16">
              <div className="text-center space-y-4 transform hover:scale-105 transition-transform duration-500">
                <h2 className="future-text text-2xl md:text-4xl">
                  THE FUTURE OF SOFTWARE
                </h2>
                <p className="text-lg md:text-xl text-[#928466] tracking-widest">
                  COMING NOVEMBER 25TH
                </p>
              </div>
              
              <CountdownTimer />
              
              <div className="max-w-md w-full transform hover:scale-[1.02] transition-transform duration-500">
                {!showSuccess ? (
                  <form onSubmit={handleSubmit} className="relative space-y-4">
                    <div className="relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER YOUR EMAIL FOR UPDATES"
                        className="w-full px-4 py-3 bg-black/50 border border-[#928466] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#928466] text-white email-input pr-12 group-hover:border-[#928466]/80"
                      />
                      <button
                        type="submit"
                        disabled={!email || !consent || isSubmitting}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#928466] hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-[#928466] transform hover:scale-110 transition-transform duration-300"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="consent-form glassmorphism p-4 text-xs space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="peer"
                          />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          I agree to receive updates and accept the{' '}
                          <a
                            href="https://trusynth.com/privacypolicy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#928466] hover:text-white underline transition-colors relative z-20 pointer-events-auto"
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </form>
                ) : (
                  <div className="success-message glassmorphism p-8 text-center space-y-6">
                    <SuccessAnimation />
                    <div className="success-text">
                      WELCOME TO THE FUTURE
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-6 social-links">
                  <a
                    href="https://www.linkedin.com/company/tru-synth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#928466] hover:text-white transition-all transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/trusynth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#928466] hover:text-white transition-all transform hover:scale-110"
                  >
                    <XIcon />
                  </a>
                </div>
                
                <div className="flex gap-6 text-[#928466]">
                  <a 
                    href="mailto:hello@trusynth.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">hello@trusynth.com</span>
                  </a>
                  <a 
                    href="https://trusynth.com/mediakit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-sm">Press Kit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}