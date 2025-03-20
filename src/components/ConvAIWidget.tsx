import React, { useEffect, useRef } from 'react';

export default function ConvAIWidget() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetLoadedRef = useRef<boolean>(false);
  const initAttemptsRef = useRef<number>(0);
  const maxAttempts = 3;

  useEffect(() => {
    // Function to load and initialize widget
    const initWidget = () => {
      if (widgetLoadedRef.current || !widgetContainerRef.current) return;

      try {
        // Create the widget element
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'bbZ0iOEgvVflauktq7tF');
        
        // Add error handling
        widget.addEventListener('error', (e) => {
          console.warn('Widget error:', e);
          if (initAttemptsRef.current < maxAttempts) {
            setTimeout(() => {
              initAttemptsRef.current++;
              initWidget();
            }, 2000); // Retry after 2 seconds
          }
        });
        
        // Clear any existing widgets
        while (widgetContainerRef.current.firstChild) {
          widgetContainerRef.current.removeChild(widgetContainerRef.current.firstChild);
        }
        
        // Append widget to our container
        widgetContainerRef.current.appendChild(widget);
        widgetLoadedRef.current = true;

        // Apply custom positioning after widget is loaded
        const applyCustomStyles = () => {
          const widgetElement = document.querySelector('elevenlabs-convai');
          if (widgetElement && widgetElement.shadowRoot) {
            const style = document.createElement('style');
            style.textContent = `
              :host {
                transform: translateX(-5%) !important;
              }
            `;
            widgetElement.shadowRoot.appendChild(style);
          }
        };

        // Wait for widget to be fully loaded
        setTimeout(applyCustomStyles, 2000);
      } catch (error) {
        console.warn('Widget initialization error:', error);
        if (initAttemptsRef.current < maxAttempts) {
          setTimeout(() => {
            initAttemptsRef.current++;
            initWidget();
          }, 2000); // Retry after 2 seconds
        }
      }
    };

    // Load script if not already loaded
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.onload = initWidget;
      script.onerror = (error) => {
        console.warn('Script loading error:', error);
        if (initAttemptsRef.current < maxAttempts) {
          setTimeout(() => {
            initAttemptsRef.current++;
            initWidget();
          }, 2000); // Retry after 2 seconds
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, just initialize widget
      initWidget();
    }

    // Cleanup function
    return () => {
      if (widgetContainerRef.current) {
        while (widgetContainerRef.current.firstChild) {
          widgetContainerRef.current.removeChild(widgetContainerRef.current.firstChild);
        }
      }
      widgetLoadedRef.current = false;
      initAttemptsRef.current = 0;
    };
  }, []);

  return (
    <div 
      ref={widgetContainerRef}
      className="w-full h-full flex flex-col items-center justify-center"
    />
  );
}