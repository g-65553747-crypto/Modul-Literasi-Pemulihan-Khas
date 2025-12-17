import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  subtitle?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, subtitle }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6 shadow-sm">
        <Construction size={48} />
      </div>
      <h2 className="text-3xl font-black text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        {subtitle || "Modul ini sedang dibangunkan. Sila kembali lagi nanti!"}
      </p>
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-sm w-full">
        <h3 className="font-bold text-gray-700 mb-2">Apa yang bakal tiba?</h3>
        <ul className="text-left text-gray-500 text-sm space-y-2">
           <li className="flex gap-2"><span className="text-green-500">✓</span> Kad Imbasan Interaktif</li>
           <li className="flex gap-2"><span className="text-green-500">✓</span> Latihan Pengukuhan</li>
           <li className="flex gap-2"><span className="text-green-500">✓</span> Permainan Bahasa</li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;