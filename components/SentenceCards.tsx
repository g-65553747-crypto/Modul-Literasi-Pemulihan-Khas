import React, { useState } from 'react';
import { speak } from '../services/audioService';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

interface SentenceItem {
    text: string;
    image: string;
}

interface SentenceCardsProps {
    data: SentenceItem[];
    title?: string;
}

const SentenceCards: React.FC<SentenceCardsProps> = ({ data, title = "Mari Baca Ayat" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentItem = data[currentIndex];

  const handlePlay = () => {
      speak(currentItem.text);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
          <p className="text-gray-400">Kad Imbasan {currentIndex + 1} / {data.length}</p>
      </div>

      <div className="relative w-full max-w-2xl">
          {/* Card */}
          <div 
            className="bg-white rounded-[2rem] shadow-xl p-8 border-4 border-white ring-4 ring-blue-50 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-[1.01]"
            onClick={handlePlay}
          >
              <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center text-8xl mb-8 shadow-inner border-4 border-white">
                  {currentItem.image}
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight mb-6">
                  {currentItem.text}
              </h3>

              <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-200 transition-colors">
                  <Volume2 size={24} />
                  <span>Dengar</span>
              </button>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2">
              <button 
                onClick={handlePrev}
                className="p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-blue-500 hover:scale-110 transition-all"
              >
                  <ChevronLeft size={32} />
              </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2">
              <button 
                onClick={handleNext}
                className="p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-blue-500 hover:scale-110 transition-all"
              >
                  <ChevronRight size={32} />
              </button>
          </div>
      </div>

      <div className="mt-12 grid grid-cols-5 gap-2 max-w-lg">
          {data.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-full' : 'bg-gray-200 w-full hover:bg-gray-300'}`}
              />
          ))}
      </div>
    </div>
  );
};

export default SentenceCards;