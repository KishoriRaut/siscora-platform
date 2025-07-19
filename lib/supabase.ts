import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bshtwgqehwvljkvaqsie.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaHR3Z3FlaHd2bGprdmFxc2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Njk4MTYsImV4cCI6MjA2NzA0NTgxNn0.YKGG3mrGidnzIcxPI5FKNZlscjANVxeP2qL9HGM6RyU';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Export types for TypeScript
export type { Session, User } from '@supabase/supabase-js';

// Export auth helpers
export const {
  auth: {
    signInWithOtp: signInWithOtp,
    signInWithPassword: signInWithPassword,
    signOut: signOut,
    updateUser: updateUser,
    resetPasswordForEmail: resetPasswordForEmail,
  },
} = supabase;
