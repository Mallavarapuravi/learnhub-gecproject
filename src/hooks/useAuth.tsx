import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (data: { first_name?: string; last_name?: string; bio?: string }) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Setting up auth state listener...');
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      }
      console.log('Initial session check:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      console.log('Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    console.log('Attempting to sign up user:', email);
    setLoading(true);
    
    try {
      // First check if user already exists
      const { data: existingUser } = await supabase.auth.admin.getUserByEmail?.(email) || {};
      
      // Use a more reliable redirect URL
      const redirectUrl = `${window.location.origin}/login`;
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
          }
        }
      });

      if (error) {
        console.error('Signup error:', error);
        
        // Handle specific error cases
        if (error.message.includes('User already registered')) {
          toast.error('This email is already registered. Please try logging in instead.');
          return { error: null }; // Don't treat this as an error for UI purposes
        } else if (error.message.includes('Database error')) {
          toast.error('There was an issue creating your account. Please try again in a few moments.');
        } else if (error.message.includes('Invalid email')) {
          toast.error('Please enter a valid email address.');
        } else if (error.message.includes('Password')) {
          toast.error('Password must be at least 6 characters long.');
        } else {
          toast.error(error.message || 'Failed to create account. Please try again.');
        }
        return { error };
      }

      console.log('Signup response:', data);
      
      // Check if user was created successfully
      if (data.user) {
        if (!data.user.email_confirmed_at) {
          console.log('User created, email confirmation required');
          toast.success('Account created! Please check your email to confirm your account before logging in.');
        } else {
          console.log('User created and confirmed');
          toast.success('Account created successfully! You can now log in.');
        }
        return { error: null };
      } else {
        console.error('No user returned from signup');
        toast.error('Account creation failed. Please try again.');
        return { error: new Error('Failed to create user account') };
      }

    } catch (err: any) {
      console.error('Unexpected signup error:', err);
      toast.error('An unexpected error occurred. Please try again.');
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    console.log('Attempting to sign in user:', email);
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        
        // Handle specific error cases
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password. Please check your credentials and try again.');
        } else if (error.message.includes('Email not confirmed')) {
          toast.error('Please confirm your email address before logging in.');
        } else {
          toast.error(error.message || 'Failed to sign in. Please try again.');
        }
        return { error };
      }

      console.log('Sign in successful:', data);
      toast.success('Welcome back!');
      return { error: null };
    } catch (err: any) {
      console.error('Unexpected sign in error:', err);
      toast.error('An unexpected error occurred during sign in.');
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    console.log('Attempting to sign out');
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
        toast.error(error.message);
      } else {
        console.log('Sign out successful');
        toast.success('Signed out successfully');
      }
    } catch (err) {
      console.error('Unexpected sign out error:', err);
      toast.error('An unexpected error occurred during sign out');
    }
  };

  const updateProfile = async (data: { first_name?: string; last_name?: string; bio?: string }) => {
    if (!user) return { error: new Error('No user logged in') };

    console.log('Updating profile for user:', user.id);
    try {
      const { error } = await supabase
        .from('profiles')
        .update(data)
        .eq('id', user.id);

      if (error) {
        console.error('Profile update error:', error);
        toast.error('Failed to update profile');
        return { error };
      }

      console.log('Profile updated successfully');
      toast.success('Profile updated successfully');
      return { error: null };
    } catch (err) {
      console.error('Unexpected profile update error:', err);
      toast.error('An unexpected error occurred while updating profile');
      return { error: err };
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signUp,
      signIn,
      signOut,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
