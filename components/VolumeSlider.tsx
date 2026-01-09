import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeSliderProps {
  value: number;
  onChange: (val: number) => void;
  className?: string;
}

export const VolumeSlider: React.FC<VolumeSliderProps> = ({ value, onChange, className = "" }) => {
  return (
    <div className={`flex items-center gap-4 bg-gray-100 rounded-full px-4 py-3 shadow-inner border border-gray-200 ${className}`}>
      <button 
        onClick={() => onChange(0)}
        className="text-slate-500 hover:text-slate-700 active:scale-95 transition-transform"
      >
        <VolumeX size={28} />
      </button>
      
      <div className="flex-1 relative h-6 flex items-center">
        {/* Track Background */}
        <div className="absolute w-full h-2 bg-gray-300 rounded-full overflow-hidden">
             {/* Filled Track */}
            <div 
                className="h-full bg-green-600" 
                style={{ width: `${value}%` }}
            ></div>
        </div>
        
        {/* Range Input */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={value} 
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full absolute z-10 opacity-0 cursor-pointer h-6"
        />
        
        {/* Custom Thumb (Visual Only - follows value) */}
        <div 
            className="absolute h-6 w-6 bg-green-700 rounded-full border-2 border-white shadow-md pointer-events-none transition-all duration-75"
            style={{ left: `calc(${value}% - 12px)` }}
        ></div>
      </div>

      <button 
        onClick={() => onChange(100)}
        className="text-slate-500 hover:text-slate-700 active:scale-95 transition-transform"
      >
        <Volume2 size={28} />
      </button>
    </div>
  );
};