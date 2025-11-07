import React, { useState } from 'react';
import { Page, Theme } from '../types';
import { SunIcon, MoonIcon, MenuIcon, XIcon, SearchIcon } from './Icons';
import SearchModal from './SearchModal';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page, id?: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const NavLink: React.FC<{ pageName: Page; currentPage: Page; setPage: (page: Page) => void; onClick?: () => void }> = ({ pageName, currentPage, setPage, onClick }) => (
  <button
    onClick={() => { setPage(pageName); if(onClick) onClick(); }}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === pageName
        ? 'font-semibold text-primary dark:text-white bg-primary/10 dark:bg-primary/20'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
    }`}
  >
    {pageName}
  </button>
);

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const navItems: Page[] = ['Home', 'Services', 'Pricing', 'Portfolio', 'Blog', 'Careers', 'About', 'Contact'];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 dark:bg-black/30 bg-white/70 backdrop-blur-lg border-b dark:border-white/10 border-gray-200/80">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo setPage={setPage} />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map(item => <NavLink key={item} pageName={item} currentPage={currentPage} setPage={setPage} />)}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-offset-white focus:ring-primary transition-colors duration-300 mr-2"
                aria-label="Search"
              >
                <SearchIcon className="h-6 w-6" />
              </button>
              <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-offset-white focus:ring-primary transition-colors duration-300 mr-2"
                  aria-label="Toggle theme"
              >
                <span className="relative h-6 w-6 inline-flex items-center justify-center overflow-hidden">
                  <SunIcon className={`h-6 w-6 transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} />
                  <MoonIcon className={`h-6 w-6 absolute transition-all duration-500 ease-in-out transform ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'}`} />
                </span>
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10"
                >
                  {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden pb-4 flex flex-col items-center space-y-2">
              {navItems.map(item => <NavLink key={item} pageName={item} currentPage={currentPage} setPage={setPage} onClick={() => setIsOpen(false)} />)}
            </div>
          )}
        </nav>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} navigateTo={setPage} />
    </>
  );
};

export default Navbar;