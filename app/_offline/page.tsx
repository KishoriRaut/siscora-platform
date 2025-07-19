import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WifiOff, Home } from 'lucide-react';

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
            <WifiOff className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">You're Offline</h1>
        
        <p className="text-gray-600 dark:text-gray-300">
          It seems you're not connected to the internet. Please check your connection and try again.
        </p>
        
        <Button asChild className="mt-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
        </Button>
        
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Some features may be limited while offline. Reconnect to the internet for full functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
