// === قاعدة البيانات الموسعة ===
const wordsDatabase = {
    easy: [
        { word: "cat", meaning: "قطة", example: "The cat is sleeping.", translation: "القطة نائمة." },
        { word: "sun", meaning: "شمس", example: "The sun is bright.", translation: "الشمس ساطعة." },
        { word: "book", meaning: "كتاب", example: "I read a book.", translation: "أنا أقرأ كتاباً." },
        { word: "happy", meaning: "سعيد", example: "Be happy today.", translation: "كن سعيداً اليوم." },
        { word: "moon", meaning: "قمر", example: "The moon looks nice.", translation: "القمر يبدو جميلاً." },
        { word: "smile", meaning: "ابتسامة", example: "Keep smiling.", translation: "استمر بالابتسام." },
        { word: "door", meaning: "باب", example: "Open the door.", translation: "افتح الباب." },
        { word: "tree", meaning: "شجرة", example: "The tree is tall.", translation: "الشجرة طويلة." },
        { word: "water", meaning: "ماء", example: "Drink some water.", translation: "اشرب بعض الماء." },
        { word: "light", meaning: "ضياء / خفيف", example: "Turn on the light.", translation: "شغّل النور." }
    ],
    medium: [
        { word: "friend", meaning: "صديق", example: "You are a good friend.", translation: "أنت صديق جيد." },
        { word: "future", meaning: "مستقبل", example: "Your future is bright.", translation: "مستقبلك مشرق." },
        { word: "journey", meaning: "رحلة", example: "Enjoy the journey.", translation: "استمتع بالرحلة." },
        { word: "believe", meaning: "يؤمن / يثق", example: "Believe in yourself.", translation: "ثق بنفسك." },
        { word: "success", meaning: "نجاح", example: "Hard work brings success.", translation: "العمل الجاد يجلب النجاح." },
        { word: "courage", meaning: "شجاعة", example: "Have the courage to start.", translation: "امتلك الشجاعة للبدء." },
        { word: "freedom", meaning: "حرية", example: "Freedom is precious.", translation: "الحرية قيمة." },
        { word: "patience", meaning: "صبر", example: "Patience brings peace.", translation: "الصبر يجلب السلام." }
    ],
    hard: [
        { word: "extraordinary", meaning: "استثنائي", example: "An extraordinary effort leads to exceptional results.", translation: "جهد استثنائي يؤدي إلى نتائج استثنائية." },
        { word: "perseverance", meaning: "مثابرة / إصرار", example: "Perseverance is the secret of all triumphs.", translation: "المثابرة هي سر كل الانتصارات." },
        { word: "accomplishment", meaning: "إنجاز كبير", example: "Be proud of every single accomplishment.", translation: "كن فخوراً بكل إنجاز تحققه." },
        { word: "sophisticated", meaning: "معقد / متطور", example: "This requires a sophisticated approach.", translation: "هذا يتطلب مقاربة متطورة." },
        { word: "determination", meaning: "عزيمة وإرادة", example: "His determination helped him overcome all obstacles.", translation: "ساعدته عزيمته في التغلب على كل العقبات." }
    ]
};

const textDatabase = {
    easy: [
        { text: "I love learning english.", translation: "أنا أحب تعلم الإنجليزية." },
        { text: "Today is a beautiful day.", translation: "اليوم يوم جميل." },
        { text: "Smile every single day.", translation: "ابتسم في كل يوم." }
    ],
    medium: [
        { text: "Practice every day to get better at speaking.", translation: "تدرب كل يوم لكي تصبح أفضل في التحدث." },
        { text: "Learning step by step makes the process easy.", translation: "التعلم خطوة بخطوة يجعل العملية سهلة." }
    ],
    hard: [
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", translation: "النجاح ليس نهائياً، والفشل ليس قاتلاً: بل الشجاعة للاستمرار هي ما تحسب." },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", translation: "الحد الوحيد لتحقيقنا لأحلامنا غداً سيكون شكوكنا اليوم." }
    ]
};

let currentUser = "";
let selectedLevel = "easy";
let currentItems = [];
let currentIndex = 0;
let errorsCount = 0; // لحساب الأخطاء والدقة

// إدارة التنقل بين الشاشات
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// تسجيل الدخول وإدارة الستريك (Streak) الفعلي
function login(user) {
    currentUser = user;
    updateStreakData(user);
    showDashboard();
}

function updateStreakData(user) {
    const today = new Date().toDateString();
    let userStreak = JSON.parse(localStorage.getItem(`streak_${user}`)) || { count: 0, lastDate: "" };

    if (userStreak.lastDate !== today) {
        // إذا مر يوم جديد، نزيد الستريك
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (userStreak.lastDate === yesterday.toDateString()) {
            userStreak.count += 1;
        } else if (!userStreak.lastDate) {
            userStreak.count = 1;
        }
        userStreak.lastDate = today;
        localStorage.setItem(`streak_${user}`, JSON.stringify(userStreak));
    }

    document.getElementById('streak-count').innerText = userStreak.count;
}

