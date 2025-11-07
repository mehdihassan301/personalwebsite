import React, { useState } from 'react';
import { Page } from '../types';
import { serviceDetails } from '../constants';
import { ChevronDownIcon } from '../components/Icons';

interface ServicesPageProps {
  setPage: (page: Page, serviceId?: string) => void;
}

const ServiceCard: React.FC<{ service: typeof serviceDetails[0], isOpen: boolean, onToggle: () => void, setPage: (page: Page, serviceId?: string) => void }> = ({ service, isOpen, onToggle, setPage }) => {
  return (
    <div className="border dark:border-white/10 border-gray-200 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20">
      <div className="p-4 sm:p-6 md:p-8 cursor-pointer flex justify-between items-center" onClick={onToggle}>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <service.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{service.description}</p>
          </div>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ml-4 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-4 border-t dark:border-white/10 border-gray-200">
          
          <div className="grid md:grid-cols-2 md:gap-x-12">
            <div className="order-2 md:order-1 mt-6 md:mt-0">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base">{service.overview}</p>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Process:</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                {service.process.slice(0, 5).map(p => <li key={p.step}><strong>{p.step}:</strong> {p.description}</li>)}
              </ol>
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Deliverables:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                {service.deliverables.map(d => <li key={d}>{d}</li>)}
              </ul>
              <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg text-center mt-6">
                <p className="font-semibold text-primary text-sm sm:text-base">Guarantee: Elite-quality delivery with revisions until satisfaction.</p>
                <p className="text-sm text-accent">Plus, a 7-Day Money-Back Promise.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
             <button
              onClick={() => setPage('ServiceDetail', service.id)}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-300"
            >
              Learn More
            </button>
            <button
              onClick={() => setPage('Contact')}
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Build With ProbSolv
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};


const ServicesPage: React.FC<ServicesPageProps> = ({ setPage }) => {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We provide cutting-edge digital solutions to elevate your business.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {serviceDetails.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            isOpen={openService === service.id} 
            onToggle={() => toggleService(service.id)}
            setPage={setPage}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;