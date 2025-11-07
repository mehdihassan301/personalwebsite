import React, { useState, useEffect, useRef } from 'react';
import { Page, Service } from '../types';

interface ServiceDetailPageProps {
  service: Service;
  setPage: (page: Page) => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, setPage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, service.process.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the vertical center
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [service.process]);


  const handleStepClick = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <img src={service.heroImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">{service.title}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">{service.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Progress Indicator Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Service Process</h3>
                <ul className="space-y-1">
                    {service.process.map((p, i) => (
                        <li key={i}>
                            <button 
                                onClick={() => handleStepClick(i)} 
                                className="w-full text-left flex items-center p-2 rounded-lg transition-colors duration-200"
                            >
                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 bg-white dark:bg-dark mr-3 flex-shrink-0" style={{borderColor: activeStep >= i ? 'var(--color-primary)' : 'currentColor'}}>
                                    {activeStep >= i && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                                </div>
                                <span className={`font-medium ${activeStep === i ? 'text-primary dark:text-accent' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>{p.step}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-6">
            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary dark:text-accent">{benefit}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Step-by-Step Process</h2>
              <div className="space-y-6">
                {service.process.map((p, i) => (
                  // FIX: The ref callback was implicitly returning the element, which is not allowed. Changed the arrow function to use a block body to ensure it returns void.
                  <div key={i} ref={(el) => { sectionRefs.current[i] = el; }} className="flex scroll-mt-24">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full text-primary font-bold">
                          {i + 1}
                        </div>
                      </div>
                      {i < service.process.length - 1 && <div className="w-px h-full bg-primary/30"></div>}
                    </div>
                    <div className="pb-8">
                      <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{p.step}</p>
                      <p className="text-gray-600 dark:text-gray-400">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Us */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why ProbSolv?</h2>
              <div className="space-y-6">
                {service.whyUs.map((reason, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Contact Form Sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg text-center">
                <p className="font-semibold text-primary">Guarantee: Elite-quality delivery with revisions until satisfaction.</p>
                <p className="text-sm text-accent mt-2">Plus, a 7-Day Money-Back Promise.</p>
              </div>
              <div className="bg-white dark:bg-white/5 p-6 rounded-lg border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Start Your Project</h3>
                {formSubmitted ? (
                    <div className="text-center p-4 bg-green-500/20 text-green-400 dark:text-green-300 rounded-lg">
                        <h4 className="font-bold">Thank You!</h4>
                        <p>We've received your request and will be in touch shortly.</p>
                    </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" required className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary" />
                    <input type="email" placeholder="Your Email" required className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary" />
                    <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary"></textarea>
                    <button type="submit" className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-purple-600 transition-colors duration-300">
                      Request a Quote
                    </button>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;