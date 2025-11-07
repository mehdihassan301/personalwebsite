import React, { useState } from 'react';
import { serviceDetails } from '../constants';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Have a project in mind? Let's talk. We're here to help you turn your ideas into reality.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 md:p-12">
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-primary dark:text-accent mb-4">Thank you for your message!</h2>
            <p className="text-gray-700 dark:text-gray-300">We've received your submission and will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary transition-colors"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary transition-colors"/>
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Type</label>
              <select name="projectType" id="projectType" required value={formState.projectType} onChange={handleChange} className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition-colors">
                <option value="" disabled>Select a service...</option>
                {serviceDetails.map(service => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows={5} required value={formState.message} onChange={handleChange} className="w-full bg-gray-100 dark:bg-dark/50 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary focus:border-primary transition-colors"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;