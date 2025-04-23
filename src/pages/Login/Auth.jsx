import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./Auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const supabase = createClient(
  "https://xrcocrcbjzdubctpstzq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyY29jcmNianpkdWJjdHBzdHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzkyODUsImV4cCI6MjA2MDkxNTI4NX0.O1ehydWoyDCY2OM91bskMxPQ-Ej_XpqWaTX68k7AuXA"
);

const Login = () => {
  const goHome = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.hash.includes('access_token')) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          goHome("/home");
        }
      });
    }
  }, [location, goHome]);

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") goHome("/home");
  });

  return (
    <div className="Auth">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["github"]}
        redirectTo={window.location.origin}
      />
    </div>
  );
};

export default Login;