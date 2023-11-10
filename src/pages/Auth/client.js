import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ymglbomsuzadqlnyuvpy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZ2xib21zdXphZHFsbnl1dnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NTI2MDYsImV4cCI6MjAxNTIyODYwNn0.J4f5Xa6kYTONWY5iMmn2hTfYUaiGASssdhk4ooflkAk";

export const supabase = createClient(supabaseUrl, supabaseKey);
