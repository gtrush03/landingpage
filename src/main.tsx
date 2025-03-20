import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Component to handle path recovery on refresh
const AppWithPathRecovery = () => {
  useEffect(() => {
    // Check if we're on a 404 page but have a saved path
    const lastPath = sessionStorage.getItem('lastPath');
    const currentPath = window.location.pathname;
    
    // If we're on the 404 page and have a saved path, redirect
    if ((currentPath === '/404.html' || currentPath === '/404') && lastPath && lastPath !== '/404.html' && lastPath !== '/404') {
      window.location.replace(lastPath);
      return;
    }
    
    // Save current path to session storage for recovery after refresh
    if (currentPath !== '/404.html' && currentPath !== '/404') {
      sessionStorage.setItem('lastPath', currentPath);
    }
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithPathRecovery />
  </StrictMode>
);