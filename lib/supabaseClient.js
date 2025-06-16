import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dcvlixqciohushexnxyd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdmxpeHFjaW9odXNoZXhubHgiLCJhdWQiOiJzdXBhYmFhcyIsImlhdCI6MTY4NzEyMzgzMywiZXhwIjoxOTAzNzgwODMzfQ.oXD97c2ZrA85DrzEpiGPP1lkWcBa2iLv5Gv4Qd0tceM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
