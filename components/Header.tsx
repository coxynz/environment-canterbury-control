import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b-4 border-green-700/50 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <Logo />
        <div className="h-8 w-px bg-gray-300"></div>
        <span className="text-xl font-medium text-slate-600 tracking-wide">Flood Room</span>
      </div>
      <button className="p-2 text-slate-600 hover:bg-gray-200 rounded-lg transition-colors">
        <Menu size={32} />
      </button>
    </div>
  );
};