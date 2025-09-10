// Supabase Configuration
export const supabaseConfig = {
  url: 'https://eismgkescnhccbxmvvch.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpc21na2VzY25oY2NieG12dmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0ODc4NzQsImV4cCI6MjA3MTA2Mzg3NH0.ybeR82bJRXPfumVIMHNrXwAkTLj_0y0I2HV6GRqhtH4',
  serviceRoleKey: 'sb_secret_M9nATlcDzRjjumZXwAccaQ_5_RXGEFg'
};

// Environment variables (fallback to config if env vars not available)
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || supabaseConfig.url;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || supabaseConfig.anonKey;
export const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || supabaseConfig.serviceRoleKey;
