'use client';

import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
