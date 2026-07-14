import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define standard types for your CMS
export type HomepageContent = {
  hero_headline: string;
  hero_subheadline: string;
  hero_image_url: string;
  stats_churches: string;
  stats_pastors: string;
  stats_lives: string;
  stats_countries: string;
};
