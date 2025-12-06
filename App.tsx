
import React, { useState } from 'react';
import { GameMode, StatData, GameCategory } from './types';
import Navigation from './components/Navigation';
import LearnChart from './components/LearnChart';
import QuizGame from './components/QuizGame';
import MemoryGame from './components/MemoryGame';
import BubblePop from './components/BubblePop';
import WordBuilder from './components/WordBuilder';
import SentenceArrangementGame from './components/SentenceArrangementGame';
import Stats from './components/Stats';
import TitlePage from './components/TitlePage';
import KvKvManager from './components/KvKvManager';
import GamesHub from './components/GamesHub';
import { Gamepad2, Home, Menu, X, ChevronRight, BookOpen, Brain, Grid, PlayCircle, Layers, BarChart, Type } from 'lucide-react';

// Organized Menu Items with Sections
const MENU_ITEMS = [
  { section: 'Modul 1: Asas', mode: GameMode.LEARN, title: 'Vokal & Suku Kata KV', desc: 'Kenali bunyi dan huruf', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
  { section: 'Modul 2: Lanjutan', mode: GameMode.KVKV, title: 'Perkataan KV+KV', desc: 'Perkataan, Frasa & Ayat', icon: Type, color: 'bg-teal-100 text-teal-600' },
  
  { section: 'Aktiviti Pengukuhan', mode: GameMode.GAMES_HUB, title: 'Zon Permainan', desc: 'Kuiz, Memori & Lain-lain', icon: Gamepad2, color: 'bg-purple-100 text-purple-600' },
  
  { section: 'Laporan', mode: GameMode.STATS, title: 'Prestasi Murid', desc: 'Lihat rekod pencapaian', icon: BarChart, color: 'bg-yellow-100 text-yellow-600' },
];

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentMode, setCurrentMode] = useState<GameMode>(GameMode.LEARN);
  const [gameCategory, setGameCategory] = useState<GameCategory>('KV');
  const [showMenu, setShowMenu] = useState(false);
  const [stats, setStats] = useState<StatData[]>([
    { name: 'Quiz', score: 0, total: 100 },
    { name: 'Memory', score: 0, total: 100 },
    { name: 'Pop', score: 0, total: 100 },
    { name: 'Build', score: 0, total: 100 },
    { name: 'Ayat', score: 0, total: 100 },
  ]);

  const updateScore = (mode: string, points: number) => {
    setStats(prev => prev.map(s => {
        if (s.name === mode) {
            return { ...s, score: s.score + points };
        }
        return s;
    }));
  };

  const handleMenuNavigation = (mode: GameMode) => {
    setCurrentMode(mode);
    setShowMenu(false);
  };

  const renderContent = () => {
    switch (currentMode) {
      case GameMode.LEARN:
        return <LearnChart />;
      case GameMode.KVKV:
        return <KvKvManager />;
      case GameMode.GAMES_HUB:
        return <GamesHub setMode={setCurrentMode} setCategory={setGameCategory} />;
      case GameMode.QUIZ:
        return <QuizGame category={gameCategory} onScoreUpdate={(p) => updateScore('Quiz', p)} />;
      case GameMode.MEMORY:
        return <MemoryGame category={gameCategory} onScoreUpdate={(p) => updateScore('Memory', p)} />;
      case GameMode.BUBBLES:
        return <BubblePop category={gameCategory} onScoreUpdate={(p) => updateScore('Pop', p)} />;
      case GameMode.BUILDER:
        return <WordBuilder category={gameCategory} onScoreUpdate={(p) => updateScore('Build', p)} />;
      case GameMode.SENTENCE_ARRANGE:
        return <SentenceArrangementGame category={gameCategory} onScoreUpdate={(p) => updateScore('Ayat', p)} />;
      case GameMode.STATS:
        return <Stats stats={stats} />;
      default:
        return <LearnChart />;
    }
  };

  if (!hasStarted) {
    return <TitlePage onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans selection:bg-pink-200">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 px-4 py-3 border-b border-blue-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          {/* Logo / Left Side */}
          <div className="flex items-center gap-2" onClick={() => setHasStarted(false)}>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Gamepad2 size={24} />
            </div>
            <div className="flex flex-col">
                <span className="text-lg leading-tight font-black text-gray-700 tracking-tight cursor-pointer">Ceria<span className="text-blue-500">SukuKata</span></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden sm:block">Modul Literasi Pemulihan Khas</span>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowMenu(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors font-bold text-sm"
            >
              <Menu size={20} />
              <span className="hidden sm:inline">Menu</span>
            </button>
            <button 
              onClick={() => setHasStarted(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors font-bold text-sm"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full mx-auto animate-fade-in pt-4">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navigation currentMode={currentMode} setMode={setCurrentMode} />

      {/* Menu / List of Title Modal */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
              <div>
                 <h2 className="text-2xl font-black text-gray-800">Daftar Kandungan</h2>
                 <p className="text-sm text-gray-500">Pilih aktiviti pembelajaran</p>
              </div>
              <button 
                onClick={() => setShowMenu(false)}
                className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 shadow-sm hover:bg-gray-50 transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto space-y-1">
              {MENU_ITEMS.map((item, index) => {
                const showHeader = index === 0 || item.section !== MENU_ITEMS[index - 1].section;
                return (
                    <React.Fragment key={index}>
                        {showHeader && (
                            <div className="mt-4 mb-2 px-1 text-xs font-black text-gray-400 uppercase tracking-wider">
                                {item.section}
                            </div>
                        )}
                        <button
                        onClick={() => handleMenuNavigation(item.mode)}
                        className={`w-full flex items-center p-3 rounded-2xl transition-all duration-200 border-2 text-left group mb-2
                            ${currentMode === item.mode 
                            ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-100 ring-offset-1' 
                            : 'border-transparent bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200'
                            }`}
                        >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} mr-4 shadow-sm group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                        </div>
                        <div className="flex-1">
                            <h3 className={`font-bold text-lg ${currentMode === item.mode ? 'text-blue-700' : 'text-gray-700'}`}>
                            {item.title}
                            </h3>
                            <p className="text-xs font-medium text-gray-500">{item.desc}</p>
                        </div>
                        <ChevronRight size={20} className={`text-gray-300 ${currentMode === item.mode ? 'text-blue-500' : 'group-hover:text-gray-400 group-hover:translate-x-1 transition-transform'}`} />
                        </button>
                    </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;