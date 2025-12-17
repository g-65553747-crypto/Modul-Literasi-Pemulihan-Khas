import React, { useState } from 'react';
import InteractiveList from './InteractiveList';
import SentenceCards from './SentenceCards';
import { KVKVKV_WORDS, KVKVKV_PHRASES, KVKVKV_SENTENCES } from '../constants';
import { Type, MessageSquare, AlignLeft } from 'lucide-react';

const KvkVkVManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'words' | 'phrases' | 'sentences'>('words');

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Sub-navigation Tabs */}
      <div className="flex justify-center mb-6 px-4">
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex gap-1">
            <button
                onClick={() => setActiveTab('words')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'words' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Type size={18} /> Perkataan
            </button>
            <button
                onClick={() => setActiveTab('phrases')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'phrases' ? 'bg-purple-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <MessageSquare size={18} /> Frasa
            </button>
            <button
                onClick={() => setActiveTab('sentences')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'sentences' ? 'bg-green-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <AlignLeft size={18} /> Ayat
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeTab === 'words' && (
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Mari Belajar Perkataan KV+KV+KV</h2>
                <InteractiveList mode="words" data={KVKVKV_WORDS} />
            </div>
        )}
        {activeTab === 'phrases' && (
             <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Mari Baca Frasa</h2>
                <InteractiveList mode="phrases" data={KVKVKV_PHRASES} />
             </div>
        )}
        {activeTab === 'sentences' && (
            <div>
                 <SentenceCards data={KVKVKV_SENTENCES} />
            </div>
        )}
      </div>
    </div>
  );
};

export default KvkVkVManager;