import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, XCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import SocialShare from './SocialShare';

export default function BlogArticle3() {
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
            title="Why AI Will Replace Workflows, Not Jobs (And What That Means for Your Business)"
            description="The AI Myth That Needs to Die: AI isn't coming for your job—it's coming for the tedious workflows that slow you down."
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
              {["AI", "Automation", "Future of Work", "Business"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#928466]/10 border border-[#928466]/20 rounded-full text-[#928466] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-thin tracking-wider text-[#928466] mb-4">
              Why AI Will Replace Workflows, Not Jobs (And What That Means for Your Business)
            </h1>
            <p className="text-white/60 text-lg mb-4">
              The AI Myth That Needs to Die
            </p>
            <time className="text-white/40">March 10, 2025</time>
          </div>

          {/* Article content */}
          <article className="space-y-12">
            {/* Introduction */}
            <div className="bg-[#928466]/10 border border-[#928466]/20 rounded-lg p-6">
              <p className="text-xl text-[#928466] mb-6">Every time AI automation comes up, the same question follows:</p>
              <div className="text-2xl text-white/80 text-center mb-6">"Will AI take my job?"</div>
              <p className="text-white/80 mb-4">But here's the truth: AI isn't coming for your job. It's coming for the tedious, repetitive, time-consuming workflows that slow you down.</p>
              <p className="text-xl text-[#928466] text-center">AI doesn't replace people—it replaces bottlenecks.</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <h2 className="text-2xl text-[#928466]">How AI Eliminates Bottlenecks, Not Humans</h2>
              <p className="text-white/80">Right now, businesses lose countless hours to repetitive, manual workflows.</p>

              <div className="space-y-4">
                <h3 className="text-xl text-white mb-4">Examples of workflow bottlenecks:</h3>
                {[
                  "Customer service teams answering the same questions over and over",
                  "Sales teams manually sorting & qualifying leads",
                  "Finance teams chasing unpaid invoices",
                  "HR teams drowning in admin work instead of hiring talent",
                  "Operations teams handling routine reporting & scheduling"
                ].map((bottleneck, index) => (
                  <div key={index} className="flex items-center gap-3 text-red-400/80">
                    <XCircle size={20} />
                    <span>{bottleneck}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-center text-lg">None of these require deep expertise—just time.</p>
            </div>

            {/* Business Impact */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">Businesses That Automate Workflows Scale Faster</h2>
              <p className="text-white/80">Companies that integrate AI aren't cutting jobs—they're optimizing how work gets done.</p>

              <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6">
                <h3 className="text-xl text-[#928466] mb-6">Real-world examples of AI-enhanced businesses:</h3>
                <div className="space-y-8">
                  {[
                    {
                      company: "BACA Systems (Customer Support Automation)",
                      results: [
                        "AI-powered customer support cut response times from minutes to seconds, improving customer satisfaction.",
                        "Result? Higher retention, more sales, and zero burnout for human agents."
                      ]
                    },
                    {
                      company: "Moveo.AI (Sales & Engagement Automation)",
                      results: [
                        "AI analyzes customer interactions, preferences & behaviors to personalize engagement.",
                        "Result? Higher conversions and less time wasted on unqualified leads."
                      ]
                    },
                    {
                      company: "Sabre Travel AI (Automated Revenue Management)",
                      results: [
                        "AI tracks market trends, pricing shifts & demand spikes in real time.",
                        "Result? Dynamic pricing strategies that boost revenue without manual input."
                      ]
                    }
                  ].map((example, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400" />
                        <span className="text-[#928466]">{example.company}</span>
                      </div>
                      <div className="pl-8 space-y-2">
                        {example.results.map((result, idx) => (
                          <p key={idx} className="text-white/60">{result}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#928466] text-lg text-center">These companies didn't replace workers. They replaced inefficiencies.</p>
            </div>

            {/* TRU SYNTH Approach */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466]">The TRU SYNTH Approach: AI as a Business Accelerator</h2>
              <p className="text-white/80">Most businesses struggle with AI because they think it requires complex integrations & a complete workflow overhaul.</p>
              <p className="text-white/60">TRU SYNTH makes it simple.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6">
                  <h3 className="text-xl text-[#928466] mb-4">We build plug-and-play AI modules designed to:</h3>
                  <div className="space-y-3">
                    {[
                      "Automate repetitive workflows without disrupting operations",
                      "Enhance employee productivity by handling the heavy lifting",
                      "Scale businesses faster by making real-time decisions autonomously"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400" />
                        <span className="text-white/80">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-6">
                  <h3 className="text-xl text-[#928466] mb-4">Key use cases for TRU SYNTH's AI agents:</h3>
                  <div className="space-y-3">
                    {[
                      "Sales → Automates lead qualification, outreach & follow-ups",
                      "HR → AI streamlines recruitment, onboarding & training",
                      "Market Research → AI tracks trends, competitors & industry shifts"
                    ].map((useCase, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-[#928466]">📈</span>
                        <span className="text-white/80">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#928466] text-center">Final Thoughts: Why AI is the Future of Work</h2>
              <p className="text-white/80 text-center">Businesses that embrace AI workflows aren't just surviving—they're leading.</p>

              <div className="flex flex-col gap-4 items-center">
                {[
                  "AI replaces inefficiencies, not expertise",
                  "AI-powered businesses scale faster without increasing headcount",
                  "TRU SYNTH makes AI integration seamless & effective"
                ].map((point, index) => (
                  <div key={index} className="px-6 py-3 bg-[#928466]/10 border border-[#928466]/20 rounded-full">
                    <span className="text-[#928466] mr-2">🔹</span>
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-2xl text-[#928466] mb-4">AI won't take your job—but it will change how your job is done.</p>
                <p className="text-white/80">And the businesses that adapt now will be the ones dominating their industries in the next five years.</p>
                
                <button 
                  onClick={() => {
                    window.location.href = 'https://form.typeform.com/to/EhZyapjJ';
                  }}
                  className="
                    group relative overflow-hidden inline-flex items-center justify-center 
                    px-8 py-4 rounded-lg bg-gradient-to-r from-[#928466] to-[#B7A98B]
                    transition-all duration-500 hover:scale-105 mt-8
                  "
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <span className="text-black font-medium tracking-wider">Transform Your Business Today</span>
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