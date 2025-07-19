'use client';

import { SessionProvider } from 'next-auth/react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@/lib/supabase/client';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabaseClient = createClient();

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <SessionProvider>{children}</SessionProvider>
    </SessionContextProvider>
  );
}
