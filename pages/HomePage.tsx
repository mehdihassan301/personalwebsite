import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { AIIcon, WebDevIcon, VibeCodeIcon } from '../components/Icons';
import { portfolioItems } from '../constants';

interface HomePageProps {
  setPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const featuredProjects = portfolioItems.slice(0, 3);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      const sensitivity = 15; // Adjust for more/less parallax effect
      setParallaxOffset({ x: -x * sensitivity, y: -y * sensitivity });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const whyChooseUsItems = [
    {
      icon: WebDevIcon,
      title: 'Modern & Reliable Tech',
      description: 'We use the latest, most reliable technologies to build solutions that are fast, secure, and future-proof.',
    },
    {
      icon: VibeCodeIcon,
      title: 'User-Centric Design',
      description: 'Our design philosophy puts the user first, resulting in intuitive, beautiful, and enjoyable digital experiences.',
    },
    {
      icon: AIIcon,
      title: 'Results-Driven Solutions',
      description: 'We focus on building practical tools that solve real-world business problems and deliver measurable results.',
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full w-full h-full object-cover z-0"
          src="https://cdn.coverr.co/videos/coverr-abstract-lines-of-light-6447/1080p.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-dark/70 z-1"></div>
        <div 
          className="relative z-10 max-w-4xl animate-fade-in-up transition-transform duration-300 ease-out"
          style={{ transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            ProbSolv Tech Agency
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-accent font-medium tracking-wider">
            Web Development • Vibe-Coded Apps • AI Automations
          </p>
          <p className="mt-8 max-w-2xl mx-auto text-gray-300 md:text-xl">
            We Build Digital Systems That Run Your Business.
          </p>
          <button
            onClick={() => setPage('Services')}
            className="mt-10 px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              ProbSolv builds modern digital solutions—from business websites to vibe-coded apps and AI automation. We help brands scale using smart technology, clean UI, and automated workflows. Our passion is turning complex problems into elegant, effective digital systems that empower your business to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why ProbSolv Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose ProbSolv?</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12">
            We combine cutting-edge technology with user-focused design to deliver solutions that drive real business results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {whyChooseUsItems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-primary hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-accent mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPage('Services')}
            className="mt-12 px-8 py-3 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-300"
          >
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12">
                Here's a glimpse of the quality and creativity we bring to our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredProjects.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setPage('Portfolio')}
                        className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 dark:focus:ring-offset-dark focus:ring-offset-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:-translate-y-2"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                            <p className="text-accent text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.category}</p>
                        </div>
                    </button>
                ))}
            </div>
            <button
                onClick={() => setPage('Portfolio')}
                className="mt-12 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
                View Full Portfolio
            </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;