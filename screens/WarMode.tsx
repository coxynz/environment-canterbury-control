import React, { useState } from 'react';
import { ViewProps } from '../types';
import { FooterButton } from '../components/FooterButton';
import { VolumeSlider } from '../components/VolumeSlider';
import { Mic, RotateCw, Volume2, Check, X } from 'lucide-react';

export const WarMode: React.FC<ViewProps> = ({ changeView }) => {
  const [cbVolume, setCbVolume] = useState(60);
  const [isCBMuted, setIsCBMuted] = useState(false);
  const [ceilingMicMuted, setCeilingMicMuted] = useState(false);
  const [routing, setRouting] = useState({
      vc: true,
      cb1: true,
      cb2: false
  });

  const toggleRoute = (key: keyof typeof routing) => {
      setRouting(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center p-6 w-full space-y-6">
        
        {/* Mode Badge */}
        <div className="bg-[#E94E38] text-white px-12 py-3 rounded-lg text-xl font-bold shadow-md uppercase tracking-wider w-full max-w-lg text-center">
          War Mode Active
        </div>

        {/* Main Control Panel */}
        <div className="bg-gray-100 rounded-xl shadow-lg border border-gray-200 p-6 w-full grid grid-cols-12 gap-6">
            
            {/* Left Column: CB Radio 1 */}
            <div className="col-span-4 flex flex-col gap-4">
                <h3 className="text-slate-600 font-bold uppercase text-center mb-2">CB Radio 1</h3>
                
                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-[#3B82B6] text-white py-4 rounded font-bold uppercase shadow-sm active:translate-y-0.5 transition-transform">
                        Listen
                    </button>
                    <button className="bg-green-600 text-white py-4 rounded font-bold uppercase shadow-sm active:translate-y-0.5 transition-transform">
                        Talk
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white border border-gray-300 text-slate-600 py-3 rounded font-bold uppercase shadow-sm">
                        CB 1
                    </button>
                    <button 
                        onClick={() => setIsCBMuted(!isCBMuted)}
                        className={`${isCBMuted ? 'bg-red-100 text-red-600 border-red-300' : 'bg-white text-slate-600 border-gray-300'} border py-3 rounded font-bold uppercase shadow-sm transition-colors`}
                    >
                        Mute
                    </button>
                </div>

                <div className="mt-4">
                    <VolumeSlider value={cbVolume} onChange={setCbVolume} />
                </div>
            </div>

            {/* Middle Column: Ceiling Mic Routing */}
            <div className="col-span-4 flex flex-col gap-4 border-l border-r border-gray-300 px-6">
                <div className="flex items-center justify-between mb-2">
                     <h3 className="text-slate-600 font-bold uppercase">Ceiling Mic Routing</h3>
                     {/* Using an icon to represent the dropdown/sort arrows seen in screenshot */}
                     <div className="bg-white rounded border border-gray-300 p-1">
                        <div className="border-b border-black w-3 h-0.5 mb-0.5"></div>
                        <div className="border-b border-black w-3 h-0.5"></div>
                     </div>
                </div>

                {/* Routing Row 1 */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white border border-gray-300 rounded px-4 py-3 text-slate-700 font-medium">
                        Send to VC
                    </div>
                    <button 
                        onClick={() => toggleRoute('vc')}
                        className={`w-14 h-12 rounded flex items-center justify-center shadow-sm transition-colors ${routing.vc ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-500'}`}
                    >
                        {routing.vc ? <Check strokeWidth={4} /> : <X strokeWidth={4} />}
                    </button>
                </div>

                 {/* Routing Row 2 */}
                 <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white border border-gray-300 rounded px-4 py-3 text-slate-700 font-medium">
                        Send to CB 1
                    </div>
                    <button 
                        onClick={() => toggleRoute('cb1')}
                        className={`w-14 h-12 rounded flex items-center justify-center shadow-sm transition-colors ${routing.cb1 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-500'}`}
                    >
                        {routing.cb1 ? <Check strokeWidth={4} /> : <X strokeWidth={4} />}
                    </button>
                </div>

                 {/* Routing Row 3 */}
                 <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white border border-gray-300 rounded px-4 py-3 text-slate-700 font-medium">
                        Send to CB 2
                    </div>
                    <button 
                         onClick={() => toggleRoute('cb2')}
                        className={`w-14 h-12 rounded flex items-center justify-center shadow-sm transition-colors ${routing.cb2 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-500'}`}
                    >
                        {routing.cb2 ? <Check strokeWidth={4} /> : <X strokeWidth={4} />}
                    </button>
                </div>
            </div>

            {/* Right Column: PA Mic Control */}
            <div className="col-span-4 flex flex-col gap-6 pl-2">
                 <h3 className="text-slate-600 font-bold uppercase text-center mb-2">PA Mic Control</h3>
                 
                 <div className="flex-1 bg-gray-200/50 rounded-lg p-4 flex flex-col gap-6 justify-center items-center border border-gray-200">
                    <button className="flex items-center gap-3 bg-white border border-gray-300 px-6 py-4 rounded-full shadow-sm active:bg-gray-50 active:shadow-inner transition-all w-full justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600"></div>
                        <span className="text-slate-500 font-bold text-sm tracking-wider">PUSH TO TALK</span>
                    </button>

                    <button 
                        onClick={() => setCeilingMicMuted(!ceilingMicMuted)}
                        className={`w-full py-4 px-4 rounded-lg flex items-center justify-center gap-3 shadow-md transition-colors ${ceilingMicMuted ? 'bg-[#3B82B6] text-white' : 'bg-[#3B82B6] text-white'}`}
                    >
                         <Mic className="fill-current" />
                         <div className="flex flex-col items-start leading-none">
                             <span className="font-semibold text-lg">Ceiling Mic:</span>
                             <span className="font-light">{ceilingMicMuted ? 'Muted' : 'Unmuted'}</span>
                         </div>
                    </button>
                 </div>
            </div>

        </div>

      </div>

      {/* Footer */}
      <div className="bg-transparent p-4 flex gap-4 items-center absolute bottom-0 w-full z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <FooterButton label="HOME" variant="primary" onClick={() => changeView('SELECT')} />
          </div>

          <div className="flex-1 flex justify-center gap-4 pointer-events-auto">
             <FooterButton 
                label="ALL MUTE" 
                variant="danger" 
                icon={<Volume2 className="fill-current" />}
                onClick={() => {}} 
             />
          </div>

          <div className="pointer-events-auto">
            <div className="flex rounded shadow-md overflow-hidden active:transform active:translate-y-0.5 transition-all cursor-pointer" onClick={() => changeView('PEACE')}>
                 <div className="bg-[#3B82B6] text-white px-6 py-3 font-semibold text-lg flex items-center">
                     Return to Peace Mode
                 </div>
                 <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-center">
                     <RotateCw />
                 </div>
            </div>
          </div>
      </div>
    </div>
  );
};