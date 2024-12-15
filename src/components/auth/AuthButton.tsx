import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { LogIn, Apple } from "lucide-react";

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

  const signInWithApple = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "apple",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error) {
      toast.error("Error signing in with Apple");
      console.error("Error signing in with Apple:", error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
    } catch (error) {
      toast.error("Error signing out");
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={signInWithGoogle}
        disabled={loading}
      >
        <LogIn className="h-4 w-4" />
        Sign In with Google
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={signInWithApple}
        disabled={loading}
      >
        <Apple className="h-4 w-4" />
        Sign In with Apple
      </Button>
    </div>
  );
};