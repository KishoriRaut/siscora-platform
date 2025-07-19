'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from './service-worker-registration';

export default function PWAInstallHandler() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client
    setIsClient(true);

    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      console.warn('Service workers are not supported in this environment');
      return;
    }

    // Register service worker
    register({
      onSuccess: (registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      onUpdate: (registration) => {
        console.log('New content is available; please refresh.');
        // You could show a toast or notification here to inform the user
        // that there's an update available
      },
      onError: (error: Error) => {
        console.error('Error during service worker registration:', error);
        // You could show an error message to the user here if needed
      }
    });

    // Handle app install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      
      // Stash the event so it can be triggered later
      const deferredPrompt = e as any;
      console.log('App install prompt available');
      
      // The actual install prompt is now handled by the PWAInstallPrompt component
    };

    // Handle app installed event
    const handleAppInstalled = () => {
      console.log('App was installed');
      // You might want to track installations or show a thank you message
    };

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Clean up event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [router]);

  return null; // This component doesn't render anything
}
