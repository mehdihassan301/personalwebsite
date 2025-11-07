import React from 'react';
import { Page, Post } from '../types';
import { blogPosts } from '../constants';
import AdPlaceholder from '../components/AdPlaceholder';
import { ArrowRightIcon } from '../components/Icons';


interface BlogPostPageProps {
  post: Post;
  setPage: (page: Page, id?: string) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, setPage }) => {
    const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

    // Split content for ad insertion
    const contentParts = post.content.split('<h3');
    const firstPart = contentParts[0];
    const restParts = contentParts.slice(1).map(p => '<h3' + p);


  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-accent font-semibold mb-2">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto">{post.title}</h1>
          <div className="text-md text-gray-300 mt-4">
            <span>By {post.author}</span> &bull; <span>{post.date}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <main className="col-span-12 lg:col-span-8">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-h3:text-gray-900 dark:prose-h3:text-white prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-primary dark:prose-a:text-accent">
                    <div dangerouslySetInnerHTML={{ __html: firstPart }} />
                    
                    {/* In-content Ad Placeholder */}
                    <AdPlaceholder />

                    <div dangerouslySetInnerHTML={{ __html: restParts.join('') }} />
                </div>
            </main>

            {/* Sidebar */}
            <aside className="col-span-12 lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Articles</h3>
                        <div className="space-y-4">
                            {relatedPosts.map(related => (
                                <button key={related.id} onClick={() => setPage('BlogPost', related.id)} className="group flex items-center space-x-4 text-left">
                                    <img src={related.image} alt={related.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">{related.title}</p>
                                        <span className="text-sm text-gray-500">{related.date}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Ad Placeholder */}
                    <AdPlaceholder />

                    <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary dark:text-accent mb-2">Have a project in mind?</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Let's turn your ideas into reality. We're here to help.</p>
                        <button onClick={() => setPage('Contact')} className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center">
                            <span>Get a Quote</span>
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
