import React from 'react';
import { Page } from '../types';
import { blogPosts } from '../constants';
import AdPlaceholder from '../components/AdPlaceholder';
import { ArrowRightIcon } from '../components/Icons';

interface BlogPageProps {
  setPage: (page: Page, id?: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">ProbSolv Insights</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Our expert analysis on technology, design, and the future of digital business.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post, index) => (
            <React.Fragment key={post.id}>
              <div 
                className="group grid md:grid-cols-5 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <button onClick={() => setPage('BlogPost', post.id)} className="block w-full overflow-hidden rounded-lg">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </button>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm text-primary dark:text-accent font-semibold mb-2">{post.category}</p>
                  <button onClick={() => setPage('BlogPost', post.id)}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 text-left">{post.title}</h2>
                  </button>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                    <span>By {post.author}</span> &bull; <span>{post.date}</span>
                  </div>
                   <button onClick={() => setPage('BlogPost', post.id)} className="mt-4 inline-flex items-center font-semibold text-primary dark:text-accent">
                    Read More <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              {/* AdSense Placeholder after the first post */}
              {index === 0 && <AdPlaceholder />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
