import React from 'react';
import { Page } from '../types';
import { PlusIcon } from './Icons';

interface StartProjectButtonProps {
  setPage: (page: Page) => void;
}

const StartProjectButton: React.FC<StartProjectButtonProps> = ({ setPage }) => {
  return (
    <button
      onClick={() => setPage('Contact')}
      className="fixed bottom-8 right-4 sm:right-8 z-40 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-primary text-white font-bold text-base shadow-lg shadow-primary/40 transition-all duration-300 transform hover:scale-105 hover:bg-purple-600 animate-fade-in sm:w-auto sm:px-5"
      aria-label="Start Your Project"
    >
      <PlusIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Start Your Project</span>
    </button>
  );
};

export default StartProjectButton;
