'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Providers } from './providers';

// Import PWA components with no SSR
const PWAComponents = dynamic(
  () => import('./PWAComponents'),
  { ssr: false, loading: () => null }
);

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render client-only components on the server
  if (!isMounted) {
    return (
      <Providers>
        <div className="min-h-screen">{children}</div>
      </Providers>
    );
  }

  return (
    <Providers>
      {/* Render client-only components after hydration */}
      <PWAComponents />
      {children}
    </Providers>
  );
}
