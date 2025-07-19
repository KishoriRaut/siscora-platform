'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function useRequireAuth(redirectUrl = '/auth/signin') {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`${redirectUrl}?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  }, [status, router, redirectUrl, callbackUrl]);

  return { session, status };
}
