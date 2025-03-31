import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import SocialShare from './SocialShare';

export default function BlogArticle1() {
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
            title="The Future of Work: Why AI Agents Are Your Next Competitive Advantage"
            description="Forget chatbots. AI agents are here to dominate. Welcome to the new era where autonomous AI doesn't just respond—it executes."
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
              {["AI Agents", "Future of Work", "Business Automation", "TRU SYNTH"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#928466]/10 border border-[#928466]/20 rounded-full text-[#928466] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-thin tracking-wider text-[#928466] mb-4">
              THE FUTURE OF WORK: WHY AI AGENTS ARE YOUR NEXT COMPETITIVE ADVANTAGE
            </h1>
            <p className="text-white/60 text-lg mb-4">
              Forget chatbots. AI agents are here to dominate. Welcome to the new era where autonomous AI doesn't just respond—it executes.
            </p>
            <time className="text-white/40">March 20, 2025</time>
          </div>

          {/* Article content */}
          <article className="space-y-8">
            {/* Introduction */}
            <div className="bg-[#928466]/10 border border-[#928466]/20 rounded-lg p-8 space-y-8">
              {/* Main statement with enhanced typography */}
              <div className="space-y-6">
                <p className="text-white/90 text-xl leading-relaxed">
                  The businesses winning today aren't just using AI; they're deploying <span className="text-[#928466]">autonomous agents</span>—systems that don't just respond but <span className="text-[#928466]">act</span>, <span className="text-[#928466]">decide</span>, and <span className="text-[#928466]">execute</span> in real time.
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  TRU SYNTH isn't just watching this shift happen—we're building the future of work where AI doesn't wait for commands. It moves. It hustles. It closes deals before you've had your morning coffee.
                </p>
              </div>

              {/* Divider */}
              <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466]/30 to-transparent" />

              {/* Warning statement with enhanced visibility */}
              <div className="text-center">
                <p className="text-2xl text-[#928466] font-light tracking-wider">
                  If you're still thinking AI is just a fancy chatbot,
                  <br />
                  you're already five years behind.
                </p>
              </div>
            </div>

            {/* What is an AI Agent */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">So, What the Hell is an AI Agent?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI Assistants Card */}
                <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6 hover:border-[#928466]/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#928466]/10 flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-white/80">AI Assistants</h3>
                      <p className="text-[#928466]">Think: Siri</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white/60">
                      Reactive systems that:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-white/60">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                        Wait for commands
                      </li>
                      <li className="flex items-center gap-3 text-white/60">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                        Execute simple tasks
                      </li>
                      <li className="flex items-center gap-3 text-white/60">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                        Limited decision-making
                      </li>
                    </ul>
                  </div>
                </div>

                {/* AI Agents Card */}
                <div className="bg-[#928466]/10 border border-[#928466]/30 rounded-lg p-6 hover:border-[#928466] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#928466]/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-[#928466]">AI Agents</h3>
                      <p className="text-white/80">Think: JARVIS</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white/80">
                      Autonomous systems that:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]" />
                        Act independently
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]" />
                        Make strategic decisions
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#928466]" />
                        Execute complex workflows
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example Section */}
              <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6 mt-8">
                <h3 className="text-xl text-[#928466] mb-4">Real-World Example:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#928466]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div>
                      <p className="text-white/60">AI Assistant:</p>
                      <p className="text-white/80">"Reminder: You have unpaid invoices to check."</p>
                    </div>
                  </div>
                  
                  <div className="w-px h-8 bg-[#928466]/20 mx-auto" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#928466]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <p className="text-[#928466]">AI Agent:</p>
                      <p className="text-white">
                        "I've identified 3 overdue invoices, sent payment reminders, scheduled follow-ups, and updated the accounting system. Expected recovery: $12,400."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-[#928466] text-center mt-8">
                You're not just saving time. You're multiplying output.
              </p>
            </div>

            {/* Real World Proof */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">Real-World Proof: Who's Already Making Money with AI Agents?</h2>
              <p className="text-white/80">
                Big players are already in. They aren't asking "should we?"—they're asking "how fast can we scale?"
              </p>

              <div className="space-y-4">
                {[
                  {
                    company: "BACA Systems",
                    description: "Slashed customer service response times from minutes to seconds, boosting retention and revenue."
                  },
                  {
                    company: "Moveo.AI",
                    description: "Built AI agents that leveled up customer engagement, driving higher conversions."
                  },
                  {
                    company: "Quora's Poe",
                    description: "Monetized AI-powered chats with subscriptions."
                  },
                  {
                    company: "Sabre Travel AI",
                    description: "Optimized pricing and offers, raking in more revenue in the travel industry."
                  },
                  {
                    company: "Legal AI",
                    description: "Firms are using agents to scan contracts, spot risks, and automate compliance, cutting costs and boosting billable efficiency."
                  },
                  {
                    company: "Supply Chains",
                    description: "AI is predicting delays, rerouting shipments, and dynamically optimizing logistics. Fewer bottlenecks = more sales."
                  }
                ].map((example, index) => (
                  <div key={index} className="bg-black/40 border border-[#928466]/20 rounded-lg p-4">
                    <h3 className="text-[#928466] mb-2">{example.company}</h3>
                    <p className="text-white/80">{example.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-xl text-[#928466] text-center">
                This isn't theory. It's money in the bank.
              </p>
            </div>

            {/* TRU SYNTH Section */}
            <div className="bg-[#928466]/10 border border-[#928466]/20 rounded-lg p-6 space-y-6">
              <h2 className="text-2xl text-[#928466]">TRU SYNTH: Where AI Agents Meet Execution</h2>
              <p className="text-white/80">
                TRU SYNTH isn't here to make chatbots. We're here to synthesize AI into the bloodstream of business—not just answering questions, but making decisions that move revenue.
              </p>

              <div className="space-y-4">
                <p className="text-xl text-white">Imagine this:</p>
                <ul className="space-y-3">
                  {[
                    "AI agents tracking your competitors, analyzing pricing shifts, and adjusting your own pricing dynamically to stay ahead.",
                    "Agents automating your B2B outreach—finding leads, crafting personalized emails, and booking calls without human input.",
                    "Supply chain AI cutting inefficiencies before they cost you a dime."
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#928466]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xl text-[#928466]">
                TRU SYNTH is about real AI that actually works. It's not a gimmick. It's business automation that scales like software but hustles like a CEO.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">AI Agents vs. AI Assistants: A Side-by-Side Breakdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left text-[#928466] border-b border-[#928466]/20">Feature</th>
                      <th className="p-4 text-left text-[#928466] border-b border-[#928466]/20">AI Assistants (Old News)</th>
                      <th className="p-4 text-left text-[#928466] border-b border-[#928466]/20">AI Agents (TRU SYNTH Level)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Reaction Type</td>
                      <td className="p-4 text-white/60 border-b border-[#928466]/20">Waits for commands</td>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Acts autonomously</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Complexity</td>
                      <td className="p-4 text-white/60 border-b border-[#928466]/20">Simple tasks</td>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Multi-step, strategic actions</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Examples</td>
                      <td className="p-4 text-white/60 border-b border-[#928466]/20">Siri, Alexa</td>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Self-optimizing AI business ops</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Business Impact</td>
                      <td className="p-4 text-white/60 border-b border-[#928466]/20">Marginal efficiency gains</td>
                      <td className="p-4 text-white/80 border-b border-[#928466]/20">Full-scale automation + revenue growth</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466] text-center">Bottom Line: You Need AI Agents. Yesterday.</h2>
              <p className="text-white/80">
                If your business is still running on "ask me something and I'll answer" AI, you're getting left in the dust. The new era is AI that thinks, decides, and moves—without you having to lift a finger.
              </p>
              <p className="text-white/80">
                TRU SYNTH is not just an AI tool—it's a force multiplier. A system designed to do work, close gaps, and drive revenue while you focus on vision.
              </p>
              <p className="text-white/80">
                The question isn't if you'll use AI agents. It's when—and whether you'll be ahead of the curve or catching up.
              </p>

              <div className="text-center space-y-6">
                <p className="text-xl text-[#928466]">So what's it gonna be? Lead the charge? Or get left behind?</p>
                
                <button 
                  onClick={() => {
                    window.location.href = 'https://form.typeform.com/to/EhZyapjJ';
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
                    <span className="text-black font-medium tracking-wider">Let's Build Your AI Future</span>
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