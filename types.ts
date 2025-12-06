
export interface SyllableGroup {
  consonant: string;
  items: string[];
}

export enum GameMode {
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  MEMORY = 'MEMORY',
  BUBBLES = 'BUBBLES',
  BUILDER = 'BUILDER',
  STATS = 'STATS',
  KVKV = 'KVKV',
  GAMES_HUB = 'GAMES_HUB',
  SENTENCE_ARRANGE = 'SENTENCE_ARRANGE'
}

export type GameCategory = 'KV' | 'KVKV';

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