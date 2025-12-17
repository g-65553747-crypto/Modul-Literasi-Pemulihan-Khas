import React from 'react';
import { GameMode } from '../types';
import { BookOpen, Type, Gamepad2, Layers, Book, Feather, MessageSquare, Puzzle } from 'lucide-react';

interface NavigationProps {
  currentMode: GameMode;
  setMode: (mode: GameMode) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentMode, setMode }) => {
  const navItems = [
    { mode: GameMode.SUKU_KATA, icon: BookOpen, label: 'Suku Kata' },
    { mode: GameMode.PERKATAAN_KV, icon: Type, label: 'Perkataan KV' },
    { mode: GameMode.PERKATAAN_KVK, icon: Layers, label: 'Perkataan KVK' },
    { mode: GameMode.PERKATAAN_KVKK, icon: Puzzle, label: 'Perkataan KVKK' },
    { mode: GameMode.PERKATAAN_DIFTONG, icon: MessageSquare, label: 'Diftong' },
    { mode: GameMode.PERKATAAN_DIGRAF, icon: Feather, label: 'Digraf' },
    { mode: GameMode.BACAAN, icon: Book, label: 'Bacaan' },
    { mode: GameMode.GAMES_HUB, icon: Gamepad2, label: 'Permainan' },
  ];

  // Check if current mode is one of the internal game modes to highlight 'Permainan'
  const internalGameModes = [GameMode.QUIZ, GameMode.MEMORY, GameMode.BUBBLES, GameMode.BUILDER, GameMode.SENTENCE_ARRANGE];
  const isGameActive = internalGameModes.includes(currentMode) || currentMode === GameMode.GAMES_HUB;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-blue-100 shadow-2xl pb-safe pt-2 z-50">
      <div className="max-w-4xl mx-auto overflow-x-auto no-scrollbar">
        <div className="flex items-center px-4 pb-2 min-w-max space-x-2 sm:justify-center">
          {navItems.map((item) => {
            const isActive = item.mode === GameMode.GAMES_HUB ? isGameActive : currentMode === item.mode;
            
            return (
              <button
                key={item.mode}
                onClick={() => setMode(item.mode)}
                className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 min-w-[70px] ${
                  isActive
                    ? 'text-blue-600 -translate-y-2'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`
                  p-2 rounded-2xl transition-all duration-300
                  ${isActive ? 'bg-blue-100 shadow-md scale-110' : 'bg-transparent'}
                `}>
                  <item.icon size={20} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                </div>
                <span className={`text-[9px] font-bold mt-1 text-center leading-tight max-w-[80px] ${isActive ? 'text-blue-700' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;