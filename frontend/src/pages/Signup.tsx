import { Checkbox } from "@/components/ui/checkbox";
import { AuthLayout } from "@/components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Signup failed", errorData);
        return;
      }

      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join EdgePay and manage your finances with ease.">
      <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label className="text-gray-300 ml-1">username</Label>
            <Input className="bg-black/40 border-white/10 text-white h-11 rounded-xl" placeholder="Enter username" name="username" />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300 ml-1">Phone Number</Label>
            <Input className="bg-black/40 border-white/10 text-white h-11 rounded-xl" placeholder="Enter phone number" type="number" name="phone"/>
          </div>
        <div className="space-y-2">
          <Label className="text-gray-300 ml-1">Email Address</Label>
          <Input className="bg-black/40 border-white/10 text-white h-11 rounded-xl" placeholder="Enter email address" name="email" />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-300 ml-1">Password</Label>
          <Input className="bg-black/40 border-white/10 text-white h-11 rounded-xl" type="password" placeholder="Enter password" name="password"/>
        </div>
        
        <div className="flex items-start space-x-2 py-2">
          <Checkbox id="terms" className="mt-1 border-white/20 data-[state=checked]:bg-cyan-500" />
          <Label htmlFor="terms" className="text-xs text-gray-400 leading-tight cursor-pointer">
            I agree to the <span className="text-white">Terms of Service</span> and <span className="text-white">Privacy Policy</span>.
          </Label>
        </div>

        <Button className="w-full h-12 mt-2 bg-cyan-700 hover:bg-cyan-800 text-gray-200 font-bold rounded-xl cursor-pointer" type="submit">
          Create Account
        </Button>
        <p className="text-center text-sm text-gray-500 pt-2">
          Already have an account? <a href="/login" className="text-white font-semibold hover:text-cyan-400 transition-colors">Sign in</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;