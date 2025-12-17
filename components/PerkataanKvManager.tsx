import React, { useState } from 'react';
import VkVManager from './VkVManager';
import KvKvManager from './KvKvManager';
import KvkVkVManager from './KvkVkVManager';
import { Star, Type, Layers3 } from 'lucide-react';

const PerkataanKvManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'VKV' | 'KVKV' | 'KVKVKV'>('VKV');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl font-black text-gray-800">Perkataan KV</h2>
        <p className="text-gray-500 text-sm">Pilih jenis gabungan suku kata</p>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex justify-center mb-6 px-4">
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex gap-1 overflow-x-auto max-w-full">
            <button
                onClick={() => setActiveTab('VKV')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'VKV' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Star size={18} /> V + KV
            </button>
            <button
                onClick={() => setActiveTab('KVKV')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'KVKV' ? 'bg-teal-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Type size={18} /> KV + KV
            </button>
            <button
                onClick={() => setActiveTab('KVKVKV')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === 'KVKVKV' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
                <Layers3 size={18} /> KV + KV + KV
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeTab === 'VKV' && <VkVManager />}
        {activeTab === 'KVKV' && <KvKvManager />}
        {activeTab === 'KVKVKV' && <KvkVkVManager />}
      </div>
    </div>
  );
};

export default PerkataanKvManager;