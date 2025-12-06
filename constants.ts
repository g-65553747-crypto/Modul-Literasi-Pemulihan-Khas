import { SyllableGroup, WordTarget } from './types';

export const VOWELS = ['a', 'i', 'u', 'e', 'o']; // Simplified for UI, 'e' covers both tones

// Data derived from Image 1 and Image 2
export const SYLLABLE_DATA: SyllableGroup[] = [
  { consonant: 'vowels', items: ['a', 'i', 'u', 'e', 'e', 'o'] },
  { consonant: 'b', items: ['ba', 'bi', 'bu', 'be', 'be', 'bo'] },
  { consonant: 'c', items: ['ca', 'ci', 'cu', 'ce', 'ce', 'co'] },
  { consonant: 'd', items: ['da', 'di', 'du', 'de', 'de', 'do'] },
  { consonant: 'f', items: ['fa', 'fi', 'fu', 'fe', 'fe', 'fo'] },
  { consonant: 'g', items: ['ga', 'gi', 'gu', 'ge', 'ge', 'go'] },
  { consonant: 'h', items: ['ha', 'hi', 'hu', 'he', 'he', 'ho'] },
  { consonant: 'j', items: ['ja', 'ji', 'ju', 'je', 'je', 'jo'] },
  { consonant: 'k', items: ['ka', 'ki', 'ku', 'ke', 'ke', 'ko'] },
  { consonant: 'l', items: ['la', 'li', 'lu', 'le', 'le', 'lo'] },
  { consonant: 'm', items: ['ma', 'mi', 'mu', 'me', 'me', 'mo'] },
  { consonant: 'n', items: ['na', 'ni', 'nu', 'ne', 'ne', 'no'] },
  { consonant: 'p', items: ['pa', 'pi', 'pu', 'pe', 'pe', 'po'] },
  { consonant: 'r', items: ['ra', 'ri', 'ru', 're', 're', 'ro'] },
  { consonant: 's', items: ['sa', 'si', 'su', 'se', 'se', 'so'] },
  { consonant: 't', items: ['ta', 'ti', 'tu', 'te', 'te', 'to'] },
  { consonant: 'w', items: ['wa', 'wi', 'wu', 'we', 'we', 'wo'] },
  { consonant: 'y', items: ['ya', 'yi', 'yu', 'ye', 'ye', 'yo'] },
  { consonant: 'z', items: ['za', 'zi', 'zu', 'ze', 'ze', 'zo'] },
];

export const COLORS = [
  'bg-red-200 text-red-700',
  'bg-orange-200 text-orange-700',
  'bg-amber-200 text-amber-700',
  'bg-green-200 text-green-700',
  'bg-emerald-200 text-emerald-700',
  'bg-teal-200 text-teal-700',
  'bg-cyan-200 text-cyan-700',
  'bg-sky-200 text-sky-700',
  'bg-blue-200 text-blue-700',
  'bg-indigo-200 text-indigo-700',
  'bg-violet-200 text-violet-700',
  'bg-purple-200 text-purple-700',
  'bg-fuchsia-200 text-fuchsia-700',
  'bg-pink-200 text-pink-700',
  'bg-rose-200 text-rose-700',
];

export const WORD_BUILDER_TARGETS: WordTarget[] = [
  { word: 'baju', syllables: ['ba', 'ju'], imagePrompt: 'Clothes' },
  { word: 'bola', syllables: ['bo', 'la'], imagePrompt: 'Ball' },
  { word: 'kaki', syllables: ['ka', 'ki'], imagePrompt: 'Foot' },
  { word: 'mata', syllables: ['ma', 'ta'], imagePrompt: 'Eye' },
  { word: 'susu', syllables: ['su', 'su'], imagePrompt: 'Milk' },
  { word: 'meja', syllables: ['me', 'ja'], imagePrompt: 'Table' },
  { word: 'buku', syllables: ['bu', 'ku'], imagePrompt: 'Book' },
  { word: 'roti', syllables: ['ro', 'ti'], imagePrompt: 'Bread' },
];

// --- KVKV Module Data ---

export const KVKV_WORDS = [
  { word: 'nasi', syllables: ['na', 'si'], image: '🍚' },
  { word: 'pasu', syllables: ['pa', 'su'], image: '🪴' },
  { word: 'topi', syllables: ['to', 'pi'], image: '🧢' },
  { word: 'laci', syllables: ['la', 'ci'], image: '🗄️' },
  { word: 'lori', syllables: ['lo', 'ri'], image: '🚛' },
  { word: 'roti', syllables: ['ro', 'ti'], image: '🍞' },
  { word: 'kera', syllables: ['ke', 'ra'], image: '🐒' },
  { word: 'baju', syllables: ['ba', 'ju'], image: '👕' },
  { word: 'gari', syllables: ['ga', 'ri'], image: '🔗' },
  { word: 'paku', syllables: ['pa', 'ku'], image: '🔩' },
];

export const KVKV_PHRASES = [
  { text: 'guli kaca', words: [['gu', 'li'], ['ka', 'ca']], image: '🔮' },
  { text: 'baju biru', words: [['ba', 'ju'], ['bi', 'ru']], image: '👕' },
  { text: 'topi baru', words: [['to', 'pi'], ['ba', 'ru']], image: '🎩' },
  { text: 'lori batu', words: [['lo', 'ri'], ['ba', 'tu']], image: '🚚' },
  { text: 'meja kayu', words: [['me', 'ja'], ['ka', 'yu']], image: '🪑' },
  { text: 'laci besi', words: [['la', 'ci'], ['be', 'si']], image: '🗄️' },
  { text: 'buku nota', words: [['bu', 'ku'], ['no', 'ta']], image: '📒' },
  { text: 'paku besi', words: [['pa', 'ku'], ['be', 'si']], image: '🔩' },
  { text: 'roti kaya', words: [['ro', 'ti'], ['ka', 'ya']], image: '🥪' },
  { text: 'jari kaki', words: [['ja', 'ri'], ['ka', 'ki']], image: '🦶' },
];

export const KVKV_SENTENCES = [
  { text: "Jali beli lima guli kaca", image: '🔮' },
  { text: "Bapa Nora suka baju biru", image: '👕' },
  { text: "Mama suka guna laci besi", image: '🗄️' },
  { text: "Raju bawa lori batu", image: '🚛' },
  { text: "Noni beli tiga buku nota", image: '📒' },
  { text: "Saya suka topi baru", image: '🧢' },
  { text: "Kuku jari kaki Noni lawa", image: '🦶' },
  { text: "Nora suka roti kaya", image: '🍞' },
  { text: "Bapa beli paku besi", image: '🔩' },
  { text: "Bapa beli meja kayu baru", image: '🪑' }
];