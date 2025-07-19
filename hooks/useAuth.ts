'use client';

import { useSession } from 'next-auth/react';

export function useAuth() {
  const { data: session, status, update } = useSession();
  const user = session?.user;
  const isAuthenticated = !!user;
  const isLoading = status === 'loading';

  return {
    user,
    isAuthenticated,
    isLoading,
    update,
  };
}
