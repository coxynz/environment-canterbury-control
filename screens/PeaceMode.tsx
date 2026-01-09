import React, { useState } from 'react';
import { ViewProps, InputSource } from '../types';
import { FooterButton } from '../components/FooterButton';
import { VolumeSlider } from '../components/VolumeSlider';

const SOURCES: InputSource[] = [
  { id: 'CB1', label: 'CB 1' },
  { id: 'CB2', label: 'CB 2' },
  { id: 'VC', label: 'VC' },
  { id: 'PC', label: 'PC' },
  { id: 'OFF', label: 'Off' },
];

export const PeaceMode: React.FC<ViewProps> = ({ changeView }) => {
  const [activeSource, setActiveSource] = useState('CB1');
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center p-8 max-w-5xl mx-auto w-full space-y-8">
        
        {/* Mode Badge */}
        <div className="bg-green-600 text-white px-8 py-2 rounded-lg text-xl font-bold shadow-md uppercase tracking-wider">
          Peace Mode
        </div>

        <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-600">Dashboards Active</h2>
            <p className="text-slate-500 text-lg">Meeting Mode</p>
        </div>

        {/* Source Switcher */}
        <div className="w-full bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm flex gap-2">
            {SOURCES.map((source) => {
                const isActive = activeSource === source.id;
                return (
                    <button
                        key={source.id}
                        onClick={() => setActiveSource(source.id)}
                        className={`
                            flex-1 py-4 rounded-lg text-xl font-semibold transition-all duration-200
                            ${isActive 
                                ? 'bg-green-600 text-white shadow-md' 
                                : 'bg-white text-slate-500 hover:bg-gray-50 shadow-sm'}
                        `}
                    >
                        {isActive && <span className="mr-2">✓</span>}
                        {source.label}
                    </button>
                );
            })}
        </div>

        {/* Volume Control */}
        <div className="w-full px-12 pt-8">
            <VolumeSlider value={volume} onChange={setVolume} className="py-6" />
        </div>

      </div>

      {/* Footer */}
      <div className="bg-transparent p-4 flex justify-between items-center absolute bottom-0 w-full z-10 pointer-events-none">
          <div className="pointer-events-auto">
             <FooterButton label="HOME" variant="primary" onClick={() => changeView('SELECT')} />
          </div>
          <div className="pointer-events-auto">
             <FooterButton 
                label={isMuted ? "Unmute" : "Mute"} 
                variant="primary" 
                onClick={() => setIsMuted(!isMuted)} 
            />
          </div>
      </div>
    </div>
  );
};