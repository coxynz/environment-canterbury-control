import React, { useState } from 'react';
import { Header } from './components/Header';
import { SelectMode } from './screens/SelectMode';
import { PeaceMode } from './screens/PeaceMode';
import { WarMode } from './screens/WarMode';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('SELECT');

  const renderView = () => {
    switch (currentView) {
      case 'SELECT':
        return <SelectMode currentView={currentView} changeView={setCurrentView} />;
      case 'PEACE':
        return <PeaceMode currentView={currentView} changeView={setCurrentView} />;
      case 'WAR':
        return <WarMode currentView={currentView} changeView={setCurrentView} />;
      default:
        return <SelectMode currentView={currentView} changeView={setCurrentView} />;
    }
  };

  return (
    <div className="relative">
        {/* Physical Device Frame */}
        <div className="bg-black rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_2px_#262626] border-t border-gray-800 relative z-10">
            {/* Screen Area (10" equivalent 16:10 aspect ratio ~ 1280x800 scaled down or native) */}
            <div className="relative w-[1024px] h-[600px] bg-gray-100 overflow-hidden rounded-lg ring-1 ring-white/10 shadow-inner group">
                
                {/* App Content */}
                <div className="flex flex-col h-full font-sans text-slate-800">
                    <Header />
                    <main className="flex-1 relative overflow-y-auto pb-24 no-scrollbar">
                        {renderView()}
                    </main>
                </div>

                {/* Glass Glare Effect (Optional subtle overlay) */}
                <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Side bezel detail */}
            <div className="absolute -left-1 top-24 bottom-24 w-1 bg-gray-800 rounded-l-md opacity-40"></div>
        </div>
        
        {/* Table/Wall Shadow */}
        <div className="absolute -bottom-8 left-10 right-10 h-8 bg-black/40 blur-xl rounded-full z-0"></div>
    </div>
  );
}

export default App;