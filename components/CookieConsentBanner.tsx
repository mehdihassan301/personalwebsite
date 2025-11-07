import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface CookieConsentBannerProps {
    setPage: (page: Page) => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ setPage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      // Delay showing the banner slightly so it doesn't pop up instantly
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 rounded-lg bg-white/80 dark:bg-dark/80 backdrop-blur-lg shadow-2xl border border-gray-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <button onClick={() => setPage('PrivacyPolicy')} className="ml-2 font-semibold text-primary dark:text-accent underline hover:no-underline">
                Learn more
            </button>.
          </p>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-purple-600 transition-colors duration-300 flex-shrink-0 w-full sm:w-auto"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
