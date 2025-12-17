import React from 'react';
import { GameMode } from '../types';
import { BookOpen, Type, Layers, Puzzle, MessageSquare, Feather, Book, Gamepad2, BarChart } from 'lucide-react';

interface MainMenuProps {
  onSelectMode: (mode: GameMode) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onSelectMode }) => {
  const categories = [
    { mode: GameMode.SUKU_KATA, title: 'Suku Kata', desc: 'KV, KVK, KVKK (KP 4, 9, 17)', icon: BookOpen, color: 'bg-blue-100 text-blue-600', border: 'border-blue-200', delay: 'delay-[0ms]' },
    { mode: GameMode.PERKATAAN_KV, title: 'Perkataan KV', desc: 'V+KV, KV+KV, KV+KV+KV', icon: Type, color: 'bg-orange-100 text-orange-600', border: 'border-orange-200', delay: 'delay-[50ms]' },
    { mode: GameMode.PERKATAAN_KVK, title: 'Perkataan KVK', desc: 'Pelbagai gabungan KVK', icon: Layers, color: 'bg-teal-100 text-teal-600', border: 'border-teal-200', delay: 'delay-[100ms]' },
    { mode: GameMode.PERKATAAN_KVKK, title: 'Perkataan KVKK', desc: 'Pelbagai gabungan KVKK', icon: Puzzle, color: 'bg-pink-100 text-pink-600', border: 'border-pink-200', delay: 'delay-[150ms]' },
    { mode: GameMode.PERKATAAN_DIFTONG, title: 'Perkataan Diftong', desc: 'Diftong dan vokal berganding', icon: MessageSquare, color: 'bg-indigo-100 text-indigo-600', border: 'border-indigo-200', delay: 'delay-[200ms]' },
    { mode: GameMode.PERKATAAN_DIGRAF, title: 'Perkataan Digraf', desc: 'Huruf konsonan bergabung', icon: Feather, color: 'bg-purple-100 text-purple-600', border: 'border-purple-200', delay: 'delay-[250ms]' },
    { mode: GameMode.BACAAN, title: 'Bacaan', desc: 'Membina dan membaca ayat', icon: Book, color: 'bg-green-100 text-green-600', border: 'border-green-200', delay: 'delay-[300ms]' },
    { mode: GameMode.GAMES_HUB, title: 'Permainan', desc: 'Zon Aktiviti & Kuiz', icon: Gamepad2, color: 'bg-yellow-100 text-yellow-600', border: 'border-yellow-200', delay: 'delay-[350ms]' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto pb-32 animate-fade-in">
      <div className="text-center mb-10 mt-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-3 tracking-tight">
          Selamat Datang! <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-gray-500 text-lg font-medium">Sila pilih modul pembelajaran untuk bermula.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <button
            key={cat.mode}
            onClick={() => onSelectMode(cat.mode)}
            className={`
              relative group bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl 
              border-b-[6px] ${cat.border} transition-all duration-300 transform hover:-translate-y-2 text-left overflow-hidden
              animate-fade-in-up ${cat.delay}
            `}
          >
            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center 
              ${cat.color} mb-4 text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300
            `}>
              <cat.icon size={32} strokeWidth={2.5} />
            </div>
            
            <h3 className="text-xl font-black text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-400 font-bold">
              {cat.desc}
            </p>

            {/* Decorative blob */}
            <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-5 ${cat.color} group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
               <div className="bg-gray-50 rounded-full p-2">
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
               </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Stats Button */}
      <div className="mt-8 flex justify-center animate-fade-in delay-[400ms]">
         <button 
            onClick={() => onSelectMode(GameMode.STATS)}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-gray-500 font-bold shadow-sm hover:shadow-md hover:text-blue-600 transition-all border border-gray-100"
         >
            <BarChart size={20} />
            Lihat Prestasi Murid
         </button>
      </div>
    </div>
  );
};

export default MainMenu;