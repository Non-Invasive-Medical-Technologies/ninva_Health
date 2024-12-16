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
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
          alt="Ninva Health" 
          className="h-12 w-auto dark:hidden"
          onError={(e) => {
            console.log("Color logo failed to load");
            e.currentTarget.style.display = 'none';
          }} 
        />
        <img 
          src="/lovable-uploads/7c9de020-0246-4290-9031-2bc460fbff8a.png"
          alt="Ninva Health" 
          className="h-12 w-auto hidden dark:block"
          onError={(e) => {
            console.log("White logo failed to load");
            e.currentTarget.style.display = 'none';
          }} 
        />
        <div className="text-center">
          <h3 className="font-semibold tracking-tight text-2xl">Welcome back</h3>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        size="lg"
        className="w-full gap-2"
        onClick={signInWithGoogle}
        disabled={loading}
      >
        <LogIn className="h-4 w-4" />
        Sign In with Google
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        Sign in with Apple - Coming Soon
      </p>
      <div className="text-xs text-muted-foreground text-center space-x-2 mt-6">
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link to="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  );
};