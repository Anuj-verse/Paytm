import React from 'react';

export const AuthLayout = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="min-h-screen bg-[#0B0E14] flex flex-col justify-center items-center px-6 py-12">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="w-full max-w-[400px] space-y-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
          <p className="text-gray-400 mt-2">{subtitle}</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};