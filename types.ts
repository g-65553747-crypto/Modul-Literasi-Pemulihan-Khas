
export interface SyllableGroup {
  consonant: string;
  items: string[];
}

export enum GameMode {
  // Main Dashboard
  HOME = 'HOME',

  // Curriculum Categories
  SUKU_KATA = 'SUKU_KATA',
  PERKATAAN_KV = 'PERKATAAN_KV',
  PERKATAAN_KVK = 'PERKATAAN_KVK',
  PERKATAAN_KVKK = 'PERKATAAN_KVKK',
  PERKATAAN_DIFTONG = 'PERKATAAN_DIFTONG',
  PERKATAAN_DIGRAF = 'PERKATAAN_DIGRAF',
  BACAAN = 'BACAAN',

  // Internal Game States (accessed via Games Hub or specific flows)
  QUIZ = 'QUIZ',
  MEMORY = 'MEMORY',
  BUBBLES = 'BUBBLES',
  BUILDER = 'BUILDER',
  STATS = 'STATS',
  GAMES_HUB = 'GAMES_HUB',
  SENTENCE_ARRANGE = 'SENTENCE_ARRANGE',
  
  // Legacy/Internal references (mapped into Perkataan KV manager)
  LEARN = 'LEARN', 
  VKV = 'VKV',
  KVKV = 'KVKV',
  KVKVKV = 'KVKVKV',
}

export type GameCategory = 'KV' | 'VKV' | 'KVKV' | 'KVKVKV';

export interface QuizQuestion {
  correctAnswer: string;
  options: string[];
}

export interface StatData {
  name: string;
  score: number;
  total: number;
}

export interface WordTarget {
  word: string;
  syllables: string[];
  imagePrompt: string;
}