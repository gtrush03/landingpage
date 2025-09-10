import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Analytics } from '@vercel/analytics/react';
import Earth from './components/Earth';
import ShootingStars from './components/ShootingStars';
import Logo from './components/Logo';
import GridMenu from './components/GridMenu';
import MenuOverlay from './components/MenuOverlay';
import RotatingText from './components/RotatingText';
import ConvAIWidget from './components/ConvAIWidget';
import Blog from './components/Blog';
import BlogArticle1 from './components/BlogArticle1';
import BlogArticle2 from './components/BlogArticle2';
import BlogArticle3 from './components/BlogArticle3';
import SynthOS from './components/SynthOS';
import JoinSynthos from './components/JoinSynthos';
import Agents from './components/Agents';
import PdfViewer from './components/PdfViewer';
import Tuning from './components/Tuning';
import Horizon from './components/Horizon';
import Careers from './components/Careers';
import PaymentSuccessDigitalEmployees from './components/PaymentSuccessDigitalEmployees';
import PaymentSuccessDigitalTeam from './components/PaymentSuccessDigitalTeam';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import AIStrategyForm from './components/AIStrategyForm';
import TuningForm from './components/TuningForm';
import AgentsForm from './components/AgentsForm';
import HorizonForm from './components/HorizonForm';
import JoinForm from './components/JoinForm';
import BlogForm from './components/BlogForm';
import Footer from './components/Footer';
import { useAnalytics } from './hooks/useAnalytics';

// Path tracker component to save current path
const PathTracker = () => {
  const location = useLocation();
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    // Save current path to session storage for recovery after refresh
    if (location.pathname !== '/404.html' && location.pathname !== '/404') {
      sessionStorage.setItem('lastPath', location.pathname);
    }

    // Track page view with custom event
    trackEvent(
      'page_view',
      'navigation',
      `Page View: ${location.pathname}`
    );
  }, [location, trackEvent]);
  
  return null;
};

function MainLayout() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const { trackEvent } = useAnalytics();

  // Make the menu select function available globally for the footer
  useEffect(() => {
    (window as any).menuSelectFunction = (menuType: string) => {
      setActiveMenu(menuType);
      trackEvent('menu_open', 'interaction', `Menu Opened: ${menuType}`);
    };
    
    return () => {
      delete (window as any).menuSelectFunction;
    };
  }, [trackEvent]);

  return (
    <div className="fixed inset-0 bg-black text-white overflow-y-auto">
      {/* Background Effects - Fixed */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense fallback={null}>
            <ShootingStars />
            <Earth />
          </Suspense>
        </Canvas>
      </div>

      {/* Content - Scrollable Container */}
      <div className="relative z-10 min-h-[100vh] flex flex-col">
        {/* Logo and Rotating Text - Fixed Height */}
        <div className="flex-none flex flex-col items-center pt-6 md:pt-8">
          <Logo />
          <div className="mt-8 md:mt-16 w-full max-w-3xl mx-auto px-4">
            <RotatingText />
          </div>
        </div>

        {/* Grid Menu - Flex Grow to Take Available Space */}
        <div className="flex-1 flex items-start md:items-center justify-center mt-16 md:mt-0 min-h-[400px]">
          <GridMenu onMenuSelect={setActiveMenu} />
        </div>

        {/* Widget Container - Fixed Height */}
        <div className="flex-none mb-8">
          <div className="widget-container w-[300px] mx-auto scale-90 origin-center">
            <ConvAIWidget />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex-none text-center pb-4">
          <div className="flex items-center justify-center gap-6">
            <a 
              href="/terms-and-conditions"
              className="text-white/30 hover:text-[#928466] transition-colors duration-300 relative group text-[10px] tracking-wider"
            >
              TERMS & CONDITIONS
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#928466] group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="/privacy-policy"
              className="text-white/30 hover:text-[#928466] transition-colors duration-300 relative group text-[10px] tracking-wider"
            >
              PRIVACY POLICY
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#928466] group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="/careers"
              className="text-white/30 hover:text-[#928466] transition-colors duration-300 relative group text-[10px] tracking-wider"
            >
              CAREERS
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#928466] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Menu Overlays */}
      <MenuOverlay 
        isOpen={activeMenu !== null}
        menuType={activeMenu}
        onClose={() => setActiveMenu(null)}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <PathTracker />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/the-future-of-work-why-ai-agents-are-your-next-competitive-advantage" element={<BlogArticle1 />} />
        <Route path="/blog/how-to-automate-your-business" element={<BlogArticle2 />} />
        <Route path="/blog/why-ai-will-replace-workflows-not-jobs" element={<BlogArticle3 />} />
        <Route path="/synthos" element={<SynthOS />} />
        <Route path="/join" element={<JoinSynthos />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/pdf" element={<PdfViewer />} />
        <Route path="/tuning" element={<Tuning />} />
        <Route path="/horizon" element={<Horizon />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/payment-success/digital-employees" element={<PaymentSuccessDigitalEmployees />} />
        <Route path="/payment-success/digital-team" element={<PaymentSuccessDigitalTeam />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ai-strategy-form" element={<AIStrategyForm />} />
        <Route path="/tuning-form" element={<TuningForm />} />
        <Route path="/agents-form" element={<AgentsForm />} />
        <Route path="/horizon-form" element={<HorizonForm />} />
        <Route path="/join-form" element={<JoinForm />} />
        <Route path="/blog-form" element={<BlogForm />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;