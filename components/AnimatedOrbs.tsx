
import React from 'react';
import { Theme } from '../types';

interface AnimatedOrbsProps {
  theme: Theme;
}

const AnimatedOrbs: React.FC<AnimatedOrbsProps> = ({ theme }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="relative w-full h-full">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-primary rounded-full opacity-30 blur-3xl filter animate-float-1"></div>
            <div className="absolute bottom-[-5%] right-[5%] w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl filter animate-float-2"></div>
            <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl filter animate-float-3"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-gray-200 rounded-full opacity-50 blur-3xl filter animate-float-1"></div>
            <div className="absolute bottom-[-5%] right-[5%] w-80 h-80 bg-accent rounded-full opacity-40 blur-3xl filter animate-float-2"></div>
            <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-gray-300 rounded-full opacity-30 blur-3xl filter animate-float-3"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnimatedOrbs;
