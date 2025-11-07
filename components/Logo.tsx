import React from 'react';
import { Page } from '../types';

interface LogoProps {
  setPage?: (page: Page) => void;
  className?: string;
}

const LogoContent: React.FC = () => (
  <svg width="120" height="28" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-label="ProbSolv">
      <text x="0" y="22" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" className="dark:text-white text-gray-900 fill-current">
        ProbSolv
      </text>
      <circle cx="114" cy="21" r="4" className="text-primary dark:text-accent fill-current"/>
  </svg>
);


const Logo: React.FC<LogoProps> = ({ setPage, className = '' }) => {
    if (setPage) {
        return (
            <button
                onClick={() => setPage('Home')}
                className={`focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${className}`}
                aria-label="ProbSolv Home"
            >
                <LogoContent />
            </button>
        );
    }
    return (
        <div className={className}>
            <LogoContent />
        </div>
    );
};

export default Logo;
