'use client';

import { useState } from 'react';
import { FunnelIcon, Squares2X2Icon, ListBulletIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import ToolCard from '@/components/ToolCard';

type Tool = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular: boolean;
  features: string[];
};

const tools: Tool[] = [
  {
    id: 1,
    name: 'SaaS Platform Pro',
    description: 'Comprehensive business management solution with all the tools you need to streamline your operations and boost productivity.',
    price: 'Starting at $99/month',
    category: 'Business',
    popular: true,
    features: [
      'User & Role Management',
      'Advanced Analytics',
      'API Access',
      '24/7 Support',
      'Custom Branding',
      'Unlimited Projects'
    ],
  },
  {
    id: 2,
    name: 'Cloud Storage',
    description: 'Secure and scalable cloud storage solution designed to meet all your business data storage needs with enterprise-grade security.',
    price: 'Starting at $49/month',
    category: 'Storage',
    popular: true,
    features: [
      '1TB Storage',
      'Advanced Security',
      'File Versioning',
      'Team Collaboration',
      'Mobile Access',
      '99.9% Uptime'
    ],
  },
  {
    id: 3,
    name: 'Analytics Suite',
    description: 'Powerful analytics platform that transforms your data into actionable insights for better business decisions.',
    price: 'Starting at $79/month',
    category: 'Analytics',
    popular: false,
    features: [
      'Real-time Dashboards',
      'Custom Reports',
      'Data Export',
      'Team Sharing',
      'API Integration',
      'Predictive Analytics'
    ],
  },
  {
    id: 4,
    name: 'CRM Pro',
    description: 'Complete customer relationship management solution to manage your sales pipeline and customer interactions effectively.',
    price: 'Starting at $129/month',
    category: 'Business',
    popular: true,
    features: [
      'Contact Management',
      'Sales Pipeline',
      'Email Marketing',
      'Task Automation',
      'Team Collaboration',
      'Mobile App'
    ],
  },
  {
    id: 5,
    name: 'Marketing Automation',
    description: 'Automate your marketing campaigns and customer engagement with our powerful marketing automation tools.',
    price: 'Starting at $149/month',
    category: 'Marketing',
    popular: false,
    features: [
      'Email Campaigns',
      'Lead Scoring',
      'Customer Segmentation',
      'A/B Testing',
      'ROI Tracking',
      'Marketing Analytics'
    ],
  },
  {
    id: 6,
    name: 'E-commerce Platform',
    description: 'Everything you need to launch, manage, and grow your online store with ease.',
    price: 'Starting at $199/month',
    category: 'E-commerce',
    popular: true,
    features: [
      'Unlimited Products',
      'Secure Checkout',
      'Inventory Management',
      'Mobile Responsive',
      'SEO Tools',
      '24/7 Support'
    ],
  },
];

const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)))];

import HeroSection from '@/components/HeroSection';

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const popularTools = tools.filter(tool => tool.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Our Tools & Solutions</span>
              <span className="block text-indigo-200 text-3xl sm:text-4xl mt-2 font-bold">
                For Your Business
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FunnelIcon className="h-5 w-5 mr-2 text-gray-500" />
              Filters
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
              title="Grid view"
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
              title="List view"
            >
              <ListBulletIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Popular Tools */}
        {selectedCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {popularTools.slice(0, 3).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}

        {/* All Tools */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Tools' : selectedCategory}
            </h2>
            <p className="text-sm text-gray-500">
              {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTools.slice(0, 3).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTools.slice(0, 3).map((tool) => (
                <div key={tool.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                        <p className="mt-1 text-gray-500">{tool.description}</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {tool.category}
                          </span>
                          {tool.popular && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <p className="text-2xl font-bold text-gray-900">{tool.price}</p>
                        <a
                          href="#"
                          className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">Contact our sales team today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Sales
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
