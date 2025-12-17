import React, { useState } from 'react';
import InteractiveList from './InteractiveList';
import SentenceCards from './SentenceCards';
import { 
    KVK_DATA_WORDS, KVK_DATA_PHRASES, KVK_DATA_SENTENCES,
    V_KVK_WORDS, V_KVK_PHRASES, V_KVK_SENTENCES,
    KV_KVK_WORDS, KV_KVK_PHRASES, KV_KVK_SENTENCES,
    KVK_KV_WORDS, KVK_KV_PHRASES, KVK_KV_SENTENCES,
    KVK_KVK_WORDS, KVK_KVK_PHRASES, KVK_KVK_SENTENCES,
    KV_KV_KVK_WORDS, KV_KV_KVK_PHRASES, KV_KV_KVK_SENTENCES,
    KVK_KV_KVK_WORDS, KVK_KV_KVK_PHRASES, KVK_KV_KVK_SENTENCES
} from '../constants';
import { Type, MessageSquare, AlignLeft, Layers } from 'lucide-react';

const CATEGORIES = [
    { id: 'KVK', label: 'KVK', words: KVK_DATA_WORDS, phrases: KVK_DATA_PHRASES, sentences: KVK_DATA_SENTENCES },
    { id: 'V_KVK', label: 'V + KVK', words: V_KVK_WORDS, phrases: V_KVK_PHRASES, sentences: V_KVK_SENTENCES },
    { id: 'KV_KVK', label: 'KV + KVK', words: KV_KVK_WORDS, phrases: KV_KVK_PHRASES, sentences: KV_KVK_SENTENCES },
    { id: 'KVK_KV', label: 'KVK + KV', words: KVK_KV_WORDS, phrases: KVK_KV_PHRASES, sentences: KVK_KV_SENTENCES },
    { id: 'KVK_KVK', label: 'KVK + KVK', words: KVK_KVK_WORDS, phrases: KVK_KVK_PHRASES, sentences: KVK_KVK_SENTENCES },
    { id: 'KV_KV_KVK', label: 'KV+KV+KVK', words: KV_KV_KVK_WORDS, phrases: KV_KV_KVK_PHRASES, sentences: KV_KV_KVK_SENTENCES },
    { id: 'KVK_KV_KVK', label: 'KVK+KV+KVK', words: KVK_KV_KVK_WORDS, phrases: KVK_KV_KVK_PHRASES, sentences: KVK_KV_KVK_SENTENCES },
];

const PerkataanKvkManager: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [activeTab, setActiveTab] = useState<'words' | 'phrases' | 'sentences'>('words');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl font-black text-gray-800">Perkataan KVK</h2>
        <p className="text-gray-500 text-sm">Pilih jenis gabungan suku kata</p>
      </div>

      {/* Category Tabs (Scrollable) */}
      <div className="flex justify-center mb-6 px-4">
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex gap-1 overflow-x-auto max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                        activeCategory.id === cat.id ? 'bg-teal-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
      </div>

      {/* Mode Tabs (Words/Phrases/Sentences) */}
      <div className="flex justify-center mb-8 px-4">
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
            <button
                onClick={() => setActiveTab('words')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'words' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <Type size={14} /> Perkataan
            </button>
            <button
                onClick={() => setActiveTab('phrases')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'phrases' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <MessageSquare size={14} /> Frasa
            </button>
            <button
                onClick={() => setActiveTab('sentences')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'sentences' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <AlignLeft size={14} /> Ayat
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeTab === 'words' && (
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Mari Belajar {activeCategory.label}</h2>
                <InteractiveList mode="words" data={activeCategory.words} />
            </div>
        )}
        {activeTab === 'phrases' && (
             <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Mari Baca Frasa</h2>
                <InteractiveList mode="phrases" data={activeCategory.phrases} />
             </div>
        )}
        {activeTab === 'sentences' && (
            <div>
                 <SentenceCards data={activeCategory.sentences} />
            </div>
        )}
      </div>
    </div>
  );
};

export default PerkataanKvkManager;