
const DB_NAME = 'CeriaSukuKataDB';
const STORE_NAME = 'audioStore';
const DB_VERSION = 1;

// --- IndexedDB Helper Functions ---

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
};

export const saveRecording = async (syllable: string, blob: Blob): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(blob, syllable);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

export const getRecording = async (syllable: string): Promise<Blob | null> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(syllable);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
};

export const deleteRecording = async (syllable: string): Promise<void> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(syllable);
  
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  };

// --- TTS Logic (Fallback) ---

const speakTTS = (text: string) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  
  const voices = window.speechSynthesis.getVoices();
  const malayVoice = voices.find(v => v.lang === 'ms-MY') || 
                     voices.find(v => v.lang === 'id-ID') ||
                     voices.find(v => v.lang.startsWith('ms')) ||
                     voices.find(v => v.lang.startsWith('id'));

  if (malayVoice) {
    utterance.voice = malayVoice;
  }

  utterance.rate = 0.8; 
  utterance.pitch = 1.1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

// --- Main Play Function ---

export const speak = async (text: string) => {
  try {
    // 1. Try to get custom recording
    const blob = await getRecording(text);
    
    if (blob) {
      // 2. Play custom recording
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => URL.revokeObjectURL(audioUrl);
    } else {
      // 3. Fallback to TTS
      speakTTS(text);
    }
  } catch (error) {
    console.error("Error playing audio:", error);
    speakTTS(text);
  }
};

// Pre-load voices
if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
}
