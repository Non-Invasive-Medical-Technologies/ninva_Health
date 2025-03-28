import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type AuthFormValues = z.infer<typeof formSchema>;

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleAuth = async (data: AuthFormValues) => {
    setIsLoading(true);
    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`
          }
        });

        if (signUpError) {
          toast.error(signUpError.message);
        } else {
          toast.success('Account created! Please check your email for verification.');
          form.reset({
            email: '',
            password: '',
          });
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

        if (signInError) {
          toast.error(signInError.message);
        } else {
          toast.success('Signed in successfully!');
          form.reset({
            email: '',
            password: '',
          });
          navigate('/profile');
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModeSwitch = () => {
    setIsSignUp(!isSignUp);
    form.reset({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/20 via-medical-secondary/20 to-medical-accent/20 animate-gradient-wave" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center space-y-6">
          <img
            src="/lovable-uploads/084aad43-bdcd-4659-b80e-63f9542f47c6.png"
            alt="Ninva Health"
            className="h-14 sm:h-16 mx-auto"
          />
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ninva font-display">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm text-muted-foreground font-text">
              {isSignUp 
                ? 'Sign up for a new account to get started' 
                : 'Sign in to your account to continue'}
            </p>
          </div>
        </div>

        <Card className="mt-6 sm:mt-8 bg-white/80 backdrop-blur-sm shadow-xl border-medical-primary/20">
          <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleAuth)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="name@company.com" 
                          className="bg-white/80"
                          disabled={isLoading}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          className="bg-white/80"
                          disabled={isLoading}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-ninva hover:bg-ninva/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-6 sm:mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground backdrop-blur-sm">
                    {isSignUp ? 'Already have an account?' : 'Need an account?'}
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <Button 
                  variant="ghost"
                  onClick={handleModeSwitch}
                  className="text-sm hover:text-ninva"
                >
                  {isSignUp ? 'Sign in here' : 'Sign up here'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
