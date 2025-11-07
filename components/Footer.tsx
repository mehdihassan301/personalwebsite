import React, { useState } from 'react';
import { TwitterIcon, LinkedInIcon, GitHubIcon, ArrowRightIcon } from './Icons';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribing ${email} to the newsletter.`);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000); // Reset after 3s
    }
  };

  const socialLinks = [
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { icon: GitHubIcon, href: '#', label: 'GitHub' },
  ];

  const footerLinks: { name: string; page: Page }[] = [
      { name: 'Careers', page: 'Careers'},
      { name: 'Privacy Policy', page: 'PrivacyPolicy' },
      { name: 'Terms of Service', page: 'TermsOfService' },
  ];

  return (
    <footer className="dark:bg-dark bg-gray-50 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side: Info & Socials */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-md">"We Build Digital Systems That Run Your Business.”</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  aria-label={social.label} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side: Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Join Our Newsletter</h4>
            <p className="mb-4 text-sm">Get the latest insights on tech, design, and AI.</p>
            {subscribed ? (
              <p className="text-green-500">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center max-w-sm">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-l-md p-2 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary transition-colors text-sm"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe to newsletter"
                  className="bg-primary text-white p-2 rounded-r-md hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center h-[42px] w-12"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            {footerLinks.map(link => (
                <button key={link.name} onClick={() => setPage(link.page)} className="hover:text-primary dark:hover:text-accent transition-colors">
                    {link.name}
                </button>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} ProbSolv Tech Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;