import React, { useState } from 'react';
import LearnChart from './LearnChart';
import ComingSoon from './ComingSoon';
import { BookOpen, Layers } from 'lucide-react';
import { KVK_SYLLABLES_DATA, COLORS } from '../constants';
import { speak } from '../services/audioService';

const SukuKataManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'KV' | 'KVK' | 'KVKK'>('KV');

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Sub-navigation Tabs */}
      <div className="flex justify-center mb-6 px-4">
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex gap-1 overflow-x-auto max-w-full">
            <button
                onClick={() => setActiveTab('KV')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'KV' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <BookOpen size={18} /> KV (KP 4)
            </button>
            <button
                onClick={() => setActiveTab('KVK')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'KVK' ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Layers size={18} /> KVK (KP 9)
            </button>
            <button
                onClick={() => setActiveTab('KVKK')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'KVKK' ? 'bg-violet-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Layers size={18} /> KVKK (KP 17)
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeTab === 'KV' && <LearnChart />}
        {activeTab === 'KVK' && (
            <div className="p-4 pb-32 max-w-5xl mx-auto relative">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-indigo-600 mb-2 drop-shadow-sm">Suku Kata KVK</h1>
                    <p className="text-gray-500 font-medium">Klik untuk mendengar bunyi</p>
                </div>
                
                <div className="space-y-6">
                    {KVK_SYLLABLES_DATA.map((row, rowIndex) => (
                        <div key={row.consonant} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full font-bold text-2xl text-gray-700 uppercase shadow-inner">
                                {row.consonant}
                            </div>
                            
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-1">
                                {row.items.map((syllable, index) => {
                                    const colorClass = COLORS[rowIndex % COLORS.length];
                                    return (
                                        <button
                                            key={`${row.consonant}-${index}`}
                                            onClick={() => speak(syllable)}
                                            className={`
                                                relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl flex items-center justify-center 
                                                text-xl sm:text-2xl font-bold transition-all duration-200 transform
                                                ${colorClass}
                                                hover:scale-105 hover:-translate-y-1 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1
                                            `}
                                        >
                                            {syllable}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        {activeTab === 'KVKK' && <ComingSoon title="Suku Kata KVKK" subtitle="Kandungan untuk KP 17 akan datang tidak lama lagi." />}
      </div>
    </div>
  );
};

export default SukuKataManager;