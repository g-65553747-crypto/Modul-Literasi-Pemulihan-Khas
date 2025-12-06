
import React, { useState } from 'react';
import { GameMode, GameCategory } from '../types';
import { HelpCircle, Grid, PlayCircle, Layers, ArrowRight, Gamepad2, Type, BookOpen, AlignLeft } from 'lucide-react';

interface GamesHubProps {
  setMode: (mode: GameMode) => void;
  setCategory: (cat: GameCategory) => void;
}

const GamesHub: React.FC<GamesHubProps> = ({ setMode, setCategory }) => {
  const [activeTab, setActiveTab] = useState<GameCategory>('KV');

  const games = [
    { mode: GameMode.QUIZ, title: 'Uji Minda', desc: 'Kuiz Pendengaran', icon: HelpCircle, color: 'bg-purple-100 text-purple-600' },
    { mode: GameMode.MEMORY, title: 'Memori', desc: 'Cari Pasangan', icon: Grid, color: 'bg-green-100 text-green-600' },
    { mode: GameMode.BUBBLES, title: 'Pop Buih', desc: 'Pecahkan Buih', icon: PlayCircle, color: 'bg-pink-100 text-pink-600' },
    { mode: GameMode.BUILDER, title: 'Bina Kata', desc: 'Susun Huruf/Suku Kata', icon: Layers, color: 'bg-orange-100 text-orange-600' },
  ];

  // Specific game for KVKV
  const sentenceGame = { mode: GameMode.SENTENCE_ARRANGE, title: 'Susun Ayat', desc: 'Bina Ayat Lengkap', icon: AlignLeft, color: 'bg-indigo-100 text-indigo-600' };

  const activeGames = activeTab === 'KVKV' ? [...games, sentenceGame] : games;

  const handleGameSelect = (mode: GameMode) => {
      setCategory(activeTab);
      setMode(mode);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto pb-32 animate-fade-in">
        <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4 shadow-sm">
                <Gamepad2 size={32} />
            </div>
            <h2 className="text-3xl font-black text-gray-800">Zon Permainan</h2>
            <p className="text-gray-500">Pilih kategori dan aktiviti</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
            <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex gap-1 w-full max-w-sm">
                <button
                    onClick={() => setActiveTab('KV')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeTab === 'KV' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    <BookOpen size={18} /> Suku Kata
                </button>
                <button
                    onClick={() => setActiveTab('KVKV')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeTab === 'KVKV' ? 'bg-teal-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    <Type size={18} /> Perkataan
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeGames.map((g) => (
                <button 
                    key={g.mode}
                    onClick={() => handleGameSelect(g.mode)}
                    className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all flex items-center gap-4 group text-left relative overflow-hidden"
                >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${g.color} text-3xl group-hover:scale-110 transition-transform relative z-10`}>
                        <g.icon size={32} />
                    </div>
                    <div className="flex-1 relative z-10">
                        <h3 className="font-bold text-xl text-gray-700 group-hover:text-blue-600 transition-colors">{g.title}</h3>
                        <p className="text-gray-400 text-sm font-medium">{g.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-all relative z-10">
                        <ArrowRight size={20} />
                    </div>
                    
                    {/* Decorative Background Blob */}
                    <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ${g.color.split(' ')[0]}`}></div>
                </button>
            ))}
        </div>
        
        <div className="mt-8 text-center bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">
                Anda sedang memilih permainan untuk kategori: 
                <span className="font-black ml-1 uppercase">{activeTab === 'KV' ? 'Suku Kata (KV)' : 'Perkataan (KV+KV)'}</span>
            </p>
        </div>
    </div>
  );
}

export default GamesHub;