
import React, { useState, useEffect } from 'react';
import { SYLLABLE_DATA, COLORS, KVKV_WORDS } from '../constants';
import { speak } from '../services/audioService';
import { RefreshCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameCategory } from '../types';

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  color: string;
}

interface MemoryGameProps {
    onScoreUpdate: (score: number) => void;
    category: GameCategory;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ onScoreUpdate, category }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const initializeGame = () => {
    let pool: string[] = [];

    if (category === 'KV') {
        pool = SYLLABLE_DATA.flatMap(g => g.items);
    } else {
        pool = KVKV_WORDS.map(w => w.word);
    }

    // Select 6 random items
    const selectedItems: string[] = [];
    while (selectedItems.length < 6) {
        const s = pool[Math.floor(Math.random() * pool.length)];
        if (!selectedItems.includes(s)) selectedItems.push(s);
    }

    const gameCards: Card[] = [...selectedItems, ...selectedItems]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        content: item,
        isFlipped: false,
        isMatched: false,
        color: COLORS[Math.floor(Math.random() * COLORS.length)] // Random decor color
      }));

    setCards(gameCards);
    setFlippedIndices([]);
    setIsProcessing(false);
  };

  useEffect(() => {
    initializeGame();
  }, [category]);

  const handleCardClick = (index: number) => {
    if (isProcessing || cards[index].isFlipped || cards[index].isMatched) return;

    speak(cards[index].content);

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      const [firstIdx, secondIdx] = newFlipped;
      
      if (cards[firstIdx].content === cards[secondIdx].content) {
        // Match
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIdx].isMatched = true;
          matchedCards[secondIdx].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setIsProcessing(false);
          onScoreUpdate(20);
          
          // Check win
          if (matchedCards.every(c => c.isMatched)) {
             confetti();
             speak("Tahniah!");
          } else {
             speak("Pandai!");
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[firstIdx].isFlipped = false;
          resetCards[secondIdx].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start pt-10 min-h-[80vh] px-4">
      <div className="flex justify-between items-center w-full max-w-md mb-8">
        <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                {category === 'KV' ? 'Suku Kata' : 'Perkataan'}
            </div>
            <h2 className="text-3xl font-bold text-gray-700">Memory Match</h2>
        </div>
        <button 
            onClick={initializeGame}
            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
        >
            <RefreshCcw size={20} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`
              relative h-24 sm:h-28 cursor-pointer card-flip
              ${card.isFlipped || card.isMatched ? 'flipped' : ''}
              ${card.isMatched ? 'invisible' : ''} 
            `}
          >
            <div className="card-inner absolute w-full h-full text-center">
              {/* Front (Hidden state) */}
              <div className="card-front absolute w-full h-full bg-blue-400 rounded-xl shadow-md border-b-4 border-blue-600 flex items-center justify-center">
                 <span className="text-white text-3xl font-black">?</span>
              </div>
              
              {/* Back (Revealed state) */}
              <div className={`card-back absolute w-full h-full rounded-xl shadow-md border-b-4 border-gray-200 bg-white flex items-center justify-center`}>
                <span className={`text-xl sm:text-2xl font-bold text-gray-800 break-words px-1`}>{card.content}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
