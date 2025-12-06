import React from 'react';
import { GameMode } from '../types';
import { BookOpen, Type, Gamepad2, BarChart } from 'lucide-react';

interface NavigationProps {
  currentMode: GameMode;
  setMode: (mode: GameMode) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentMode, setMode }) => {
  const navItems = [
    { mode: GameMode.LEARN, icon: BookOpen, label: 'Asas KV' },
    { mode: GameMode.KVKV, icon: Type, label: 'KV + KV' },
    { mode: GameMode.GAMES_HUB, icon: Gamepad2, label: 'Permainan' },
    { mode: GameMode.STATS, icon: BarChart, label: 'Prestasi' },
  ];

  // Logic to highlight 'Permainan' if a specific game is active
  const gameModes = [GameMode.QUIZ, GameMode.MEMORY, GameMode.BUBBLES, GameMode.BUILDER, GameMode.GAMES_HUB];
  const isGameActive = gameModes.includes(currentMode);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-blue-100 shadow-2xl pb-safe pt-2 px-2 z-50">
      <div className="max-w-2xl mx-auto flex justify-around items-center pb-2">
        {navItems.map((item) => {
          const isActive = item.mode === GameMode.GAMES_HUB ? isGameActive : currentMode === item.mode;
          
          return (
            <button
              key={item.mode}
              onClick={() => setMode(item.mode)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 w-20 ${
                isActive
                  ? 'text-blue-600 -translate-y-2'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`
                p-2 rounded-2xl transition-all duration-300
                ${isActive ? 'bg-blue-100 shadow-md scale-110' : 'bg-transparent'}
              `}>
                <item.icon size={24} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
              </div>
              <span className={`text-[10px] font-bold mt-1 ${isActive ? 'text-blue-700' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;