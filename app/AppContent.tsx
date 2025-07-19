'use client';

import dynamic from 'next/dynamic';

// Import client components dynamically
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

export default function AppContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
