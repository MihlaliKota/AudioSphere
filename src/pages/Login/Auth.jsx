import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./Auth.css";

const supabase = createClient(
  "https://kseelwrthsxzdpawaurv.supabase.co",
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZWVsd3J0aHN4emRwYXdhdXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMzUzMzAsImV4cCI6MjAxNDcxMTMzMH0.anI3qWt4RnDHaZdmxF7VNuIgtFOUIdVw-Tgr277JQfI"
);

const Login = () => (
  <div className="Auth">
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["github"]}
    />
  </div>
);

export default Login;
