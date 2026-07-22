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
  "يا سلام على السرعة والدقة! واصل يا كابتن 🌟"
];

// ==========================================
// 4. ربط عناصر الواجهة (DOM Elements)
// ==========================================

const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const motivationDisplay = document.getElementById("motivation");

const btnEasy = document.getElementById("btnEasy");
const btnMedium = document.getElementById("btnMedium");
const btnHard = document.getElementById("btnHard");

const modeWords = document.getElementById("modeWords");
const modeTexts = document.getElementById("modeTexts");
const modeTwoPlayers = document.getElementById("modeTwoPlayers");
const btnRestart = document.getElementById("btnRestart");

// ==========================================
// 5. حالة اللعبة (Game State)
// ==========================================

let currentLevel = "easy";
let currentMode = "words"; // 'words' أو 'texts' أو 'twoPlayers'
let currentWordList = wordsEasy;
let currentTextList = textsEasy;
let currentTarget = "";
let score = 0;
let timeLeft = 60;
let timerInterval = null;
let isPlaying = false;
let activePlayer = 1; // لنمط الشخصين

// ==========================================
// 6. منطق اللعبة والربط
// ==========================================

// تغيير المستوى (يغير الكلمات والنصوص فوراً)
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

  // تحديث تمييز الأزرار في الصفحة
  [btnEasy, btnMedium, btnHard].forEach(btn => btn?.classList.remove("active"));
  if (level === "easy") btnEasy?.classList.add("active");
  if (level === "medium") btnMedium?.classList.add("active");
  if (level === "hard") btnHard?.classList.add("active");

  restartGame();
}

// جلب الهدف التالي (كلمة أو نص)
function getNextTarget() {
  if (currentMode === "texts") {
    const randomIndex = Math.floor(Math.random() * currentTextList.length);
    return currentTextList[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * currentWordList.length);
    return currentWordList[randomIndex];
  }
}

// عرض الكلمة/النص في الواجهة
function showNextTarget() {
  currentTarget = getNextTarget();
  if (wordDisplay) wordDisplay.textContent = currentTarget;
  if (wordInput) wordInput.value = "";
}

// بدء العداد التنازلي
function startTimer() {
  if (isPlaying) return;
  isPlaying = true;

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timerDisplay) timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// إنهاء الجولة
function endGame() {
  clearInterval(timerInterval);
  isPlaying = false;
  if (wordInput) wordInput.disabled = true;
  
  if (currentMode === "twoPlayers") {
    if (wordDisplay) wordDisplay.textContent = `انتهى الوقت للاعب ${activePlayer}! مجموع نقاطك: ${score}`;
  } else {
    if (wordDisplay) wordDisplay.textContent = "انتهى الوقت! مجموع نقاطك: " + score;
  }
  
  if (motivationDisplay) motivationDisplay.textContent = "🏆 محاولة رائعة! اضغط إعادة التشغيل للمحاولة مجدداً.";
}

// إعادة تشغيل اللعبة
function restartGame() {
  clearInterval(timerInterval);
  isPlaying = false;
  score = 0;
  timeLeft = 60;

  if (scoreDisplay) scoreDisplay.textContent = score;
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
// 7. الاستماع للأحداث وتفاعل الأزرار
// ==========================================

// متابعة إدخال الكلمات
wordInput?.addEventListener("input", () => {
  if (!isPlaying && wordInput.value.length > 0) {
    startTimer();
  }

  const userText = wordInput.value.trim();

  if (userText === currentTarget) {
    score += 10;
    if (scoreDisplay) scoreDisplay.textContent = score;

    // إظهار تحفيز عربي عشوائي كل 30 نقطة
    if (score % 30 === 0 && motivationDisplay) {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      motivationDisplay.textContent = randomQuote;
    }

    showNextTarget();
  }
});

// أزرار المستويات
btnEasy?.addEventListener("click", () => setLevel("easy"));
btnMedium?.addEventListener("click", () => setLevel("medium"));
btnHard?.addEventListener("click", () => setLevel("hard"));

// أزرار الأنماط
modeWords?.addEventListener("click", () => {
  currentMode = "words";
  restartGame();
});

modeTexts?.addEventListener("click", () => {
  currentMode = "texts";
  restartGame();
});

modeTwoPlayers?.addEventListener("click", () => {
  currentMode = "twoPlayers";
  activePlayer = 1;
  alert("تم تفعيل نمط التحدي لشخصين! يبدأ الآن اللاعب الأول 🎮");
  restartGame();
});

// زر إعادة التشغيل
btnRestart?.addEventListener("click", restartGame);

// بدء اللعبة تلقائياً على المستوى السهل
setLevel("easy");
