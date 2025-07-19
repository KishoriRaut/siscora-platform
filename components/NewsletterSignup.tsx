'use client';

import { useState, useEffect } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('mcjs')) {
      const script = document.createElement('script');
      script.id = 'mcjs';
      script.async = true;
      script.src = 'https://chimpstatic.com/mcjs-connected/js/users/3eaa5dac5172fda0665352253/8eedee63f72118f2709faaf90.js';
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would make an API call here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      
      // if (!response.ok) throw new Error('Failed to subscribe');
      
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-6 text-indigo-200">
            Subscribe to our newsletter for the latest updates, news, and exclusive offers.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-indigo-200">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600">
                <EnvelopeIcon className="h-6 w-6" />
              </div>
              <p className="ml-3 text-sm font-medium">
                Join <span className="text-white font-semibold">10,000+</span> subscribers
              </p>
            </div>
            
            <div className="flex items-center text-indigo-200">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-3 text-sm font-medium">
                Get updates <span className="text-white font-semibold">every week</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md ${
                status === 'error' ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                  status === 'loading' || status === 'success'
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : status === 'success' ? (
                  'Subscribed!'
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>
          
          {(status === 'success' || status === 'error') && (
            <div className={`mt-3 text-sm font-medium rounded-md p-3 ${
              status === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}
          
          <p className="mt-3 text-sm text-indigo-200">
            We care about your data. Read our{' '}
            <a href="/privacy" className="text-white font-medium underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
