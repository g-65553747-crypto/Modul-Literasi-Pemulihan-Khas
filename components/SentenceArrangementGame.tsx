import React, { useState, useEffect } from 'react';
import { KVKV_SENTENCES } from '../constants';
import { speak } from '../services/audioService';
import { ArrowRight, RefreshCw, CheckCircle2, AlignLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameCategory } from '../types';

interface Props {
    onScoreUpdate: (score: number) => void;
    category: GameCategory;
}

const SentenceArrangementGame: React.FC<Props> = ({ onScoreUpdate, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [userSentence, setUserSentence] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentData = KVKV_SENTENCES[currentIndex];
  const currentSentence = currentData.text;

  useEffect(() => {
    resetLevel();
  }, [currentIndex]);

  const resetLevel = () => {
    // Basic split by space
    const words = currentSentence.replace('.', '').split(' ');
    // Scramble
    const scrambled = [...words].sort(() => Math.random() - 0.5);
    setScrambledWords(scrambled);
    setUserSentence([]);
    setIsCorrect(false);
    speak("Susun ayat ini");
  };

  const handleWordClick = (word: string, index: number) => {
    // Move from scrambled to user sentence
    const newScrambled = [...scrambledWords];
    newScrambled.splice(index, 1);
    setScrambledWords(newScrambled);

    const newUserSentence = [...userSentence, word];
    setUserSentence(newUserSentence);
    speak(word);

    // Check if sentence is complete
    const targetWords = currentSentence.replace('.', '').split(' ');
    if (newUserSentence.length === targetWords.length) {
      if (newUserSentence.join(' ') === currentSentence.replace('.', '')) {
        setIsCorrect(true);
        speak("Tahniah! Ayat yang betul.");
        speak(currentSentence);
        onScoreUpdate(30);
        confetti({
          particleCount: 150,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        speak("Cuba lagi");
        // Optional: Shake effect
      }
    }
  };

  const handleResetWord = (word: string, index: number) => {
    if (isCorrect) return; // Lock if correct
    
    const newUserSentence = [...userSentence];
    newUserSentence.splice(index, 1);
    setUserSentence(newUserSentence);

    setScrambledWords([...scrambledWords, word]);
  };

  const nextLevel = () => {
    if (currentIndex < KVKV_SENTENCES.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  // If this game is accessed from 'KV' category (which shouldn't happen by UI logic but good for safety), display message
  if (category === 'KV') {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
              <div className="bg-yellow-100 text-yellow-800 p-6 rounded-3xl mb-4">
                  <AlignLeft size={48} className="mx-auto mb-2"/>
                  <h3 className="text-xl font-bold">Permainan ini untuk kategori KVKV sahaja.</h3>
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-[70vh] w-full max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-2">
            Susun Ayat
        </div>
        <h2 className="text-2xl font-bold text-gray-700">Level {currentIndex + 1}</h2>
        
        {/* Hint Image */}
        <div className="mt-4 text-6xl animate-bounce">
            {currentData.image}
        </div>
      </div>

      {/* Drop Zone (Answer Area) */}
      <div className={`w-full min-h-[120px] bg-white rounded-3xl border-4 ${isCorrect ? 'border-green-400 bg-green-50' : 'border-blue-100 border-dashed'} p-6 mb-8 flex flex-wrap gap-3 items-center justify-center transition-all shadow-sm`}>
        {userSentence.length === 0 && !isCorrect && (
          <span className="text-gray-300 font-medium">Tekan perkataan di bawah untuk menyusun ayat...</span>
        )}
        {userSentence.map((word, idx) => (
          <button
            key={`${word}-${idx}`}
            onClick={() => handleResetWord(word, idx)}
            className="px-5 py-3 bg-blue-500 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-600 animate-fade-in text-lg"
          >
            {word}
          </button>
        ))}
        {isCorrect && <CheckCircle2 className="text-green-500 ml-2 w-10 h-10 animate-bounce" />}
      </div>

      {/* Word Bank */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {scrambledWords.map((word, idx) => (
          <button
            key={`${word}-${idx}`}
            onClick={() => handleWordClick(word, idx)}
            className="px-6 py-4 bg-white border-b-4 border-gray-200 text-gray-700 rounded-2xl font-bold text-xl shadow-sm active:translate-y-1 active:border-b-0 hover:bg-gray-50 transition-all hover:-translate-y-1"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button 
          onClick={resetLevel}
          className="p-4 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors shadow-sm"
          title="Reset"
        >
          <RefreshCw size={24} />
        </button>
        {isCorrect && (
           <button 
             onClick={nextLevel}
             className="px-10 py-4 bg-green-500 text-white rounded-full font-bold shadow-xl hover:bg-green-600 flex items-center gap-2 animate-pulse transition-all transform hover:scale-105"
           >
             Seterusnya <ArrowRight size={24} />
           </button>
        )}
      </div>
    </div>
  );
};

export default SentenceArrangementGame;