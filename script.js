// ==========================================
// 1. بنك الكلمات الإنجليزية (80 كلمة لكل مستوى)
// ==========================================

const wordsEasy = [
  "cat", "dog", "sun", "moon", "star", "book", "pen", "door", "tree", "fish",
  "bird", "park", "rain", "wind", "snow", "fire", "blue", "red", "green", "fast",
  "slow", "glad", "happy", "cool", "warm", "cold", "dark", "light", "high", "low",
  "soft", "hard", "pure", "rich", "free", "good", "best", "love", "hope", "life",
  "time", "year", "day", "night", "city", "home", "road", "ship", "boat", "car",
  "bike", "bus", "train", "game", "play", "run", "jump", "walk", "sing", "read",
  "draw", "work", "help", "mind", "soul", "hero", "team", "goal", "win", "smile",
  "dream", "peace", "trust", "power", "brave", "smart", "sweet", "fresh", "clear", "shine"
];

const wordsMedium = [
  "action", "beauty", "camera", "castle", "chance", "change", "choice", "clever", "coffee", "common",
  "damage", "danger", "degree", "design", "detail", "doctor", "dragon", "effect", "energy", "engine",
  "escape", "famous", "flight", "forest", "future", "garden", "global", "growth", "health", "honest",
  "impact", "island", "journey", "leader", "legend", "lesson", "memory", "modern", "moment", "motion",
  "muscle", "nature", "number", "option", "origin", "planet", "player", "practice", "profit", "project",
  "public", "reason", "record", "result", "reward", "safety", "school", "search", "season", "secret",
  "shadow", "signal", "simple", "social", "spirit", "stable", "status", "stream", "street", "strong",
  "studio", "system", "target", "theory", "travel", "unique", "valley", "vision", "winner", "wisdom"
];

const wordsHard = [
  "algorithm", "architecture", "background", "blockchain", "calculation", "capability", "challenge", "collection", "commitment", "communication",
  "comparison", "complexity", "connection", "consequence", "continuous", "coordinate", "cybersecurity", "database", "declaration", "definition",
  "development", "dictionary", "different", "difficulty", "efficiency", "electronic", "engineering", "enterprise", "environment", "evaluation",
  "exception", "experience", "expression", "foundation", "framework", "generation", "horizontal", "identifier", "imagination", "implementation",
  "impression", "independence", "information", "infrastructure", "innovation", "inspiration", "integration", "intelligence", "interaction", "interactive",
  "investment", "leadership", "management", "mechanical", "methodology", "motivation", "navigation", "networking", "observation", "optimization",
  "organization", "performance", "perspective", "possibility", "processing", "profession", "programming", "protection", "recognition", "requirement",
  "resolution", "simulation", "software", "structural", "sustainability", "systematics", "technology", "traditional", "visualization", "vocabulary"
];

// ==========================================
// 2. بنك النصوص الإنجليزية (مقسم حسب المستوى)
// ==========================================

const textsEasy = [
  "The sun is hot today.",
  "I see a big blue car.",
  "Cats love to drink fresh milk.",
  "We like to play in the park.",
  "Open the front door please.",
  "She has a nice red hat.",
  "Birds fly high in the sky.",
  "I love to read good books.",
  "Fish swim fast in the river.",
  "Always do your best today."
];

const textsMedium = [
  "Practice makes progress when you work hard every single day.",
  "Technology connects people across long distances in a few seconds.",
  "A journey of a thousand miles begins with a single simple step.",
  "Spending time in nature brings peace and clarity to a busy mind.",
  "Learning a new language expands your horizon and improves memory.",
  "Consistency is the key secret to mastering typing speed and accuracy.",
  "Good friends always support you during both good and difficult times.",
  "Setting clear goals helps you stay focused on what really matters most."
];

