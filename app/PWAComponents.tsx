'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the PWA components with no SSR
const PWAInstallPrompt = dynamic(
  () => import('./pwa-install-prompt').then(mod => mod.PWAInstallPrompt),
  { ssr: false, loading: () => null }
);

const PWAInstallHandler = dynamic(
  () => import('./pwa-client').then(mod => mod.default),
  { ssr: false, loading: () => null }
);

export default function PWAComponents() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only render on client-side
    setIsMounted(true);
  }, []);

  // Don't render anything during server-side rendering
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PWAInstallPrompt />
      <PWAInstallHandler />
    </>
  );
}
