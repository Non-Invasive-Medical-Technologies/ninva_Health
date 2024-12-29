import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const AuthButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error) {
      toast.error("Error signing in with Google");
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Welcome back</h3>
        <p className="text-sm text-gray-500">
          Sign in to your account to continue
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          size="lg"
          className="w-full gap-2 relative py-6 text-gray-700 hover:text-gray-900 hover:border-medical-primary/30 hover:bg-medical-primary/5"
          onClick={signInWithGoogle}
          disabled={loading}
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-5 h-5 absolute left-4"
          />
          Sign in with Google
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full gap-2 relative py-6 text-gray-400 cursor-not-allowed"
          disabled
        >
          <img 
            src="https://www.apple.com/favicon.ico" 
            alt="Apple" 
            className="w-5 h-5 absolute left-4"
          />
          Sign in with Apple
          <span className="text-xs absolute right-4">Coming Soon</span>
        </Button>
      </div>

      <div className="text-xs text-gray-500 text-center space-y-4">
        <p>
          By continuing, you agree to our{' '}
          <Link to="/terms-of-service" className="text-medical-primary hover:underline">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link to="/privacy-policy" className="text-medical-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};