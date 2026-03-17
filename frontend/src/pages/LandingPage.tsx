import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeEuro } from "lucide-react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe 
} from "lucide-react";

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/[0.08] transition-all cursor-default group">
    <div className="mb-4 w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </Card>
);

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
        {/* Navbar */}
        <nav className='flex items-center justify-between px-8 py-6  border-b border-gray-700'>
            {/* logo and name */}
            <div className="flex items-center gap-2 ml-30">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                         <BadgeEuro className='text-[#1E90FF]' size={40} />
                    </div>
                    <span className="text-2xl font-bold">Edge<span className='text-blue-500 italic'> Pay</span></span>
            </div>

            {/* navlinks */}

            <div className="hidden md:flex gap-8 font-medium text-gray-400">
                <a href="#" className='hover:text-cyan-400 '>Home</a>
                <a href="#" className='hover:text-cyan-400 '>Features</a>
                <a href="#" className='hover:text-cyan-400 '>Contact</a>
            </div>
            {/* signup button */}
            <div className="btn mr-30">
                <button className='bg-cyan-600 hover:bg-cyan-700 text-gray-200 font-bold px-6 py-2 rounded-full cursor-pointer' onClick={() =>
                    window.location.href = '/login'
                }>Sign In</button>
            </div>
        </nav>

        {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400 py-1 px-4 rounded-full">
              Fintech 2.0 is here
            </Badge>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              The Future of <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Payments. Simple.
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              Create your Vault account in minutes. Add money to your wallet, 
              send funds instantly to anyone, anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-xl h-14 px-8 text-md font-bold hover:shadow-lg cursor-pointer" onClick={() => window.location.href = '/signup'}>
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-tr from-cyan-500/20 to-blue-500/5 rounded-[40px] border border-white/10 backdrop-blur-3xl flex items-center justify-center relative group">
              {/* Mockup UI Element */}
              <Card className="w-72 bg-[#161B22]/80 border-white/10 backdrop-blur-xl p-6 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Total Balance</p>
                    <p className="text-2xl font-bold">$12,450.75</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Zap size={20} className="text-cyan-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-cyan-500" />
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Monthly Limit</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="px-8 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Engineered for Trust</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldCheck className="text-cyan-400" />}
              title="Bank-Grade Security"
              desc="Your data is encrypted with AES-256 and protected by multi-factor authentication."
            />
            <FeatureCard 
              icon={<Zap className="text-blue-400" />}
              title="Instant Transfers"
              desc="Move money between wallets or to bank accounts in less than 2 seconds."
            />
            <FeatureCard 
              icon={<Globe className="text-emerald-400" />}
              title="Borderless Payments"
              desc="Send money globally with real-time conversion and zero hidden fees."
            />
          </div>
        </div>
      </section>
    </div>

  )
}

export default LandingPage