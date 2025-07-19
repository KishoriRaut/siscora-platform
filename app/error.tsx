'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, AlertCircle, Terminal } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Log the error to an error reporting service
    console.error('Error boundary caught:', error);
    
    // You can also send the error to an error tracking service like Sentry, LogRocket, etc.
    // Example: captureException(error);
    
  }, [error]);

  const handleRetry = () => {
    // Attempt to recover by trying to re-render the segment
    reset();
  };

  // Don't render anything on the server
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
          {/* Error Header */}
          <div className="px-6 py-5 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/30">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-10 w-10 text-red-500 dark:text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-red-800 dark:text-red-200">
                  Oops! Something went wrong
                </h1>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  {error.message || 'An unexpected error occurred while loading this page.'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Error Content */}
          <div className="px-6 py-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      This error has been automatically reported to our team. If the problem persists, please try again later.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go to homepage
                </Link>
              </div>
              
              {/* Error Details - Collapsible */}
              <details className="mt-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <summary className="flex items-center justify-between p-3 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <Terminal className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Technical Details</span>
                  </div>
                  <svg className="h-5 w-5 text-gray-500 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="overflow-x-auto">
                    <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto max-h-60 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                      <code>
                        {error.stack || 'No stack trace available'}
                        {error.digest && `\n\nDigest: ${error.digest}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </details>
              
              {/* Support Information */}
              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Need help?{' '}
                  <a 
                    href="mailto:support@example.com" 
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    Contact support
                  </a>{' '}
                  or check our{' '}
                  <Link 
                    href="/help" 
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    help center
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
