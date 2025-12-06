import React from 'react';
import { Play, Sparkles, BookOpen, Star } from 'lucide-react';

interface TitlePageProps {
  onStart: () => void;
}

const TitlePage: React.FC<TitlePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-yellow-300 animate-bounce delay-100 opacity-60">
        <Sparkles size={48} />
      </div>
      <div className="absolute top-20 right-20 text-white animate-pulse delay-700 opacity-40">
        <Star size={32} />
      </div>
      <div className="absolute bottom-20 left-10 text-white animate-pulse delay-300 opacity-40">
        <Star size={48} />
      </div>
      <div className="absolute bottom-32 right-10 text-yellow-200 animate-bounce delay-500 opacity-60">
        <BookOpen size={64} />
      </div>
      
      {/* Main Content Card */}
      <div className="z-10 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 max-w-2xl w-full transform transition-all duration-500 hover:scale-[1.02]">
        <div className="mb-6 inline-block bg-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
             <span className="text-white font-bold tracking-wider uppercase text-sm">Selamat Datang</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg tracking-tight leading-tight">
          Modul Literasi
        </h1>
        <h2 className="text-3xl md:text-5xl font-black text-yellow-300 mb-8 drop-shadow-lg leading-tight">
          Pemulihan Khas
        </h2>
        
        <div className="w-24 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>

        <p className="text-blue-50 text-xl font-medium mb-10">
            Aplikasi Pembelajaran Suku Kata <br/> Yang Ceria & Interaktif
        </p>

        <button 
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-200 bg-gradient-to-r from-orange-400 to-pink-500 text-xl rounded-full hover:from-orange-500 hover:to-pink-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg"
        >
          <span className="mr-3">Mula Belajar</span>
          <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
            <Play size={24} fill="currentColor" className="ml-0.5" />
          </div>
        </button>
      </div>

      <p className="absolute bottom-6 text-blue-100/60 text-sm font-medium tracking-wide">
        © 2024 Ceria Suku Kata | Educational Technology
      </p>
    </div>
  );
};

export default TitlePage;