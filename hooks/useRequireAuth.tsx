'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSupabase } from './useSupabase';

export function useRequireAuth(redirectUrl = '/auth/signin') {
  const { user, isLoading } = useSupabase();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        const callbackUrl = searchParams.get('callbackUrl') || window.location.pathname;
        const redirect = `${redirectUrl}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
        router.push(redirect);
      } else {
        setIsAuthorized(true);
      }
    }
  }, [user, isLoading, router, redirectUrl, searchParams]);

  return { user, isLoading, isAuthorized };
}
