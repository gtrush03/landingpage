import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft, Brain, Target, Shield, Zap } from 'lucide-react';
import Footer from './Footer';
import SocialShare from './SocialShare';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PDF Viewer Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <p className="text-[#928466] mb-4">Something went wrong displaying the document.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-[#928466]/10 hover:bg-[#928466]/20 rounded-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced Featured PDF Section with minimal design
const FeaturedPDF = ({ onViewPDF }) => (
  <div className="max-w-xl mx-auto px-4">
    <div className="relative">
      {/* Main container */}
      <div className="relative bg-gradient-to-r from-[#928466] to-[#B7A98B] rounded-lg p-0.5">
        <div className="bg-black/95 rounded-[7px] p-3 md:p-4">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-base md:text-lg text-[#928466] tracking-[0.2em] mb-1 md:mb-2">
              DESIGNING SYSTEMS THAT THINK & ACT
            </h2>

            {/* Description */}
            <p className="text-white/70 text-[10px] md:text-sm mb-3 md:mb-4">
              The foundation for understanding how our AI agents operate, make decisions, and transform businesses.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 w-full mb-3 md:mb-4">
              {[
                { icon: Brain, label: "Neural Architecture" },
                { icon: Target, label: "Decision Making" },
                { icon: Shield, label: "Process Integration" },
                { icon: Zap, label: "Risk Control" }
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex items-center gap-1.5 p-1.5 md:p-2 bg-[#928466]/5 rounded-lg border border-[#928466]/10 hover:border-[#928466]/30 transition-all duration-300">
                  <Icon size={12} className="text-[#928466]" />
                  <span className="text-[10px] md:text-xs text-white/60">{label}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onViewPDF}
              className="group relative overflow-hidden flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#928466]/10 border border-[#928466]/30 hover:border-[#928466] transition-all duration-300 w-full"
            >
              <Download size={12} className="text-[#928466] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] md:text-xs text-[#928466]">Download Foundation Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Blog Post Component
const BlogPost = ({ post, onSelect }) => (
  <div 
    className="bg-black/40 backdrop-blur-sm border border-[#928466]/20 rounded-lg overflow-hidden mb-3 md:mb-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards] cursor-pointer group"
    onClick={() => onSelect(post.slug)}
  >
    <div className="relative aspect-video">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    
    <div className="p-3 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-1 md:gap-2 mb-2 md:mb-3">
        <h3 className="text-base md:text-xl text-[#928466] tracking-wider group-hover:text-white transition-colors duration-300">
          {post.title}
        </h3>
        <span className="text-[10px] md:text-sm text-white/40">{post.date}</span>
      </div>
      
      <p className="text-xs md:text-base text-white/60 mb-3 md:mb-4">{post.summary}</p>
      
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {post.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-0.5 md:px-3 md:py-1 bg-[#928466]/10 border border-[#928466]/20 rounded-full text-[#928466] text-[10px] md:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Blog() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePostSelect = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleViewPDF = () => {
    navigate('/agents/pdf');
    window.scrollTo(0, 0);
  };

  const blogPosts = [
    {
      title: "THE FUTURE OF WORK: WHY AI AGENTS ARE YOUR NEXT COMPETITIVE ADVANTAGE",
      date: "2025-03-20",
      summary: "Forget chatbots. AI agents are here to dominate. Welcome to the new era where autonomous AI doesn't just respond—it executes.",
      type: "article",
      image: "https://i.imgur.com/UKbzPyp.png",
      tags: ["AI Agents", "Future of Work", "Business Automation", "TRU SYNTH"],
      slug: "the-future-of-work-why-ai-agents-are-your-next-competitive-advantage"
    },
    {
      title: "How to Automate Your Business in 2025 (Without Breaking Everything)",
      date: "2025-03-15",
      summary: "AI automation isn't the future. It's already here. But how do you start—without breaking everything?",
      type: "article",
      image: "https://i.imgur.com/jTVseUD.png",
      tags: ["AI", "Automation", "Business", "Guide"],
      slug: "how-to-automate-your-business"
    },
    {
      title: "Why AI Will Replace Workflows, Not Jobs (And What That Means for Your Business)",
      date: "2025-03-10",
      summary: "The AI Myth That Needs to Die: AI isn't coming for your job—it's coming for the tedious workflows that slow you down.",
      type: "article",
      image: "https://i.imgur.com/adKtlW4.png",
      tags: ["AI", "Automation", "Future of Work", "Business"],
      slug: "why-ai-will-replace-workflows-not-jobs"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm tracking-wider">Back to Dashboard</span>
          </button>
        </div>
        {/* Progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main content */}
      <div className="relative pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-6xl font-thin tracking-[0.3em] text-[#928466] mb-3 md:mb-4">
              BLOG
            </h1>
            <div className="w-24 md:w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-3 md:mb-4" />
            <p className="text-sm md:text-xl text-white/60 tracking-wider">
              Research Insights & Technical Documentation
            </p>
          </div>

          {/* Featured PDF Section */}
          <div className="mb-8 md:mb-12">
            <div className="text-center mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-[#928466] tracking-wider mb-1 md:mb-2">START HERE</p>
              <p className="text-[10px] md:text-sm text-white/60">
                Download our foundation guide to understand how TRU SYNTH's AI systems operate
              </p>
            </div>
            <FeaturedPDF onViewPDF={handleViewPDF} />
          </div>

          {/* Latest Articles Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl text-[#928466] tracking-wider mb-4 md:mb-6">
              Latest Articles
            </h2>
            <div className="space-y-3 md:space-y-8">
              {blogPosts.map((post, index) => (
                <BlogPost 
                  key={index} 
                  post={post}
                  onSelect={handlePostSelect}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}