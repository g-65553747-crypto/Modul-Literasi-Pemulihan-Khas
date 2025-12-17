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

// --- Suku Kata KVK (From Image 18, 20, 22) ---
export const KVK_SYLLABLES_DATA: SyllableGroup[] = [
    { consonant: 'a', items: ['bak', 'cal', 'dam', 'fan', 'gah', 'jap', 'kar', 'las', 'mat', 'nak', 'pal', 'ram', 'san', 'tah', 'was', 'yar', 'zat'] },
    { consonant: 'i', items: ['bik', 'cil', 'dim', 'fin', 'gih', 'jip', 'kir', 'lis', 'mit', 'nik', 'pil', 'rim', 'sin', 'tih', 'wis', 'yir', 'zit'] },
    { consonant: 'u', items: ['buk', 'cul', 'dum', 'fun', 'guh', 'jup', 'kur', 'lus', 'mut', 'nuk', 'pul', 'rum', 'sun', 'tuh', 'wus', 'yur', 'zut'] },
    { consonant: 'e', items: ['bek', 'cel', 'dem', 'fen', 'geh', 'jep', 'ker', 'les', 'met', 'nek', 'pel', 'rem', 'sen', 'teh', 'wes', 'yer', 'zet'] },
    { consonant: 'o', items: ['bok', 'col', 'dom', 'fon', 'goh', 'jop', 'kor', 'los', 'mot', 'nok', 'pol', 'rom', 'son', 'toh', 'wos', 'yor', 'zot'] },
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

// --- VKV (V + KV) Module Data ---

export const VKV_WORDS = [
    { word: 'ini', syllables: ['i', 'ni'], image: '👇' },
    { word: 'isi', syllables: ['i', 'si'], image: '🟡' },
    { word: 'ubi', syllables: ['u', 'bi'], image: '🍠' },
    { word: 'itu', syllables: ['i', 'tu'], image: '👉' },
    { word: 'api', syllables: ['a', 'pi'], image: '🔥' },
    { word: 'ibu', syllables: ['i', 'bu'], image: '👩‍👧' },
    { word: 'abu', syllables: ['a', 'bu'], image: '⚫' },
    { word: 'alu', syllables: ['a', 'lu'], image: '🥣' },
    { word: 'emu', syllables: ['e', 'mu'], image: '🐦' },
    { word: 'ulu', syllables: ['u', 'lu'], image: '🔪' },
];

export const VKV_PHRASES = [
    { text: 'ini jari', words: [['i', 'ni'], ['ja', 'ri']], image: '👇' },
    { text: 'tiga isi', words: [['ti', 'ga'], ['i', 'si']], image: '🟡' },
    { text: 'ubi kayu', words: [['u', 'bi'], ['ka', 'yu']], image: '🍠' },
    { text: 'itu api', words: [['i', 'tu'], ['a', 'pi']], image: '🔥' },
    { text: 'kayu api', words: [['ka', 'yu'], ['a', 'pi']], image: '🪵' },
    { text: 'ibu saya', words: [['i', 'bu'], ['sa', 'ya']], image: '👩‍👧' },
    { text: 'abu kayu', words: [['a', 'bu'], ['ka', 'yu']], image: '⚫' },
    { text: 'alu batu', words: [['a', 'lu'], ['ba', 'tu']], image: '🥣' },
    { text: 'kaki emu', words: [['ka', 'ki'], ['e', 'mu']], image: '🐦' },
    { text: 'ulu kayu', words: [['u', 'lu'], ['ka', 'yu']], image: '🔪' },
];

export const VKV_SENTENCES = [
    { text: "Kaki emu ini luka", image: '🩹' },
    { text: "Itu abu kayu", image: '⚫' },
    { text: "Ibu beli ubi kayu", image: '🛍️' },
    { text: "Bapa cari kayu api", image: '🪵' },
    { text: "Ibu saya suka roti", image: '🍞' },
    { text: "Saya suka isi ciku", image: '🍐' },
    { text: "Ini jari bapa Nora", image: '👇' },
    { text: "Ulu ini ulu kayu", image: '🔪' },
    { text: "Alu ini alu batu", image: '🥣' }
];

// --- KVKVKV (KV + KV + KV) Module Data ---

export const KVKVKV_WORDS = [
    { word: 'boneka', syllables: ['bo', 'ne', 'ka'], image: '🧸' },
    { word: 'kerusi', syllables: ['ke', 'ru', 'si'], image: '🪑' },
    { word: 'puteri', syllables: ['pu', 'te', 'ri'], image: '👸' },
    { word: 'kebaya', syllables: ['ke', 'ba', 'ya'], image: '👗' },
    { word: 'rebana', syllables: ['re', 'ba', 'na'], image: '🥁' },
    { word: 'gorila', syllables: ['go', 'ri', 'la'], image: '🦍' },
    { word: 'kemeja', syllables: ['ke', 'me', 'ja'], image: '👔' },
    { word: 'kelapa', syllables: ['ke', 'la', 'pa'], image: '🥥' },
    { word: 'kereta', syllables: ['ke', 're', 'ta'], image: '🚗' },
    { word: 'pelita', syllables: ['pe', 'li', 'ta'], image: '🪔' },
    { word: 'gerudi', syllables: ['ge', 'ru', 'di'], image: '🔫' }, 
    { word: 'lelaki', syllables: ['le', 'la', 'ki'], image: '👨' },
    { word: 'sepatu', syllables: ['se', 'pa', 'tu'], image: '👞' },
    { word: 'peluru', syllables: ['pe', 'lu', 'ru'], image: '💊' },
    { word: 'bateri', syllables: ['ba', 'te', 'ri'], image: '🔋' },
    { word: 'perigi', syllables: ['pe', 'ri', 'gi'], image: '🕳️' },
    { word: 'kelasi', syllables: ['ke', 'la', 'si'], image: '⚓' },
    { word: 'tomato', syllables: ['to', 'ma', 'to'], image: '🍅' },
  ];
  
  export const KVKVKV_PHRASES = [
    { text: 'boneka jari', words: [['bo', 'ne', 'ka'], ['ja', 'ri']], image: '👆' },
    { text: 'kerusi kayu', words: [['ke', 'ru', 'si'], ['ka', 'yu']], image: '🪑' },
    { text: 'puteri lawa', words: [['pu', 'te', 'ri'], ['la', 'wa']], image: '👸' },
    { text: 'kebaya biru', words: [['ke', 'ba', 'ya'], ['bi', 'ru']], image: '👗' },
    { text: 'rebana kayu', words: [['re', 'ba', 'na'], ['ka', 'yu']], image: '🥁' },
    { text: 'kemeja bapa', words: [['ke', 'me', 'ja'], ['ba', 'pa']], image: '👔' },
    { text: 'kelapa muda', words: [['ke', 'la', 'pa'], ['mu', 'da']], image: '🥥' },
    { text: 'kereta bapa', words: [['ke', 're', 'ta'], ['ba', 'pa']], image: '🚗' },
    { text: 'pelita lama', words: [['pe', 'li', 'ta'], ['la', 'ma']], image: '🪔' },
    { text: 'gerudi besi', words: [['ge', 'ru', 'di'], ['be', 'si']], image: '🔫' },
    { text: 'lelaki kaya', words: [['le', 'la', 'ki'], ['ka', 'ya']], image: '👨' },
    { text: 'sepatu baru', words: [['se', 'pa', 'tu'], ['ba', 'ru']], image: '👞' },
    { text: 'bateri lama', words: [['ba', 'te', 'ri'], ['la', 'ma']], image: '🔋' },
    { text: 'perigi batu', words: [['pe', 'ri', 'gi'], ['ba', 'tu']], image: '🕳️' },
    { text: 'kelasi muda', words: [['ke', 'la', 'si'], ['mu', 'da']], image: '⚓' },
  ];
  
  export const KVKVKV_SENTENCES = [
    { text: "Siti suka boneka jari", image: '👆' },
    { text: "Nora beli kerusi kayu", image: '🪑' },
    { text: "Puteri raja itu lawa", image: '👸' },
    { text: "Bapa beli rebana kayu", image: '🥁' },
    { text: "Gorila suka makan ceri", image: '🦍' },
    { text: "Bapa beli kemeja biru", image: '👔' },
    { text: "Noni beli kelapa muda", image: '🥥' },
    { text: "Ibu cuci kebaya biru", image: '👗' },
    { text: "Bapa bawa kereta biru", image: '🚗' },
    { text: "Ali beli pelita lama", image: '🪔' },
    { text: "Lelaki kaya beli kereta", image: '👨' },
    { text: "Kelasi muda bawa kelapa", image: '⚓' },
    { text: "Bapa beli bateri baru", image: '🔋' },
    { text: "Lelaki itu ada gerudi", image: '🔫' },
    { text: "Ibu suka sepatu baru", image: '👞' },
    { text: "Perigi batu itu ada air", image: '🕳️' }
  ];

// --- KVK Module Data ---
export const KVK_DATA_WORDS = [
    { word: 'cat', syllables: ['cat'], image: '🎨' },
    { word: 'beg', syllables: ['beg'], image: '🎒' },
    { word: 'jip', syllables: ['jip'], image: '🚙' },
    { word: 'pin', syllables: ['pin'], image: '🧷' },
    { word: 'kad', syllables: ['kad'], image: '🃏' },
    { word: 'tin', syllables: ['tin'], image: '🥫' },
    { word: 'bot', syllables: ['bot'], image: '🚤' },
    { word: 'kot', syllables: ['kot'], image: '🧥' },
    { word: 'pam', syllables: ['pam'], image: '⛽' },
    { word: 'kek', syllables: ['kek'], image: '🎂' }
];
export const KVK_DATA_PHRASES = [
    { text: 'pin baju', words: [['pin'], ['ba', 'ju']], image: '🧷' },
    { text: 'beg bayi', words: [['beg'], ['ba', 'yi']], image: '🎒' },
    { text: 'kot guru', words: [['kot'], ['gu', 'ru']], image: '🧥' },
    { text: 'tin susu', words: [['tin'], ['su', 'su']], image: '🥫' },
    { text: 'kek mama', words: [['kek'], ['ma', 'ma']], image: '🎂' },
    { text: 'kad biru', words: [['kad'], ['bi', 'ru']], image: '🃏' },
    { text: 'jip baharu', words: [['jip'], ['ba', 'ha', 'ru']], image: '🚙' },
    { text: 'bot laju', words: [['bot'], ['la', 'ju']], image: '🚤' }
];
export const KVK_DATA_SENTENCES = [
    { text: 'Dani suka sup ayam.', image: '🍲' },
    { text: 'Saya suka jus oren.', image: '🍊' },
    { text: 'Ayah beli rak buku.', image: '📚' },
    { text: 'Nani ada pin baju.', image: '🧷' },
    { text: 'Ini kek hari jadi adik.', image: '🎂' },
    { text: 'Sani cat van baharu.', image: '🚐' },
    { text: 'Ini bot laju.', image: '🚤' },
    { text: 'Ini kot guru.', image: '🧥' },
    { text: 'Ini beg bayi.', image: '🎒' },
    { text: 'Ini jip baharu.', image: '🚙' },
    { text: 'Rumah saya ada rak buku.', image: '🏠' },
    { text: 'Bapa beri kad hari jadi.', image: '🃏' },
    { text: 'Ibu beli satu tin susu.', image: '🥫' },
    { text: 'Abang guna pam basikal.', image: '⛽' }
];

// --- V+KVK Module Data ---
export const V_KVK_WORDS = [
    { word: 'itik', syllables: ['i', 'tik'], image: '🦆' },
    { word: 'ikan', syllables: ['i', 'kan'], image: '🐟' },
    { word: 'otot', syllables: ['o', 'tot'], image: '💪' },
    { word: 'asap', syllables: ['a', 'sap'], image: '💨' },
    { word: 'emas', syllables: ['e', 'mas'], image: '🥇' },
    { word: 'obor', syllables: ['o', 'bor'], image: '🔥' },
    { word: 'ekor', syllables: ['e', 'kor'], image: '🐎' },
    { word: 'awan', syllables: ['a', 'wan'], image: '☁️' },
    { word: 'ubat', syllables: ['u', 'bat'], image: '💊' },
    { word: 'ulat', syllables: ['u', 'lat'], image: '🐛' }
];
export const V_KVK_PHRASES = [
    { text: 'ekor kuda', words: [['e', 'kor'], ['ku', 'da']], image: '🐎' },
    { text: 'obor api', words: [['o', 'bor'], ['a', 'pi']], image: '🔥' },
    { text: 'imam muda', words: [['i', 'mam'], ['mu', 'da']], image: '👳' },
    { text: 'ular sawa', words: [['u', 'lar'], ['sa', 'wa']], image: '🐍' },
    { text: 'asap kereta', words: [['a', 'sap'], ['ke', 're', 'ta']], image: '💨' },
    { text: 'ulat bulu', words: [['u', 'lat'], ['bu', 'lu']], image: '🐛' },
    { text: 'ikan emas', words: [['i', 'kan'], ['e', 'mas']], image: '🐟' },
    { text: 'ubat ibu', words: [['u', 'bat'], ['i', 'bu']], image: '💊' },
    { text: 'akar kayu', words: [['a', 'kar'], ['ka', 'yu']], image: '🌳' },
    { text: 'atap biru', words: [['a', 'tap'], ['bi', 'ru']], image: '🏠' }
];
export const V_KVK_SENTENCES = [
    { text: 'Ayah beli akar kayu.', image: '🌳' },
    { text: 'Iman bela ikan emas.', image: '🐟' },
    { text: 'Saya takut ular sawa.', image: '🐍' },
    { text: 'Ini obor api.', image: '🔥' },
    { text: 'Asap kereta ayah.', image: '💨' },
    { text: 'Ekor kuda ini cantik.', image: '🐎' },
    { text: 'Itik ini suka makan nasi.', image: '🦆' },
    { text: 'Abang tunjuk otot lengan.', image: '💪' },
    { text: 'Awan putih di langit biru.', image: '☁️' },
    { text: 'Adik makan ubat batuk.', image: '💊' },
    { text: 'Ada ulat bulu atas daun.', image: '🐛' },
    { text: 'Pokok ini ada akar tunjang.', image: '🌳' },
    { text: 'Ular sawa itu besar.', image: '🐍' },
    { text: 'Atap rumah itu warna biru.', image: '🏠' },
    { text: 'Adik ada enam ekor ikan.', image: '6️⃣' },
    { text: 'Kakak suka makan epal merah.', image: '🍎' }
];

// --- KV+KVK Module Data ---
export const KV_KVK_WORDS = [
    { word: 'lobak', syllables: ['lo', 'bak'], image: '🥕' },
    { word: 'kipas', syllables: ['ki', 'pas'], image: '💨' },
    { word: 'bakul', syllables: ['ba', 'kul'], image: '🧺' },
    { word: 'bedak', syllables: ['be', 'dak'], image: '💄' },
    { word: 'tikar', syllables: ['ti', 'kar'], image: '🖼️' },
    { word: 'botol', syllables: ['bo', 'tol'], image: '🍾' },
    { word: 'katil', syllables: ['ka', 'til'], image: '🛏️' },
    { word: 'telur', syllables: ['te', 'lur'], image: '🥚' },
    { word: 'kolam', syllables: ['ko', 'lam'], image: '🏊' },
    { word: 'kasut', syllables: ['ka', 'sut'], image: '👟' }
];
export const KV_KVK_PHRASES = [
    { text: 'lobak merah', words: [['lo', 'bak'], ['me', 'rah']], image: '🥕' },
    { text: 'kipas meja', words: [['ki', 'pas'], ['me', 'ja']], image: '💨' },
    { text: 'bakul rotan', words: [['ba', 'kul'], ['ro', 'tan']], image: '🧺' },
    { text: 'bedak muka', words: [['be', 'dak'], ['mu', 'ka']], image: '💄' },
    { text: 'tikar opah', words: [['ti', 'kar'], ['o', 'pah']], image: '🖼️' },
    { text: 'botol kaca', words: [['bo', 'tol'], ['ka', 'ca']], image: '🍾' },
    { text: 'katil kayu', words: [['ka', 'til'], ['ka', 'yu']], image: '🛏️' },
    { text: 'telur ayam', words: [['te', 'lur'], ['a', 'yam']], image: '🥚' },
    { text: 'kolam mandi', words: [['ko', 'lam'], ['man', 'di']], image: '🏊' },
    { text: 'kasut sukan', words: [['ka', 'sut'], ['su', 'kan']], image: '👟' }
];
export const KV_KVK_SENTENCES = [
    { text: 'Amin beli kipas meja baharu.', image: '💨' },
    { text: 'Bakul rotan ini besar.', image: '🧺' },
    { text: 'Ayah beli katil kayu baharu.', image: '🛏️' },
    { text: 'Zati suka makan lobak merah.', image: '🥕' },
    { text: 'Telur ayam nenek pecah.', image: '🥚' },
    { text: 'Kasut sukan saya hitam.', image: '👟' },
    { text: 'Ibu sapu bedak pada muka adik.', image: '💄' },
    { text: 'Nenek bentang tikar mengkuang.', image: '🖼️' },
    { text: 'Ini botol kaca kakak.', image: '🍾' },
    { text: 'Adik mandi di dalam kolam.', image: '🏊' },
    { text: 'Cawan kopi bapa pecah.', image: '☕' },
    { text: 'Saya nampak gajah di zoo.', image: '🐘' },
    { text: 'Pak Malau masuk hutan tebal.', image: '🌳' },
    { text: 'Bapa tanam pokok bunga.', image: '🌻' }
];

// --- KVK+KV Module Data ---
export const KVK_KV_WORDS = [
    { word: 'baldi', syllables: ['bal', 'di'], image: '🪣' },
    { word: 'lampu', syllables: ['lam', 'pu'], image: '💡' },
    { word: 'cikgu', syllables: ['cik', 'gu'], image: '👩‍🏫' },
    { word: 'lembu', syllables: ['lem', 'bu'], image: '🐄' },
    { word: 'garpu', syllables: ['gar', 'pu'], image: '🍴' },
    { word: 'jambu', syllables: ['jam', 'bu'], image: '🍎' },
    { word: 'kunci', syllables: ['kun', 'ci'], image: '🔑' },
    { word: 'kanta', syllables: ['kan', 'ta'], image: '🔍' },
    { word: 'pintu', syllables: ['pin', 'tu'], image: '🚪' },
    { word: 'gincu', syllables: ['gin', 'cu'], image: '💄' }
];
export const KVK_KV_PHRASES = [
    { text: 'kunci bilik', words: [['kun', 'ci'], ['bi', 'lik']], image: '🔑' },
    { text: 'gincu merah', words: [['gin', 'cu'], ['me', 'rah']], image: '💄' },
    { text: 'pintu kayu', words: [['pin', 'tu'], ['ka', 'yu']], image: '🚪' },
    { text: 'lampu tidur', words: [['lam', 'pu'], ['ti', 'dur']], image: '💡' },
    { text: 'lembu jinak', words: [['lem', 'bu'], ['ji', 'nak']], image: '🐄' },
    { text: 'cikgu muda', words: [['cik', 'gu'], ['mu', 'da']], image: '👩‍🏫' },
    { text: 'baldi kecil', words: [['bal', 'di'], ['ke', 'cil']], image: '🪣' },
    { text: 'jambu manis', words: [['jam', 'bu'], ['ma', 'nis']], image: '🍎' },
    { text: 'sayur bendi', words: [['sa', 'yur'], ['ben', 'di']], image: '🥬' },
    { text: 'panda comel', words: [['pan', 'da'], ['co', 'mel']], image: '🐼' }
];
export const KVK_KV_SENTENCES = [
    { text: 'Emak masak sayur bendi.', image: '🥬' },
    { text: 'Afifah suka makan jambu.', image: '🍎' },
    { text: 'Itu lampu tidur kakak.', image: '💡' },
    { text: 'Saya lihat panda comel di zoo.', image: '🐼' },
    { text: 'Tok Haji bela lembu gemuk.', image: '🐄' },
    { text: 'Zaki letak kunci bilik atas meja.', image: '🔑' },
    { text: 'Bapa isi air dalam baldi.', image: '🪣' },
    { text: 'Cikgu Siti ajar Bahasa Melayu.', image: '👩‍🏫' },
    { text: 'Kakak makan guna sudu dan garpu.', image: '🍴' },
    { text: 'Datuk baca guna kanta pembesar.', image: '🔍' },
    { text: 'Tolong tutup pintu itu.', image: '🚪' },
    { text: 'Ibu beli gincu merah.', image: '💄' },
    { text: 'Adik mandi guna sabun wangi.', image: '🧼' },
    { text: 'Abang kerja sebagai ahli bomba.', image: '🚒' }
];

// --- KVK+KVK Module Data ---
export const KVK_KVK_WORDS = [
    { word: 'lastik', syllables: ['las', 'tik'], image: '🪵' },
    { word: 'masjid', syllables: ['mas', 'jid'], image: '🕌' },
    { word: 'doktor', syllables: ['dok', 'tor'], image: '👨‍⚕️' },
    { word: 'cincin', syllables: ['cin', 'cin'], image: '💍' },
    { word: 'lampin', syllables: ['lam', 'pin'], image: '👶' },
    { word: 'kaktus', syllables: ['kak', 'tus'], image: '🌵' },
    { word: 'mancis', syllables: ['man', 'cis'], image: '🔥' },
    { word: 'landak', syllables: ['lan', 'dak'], image: '🦔' },
    { word: 'bantal', syllables: ['ban', 'tal'], image: '🛌' },
    { word: 'pensel', syllables: ['pen', 'sel'], image: '✏️' }
];
export const KVK_KVK_PHRASES = [
    { text: 'lampin adik', words: [['lam', 'pin'], ['a', 'dik']], image: '👶' },
    { text: 'cincin emas', words: [['cin', 'cin'], ['e', 'mas']], image: '💍' },
    { text: 'bantal putih', words: [['ban', 'tal'], ['pu', 'tih']], image: '🛌' },
    { text: 'anak landak', words: [['a', 'nak'], ['lan', 'dak']], image: '🦔' },
    { text: 'pokok kaktus', words: [['po', 'kok'], ['kak', 'tus']], image: '🌵' },
    { text: 'pensel biru', words: [['pen', 'sel'], ['bi', 'ru']], image: '✏️' },
    { text: 'doktor gigi', words: [['dok', 'tor'], ['gi', 'gi']], image: '👨‍⚕️' },
    { text: 'lastik kayu', words: [['las', 'tik'], ['ka', 'yu']], image: '🪵' },
    { text: 'masjid besar', words: [['mas', 'jid'], ['be', 'sar']], image: '🕌' },
    { text: 'mancis api', words: [['man', 'cis'], ['a', 'pi']], image: '🔥' }
];
export const KVK_KVK_SENTENCES = [
    { text: 'Adam ada lastik kayu.', image: '🪵' },
    { text: 'Anak landak ada duri tajam.', image: '🦔' },
    { text: 'Cincin emas emak cantik.', image: '💍' },
    { text: 'Adik takut jumpa doktor gigi.', image: '👨‍⚕️' },
    { text: 'Kakak tanam pokok kaktus.', image: '🌵' },
    { text: 'Masjid besar itu indah.', image: '🕌' },
    { text: 'Ibu tukar lampin adik.', image: '👶' },
    { text: 'Jangan main mancis api.', image: '🔥' },
    { text: 'Bantal tidur ini sangat lembut.', image: '🛌' },
    { text: 'Pensel tulis saya patah.', image: '✏️' },
    { text: 'Nelayan itu dayung sampan.', image: '🚣' },
    { text: 'Kambing suka makan rumput.', image: '🐐' },
    { text: 'Adik suka makan biskut coklat.', image: '🍪' },
    { text: 'Kek coklat ini sedap.', image: '🍫' }
];

// --- KV+KV+KVK Module Data ---
export const KV_KV_KVK_WORDS = [
    { word: 'sekolah', syllables: ['se', 'ko', 'lah'], image: '🏫' },
    { word: 'kelawar', syllables: ['ke', 'la', 'war'], image: '🦇' },
    { word: 'telefon', syllables: ['te', 'le', 'fon'], image: '☎️' },
    { word: 'basikal', syllables: ['ba', 'si', 'kal'], image: '🚲' },
    { word: 'mekanik', syllables: ['me', 'ka', 'nik'], image: '👨‍🔧' },
    { word: 'ketupat', syllables: ['ke', 'tu', 'pat'], image: '🍙' },
    { word: 'zirafah', syllables: ['zi', 'ra', 'fah'], image: '🦒' },
    { word: 'selipar', syllables: ['se', 'li', 'par'], image: '🩴' },
    { word: 'keropok', syllables: ['ke', 'ro', 'pok'], image: '🍟' },
    { word: 'pemadam', syllables: ['pe', 'ma', 'dam'], image: '🧼' }
];
export const KV_KV_KVK_PHRASES = [
    { text: 'sekolah adik', words: [['se', 'ko', 'lah'], ['a', 'dik']], image: '🏫' },
    { text: 'kelawar besar', words: [['ke', 'la', 'war'], ['be', 'sar']], image: '🦇' },
    { text: 'telefon rumah', words: [['te', 'le', 'fon'], ['ru', 'mah']], image: '☎️' },
    { text: 'basikal kakak', words: [['ba', 'si', 'kal'], ['ka', 'kak']], image: '🚲' },
    { text: 'keropok lekor', words: [['ke', 'ro', 'pok'], ['le', 'kor']], image: '🍟' },
    { text: 'ketupat palas', words: [['ke', 'tu', 'pat'], ['pa', 'las']], image: '🍙' },
    { text: 'zirafah tidur', words: [['zi', 'ra', 'fah'], ['ti', 'dur']], image: '🦒' },
    { text: 'selipar lelaki', words: [['se', 'li', 'par'], ['le', 'la', 'ki']], image: '🩴' },
    { text: 'pemadam pensel', words: [['pe', 'ma', 'dam'], ['pen', 'sel']], image: '🧼' },
    { text: 'mekanik kereta', words: [['me', 'ka', 'nik'], ['ke', 're', 'ta']], image: '👨‍🔧' }
];
export const KV_KV_KVK_SENTENCES = [
    { text: 'Mekanik kereta itu jujur.', image: '👨‍🔧' },
    { text: 'Zirafah tidur lena.', image: '🦒' },
    { text: 'Siti ada pemadam pensel baharu.', image: '🧼' },
    { text: 'Ibu membeli ketupat palas.', image: '🍙' },
    { text: 'Basikal kakak berwarna biru.', image: '🚲' },
    { text: 'Mimi suka makan keropok lekor.', image: '🍟' },
    { text: 'Saya pergi ke sekolah setiap hari.', image: '🏫' },
    { text: 'Kelawar keluar pada waktu malam.', image: '🦇' },
    { text: 'Bapa jawab panggilan telefon.', image: '☎️' },
    { text: 'Selipar Jepun ini murah.', image: '🩴' },
    { text: 'Belalang lompat atas rumput.', image: '🦗' },
    { text: 'Adik mandi guna pelampung.', image: '⭕' },
    { text: 'Abang lihat burung guna teropong.', image: '🔭' }
];

// --- KVK+KV+KVK Module Data ---
export const KVK_KV_KVK_WORDS = [
    { word: 'rambutan', syllables: ['ram', 'bu', 'tan'], image: '🔴' },
    { word: 'jambatan', syllables: ['jam', 'ba', 'tan'], image: '🌉' },
    { word: 'cempedak', syllables: ['cem', 'pe', 'dak'], image: '🍈' },
    { word: 'komputer', syllables: ['kom', 'pu', 'ter'], image: '💻' },
    { word: 'hospital', syllables: ['hos', 'pi', 'tal'], image: '🏥' },
    { word: 'pembaris', syllables: ['pem', 'ba', 'ris'], image: '📏' },
    { word: 'marjerin', syllables: ['mar', 'je', 'rin'], image: '🧈' },
    { word: 'cendawan', syllables: ['cen', 'da', 'wan'], image: '🍄' },
    { word: 'mempelam', syllables: ['mem', 'pe', 'lam'], image: '🥭' },
    { word: 'pencetak', syllables: ['pen', 'ce', 'tak'], image: '🖨️' }
];
export const KVK_KV_KVK_PHRASES = [
    { text: 'rambutan nenek', words: [['ram', 'bu', 'tan'], ['ne', 'nek']], image: '🔴' },
    { text: 'jambatan kecil', words: [['jam', 'ba', 'tan'], ['ke', 'cil']], image: '🌉' },
    { text: 'cempedak madu', words: [['cem', 'pe', 'dak'], ['ma', 'du']], image: '🍈' },
    { text: 'komputer riba', words: [['kom', 'pu', 'ter'], ['ri', 'ba']], image: '💻' },
    { text: 'hospital besar', words: [['hos', 'pi', 'tal'], ['be', 'sar']], image: '🏥' },
    { text: 'pembaris besi', words: [['pem', 'ba', 'ris'], ['be', 'si']], image: '📏' },
    { text: 'pasu tembikar', words: [['pa', 'su'], ['tem', 'bi', 'kar']], image: '🏺' },
    { text: 'cendawan putih', words: [['cen', 'da', 'wan'], ['pu', 'tih']], image: '🍄' },
    { text: 'mempelam manis', words: [['mem', 'pe', 'lam'], ['ma', 'nis']], image: '🥭' },
    { text: 'pencetak komputer', words: [['pen', 'ce', 'tak'], ['kom', 'pu', 'ter']], image: '🖨️' }
];
export const KVK_KV_KVK_SENTENCES = [
    { text: 'Jambatan kecil itu pendek.', image: '🌉' },
    { text: 'Rambutan nenek manis.', image: '🔴' },
    { text: 'Hospital besar ada doktor pakar.', image: '🏥' },
    { text: 'Faridah membeli komputer riba.', image: '💻' },
    { text: 'Pencetak komputer warna hitam.', image: '🖨️' },
    { text: 'Datuk menanam cendawan putih.', image: '🍄' },
    { text: 'Bau buah cempedak itu harum.', image: '🍈' },
    { text: 'Cikgu ukur guna pembaris besi.', image: '📏' },
    { text: 'Ibu sapu marjerin pada roti.', image: '🧈' },
    { text: 'Rasa buah mempelam ini masam.', image: '🥭' },
    { text: 'Jururawat itu sangat baik.', image: '👩‍⚕️' },
    { text: 'Buah tembikai itu warna merah.', image: '🍉' },
    { text: 'Ini kombinasi warna yang cantik.', image: '🎨' }
];