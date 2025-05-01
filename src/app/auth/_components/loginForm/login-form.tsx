"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const LoginForm = () => {
  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);

      toast("Signing in...", {
        description: "Please wait while we sign you in.",
        duration: 2000,
        style: { backgroundColor: "black", color: "white" },
      });
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/30 via-white to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Welcome to SystemDesignPro
          </h2>
          <p className="mt-3 text-gray-600">
            Start improving your system design skills today
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-white">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 hover:text-white hover:cursor-pointer"
              onClick={() => handleSignIn("google")}
            >
              <Mail className="h-5 w-5" />
              Sign in with Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 hover:text-white hover:cursor-pointer"
              onClick={() => handleSignIn("gitHub")}
            >
              <Github className="h-5 w-5" />
              Sign in with GitHub
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 text-center">
              By signing in, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[80%] top-[25%] h-64 w-64 -translate-x-1/2 rounded-full bg-brand-100/20 blur-3xl" />
          <div className="absolute left-[20%] top-[40%] h-64 w-64 -translate-x-1/2 rounded-full bg-brand-200/20 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
