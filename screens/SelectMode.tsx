import React from 'react';
import { ViewProps } from '../types';
import { FooterButton } from '../components/FooterButton';
import { Video, Mic, MicOff } from 'lucide-react';

export const SelectMode: React.FC<ViewProps> = ({ changeView }) => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex-1 flex flex-col items-center justify-center p-8 pb-32 space-y-8">

        <h2 className="text-2xl font-semibold text-slate-600">Select Room Mode</h2>

        <div className="flex gap-8 w-full max-w-4xl justify-center">
          {/* Peace Mode Button */}
          <button
            onClick={() => changeView('PEACE')}
            className="flex-1 aspect-[4/3] max-w-sm bg-green-600 rounded-xl shadow-[0_8px_0_rgb(21,128,61)] active:shadow-none active:translate-y-2 transition-all flex flex-col items-center justify-center text-white"
          >
            <span className="text-3xl font-bold uppercase tracking-wider">Peace Mode</span>
          </button>

          {/* War Mode Button */}
          <button
            onClick={() => changeView('WAR')}
            className="flex-1 aspect-[4/3] max-w-sm bg-[#E94E38] rounded-xl shadow-[0_8px_0_rgb(180,50,30)] active:shadow-none active:translate-y-2 transition-all flex flex-col items-center justify-center text-white"
          >
            <span className="text-3xl font-bold uppercase tracking-wider">War Mode</span>
          </button>
        </div>

        {/* Status Bar */}
        <div className="w-full max-w-4xl bg-gray-100 rounded-full py-3 px-8 flex justify-between items-center text-slate-500 shadow-sm border border-gray-200 mt-8">
          <div className="flex items-center gap-2">
            <Video className="text-green-600" size={24} />
            <span className="font-medium">VC: <span className="text-slate-700">Online</span></span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Mic className="text-green-600" size={24} />
            <span className="font-medium">Radios: <span className="text-slate-700">Active</span></span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <MicOff className="text-green-600" size={24} />
            <span className="font-medium">CelingMic: <span className="text-slate-400">Muted</span></span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end pointer-events-none">
        {/* Home button removed from home screen */}
      </div>
    </div>
  );
};