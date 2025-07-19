import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    'https://bshtwgqehwvljkvaqsie.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaHR3Z3FlaHd2bGprdmFxc2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Njk4MTYsImV4cCI6MjA2NzA0NTgxNn0.YKGG3mrGidnzIcxPI5FKNZlscjANVxeP2qL9HGM6RyU'
  );
}
