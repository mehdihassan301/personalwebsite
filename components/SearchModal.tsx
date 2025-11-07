import React, { useState, useEffect, useRef } from 'react';
import { Page, Service, Post } from '../types';
import { serviceDetails, blogPosts } from '../constants';
import { XIcon, WebDevIcon, VibeCodeIcon, AIIcon, ArrowRightIcon } from './Icons';

const serviceIcons: { [key: string]: (props: React.ComponentProps<'svg'>) => React.ReactElement } = {
    'web-dev': WebDevIcon,
    'vibe-coded': VibeCodeIcon,
    'ai-automations': AIIcon
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: Page, id?: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigateTo }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ services: Service[], posts: Post[] }>({ services: [], posts: [] });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // Reset state when modal closes
      setQuery('');
      setResults({ services: [], posts: [] });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const lowerCaseQuery = query.toLowerCase();

      const filteredServices = serviceDetails.filter(service =>
        service.title.toLowerCase().includes(lowerCaseQuery) ||
        service.description.toLowerCase().includes(lowerCaseQuery) ||
        service.overview.toLowerCase().includes(lowerCaseQuery)
      );

      const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().replace(/<[^>]*>?/gm, '').includes(lowerCaseQuery) // Strip HTML tags for search
      );
      
      setResults({ services: filteredServices, posts: filteredPosts });
    } else {
      setResults({ services: [], posts: [] });
    }
  }, [query]);
  
  const handleResultClick = (page: Page, id: string) => {
    navigateTo(page, id);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const hasResults = results.services.length > 0 || results.posts.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"></div>
      <div
        className="relative w-full max-w-2xl transform rounded-xl bg-white dark:bg-dark shadow-2xl transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-gray-200 dark:border-white/10 p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for services or blog posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
          />
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        
        {query.length > 1 && (
            <div className="max-h-[60vh] overflow-y-auto">
            {hasResults ? (
                <div>
                {results.services.length > 0 && (
                    <div className="p-4">
                    <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Services</h3>
                    <ul className="space-y-2">
                        {results.services.map(service => {
                            const Icon = serviceIcons[service.id];
                            return (
                                <li key={service.id}>
                                <button
                                    onClick={() => handleResultClick('ServiceDetail', service.id)}
                                    className="w-full flex items-center justify-between text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
                                >
                                    <div className="flex items-center overflow-hidden">
                                        <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-md mr-4 flex-shrink-0">
                                            {Icon && <Icon className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-white">{service.title}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{service.description}</p>
                                        </div>
                                    </div>
                                    <ArrowRightIcon className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                                </button>
                                </li>
                            );
                        })}
                    </ul>
                    </div>
                )}
                {results.posts.length > 0 && (
                    <div className="p-4">
                    <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Blog Posts</h3>
                     <ul className="space-y-2">
                        {results.posts.map(post => (
                            <li key={post.id}>
                                <button
                                    onClick={() => handleResultClick('BlogPost', post.id)}
                                    className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
                                >
                                    <p className="font-semibold text-gray-800 dark:text-white">{post.title}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{post.excerpt}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>
            ) : (
                <div className="p-16 text-center text-gray-500">
                <p>No results found for "{query}"</p>
                </div>
            )}
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;