import React from 'react';
import { KVKV_WORDS, KVKV_PHRASES } from '../constants';
import { speak } from '../services/audioService';
import { Volume2 } from 'lucide-react';

interface KvKvInteractiveProps {
  mode: 'words' | 'phrases';
}

const KvKvInteractive: React.FC<KvKvInteractiveProps> = ({ mode }) => {
  
  if (mode === 'words') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 pb-32">
        {KVKV_WORDS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => speak(item.word)}
            className="group flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border-b-4 border-gray-100 hover:border-blue-200"
          >
            {/* Visual Representation */}
            <div className="w-24 h-24 bg-blue-50 rounded-full mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform shadow-inner">
               {item.image || '🖼️'}
            </div>
            
            {/* Syllables Text */}
            <div className="flex items-center gap-0.5 text-2xl sm:text-3xl font-black tracking-wide">
              {item.syllables.map((syl, sIdx) => (
                <span 
                  key={sIdx} 
                  className={`${sIdx % 2 === 0 ? 'text-red-500' : 'text-blue-600'}`}
                >
                  {syl}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <Volume2 size={14} /> Dengar
            </p>
          </button>
        ))}
      </div>
    );
  }

  // Phrases Mode
  return (
    <div className="flex flex-col gap-4 p-4 pb-32 max-w-3xl mx-auto">
      {KVKV_PHRASES.map((item, idx) => (
        <button
          key={idx}
          onClick={() => speak(item.text)}
          className="group flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md border-l-8 border-purple-400 hover:border-purple-500 transition-all active:scale-[0.99]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
             <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-xl flex items-center justify-center text-4xl group-hover:bg-purple-100 transition-colors shadow-sm">
                 {/* Display specific phrase image or fallback */}
                 {item.image || '📖'}
             </div>
             
             {/* Text Rendering */}
             <div className="flex gap-4 text-2xl sm:text-4xl font-black">
                {item.words.map((wordParts, wIdx) => (
                    <div key={wIdx} className="flex">
                        {wordParts.map((syl, sIdx) => (
                            <span 
                            key={sIdx} 
                            className={`${sIdx % 2 === 0 ? 'text-red-500' : 'text-blue-600'}`}
                            >
                            {syl}
                            </span>
                        ))}
                    </div>
                ))}
             </div>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
             <Volume2 size={20} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default KvKvInteractive;