import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { AuthLayout } from "@/components/AuthLayout";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Login response:", response);
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error("Login failed", err);
        return;
      }

      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  
  return (
    <AuthLayout title="Welcome Back" subtitle="Log in to access your wallet">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300 ml-1">Email</Label>
          <Input 
            placeholder="Enter your email" 
            className="bg-black/40 border-white/10 text-white h-12 rounded-xl focus-visible:ring-cyan-500/50"
            type="email"
            name="email"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <a href="#" className="text-xs text-cyan-400 hover:underline">Forgot?</a>
          </div>
          <Input 
            placeholder="Enter your password"
            type="password" 
            className="bg-black/40 border-white/10 text-white h-12 rounded-xl focus-visible:ring-cyan-500/50"
            name="password"
          />
        </div>
        <Button className="w-full h-12 mt-2 bg-cyan-700 hover:bg-cyan-800 text-gray-200 font-bold rounded-xl cursor-pointer"  type="submit">
          Sign In
        </Button>
        <p className="text-center text-sm text-gray-500 pt-2">
          Don't have an account? <a href="/signup" className="text-white font-semibold hover:text-cyan-400 transition-colors">Create one</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;