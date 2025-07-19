'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business Operations',
    excerpt: 'Discover how AI is transforming business operations and what it means for your company.',
    category: 'AI & Technology',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: '/images/blog/ai-business.jpg',
    url: '/blog/ai-in-business'
  },
  {
    id: 2,
    title: '10 Tips for Digital Transformation Success',
    excerpt: 'Learn the key strategies for a successful digital transformation journey in your organization.',
    category: 'Digital Transformation',
    date: 'May 28, 2023',
    readTime: '7 min read',
    image: '/images/blog/digital-transformation.jpg',
    url: '/blog/digital-transformation-tips'
  },
  {
    id: 3,
    title: 'Enhancing Customer Experience with Technology',
    excerpt: 'Explore how technology can be leveraged to create exceptional customer experiences.',
    category: 'Customer Experience',
    date: 'May 10, 2023',
    readTime: '6 min read',
    image: '/images/blog/customer-experience.jpg',
    url: '/blog/customer-experience-tech'
  },
  {
    id: 4,
    title: 'The Rise of Remote Work Tools',
    excerpt: 'Discover the best tools and practices for managing remote teams effectively.',
    category: 'Remote Work',
    date: 'April 22, 2023',
    readTime: '4 min read',
    image: '/images/blog/remote-work.jpg',
    url: '/blog/remote-work-tools'
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for 2023',
    excerpt: 'Stay protected with these essential cybersecurity practices for modern businesses.',
    category: 'Security',
    date: 'April 5, 2023',
    readTime: '8 min read',
    image: '/images/blog/cybersecurity.jpg',
    url: '/blog/cybersecurity-2023'
  },
  {
    id: 6,
    title: 'Data Analytics for Business Growth',
    excerpt: 'How data-driven decision making can fuel your business growth in 2023 and beyond.',
    category: 'Data & Analytics',
    date: 'March 18, 2023',
    readTime: '6 min read',
    image: '/images/blog/data-analytics.jpg',
    url: '/blog/data-analytics-growth'
  }
];

const categories = [
  'All',
  'AI & Technology',
  'Digital Transformation',
  'Customer Experience',
  'Remote Work',
  'Security',
  'Data & Analytics'
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(3);
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights & News
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Stay updated with the latest trends, news, and insights in technology and business
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisiblePosts(3);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0 h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.category}
                  </p>
                  <Link href={post.url} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mt-0.5" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {visiblePosts < filteredPosts.length && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Load More Articles
              <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-base font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