const textsHard = [
  "Perseverance and continuous dedication are essential ingredients for achieving long-term personal and professional development.",
  "In the modern digital era, understanding computer science principles and software engineering opens unprecedented opportunities.",
  "Environmental sustainability requires collaborative efforts from global organizations, local communities, and conscious individuals.",
  "Critical thinking enables individuals to analyze complex problems, evaluate subtle nuances, and construct evidence-based solutions.",
  "Artificial intelligence is fundamentally transforming traditional industries, reshaping labor markets, and demanding continuous learning.",
  "Mastering typing speed with flawless accuracy requires consistent deliberate practice, proper ergonomics, and persistent effort."
];

// ==========================================
// 3. بنك الكلام التحفيزي (باللغة العربية)
// ==========================================

const motivationalQuotes = [
  "سرعة رهيبة يا بطل! واصل التقدم 🚀",
  "أحسنت! تركيز ودقة عالية جداً 👏",
  "ما شاء الله عليك! أداء أسطوري اليوم 🔥",
  "استمر! أناملك صارت أسرع من البرق ⚡",
  "عاش! كل كلمة تكتبها تزيد من مهاراتك ⭐",
  "كفو عليك! إنجاز ممتاز ومستوى يرفع الرأس 🏆",
  "يا سلام على السرعة والدقة! واصل يا كابتن 🌟",
  "طاقة وإبداع! استمر بنفس الحماس 💪",
  "تركيزك في القمة! واصل الكتابة 🎯"
];

// ==========================================
// 4. ربط عناصر الواجهة (DOM Elements)
// ==========================================

const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const motivationDisplay = document.getElementById("motivation");

// عناصر الإحصائيات (الأغلاط، السرعة، الدقة)
const mistakesDisplay = document.getElementById("mistakes") || document.getElementById("errors");
const speedDisplay = document.getElementById("speed") || document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

const btnEasy = document.getElementById("btnEasy");
const btnMedium = document.getElementById("btnMedium");
const btnHard = document.getElementById("btnHard");

const modeWords = document.getElementById("modeWords");
const modeTexts = document.getElementById("modeTexts");
const modeTwoPlayers = document.getElementById("modeTwoPlayers");
const btnRestart = document.getElementById("btnRestart");

// ==========================================
// 5. حالة اللعبة والإحصائيات (Game State)
// ==========================================

let currentLevel = "easy";
let currentMode = "words"; // 'words', 'texts', 'twoPlayers'
let currentWordList = wordsEasy;
let currentTextList = textsEasy;
let currentTarget = "";

let targetQueue = []; // طابور الكلمات العشوائية المضمونة عدم التكرار

let score = 0;
let mistakes = 0;
let totalTypedChars = 0;
let correctTypedChars = 0;

let timeLeft = 60;
let timeElapsed = 0;
let timerInterval = null;
let isPlaying = false;
let activePlayer = 1;

// ==========================================
// 6. خوارزمية الخلط وعدم التكرار
// ==========================================

// دالة خلط القائمة عشوائياً (Fisher-Yates Shuffle)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// جلب الكلمة/النص التالي بدون أي تكرار
function getNextTarget() {
  if (targetQueue.length === 0) {
    const sourceList = (currentMode === "texts") ? currentTextList : currentWordList;
    targetQueue = shuffleArray(sourceList);
  }
  return targetQueue.pop(); // يسحب الكلمة التالية ويحذفها من الطابور
}

// ==========================================
// 7. منطق التحديث والإحصائيات
// ==========================================

function updateStatsUI() {
  if (scoreDisplay) scoreDisplay.textContent = score;
  if (mistakesDisplay) mistakesDisplay.textContent = mistakes;

  const minutes = timeElapsed / 60;
  const wpm = minutes > 0 ? Math.round((correctTypedChars / 5) / minutes) : 0;
  if (speedDisplay) speedDisplay.textContent = wpm;

  const accuracy = totalTypedChars > 0 ? Math.round((correctTypedChars / totalTypedChars) * 100) : 100;
  if (accuracyDisplay) accuracyDisplay.textContent = accuracy + "%";
}

function updateMotivation() {
  if (motivationDisplay) {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    motivationDisplay.textContent = motivationalQuotes[randomIndex];
  }
}

