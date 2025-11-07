import React from 'react';
import { portfolioItems } from '../constants';
import { Page } from '../types';

interface PortfolioPageProps {
  setPage: (page: Page) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setPage }) => {
  return (
    <>
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Work</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A selection of projects that showcase our commitment to quality, creativity, and results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:-translate-y-2">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-accent text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;