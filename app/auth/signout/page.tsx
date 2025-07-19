'use client';

import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SignOutPage() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Sign out from Supabase
        const supabase = createClient();
        await supabase.auth.signOut();
        
        // Sign out from NextAuth
        await signOut({ 
          redirect: false,
          callbackUrl: '/auth/signin'
        });
        
        // Redirect to sign-in page
        router.push('/auth/signin');
        router.refresh();
      } catch (error) {
        console.error('Error during sign out:', error);
      }
    };

    if (session) {
      handleSignOut();
    } else {
      router.push('/auth/signin');
    }
  }, [router, session]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Signing out...</p>
      </div>
    </div>
  );
}
