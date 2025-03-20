import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';

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

export default function PdfViewer() {
  const navigate = useNavigate();
  const fileId = '1m92jC0I_mCJ7X4p-3MGXsmougKwm_HN5';
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  useEffect(() => {
    // Ensure we start at the top of the page
    window.scrollTo(0, 0);
    
    // Save current path to session storage for crash recovery
    sessionStorage.setItem('lastPath', '/agents/pdf');
    
    // Restore scroll position if available
    const scrollPos = sessionStorage.getItem('pdfScrollPos');
    if (scrollPos) {
      requestAnimationFrame(() => {
        const container = document.querySelector('.pdf-scroll-container');
        if (container) {
          container.scrollTop = parseInt(scrollPos, 10);
        }
      });
    }

    // Save scroll position before unload
    const handleScroll = () => {
      const container = document.querySelector('.pdf-scroll-container');
      if (container) {
        sessionStorage.setItem('pdfScrollPos', container.scrollTop.toString());
      }
    };

    // Prevent all zoom gestures
    const preventZoom = (e) => {
      // Prevent pinch zoom
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
      
      // Prevent double-tap zoom
      if (e.type === 'touchend') {
        const now = Date.now();
        const lastTouch = window.lastTouchEnd || now;
        window.lastTouchEnd = now;
        if (now - lastTouch <= 300) {
          e.preventDefault();
        }
      }
      
      // Prevent ctrl/cmd + wheel zoom
      if (e.type === 'wheel' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('touchend', preventZoom, { passive: false });
    document.addEventListener('wheel', preventZoom, { passive: false });
    
    const container = document.querySelector('.pdf-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('touchend', preventZoom);
      document.removeEventListener('wheel', preventZoom);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page in history
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back</span>
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 relative flex flex-col flex-1">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#928466] rounded-full filter blur-[100px] opacity-20" />
          <div className="absolute top-20 right-20 w-48 h-48 bg-[#928466] rounded-full filter blur-[80px] opacity-10" />
          
          <div className="relative z-10 flex flex-col flex-1">
            {/* Header */}
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-4xl sm:text-6xl font-thin chrome-text text-center mb-2">
                AGENTS
              </h1>
              <p className="text-lg sm:text-xl font-thin text-gray-400 text-center neon-glow">
                DESIGNING SYSTEMS THAT THINK & ACT
              </p>
            </div>

            {/* PDF Viewer */}
            <div className="code-window futuristic-border flex-1 flex flex-col">
              <div className="code-dots">
                <div className="code-dot"></div>
                <div className="code-dot"></div>
                <div className="code-dot"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 sm:py-4 border-b border-[#928466]/20">
                <div className="text-sm font-light text-[#928466]">
                  Document Preview
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 bg-[#928466]/10 hover:bg-[#928466]/20 rounded-lg 
                           transition-all duration-300 flex items-center justify-center gap-2 
                           hover-glow group mt-3 sm:mt-0"
                >
                  <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-light">Download PDF</span>
                </button>
              </div>

              <div className="pdf-scroll-container flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8">
                <ErrorBoundary>
                  <div className="w-full relative shadow-2xl">
                    <iframe
                      src={previewUrl}
                      className="w-full rounded-lg bg-white"
                      title="Agentic AI PDF Viewer"
                      allow="autoplay"
                      style={{ 
                        height: '100vh',
                        border: 'none',
                        touchAction: 'pan-y', // Only allow vertical scrolling
                        userSelect: 'none', // Prevent text selection
                        WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
                      }}
                    />
                  </div>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}