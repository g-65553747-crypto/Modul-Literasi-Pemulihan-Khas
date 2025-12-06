
import React, { useState, useEffect } from 'react';
import { WORD_BUILDER_TARGETS, SYLLABLE_DATA, KVKV_WORDS } from '../constants';
import { speak } from '../services/audioService';
import { Check, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameCategory, WordTarget } from '../types';

interface WordBuilderProps {
    onScoreUpdate: (score: number) => void;
    category: GameCategory;
}

const WordBuilder: React.FC<WordBuilderProps> = ({ onScoreUpdate, category }) => {
  const [level, setLevel] = useState(0);
  const [placedSyllables, setPlacedSyllables] = useState<string[]>([]);
  const [scrambledOptions, setScrambledOptions] = useState<string[]>([]);
  const [currentTargets, setCurrentTargets] = useState<WordTarget[]>([]);

  // Initialize targets based on category
  useEffect(() => {
    let targets: WordTarget[] = [];
    if (category === 'KV') {
        targets = WORD_BUILDER_TARGETS; // Use existing simple word list
    } else {
        // Map KVKV data to WordTarget structure
        targets = KVKV_WORDS.map(k => ({
            word: k.word,
            syllables: k.syllables,
            imagePrompt: k.image || '❓'
        }));
    }
    setCurrentTargets(targets);
    setLevel(0);
  }, [category]);

  const currentWord = currentTargets.length > 0 ? currentTargets[level % currentTargets.length] : null;

  // Setup Level
  useEffect(() => {
    if (!currentWord) return;

    setPlacedSyllables(new Array(currentWord.syllables.length).fill(''));
    
    // Create options: Correct syllables + distractors
    const allSyllables = SYLLABLE_DATA.flatMap(g => g.items);
    const distractors: string[] = [];
    while(distractors.length < 3) {
        const d = allSyllables[Math.floor(Math.random() * allSyllables.length)];
        if (!currentWord.syllables.includes(d)) distractors.push(d);
    }
    
    const opts = [...currentWord.syllables, ...distractors].sort(() => Math.random() - 0.5);
    setScrambledOptions(opts);
    speak(currentWord.word);
  }, [level, currentWord]);

  const handleOptionClick = (syllable: string) => {
    speak(syllable);
    
    // Find first empty slot
    const emptyIndex = placedSyllables.findIndex(s => s === '');
    if (emptyIndex === -1) return;

    const newPlaced = [...placedSyllables];
    newPlaced[emptyIndex] = syllable;
    setPlacedSyllables(newPlaced);

    // Check if full
    if (newPlaced.every(s => s !== '')) {
        const formedWord = newPlaced.join('');
        if (formedWord === currentWord?.word) {
            // Win
            speak(`Pandai! ${currentWord.word}`);
            onScoreUpdate(50);
            confetti({ origin: { y: 0.7 }});
            setTimeout(() => setLevel(l => l + 1), 2000);
        } else {
            // Wrong
            speak("Oh oh, cuba lagi");
            setTimeout(() => {
                setPlacedSyllables(new Array(currentWord?.syllables.length || 0).fill(''));
            }, 1000);
        }
    }
  };

  const reset = () => {
    if(currentWord) setPlacedSyllables(new Array(currentWord.syllables.length).fill(''));
  };

  if (!currentWord) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center min-h-[80vh] px-4 pt-10">
      <div className="mb-8 text-center">
        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-2">
            Kategori: {category === 'KV' ? 'Suku Kata' : 'Perkataan'}
        </div>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Bina Kata</h2>
        
        <div className="text-6xl mb-4 p-8 bg-white rounded-[3rem] shadow-xl inline-block border-b-8 border-gray-100 animate-fade-in">
           {/* Display Image/Emoji */}
           {currentWord.imagePrompt === 'Clothes' ? '👕' : 
            currentWord.imagePrompt === 'Ball' ? '⚽' :
            currentWord.imagePrompt === 'Foot' ? '🦶' :
            currentWord.imagePrompt === 'Eye' ? '👁️' :
            currentWord.imagePrompt === 'Milk' ? '🥛' :
            currentWord.imagePrompt === 'Table' ? '🪑' :
            currentWord.imagePrompt === 'Book' ? '📚' :
            currentWord.imagePrompt === 'Bread' ? '🍞' :
            currentWord.imagePrompt}
        </div>
      </div>

      {/* Slots */}
      <div className="flex gap-4 mb-12">
        {placedSyllables.map((s, idx) => (
            <div key={idx} className="w-20 h-24 border-b-4 border-blue-400 bg-blue-50 rounded-t-xl flex items-center justify-center text-3xl font-bold text-blue-900 shadow-sm transition-all">
                {s}
            </div>
        ))}
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-4 justify-center max-w-md">
        {scrambledOptions.map((opt, idx) => (
            <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className="bg-white hover:bg-yellow-100 text-gray-800 text-2xl font-bold py-4 px-6 rounded-2xl shadow-md border-b-4 border-gray-200 active:translate-y-1 active:shadow-none transition-all"
            >
                {opt}
            </button>
        ))}
      </div>

      <div className="mt-10 flex gap-6">
          <button onClick={reset} className="p-3 bg-gray-100 rounded-full text-gray-400 font-bold hover:text-gray-600 hover:bg-gray-200">
             <RefreshCw size={20} />
          </button>
          <button onClick={() => setLevel(l => l + 1)} className="px-6 py-3 bg-blue-50 text-blue-500 rounded-full font-bold hover:bg-blue-100 hover:text-blue-700 flex items-center gap-2">
             Skip <ArrowRight size={20}/>
          </button>
      </div>
    </div>
  );
};

export default WordBuilder;
