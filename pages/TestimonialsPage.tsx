import React from 'react';
import { testimonials } from '../constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
        ))}
    </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">What Our Clients Say</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We're proud to have built strong relationships and delivered results that speak for themselves.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col justify-between animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">
              “{testimonial.message}”
            </blockquote>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
                <StarRating rating={testimonial.stars} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;