function setLevel(lvl) {
    selectedLevel = lvl;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`lvl-${lvl}`).classList.add('active');
    
    const lvlNames = { easy: "🟢 مبتدئ", medium: "🟡 متوسط", hard: "🔴 متقدم" };
    document.getElementById('level-badge').innerText = lvlNames[lvl];
}

function showDashboard() {
    showScreen('dashboard-page');
    document.getElementById('welcome-msg').innerText = `أهلين ${currentUser} 👋`;
    
    // تحديث عرض الستريك الحالي للشخص
    let userStreak = JSON.parse(localStorage.getItem(`streak_${currentUser}`)) || { count: 1 };
    document.getElementById('streak-count').innerText = userStreak.count;
}

function exitToDashboard() {
    showDashboard();
}

function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// بدء تدريب الكلمات مع العداد الحقيقي
function startWordPractice() {
    currentItems = shuffleArray(wordsDatabase[selectedLevel]);
    currentIndex = 0;
    errorsCount = 0;
    showScreen('practice-page');
    loadWord();
}

function loadWord() {
    const item = currentItems[currentIndex];
    document.getElementById('progress-text').innerText = `الكلمة ${currentIndex + 1} من ${currentItems.length}`;
    document.getElementById('prev-btn').disabled = (currentIndex === 0);

    const input = document.getElementById('type-input');
    input.value = "";
    input.disabled = false;
    input.focus();
    document.getElementById('card-details').style.display = "none";
    renderWordDisplay("");
}

function renderWordDisplay(typed) {
    const target = currentItems[currentIndex].word;
    let html = "";
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
            if (typed[i].toLowerCase() === target[i].toLowerCase()) {
                html += `<span class="char-correct">${target[i]}</span>`;
            } else {
                html += `<span class="char-incorrect">${target[i]}</span>`;
                errorsCount++; // حساب الأخطاء لتحديد الدقة
            }
        } else {
            html += `<span class="char-untyped">${target[i]}</span>`;
        }
    }
    document.getElementById('word-display').innerHTML = html;
}

document.getElementById('type-input').addEventListener('input', (e) => {
    const typed = e.target.value;
    const target = currentItems[currentIndex].word;
    renderWordDisplay(typed);

    if (typed.toLowerCase() === target.toLowerCase()) {
        e.target.disabled = true;
        const obj = currentItems[currentIndex];
        document.getElementById('detail-word').innerText = obj.word;
        document.getElementById('detail-meaning').innerText = obj.meaning;
        document.getElementById('detail-example').innerText = obj.example;
        document.getElementById('detail-translation').innerText = obj.translation;
        document.getElementById('card-details').style.display = "block";
    }
});

function nextWord() {
    currentIndex++;
    if (currentIndex < currentItems.length) {
        loadWord();
    } else {
        showResultSummary();
    }
}

function prevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        loadWord();
    }
}

function skipWord() {
    nextWord();
}

// تدريب النصوص
function startTextPractice() {
    currentItems = shuffleArray(textDatabase[selectedLevel]);
    currentIndex = 0;
    errorsCount = 0;
    showScreen('text-practice-page');
    loadText();
}

function loadText() {
    document.getElementById('text-progress-text').innerText = `النص ${currentIndex + 1} من ${currentItems.length}`;
    document.getElementById('text-prev-btn').disabled = (currentIndex === 0);

    const input = document.getElementById('text-type-input');
    input.value = "";
    input.disabled = false;
    input.focus();
    document.getElementById('text-card-details').style.display = "none";
    renderTextDisplay("");
}

function renderTextDisplay(typed) {
    const target = currentItems[currentIndex].text;
    let html = "";
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
            if (typed[i] === target[i]) {
                html += `<span class="char-correct">${target[i]}</span>`;
            } else {
                html += `<span class="char-incorrect">${target[i]}</span>`;
                errorsCount++;
            }
        } else {
            html += `<span class="char-untyped">${target[i]}</span>`;
        }
    }
    document.getElementById('text-display').innerHTML = html;
}

document.getElementById('text-type-input').addEventListener('input', (e) => {
    const typed = e.target.value;
    const target = currentItems[currentIndex].text;
    renderTextDisplay(typed);

    if (typed === target) {
        e.target.disabled = true;
        document.getElementById('text-translation-detail').innerText = currentItems[currentIndex].translation;
        document.getElementById('text-card-details').style.display = "block";
    }
});

function nextText() {
    currentIndex++;
    if (currentIndex < currentItems.length) {
        loadText();
    } else {
        showResultSummary();
    }
}

function prevText() {
    if (currentIndex > 0) {
        currentIndex--;
        loadText();
    }
}

function skipText() {
    nextText();
}

// عرض ملخص النتائج والدقة والأغراض المنجزة
function showResultSummary() {
    showScreen('result-page');
    const totalTyped = currentItems.length;
    // حساب دقة مبسط بناءً على الأخطاء
    let accuracy = Math.max(0, 100 - (errorsCount * 2)); 
    document.getElementById('result-user-msg').innerHTML = `أنجزت <strong>${totalTyped}</strong> عناصر بنجاح! 🎯<br>نسبة دقتك في الكتابة: <strong>${accuracy}%</strong>`;
}
