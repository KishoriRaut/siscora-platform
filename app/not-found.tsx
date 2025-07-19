'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, LifeBuoy, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
          {/* 404 Header */}
          <div className="px-6 py-5 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/50">
            <div className="flex flex-col items-center text-center">
              <div className="text-8xl font-black text-indigo-600 dark:text-indigo-400 font-mono">404</div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                Oops! Page not found
              </h1>
              <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>
          
          {/* 404 Content */}
          <div className="px-6 py-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-6">
                <div className="text-4xl text-indigo-600 dark:text-indigo-400">?</div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                We couldn't find the page you were looking for. The page might have been moved, deleted, or you may have mistyped the address.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </button>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  Popular Links
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                  <Link
                    href="/search"
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Search className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Search</span>
                  </Link>
                  
                  <Link
                    href="/help"
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <LifeBuoy className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Help Center</span>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 sm:col-span-2"
                  >
                    <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Contact Support</span>
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Still can't find what you're looking for?{' '}
                  <a 
                    href="mailto:support@example.com" 
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    Email us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
