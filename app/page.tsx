'use client';

import { useState, useEffect } from 'react';
import ClientLayout from './client-layout';
import { 
  CpuChipIcon, 
  CheckCircleIcon,
  ChartPieIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';

// Products data
const products = [
  {
    name: 'Siscora AI',
    description: 'Advanced AI solutions for business automation and intelligence',
    icon: CpuChipIcon,
    href: 'https://ai.siscora.com',
    category: 'ai',
    features: [
      'Natural Language Processing',
      'Predictive Analytics',
      'Computer Vision',
      'Chatbot Integration'
    ]
  },
  {
    name: 'Siscora Properties',
    description: 'Comprehensive property management solutions',
    icon: ChartPieIcon,
    href: 'https://properties.siscora.com',
    category: 'property',
    features: [
      'Property Listings',
      'Tenant Management',
      'Maintenance Tracking',
      'Financial Reporting'
    ]
  },
  {
    name: 'Siscora Cloud',
    description: 'Secure and scalable cloud infrastructure',
    icon: LightBulbIcon,
    href: 'https://cloud.siscora.com',
    category: 'cloud',
    features: [
      '99.9% Uptime',
      'Auto-scaling',
      'Data Encryption',
      '24/7 Support'
    ]
  }
];

const features = [
  {
    name: 'AI-Powered Solutions',
    description: 'Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights.',
    icon: CpuChipIcon,
  },
  {
    name: 'Data Driven',
    description: 'Make informed decisions with powerful analytics and reporting tools.',
    icon: ChartPieIcon,
  },
  {
    name: 'User Focused',
    description: 'Intuitive interfaces designed with the end-user in mind for maximum productivity.',
    icon: UserGroupIcon,
  },
  {
    name: 'Results Oriented',
    description: 'Delivering measurable business outcomes through technology solutions.',
    icon: CheckCircleIcon,
  },
];

const stats = [
  { label: 'Businesses Transformed', value: '500+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Satisfied Clients', value: '98%' },
  { label: 'Years of Experience', value: '10+' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <ClientLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our comprehensive suite of tools and services is designed to help your business thrive.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
{/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Tools & Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Powerful tools designed to streamline your business operations
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex-1 bg-white p-6 flex flex-col">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">{product.name}</h3>
                        <p className="text-gray-500">{product.description}</p>
                        <ul className="space-y-2">
                          {product.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="ml-2 text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={product.href}
                          className="text-base font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                        >
                          Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Integrated Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Siscora?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 bg-indigo-800 rounded-xl p-8 mb-12">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '10,000+', label: 'Happy Customers' },
                { value: '95%', label: 'Client Retention' },
                { value: '24/7', label: 'Support' },
                { value: '10+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <dt className="text-4xl font-bold text-white">{stat.value}</dt>
                  <dd className="mt-2 text-lg font-medium text-indigo-200">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Proven Expertise',
                description: '10+ years of experience delivering successful projects with measurable results',
                icon: ChartPieIcon,
                color: 'bg-indigo-100 text-indigo-600'
              },
              {
                name: 'Innovation',
                description: 'Cutting-edge solutions using the latest technologies and best practices',
                icon: LightBulbIcon,
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                name: 'Customer Focus',
                description: 'Dedicated support and tailored solutions for your unique needs',
                icon: UserGroupIcon,
                color: 'bg-green-100 text-green-600'
              }
            ].map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Combined Testimonials and Client Showcase */}
      <Testimonials />

      {/* Newsletter Signup Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-2xl px-6 py-16 sm:p-16">
            <div className="max-w-xl mx-auto lg:max-w-none lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Stay updated</span>
                  <span className="block text-indigo-600">Subscribe to our newsletter</span>
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Get the latest news, product updates, and special offers delivered straight to your inbox.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-24"></div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-indigo-200">Get started with Siscora today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200"
            >
              Get Started
              <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      </div>
    </ClientLayout>
  );
}
