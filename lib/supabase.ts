import { createClient as createBrowserClient } from './supabase/client';

export const supabase = createBrowserClient();

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
