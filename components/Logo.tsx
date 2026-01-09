import React from 'react';
import logoImg from '../assets/logo.jpg';


export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 relative shrink-0 overflow-hidden rounded-lg">
        <img 
          src={logoImg} 
          alt="Environment Canterbury Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col leading-none text-green-800 font-bold text-xl">
            <span>Environment</span>
            <span className="-mt-1">Canterbury</span>
        </div>
        <span className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold leading-tight mt-0.5">Regional Council</span>
      </div>
    </div>
  );
};