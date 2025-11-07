import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '../components/Icons';

const faqs = [
  {
    question: 'What is your development process like?',
    answer: 'We follow an agile methodology that starts with a deep discovery phase to understand your goals. From there, we move to UI/UX design, development sprints with regular check-ins, rigorous testing, and finally, a seamless deployment. We believe in collaboration and keep you in the loop every step of the way.',
  },
  {
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary depending on the scope, complexity, and technologies involved. Our starter websites begin around $2,500, while more complex apps and AI automations are custom-quoted. We provide detailed, transparent proposals after our initial consultation. Check out our Pricing page for more details.',
  },
  {
    question: 'How long will it take to build my website/app?',
    answer: 'Timelines depend on the project size. A simple landing page can be ready in as little as two weeks, a standard multi-page website typically takes 4-8 weeks, and complex applications or AI integrations can take several months. We always provide a project timeline with key milestones in our proposal.',
  },
  {
    question: 'Do you offer support after the project is launched?',
    answer: 'Absolutely. We offer various support and maintenance packages to ensure your digital asset remains secure, updated, and performing optimally. We believe in building long-term partnerships, not just one-off projects.',
  },
];

// Custom component for the count-up animation
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; inView: boolean }> = ({ end, duration = 2000, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out quint function for a smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 5);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
         setCount(end); // Ensure it ends on the exact number
      }
    };

    requestAnimationFrame(step);

  }, [inView, end, duration]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
};


const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  
    return () => {
      if (statsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">About ProbSolv</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We are a team of passionate designers, developers, and strategists dedicated to building the future of digital experiences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
            <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to empower businesses by creating intelligent, beautiful, and automated digital systems. We believe that smart technology and great design are the keys to unlocking sustainable growth and competitive advantage in any industry.
            </p>
            </div>

            <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                We operate on three core principles: <strong className="text-primary dark:text-accent">Problem-First Thinking</strong>, where we deeply understand the challenge before building the solution; <strong className="text-primary dark:text-accent">Aesthetic Excellence</strong>, because we believe great products should feel amazing to use; and <strong className="text-primary dark:text-accent">Partnership Over Process</strong>, focusing on collaborative relationships with our clients to achieve shared goals.
            </p>
            </div>

            <div ref={statsRef} className="grid md:grid-cols-3 gap-8 text-center pt-8">
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary">
                    <CountUp end={100} inView={statsInView} suffix="+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Projects Launched</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary">
                    <CountUp end={50} inView={statsInView} suffix="+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary">
                    <CountUp end={1} inView={statsInView} suffix="M+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">End Users Impacted</p>
              </div>
            </div>
        </div>
        
        {/* FAQ Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-white/10 rounded-lg bg-white dark:bg-white/5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left p-6"
                  >
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                    <ChevronDownIcon className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;