import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kseelwrthsxzdpawaurv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZWVsd3J0aHN4emRwYXdhdXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMzUzMzAsImV4cCI6MjAxNDcxMTMzMH0.anI3qWt4RnDHaZdmxF7VNuIgtFOUIdVw-Tgr277JQfI";

export const supabase = createClient(supabaseUrl, supabaseKey);
