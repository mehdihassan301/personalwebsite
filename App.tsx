import React, { useState, useEffect } from 'react';
import { Page, Theme } from './types';
import Navbar from './components/Navbar';
import AnimatedOrbs from './components/AnimatedOrbs';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CareersPage from './pages/CareersPage';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import BackToTopButton from './components/BackToTopButton';
import StartProjectButton from './components/StartProjectButton';
import { serviceDetails, blogPosts } from './constants';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('Home');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<string | null>(null);


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navigateTo = (targetPage: Page, id?: string) => {
    setActiveService(null);
    setActivePost(null);

    if (targetPage === 'ServiceDetail' && id) {
      setActiveService(id);
    }
    if (targetPage === 'BlogPost' && id) {
      setActivePost(id);
    }

    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage setPage={navigateTo} />;
      case 'Services':
        return <ServicesPage setPage={navigateTo} />;
      case 'ServiceDetail':
        const service = serviceDetails.find(s => s.id === activeService);
        return service ? <ServiceDetailPage service={service} setPage={navigateTo} /> : <ServicesPage setPage={navigateTo} />;
      case 'Pricing':
        return <PricingPage />;
      case 'Portfolio':
        return <PortfolioPage setPage={navigateTo} />;
      case 'About':
        return <AboutPage />;
      case 'Testimonials':
        return <TestimonialsPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Blog':
        return <BlogPage setPage={navigateTo} />;
      case 'BlogPost':
        const post = blogPosts.find(p => p.id === activePost);
        return post ? <BlogPostPage post={post} setPage={navigateTo} /> : <BlogPage setPage={navigateTo} />;
      case 'PrivacyPolicy':
        return <PrivacyPolicyPage />;
      case 'TermsOfService':
        return <TermsOfServicePage />;
      case 'Careers':
        return <CareersPage setPage={navigateTo} />;
      default:
        return <HomePage setPage={navigateTo} />;
    }
  };

  return (
    <div className="bg-white dark:bg-dark text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500">
      <AnimatedOrbs theme={theme} />
      <div className="relative z-10">
        <Navbar currentPage={page} setPage={navigateTo} theme={theme} setTheme={setTheme} />
        <main className="overflow-x-hidden">
          <div key={`${page}-${activeService}-${activePost}`} className="animate-fade-in">
            {renderPage()}
          </div>
        </main>
        <Footer setPage={navigateTo} />
      </div>
      <CookieConsentBanner setPage={navigateTo} />
      <BackToTopButton />
      <StartProjectButton setPage={navigateTo} />
    </div>
  );
};

export default App;