
import React, { useState, useEffect, useCallback } from 'react';
import { SYLLABLE_DATA, KVKV_WORDS } from '../constants';
import { speak } from '../services/audioService';
import { Volume2, CheckCircle2, XCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameCategory } from '../types';

interface QuizGameProps {
    onScoreUpdate: (score: number) => void;
    category: GameCategory;
}

const QuizGame: React.FC<QuizGameProps> = ({ onScoreUpdate, category }) => {
  const [target, setTarget] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const generateQuestion = useCallback(() => {
    let pool: string[] = [];

    if (category === 'KV') {
        pool = SYLLABLE_DATA.flatMap(group => group.items);
    } else {
        pool = KVKV_WORDS.map(w => w.word);
    }
    
    // Pick random target
    const randomTarget = pool[Math.floor(Math.random() * pool.length)];
    
    // Pick 2 distractors
    const distractors: string[] = [];
    while (distractors.length < 2) {
      const d = pool[Math.floor(Math.random() * pool.length)];
      if (d !== randomTarget && !distractors.includes(d)) {
        distractors.push(d);
      }
    }

    const newOptions = [randomTarget, ...distractors].sort(() => Math.random() - 0.5);
    
    setTarget(randomTarget);
    setOptions(newOptions);
    setSelected(null);
    setFeedback(null);
    
    // Auto-play sound after a short delay
    setTimeout(() => speak(randomTarget), 300);
  }, [category]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleOptionClick = (option: string) => {
    if (selected) return; // Prevent double clicking
    setSelected(option);

    if (option === target) {
        setFeedback('correct');
        speak("Bagus!");
        setStreak(s => s + 1);
        onScoreUpdate(10);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(generateQuestion, 1500);
    } else {
        setFeedback('wrong');
        speak("Cuba lagi");
        setStreak(0);
        setTimeout(() => {
            setSelected(null);
            setFeedback(null);
        }, 1000);
    }
  };

  // Vibrant color palette for the options to ensure high contrast and visibility
  const VIBRANT_COLORS = [
    'bg-blue-500 hover:bg-blue-600 border-blue-700 text-white',
    'bg-purple-500 hover:bg-purple-600 border-purple-700 text-white',
    'bg-pink-500 hover:bg-pink-600 border-pink-700 text-white',
    'bg-orange-500 hover:bg-orange-600 border-orange-700 text-white',
    'bg-teal-500 hover:bg-teal-600 border-teal-700 text-white',
    'bg-indigo-500 hover:bg-indigo-600 border-indigo-700 text-white',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 pb-20">
      <div className="mb-8 text-center">
        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-2">
            Kategori: {category === 'KV' ? 'Suku Kata' : 'Perkataan'}
        </div>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Dengar & Pilih</h2>
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold">
            🔥 Streak: {streak}
        </div>
      </div>

      {/* Audio Button */}
      <button 
        onClick={() => speak(target)}
        className="mb-10 w-28 h-28 rounded-full bg-blue-500 text-white shadow-xl flex flex-col items-center justify-center active:scale-95 transition-transform hover:bg-blue-600 border-4 border-blue-300 ring-4 ring-blue-100"
      >
        <Volume2 size={40} className="animate-bounce" />
        <span className="mt-1 text-sm font-bold">Ulang</span>
      </button>

      {/* Options - Grid updated for better visibility */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {options.map((opt, idx) => {
           const isSelected = selected === opt;
           
           // Use a vibrant color based on index
           const colorClass = VIBRANT_COLORS[idx % VIBRANT_COLORS.length];
           
           let finalClass = `
              relative h-32 rounded-3xl border-b-8 border-x-2 border-t-2 
              text-4xl md:text-5xl font-black shadow-lg transition-all transform duration-200
              flex items-center justify-center px-2 text-center leading-tight
           `;

           // State styling
           if (isSelected) {
               if (feedback === 'correct') {
                   finalClass += " bg-green-500 border-green-700 text-white scale-105 ring-4 ring-green-200 z-10";
               } else if (feedback === 'wrong') {
                   finalClass += " bg-red-500 border-red-700 text-white opacity-90";
               }
           } else if (selected) {
               // Dim others when one is selected
               finalClass += ` ${colorClass} opacity-40 scale-95 grayscale`;
           } else {
               // Default vibrant state
               finalClass += ` ${colorClass} active:translate-y-2 active:border-b-2 hover:-translate-y-1 hover:shadow-xl`;
           }

           return (
             <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                disabled={!!selected}
                className={finalClass}
             >
                <span className="drop-shadow-md">{opt}</span>
                
                {/* Icons for feedback */}
                {isSelected && feedback === 'correct' && (
                    <div className="absolute -top-3 -right-3 bg-white text-green-500 rounded-full p-1 shadow-md animate-bounce">
                        <CheckCircle2 size={32} />
                    </div>
                )}
                {isSelected && feedback === 'wrong' && (
                     <div className="absolute -top-3 -right-3 bg-white text-red-500 rounded-full p-1 shadow-md">
                        <XCircle size={32} />
                    </div>
                )}
             </button>
           );
        })}
      </div>
      
      <button 
        onClick={generateQuestion}
        className="mt-12 py-3 px-6 rounded-full bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2 text-sm transition-colors"
      >
        <RefreshCw size={18} /> Soalan Seterusnya
      </button>
    </div>
  );
};

export default QuizGame;