function setLevel(level) {
  currentLevel = level;

  if (level === "easy") {
    currentWordList = wordsEasy;
    currentTextList = textsEasy;
  } else if (level === "medium") {
    currentWordList = wordsMedium;
    currentTextList = textsMedium;
  } else if (level === "hard") {
    currentWordList = wordsHard;
    currentTextList = textsHard;
  }

  [btnEasy, btnMedium, btnHard].forEach(btn => btn?.classList.remove("active"));
  if (level === "easy") btnEasy?.classList.add("active");
  if (level === "medium") btnMedium?.classList.add("active");
  if (level === "hard") btnHard?.classList.add("active");

  targetQueue = []; // تفريغ الطابور لإعادة الخلط للمستوى الجديد
  restartGame();
}

function showNextTarget() {
  currentTarget = getNextTarget();
  if (wordDisplay) wordDisplay.textContent = currentTarget;
  if (wordInput) wordInput.value = "";
}

function startTimer() {
  if (isPlaying) return;
  isPlaying = true;

  timerInterval = setInterval(() => {
    timeLeft--;
    timeElapsed++;

    if (timerDisplay) timerDisplay.textContent = timeLeft;
    updateStatsUI();

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  isPlaying = false;
  if (wordInput) wordInput.disabled = true;

  const minutes = timeElapsed / 60;
  const finalWpm = minutes > 0 ? Math.round((correctTypedChars / 5) / minutes) : 0;
  const finalAcc = totalTypedChars > 0 ? Math.round((correctTypedChars / totalTypedChars) * 100) : 100;

  if (wordDisplay) {
    wordDisplay.textContent = `انتهى الوقت! النقاط: ${score} | السرعة: ${finalWpm} WPM | الدقة: ${finalAcc}%`;
  }
  if (motivationDisplay) {
    motivationDisplay.textContent = "🏆 أداء رائع جداً! اضغط إعادة التشغيل للبدء من جديد.";
  }
}

function restartGame() {
  clearInterval(timerInterval);
  isPlaying = false;
  score = 0;
  mistakes = 0;
  totalTypedChars = 0;
  correctTypedChars = 0;
  timeLeft = 60;
  timeElapsed = 0;

  targetQueue = []; // إجبار اللعبة على خلط الكلمات من جديد عند كل إعادة تشغيل

  updateStatsUI();
  if (timerDisplay) timerDisplay.textContent = timeLeft;

  if (wordInput) {
    wordInput.disabled = false;
    wordInput.value = "";
    wordInput.focus();
  }
  if (motivationDisplay) motivationDisplay.textContent = "";

  showNextTarget();
}

// ==========================================
// 8. الاستماع للأحداث وحساب الأغلاط والطباعة
// ==========================================

wordInput?.addEventListener("input", () => {
  if (!isPlaying && wordInput.value.length > 0) {
    startTimer();
  }

  const val = wordInput.value;
  totalTypedChars++;

  if (currentTarget.startsWith(val)) {
    correctTypedChars++;
  } else {
    mistakes++;
  }

  if (val.trim() === currentTarget) {
    score += 10;
    updateMotivation();
    showNextTarget();
  }

  updateStatsUI();
});

// أزرار المستويات
btnEasy?.addEventListener("click", () => setLevel("easy"));
btnMedium?.addEventListener("click", () => setLevel("medium"));
btnHard?.addEventListener("click", () => setLevel("hard"));

// أزرار الأنواع
modeWords?.addEventListener("click", () => {
  currentMode = "words";
  targetQueue = [];
  restartGame();
});

modeTexts?.addEventListener("click", () => {
  currentMode = "texts";
  targetQueue = [];
  restartGame();
});

modeTwoPlayers?.addEventListener("click", () => {
  currentMode = "twoPlayers";
  activePlayer = 1;
  targetQueue = [];
  alert("تم تفعيل نمط التحدي لشخصين! يبدأ الآن اللاعب الأول 🎮");
  restartGame();
});

// زر إعادة التشغيل
btnRestart?.addEventListener("click", restartGame);

// البدء التلقائي
setLevel("easy");
