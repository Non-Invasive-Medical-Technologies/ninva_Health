// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dvlanhpficohhiiqugzq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bGFuaHBmaWNvaGhpaXF1Z3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNzA0MTEsImV4cCI6MjA0OTg0NjQxMX0.-Lcfb3M-g58vJg9NGZf7MLb0A044Zf7f2jKX-U175s0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);