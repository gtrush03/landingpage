import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/supabase';

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database types
export interface AIStrategySubmission {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  country_code: string;
  custom_country_code?: string;
  email: string;
  company?: string;
  message?: string;
  created_at?: string;
  updated_at?: string;
  status?: string;
  source?: string;
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
}

export interface SubmissionStats {
  total_submissions: number;
  pending_count: number;
  contacted_count: number;
  completed_count: number;
  today_submissions: number;
  this_week_submissions: number;
  this_month_submissions: number;
}

// Form submission functions
export const submitAIStrategyForm = async (formData: Omit<AIStrategySubmission, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    // Add metadata
    const submissionData: AIStrategySubmission = {
      ...formData,
      source: 'ai_strategy_form',
      status: 'pending',
      ip_address: await getClientIP(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    };

    console.log('Submitting data to Supabase:', submissionData);

    const { data, error } = await supabase
      .from('ai_strategy_submissions')
      .insert([submissionData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to submit form: ${error.message}`);
    }

    console.log('Successfully submitted to Supabase:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

// Get client IP (simplified version)
const getClientIP = async (): Promise<string> => {
  try {
    // This is a simplified approach - in production you might want to use a service
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Could not get client IP:', error);
    return 'unknown';
  }
};

// Simple admin functions (for future use)
export const getAllSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('ai_strategy_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      throw new Error(`Failed to get submissions: ${error.message}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error getting submissions:', error);
    throw error;
  }
};

export const updateSubmissionStatus = async (id: string, status: string) => {
  try {
    const { data, error } = await supabase
      .from('ai_strategy_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      throw new Error(`Failed to update status: ${error.message}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }
};
