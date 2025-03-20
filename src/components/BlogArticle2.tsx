import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import SocialShare from './SocialShare';

export default function BlogArticle2() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    // Get the current URL for sharing
    setCurrentUrl(window.location.href);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to Blog</span>
          </button>
          
          {/* Social Share Buttons */}
          <SocialShare 
            url={currentUrl}
            title="How to Automate Your Business in 2025 (Without Breaking Everything)"
            description="AI automation isn't the future. It's already here. But how do you start—without breaking everything?"
          />
        </div>
        {/* Progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Article content */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {["AI", "Automation", "Business", "Guide"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#928466]/10 border border-[#928466]/20 rounded-full text-[#928466] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-thin tracking-wider text-[#928466] mb-4">
              How to Automate Your Business in 2025 (Without Breaking Everything)
            </h1>
            <p className="text-white/60 text-lg mb-4">
              AI automation isn't the future. It's already here. But how do you start—without breaking everything?
            </p>
            <time className="text-white/40">March 15, 2025</time>
          </div>

          {/* Article content */}
          <article className="space-y-12">
            {/* Introduction */}
            <div className="bg-[#928466]/10 border border-[#928466]/20 rounded-lg p-6">
              <h2 className="text-2xl text-[#928466] mb-6">Why Businesses Hesitate to Automate (And Why That's a Mistake)</h2>
              <p className="text-white/80 mb-6">Every business leader knows AI automation is the future. But when it comes to actually implementing it? Hesitation kicks in.</p>
              
              <div className="space-y-4 mb-6">
                {[
                  "it's too complex.",
                  "what if it messes up our existing systems?",
                  "what if we lose control?"
                ].map((concern, index) => (
                  <div key={index} className="flex items-center gap-3 text-red-400/80">
                    <XCircle size={20} />
                    <span>"{concern}"</span>
                  </div>
                ))}
              </div>
              
              <p className="text-white/60">These concerns are valid—but they're also outdated.</p>
            </div>

            <div className="text-center">
              <p className="text-xl text-[#928466]">Companies that wait on AI adoption won't just miss out—they'll get left behind.</p>
              <p className="text-white/60 mt-4">Because right now, early adopters are scaling faster, reducing costs, and unlocking new revenue streams using AI.</p>
            </div>

            {/* Step 1 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">Step 1: What Should You Automate First?</h2>
              <p className="text-white/80">Not all automation is created equal. The trick is to start with high-impact, low-risk tasks—things that:</p>
              
              <div className="space-y-3">
                {[
                  "take up too much manual time",
                  "follow predictable patterns",
                  "don't require deep human judgment"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-emerald-400/80">
                    <CheckCircle2 size={20} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6">
                <h3 className="text-xl text-[#928466] mb-4">Best Starting Points for AI Automation:</h3>
                <div className="space-y-4">
                  {[
                    "Customer Support → AI agents can handle 70%+ of inquiries before escalating to humans",
                    "Lead Generation → AI can find & qualify potential clients while you sleep",
                    "Email Outreach → Personalized AI-generated emails that convert better than templates",
                    "Invoice Processing → AI finds unpaid invoices, follows up, and updates records",
                    "Market Research → AI scrapes data, analyzes trends, and delivers insights instantly"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#928466] mt-2" />
                      <span className="text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#928466] text-lg text-center">Low-risk, high-impact automation = instant efficiency boost.</p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">Step 2: Implementing AI Agents in Phases</h2>
              <p className="text-white/80">Going all-in on automation overnight? Bad move.</p>
              <p className="text-white/60">Instead, roll it out in structured phases:</p>

              <div className="space-y-8">
                {[
                  {
                    icon: "🚀",
                    phase: "Phase 1: Start with Observation",
                    points: [
                      "Integrate AI tools alongside human workflows",
                      "Let AI learn from real-time data before making decisions",
                      "Ensure AI understands context & best practices"
                    ]
                  },
                  {
                    icon: "🤖",
                    phase: "Phase 2: Low-stakes Automation",
                    points: [
                      "Let AI take over repetitive but non-critical tasks",
                      "Examples: scheduling, data entry, invoice tracking",
                      "Keep human oversight to verify accuracy"
                    ]
                  },
                  {
                    icon: "⚡",
                    phase: "Phase 3: Full Integration & Scaling",
                    points: [
                      "AI handles entire workflows with minimal supervision",
                      "Agents optimize, adapt, and improve automatically",
                      "AI starts driving revenue instead of just saving time"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-black/40 border border-[#928466]/20 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl">{phase.icon}</span>
                      <h3 className="text-xl text-[#928466]">{phase.phase}</h3>
                    </div>
                    <div className="space-y-3">
                      {phase.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#928466] mt-2" />
                          <span className="text-white/80">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#928466] text-lg text-center">This phased approach eliminates risk while maximizing impact.</p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">Step 3: The TRU SYNTH Way—AI Automation That Actually Works</h2>
              <p className="text-white/80">Most AI solutions require heavy customization, long setup times, and complex integrations.</p>
              <p className="text-white/60 mb-8">TRU SYNTH eliminates that.</p>

              <div className="bg-[#928466]/10 border border-[#928466]/20 rounded-lg p-6">
                <h3 className="text-xl text-white mb-6">We build plug-and-play AI modules designed for:</h3>
                <div className="space-y-4">
                  {[
                    "Sales → AI finds, qualifies, and nurtures leads",
                    "HR → AI handles recruitment, onboarding & internal operations",
                    "Market Research → AI tracks trends, competitors & insights in real time"
                  ].map((module, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      <span className="text-white/80">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6 mt-8">
                <h3 className="text-xl text-[#928466] mb-4">Why it works?</h3>
                <div className="space-y-3">
                  {[
                    "No custom development needed → instant deployment",
                    "Modular integration → plug into your existing workflow, no disruption",
                    "Autonomous execution → AI that doesn't just assist—it acts"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#928466] mt-2" />
                      <span className="text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466] text-center">Final Thoughts: Start Small, Move Fast</h2>
              <p className="text-white/80 text-center">AI automation isn't about replacing humans—it's about freeing them up to focus on what matters.</p>

              <div className="flex flex-col gap-4 items-center">
                {[
                  "Automate repetitive, time-consuming tasks first",
                  "Roll out AI in structured phases to minimize risk",
                  "Use plug-and-play AI agents to scale faster"
                ].map((point, index) => (
                  <div key={index} className="px-6 py-3 bg-[#928466]/10 border border-[#928466]/20 rounded-full">
                    <span className="text-[#928466] mr-2">🔹</span>
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-2xl text-[#928466] mb-4">TRU SYNTH makes AI automation seamless.</p>
                
                <button 
                  onClick={() => {
                    window.location.href = 'https://nd2nkx5y1hc.typeform.com/to/EhZyapjJ';
                  }}
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
                    <span className="text-black font-medium tracking-wider">Start Your AI Journey</span>
                    <ChevronRight size={20} className="text-black transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}