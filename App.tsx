import React, { useState } from 'react';
import { GameMode, StatData, GameCategory } from './types';
import Navigation from './components/Navigation';
import QuizGame from './components/QuizGame';
import MemoryGame from './components/MemoryGame';
import BubblePop from './components/BubblePop';
import WordBuilder from './components/WordBuilder';
import SentenceArrangementGame from './components/SentenceArrangementGame';
import Stats from './components/Stats';
import TitlePage from './components/TitlePage';
import SukuKataManager from './components/SukuKataManager';
import PerkataanKvManager from './components/PerkataanKvManager';
import PerkataanKvkManager from './components/PerkataanKvkManager';
import MainMenu from './components/MainMenu';
import GamesHub from './components/GamesHub';
import ComingSoon from './components/ComingSoon';
import { Gamepad2, Home, Menu, X, ChevronRight, BookOpen, Layers, BarChart, Type, Puzzle, Feather, MessageSquare, Book, LogOut } from 'lucide-react';

// Organized Menu Items matching the new structure
const MENU_ITEMS = [
  { section: 'Modul Suku Kata', mode: GameMode.SUKU_KATA, title: 'Suku Kata', desc: 'KV, KVK, KVKK (KP 4, 9, 17)', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
  
  { section: 'Modul Perkataan', mode: GameMode.PERKATAAN_KV, title: 'Perkataan KV', desc: 'V+KV, KV+KV, KV+KV+KV', icon: Type, color: 'bg-orange-100 text-orange-600' },
  { section: 'Modul Perkataan', mode: GameMode.PERKATAAN_KVK, title: 'Perkataan KVK', desc: 'Pelbagai gabungan KVK', icon: Layers, color: 'bg-teal-100 text-teal-600' },
  { section: 'Modul Perkataan', mode: GameMode.PERKATAAN_KVKK, title: 'Perkataan KVKK', desc: 'Pelbagai gabungan KVKK', icon: Puzzle, color: 'bg-pink-100 text-pink-600' },
  { section: 'Modul Perkataan', mode: GameMode.PERKATAAN_DIFTONG, title: 'Perkataan Diftong', desc: 'Diftong dan vokal berganding', icon: MessageSquare, color: 'bg-indigo-100 text-indigo-600' },
  { section: 'Modul Perkataan', mode: GameMode.PERKATAAN_DIGRAF, title: 'Perkataan Digraf', desc: 'Konsonan bergabung', icon: Feather, color: 'bg-purple-100 text-purple-600' },
  
  { section: 'Modul Ayat', mode: GameMode.BACAAN, title: 'Bacaan & Pemahaman', desc: 'Membina dan membaca ayat', icon: Book, color: 'bg-green-100 text-green-600' },
  
  { section: 'Aktiviti Pengukuhan', mode: GameMode.GAMES_HUB, title: 'Zon Permainan', desc: 'Kuiz, Memori & Lain-lain', icon: Gamepad2, color: 'bg-yellow-100 text-yellow-600' },
  
  { section: 'Laporan', mode: GameMode.STATS, title: 'Prestasi Murid', desc: 'Lihat rekod pencapaian', icon: BarChart, color: 'bg-gray-100 text-gray-600' },
];

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentMode, setCurrentMode] = useState<GameMode>(GameMode.HOME);
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
      // Main Dashboard
      case GameMode.HOME:
        return <MainMenu onSelectMode={setCurrentMode} />;

      // New Categories
      case GameMode.SUKU_KATA:
        return <SukuKataManager />;
      case GameMode.PERKATAAN_KV:
        return <PerkataanKvManager />;
      case GameMode.PERKATAAN_KVK:
        return <PerkataanKvkManager />;
      case GameMode.PERKATAAN_KVKK:
        return <ComingSoon title="Perkataan KVKK" subtitle="Modul Perkataan KVKK dan variasinya." />;
      case GameMode.PERKATAAN_DIFTONG:
        return <ComingSoon title="Perkataan Diftong" subtitle="Diftong dan Vokal Berganding (KP 29)." />;
      case GameMode.PERKATAAN_DIGRAF:
        return <ComingSoon title="Perkataan Digraf" subtitle="Huruf konsonan bergabung (KP 30)." />;
      case GameMode.BACAAN:
        return <ComingSoon title="Bacaan & Pemahaman" subtitle="Membina ayat mudah dan petikan pemahaman (KP 31 & 32)." />;
      
      // Games & Stats
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
        return <MainMenu onSelectMode={setCurrentMode} />;
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
          <div className="flex items-center gap-2" onClick={() => setCurrentMode(GameMode.HOME)}>
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
              onClick={() => setCurrentMode(GameMode.HOME)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors font-bold text-sm"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button 
              onClick={() => setHasStarted(false)}
              className="flex items-center gap-2 px-2 py-2 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 transition-colors"
              title="Keluar"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full mx-auto animate-fade-in pt-4 pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation - Only show if NOT on Home screen */}
      {currentMode !== GameMode.HOME && (
        <Navigation currentMode={currentMode} setMode={setCurrentMode} />
      )}

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
              <button
                onClick={() => handleMenuNavigation(GameMode.HOME)}
                className="w-full flex items-center p-3 rounded-2xl transition-all duration-200 border-2 text-left bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200 mb-4"
              >
                 <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-200 text-gray-600 mr-4">
                    <Home size={24} />
                 </div>
                 <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-700">Laman Utama</h3>
                    <p className="text-xs font-medium text-gray-500">Kembali ke menu utama</p>
                 </div>
              </button>

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