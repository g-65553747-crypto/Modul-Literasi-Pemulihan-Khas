
import React, { useState, useRef, useEffect } from 'react';
import { SYLLABLE_DATA, COLORS } from '../constants';
import { speak, saveRecording, getRecording, deleteRecording } from '../services/audioService';
import { Volume2, Lock, Unlock, Mic, Square, Trash2, X } from 'lucide-react';

const LearnChart: React.FC = () => {
  const [activeSyllable, setActiveSyllable] = useState<string | null>(null);
  
  // Studio Mode States
  const [isStudioMode, setIsStudioMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  
  // Recording States
  const [recordingSyllable, setRecordingSyllable] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [customRecordings, setCustomRecordings] = useState<Set<string>>(new Set());

  // Load which syllables have custom recordings on mount
  useEffect(() => {
    const checkRecordings = async () => {
        const existing = new Set<string>();
        const allSyllables = SYLLABLE_DATA.flatMap(g => g.items);
        for (const s of allSyllables) {
            const blob = await getRecording(s);
            if (blob) existing.add(s);
        }
        setCustomRecordings(existing);
    };
    checkRecordings();
  }, []);

  const handlePlay = (syllable: string) => {
    // If we are recording, don't play
    if (recordingSyllable) return;

    setActiveSyllable(syllable);
    speak(syllable);
    setTimeout(() => setActiveSyllable(null), 1000);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'Abc2135') {
        setIsStudioMode(true);
        setShowAuthModal(false);
        setPasswordInput('');
        setAuthError(false);
    } else {
        setAuthError(true);
    }
  };

  const startRecording = async (syllable: string, e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent playing sound
      try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorderRef.current = new MediaRecorder(stream);
          chunksRef.current = [];

          mediaRecorderRef.current.ondataavailable = (event) => {
              if (event.data.size > 0) {
                  chunksRef.current.push(event.data);
              }
          };

          mediaRecorderRef.current.onstop = async () => {
              const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
              await saveRecording(syllable, blob);
              setCustomRecordings(prev => new Set(prev).add(syllable));
              
              // Stop all tracks to release mic
              stream.getTracks().forEach(track => track.stop());
          };

          mediaRecorderRef.current.start();
          setRecordingSyllable(syllable);

      } catch (err) {
          console.error("Error accessing microphone:", err);
          alert("Could not access microphone. Please check permissions.");
      }
  };

  const stopRecording = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (mediaRecorderRef.current && recordingSyllable) {
          mediaRecorderRef.current.stop();
          setRecordingSyllable(null);
      }
  };

  const handleDeleteRecording = async (syllable: string, e: React.MouseEvent) => {
      e.stopPropagation();
      if (confirm(`Delete custom recording for "${syllable}"?`)) {
          await deleteRecording(syllable);
          const newSet = new Set(customRecordings);
          newSet.delete(syllable);
          setCustomRecordings(newSet);
      }
  };

  return (
    <div className="p-4 pb-32 max-w-5xl mx-auto relative">
      {/* Header with Lock Toggle */}
      <div className="flex justify-between items-end mb-8">
          <div className="text-left">
            <h1 className="text-4xl font-black text-blue-600 mb-2 drop-shadow-sm">Suku Kata Fun!</h1>
            <p className="text-gray-500 font-medium">Click to hear the sound</p>
          </div>
          
          <button 
            onClick={() => isStudioMode ? setIsStudioMode(false) : setShowAuthModal(true)}
            className={`p-2 rounded-full transition-colors ${isStudioMode ? 'bg-red-100 text-red-500 hover:bg-red-200' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
            title={isStudioMode ? "Exit Studio Mode" : "Enter Studio Mode"}
          >
              {isStudioMode ? <Unlock size={20} /> : <Lock size={20} />}
          </button>
      </div>

      {/* Studio Mode Banner */}
      {isStudioMode && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-2 text-red-700 font-bold">
                  <Mic className="animate-pulse" size={20} />
                  <span>Studio Mode Active</span>
              </div>
              <span className="text-xs text-red-500">Record your own pronunciation</span>
          </div>
      )}

      {/* Grid */}
      <div className="space-y-6">
        {SYLLABLE_DATA.map((row, rowIndex) => (
          <div key={row.consonant} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full font-bold text-2xl text-gray-700 uppercase shadow-inner relative overflow-hidden">
                {row.consonant === 'vowels' ? '★' : row.consonant}
             </div>
             
             <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-1">
                {row.items.map((syllable, index) => {
                    const colorClass = COLORS[rowIndex % COLORS.length];
                    const isActive = activeSyllable === syllable;
                    const isRecording = recordingSyllable === syllable;
                    const hasCustom = customRecordings.has(syllable);
                    
                    return (
                        <button
                            key={`${row.consonant}-${index}`}
                            onClick={() => handlePlay(syllable)}
                            disabled={!!recordingSyllable && !isRecording}
                            className={`
                                relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl flex items-center justify-center 
                                text-xl sm:text-2xl font-bold transition-all duration-200 transform
                                ${colorClass}
                                ${isActive ? 'scale-110 ring-4 ring-offset-2 ring-yellow-400 z-10' : 'hover:scale-105 hover:-translate-y-1'}
                                ${isRecording ? 'ring-4 ring-red-500 ring-offset-2 scale-105' : ''}
                                shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1
                            `}
                        >
                            {syllable}
                            
                            {/* Play Indicator */}
                            {isActive && !isRecording && <Volume2 size={16} className="absolute top-1 right-1 opacity-50 animate-pulse" />}
                            
                            {/* Custom Audio Badge (Dot) */}
                            {hasCustom && !isStudioMode && (
                                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full shadow-sm"></div>
                            )}

                            {/* Studio Mode Controls Overlay */}
                            {isStudioMode && (
                                <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    {isRecording ? (
                                        <div 
                                            onClick={stopRecording}
                                            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-red-600 z-20"
                                        >
                                            <Square size={16} fill="currentColor" />
                                        </div>
                                    ) : (
                                        <div className="flex gap-1">
                                            <div 
                                                onClick={(e) => startRecording(syllable, e)}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md z-20 ${hasCustom ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
                                            >
                                                <Mic size={14} />
                                            </div>
                                            {hasCustom && (
                                                 <div 
                                                 onClick={(e) => handleDeleteRecording(syllable, e)}
                                                 className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md hover:bg-red-600 z-20"
                                             >
                                                 <Trash2 size={14} />
                                             </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </button>
                    )
                })}
             </div>
          </div>
        ))}
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-fade-in relative">
                  <button 
                    onClick={() => { setShowAuthModal(false); setAuthError(false); setPasswordInput(''); }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                      <X size={24} />
                  </button>
                  
                  <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                          <Lock size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Studio Mode</h3>
                      <p className="text-gray-500 text-sm">Enter password to record custom audio.</p>
                  </div>

                  <form onSubmit={handleAuthSubmit}>
                      <input 
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Password"
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all mb-4 text-center"
                        autoFocus
                      />
                      {authError && <p className="text-red-500 text-sm font-bold text-center mb-4">Incorrect Password!</p>}
                      
                      <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all"
                      >
                          Unlock Studio
                      </button>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default LearnChart;
